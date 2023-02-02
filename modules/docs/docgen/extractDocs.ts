import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import _glob from 'glob';

// import t from './traverse';
import {DocParser, mergeParserPlugins} from './docParser';
import {modelParser} from './plugins/modelParser';
import {componentParser} from './plugins/componentParser';

const glob = promisify(_glob);

const defaultConfig: ts.CompilerOptions = {};

function getConfig(tsconfigPath?: string) {
  tsconfigPath = tsconfigPath || ts.findConfigFile('.', ts.sys.fileExists);

  let config = defaultConfig;
  if (tsconfigPath) {
    const contents = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    if (contents.config) {
      // https://github.com/microsoft/TypeScript/issues/5276#issuecomment-149369652
      config = ts.convertCompilerOptionsFromJson(contents.config.compilerOptions, tsconfigPath)
        .options;
    }
  }

  return config;
}

const srcFolder = path.join(__dirname, '../../../');

srcFolder; //?
// glob(`${srcFolder}/modules/**/*.{ts,tsx}`, {
glob(`${srcFolder}/modules/**/react/button/lib/PrimaryButton.{ts,tsx}`, {
  ignore: ['**/examples/**', '**/spec/**', '**/stories/**', '**/codemod/**', '**/docs/**'],
})
  .then(files => {
    files.length; //?
    const fileNames = [
      '/Users/nicholas.boll/projects/canvas-kit/modules/preview-react/color-picker/lib/ColorPicker.tsx',
    ];
    const program = ts.createProgram(files, getConfig());
    const parser = new DocParser(program, mergeParserPlugins(modelParser, componentParser));
    return files.flatMap(fileName => {
      console.log(fileName); //?
      return parser.getExportedSymbols(fileName);
    });
  })
  .then(docs => {
    docs; //?
    return fs.promises.writeFile('docs.json', JSON.stringify(docs, null, '  '));
  });
