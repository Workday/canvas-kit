import ts from 'typescript';

import {StyleTransformer} from './styleParser';

const defaultTSConfig: ts.CompilerOptions = {};

function getConfigPath() {
  const path = ts.findConfigFile(__dirname, ts.sys.fileExists, 'doc.config.json') || '.';

  return path;
}

function getConfig(basePath = '.'): ts.CompilerOptions {
  const tsconfigPath = ts.findConfigFile(basePath, ts.sys.fileExists);

  let config = defaultTSConfig;
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

const config = getConfig(); //?
const fileName =
  '/Users/nicholas.boll/projects/canvas-kit/modules/labs-react/button/lib/BaseButton.tsx';

const program = ts.createProgram([fileName], config);

program.getSourceFiles().map(file => file.fileName);

const transformer = new StyleTransformer(program);

const printer = ts.createPrinter();

const source = program.getSourceFile(fileName);

printer.printFile(
  ts.transform(source, [transformer.transform()]).transformed.find(s => (s.fileName = fileName)) ||
    source
); //?

transformer.errors; //?
