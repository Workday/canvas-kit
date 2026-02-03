import {stripIndent} from 'common-tags';
import path from 'path';
import * as ts from 'typescript';

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

function getLocalFileName(sources: {filename: string}[], name: string): string | undefined {
  return sources.find(
    file => file.filename === name.replace(path.resolve(__dirname, '../../..') + '/', '')
  )?.filename;
}

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
    return ts.createSourceFile(filename, stripIndent(source), ts.ScriptTarget.Latest);
  });

  sourceFiles.push(
    ts.createSourceFile(
      'node_modules/@workday/canvas-kit-styling/index.ts',
      styleSource,
      ts.ScriptTarget.Latest
    )
  );

  const config = getConfig();

  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      // Get the file from our mock list, but read source lib files
      const mockedFile = sourceFiles.find(s => s.fileName === getLocalFileName(sources, name));

      if (mockedFile) {
        return mockedFile;
      }

      if (name.startsWith('lib')) {
        return ts.createSourceFile(
          name,
          ts.sys.readFile(`node_modules/typescript/lib/${name}`)!,
          languageVersion
        );
      }

      const fileContents = ts.sys.readFile(name);
      if (fileContents) {
        return ts.createSourceFile(name, fileContents, languageVersion);
      }

      return undefined;
    },
    // eslint-disable-next-line no-empty-function
    writeFile: () => {},
    getDefaultLibFileName: () => 'lib.d.ts',
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
    getCanonicalFileName: fileName =>
      ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase(),
    getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
    getNewLine: () => ts.sys.newLine,
    getDirectories: path => ts.sys.getDirectories(path),
    // This should be kept up to date with getSourceFile()
    fileExists: fileName => {
      return (
        sourceFiles.some(s => s.fileName === getLocalFileName(sources, fileName)) ||
        ts.sys.fileExists(fileName)
      );
    },
    readFile: fileName => ts.sys.readFile(fileName),
  };

  const program = ts.createProgram(
    sources.map(s => s.filename),
    config,
    customCompilerHost
  );

  return program;
}
