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

/**
 * This is the main recursive function for creating docs from the Typescript AST. The AST is
 * traversed and type information is extracted from source code. The Typescript type checker is used
 * to help traverse the AST by getting Symbols or Types and getting back source nodes.
 *
 * For example, if an `interface` is encountered:
 * - Start with a declaration - a Node
 * - Ask the type checker for the type information of the interface - returns a Type
 * - Get all the properties of the type - returns Symbols
 * - Iterate over property symbols and get a declaration - returns a Node
 * - Return a doc entry of the declaration node
 */
function getValueFromNode(checker: ts.TypeChecker, node: ts.Node): Value {
  if (node === undefined) {
    return unknownValue('???');
  }
  // console.log(t.getKindNameFromNode(node) || node.kind, safeGetText(checker, node));

  /**
   * A tuple type is an array with positional types.
   *
   * ```ts
   * type A = [string, number]
   * ```
   *
   * In this example, the TupleType is `[string, number]`. Each element in the
   * TupleType is its own node, so we map over them and recurse.
   */
  if (t.isTupleType(node)) {
    return {
      kind: 'tuple',
      value: node.elements.map(e => getValueFromNode(checker, e)),
    };
  }

  /**
   * For the purpose of docs, the following are equivalent:
   *
   * ```ts
   * interface A<T> {
   *   B: T
   * }
   *
   * type A<T> = {
   *   B: T
   * }
   * ```
   *
   * The TypeAliasDeclaration has a `type` that is a `TypeLiteral`
   */
  if (
    (t.isTypeAliasDeclaration(node) && t.isTypeLiteral(node.type)) ||
    t.isInterfaceDeclaration(node)
  ) {
    'here'; //?
    // Treat Interfaces and Types with TypeLiterals as interfaces
    const type = checker.getTypeAtLocation(node);
    const properties = type.getProperties().map<TypeMember>(p => {
      return getValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
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
      )?.map(p => getValueFromNode(checker, p) as TypeParameter);
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

  /**
   * A declaration using the keyword `type`. For example:
   *
   * ```ts
   * type A = string
   * ```
   *
   * The TypeAliasDeclaration is everything in this example. The TypeAliasDeclaration can include
   * `typeParameters` which are the generics. In the following example, the `typeParameters` are an
   * array including the `T` inside the `<T>`:
   *
   * ```ts
   * type A<T> = T
   * ```
   */
  if (t.isTypeAliasDeclaration(node)) {
    const typeParameters = node.typeParameters?.map(
      p => getValueFromNode(checker, p) as TypeParameter
    );

    // We need to test if the `node.type` is a TypeReference and if that TypeReference is an exported
    // symbol. If the TypeReference is exported, we can continue with recursing on the `node.type`. If
    // it is not an exported symbol, we need to instead evaluate the type of the declaration directly using
    // the type checker. This prevents us from going down a rabbit hole of evaluating ASTs that are unhelpful
    // to documentation. For example:
    //
    // ```ts
    // type ValueOf<T> = T[keyof T];
    // type Foo = { a: 'first', b: 'second' }
    // export type Bar = ValueOf<Foo>
    // ```

    // If `ValueOf` was exported, the type would be documented as `ValueOf<{a: 'first', b:
    // 'second'}>`, but if it isn't exported, the value is `'first' | 'second'`
    t.isTypeReference(node.type); //?
    // !isExportedSymbol(checker, node.type?.typeName); //?
    node.type?.typeName?.escapedText; //?
    const isLocalTypeReference =
      t.isTypeReference(node.type) && !isExportedSymbol(checker, node.type.typeName); //?
    const value = isLocalTypeReference
      ? getValueFromType(checker, checker.getTypeAtLocation(node), node) ||
        unknownValue(safeGetText(checker, node))
      : getValueFromNode(checker, node.type);

    return {
      kind: 'type',
      typeParameters: typeParameters || [],
      value,
    };
  }

  /**
   * A TypeLiteral is the object syntax of a `type`. It is similar to an interface. A
   * `TypeDeclaration` with a `TypeLiteral` is already checked higher up in this function, the only
   * `TypeLiteral` matching here are used anonymously.
   *
   * ```ts
   * type A = B & {
   *   C: 'c'
   * }
   * ```
   *
   * In this example, the TypeLiteral is `{ C: 'c' }`.
   */
  if (t.isTypeLiteral(node)) {
    const type = checker.getTypeAtLocation(node);
    const properties = type.getProperties().map<TypeMember>(p => {
      return getValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
    });
    return {kind: 'typeLiteral', properties};
  }

  /**
   * A ArrayType is a special notation for arrays. For example:
   *
   * A[]
   *
   * An alternative would be `Array<A>`, but that would be a TypeReference
   * `Array` with a `typeArgument` of a TypeReference `A`
   */
  if (t.isArrayType(node)) {
    return {kind: 'array', value: getValueFromNode(checker, node.elementType)};
  }

  /**
   * A TypeParameter is a type version of a function parameter. It is the
   * generic types of another type.
   *
   * For example:
   *
   * type A<T> = string
   *
   * The TypeParameter is `T`. TypeParameters can have a constraint and a
   * default. For example:
   *
   * type A<T extends string = 'a'> = T
   *
   * The constraint is `string` and the default is `'a'`
   */
  if (t.isTypeParameter(node)) {
    // t.getKindNameFromNode(node.parent); //?
    const constraint = node.constraint ? getValueFromNode(checker, node.constraint) : undefined;

    const defaultValue = node.default ? getValueFromNode(checker, node.default) : undefined;
    return {
      kind: 'typeParameter',
      name: node.name.text,
      defaultValue,
      constraint,
      required: !defaultValue,
    };
  }

  /**
   * A MethodDeclaration is a type of property declaration within a JS object.
   * It is a special syntax for declaring a function property or method of an
   * object. This includes any JSDoc.
   *
   * For example:
   *
   * ```ts
   * const A = {
   *   onClick(e: Event) {}
   * }
   * ```
   *
   * In this example, the MethodDeclaration is `onClick(e: Event) {}` Notice
   * there is no property signature like `onClick: (e: Event) => {}`
   *
   * Do before `ts.isFunctionLike` because we want to treat `MethodDeclaration`
   * as a `parameter` instead of a `function`
   */
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

  // All function like have call signatures. All special function-like node
  // processing should happen before this line
  if (ts.isFunctionLike(node)) {
    return getValueFromSignatureNode(checker, node);
  }

  /**
   * A variable declaration is the inner declaration of any JS variable. Here's
   * the structure of a `VariableDeclaration`:
   *
   * VariableStatement VariableDeclarationList VariableDeclaration
   *
   * For example,
   *
   * export const A = 'a', B = 'b'
   *
   * There are 2 VariableDeclarations: `A = 'a'` and `B = 'b'`
   */
  if (t.isVariableDeclaration(node)) {
    // if the declaration already has a type node, return the value from the type node
    if (node.type) {
      return getValueFromNode(checker, node.type);
    }

    // An `AsExpression` is a type, so we'll return that
    if (node.initializer && t.isAsExpression(node.initializer)) {
      // Specially handle 'as const' which means we want take the value literally
      // if (node.initializer.type.getText() === 'const') {
      //   return unknownValue('');
      //   const type = checker.getTypeAtLocation(node);
      //   return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
      // }
      return getValueFromNode(checker, node.initializer);
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
        return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
      }
      const value = getObjectValueFromType(checker, type);
      if (value) {
        return value;
      }
    }

    const value = getValueFromType(checker, type);
    if (value) return value;
  }

  /**
   * A property signature is a property of a type object (or interface). This will include JSDoc.
   * In the below example, the property signature is `B: string`
   *
   * type A = {
   *   B: string
   * }
   */
  if (t.isPropertySignature(node)) {
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    return {
      kind: 'member',
      name: symbol?.name || '',
      type: node.type
        ? getValueFromNode(checker, node.type)
        : unknownValue(safeGetText(checker, node)),
      ...jsDoc,
    };
  }

  if (t.isIndexSignature(node)) {
  }

  /**
   * A property assignment is part of a object value. This will include JSDocs.
   * A property assignment is like a property signature, but with values instead of types.
   * In the below example, the property assignment is `B: 'b'`.
   *
   * const A = {
   *   B: 'b'
   * }
   *
   * */
  if (t.isPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    // checker.typeToString(type); //?
    // getValueFromNode(checker, node.initializer); //?

    // For default values, we want the value and not the type. An `AsExpression` redirects to types,
    // so we want to bypass it to get the value node
    const defaultValueNode = t.isAsExpression(node.initializer)
      ? node.initializer.expression
      : node.initializer;

    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue: getValueFromNode(checker, defaultValueNode),
      type: getValueFromType(checker, type) || unknownValue(safeGetText(checker, node)),
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  // as A
  if (t.isAsExpression(node)) {
    'here'; //?
    node; //?
    if (safeGetText(checker, node) === 'const') {
      const type = checker.getTypeAtLocation(node.parent);
      return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
    }
    return getValueFromNode(checker, node.type);
  }

  // A literal type contains literals like `string` or `number` or `'foo'`
  if (t.isLiteralType(node)) {
    return getValueFromNode(checker, node.literal);
  }

  // true
  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return {kind: 'boolean', value: true};
  }

  // false
  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return {kind: 'boolean', value: false};
  }

  // string
  if (node.kind === ts.SyntaxKind.StringKeyword) {
    return {kind: 'primitive', value: 'string'};
  }

  // number
  if (node.kind === ts.SyntaxKind.NumberKeyword) {
    return {kind: 'primitive', value: 'number'};
  }

  // boolean
  if (node.kind === ts.SyntaxKind.BooleanKeyword) {
    return {kind: 'primitive', value: 'boolean'};
  }

  // 'a'
  if (t.isStringLiteral(node)) {
    return {kind: 'string', value: node.text};
  }

  // null
  if (t.isNullKeyword(node)) {
    return {kind: 'primitive', value: 'null'};
  }

  // 100
  if (t.isNumericLiteral(node)) {
    return {kind: 'number', value: Number(node.text)};
  }

  if (node.kind === ts.SyntaxKind.VoidKeyword) {
    return {kind: 'primitive', value: 'void'};
  }

  if (node.kind === ts.SyntaxKind.AnyKeyword) {
    return {kind: 'primitive', value: 'any'};
  }

  // A | B
  if (t.isUnionType(node)) {
    return {
      kind: 'union',
      value: node.types.map(type => getValueFromNode(checker, type)),
    };
  }

  // A & B
  if (t.isIntersectionType(node)) {
    return {
      kind: 'intersection',
      value: node.types.map(type => getValueFromNode(checker, type)),
    };
  }

  // ()
  if (t.isParenthesizedType(node)) {
    return {kind: 'parenthesis', value: getValueFromNode(checker, node.type)};
  }

  // type A = B['C']
  if (t.isIndexedAccessType(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
    return {
      kind: 'indexedAccess',
      object: getValueFromNode(checker, node.objectType),
      index: getValueFromNode(checker, node.indexType),
    };
  }

  /**
   * A ConditionalType is a type-based ternary. For example:
   *
   * ```ts
   * type A<T> = T extends string ? true : false
   * ```
   *
   * In this example, the ConditionalType is `T extends string ? true : false`.
   * The following properties of the node are as follows from the example:
   * - `checkType`: `T`
   * - `extendsType`: `string`
   * - `trueType`: `true`
   * - `falseType`: `false`
   */
  if (t.isConditionalType(node)) {
    'here'; //?
    return {
      kind: 'conditional',
      check: getValueFromNode(checker, node.checkType),
      extends: getValueFromNode(checker, node.extendsType),
      trueType: getValueFromNode(checker, node.trueType),
      falseType: getValueFromNode(checker, node.falseType),
    };
  }

  /**
   * A QualifiedName is a type-base dot property access. It is used to access properties of a
   * namespace.
   *
   * ```ts
   * A.B
   * ```
   *
   * In this example, the namespace is `A` while the property of the namespace is `B`. Typescript
   * doesn't treat property access and index access as interchangeable. For example, `A.B` is not
   * the same this as `A['B']` in Typescript. The former is only allowed on namespaces while the
   * latter is only allowed for everything else. For example, accessing a property of an interface.
   */
  if (t.isQualifiedName(node)) {
    if (isExportedSymbol(checker, node.left)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.left));
      return {
        kind: 'qualifiedName',
        left: {kind: 'symbol', name: node.left.getText(), value},
        right: {kind: 'string', value: node.right.getText()},
      };
    }
    // if the node.left is not exported, we'll reduce to a type
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(checker.typeToString(type));
  }

  /**
   * A TypeQuery is the `typeof` keyword that instructs Typescript to extract the type of a value.
   * For example:
   *
   * ```ts
   * type A = typeof a
   * ```
   *
   * In this example, the TypeQuery is `typeof a`
   */
  if (t.isTypeQuery(node)) {
    if (isExportedSymbol(checker, node.exprName)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.exprName));
      return {kind: 'symbol', name: node.exprName.getText(), value};
    }
    const symbol = getSymbolFromNode(checker, node.exprName);
    if (symbol) {
      const declaration = getValueDeclaration(symbol)!;
      return getValueFromNode(checker, declaration);
    }
  }

  if (t.isPropertyAccessExpression(node)) {
    let typeInfo: Value;
    if (t.isAsExpression(node.name)) {
      typeInfo = getValueFromNode(checker, node.name);
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
    if (safeGetText(checker, node) === 'const') {
      const type = checker.getTypeAtLocation(node.parent.parent);
      return getValueFromType(checker, type) || unknownValue(node.parent.parent.getText());
    }

    const typeParameters = node.typeArguments?.map(
      p => getValueFromNode(checker, p) as TypeParameter
    );
    const symbolNode = t.isQualifiedName(node.typeName) ? node.typeName.right : node.typeName;
    const symbol = getSymbolFromNode(checker, symbolNode);
    const fileName = getValueDeclaration(symbol)?.getSourceFile().fileName; //?
    const externalSymbol = getExternalSymbol(symbol?.name || safeGetText(checker, node), fileName);
    node; //?
    if (externalSymbol) {
      return {
        kind: 'external',
        name: symbol?.name || '',
        url: externalSymbol,
        typeParameters,
      };
    }

    if (isExportedSymbol(checker, symbolNode)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.typeName));
      return {kind: 'symbol', name: safeGetText(checker, node.typeName), typeParameters, value};
    }

    // If it is a qualified name, handle that specially. The `left` might be a symbol
    if (t.isQualifiedName(node.typeName)) {
      return getValueFromNode(checker, node.typeName);
    }

    // The TypeReference isn't exported, so we'll return the type of the
    // symbol's value declaration directly
    // const symbol = getSymbolFromNode(checker, node.typeName);
    // safeGetText(checker, node); //?
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
        const typeInfo = getValueFromNode(checker, declaration);
        // we want to embed interfaces
        if (typeInfo.kind === 'interface') {
          return typeInfo;
        }
      }
    }

    // The type reference is not external, not an exported symbol, and not generic.
    // Fall back to returning the value from it's type property
    return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node)); //?
  }

  if (t.isShorthandPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
  }

  if (t.isEnumDeclaration(node)) {
    return {
      kind: 'interface',
      typeParameters: [],
      properties: node.members.map((m, index) => {
        return {
          kind: 'member',
          name: safeGetText(checker, m.name),
          type: m.initializer
            ? getValueFromNode(checker, m.initializer)
            : {kind: 'number', value: index},
        } as TypeMember;
      }),
    };
  }

  if (t.isParameter(node)) {
    'here'; //?
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    // checker.typeToString(type); //?
    // node.type; //?
    node.questionToken; //?
    const isRequired = node.questionToken
      ? false
      : node.initializer
      ? false
      : symbol
      ? !isOptional(symbol) && !includesUndefined(type)
      : false;

    const typeInfo = node.type
      ? getValueFromNode(checker, node.type)
      : getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));

    const defaultValue = node.initializer ? getValueFromNode(checker, node.initializer) : undefined;

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

  // if (ts.isTypeNode(node)) {
  //   const type = checker.getTypeAtLocation(node);
  //   return getValueFromType(checker, type) || unknownValue(safeGetText(checker, node));
  // }

  const symbol = getSymbolFromNode(checker, node);
  if (!symbol) {
    return unknownValue(safeGetText(checker, node));
  }
  const declaration = getValueDeclaration(symbol);
  (declaration && t.getKindNameFromNode(declaration)) || symbol.name; //?

  return unknownValue(safeGetText(checker, node));
}

/** True if this is visible outside this file, false otherwise */
function isNodeExported(checker: ts.TypeChecker, node: ts.Node): boolean {
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

/**
 *
 * @param checker The shared Typescript checker
 * @param type The type we're trying to find a Value for
 * @param node An optional node that was used to generate the Type. This is mostly useful for
 * determining if a Type's Symbol points to the node and therefore should not be considered exported
 * @returns
 */
function getValueFromType(
  checker: ts.TypeChecker,
  type: ts.Type,
  node?: ts.Node
): Value | undefined {
  const typeToString = checker.typeToString(type);
  typeToString; //?

  // check if the node is an external symbol
  // TODO: This won't work if the symbol contains a generic
  const externalSymbol = getExternalSymbol(typeToString);
  if (externalSymbol) {
    return {kind: 'external', name: typeToString, url: externalSymbol};
  }

  //
  if (type.isTypeParameter() as boolean) {
    // the `as boolean` removes the type guard because the `TypeParameter` type doesn't add anything
    // to `Type`, so Typescript thinks anything after the guard is `never`
    'here'; //?
    return {kind: 'symbol', name: type.symbol.name, value: typeToString};
  }

  if (isTupleType(type)) {
    return {
      kind: 'union',
      value:
        checker.getTypeArguments(type).map(t => getValueFromType(checker, t) || unknownValue('')) ||
        [],
    };
  }

  // See if there is a TypeNode associated with the type. This is common in type definitions and can
  // be useful to get type parameters (for example, `Promise<boolean>`, `boolean` is a type
  // parameter). I'm using Signatures to get a return `Type`, but it might be next to impossible
  // to get a real `Node` out of it again. The `Type` of this node is `any` making it difficult.
  // For example, I might get a `BooleanKeyword` syntax kind, but I don't have guards for that type.
  //
  const typeNode = checker.typeToTypeNode(type, node, undefined);

  if (typeNode) {
    t.getKindNameFromNode(typeNode); //?
    typeNode; //?
    // find the symbol
    if (t.isTypeReference(typeNode)) {
      'here'; //?
      // console.log('typeNode', t.isTypeReference(typeNode), typeNode);
      const symbol = getSymbolFromNode(checker, typeNode.typeName);
      const declaration = getValueDeclaration(symbol);
      const fileName = declaration?.getSourceFile().fileName;
      if (symbol) {
        'here'; //?
        declaration; //?
        node; //?
        const externalSymbol = getExternalSymbol(symbol.name, fileName);
        if (externalSymbol) {
          return {kind: 'external', name: symbol.name, url: externalSymbol};
        }

        if (declaration && declaration !== node) {
          'here'; //?
          if (isExportedSymbol(checker, declaration)) {
            return {kind: 'symbol', name: symbol.name, value: typeToString};
          }
          return getValueFromNode(checker, declaration);
        }
      }

      // t.getKindNameFromNode(typeNode.typeName); //?
      'here'; //?
      // return getValueFromNode(checker, typeNode.typeName);
      // console.log('isTypeReference', declaration?.getText(), declaration?.getSourceFile().fileName);
    } else if (
      t.isUnionType(typeNode) &&
      type.isUnion() &&
      typeNode.types.length !== type.types.length
    ) {
      // The typeNode is a UnionType, but the number of items has overflowed with a `... {N} more
      // ...`, so we don't want to use the typeNode and will use `type.types` instead which is not
      // shortened. In this case we want to do nothing and use the type-based union check
    } else {
      'here'; //?
      // TODO... This gets the current unit test in an infinite loop
      return getValueFromNode(checker, typeNode);
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
  //     return getValueFromNode(checker, t);
  //   }); //?

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
    // If we got here, it means a typeNode was a TypeReference that wasn't exported or a
    // SyntheticNode UnionType that was truncated
    'here'; //?
    let filteredTypes = type.types;
    if (false) {
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
        t => getValueFromType(checker, t) || unknownValue(checker.typeToString(t))
      ),
    };
  }

  if (isObject(type)) {
    if (type.objectFlags & ts.ObjectFlags.ArrayLiteral) {
      const typeNode = checker.typeToTypeNode(type, undefined, undefined);
      if (typeNode) {
        return getValueFromNode(checker, typeNode);
      }
    }

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
  symbol; //?
  const declarationNode = getValueDeclaration(symbol);
  if (declarationNode) {
    t.getKindNameFromNode(declarationNode);
    // Check if the declaration's sourcefile is a declaration file
    declarationNode.getSourceFile().fileName; //?
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
    safeGetText(checker, declarationNode); //?
    isNodeExported(checker, declarationNode); //?
    return isNodeExported(checker, declarationNode);
  }
  return false;
}

function getValueDeclaration(symbol?: ts.Symbol): ts.Declaration | undefined {
  return symbol?.valueDeclaration || symbol?.declarations?.[0];
}

function isOptional(symbol: ts.Symbol): boolean {
  return (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0;
}

function safeGetText(checker: ts.TypeChecker, node: ts.Node): string {
  if (node.getSourceFile()) {
    return node.getText();
  }
  // It might be an identifier which has escaped tes
  if (t.isIdentifier(node)) {
    return node.escapedText as string;
  }
  // Try a symbol
  const symbol = getSymbolFromNode(checker, node);
  return symbol?.name || 'SyntheticNode';
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
        return getValueFromNode(checker, declaration);
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
      return getValueFromNode(checker, getValueDeclaration(s)!) as ObjectParameter;
    });

    if (isComponent(signature.getReturnType())) {
      return {
        kind: 'component',
        props: parameters,
        members,
      };
    }

    const returnType = declaration.type
      ? getValueFromNode(checker, declaration.type)
      : getValueFromType(checker, signature.getReturnType()) || unknownValue(declaration.getText());

    return {
      kind: 'function',
      parameters,
      members,
      returnType,
    };
  }
  return unknownValue(safeGetText(checker, declaration));
}

function getObjectValueFromType(checker: ts.TypeChecker, type: ts.Type): Value | undefined {
  const properties = type.getProperties().map(symbol => {
    return getValueFromNode(checker, getValueDeclaration(symbol)!) as ObjectParameter;
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
        .includes(kind) && isNodeExported(checker, node)
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
        type: getValueFromNode(checker, node),
      });
    }
  });

  return docs;
}
