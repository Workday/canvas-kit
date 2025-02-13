import {
  type CompilerOptions,
  type CustomTransformers,
  type ParsedCommandLine,
  type Program,
} from 'typescript';
import {type Plugin, type PluginOption, createFilter} from 'vite';

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

  transformers?: (program: Program) => CustomTransformers;
}

/** Get the contents of the tsconfig in the system */

export async function getTSConfigFile(tsconfigPath: string): Promise<Partial<ParsedCommandLine>> {
  const {default: ts} = await import('typescript');
  const {dirname} = await import('node:path');

  const basePath = dirname(tsconfigPath);
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
}

const startWatch = async (
  compilerOptions: CompilerOptions,
  tsconfigPath: string,
  onProgramCreatedOrUpdated: (program: Program) => void
) => {
  const {default: ts} = await import('typescript');

  const host = ts.createWatchCompilerHost(
    tsconfigPath,
    compilerOptions,
    ts.sys,
    ts.createSemanticDiagnosticsBuilderProgram,
    undefined,
    () => {
      /* suppress message */
    }
  );
  host.afterProgramCreate = program => {
    console.log('afterProgramCreate');

    const origEmit = program.emit;

    onProgramCreatedOrUpdated(program.getProgram());
  };

  return new Promise<[Program, CloseWatch]>(resolve => {
    const watch = ts.createWatchProgram(host);
    resolve([watch.getProgram().getProgram(), watch.close]);
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

export function typescriptPlugin(config: Options = {}): Plugin {
  console.log('typescriptPlugin');
  let tsProgram: Program;
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

      const output = ts.transpileModule(src, {
        compilerOptions,
        // transformers: config.transformers?.(tsProgram),
      });

      console.log('id', id, output.outputText);

      return {
        code: output.outputText,
        map: output.sourceMapText,
      };
    },

    closeBundle() {
      closeWatch();
    },
  };
}
