/// <reference types="node" />
import ts from 'typescript';
import path from 'node:path';

import {getVariablesFromFiles} from './utils/getCssVariables';
import {handleCreateVars} from './utils/handleCreateVars';
import {handleCreateStyles} from './utils/handleCreateStyles';
import {handleCreateStencil} from './utils/handleCreateStencil';
import {handleCalc} from './utils/handleCalc';
import {handlePx2Rem} from './utils/handlePx2Rem';

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

export interface StyleTransformerOptions {
  prefix: string;
  variables: Record<string, string>;
  fallbackFiles?: string[];
}

let vars: Record<string, string> = {};
let loadedFallbacks = false;

export function _reset() {
  vars = {};
  loadedFallbacks = false;
}

export default function styleTransformer(
  program: ts.Program,
  {prefix = 'css', variables = {}, fallbackFiles = []}: Partial<StyleTransformerOptions> = {
    prefix: 'css',
    variables: {},
  }
): ts.TransformerFactory<ts.SourceFile> {
  if (!loadedFallbacks) {
    const files = fallbackFiles
      .filter(file => file) // don't process empty files
      .map(file => {
        // Find the fully-qualified path name. This could error which should give "module not found" errors
        return file.startsWith('.') ? path.resolve(process.cwd(), file) : require.resolve(file);
      })
      .map(file => {
        console.log(`Loading CSS variable fallback file: ${file}`);
        return ts.sys.readFile(file) || '';
      });

    const fallbackVars = getVariablesFromFiles(files);
    console.log(`Found ${Object.keys(fallbackVars).length} variables.`);

    // eslint-disable-next-line no-param-reassign
    vars = {...variables, ...fallbackVars};
    loadedFallbacks = true;
  }

  const checker = program.getTypeChecker();
  return context => {
    const visit: ts.Visitor = node => {
      // eslint-disable-next-line no-param-reassign
      node = ts.visitEachChild(node, visit, context);

      return handleTransformers(node, checker, prefix, vars)(
        handleCreateStyles,
        handleCreateVars,
        handleCreateStencil,
        handleCalc,
        handlePx2Rem
      );
    };

    return node => ts.visitNode(node, visit);
  };
}

// This should only be used for tests
export function transform(
  program: ts.Program,
  fileName: string,
  options?: Partial<StyleTransformerOptions>
) {
  const source =
    program.getSourceFile(fileName) || ts.createSourceFile(fileName, '', ts.ScriptTarget.ES2019);

  const printer = ts.createPrinter();

  return printer.printFile(
    ts
      .transform(source, [styleTransformer(program, options)])
      .transformed.find(s => (s.fileName = fileName)) || source
  );
}

const handleTransformers =
  (node: ts.Node, checker: ts.TypeChecker, prefix: string, variables: Record<string, string>) =>
  (
    ...transformers: ((
      node: ts.Node,
      checker: ts.TypeChecker,
      prefix: string,
      variables: Record<string, string>
    ) => ts.Node | void)[]
  ) => {
    return (
      transformers.reduce((result, transformer) => {
        if (result) {
          return result;
        }
        return transformer(node, checker, prefix, variables);
      }, undefined as ts.Node | void) || node
    );
  };
