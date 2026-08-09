import {defineConfig} from 'eslint/config';
import createConfig from '@blockquote/eslint-config';

export default defineConfig(createConfig({tsconfigRootDir: import.meta.dirname}));
