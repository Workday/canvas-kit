import ts, {type CompilerOptions, type Program} from 'typescript';
import {type Plugin, type PluginOption, createFilter} from 'vite';

import {getCompilerOptions, startWatch} from './createTypeScriptWatchProgram';

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

  transformers?: (
    | ((program: Program) => ts.TransformerFactory<ts.SourceFile> | ts.CustomTransformerFactory)
    | undefined
  )[];

  /**
   * A function that will be called after the typescript transform has been applied.
   * This can be used to inject code into the file after the typescript transform has been applied.
   */
  postTransform?: (code: string, id: string) => string | undefined;
}

export function vitePluginTypescriptWithTransformers(config: Options = {}): Plugin {
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
      const tsconfigPath = config.tsconfigPath ?? './tsconfig.json';
      compilerOptions = config.compilerOptions ?? (await getCompilerOptions(tsconfigPath));

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

      const transformed = printer.printFile(
        ts
          .transform(sourceFile, transformers, compilerOptions)
          .transformed.find(s => s.fileName === id) || sourceFile
      );

      const postTransform = config.postTransform
        ? config.postTransform(transformed, id)
        : transformed;

      return postTransform || transformed;

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
