import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, cpSync } from 'fs';
import { resolve, join, sep } from 'path';
import { parseHTML } from 'linkedom';

/**
 * Safe error to string conversion
 * @param {unknown} err
 * @returns {string}
 */
function stringifyError(err) {
  if (!err) return String(err);
  if (typeof err === 'string') return err;
  if (err instanceof Error) return err.message;
  try {
    return JSON.stringify(err);
  } catch (e) {
    return String(err);
  }
}

// Utilities (defaults — can be overridden via CLI args)
const DEFAULT_SITE_DIR = './site';
const DEFAULT_PACKAGES_DIR = './packages';
const DEFAULT_DEV_NAME = 'dev';

/**
 * Very small CLI parser
 * @param {string[]} argv
 */
function parseArgs(argv = []) {
  const opts = {
    dryRun: false,
    verbose: false,
    siteDir: DEFAULT_SITE_DIR,
    packagesDir: DEFAULT_PACKAGES_DIR,
    devName: DEFAULT_DEV_NAME,
    help: false,
  };

  argv.forEach((arg) => {
    if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--verbose') opts.verbose = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg.startsWith('--site-dir=')) opts.siteDir = arg.split('=')[1];
    else if (arg.startsWith('--packages-dir=')) opts.packagesDir = arg.split('=')[1];
    else if (arg.startsWith('--dev-name=')) opts.devName = arg.split('=')[1];
  });

  return opts;
}

/**
 * Load or create an index.html template
 * @param {string} indexHtmlPath
 */
function loadIndexTemplate(indexHtmlPath) {
  const defaultHtml = `<!DOCTYPE html><html lang="en"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="All Demos - blockquote-web-components">
    <link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml">
    <title>Blockquote - Web Components</title>
  </head>
  <body>
    <h1 class="title">Blockquote - Web Components</h1>
    <hr />
  </body></html>`;

  const html = existsSync(indexHtmlPath) ? readFileSync(indexHtmlPath, 'utf8') : defaultHtml;
  const { document } = parseHTML(html);
  // Reset the list to avoid duplicates across runs
  document.querySelectorAll('ol').forEach((ol) => ol.remove());
  if (!document.body) {
    document.documentElement.insertAdjacentHTML('beforeend', '<body></body>');
  }
  const ol = document.createElement('ol');
  document.body.append(ol);
  return document;
}

function getAllDev(
  dirPath = DEFAULT_PACKAGES_DIR,
  /** @type {Array<any>} */ arrayOfDevDirectories = [],
  DEVDIRECTORY = DEFAULT_DEV_NAME
) {
  const basePath = readdirSync(dirPath);
  const basePathFiltered = basePath.filter((bp) => !bp.startsWith('.'));

  basePathFiltered.forEach((fileOrDirectory) => {
    const fullPath = join(dirPath, fileOrDirectory);
    const statType = statSync(fullPath);
    if (!statType.isDirectory()) return;

    if (fileOrDirectory === DEVDIRECTORY) {
      const devBasePathObject = join(dirPath, fileOrDirectory);

      arrayOfDevDirectories.push({
        devDirectory: devBasePathObject,
        devDirectoryName: join(devBasePathObject, '..').split(sep).pop(),
        devDirectoryCategory: join(devBasePathObject, '..', '..')
          .split(sep)
          .pop(),
      });
    } else {
      getAllDev(fullPath, arrayOfDevDirectories, DEVDIRECTORY);
    }
  });

  return arrayOfDevDirectories;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.help) {
    console.log(`Usage: node move-dev-directory.js [options]\n\nOptions:\n  --dry-run           Do not copy files, only simulate and generate index.html\n  --verbose           Verbose logging\n  --site-dir=PATH     Directory to copy demos into (default: ./site)\n  --packages-dir=PATH Directory where packages live (default: ./packages)\n  --dev-name=NAME     Name of the dev directory (default: dev)\n  --help, -h          Show this help message\n`);
    return;
  }

  const SITE_DIR = resolve(opts.siteDir);
  const PACKAGES_DIR = resolve(opts.packagesDir);
  const INDEX_HTML_PATH = resolve(SITE_DIR, 'index.html');

  if (opts.verbose) console.info('Options:', opts);

  // Collect dev directories
  const devEntries = getAllDev(PACKAGES_DIR, [], opts.devName);
  if (!devEntries.length) {
    console.warn(`No dev directories found under ${PACKAGES_DIR}.`);
  }

  // Copy all dev directories into site/<component>
  const successful = [];
  const failed = [];

  for (const dev of devEntries) {
    const dest = resolve(join(SITE_DIR, dev.devDirectoryName));

    if (opts.dryRun) {
      successful.push({ dev, results: [] });
      if (opts.verbose) console.info(`[dry-run] Would copy ${dev.devDirectory} -> ${dest}`);
      else console.info(`[dry-run] ${dev.devDirectoryName}`);
      continue;
    }

    try {
      cpSync(dev.devDirectory, dest, { recursive: true });
      successful.push({ dev });
      if (opts.verbose) console.info(`Copied - ${dev.devDirectoryName}`);
      else console.info(`${dev.devDirectoryName} copied`);
    } catch (err) {
      failed.push({ dev, error: err });
      const msg = stringifyError(err);
      console.error(`Copy failed for ${dev.devDirectoryName}: ${msg}`);
    }
  }

  // Load template and write the list once to avoid race conditions
  const document = loadIndexTemplate(INDEX_HTML_PATH);
  const ol = document.querySelector('ol');
  successful.forEach(({ dev }) => {
    ol.insertAdjacentHTML(
      'beforeend',
      `<li>
          <ul>
            <li><a href="${dev.devDirectoryName}/index.html">⇉ ${dev.devDirectoryName}</a></li>
            <li><a href="https://github.com/oscarmarina/lerna-netlify-test/tree/main/packages/${dev.devDirectoryCategory}/${dev.devDirectoryName}/README.md">↬ readme</a></li>
          </ul>
        </li>`
    );
  });

  try {
    writeFileSync(INDEX_HTML_PATH, '<!DOCTYPE html>\n' + document.documentElement.outerHTML, 'utf8');
    console.info(`Wrote index to ${INDEX_HTML_PATH}`);
  } catch (err) {
    console.error(`Failed to write index.html: ${stringifyError(err)}`);
    process.exitCode = 1;
  }

  if (failed.length && !opts.dryRun) {
    console.error(`${failed.length} copy(s) failed.`);
    process.exitCode = 1;
  }
}

// Run
main().catch((err) => {
  console.error(err);
  // Keep non-zero exit for unexpected exceptions only
  process.exitCode = 1;
});
