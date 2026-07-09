import ts, {type CompilerOptions, type Program} from 'typescript';
import {type Plugin, createFilter} from 'vite';

import {createProgram, getCompilerOptions, startWatch} from './createTypeScriptWatchProgram';

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

  transformers?: (((program: Program) => ts.TransformerFactory<ts.SourceFile>) | undefined)[];

  /**
   * A function that will be called after the typescript transform has been applied.
   * This can be used to inject code into the file after the typescript transform has been applied.
   */
  postTransform?: (code: string, id: string) => string | undefined;
}

export function vitePluginTypescriptWithTransformers(config: Options = {}): Plugin {
  let tsProgram: ts.Program | ts.BuilderProgram;
  let compilerOptions: CompilerOptions;
  let filter: ReturnType<(typeof import('vite'))['createFilter']>;
  const moduleInvalidationQueue: Map<Filepath, InvalidateModule> = new Map();
  // When the production (static) build runs, closeWatch is a no-op because there's no watch to close.
  let closeWatch: CloseWatch | undefined;
  // When the program is running in development with watch mode, tsProgram is a BuilderProgram.
  // When the program is running in production, tsProgram is a Program.
  // We need to get the Program from the BuilderProgram to get the correct source files.
  const getProgram = () => ('getProgram' in tsProgram ? tsProgram.getProgram() : tsProgram);

  return {
    name: 'vite-plugin-typescript',
    enforce: 'pre',

    async configResolved(resolvedConfig) {
      const tsconfigPath = config.tsconfigPath ?? './tsconfig.json';
      compilerOptions = config.compilerOptions ?? (await getCompilerOptions(tsconfigPath));

      const includeArray = config.include ?? ['**/**.tsx?'];
      const excludeArray = config.exclude ?? [];

      filter = createFilter(includeArray, excludeArray);
      // If Vite is running a production (static) build, we need to create a new Program instead of running watch mode.
      if (resolvedConfig.command === 'build') {
        // Watch mode keeps the Node process alive after Vite finishes.
        // Storybook's static build does not reliably call closeBundle before file writes.
        tsProgram = createProgram(tsconfigPath, compilerOptions);
        return;
      }
      // Watch mode is now only used for development builds.
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

      const printer = ts.createPrinter(compilerOptions);
      const program = getProgram();

      const transformers =
        config.transformers?.filter(t => t !== undefined).map(t => t!(program)) || [];

      const sourceFile =
        program.getSourceFile(id) || ts.createSourceFile(id, '', ts.ScriptTarget.ES2019);

      const transformed = printer.printFile(
        ts
          .transform(sourceFile, transformers, compilerOptions)
          .transformed.find(s => s.fileName === id) || sourceFile
      );

      const postTransform = config.postTransform
        ? config.postTransform(transformed, id)
        : transformed;

      return postTransform || transformed;
    },
    // Runs when the build finishes.
    // This is an extra precaution in case Storybook / Vite don't call closeBundle before the process exits.
    buildEnd() {
      closeWatch?.();
    },

    closeBundle() {
      closeWatch?.();
    },
  };
}
