/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { rollupPluginHTML as pluginHtml } from '@web/rollup-plugin-html';
import copy from 'rollup-plugin-copy';
import totalBundlesize from '@blockquote/rollup-plugin-total-bundlesize';

const copyConfig = {
  targets: [
    {
      src: '../../../node_modules/@ungap/global-this/index.js',
      dest: 'dev/web_modules/@ungap/global-this',
    },
    {
      src: '../../../node_modules/tiny-array-flat-polyfill/tiny-array-flat-polyfill.min.js',
      dest: 'dev/web_modules/tiny-array-flat-polyfill',
    },
  ],
  hook: 'writeBundle',
};

/**
 * https://vitejs.dev/config/
 * https://vite-rollup-plugins.patak.dev/
 */

export default defineConfig({
  build: {
    target: ['edge18'],
    outDir: 'dev',
    reportCompressedSize: false,
    rollupOptions: {
      input: 'demo/*.html',
      output: {
        dir: 'dev/',
        format: 'es',
      },
      plugins: [
        pluginHtml({
          transformHtml: [
            html =>
              html.replace(
                '<meta charset="utf-8">',
                `<meta charset="utf-8">
    <script src="./web_modules/@ungap/global-this/index.js"></script>
    <script src="./web_modules/tiny-array-flat-polyfill/tiny-array-flat-polyfill.min.js"></script>`,
              ),
          ],
        }),
        copy(copyConfig),
        totalBundlesize(),
      ],
    },
  },
});
