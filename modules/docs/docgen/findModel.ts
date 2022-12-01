import ts from 'typescript';
import {JSDoc, Doc, Prop, ObjectDoc} from './docTypes';
import t from './traverse';

function getLiteralValueFromPropertyAssignment(
  initializer: ts.Expression | undefined
): string | undefined {
  if (!initializer) {
    return undefined;
  }

  if (t.isFalseKeyword(initializer)) {
    return 'false';
  }
  if (t.isTrueKeyword(initializer)) {
    return 'true';
  }
  if (t.isNumericLiteral(initializer)) {
    return `${initializer.text}`;
  }
  if (t.isStringLiteral(initializer)) {
    return `'${initializer.text.trim()}'`;
  }
  if (t.isAsExpression(initializer)) {
    return getLiteralValueFromPropertyAssignment(initializer.expression);
  }
  if (t.isNullKeyword(initializer)) {
    return 'null';
  }
  try {
    return initializer.getText();
  } catch (e) {
    // Could not figure it out
    return undefined;
  }
}

/** True if this is visible outside this file, false otherwise */
function isNodeExported(node: ts.Node): boolean {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
}

function getProperties(checker: ts.TypeChecker, node: ts.Node): Prop[] {
  return checker
    .getTypeAtLocation(node)
    .getApparentProperties()
    .map(p => {
      // Get the default value
      let defaultValue;
      if (t.isPropertyAssignment(p.valueDeclaration)) {
        defaultValue = getLiteralValueFromPropertyAssignment(p.valueDeclaration.initializer);
      }

      const type = checker.getTypeOfSymbolAtLocation(p, p.valueDeclaration!);
      const typeName = checker.typeToString(type);
      const constraint = type.getConstraint();
      let unionValues: string[] = [];
      if (constraint && constraint.isUnion()) {
        unionValues = constraint.types.map(t => {
          if (t.isStringLiteral()) return `"${t.value}"`;
          if (t.isNumberLiteral()) return `${t.value}`;
          return checker.typeToString(t);
        });
      }

      const jsDocComment = findDocComment(checker, p.valueDeclaration); //?

      return {
        type: 'prop',
        name: p.escapedName,
        defaultValue,
        typeInfo: {
          name: typeName,
          raw: typeName,
          value: unionValues.length ? unionValues.map(u => ({value: u})) : typeName,
        },
        required: false,
        ...jsDocComment,
      } as Prop;
    });
}

function getPackageName(fileName: string): string {
  const match = fileName.match(/modules\/([a-z-]+)\//i);

  if (match) {
    return match[1];
  }

  return 'react';
}

const defaultJSDoc: JSDoc = {
  description: '',
  fullComment: '',
  tags: {},
};

function formatTag(tag: ts.JSDocTagInfo) {
  let result = '@' + tag.name;
  if (tag.text) {
    result += ' ' + ts.displayPartsToString(tag.text);
  }
  return result;
}

function getFullJsDocComment(checker: ts.TypeChecker, symbol: ts.Symbol) {
  if (symbol.getDocumentationComment === undefined) {
    return defaultJSDoc;
  }

  let mainComment = ts.displayPartsToString(symbol.getDocumentationComment(checker));

  if (mainComment) {
    mainComment = mainComment.replace(/\r\n/g, '\n');
  }

  const tags = symbol.getJsDocTags() || [];

  const tagComments: string[] = [];
  const tagMap: Record<string, string> = {};

  tags.forEach(tag => {
    const trimmedText = ts.displayPartsToString(tag.text).trim();
    const currentValue = tagMap[tag.name];
    tagMap[tag.name] = currentValue ? currentValue + '\n' + trimmedText : trimmedText;

    if (['default', 'type'].indexOf(tag.name) < 0) {
      tagComments.push(formatTag(tag));
    }
  });

  return {
    description: mainComment,
    fullComment: (mainComment + '\n' + tagComments.join('\n')).trim(),
    tags: tagMap,
  };
}

function findDocComment(checker: ts.TypeChecker, node: ts.Node): JSDoc {
  const symbol = getSymbolForNode(checker, node);

  if (symbol) {
    const comment = getFullJsDocComment(checker, symbol);
    if (comment.fullComment || comment.tags.default) {
      return comment;
    }

    const rootSymbols = checker.getRootSymbols(symbol);
    const commentsOnRootSymbols = rootSymbols
      .filter(x => x !== symbol)
      .map(x => getFullJsDocComment(checker, x))
      .filter(x => !!x.fullComment || !!comment.tags.default);

    if (commentsOnRootSymbols.length) {
      return commentsOnRootSymbols[0];
    }
  }

  return defaultJSDoc;
}

/** Get a property identifier from */
function getPropertyIdentifier(node: ts.Node): ts.Identifier | null {
  if (
    (t.isShorthandPropertyAssignment(node) || t.isPropertyAssignment(node)) &&
    t.isIdentifier(node.name)
  ) {
    return node.name;
  }
  return null;
}

// https://github.com/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/components/PropertiesViewer.tsx#L172
function getSymbolForNode(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined {
  return (node as any).symbol || checker.getSymbolAtLocation(node);
}

function getObjectDoc(checker: ts.TypeChecker, node: ts.Node, name: string): ObjectDoc | undefined {
  const type = checker.getTypeAtLocation(node);
  const fileName = node.getSourceFile().fileName;

  if (type.flags & ts.TypeFlags.Object) {
    return {
      type: 'object',
      name,
      ...findDocComment(checker, node),
      packageName: getPackageName(fileName),
      props: getProperties(checker, node),
    };
  }

  return undefined;
}

export function findModel(program: ts.Program, fileName: string): Doc[] {
  const docs: Doc[] = [];
  const checker = program.getTypeChecker();

  const sourceFile = program.getSourceFile(fileName)!;
  let name = '';

  sourceFile.fileName; //?
  const packageName = getPackageName(sourceFile.fileName);

  t(sourceFile)
    .find('VariableDeclaration')
    .forEach(node => {
      if (!isNodeExported(node)) {
        return;
      }

      // check for the following format: `const {modelNookName} = createModelHook()` If we find this
      // pattern, we want to extract {modelHookName} and we'll run the type checker to get the type
      // for state, events, defaultConfig, and requiredConfig to make our external types nice and
      // clean.
      if (
        node.initializer &&
        t.isCallExpression(node.initializer) &&
        t.isCallExpression(node.initializer.expression) &&
        t.isIdentifier(node.initializer.expression.expression) &&
        node.initializer.expression.expression.escapedText === 'createModelHook'
      ) {
        // extract the model name by dropping the `use` from `use{ModelName}`
        if (t.isIdentifier(node.name)) {
          name = node.name.text.replace('use', '').replace('Model', '');
        }

        // TODO: make object property access generic by using types from a node instead of specifically AST walking
        // So instead looping over properties of an ObjectLiteralExpression, we extract the type a `node.initialize.expression`
        // and loop over apparent properties. This should make generic property iteration no matter the AST node kind as long as it is an object

        // get the `options` object from `createModelHook(options)`.
        // Options contains `defaultConfig` and `requiredConfig`. We want to record those.
        const options = node.initializer.expression.arguments[0];
        let configProps: Record<string, Prop[]> = {};

        // if `options` is an object literal expression, we want to loop over all properties
        // these properties will be `defaultConfig`, `requiredConfig`, `defaultContext`, etc
        if (t.isObjectLiteralExpression(options)) {
          configProps = options.properties.reduce((result, prop) => {
            if (t.isPropertyAssignment(prop) && t.isIdentifier(prop.name)) {
              if (['defaultConfig', 'requiredConfig'].includes(prop.name.text)) {
                // A symbol was found and the property is `defaultConfig` or `requiredConfig`
                // Both these are supposed to be objects. We want to extract all properties of
                // these objects to record type information of each property
                result[prop.name.text] = getProperties(checker, prop.name);
              }
            }

            return result;
          }, configProps);
        }

        let returnProps: Record<string, {jsDoc: JSDoc; props: Prop[]}> = {};

        const modelBody = node.initializer.arguments[0];
        t(modelBody)
          .find('ReturnStatement')
          .forEach(r => {
            if (r.expression) {
              getProperties(checker, r.expression); //?
            }
            if (r.expression && t.isObjectLiteralExpression(r.expression)) {
              // get state and events
              returnProps = r.expression.properties.reduce((acc, prop) => {
                const identifier = getPropertyIdentifier(prop);
                if (identifier) {
                  const jsDocComment = findDocComment(checker, identifier);
                  acc[identifier.text] = {
                    jsDoc: jsDocComment,
                    props: getProperties(checker, identifier),
                  };
                }
                return acc;
              }, returnProps); //?
            }
          });

        // TODO: Create/Inject state/event symbols and return them
        docs.push({
          type: 'object',
          name: `${name}State`,
          packageName,
          ...returnProps.state.jsDoc,
          props: returnProps.state.props,
        });

        docs.push({
          type: 'object',
          name: `${name}Events`,
          packageName,
          ...returnProps.events.jsDoc,
          props: returnProps.events.props,
        });

        docs.push({
          type: 'model',
          name: `${name}Model`,
          description: '',
          packageName,
          defaultConfig: (configProps.defaultConfig || []).map(p => ({...p, required: false})),
          requiredConfig: (configProps.requiredConfig || []).map(p => ({
            ...p,
            defaultValue: undefined,
            required: true,
          })),
          state: returnProps.state,
          events: returnProps.events,
        });
      }
    });

  return docs;
}
