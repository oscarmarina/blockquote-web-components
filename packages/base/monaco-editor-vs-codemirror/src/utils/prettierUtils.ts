import {format} from 'prettier';
import * as parserHtml from 'prettier/parser-html';
import * as parserBabel from 'prettier/parser-babel';
import * as parserPostCss from 'prettier/parser-postcss';

/**
 * Formats the content using Prettier.
 */
export const formatter = (content: string): Promise<string> => {
  return format(content, {
    parser: 'html',
    plugins: [parserHtml, parserBabel, parserPostCss],
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'es5',
    embeddedLanguageFormatting: 'auto',
    bracketSameLine: true,
    bracketSpacing: false,
    htmlWhitespaceSensitivity: 'ignore',
  });
};
