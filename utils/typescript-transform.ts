import ts from 'typescript';

import styleTransformer from '@workday/canvas-kit-styling-transform/lib/styleTransform';

console.log(import.meta.resolve('./typescript-transform'));

async function compile(program: ts.Program, fileName: string) {}

/**
 * Find the tsconfig.json file closest to the directory of the `basePath`.
 */
export function getTsConfig(basePath = '.'): ts.CompilerOptions {
  const tsconfigPath = ts.findConfigFile(basePath, ts.sys.fileExists);

  let config: ts.CompilerOptions = {};
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

/**
 * Optionally async transformer that returns a TS transform factory.
 */
export type Transformer = (
  program: ts.Program,
  options: unknown
) => ts.TransformerFactory<ts.SourceFile> | Promise<ts.TransformerFactory<ts.SourceFile>>;

/**
 *
 */

async function main() {
  const fileName = 'modules/react/button/lib/PrimaryButton.tsx';
  const config = getTsConfig();
  const program = ts.createProgram([fileName], config);

  program.getSourceFiles().map(s => s.fileName); //?
  styleTransformer; //?

  const transforms = await Promise.all([styleTransformer(program, {})]);

  const printer = ts.createPrinter();
  const source = program.getSourceFile(fileName)!; //?

  const contents = printer.printFile(
    ts.transform(source, []).transformed.find(s => s.fileName === source.fileName)!
  ); //?

  console.log(contents);
}

main();
