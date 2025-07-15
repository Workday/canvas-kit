import ts from 'typescript';

/**
 * @typedef {Object} LoaderContext
 * @property {function(): {builderProgram: ts.BuilderProgram, printer:
 * ts.Printer, transformers:
 * ts.TransformerFactory<ts.SourceFile>[]}} getOptions
 * @property {string} resourcePath
 * @property {function(string, string): string} postTransform
 */

interface LoaderContext {
  getOptions: () => {
    builderProgram: ts.BuilderProgram;
    transformers: ts.TransformerFactory<ts.SourceFile>[];
    postTransform: (transformed: string, id: string) => string;
  };
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

  return postTransform ? postTransform(transformed, id) || transformed : transformed;
}
