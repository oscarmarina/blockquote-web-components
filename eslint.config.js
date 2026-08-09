import {defineConfig} from 'eslint/config';
import createConfig from '@blockquote/eslint-config';

const eslintConfig = defineConfig(createConfig());

console.log(eslintConfig);
export default eslintConfig;
