import ts from 'typescript';

import {getCompilerOptions, startWatch} from './createTypeScriptWatchProgram';
import styleTransformer from './styleTransform';

type Transformer = (program: ts.Program) => ts.TransformerFactory<ts.SourceFile>;

const pluginName = 'StylingWebpackPlugin';

interface PluginConfig {
  tsconfigPath: string;
  /**
   * Optional list of transformers. The default is running the styleTransformer. If you wish to run
   * additional transformers, you can pass them in here.
   *
   * @example
   * ```ts
   * new StylingWebpackPlugin({
   *   tsconfigPath: './tsconfig.json',
   *   transformers: [styleTransformer, myTransformer],
   * })
   * ```
   */
  transformers?: (undefined | Transformer)[];

  postTransform?: (code: string, id: string) => string | undefined;
}

export class StylingWebpackPlugin {
  private compilerOptions: ts.CompilerOptions;
  public builderProgram!: ts.BuilderProgram;
  public transformers!: ts.TransformerFactory<ts.SourceFile>[];
  public postTransform?: (code: string, id: string) => string | undefined;
  public close: () => void;

  constructor(config: PluginConfig) {
    const tsconfigPath = config.tsconfigPath ?? './tsconfig.json';

    this.compilerOptions = getCompilerOptions(tsconfigPath);

    const [_builderProgram, close] = startWatch(
      this.compilerOptions,
      tsconfigPath,
      (builderProgram: ts.BuilderProgram) => {
        this.builderProgram = builderProgram;
        this.transformers = (config.transformers ?? [styleTransformer])
          .filter(t => t !== undefined)
          .map(t => t!(this.builderProgram.getProgram()));
      }
    );

    this.close = close;
    this.postTransform = config.postTransform;
  }

  getLoaderOptions() {
    return this;
  }

  apply(compiler: import('webpack').Compiler) {
    // We must close down the watch program when the compiler shuts down. This doesn't happen
    // automatically when using the watch program and the watch will shut down from a SIGINT. When a
    // webpack production build is initiated, the shutdown signifies the build is complete and we
    // need to end the watch program.
    compiler.hooks.shutdown.tap(pluginName, () => {
      this.close();
    });
  }
}
