import ts from 'typescript';
import path from 'path';

import styleTransformer from './styleTransform';

const defaultTSConfig: ts.CompilerOptions = {};

function getConfig(basePath = '.'): ts.CompilerOptions {
  const tsconfigPath = ts.findConfigFile(basePath, ts.sys.fileExists);

  let config = defaultTSConfig;
  if (tsconfigPath) {
    const contents = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    if (contents.config) {
      // https://github.com/microsoft/TypeScript/issues/5276#issuecomment-149369652
      config = ts.convertCompilerOptionsFromJson(
        contents.config.compilerOptions,
        tsconfigPath
      ).options;
    }
  }

  return config;
}

const config = getConfig(); //?
const fileName = path.resolve(__dirname, `../../labs-react/button/lib/BaseButton.tsx`);

const program = ts.createProgram([fileName], config);

program.getSourceFiles().map(file => file.fileName);

const printer = ts.createPrinter();

const source = program.getSourceFile(fileName);

if (source) {
  printer.printFile(
    //@ts-ignore
    ts
      .transform(source, [styleTransformer(program)])
      .transformed.find(s => (s.fileName = fileName)) || source
  ); //?
}
