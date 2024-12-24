import {defineConfig} from 'vite';
import {globSync} from 'tinyglobby';

const srcDir = 'src';
const srcGlob = `${srcDir}/**/*.ts`;

const entries = Object.fromEntries(
  globSync(srcGlob).map((file) => {
    const [key] = file.match(new RegExp(`(?<=${srcDir}\/).*`)) || [];
    return [key?.replace(/\.[^.]*$/, ''), file];
  })
);

export default defineConfig({
  build: {
    target: ['es2022'],
    lib: {
      entry: entries,
      formats: ['es'],
    },
    minify: false,
    rollupOptions: {
      external: [/^lit/, 'monaco-editor', 'codemirror', 'prettier'],
    },
  },
});
