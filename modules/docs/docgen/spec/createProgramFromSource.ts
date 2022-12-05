import * as ts from 'typescript';

import {getConfig} from '../extractDocs';

export function createProgramFromSource(
  source: string | {filename: string; source: string}[]
): ts.Program {
  const filename = 'test.ts';
  let sources: {filename: string; source: string}[];
  if (typeof source === 'string') {
    sources = [{filename: 'test.ts', source}];
  } else {
    sources = source;
  }

  const sourceFiles = sources.map(({filename, source}) => {
    return ts.createSourceFile(filename, source, ts.ScriptTarget.Latest);
  });

  const defaultCompilerHost = ts.createCompilerHost({});

  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      console.log(`getSourceFile ${name}`);

      return (
        sourceFiles.find(s => s.fileName === name) ||
        defaultCompilerHost.getSourceFile(name, languageVersion)
      );
    },
    writeFile: (filename, data) => {},
    getDefaultLibFileName: () => 'lib.d.ts',
    useCaseSensitiveFileNames: () => false,
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: () => '',
    getNewLine: () => '\n',
    getDirectories: () => [],
    fileExists: () => true,
    readFile: () => '',
  };

  return ts.createProgram(
    sources.map(s => s.filename),
    getConfig(),
    customCompilerHost
  );
}
