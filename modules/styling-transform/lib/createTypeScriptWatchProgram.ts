import path from 'node:path';
import ts from 'typescript';

/** Get the contents of the tsconfig in the system */
export function getTSConfigFile(tsconfigPath: string) {
  const basePath = path.dirname(tsconfigPath);
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
}

export const getCompilerOptions = (tsconfigPath: string) => {
  let compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.Latest,
  };

  const {options: tsOptions} = getTSConfigFile(tsconfigPath);
  compilerOptions = {...compilerOptions, ...tsOptions};

  return compilerOptions;
};

/**
 * Create a watch program for TypeScript with transformers. It watches the specified
 * tsconfigPath for changes and updates the program when changes are detected.
 *
 * @param compilerOptions - The compiler options to use.
 * @param tsconfigPath - The path to the tsconfig file.
 * @param onProgramCreatedOrUpdated - A callback function
 * that is called when the program is created or updated.
 * @returns
 */
export const startWatch = (
  compilerOptions: ts.CompilerOptions,
  tsconfigPath: string,
  onProgramCreatedOrUpdated: (program: ts.BuilderProgram) => void
): [ts.BuilderProgram, () => void] => {
  const host = ts.createWatchCompilerHost(
    tsconfigPath,
    compilerOptions,
    ts.sys,
    ts.createSemanticDiagnosticsBuilderProgram
  );
  host.afterProgramCreate = builderProgram => {
    onProgramCreatedOrUpdated(builderProgram);
  };

  const watch = ts.createWatchProgram(host);
  return [watch.getProgram(), watch.close];
};
