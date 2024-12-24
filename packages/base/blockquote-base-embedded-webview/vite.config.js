import {defineConfig} from 'vite';
import copy from 'rollup-plugin-copy';
import totalBundlesize from '@blockquote/rollup-plugin-total-bundlesize';
import externalizeSourceDependencies from '@blockquote/rollup-plugin-externalize-source-dependencies';

const copyConfig = {
  targets: [
    {
      src: 'demo/*.html',
      dest: 'dev/',
    },
  ],
  hook: 'writeBundle',
};

const demoDir = 'demo';
const demoGlob = [`${demoDir}/entry.js`];
const entries = Object.fromEntries(
  demoGlob.map((file) => {
    const [key] = file.match(new RegExp(`(?<=${demoDir}\/).*`)) || [];
    return [key?.replace(/\.[^.]*$/, ''), file];
  })
);

// https://vitejs.dev/config/
// https://vite-rollup-plugins.patak.dev/

function myCustomPlugin() {
  return [
    {
      name: 'my-custom-plugin',
      order: 'pre',
      apply: 'serve',
      config(_, _env) {
        console.log('config', _, _env);
      },
      transformIndexHtml: {
        order: 'pre',
        apply: 'serve',
        async handler(html, {path}) {
          if (path.includes('/demo/') && !path.endsWith('/index.html')) {
            console.log('Applying pre-transform to:', path);
            return html.replace(/type=["']module["']/g, 'type="nomodule"');
          }
          console.log('NO applying pre-transform to:', path);
          return html;
        },
      },
    },
    {
      name: 'my-custom-plugin:post',
      order: 'post',
      apply: 'serve',
      transformIndexHtml: {
        order: 'post',
        apply: 'serve',
        async handler(html, {path}) {
          if (path.includes('/demo/') && !path.endsWith('/index.html')) {
            console.log('Applying post-transform to:', path);
            return html.replace(/type=["']nomodule["']/g, 'type="module"');
          }
          console.log('NO applying post-transform to:', path);
          return html;
        },
      },
    },
  ];
}

export default defineConfig({
  test: {
    onConsoleLog(log, type) {
      if (type === 'stderr' && log.includes('in dev mode')) {
        return false;
      }
    },
    include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    browser: {
      enabled: true,
      headless: false,
      name: 'chromium',
      provider: 'playwright',
      screenshotFailures: false,
      instances: [
        {
          browser: 'chromium',
          launch: {
            devtools: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
          },
        },
      ],
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: 'test/coverage/',
      reporter: ['lcov', 'json', 'text-summary', 'html'],
      enabled: true,
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
      include: ['**/src/**/*'],
      exclude: ['**/src/**/index.*', '**/src/styles/'],
    },
  },
  plugins: [
    externalizeSourceDependencies(['/__web-dev-server__web-socket.js']),
    copy(copyConfig),
    totalBundlesize(),
    myCustomPlugin(),
  ],
  optimizeDeps: {
    exclude: ['lit', 'lit-html'],
  },
  build: {
    target: ['chrome71'],
    outDir: 'dev',
    rollupOptions: {
      preserveEntrySignatures: 'exports-only',
      input: entries,
      output: {
        dir: 'dev/',
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
  },
});
