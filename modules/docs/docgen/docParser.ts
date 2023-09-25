import ts from 'typescript';
import {
  JSDoc,
  ExportedSymbol,
  Value,
  TypeParameter,
  UnknownValue,
  ObjectProperty,
  FunctionValue,
  IndexSignatureValue,
  FunctionParameter,
  PrimitiveValue,
} from './docTypes';
import {getExternalSymbol} from './getExternalSymbol';
import t, {find} from './traverse';

export class DocParser<T extends {kind: string} = any> {
  /** A shared reference to the Typescript type checker */
  public checker: ts.TypeChecker;

  // track symbols to ensure we don't get stuck in an infinite loop
  public visitedTypeScriptSymbols: Record<string, ts.SyntaxKind> = {};

  /**
   * This is the shared mutable instance of all exported symbols already processed. You can push new
   * symbols or search for existing symbols. If your plugin doesn't need to access existing symbols,
   * you can ignore this parameter.
   */
  public symbols: ExportedSymbol<Value | T>[] = [];

  constructor(public program: ts.Program, public plugins: ParserPlugin<T>[] = []) {
    this.checker = program.getTypeChecker();
  }

  /**
   * Get all {@link ExportedSymbol}s from a file.
   */
  getExportedSymbols(fileName: string): ExportedSymbol<T | Value>[] {
    const symbols: ExportedSymbol[] = [];
    const sourceFile = this.program.getSourceFile(fileName);
    if (!sourceFile) return symbols;

    find(sourceFile, node => {
      const kind = node.kind;

      return (
        [
          'VariableDeclaration',
          'InterfaceDeclaration',
          'TypeAliasDeclaration',
          'FunctionDeclaration',
          'EnumDeclaration',
          'ClassDeclaration',
        ]
          .map(k => (ts.SyntaxKind as any)[k])
          .includes(kind) && isNodeExported(this.checker, node)
      );
    }).forEach(node => {
      // reset visited symbols for every exported symbol to prevent accidental short-circuiting of non-exported symbols of the same name across files or scopes.
      this.visitedTypeScriptSymbols = {};
      const symbol = getSymbolFromNode(this, node);
      const previousSymbolsLength = this.symbols.length;
      if (symbol) {
        const exportedSymbol: ExportedSymbol<T> = {
          name: symbol.name,
          fileName,
          ...findDocComment(this.checker, symbol),
          type: this.getValueFromNode(node),
        };

        symbols.push(exportedSymbol);

        const addedSymbolsLength = previousSymbolsLength - this.symbols.length;
        // add all symbols added by the parser
        if (addedSymbolsLength) {
          this.symbols.slice(addedSymbolsLength).forEach(symbol => {
            symbols.push(symbol);
          });
        }
        this.symbols.push(exportedSymbol);
      }
    });

    return symbols;
  }

  getValueFromNode(node: ts.Node): Value | T {
    return getValueFromNode(this, node);
  }

  getValueFromType(type: ts.Type, node?: ts.Node): Value | T | undefined {
    return getValueFromType(this, type, node);
  }
}

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
function getValueFromNode(parser: DocParser, node: ts.Node): Value {
  if (node === undefined) {
    // This shouldn't happen, but we'd rather see `???` in the output than crash
    return unknownValue('???');
  }

  return (
    parser.plugins.reduce((result, fn) => {
      return result || fn(node, parser);
    }, undefined as Value | undefined) || _getValueFromNode(parser, node)
  );
}

/**
 * Private recursing function. Doesn't include plugins.
 */
function _getValueFromNode(parser: DocParser, node: ts.Node): Value {
  const {checker} = parser;
  // Uncomment for debugging
  // console.log(
  //   t.getKindNameFromNode(node) || node.kind,
  //   safeGetText(parser, node),
  //   checker.typeToString(checker.getTypeAtLocation(node))
  // );

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
      value: node.elements.map(e => getValueFromNode(parser, e)),
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
    // Treat Interfaces and Types with TypeLiterals as interfaces
    const type = checker.getTypeAtLocation(node);
    const properties = type
      .getProperties()
      .map(p => {
        return getValueFromNode(parser, getValueDeclaration(p)!);
      })
      .filter(filterObjectProperties);

    // get index signature...
    const indexType = getIndexSignatureFromType(parser, type);

    if (isObject(type) && (properties.length || indexType)) {
      const typeParameters = (
        (node as ts.InterfaceDeclaration).typeParameters ||
        (node.parent as ts.TypeAliasDeclaration).typeParameters
      )?.map(p => getValueFromNode(parser, p) as TypeParameter);

      return {
        kind: 'object',
        properties,
        typeParameters,
        indexSignature: indexType,
      };
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
      p => getValueFromNode(parser, p) as TypeParameter
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
    const isLocalTypeReference =
      t.isTypeReference(node.type) && !isExportedSymbol(parser, node.type.typeName);
    const value = isLocalTypeReference
      ? getValueFromType(parser, checker.getTypeAtLocation(node), node) ||
        unknownValue(safeGetText(parser, node))
      : getValueFromNode(parser, node.type);

    return {
      kind: 'type',
      typeParameters: typeParameters || [],
      value,
    };
  }

  /**
   * We'll treat classes as objects with properties
   * ```ts
   * class A {}
   * ```
   */
  if (t.isClassDeclaration(node)) {
    const type = checker.getTypeAtLocation(node);

    const value = getObjectValueFromType(parser, type);
    if (value.kind === 'object') {
      value.typeParameters = node.typeParameters
        ?.map(p => {
          return getValueFromNode(parser, p);
        })
        .filter(filterObjectTypeParameters);
    }

    return value;
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
    const properties = node.members
      .map(member => {
        return getValueFromNode(parser, member);
      })
      .filter(filterObjectProperties);
    return {kind: 'object', properties};
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
    return {kind: 'array', value: getValueFromNode(parser, node.elementType)};
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
    const constraint = node.constraint ? getValueFromNode(parser, node.constraint) : undefined;

    const defaultValue = node.default ? getValueFromNode(parser, node.default) : undefined;
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
   * In this example, the MethodDeclaration is `onClick(e: Event) {}`. Notice
   * there is no property signature like `onClick: (e: Event) => {}`
   *
   * Do before `ts.isFunctionLike` because we want to treat `MethodDeclaration`
   * as a `parameter` instead of a `function`
   */
  if (t.isMethodDeclaration(node)) {
    const signature = getValueFromSignatureNode(parser, node as ts.SignatureDeclaration)!;
    const symbol = getSymbolFromNode(parser, node);
    const type = checker.getTypeAtLocation(node);
    const jsDoc = findDocComment(checker, symbol);

    if (jsDoc.tags.default) {
    }

    return {
      kind: 'property',
      name: symbol?.name || '',
      type: signature,
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  /**
   * A MethodSignature is a type of property declaration within a TS type. It is a special syntax
   * for declaring a function property or method of a type. This includes any JSDoc.
   *
   * For example:
   * ```ts
   * type A = {
   *   onClick(e: Event): void
   * }
   * ```
   *
   * In this example, the MethodSignature is the `onClick(e: Event): void`. An alternative might be
   * `onClick: (e: Event) => void`.
   *
   * Do before `ts.isFunctionLike` because we want to treat `MethodSignature` as a `member` instead
   * of a `function`.
   */
  if (t.isMethodSignature(node)) {
    const signature = getValueFromSignatureNode(parser, node as ts.SignatureDeclaration)!;
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);

    return {
      kind: 'property',
      name: symbol?.name || (node.name as any).text || '',
      type: signature,
      ...jsDoc,
    };
  }

  /**
   * A FunctionType is a function declaration in Typescript's type annotation
   */
  if (t.isFunctionType(node)) {
    const declaration = node;
    const signature = checker.getSignatureFromDeclaration(declaration);
    if (signature) {
      return getValueFromSignature(parser, node, signature);
    } else {
      return getValueFromSignature(parser, node, generateSignatureFromTypeNode(parser, node)!);
    }
  }

  // All function like have call signatures. All special function-like node
  // processing should happen before this line
  if (ts.isFunctionLike(node)) {
    return getValueFromSignatureNode(parser, node);
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
      return getValueFromNode(parser, node.type);
    }

    // An `AsExpression` is a type, so we'll return that
    if (node.initializer && t.isAsExpression(node.initializer)) {
      return getValueFromNode(parser, node.initializer);
    }

    if (
      node.initializer &&
      t.isIdentifier(node.initializer) &&
      isExportedSymbol(parser, node.initializer)
    ) {
      const symbol = getSymbolFromNode(parser, node.initializer);
      return {
        kind: 'symbol',
        name: node.initializer.text,
        fileName: symbol?.valueDeclaration?.getSourceFile().fileName,
      };
    }

    if (node.initializer && ts.isFunctionLike(node.initializer)) {
      return getValueFromNode(parser, node.initializer);
    }

    // We have no type information in the AST. We'll get the Type from the type checker and run some
    // tests on what we have

    const type = checker.getTypeAtLocation(node.initializer || node);
    // Both functions and objects are considered objects to Typescript
    if (isObject(type)) {
      if (type.objectFlags & ts.ObjectFlags.ArrayLiteral) {
        return getValueFromType(parser, type) || unknownValue(safeGetText(parser, node));
      }
      return getObjectValueFromType(parser, type);
    }

    const value = getValueFromType(parser, type);
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
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);
    // Get the name of the property - it could be a symbol or have a `name` that is an identifier or string literal
    const name =
      symbol?.name ||
      ((t.isIdentifier(node.name)
        ? node.name.text
        : t.isStringLiteral(node.name)
        ? node.name.text
        : '') as string);
    return {
      kind: 'property',
      name,
      required: node.questionToken ? false : true,
      type: node.type
        ? getValueFromNode(parser, node.type)
        : unknownValue(safeGetText(parser, node)),
      ...jsDoc,
    };
  }

  /**
   * A PropertyDeclaration is a property declared in a class
   *
   * ```ts
   * class A {
   *   a = 'b'
   * }
   * ```
   *
   * In this example, the PropertyDeclaration is `a = 'b'`
   */
  if (t.isPropertyDeclaration(node)) {
    const name = getNodeName(node);
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);
    const type = checker.getTypeAtLocation(node);

    return {
      kind: 'property',
      name: name || symbol?.name || 'unknown',
      type: getValueFromType(parser, type) || unknownValue(safeGetText(parser, node)),
      ...jsDoc,
    };
  }

  /**
   * An ObjectLiteralExpression is a JS value of an object literal.
   *
   * For example:
   * ```ts
   * const a = {
   *   b: 'b'
   * }
   * ```
   *
   * In this example, `{ b, 'b' }` is the full object literal (including newlines)
   */
  if (t.isObjectLiteralExpression(node)) {
    return {
      kind: 'object',
      properties: node.properties
        .flatMap(property => {
          const value = getValueFromNode(parser, property);
          if (value.kind === 'object') {
            return value.properties;
          }
          return value;
        })
        .filter(filterObjectProperties),
    };
  }

  if (t.isInferType(node)) {
    return {
      kind: 'infer',
      value: getValueFromNode(parser, node.typeParameter),
    };
  }

  if (t.isSpreadAssignment(node)) {
    const symbol = getSymbolFromNode(parser, node.expression);
    const declaration = getValueDeclaration(symbol);
    if (declaration) {
      return getValueFromNode(parser, declaration);
    }
  }

  if (t.isArrayLiteralExpression(node)) {
    let values: Value[] = [];
    node.elements.forEach(element => {
      if (t.isSpreadElement(element)) {
        t.getKindNameFromNode(element);
        const value = getValueFromNode(parser, element);
        if (value.kind === 'array' || value.kind === 'tuple') {
          values = values.concat(value.value);
        }
      } else {
        const value = getValueFromNode(parser, element);
        values.push(value);
      }
    });
    return {
      kind: 'tuple',
      value: values,
    };
  }

  if (t.isSpreadElement(node)) {
    const symbol = getSymbolFromNode(parser, node.expression);
    const declaration = getValueDeclaration(symbol);
    if (declaration) {
      return getValueFromNode(parser, declaration);
    }

    return getValueFromNode(parser, node.expression);
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
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);

    // For default values, we want the value and not the type. An `AsExpression` redirects to types,
    // so we want to bypass it to get the value node
    const defaultValueNode = t.isAsExpression(node.initializer)
      ? node.initializer.expression
      : node.initializer;

    return {
      kind: 'property',
      name: symbol?.name || '',
      defaultValue: getValueFromNode(parser, defaultValueNode),
      type: getValueFromType(parser, type) || unknownValue(safeGetText(parser, node)),
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  // as A
  if (t.isAsExpression(node)) {
    if (safeGetText(parser, node) === 'const') {
      const type = checker.getTypeAtLocation(node.parent);
      return getValueFromType(parser, type) || unknownValue(safeGetText(parser, node));
    }
    return getValueFromNode(parser, node.type);
  }

  if (t.isTypeOperator(node) && node.operator === ts.SyntaxKind.KeyOfKeyword) {
    // We can get into trouble if `node` is a synthetic node. We'll check if we're encountering
    // something like `keyof A`. In this case, we'll get the symbol and ask for the properties of
    // the symbol's declaration.
    if (t.isTypeReference(node.type)) {
      const symbol = getSymbolFromNode(parser, node.type.typeName);
      const declaration = getValueDeclaration(symbol);
      if (symbol && declaration && isExportedSymbol(parser, declaration)) {
        return {
          kind: 'keyof',
          name: {
            kind: 'symbol',
            name: symbol.name,
            fileName: declaration.getSourceFile().fileName,
            value: `keyof ${symbol.name}`,
          },
        };
      }
    }
    // A `keyof` in a synthetic TypeNode will cause us problems. It means a TypeNode was generated
    // by `getValueFromType`. `checker.getTypeAtLocation` on a synthetic TypeNode will always be
    // `any`. I means going down this tree will not work and we need to throw an error. This error
    // will bubble to a `try...catch` in `getValueFromType` and it will instead extract a value from
    // the `Type` and not the `TypeNode`
    if (node.end < 0) {
      // We're a synthetic TypeNode
      throw Error('Cannot process a synthetic TypeNode with a `keyof`');
    }

    return (
      getValueFromType(parser, checker.getTypeFromTypeNode(node), node) ||
      unknownValue(safeGetText(parser, node))
    );
  }

  // A literal type contains literals like `string` or `number` or `'foo'`
  if (t.isLiteralType(node)) {
    return getValueFromNode(parser, node.literal);
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

  if (node.kind === ts.SyntaxKind.NeverKeyword) {
    return {kind: 'primitive', value: 'never'};
  }

  // 100
  if (t.isNumericLiteral(node)) {
    return {kind: 'number', value: Number(node.text)};
  }

  // void
  if (node.kind === ts.SyntaxKind.VoidKeyword) {
    return {kind: 'primitive', value: 'void'};
  }

  // any
  if (node.kind === ts.SyntaxKind.AnyKeyword) {
    return {kind: 'primitive', value: 'any'};
  }

  // unknown
  if (node.kind === ts.SyntaxKind.UnknownKeyword) {
    return {kind: 'primitive', value: 'unknown'};
  }

  // undefined
  if (node.kind === ts.SyntaxKind.UndefinedKeyword) {
    return {kind: 'primitive', value: 'undefined'};
  }

  // `something`
  if (t.isTemplateExpression(node)) {
    return {kind: 'primitive', value: 'string'};
  }

  // type A = `{anything}`
  if (t.isTemplateLiteralType(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(parser, type, node) || unknownValue(checker.typeToString(type));
  }

  // A | B
  if (t.isUnionType(node)) {
    return {
      kind: 'union',
      value: node.types.map(type => getValueFromNode(parser, type)),
    };
  }

  // A & B
  if (t.isIntersectionType(node)) {
    return {
      kind: 'intersection',
      value: node.types.map(type => getValueFromNode(parser, type)),
    };
  }

  // ()
  if (t.isParenthesizedType(node)) {
    return {kind: 'parenthesis', value: getValueFromNode(parser, node.type)};
  }

  // type A = B['C']
  if (t.isIndexedAccessType(node)) {
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(parser, type, node) || unknownValue(safeGetText(parser, node));
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
    return {
      kind: 'conditional',
      check: getValueFromNode(parser, node.checkType),
      extends: getValueFromNode(parser, node.extendsType),
      trueType: getValueFromNode(parser, node.trueType),
      falseType: getValueFromNode(parser, node.falseType),
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
    if (isExportedSymbol(parser, node.left)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.left));
      return {
        kind: 'qualifiedName',
        left: {kind: 'symbol', name: safeGetText(parser, node.left), value},
        right: {kind: 'string', value: safeGetText(parser, node.right)},
      };
    }
    // if the node.left is not exported, we'll reduce to a type
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(parser, type, node) || unknownValue(checker.typeToString(type));
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
    if (isExportedSymbol(parser, node.exprName)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.exprName));
      return {kind: 'symbol', name: node.exprName.getText(), value};
    }
    const symbol = getSymbolFromNode(parser, node.exprName);
    if (symbol) {
      const declaration = getValueDeclaration(symbol)!;
      return getValueFromNode(parser, declaration);
    }
  }

  /**
   * A PropertyAccessExpression is an expression with a property on it.
   *
   * For example:
   * ```ts
   * foo.bar = 'bar'
   * ```
   *
   * In this example, the `PropertyAccessExpression` is `foo.bar`. It can be used by functions to
   * add additional properties on the function.
   */
  if (t.isPropertyAccessExpression(node)) {
    let typeInfo: Value;
    if (t.isAsExpression(node.name)) {
      typeInfo = getValueFromNode(parser, node.name);
    }
    const type = checker.getTypeAtLocation(node);
    typeInfo = getValueFromType(parser, type) || unknownValue(checker.typeToString(type));
    return {kind: 'property', name: node.name.getText(), type: typeInfo} as Value;
  }

  /**
   * A TypeReference is a node that references a Typescript type rather than a JavaScript value.
   *
   * In the following example, `MyType` is a TypeReference (the declaration of MyType is omitted)
   * ```ts
   * const a = 'a' as MyType
   * const b: MyType = 'b'
   * type A = MyType
   * type B = Record<MyType>
   * ```
   *
   * Any time a type is referenced (not declared) is a TypeReference.
   * ```
   */
  if (t.isTypeReference(node)) {
    // handle `as const` specially. If we don't do this, we'll get into an infinite loop
    if (safeGetText(parser, node) === 'const') {
      const type = checker.getTypeAtLocation(node.parent.parent);
      return getValueFromType(parser, type) || unknownValue(node.parent.parent.getText());
    }

    const typeParameters = node.typeArguments?.map(
      p => getValueFromNode(parser, p) as TypeParameter
    );
    const symbolNode = t.isQualifiedName(node.typeName) ? node.typeName.right : node.typeName;
    const symbol = getSymbolFromNode(parser, symbolNode);
    const fileName = getValueDeclaration(symbol)?.getSourceFile().fileName;
    const externalSymbol = getExternalSymbol(symbol?.name || safeGetText(parser, node), fileName);
    if (externalSymbol) {
      return {
        kind: 'external',
        name: symbol?.name || '',
        url: externalSymbol,
        typeParameters,
      };
    }

    if (isExportedSymbol(parser, symbolNode)) {
      const value = checker.typeToString(checker.getTypeAtLocation(node.typeName));
      return {kind: 'symbol', name: safeGetText(parser, node.typeName), typeParameters, value};
    }

    // If it is a qualified name, handle that specially. The `left` might be a symbol
    if (t.isQualifiedName(node.typeName)) {
      return getValueFromNode(parser, node.typeName);
    }

    // The TypeReference isn't exported, so we'll return the type of the
    // symbol's value declaration directly
    const type = checker.getTypeAtLocation(node);
    if (symbol) {
      if (type.getFlags() & ts.TypeFlags.Instantiable) {
        symbol.name; //?
        // It is a generic type
        return {kind: 'generic', name: symbol?.name};
      }

      const declaration = getValueDeclaration(symbol);
      if (declaration) {
        const typeInfo = getValueFromNode(parser, declaration);
        // we want to embed objects
        if (typeInfo.kind === 'object') {
          return typeInfo;
        }
      }
    }

    // The type reference is not external, not an exported symbol, and not generic.
    // Fall back to returning the value from it's type property
    return getValueFromType(parser, type) || unknownValue(safeGetText(parser, node));
  }

  /**
   * A ShorthandPropertyAssignment is a PropertyAssignment that is shorthanded where the `name` and
   * `initializer` are the same value.
   *
   * For example:
   * ```ts
   * const a = {
   *   b
   * }
   * ```
   *
   * In this example, `b` is the `ShorthandPropertyAssignment`. `b` is both the `name` and
   * `initializer` of the PropertyAssignment.
   *
   * Note the symbol declaration is the PropertyAssignment and not the symbol of the initializer. In
   * a PropertyAssignment, there are two parts, the `name` (name of the property) and an
   * `initializer` (the value of the property). In a PropertyAssignment, the `initializer` symbol
   * points to the VariableDeclaration.
   */
  if (t.isShorthandPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);

    // see if the declaration is assigned to something exported

    return {
      kind: 'property',
      name: symbol?.name || '',
      type: getValueFromType(parser, type) || unknownValue(safeGetText(parser, node)),
      ...jsDoc,
    };
  }

  /**
   * Declaration of a enum
   *
   * For example:
   * ```ts
   * enum A {
   *   a = 'a',
   *   b = 'b'
   * }
   * ```
   */
  if (t.isEnumDeclaration(node)) {
    return {
      kind: 'object',
      typeParameters: [],
      properties: node.members.map((m, index) => {
        return {
          kind: 'property',
          name: safeGetText(parser, m.name),
          type: m.initializer
            ? getValueFromNode(parser, m.initializer)
            : {kind: 'number', value: index},
        } as ObjectProperty;
      }),
      callSignatures: [],
    };
  }

  /**
   * An Identifier isn't normally a node type we deal with, but it is useful for determining
   * defaultValue of things. If the initializer of a property is an identifier and that identifier
   * is an exported symbol, we'll assign it a symbol.
   *
   * For example:
   * ```ts
   * const a = b
   * ```
   *
   * In this example, `b` is the identifier because it is a value reference to something else.
   */
  if (t.isIdentifier(node)) {
    if (isExportedSymbol(parser, node)) {
      const symbol = getSymbolFromNode(parser, node);
      const declaration = getValueDeclaration(symbol);
      return {
        kind: 'symbol',
        name: node.text,
        fileName: declaration?.getSourceFile().fileName,
        value: node.text,
      };
    }
    if (node.text === 'undefined') {
      return {kind: 'primitive', value: 'undefined'};
    }
  }

  /**
   *
   */
  if (t.isParameter(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(parser, node);
    const jsDoc = findDocComment(checker, symbol);
    const isRequired = node.questionToken
      ? false
      : node.initializer
      ? false
      : symbol
      ? !isOptional(symbol) && !includesUndefined(type)
      : false;

    const typeInfo = node.type
      ? getValueFromNode(parser, node.type)
      : getValueFromType(parser, type) || unknownValue(safeGetText(parser, node));

    const defaultValue = node.initializer ? getValueFromNode(parser, node.initializer) : undefined;

    /**
     * Set default values if an object binding pattern is found. We do this at the Parameter level,
     * because we have all the info here.
     *
     * For example:
     * ```ts
     * function A({ a = 'a', b}: Params)
     * ```
     *
     * In this example, the ObjectBindingPattern is `{ a = 'a', b }`
     */
    if (t.isObjectBindingPattern(node.name)) {
      const defaults = getDefaultsFromObjectBindingParameter(parser, node);
      if (typeInfo.kind === 'object') {
        typeInfo.properties.forEach(p => {
          if (!p.defaultValue && defaults[p.name]) {
            p.defaultValue = defaults[p.name];
          }
        });
      }
    }

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

  /**
   * A call expression is an expression calling a function. In this case, we want to get the signature
   * and get a type for the return type
   */
  if (t.isCallExpression(node)) {
    const type = checker.getTypeAtLocation(node);
    const value = getValueFromType(parser, type);
    if (value) {
      return value;
    }
  }

  const symbol = getSymbolFromNode(parser, node);
  if (!symbol) {
    return unknownValue(safeGetText(parser, node));
  }

  return unknownValue(safeGetText(parser, node));
}

/** True if this is visible outside this file, false otherwise */
function isNodeExported(checker: ts.TypeChecker, node: ts.Node): boolean {
  return (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0;
}

export const defaultJSDoc: JSDoc = {
  description: '',
  tags: {},
  declarations: [],
};

export function getFullJsDocComment(checker: ts.TypeChecker, symbol: ts.Symbol) {
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

export function findDocComment(checker: ts.TypeChecker, symbol?: ts.Symbol): JSDoc {
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

/**
 * Attempt to get the name of a declaration or expression
 */
export function getNodeName(node: ts.Expression | ts.Declaration): string | undefined {
  const name = ts.getNameOfDeclaration(node);
  if (name && 'text' in name) {
    return name.text;
  }

  return;
}

export function filterObjectProperties(value: any): value is ObjectProperty {
  return value.kind === 'property';
}

export function filterObjectTypeParameters(value: any): value is TypeParameter {
  return value.kind === 'typeParameter';
}

export function filterFunctionParameters(value: any): value is FunctionParameter {
  return value.kind === 'parameter';
}

// https://github.com/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/components/PropertiesViewer.tsx#L172
export function getSymbolFromNode(parser: DocParser, node: ts.Node): ts.Symbol | undefined {
  return (node as any).symbol || parser.checker.getSymbolAtLocation(node);
}

export function isObject(type: ts.Type): type is ts.ObjectType {
  return !!(type.flags & ts.TypeFlags.Object);
}

function includesUndefined(type: ts.Type) {
  return type.isUnion() ? type.types.some(t => t.flags & ts.TypeFlags.Undefined) : false;
}

function isTupleType(type: ts.Type): type is ts.TupleTypeReference {
  return !!((type as any).target?.objectFlags & ts.ObjectFlags.Tuple);
}

/**
 * Given a node, extract a default value and only return a `Value` if we consider it to be
 * a valid default. For example, a literal is valid.
 *
 * Valid:
 * - `'medium'`
 * - `true`
 * - 10
 *
 * Invalid:
 * - `string`
 * - `{foo: string}`
 */
export function getValidDefaultFromNode(parser: DocParser, node: ts.Node): Value | undefined {
  if (
    t.isFalseKeyword(node) ||
    t.isTrueKeyword(node) ||
    t.isLiteralType(node) ||
    t.isStringLiteral(node) ||
    t.isNumericLiteral(node)
  ) {
    return parser.getValueFromNode(node);
  }
  return undefined;
}

/**
 * A parameter might represent a `ObjectBindingPattern` which can be used to set defaults. This will
 * return all defaults found within the `ObjectBindingPattern` and return them as a map of the
 * property name to the `Value`. These defaults can be used to piece together a default. Also
 * `getDefaultFromTags` can be used to get defaults from JSDoc tags.
 */
export function getDefaultsFromObjectBindingParameter(
  parser: DocParser,
  node: ts.ParameterDeclaration
): Record<string, Value> {
  if (t.isObjectBindingPattern(node.name)) {
    return node.name.elements.reduce((result, element) => {
      if (t.isBindingElement(element) && t.isIdentifier(element.name) && element.initializer) {
        const defaultValue = getValidDefaultFromNode(parser, element.initializer);
        if (defaultValue) {
          result[element.name.text] = defaultValue;
        }
      }
      return result;
    }, {} as Record<string, Value>);
  }

  return {};
}

/**
 * An index signature is like a "leftover" of an object. For example:
 *
 * ```ts
 * interface A {
 *   a: string,
 *   b: string,
 *   [key: string]: string
 * }
 * ```
 *
 * The index signature is `[key: string]: string`. It allows an interface to specify valid
 * additional properties even though the interface has specific properties defined. Index signature
 * types depend on the Typescript version, so this function will have to be updated to support the
 * correct version of Typescript.
 */
function getIndexSignatureFromType(
  parser: DocParser,
  type: ts.Type
): IndexSignatureValue | undefined {
  const {checker} = parser;
  const indexSignature =
    checker.getIndexInfoOfType(type, ts.IndexKind.String) ||
    checker.getIndexInfoOfType(type, ts.IndexKind.Number);

  if (indexSignature) {
    const parameter = indexSignature.declaration?.parameters[0];
    return {
      kind: 'indexSignature',
      name: parameter?.name ? safeGetText(parser, parameter?.name) : '',
      type:
        (parameter && getValueFromType(parser, checker.getTypeAtLocation(parameter), parameter)) ||
        unknownValue(''),
      value: indexSignature.declaration
        ? getValueFromNode(parser, indexSignature.declaration.type)
        : unknownValue(checker.typeToString(type)),
    };
  }
  return;
}

/**
 *
 * @param checker The shared Typescript checker
 * @param type The type we're trying to find a Value for
 * @param node An optional node that was used to generate the Type. It should be used for all type
 * nodes (AST nodes that are types and not JS values). This extra information can prevent errors and
 * infinite loops.
 */
export function getValueFromType(
  parser: DocParser,
  type: ts.Type,
  node?: ts.Node
): Value | undefined {
  const {checker} = parser;
  const originalNodeKind = node?.kind;
  const typeToString = checker.typeToString(type);

  // If the type is `any`, we want to bail now
  if (type.flags & ts.TypeFlags.Any) {
    return {kind: 'primitive', value: 'any'};
  }

  // check if the node is an external symbol
  // TODO: This won't work if the symbol contains a generic
  const externalSymbol = getExternalSymbol(typeToString);
  if (externalSymbol) {
    return {kind: 'external', name: typeToString, url: externalSymbol};
  }

  if (isTupleType(type)) {
    return {
      kind: 'union',
      value:
        checker.getTypeArguments(type).map(t => getValueFromType(parser, t) || unknownValue('')) ||
        [],
    };
  }

  // See if there is a TypeNode associated with the type. This is common in type definitions and can
  // be useful to get type parameters (for example, `Promise<boolean>`, `boolean` is a type
  // parameter). I'm using Signatures to get a return `Type`, but it might be next to impossible
  // to get a real `Node` out of it again. The `Type` of this node is `any` making it difficult.
  // For example, I might get a `BooleanKeyword` syntax kind, but I don't have guards for that type.
  //

  // A TypeNode is a synthetic node that doesn't have any associated source code. A TypeNode can
  // contain child nodes that are linked to real AST nodes in the source code. Think of a TypeNode
  // as an AST representation of `checker.typeToString()`. The string version is reduced to a string
  // of characters where a TypeNode is an AST representation of that string.
  //
  // One interesting fact about this is when you have a union type that overflows. You may see
  // something like:
  // ```ts
  // "'a' | 'b' | ...23 more... | 'z'"
  // ```
  // In this case, the TypeNode will be a UnionType that contains an Identifier node with a name of
  // "...23 more..."
  //
  // We generally prefer TypeNodes because I'm pretty sure it is what the Typescript language
  // service uses for the tooltips when hovering over text in your IDE. We try to go from Type to
  // Node whenever possible, but there are some cases where interacting directly with the types is
  // preferred. The union example is one of such examples.
  const typeNode = checker.typeToTypeNode(type, node, ts.NodeBuilderFlags.NoTruncation);

  // We try to extract useful type information from the TypeNode and go back to recursing the AST.
  // But, if the typeNode and original node have the same kind, we've actually lost information and
  // should skip processing the TypeNode.
  if (typeNode && originalNodeKind !== typeNode.kind) {
    // find the symbol
    if (t.isTypeReference(typeNode)) {
      const symbol = getSymbolFromNode(parser, typeNode.typeName);
      const declaration = getValueDeclaration(symbol);
      const fileName = declaration?.getSourceFile().fileName;
      if (symbol) {
        const externalSymbol = getExternalSymbol(symbol.name, fileName);
        if (externalSymbol) {
          return {kind: 'external', name: symbol.name, url: externalSymbol};
        }

        if (declaration && declaration !== node) {
          if (isExportedSymbol(parser, declaration)) {
            return {kind: 'symbol', name: symbol.name, value: typeToString};
          }
          return getValueFromNode(parser, declaration);
        }
      }
    }

    // Figure out if we should recurse back into AST nodes with our synthetic TypeNode. There are
    // exceptions to using the TypeNode. Exceptions where we actually lose type information. Some
    // examples are large unions or `keyof`:
    let exceptions = false;

    // The typeNode is a UnionType, but the number of items has overflowed with an identifier `...
    // {N} more ...`, so we don't want to use the typeNode and will use `type.types` instead which
    // is not shortened. In this case we want to do nothing and use the type-based union check
    if (
      t.isUnionType(typeNode) &&
      type.isUnion() &&
      typeNode.types.some(
        v =>
          t.isIdentifier(v) ||
          (t.isTypeReference(v) &&
            t.isIdentifier(v.typeName) &&
            (v.typeName.escapedText as string).includes('more'))
      )
    ) {
      exceptions = true;
    }

    // A function TypeNode looses a lot of information. We'll fallback to using the type. A Function
    // is an object with call signatures which is caught in the `t.isObject()` check
    if (t.isFunctionType(typeNode)) {
      exceptions = true;
    }

    // A TypeNode of `keyof` looses type information
    if (t.isTypeOperator(typeNode) && typeNode.operator === ts.SyntaxKind.KeyOfKeyword) {
      exceptions = true;
    }

    // A TypeNode of a Type literal looses symbol and JSDoc info
    if (t.isTypeLiteral(typeNode)) {
      exceptions = true;
    }

    // We want type unions to override type references that are not exported
    if (t.isTypeReference(typeNode) && type.isUnion()) {
      exceptions = true;
    }

    if (!exceptions) {
      try {
        return getValueFromNode(parser, typeNode);
      } catch (e) {
        // If we are here, we've run into an issue parsing the TypeNode. This could happen if a
        // Synthetic node contains `keyof` which is a type that doesn't point to a real AST node so
        // Typescript cannot evaluate the type and will result in an error. Under these cases, we'll
        // fall back to extracting info from the Type rather than the TypeNode.
        // We don't want to log this as it spams the console...
        // const message =
        //   e instanceof Error ? e.message : typeof e === 'string' ? e : 'Unknown Error';
        // console.info('Parsing of a TypeNode failed:', message);
      }
    }
  }

  /**
   * If the type is a union, we want to deal with it now to avoid issues with infinite loops and a
   * TypeNode.
   */
  if (type.isUnion()) {
    // If we got here, it means a TypeNode was a TypeReference that wasn't exported or a synthetic
    // TypeNode `keyof *` that `getValueFromNode` couldn't properly parse.
    let filteredTypes = type.types;

    return {
      kind: 'union',
      value: filteredTypes.map(
        t => getValueFromType(parser, t) || unknownValue(checker.typeToString(t))
      ),
    };
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
    return {kind: 'boolean', value: checker.typeToString(type) === 'true'};
  }

  if (isObject(type)) {
    if (type.objectFlags & ts.ObjectFlags.ArrayLiteral) {
      const typeNode = checker.typeToTypeNode(type, undefined, undefined);
      if (typeNode) {
        return getValueFromNode(parser, typeNode);
      }
    }

    return getObjectValueFromType(parser, type);
  }

  return;
}

export function unknownValue(nodeText: string) {
  return {kind: 'unknown', value: 'unknown', text: nodeText} as UnknownValue;
}

export function isExportedSymbol(parser: DocParser, node: ts.Node): boolean {
  const sourceFile = node.getSourceFile?.();
  if (sourceFile?.isDeclarationFile) {
    return true;
  }
  const symbol = getSymbolFromNode(parser, node);
  const declarationNode = getValueDeclaration(symbol);

  // Prevent circular types that aren't exported
  if (symbol && declarationNode) {
    if (parser.visitedTypeScriptSymbols[symbol.name]) {
      return true;
    }
    // We don't consider type parameter declarations to be visited. These are generics like `T`
    if (!t.isTypeParameter(declarationNode)) {
      parser.visitedTypeScriptSymbols[symbol.name] = declarationNode.kind;
    }
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
    return isNodeExported(parser.checker, declarationNode);
  }
  return false;
}

export function getValueDeclaration(symbol?: ts.Symbol): ts.Declaration | undefined {
  return symbol?.valueDeclaration || symbol?.declarations?.[0];
}

function isOptional(symbol: ts.Symbol): boolean {
  return (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0;
}

function safeGetText(parser: DocParser, node: ts.Node): string {
  if (node.getSourceFile?.()) {
    return node.getText();
  }
  // We have a synthetic TypeNode so we'll try to get useful text out of it.

  // It might be an identifier or literal type with a `text` property
  if ((node as any).text) {
    return (node as any).text;
  }
  // Try a symbol
  const symbol = getSymbolFromNode(parser, node);
  return symbol?.name || `SyntheticNode - ${t.getKindNameFromNode(node)}`;
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
function getExportMembers(parser: DocParser, node: ts.Node) {
  const exports = getSymbolFromNode(parser, node)?.exports || new Map();
  const members = (Array.from(exports.values() as any) as ts.Symbol[])
    .map(symbol => {
      const declaration = getValueDeclaration(symbol);
      if (declaration) {
        return getValueFromNode(parser, declaration);
      }
      return;
    })
    .filter((i): i is Value => !!i);

  return members;
}

function getValueFromSignature(
  parser: DocParser,
  declaration: ts.SignatureDeclaration,
  signature: ts.Signature
): Value {
  const members = getExportMembers(parser, declaration);

  const typeParameters = signature.typeParameters
    ?.map(p => getValueFromType(parser, p))
    .filter((v): v is TypeParameter => v?.kind === 'typeParameter');

  const parameters = signature.parameters.map(s => {
    return getValueFromNode(parser, getValueDeclaration(s)!) as FunctionParameter;
  });

  const returnType = declaration.type
    ? getValueFromNode(parser, declaration.type)
    : getValueFromType(parser, signature.getReturnType()) || unknownValue(declaration.getText());

  return {
    kind: 'function',
    typeParameters,
    parameters,
    members,
    returnType,
  };
}

function generateSignatureFromTypeNode(parser: DocParser, node: ts.Node): ts.Signature | undefined {
  if (t.isFunctionType(node) || t.isMethodSignature(node)) {
    const parameters = node.parameters.map(
      p => (getSymbolFromNode(parser, p) || getSymbolFromNode(parser, p.name))!
    );
    const typeParameters = node.typeParameters?.map(
      t => parser.checker.getTypeAtLocation(t) as ts.TypeParameter
    );
    return {
      parameters,
      declaration: node as ts.SignatureDeclaration,
      typeParameters,
      getDeclaration() {
        return node as ts.SignatureDeclaration;
      },
      getParameters() {
        return parameters;
      },
      getTypeParameters() {
        return typeParameters;
      },
      getReturnType() {
        return parser.checker.getTypeAtLocation(node.type || node);
      },
      getDocumentationComment() {
        const symbol = getSymbolFromNode(parser, node)!;
        return symbol.getDocumentationComment(parser.checker);
      },
      getJsDocTags() {
        const symbol = getSymbolFromNode(parser, node)!;
        return symbol.getJsDocTags();
      },
    };
  }

  return undefined;
}

export function getValueFromSignatureNode(
  parser: DocParser,
  declaration: ts.SignatureDeclaration
): Value {
  const {checker} = parser;
  const signature =
    checker.getSignatureFromDeclaration(declaration) ||
    generateSignatureFromTypeNode(parser, declaration);
  if (signature) {
    return getValueFromSignature(parser, declaration, signature);
  }
  return unknownValue(safeGetText(parser, declaration));
}

function getObjectValueFromType(parser: DocParser, type: ts.Type): Value {
  const properties = type
    .getProperties()
    .map(symbol => {
      return getValueFromNode(parser, getValueDeclaration(symbol)!);
    })
    .filter(filterObjectProperties);
  const callSignatures = type.getCallSignatures().map(s => {
    return getValueFromSignatureNode(parser, s.getDeclaration());
  });

  if (callSignatures.length) {
    // We have a function and no properties
    if (properties) {
      (callSignatures[0] as FunctionValue).members = properties;
    }
    return callSignatures[0];
  }

  return {kind: 'object', properties};
}

/**
 * Get defaults from JSDoc tags if available and do some simple processing to extract useful type
 * information. JSDoc tags are not type checked, so our processing is limited.
 */
export function getDefaultFromTags(tags: ts.JSDocTagInfo[]): Value | undefined {
  for (const tag of tags) {
    if (tag.name === 'default') {
      const text = (tag.text || '').replace('{', '').replace('}', '');
      if (
        [
          'string',
          'number',
          'null',
          'undefined',
          'boolean',
          'any',
          'void',
          'unknown',
          'any',
        ].includes(text)
      ) {
        return {kind: 'primitive', value: text as PrimitiveValue['value']};
      }
      if (['true', 'false'].includes(text)) {
        return {kind: 'boolean', value: text === 'true'};
      }
      if (!Number.isNaN(Number(text))) {
        return {kind: 'number', value: Number(text)};
      }
      if (/^['"][a-z0-9]+['"]$/.test(text)) {
        return {kind: 'string', value: text.replace(/["']/g, '')};
      }
      return {kind: 'symbol', name: text, value: text};
    }
  }
  return;
}

/**
 * A parser plugin will first receive a node. If the plugin knows how to handle the node, it should
 * return an array of exported symbols to add to docs. If it does not know how to handle the node,
 * it should return `undefined` to allow other plugins (or the general parser) to process the node.
 */
export type ParserPlugin<TAdditionalValues extends {kind: string} = Value> = (
  /** The node currently being processed */
  node: ts.Node,
  /**
   * The parser instance. The parser gives access to symbols, the checker, etc. For example, the
   * shared `symbols` property of the parser is the collection of symbols already processed. You can
   * push new symbols or search for existing symbols. If your plugin doesn't need to access existing
   * symbols, you can ignore this parameter.
   */
  parser: DocParser<TAdditionalValues>
) => Value | TAdditionalValues | undefined | null;

/**
 * This factory function makes it easy to create plugins by providing Typescript types
 *
 * @example
 * ```ts
 * import ts from 'typescript'
 *
 * const myPlugin = createParserPlugin((node, parser) => {
 *   // run tests on a node
 *  if (ts.isVariableDeclaration(node))
 * }
 * ```
 */
export function createParserPlugin<TAdditionalValues extends {kind: string} = Value>(
  fn: ParserPlugin<TAdditionalValues>
): ParserPlugin<TAdditionalValues> {
  return fn;
}

/**
 * This small function makes it easier to write tests, but generally shouldn't be used. It creates a
 * new parser per file. Instead use the parser directly and call `parser.getExportedSymbols` for
 * each file to share memory.
 */
export function parse<T extends {kind: string} = Value>(
  program: ts.Program,
  fileName: string,
  plugins: ParserPlugin<T>[] = []
): ExportedSymbol<Value | T>[] {
  const parser = new DocParser<T>(program, plugins);

  return parser.getExportedSymbols(fileName);
}
