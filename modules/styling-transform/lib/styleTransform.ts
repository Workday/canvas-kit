/// <reference types="node" />
import ts from 'typescript';
import path from 'node:path';

import {getVariablesFromFiles} from './utils/getCssVariables';
import {handleCreateVars} from './utils/handleCreateVars';
import {handleCreateStyles} from './utils/handleCreateStyles';
import {handleCreateStencil} from './utils/handleCreateStencil';
import {handleCalc} from './utils/handleCalc';
import {handlePx2Rem} from './utils/handlePx2Rem';
import {handleCssVar} from './utils/handleCssVar';
import {Config, NodeTransformer, ObjectTransform, TransformerContext} from './utils/types';
import {handleKeyframes} from './utils/handleKeyframes';
import {handleInjectGlobal} from './utils/handleInjectGlobal';

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

export interface StyleTransformerOptions extends TransformerContext {
  fallbackFiles?: string[];
  transformers?: NodeTransformer[];
}

let vars: TransformerContext['names'] = {};
let extractedNames: TransformerContext['extractedNames'] = {};
let styles: TransformerContext['styles'] = {};
let cache: TransformerContext['cache'] = {};
let loadedFallbacks = false;
let configLoaded = false;
let config: Config = {};

/**
 * The reset is used in tests and should not be called normally.
 */
export function _reset() {
  vars = {};
  extractedNames = {};
  styles = {};
  cache = {};
  loadedFallbacks = false;
}

/**
 * Optional list of transformers. Useful to override for tests
 */
const defaultTransformers = [
  handleKeyframes,
  handleCreateVars,
  handleCreateStyles,
  handleCreateStencil,
  handleInjectGlobal,
];

export default function styleTransformer(
  program: ts.Program,
  {fallbackFiles = [], ...options}: Partial<StyleTransformerOptions> = {}
): ts.TransformerFactory<ts.SourceFile> {
  if (!configLoaded) {
    const configPath = getConfig(program.getCurrentDirectory());

    if (configPath) {
      console.log('Config file found:', configPath);
      config = require(configPath).default;
    }

    configLoaded = true;
  }

  const {names, ...transformContext} = withDefaultContext(program.getTypeChecker(), {
    ...config,
    ...options,
  });

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

    // eslint-disable-next-line guard-for-in
    for (const key in fallbackVars) {
      names[key] = fallbackVars[key];
    }
    loadedFallbacks = true;
  }

  return context => {
    const visit: ts.Visitor = node => {
      if (!transformContext.fileName) {
        transformContext.fileName = node.getSourceFile()?.fileName;
        transformContext.prefix = transformContext.getPrefix(transformContext.fileName);
      }

      if (
        ts.isSourceFile(node) &&
        node.fileName !== 'test.ts' &&
        transformContext.styles[transformContext.getFileName(node.fileName)] &&
        transformContext.extractCSS
      ) {
        ts.sys.writeFile(
          transformContext.getFileName(transformContext.getFileName(node.fileName)),
          (transformContext.styles[transformContext.getFileName(node.fileName)] || []).join('\n')
        );
      }

      const newNode = transformContext.transform(node, {
        names,
        ...transformContext,
      });

      return newNode || ts.visitEachChild(node, visit, context);
    };

    return node => ts.visitNode(node, visit);
  };
}

export function withDefaultContext(
  checker: ts.TypeChecker,
  {transformers, ...input}: Partial<StyleTransformerOptions> = {}
): TransformerContext {
  return {
    prefix: 'css',
    getPrefix: path => input.prefix || 'css',
    names: vars,
    extractedNames,
    styles,
    cache,
    checker,
    extractCSS: false,
    getFileName: path => path.replace(/\.tsx?/, '.css'),
    objectTransforms: [] as ObjectTransform[],
    transform: handleTransformers(transformers || defaultTransformers),
    ...input,
    propertyTransforms: [handleCalc, handlePx2Rem, handleCssVar].concat(
      input.propertyTransforms || []
    ),
  } as TransformerContext;
}

/**
 * This function is useful for tests or a custom build. The `styleTransformer` function is used by
 * the https://www.npmjs.com/package/ttypescript package.
 */
export function transform(
  program: ts.Program,
  fileName = 'test.ts',
  options?: Partial<StyleTransformerOptions>
) {
  const source =
    program.getSourceFile(fileName) || ts.createSourceFile(fileName, '', ts.ScriptTarget.ES2019);

  const printer = ts.createPrinter();

  return printer.printFile(
    ts
      .transform(source, [styleTransformer(program, options)])
      .transformed.find(s => s.fileName === source.fileName) || source
  );
}

const handleTransformers =
  (transformers: ((node: ts.Node, context: TransformerContext) => ts.Node | void)[]) =>
  (node: ts.Node, context: TransformerContext) => {
    return transformers.reduce((result, transformer) => {
      if (result) {
        return result;
      }
      return transformer(node, context);
    }, undefined as ts.Node | void);
  };

export function getConfig(basePath = '.') {
  const tsconfigPath = ts.findConfigFile(basePath, ts.sys.fileExists, 'styling.config.ts');

  return tsconfigPath;
}
