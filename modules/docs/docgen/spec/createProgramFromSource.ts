import * as ts from 'typescript';
import path from 'path';

function getConfig() {
  const tsconfigPath = ts.findConfigFile(__dirname, ts.sys.fileExists) || '';

  const basePath = path.dirname(tsconfigPath);
  const {config, error} = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  const {options, errors} = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath
  );

  return options;
}

export function createProgramFromSource(
  source: string | {filename: string; source: string}[]
): ts.Program {
  let sources: {filename: string; source: string}[];
  if (typeof source === 'string') {
    sources = [{filename: 'test.ts', source}];
  } else {
    sources = source;
  }

  const sourceFiles = sources.map(({filename, source}) => {
    return ts.createSourceFile(filename, source, ts.ScriptTarget.Latest);
  });

  const config = getConfig();

  const defaultCompilerHost = ts.createCompilerHost(config);

  const customCompilerHost: ts.CompilerHost = {
    getSourceFile: (name, languageVersion) => {
      name; //?
      // Get the file from our mock list, but read source lib files
      ts.sys.readFile;
      return (
        sourceFiles.find(s => s.fileName === name) ||
        // defaultCompilerHost.getSourceFile(name, languageVersion)
        (name.startsWith('lib')
          ? ts.createSourceFile(
              name,
              ts.sys.readFile(`node_modules/typescript/lib/${name}`),
              languageVersion
            )
          : name === 'node_modules/react.ts'
          ? ts.createSourceFile(
              name,
              ts.sys.readFile(`node_modules/@types/react/index.d.ts`),
              languageVersion
            )
          : defaultCompilerHost.getSourceFile(name, languageVersion))
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
    config,
    customCompilerHost
  );
}
