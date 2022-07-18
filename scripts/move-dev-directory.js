/* eslint-disable no-console */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, join, sep } from 'path';
import copy from 'recursive-copy';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-unused-vars
const __dirname = dirname(__filename);

const $indexHtml = cheerio.load(readFileSync(resolve(`./site/index.html`)));
$indexHtml('ol').remove();
$indexHtml('body').append('<ol></ol>');

const getAllDev = (
  dirPath = resolve('./packages'),
  arrayOfDevDirectories = [],
  DEVDIRECTORY = 'dev'
) => {
  const basePath = readdirSync(dirPath);
  const basePathFiltered = basePath.filter((bp) => !bp.startsWith('.'));

  basePathFiltered.forEach((fileOrDirectory) => {
    const statType = statSync(`${dirPath}/${fileOrDirectory}`);
    if (statType.isDirectory()) {
      if (fileOrDirectory === DEVDIRECTORY) {
        const devBasePathObject = join(dirPath, '/', fileOrDirectory);

        arrayOfDevDirectories.push({
          devDirectory: devBasePathObject,
          devDirectoryName: join(devBasePathObject, '..').split(sep).pop(),
          devDirectoryCategory: join(devBasePathObject, '..', '..').split(sep).pop(),

        });
      } else {
        // eslint-disable-next-line no-param-reassign
        arrayOfDevDirectories = getAllDev(
          `${dirPath}/${fileOrDirectory}`,
          arrayOfDevDirectories
        );
      }
    }
  });
  console.log('==>', arrayOfDevDirectories);
  return arrayOfDevDirectories;
};

getAllDev().forEach((dev) => {
  copy(dev.devDirectory, resolve(`./site/${dev.devDirectoryName}`))
    .then((results) => {
      const $olNode = $indexHtml('ol').append(
        `<li><a href="${dev.devDirectoryName}/index.html">${dev.devDirectoryName}</a></li>`
      );
      writeFileSync(resolve(`./site/index.html`), $indexHtml.html(), 'utf8');
      console.info(
        `${results.length} file(s) copied - ${dev.devDirectoryName}`
      );
      return $olNode;
    })
    .catch((error) => {
      console.error(`Copy failed: ${error}`);
    });
});
