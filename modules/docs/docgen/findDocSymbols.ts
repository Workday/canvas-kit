import ts from 'typescript';
import {JSDoc, ExportedSymbol, Value, TypeMember, UnknownValue, ObjectParameter} from './docTypes';
import t, {find} from './traverse';

/** True if this is visible outside this file, false otherwise */
function isNodeExported(node: ts.Node): boolean {
  ts.getCombinedModifierFlags(node as ts.Declaration); //?
  return (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0;
}

const defaultJSDoc: JSDoc = {
  description: '',
  fullComment: '',
  tags: {},
};

function formatTag(tag: ts.JSDocTagInfo) {
  let result = '@' + tag.name;
  tag.name; //?
  if (tag.text) {
    result += ' ' + ts.displayPartsToString(tag.text);
  }
  return result;
}

function getFullJsDocComment(checker: ts.TypeChecker, symbol: ts.Symbol) {
  if (symbol.getDocumentationComment === undefined) {
    return defaultJSDoc;
  }

  symbol.getDocumentationComment(checker); //?
  let mainComment = ts.displayPartsToString(symbol.getDocumentationComment(checker)); //?

  if (mainComment) {
    mainComment = mainComment.replace(/\r\n/g, '\n');
  }

  const tags = symbol.getJsDocTags() || [];

  const tagComments: string[] = [];
  const tagMap: Record<string, string> = {};

  tags.forEach(tag => {
    tag; //?
    const trimmedText = (tag.text || '').trim(); //?
    const currentValue = tagMap[tag.name];
    tagMap[tag.name] = currentValue ? currentValue + '\n' + trimmedText : trimmedText;
    tag.name; //?
    if (!['default', 'type'].includes(tag.name)) {
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

// https://github.com/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/components/PropertiesViewer.tsx#L172
function getSymbolForNode(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined {
  return (node as any).symbol || checker.getSymbolAtLocation(node);
}

function getPackageName(fileName: string): string {
  const match = fileName.match(/modules\/([a-z-]+)\//i);

  if (match) {
    return match[1];
  }

  return 'react';
}

function isObject(type: ts.Type) {
  return !!(type.flags & ts.TypeFlags.Object);
}

function getExpression(node: ts.Node): ts.Node | undefined {
  if (t.isPropertyAssignment(node)) {
    'here'; //?
    if (
      t.isAsExpression(node.initializer) &&
      t.isTypeReference(node.initializer.type) &&
      t.isIdentifier(node.initializer.type.typeName)
    ) {
      'here'; //?
      return node.initializer.type.typeName;
    } else {
      return node.initializer;
    }
  }
  if (t.isPropertySignature(node)) {
    node.name.getText(); //?
    return node.type;
  }
  if (t.isTypeAliasDeclaration(node)) {
    node.name.getText(); //?
    return node.type;
  }

  return;
}

function getValueFromType(checker: ts.TypeChecker, type: ts.Type): Value | undefined {
  if (type.isUnion()) {
    'here'; //?
    // type.fla //?
    type.types.forEach(type => {
      checker.typeToString(type); //?
      type.getConstraint(); //?
    });
    checker.typeToString(type); //?
  }

  if (type.isStringLiteral()) {
    return {kind: 'string', value: type.value};
  }

  if (type.isNumberLiteral()) {
    return {kind: 'number', value: type.value};
  }

  if (type.flags & ts.TypeFlags.String) {
    return {kind: 'primitive', value: 'string'};
  }

  if (type.flags & ts.TypeFlags.Number) {
    return {kind: 'primitive', value: 'number'};
  }

  if (type.flags & ts.TypeFlags.Null) {
    return {kind: 'primitive', value: 'null'};
  }

  if (type.flags & ts.TypeFlags.Undefined) {
    return {kind: 'primitive', value: 'undefined'};
  }

  if (type.flags & ts.TypeFlags.Boolean) {
    return {kind: 'primitive', value: 'boolean'};
  }
}

const unknownValue: UnknownValue = {kind: 'unknown', value: 'unknown'};

function isValue(input: any): input is Value {
  return typeof input === 'object' && !!input.type;
}

function getReachableValueFromNode(checker: ts.TypeChecker, node: ts.Node): Value {
  const type = checker.getTypeAtLocation(node);
  // If a symbol is exported, it is okay to reference as a symbol,
  // otherwise we're going to have to expand it
  if (type.aliasSymbol) {
    'here'; //?
    if (isNodeExported(type.aliasSymbol.declarations[0])) {
      type.aliasSymbol.escapedName; //?
      'here'; //?
      return {kind: 'symbol', name: type.aliasSymbol.name};
    } else {
      'here'; //?
      if (type.isUnion()) {
        return {
          kind: 'union',
          value: type.types.map(t => getValueFromType(checker, t) || unknownValue).filter(isValue),
        };
      }
      // it is not exported, we need to expand it
      return {kind: 'string', value: 'test'};
    }
  }
  const symbol = checker.getSymbolAtLocation(node);
  node.getText(); //?
  // Not all nodes have symbols
  if (symbol) {
    return getTypeValueFromSymbol(checker, symbol);
  }

  return getValueFromType(checker, type) || unknownValue;
}

function isExportedSymbol(checker: ts.TypeChecker, node: ts.Node): boolean {
  const symbol = checker.getSymbolAtLocation(node); //?
  const valueNode = symbol?.valueDeclaration || symbol?.declarations[0]; //?
  if (valueNode) {
    return isNodeExported(valueNode);
  }
  return false;
}

function getTypeValueFromSymbol(checker: ts.TypeChecker, symbol: ts.Symbol): Value {
  const node = symbol.valueDeclaration || symbol.declarations[0];
  // const type = checker.getTypeOfSymbolAtLocation(symbol, node); We check the
  // type at the node instead of the symbol because interfaces are `any` types
  // from symbol for some reason...
  const type = checker.getTypeAtLocation(node);

  symbol.name; //?
  node?.kind; //?

  if (node) {
    'here'; //?
    node.name.getText(); //?
    const expression = node; // getExpression(node); //?
    node === expression; //?
    expression?.getText(); //?
    if (expression) {
      isExportedSymbol(checker, expression); //?
    }

    expression && getReachableValueFromNode(checker, expression); //?
    checker.typeToString(type); //?

    if (expression) {
      symbol.name; //?
      t.getKindNameFromNode(expression); //?
      if (t.isStringLiteral(expression)) {
        expression.text; //?
        return {kind: 'string', value: expression.text};
      }
      if (t.isTypeReference(expression) && t.isIdentifier(expression.typeName)) {
        'here'; //?
        expression.typeName.getText(); //?
        return getReachableValueFromNode(checker, expression.typeName);
      }
      if (t.isUnionType(expression)) {
        'here'; //?
        return {
          kind: 'union',
          value: expression.types.flatMap(t => {
            t.getText(); //?
            const t2 = checker.getTypeAtLocation(t);
            // If a symbol is exported, it is okay to reference as a symbol,
            // otherwise we're going to have to expand it
            if (t2.aliasSymbol) {
              'here'; //?
              if (isNodeExported(t2.aliasSymbol.declarations[0])) {
                t2.aliasSymbol.escapedName; //?
                'here'; //?
                return {kind: 'symbol', name: t2.aliasSymbol.name};
              } else {
                if (t2.isUnion()) {
                  return t2.types.map(t => getValueFromType(checker, t) || unknownValue);
                }
                // it is not exported, we need to expand it
                return {kind: 'string', value: 'test'};
              }
            }
            const symbol = checker.getSymbolAtLocation(t);
            t.getText(); //?
            // Not all nodes have symbols
            if (symbol) {
              return getTypeValueFromSymbol(checker, symbol);
            }
            const type = checker.getTypeAtLocation(t);
            return getValueFromType(checker, type) || unknownValue;
          }) as Value[],
        }; //?
      }
    }
  }

  // check if the symbol is represented by a node that is a VariableDeclaration
  // that represents another symbol. If it is a symbol, we want to return a
  // SymbolDoc
  if (
    node &&
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isIdentifier(node.initializer)
  ) {
    'here'; //?
    const value = getSymbolForNode(checker, node.initializer);
    value?.name; //?
    if (value) {
      value.getDeclarations()?.forEach(d => {
        d.parent.getSourceFile().fileName; //?
      }); //?
    }
    return {
      kind: 'symbol',
      name: node.initializer.getText(),
    };
  }

  const value = getValueFromType(checker, type); //?
  if (value) {
    'here'; //?
    return value;
  }

  if (ts.isFunctionLike(node)) {
    'here'; //?
    return {};
  }

  symbol.name; //?
  type.flags; //?
  if (isObject(type)) {
    symbol.name; //?
    // return getObjectDoc(checker, node, node.name.text); //?
    const properties = type.getApparentProperties().map<TypeMember | ObjectParameter>(p => {
      p.name; //?
      p.valueDeclaration.kind; //?
      checker.typeToString(checker.getTypeOfSymbolAtLocation(p, p.valueDeclaration)); //?
      p.valueDeclaration.getSourceFile().fileName; //?

      const symbolNode = p.valueDeclaration || p.declarations[0]; //?
      if (t.isPropertySignature(symbolNode)) {
        // return getTypeValueFromSymbol(checker, p);
        return {
          kind: 'member',
          name: p.name,
          type: getTypeValueFromSymbol(checker, p),
          ...findDocComment(checker, p.valueDeclaration),
        };
      }

      const jsDoc = findDocComment(checker, p.valueDeclaration);

      return {
        kind: 'property',
        name: p.name,
        defaultValue: jsDoc.tags.default,
        type: getTypeValueFromSymbol(checker, p),
        ...jsDoc,
      };
    });
    node.kind; //?
    if (t.isVariableDeclaration(node)) {
      'here'; //?
      return {kind: 'object', properties: properties as ObjectParameter[]};
    }
    if (t.isInterfaceDeclaration(node) || t.isTypeAliasDeclaration(node)) {
      return {kind: 'interface', properties: properties as TypeMember[]};
    }
  }

  if (t.isPropertySignature(node)) {
    node.kind; //?
  }

  return unknownValue;
}

export function findDocSymbols(program: ts.Program, fileName: string): ExportedSymbol[] {
  const docs: ExportedSymbol[] = [];
  const checker = program.getTypeChecker();

  const sourceFile = program.getSourceFile(fileName)!;

  find(sourceFile, node => {
    const kind = node.kind;

    return (
      ['VariableDeclaration', 'InterfaceDeclaration', 'TypeAliasDeclaration', 'FunctionDeclaration']
        .map(k => (ts.SyntaxKind as any)[k])
        .includes(kind) && isNodeExported(node)
    );
  }).forEach(node => {
    const symbol = getSymbolForNode(checker, node);
    !!symbol; //?
    if (symbol) {
      docs.push({
        name: symbol.name,
        packageName: getPackageName(fileName),
        fileName,
        ...getFullJsDocComment(checker, symbol),
        type: getTypeValueFromSymbol(checker, symbol),
      });
    }
  });

  return docs;
}
