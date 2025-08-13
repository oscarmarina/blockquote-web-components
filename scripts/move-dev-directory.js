import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join, sep } from 'path';
import copy from 'recursive-copy';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-unused-vars
const __dirname = dirname(__filename);

// Utilities
const SITE_DIR = resolve('./site');
const PACKAGES_DIR = resolve('./packages');
const INDEX_HTML_PATH = resolve('./site/index.html');

function loadIndexTemplate() {
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

  const html = existsSync(INDEX_HTML_PATH)
    ? readFileSync(INDEX_HTML_PATH)
    : defaultHtml;
  const $indexHtml = cheerio.load(html);
  // Reset the list to avoid duplicates across runs
  $indexHtml('ol').remove();
  $indexHtml('body').append('<ol></ol>');
  return $indexHtml;
}

function getAllDev(
  dirPath = PACKAGES_DIR,
  arrayOfDevDirectories = [],
  DEVDIRECTORY = 'dev'
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
  // Collect dev directories
  const devEntries = getAllDev();
  if (!devEntries.length) {
    console.warn('No dev directories found under packages/.');
  }

  // Copy all dev directories into site/<component>
  const copyResults = await Promise.allSettled(
    devEntries.map(async (dev) => {
      const dest = resolve(join(SITE_DIR, dev.devDirectoryName));
      const results = await copy(dev.devDirectory, dest);
      return { dev, results };
    })
  );

  // Build index.html list only for successful copies
  const successful = copyResults
    .filter((r) => r.status === 'fulfilled')
    .map((r) => r.value);

  const failed = copyResults
    .filter((r) => r.status === 'rejected')
    .map((r) => r.reason);

  // Log per-copy info to mirror previous behavior (but grouped)
  successful.forEach(({ dev, results }) => {
    console.info(`${results.length} file(s) copied - ${dev.devDirectoryName}`);
  });
  failed.forEach((error) => {
    console.error(`Copy failed: ${error}`);
  });

  // Load template and write the list once to avoid race conditions
  const $indexHtml = loadIndexTemplate();
  const $ol = $indexHtml('ol');
  successful.forEach(({ dev }) => {
    $ol.append(
      `<li>
          <ul>
            <li><a href="${dev.devDirectoryName}/index.html">⇉ ${dev.devDirectoryName}</a></li>
            <li><a href="https://github.com/oscarmarina/blockquote-web-components/tree/main/packages/${dev.devDirectoryCategory}/${dev.devDirectoryName}/README.md">↬ readme</a></li>
          </ul>
        </li>`
    );
  });

  writeFileSync(INDEX_HTML_PATH, $indexHtml.html(), 'utf8');
}

// Run
main().catch((err) => {
  console.error(err);
  // Keep non-zero exit for unexpected exceptions only
  process.exitCode = 1;
});
