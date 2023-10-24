import * as ts from 'typescript';
import path from 'path';

function getConfig() {
  const tsconfigPath = ts.findConfigFile('.', ts.sys.fileExists) || '';

  const basePath = path.dirname(tsconfigPath);
  const {config} = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  const {options} = ts.parseJsonConfigFileContent(config, ts.sys, basePath, {}, tsconfigPath);

  return options;
}

const styleSource = `
export type CsVarsMap<T extends string, ID extends string | never> = [ID] extends [never]
  ? Record<T, string>
  : {[K in T]: \`--\${ID}-\${K}\`};

export type CsVars<T extends string, ID extends string | never> = CsVarsMap<T, ID> & {
  (input: Partial<Record<T, string>>): Record<T, string>;
};
export function createVars<T extends string, ID extends string>(input: {
  id: ID;
  args: T[];
}): CsVars<T, ID>;
export function createVars<T extends string>(...args: T[]): CsVars<T, never>;
export function createVars<T extends string, ID extends string>(...args: T[]): CsVars<T, ID>;
export function cssVar(input: string): string;
export function createStyles(...args: any[]): string;
`;

export function createProgramFromSource(source: string): ts.Program;
export function createProgramFromSource(filename: string, source: string): ts.Program;
export function createProgramFromSource(sources: {filename: string; source: string}[]): ts.Program;
export function createProgramFromSource(...args: any[]) {
  let sources: {filename: string; source: string}[];
  if (args.length === 2) {
    sources = [{filename: args[0], source: args[1]}];
  } else if (typeof args[0] === 'string') {
    sources = [{filename: 'test.ts', source: args[0]}];
  } else {
    sources = args[0];
  }

  const sourceFiles = sources.map(({filename, source}) => {
    return ts.createSourceFile(filename, source, ts.ScriptTarget.Latest);
  });

  const config = getConfig();

  const defaultCompilerHost = ts.createCompilerHost(config);

  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      // Get the file from our mock list, but read source lib files
      return (
        sourceFiles.find(s => s.fileName === name) ||
        // defaultCompilerHost.getSourceFile(name, languageVersion)
        (name.startsWith('lib')
          ? ts.createSourceFile(
              name,
              ts.sys.readFile(`node_modules/typescript/lib/${name}`),
              languageVersion
            )
          : name === 'node_modules/@workday/canvas-kit-styling/index.ts'
          ? ts.createSourceFile(name, styleSource, languageVersion)
          : name === 'node_modules/react.ts'
          ? ts.createSourceFile(
              name,
              ts.sys.readFile(`node_modules/@types/react/index.d.ts`),
              languageVersion
            )
          : defaultCompilerHost.getSourceFile(name, languageVersion))
      );
    },
    // eslint-disable-next-line no-empty-function
    writeFile: () => {},
    getDefaultLibFileName: () => 'lib.d.ts',
    useCaseSensitiveFileNames: () => false,
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: () => '',
    getNewLine: () => '\n',
    getDirectories: () => [],
    // This should be kept up to date with getSourceFile()
    fileExists: fileName => {
      return (
        fileName.startsWith('lib') ||
        fileName === 'node_modules/react.ts' ||
        fileName === 'node_modules/@types/react/index.d.ts' ||
        fileName === 'node_modules/@workday/canvas-kit-styling/index.ts' ||
        !!sourceFiles.find(s => s.fileName === fileName)
      );
    },
    readFile: () => '',
  };

  return ts.createProgram(
    sources.map(s => s.filename),
    config,
    customCompilerHost
  );
}
