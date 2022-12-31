import ts from 'typescript';
import {
  JSDoc,
  ExportedSymbol,
  Value,
  TypeMember,
  TypeParameter,
  UnknownValue,
  ObjectParameter,
  FunctionValue,
} from './docTypes';
import {getExternalSymbol} from './getExternalSymbol';
import t, {find} from './traverse';

/** True if this is visible outside this file, false otherwise */
function isNodeExported(node: ts.Node): boolean {
  safeGetText(node); //?
  t.getKindNameFromNode(node); //?
  ts.getCombinedModifierFlags(node as ts.Declaration); //?
  return (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0;
}

const defaultJSDoc: JSDoc = {
  description: '',
  tags: {},
  declarations: [],
};

function getFullJsDocComment(checker: ts.TypeChecker, symbol: ts.Symbol) {
  if (symbol.getDocumentationComment === undefined) {
    return defaultJSDoc;
  }

  let mainComment = ts.displayPartsToString(symbol.getDocumentationComment(checker));

  if (mainComment) {
    mainComment = mainComment.replace(/\r\n/g, '\n');
  }

  const tags = symbol.getJsDocTags() || [];

  const tagMap: Record<string, string> = {};

  tags.forEach(tag => {
    const trimmedText = (tag.text || '').trim();
    const currentValue = tagMap[tag.name];
    tagMap[tag.name] = currentValue ? currentValue + '\n' + trimmedText : trimmedText;
  });

  return {
    description: mainComment,
    declarations: (symbol?.declarations ?? []).map(d => ({
      name: symbol?.name || '',
      filePath: d.getSourceFile().fileName,
    })),
    tags: tagMap,
  };
}

function findDocComment(checker: ts.TypeChecker, symbol?: ts.Symbol): JSDoc {
  if (symbol) {
    const comment = getFullJsDocComment(checker, symbol);
    if (comment.description || comment.declarations.length || comment.tags.default) {
      return comment;
    }

    const rootSymbols = checker.getRootSymbols(symbol);
    const commentsOnRootSymbols = rootSymbols
      .filter(x => x !== symbol)
      .map(x => getFullJsDocComment(checker, x))
      .filter(x => !!x.description || !!comment.tags.default);

    if (commentsOnRootSymbols.length) {
      return commentsOnRootSymbols[0];
    }
  }

  return defaultJSDoc;
}

// https://github.com/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/components/PropertiesViewer.tsx#L172
function getSymbolFromNode(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined {
  return (node as any).symbol || checker.getSymbolAtLocation(node);
}

function getPackageName(fileName: string): string {
  const match = fileName.match(/modules\/([a-z-]+)\//i);

  if (match) {
    return match[1];
  }

  return 'react';
}

function isObject(type: ts.Type): type is ts.ObjectType {
  return !!(type.flags & ts.TypeFlags.Object);
}

function includesUndefined(type: ts.Type) {
  return type.isUnion() ? type.types.some(t => t.flags & ts.TypeFlags.Undefined) : false;
}

function isTupleType(type: ts.Type): type is ts.TupleTypeReference {
  return !!((type as any).target?.objectFlags & ts.ObjectFlags.Tuple);
}

function getIndexSignatureFromType(checker: ts.TypeChecker, type: ts.Type): Value | undefined {
  const index =
    checker.getIndexInfoOfType(type, ts.IndexKind.String) ||
    checker.getIndexInfoOfType(type, ts.IndexKind.Number);

  if (index) {
    const parameter = index.declaration?.parameters[0];
    return {
      kind: 'indexSignature',
      name: parameter?.name?.getText() || '',
      type:
        (parameter && getValueFromType(checker, checker.getTypeAtLocation(parameter))) ||
        unknownValue(''),
      value:
        getValueFromType(checker, index.type) || unknownValue(checker.typeToString(index.type)),
    };
  }
  return;
}

function getValueFromType(
  checker: ts.TypeChecker,
  type: ts.Type,
  filterUndefined = false
): Value | undefined {
  const typeToString = checker.typeToString(type);
  // console.log('typeToString', typeToString);

  // See if there is a TypeNode associated with the type. This is common in type definitions and can
  // be useful to get type parameters (for example, `Promise<boolean>`, `boolean` is a type
  // parameter). I'm using Signatures to get a return `Type`, but it might be next to impossible
  // to get a real `Node` out of it again. The `Type` of this node is `any` making it difficult.
  // For example, I might get a `BooleanKeyword` syntax kind, but I don't have guards for that type.
  //
  const typeNode = checker.typeToTypeNode(type, undefined, undefined);

  if (typeNode) {
    typeNode.kind; //?
    // find the symbol
    if (t.isTypeReference(typeNode)) {
      // console.log('typeNode', t.isTypeReference(typeNode), typeNode);
      const symbol = getSymbolFromNode(checker, typeNode.typeName);
      const declaration = getValueDeclaration(symbol);
      const fileName = declaration?.getSourceFile().fileName;
      if (symbol) {
        const externalSymbol = getExternalSymbol(symbol.name, fileName);
        if (externalSymbol) {
          return {kind: 'external', name: symbol.name, url: externalSymbol};
        }

        if (declaration) {
          if (isExportedSymbol(checker, declaration)) {
            return {kind: 'symbol', name: symbol.name};
          }
          // return getTypeValueFromNode(checker, declaration);
        }
      }
      // console.log('isTypeReference', declaration?.getText(), declaration?.getSourceFile().fileName);
    }
  }

  // TODO... typeNode is a synthesized node - meaning the positions are negative and don't relate to
  // a sourcefile... I'll have to extract info about the type without using `node.getText()` since
  // that needs a source file source code and positions...
  // const typeParameters =
  //   typeNode &&
  //   t.isTypeReference(typeNode) &&
  //   typeNode.typeArguments?.map(t => {
  //     t; //?
  //     return getTypeValueFromNode(checker, t);
  //   }); //?

  // check if the node is an external symbol
  const externalSymbol = getExternalSymbol(typeToString);
  if (externalSymbol) {
    return {kind: 'external', name: typeToString, url: externalSymbol};
  }

  //
  if (type.isTypeParameter() as boolean) {
    // the `as boolean` removes the type guard because the `TypeParameter` type doesn't add anything
    // to `Type`, so Typescript thinks anything after the guard is `never`
    'here'; //?
    return {kind: 'symbol', name: type.symbol.name};
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

  if (type.flags & ts.TypeFlags.Any) {
    return {kind: 'primitive', value: 'any'};
  }

  if (type.flags & ts.TypeFlags.Void) {
    return {kind: 'primitive', value: 'void'};
  }

  if (type.flags & ts.TypeFlags.BooleanLiteral) {
    return {kind: 'boolean', value: checker.typeToString(type) === 'true' ? true : false};
  }

  if (type.isUnion()) {
    let filteredTypes = type.types;
    if (filterUndefined) {
      filteredTypes = type.types.filter(t => {
        return !(t.flags & ts.TypeFlags.Undefined);
      });
      if (filteredTypes.length === 1) {
        return getValueFromType(checker, filteredTypes[0]);
      }
    }
    return {
      kind: 'union',
      value: filteredTypes.map(
        t => getValueFromType(checker, t) || unknownValue(checker.typeToString(type))
      ),
    };
  }

  if (isTupleType(type)) {
    return {
      kind: 'union',
      value:
        checker.getTypeArguments(type).map(t => getValueFromType(checker, t) || unknownValue('')) ||
        [],
    };
  }

  if (isObject(type)) {
    if (type.objectFlags & ts.ObjectFlags.ArrayLiteral) {
      const typeNode = checker.typeToTypeNode(type, undefined, undefined);
      if (typeNode) {
        return getTypeValueFromNode(checker, typeNode);
      }
    }
    // return unknownValue('bailing');
    const value = getObjectValueFromType(checker, type);
    if (value) {
      return value;
    }
  }

  return;
}

const unknownValue = (nodeText: string) =>
  ({kind: 'unknown', value: 'unknown', text: nodeText} as UnknownValue);

function isValue(input: any): input is Value {
  return typeof input === 'object' && !!input.type;
}

/**
 * Evaluate the return type looking for a `React.ReactElement` type based on the `props`.
 */
function isComponent(returnType: ts.Type) {
  if (returnType.isUnion()) {
    return returnType.types.some(isComponent);
  }
  if (isObject(returnType)) {
    return returnType.getProperties().some(s => s.name === 'props');
  }

  return false;
}

function isExportedSymbol(checker: ts.TypeChecker, node: ts.Node): boolean {
  const sourceFile = node.getSourceFile();
  if (sourceFile?.isDeclarationFile) {
    return true;
  }
  const symbol = getSymbolFromNode(checker, node);
  const declarationNode = getValueDeclaration(symbol);
  if (declarationNode) {
    t.getKindNameFromNode(declarationNode);
    // Check if the declaration's sourcefile is a declaration file
    if (declarationNode.getSourceFile().isDeclarationFile) {
      return true;
    }
    // consider imported symbols as externally available
    if (
      t.isImportClause(declarationNode) ||
      t.isImportDeclaration(declarationNode) ||
      t.isImportSpecifier(declarationNode)
    ) {
      return true;
    }
    return isNodeExported(declarationNode);
  }
  return false;
}

function getValueDeclaration(symbol?: ts.Symbol): ts.Declaration | undefined {
  return symbol?.valueDeclaration || symbol?.declarations?.[0];
}

function isOptional(symbol: ts.Symbol): boolean {
  return (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0;
}

function safeGetText(node: ts.Node): string {
  if (node.getSourceFile()) {
    return node.getText();
  }
  return 'SyntheticNode';
}

/**
 * Get export members of a node. Export members are additional members of a declaration.
 * For example:
 * ```ts
 * function myFn() {}
 *
 * myFn.foo = 'bar';
 * // `foo` is an export member of `myFn`
 * ```
 */
function getExportMembers(checker: ts.TypeChecker, node: ts.Node) {
  const exports = getSymbolFromNode(checker, node)?.exports || new Map();
  const members = (Array.from(exports.values() as any) as ts.Symbol[])
    .map(symbol => {
      const declaration = getValueDeclaration(symbol)!;
      if (declaration) {
        return getTypeValueFromNode(checker, declaration);
      }
      return;
    })
    .filter((i): i is Value => !!i); //?

  return members;
}

function getValueFromSignatureNode(
  checker: ts.TypeChecker,
  declaration: ts.SignatureDeclaration
): Value {
  const signature = checker.getSignatureFromDeclaration(declaration);
  const members = getExportMembers(checker, declaration);

  if (signature) {
    const parameters = signature.parameters.map(s => {
      return getTypeValueFromNode(checker, getValueDeclaration(s)!) as ObjectParameter;
    });

    if (isComponent(signature.getReturnType())) {
      return {
        kind: 'component',
        props: parameters,
        members,
      };
    }

    const returnType = declaration.type
      ? getTypeValueFromNode(checker, declaration.type)
      : getValueFromType(checker, signature.getReturnType()) || unknownValue(declaration.getText());

    return {
      kind: 'function',
      parameters,
      members,
      returnType,
    };
  }
  return unknownValue(declaration.getText());
}

function getObjectValueFromType(checker: ts.TypeChecker, type: ts.Type): Value | undefined {
  const properties = type.getProperties().map(symbol => {
    return getTypeValueFromNode(checker, getValueDeclaration(symbol)!) as ObjectParameter;
  });
  properties.length; //?
  const callSignatures = type.getCallSignatures().map(s => {
    return getValueFromSignatureNode(checker, s.getDeclaration());
  });
  callSignatures.length; //?

  if (callSignatures.length) {
    // We have a function and no properties
    if (properties) {
      (callSignatures[0] as FunctionValue).members = properties;
    }
    return callSignatures[0];
  }
  if (properties.length) {
    // We have object properties
    return {kind: 'object', properties};
  }

  return;
}

function getTypeValueFromNode(checker: ts.TypeChecker, node: ts.Node): Value {
  if (node === undefined) {
    return unknownValue('???');
  }
  // console.log(t.getKindNameFromNode(node) || node.kind, safeGetText(node));

  if (t.isTupleType(node)) {
    return {
      kind: 'tuple',
      value: node.elements.map(e => getTypeValueFromNode(checker, e)),
    };
  }

  if (
    (t.isTypeAliasDeclaration(node) && t.isTypeLiteral(node.type)) ||
    t.isInterfaceDeclaration(node)
  ) {
    'here'; //?
    // Treat Interfaces and Types with TypeLiterals as interfaces
    const type = checker.getTypeAtLocation(node);
    const properties = type.getProperties().map<TypeMember>(p => {
      return getTypeValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
    });

    // get index signature...
    const indexType = getIndexSignatureFromType(checker, type);
    if (indexType) {
      properties.push(indexType);
    }

    if (isObject(type) && (properties.length || indexType)) {
      const typeParameters = (
        (node as ts.InterfaceDeclaration).typeParameters ||
        (node.parent as ts.TypeAliasDeclaration).typeParameters
      )?.map(p => getTypeValueFromNode(checker, p) as TypeParameter);
      // type.getStringIndexType(); //?
      // type.getNumberIndexType(); //?
      // checker.getIndexTypeOfType(type, ts.IndexKind.String); //?
      // t.getKindNameFromNode(checker.getIndexInfoOfType(type, ts.IndexKind.String)?.declaration); //?
      // checker.typeToString(type); //?
      // symbol?.getDocumentationComment();
      // const symbol = getSymbolFromNode(checker, node); //?
      // TODO how to get index signatures?!

      // symbol?.members?.size; //?
      // checker.getSignatureFromDeclaration(node); //?
      // type.getCallSignatures().map(s => {
      //   s.parameters.map(p => p.name); //?
      // });
      // type.getStringIndexType(); //?
      // checker.symbol;
      // checker.typeToString(type.getStringIndexType()); //?
      // checker.typeToString(type.getNumberIndexType()); //?
      return {kind: 'interface', properties, typeParameters: typeParameters || []};
    }
  }

  if (t.isTypeAliasDeclaration(node)) {
    const typeParameters = node.typeParameters?.map(
      p => getTypeValueFromNode(checker, p) as TypeParameter
    );
    return {
      kind: 'type',
      typeParameters: typeParameters || [],
      value: getTypeValueFromNode(checker, node.type),
    };
  }

  if (t.isTypeLiteral(node)) {
    const type = checker.getTypeAtLocation(node);
    const properties = type.getProperties().map<TypeMember>(p => {
      return getTypeValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
    });
    return {kind: 'typeLiteral', properties};
  }

  if (t.isArrayType(node)) {
    return {kind: 'array', value: getTypeValueFromNode(checker, node.elementType)};
  }

  if (t.isTypeParameter(node)) {
    // t.getKindNameFromNode(node.parent); //?
    const constraint = node.constraint ? getTypeValueFromNode(checker, node.constraint) : undefined;

    const defaultValue = node.default ? getTypeValueFromNode(checker, node.default) : undefined;
    return {
      kind: 'typeParameter',
      name: node.name.text,
      defaultValue,
      constraint,
      required: !defaultValue,
    };
  }

  // Do before `ts.isFunctionLike` because we want to treat `MethodDeclaration` as a `parameter`
  // instead of a `function`
  if (t.isMethodDeclaration(node)) {
    const signature = getValueFromSignatureNode(checker, node as ts.SignatureDeclaration)!;
    const symbol = getSymbolFromNode(checker, node);
    const type = checker.getTypeAtLocation(node);
    const jsDoc = findDocComment(checker, symbol);

    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue: undefined,
      type: signature,
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  // All function like have signatures. All special function-like node processing should happen
  // before this line
  if (ts.isFunctionLike(node)) {
    return getValueFromSignatureNode(checker, node);
  }

  if (t.isVariableDeclaration(node)) {
    // if the declaration already has a type node, return the value from the type node
    if (node.type) {
      return getTypeValueFromNode(checker, node.type);
    }

    // An `AsExpression` is a type, so we'll return that
    if (node.initializer && t.isAsExpression(node.initializer)) {
      // Specially handle 'as const' which means we want take the value literally
      // if (node.initializer.type.getText() === 'const') {
      //   return unknownValue('');
      //   const type = checker.getTypeAtLocation(node);
      //   return getValueFromType(checker, type) || unknownValue(safeGetText(node));
      // }
      return getTypeValueFromNode(checker, node.initializer);
    }

    // We have no type information in the AST. We'll get the Type from the type checker and run some
    // tests on what we have

    const type = checker.getTypeAtLocation(node.initializer || node);
    // Both functions and objects are considered objects to Typescript
    if (isObject(type)) {
      checker.typeToTypeNode(type, node, undefined); //?
      type.objectFlags; //?
      'here'; //?
      if (type.objectFlags & ts.ObjectFlags.ArrayLiteral) {
        'here'; //?
        return getValueFromType(checker, type) || unknownValue(safeGetText(node));
      }
      const value = getObjectValueFromType(checker, type);
      if (value) {
        return value;
      }
    }

    const value = getValueFromType(checker, type);
    if (value) return value;
  }

  if (t.isPropertySignature(node)) {
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    return {
      kind: 'member',
      name: symbol?.name || '',
      type: node.type ? getTypeValueFromNode(checker, node.type) : unknownValue(safeGetText(node)),
      ...jsDoc,
    };
  }

  if (t.isIndexSignature(node)) {
  }

  if (t.isPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    // checker.typeToString(type); //?
    // getTypeValueFromNode(checker, node.initializer); //?

    // For default values, we want the value and not the type. An `AsExpression` redirects to types,
    // so we want to bypass it to get the value node
    const defaultValueNode = t.isAsExpression(node.initializer)
      ? node.initializer.expression
      : node.initializer;
    // TODO: Figure out how to get useful defaults from parameters

    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue: undefined, // getTypeValueFromNode(checker, defaultValueNode),
      type: getValueFromType(checker, type) || unknownValue(safeGetText(node)),
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  if (t.isAsExpression(node)) {
    if (node.type.getText() === 'const') {
      const type = checker.getTypeAtLocation(node.parent);
      return getValueFromType(checker, type) || unknownValue(safeGetText(node));
    }
    return getTypeValueFromNode(checker, node.type);
  }

  if (t.isLiteralType(node)) {
    'here'; //?
    return getTypeValueFromNode(checker, node.literal);
  }

  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return {kind: 'boolean', value: true};
  }

  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return {kind: 'boolean', value: false};
  }

  if (node.kind === ts.SyntaxKind.StringKeyword) {
    return {kind: 'primitive', value: 'string'};
  }

  if (node.kind === ts.SyntaxKind.NumberKeyword) {
    return {kind: 'primitive', value: 'number'};
  }

  if (node.kind === ts.SyntaxKind.BooleanKeyword) {
    return {kind: 'primitive', value: 'boolean'};
  }

  if (t.isStringLiteral(node)) {
    return {kind: 'string', value: node.text};
  }

  if (t.isNullKeyword(node)) {
    return {kind: 'primitive', value: 'null'};
  }

  if (t.isNumericLiteral(node)) {
    return {kind: 'number', value: Number(node.text)};
  }

  if (t.isUnionType(node)) {
    return {
      kind: 'union',
      value: node.types.map(type => getTypeValueFromNode(checker, type)),
    };
  }

  if (t.isIntersectionType(node)) {
    return {
      kind: 'intersection',
      value: node.types.map(type => getTypeValueFromNode(checker, type)),
    };
  }

  if (t.isParenthesizedType(node)) {
    return {kind: 'parenthesis', value: getTypeValueFromNode(checker, node.type)};
  }

  if (t.isIndexedAccessType(node)) {
    return {
      kind: 'indexedAccess',
      object: getTypeValueFromNode(checker, node.objectType),
      index: getTypeValueFromNode(checker, node.indexType),
    };
  }

  if (t.isConditionalType(node)) {
    'here'; //?
    return {
      kind: 'conditional',
      check: getTypeValueFromNode(checker, node.checkType),
      extends: getTypeValueFromNode(checker, node.extendsType),
      trueType: getTypeValueFromNode(checker, node.trueType),
      falseType: getTypeValueFromNode(checker, node.falseType),
    };
  }

  if (t.isQualifiedName(node)) {
    if (isExportedSymbol(checker, node.left)) {
      return {
        kind: 'qualifiedName',
        left: {kind: 'symbol', name: node.left.getText()},
        right: {kind: 'string', value: node.right.getText()},
      };
    }
    // if the node.left is not exported, we'll reduce to a type
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(checker.typeToString(type));
  }

  if (t.isTypeQuery(node)) {
    if (isExportedSymbol(checker, node.exprName)) {
      return {kind: 'symbol', name: node.exprName.getText()};
    }
    const symbol = getSymbolFromNode(checker, node.exprName);
    if (symbol) {
      const declaration = getValueDeclaration(symbol)!;
      return getTypeValueFromNode(checker, declaration);
    }
  }

  if (t.isPropertyAccessExpression(node)) {
    let typeInfo: Value;
    if (t.isAsExpression(node.name)) {
      typeInfo = getTypeValueFromNode(checker, node.name);
    }
    const type = checker.getTypeAtLocation(node);
    typeInfo = getValueFromType(checker, type) || unknownValue(checker.typeToString(type));
    return {kind: 'member', name: node.name.getText(), type: typeInfo} as Value;
  }

  if (t.isImportSpecifier(node)) {
    return {};
  }

  if (t.isTypeReference(node)) {
    // handle `as const` specially. If we don't do this, we'll get into an infinite loop
    if (safeGetText(node) === 'const') {
      const type = checker.getTypeAtLocation(node.parent.parent);
      return getValueFromType(checker, type) || unknownValue(node.parent.parent.getText());
    }

    const typeParameters = node.typeArguments?.map(
      p => getTypeValueFromNode(checker, p) as TypeParameter
    );
    const symbolNode = t.isQualifiedName(node.typeName) ? node.typeName.right : node.typeName;
    const symbol = getSymbolFromNode(checker, symbolNode);
    const fileName = getValueDeclaration(symbol)?.getSourceFile().fileName; //?
    const externalSymbol = getExternalSymbol(symbol?.name || node.typeName.getText(), fileName);
    if (externalSymbol) {
      return {
        kind: 'external',
        name: node.typeName.getText(),
        url: externalSymbol,
        typeParameters,
      };
    }

    if (isExportedSymbol(checker, symbolNode)) {
      return {kind: 'symbol', name: safeGetText(node.typeName), typeParameters};
    }

    // If it is a qualified name, handle that specially. The `left` might be a symbol
    if (t.isQualifiedName(node.typeName)) {
      return getTypeValueFromNode(checker, node.typeName);
    }

    // The TypeReference isn't exported, so we'll return the type of the
    // symbol's value declaration directly
    // const symbol = getSymbolFromNode(checker, node.typeName);
    // safeGetText(node); //?
    // node.typeName.getText(); //?
    // symbol; //?
    const type = checker.getTypeAtLocation(node);
    // type.getFlags() & ts.TypeFlags.Instantiable; //?
    if (symbol) {
      // symbol.name; //?
      if (type.getFlags() & ts.TypeFlags.Instantiable) {
        // It is a generic type
        return {kind: 'generic', name: symbol?.name};
      }

      const declaration = getValueDeclaration(symbol);
      if (declaration) {
        const typeInfo = getTypeValueFromNode(checker, declaration);
        // we want to embed interfaces
        if (typeInfo.kind === 'interface') {
          return typeInfo;
        }
      }
    }

    // The type reference is not external, not an exported symbol, and not generic.
    // Fall back to returning the value from it's type property
    return getValueFromType(checker, type) || unknownValue(safeGetText(node)); //?
  }

  if (t.isShorthandPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(safeGetText(node));
  }

  if (t.isEnumDeclaration(node)) {
    return {
      kind: 'interface',
      typeParameters: [],
      properties: node.members.map((m, index) => {
        return {
          kind: 'member',
          name: safeGetText(m.name),
          type: m.initializer
            ? getTypeValueFromNode(checker, m.initializer)
            : {kind: 'number', value: index},
        } as TypeMember;
      }),
    };
  }

  if (t.isParameter(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    // checker.typeToString(type); //?
    // node.type; //?
    const isRequired = node.initializer
      ? false
      : symbol
      ? !isOptional(symbol) && !includesUndefined(type)
      : false;

    const typeInfo = node.type
      ? getTypeValueFromNode(checker, node.type)
      : getValueFromType(checker, type, !isRequired) || unknownValue(safeGetText(node));

    const defaultValue = node.initializer
      ? getTypeValueFromNode(checker, node.initializer)
      : undefined;

    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue,
      type: typeInfo,
      required: isRequired,
      rest: !!node.dotDotDotToken,
      ...jsDoc,
    };
  }

  if (ts.isTypeNode(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(safeGetText(node));
  }

  const symbol = getSymbolFromNode(checker, node);
  if (!symbol) {
    return unknownValue(safeGetText(node));
  }
  const declaration = getValueDeclaration(symbol);
  (declaration && t.getKindNameFromNode(declaration)) || symbol.name; //?

  return unknownValue(safeGetText(node));
}

export function findDocs(program: ts.Program, fileName: string): ExportedSymbol[] {
  const docs: ExportedSymbol[] = [];
  const checker = program.getTypeChecker();

  const sourceFile = program.getSourceFile(fileName);
  if (!sourceFile) return docs;

  find(sourceFile, node => {
    const kind = node.kind;

    return (
      [
        'VariableDeclaration',
        'InterfaceDeclaration',
        'TypeAliasDeclaration',
        'FunctionDeclaration',
        'EnumDeclaration',
      ]
        .map(k => (ts.SyntaxKind as any)[k])
        .includes(kind) && isNodeExported(node)
    );
  }).forEach(node => {
    const symbol = getSymbolFromNode(checker, node);
    if (symbol) {
      'here'; //?
      docs.push({
        name: symbol.name,
        packageName: getPackageName(fileName),
        fileName,
        ...findDocComment(checker, symbol),
        type: getTypeValueFromNode(checker, node),
      });
    }
  });

  return docs;
}
