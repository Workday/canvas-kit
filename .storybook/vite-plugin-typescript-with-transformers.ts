import ts, {
  type CompilerOptions,
  type CustomTransformers,
  type ParsedCommandLine,
  type Program,
} from 'typescript';
import {type Plugin, type PluginOption, createFilter} from 'vite';

import {createDocProgram} from '../modules/docs/docgen/createDocProgram';
import {mergeTransformers} from './vitePluginTypescriptCustomTransforms';

type Filepath = string;
type InvalidateModule = () => void;
type CloseWatch = () => void;

export interface Options {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
  /**
   * Specify the location of the tsconfig.json to use. Can not be used with
   * compilerOptions.
   **/
  tsconfigPath?: string;
  /** Specify TypeScript compiler options. Can not be used with tsconfigPath. */
  compilerOptions?: CompilerOptions;

  transformers?: ((
    program: Program
  ) => ts.TransformerFactory<ts.SourceFile> | ts.CustomTransformerFactory)[];
}

/** Get the contents of the tsconfig in the system */

export async function getTSConfigFile(tsconfigPath: string): Promise<Partial<ParsedCommandLine>> {
  const {default: ts} = await import('typescript');
  const {dirname} = await import('node:path');

  const basePath = dirname(tsconfigPath);
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
}

const formatHost: ts.FormatDiagnosticsHost = {
  getCanonicalFileName: path => path,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine,
};

const startWatch = async (
  compilerOptions: CompilerOptions,
  tsconfigPath: string,
  onProgramCreatedOrUpdated: (program: ts.BuilderProgram) => void
): Promise<[ts.BuilderProgram, () => void]> => {
  const {default: ts} = await import('typescript');

  const host = ts.createWatchCompilerHost(
    tsconfigPath,
    compilerOptions,
    ts.sys,
    ts.createSemanticDiagnosticsBuilderProgram,
    (diagnostic: ts.Diagnostic) => {
      console.error(
        'Error',
        diagnostic.code,
        ':',
        ts.flattenDiagnosticMessageText(diagnostic.messageText, formatHost.getNewLine())
      );
    },
    (diagnostic: ts.Diagnostic) => {
      /* suppress message */
      console.info('diagnostic', ts.formatDiagnostic(diagnostic, formatHost));
    }
  );
  host.afterProgramCreate = program => {
    console.log('afterProgramCreate');

    const origEmit = program.emit;

    onProgramCreatedOrUpdated(program);
  };

  return new Promise<[ts.BuilderProgram, CloseWatch]>(resolve => {
    const watch = ts.createWatchProgram(host);
    resolve([watch.getProgram(), watch.close]);
  });
};

const getCompilerOptions = async (config: Options, tsconfigPath: string) => {
  const {default: ts} = await import('typescript');

  let compilerOptions: CompilerOptions = {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.Latest,
  };

  if (config.compilerOptions) {
    compilerOptions = {
      ...compilerOptions,
      ...config.compilerOptions,
    };
  } else {
    console.log('getTsConfigFile');
    const {options: tsOptions} = await getTSConfigFile(tsconfigPath);
    compilerOptions = {...compilerOptions, ...tsOptions};
  }

  return compilerOptions;
};

// async function createProgram(
//   compilerOptions: CompilerOptions,
//   tsconfigPath: string,
//   onProgramCreatedOrUpdated: (program: ts.BuilderProgram) => void
// ) {
//   // const {default: ts} = await import('typescript');

//   // get files from the tsconfig
//   const docProgram = createDocProgram();

//   setTimeout(() => {
//     onProgramCreatedOrUpdated(docProgram.program);
//   }, 0);

//   return [docProgram.program, () => {}] as const;
// }

export function typescriptPlugin(config: Options = {}): Plugin {
  console.log('typescriptPlugin');
  let tsProgram: ts.BuilderProgram;
  let compilerOptions: CompilerOptions;
  let filter: ReturnType<(typeof import('vite'))['createFilter']>;
  const moduleInvalidationQueue: Map<Filepath, InvalidateModule> = new Map();
  let closeWatch: CloseWatch;

  return {
    name: 'vite-plugin-typescript',
    enforce: 'pre',

    async configResolved() {
      const {createFilter} = await import('vite');

      const tsconfigPath = config.tsconfigPath ?? './tsconfig.json';
      compilerOptions = await getCompilerOptions(config, tsconfigPath);

      const includeArray = config.include ?? ['**/**.tsx?'];
      const excludeArray = config.exclude ?? [];

      filter = createFilter(includeArray, excludeArray);
      [tsProgram, closeWatch] = await startWatch(compilerOptions, tsconfigPath, program => {
        tsProgram = program;

        for (const [filepath, invalidateModule] of moduleInvalidationQueue.entries()) {
          invalidateModule();
          moduleInvalidationQueue.delete(filepath);
        }
      });
    },

    async transform(src, id) {
      if (!filter(id)) {
        return;
      }
      const {default: ts} = await import('typescript');

      // const output = ts.transpileModule(src, {
      //   compilerOptions: {
      //     ...compilerOptions,
      //     jsx: id.endsWith('ts') ? ts.JsxEmit.None : compilerOptions.jsx,
      //   },
      //   transformers: config.transformers
      //     ? {before: [config.transformers.before[0].factory(tsProgram)]}
      //     : // ? mergeTransformers(tsProgram, config.transformers)
      //       undefined,
      // });

      const printer = ts.createPrinter(compilerOptions);

      const transformers = config.transformers?.map(t => t(tsProgram.getProgram())) || [];

      const sourceFile =
        tsProgram.getSourceFile(id) || ts.createSourceFile(id, '', ts.ScriptTarget.ES2019);
      return printer.printFile(
        ts
          .transform(sourceFile, transformers, compilerOptions)
          .transformed.find(s => s.fileName === id) || sourceFile
      );

      // return '';
      // return output.outputText + '\n\n// compiled by typescript\n';
      // return {
      //   code: output.outputText,
      //   map: output.sourceMapText,
      // };
    },

    closeBundle() {
      closeWatch();
    },
  };
}
