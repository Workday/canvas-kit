import ts from 'typescript';

interface LoaderContext {
  getOptions: () => ReturnType<import('./webpackPlugin').StylingWebpackPlugin['getLoaderOptions']>;
  resourcePath: string;
}

export default function typescriptLoaderWithTransformers(this: LoaderContext, source: string) {
  const {builderProgram, transformers, postTransform} = this.getOptions();
  const id = this.resourcePath;

  const program = builderProgram.getProgram();

  const sourceFile = program.getSourceFile(id);
  if (!sourceFile) {
    return source;
  }

  const printer = ts.createPrinter(program.getCompilerOptions());

  const transformed = printer.printFile(
    ts
      .transform(sourceFile, transformers, program.getCompilerOptions())
      .transformed.find(s => s.fileName === id) || sourceFile
  );

  return postTransform?.(transformed, id) || transformed;
}
