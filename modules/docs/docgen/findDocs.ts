import ts, {TypeAliasDeclaration} from 'typescript';
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
  node.getText(); //?
  t.getKindNameFromNode(node); //?
  ts.getCombinedModifierFlags(node as ts.Declaration); //?
  return (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0;
}

const defaultJSDoc: JSDoc = {
  description: '',
  tags: {},
  declarations: [],
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

  const tagMap: Record<string, string> = {};

  tags.forEach(tag => {
    tag; //?
    const trimmedText = (tag.text || '').trim(); //?
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

function isObject(type: ts.Type) {
  return !!(type.flags & ts.TypeFlags.Object);
}

function includesUndefined(type: ts.Type) {
  return type.isUnion() ? type.types.some(t => t.flags & ts.TypeFlags.Undefined) : false;
}

function getValueFromType(
  checker: ts.TypeChecker,
  type: ts.Type,
  filterUndefined = false
): Value | undefined {
  checker.typeToString(type); //?
  filterUndefined; //?

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

  if (type.isUnion()) {
    let filteredTypes = type.types;
    'here'; //?
    filterUndefined; //?
    checker.typeToString(type); //?
    if (filterUndefined) {
      'here'; //?
      filteredTypes = type.types.filter(t => {
        return !(t.flags & ts.TypeFlags.Undefined); //?
      }); //?
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

  if (type.isTypeParameter()) {
    'here'; //?
    return {kind: 'symbol', name: type.symbol.name};
  }

  return;
}

const unknownValue = (nodeText: string) =>
  ({kind: 'unknown', value: 'unknown', text: nodeText} as UnknownValue);

function isValue(input: any): input is Value {
  return typeof input === 'object' && !!input.type;
}

function isExportedSymbol(checker: ts.TypeChecker, node: ts.Node): boolean {
  const sourceFile = node.getSourceFile();
  sourceFile.fileName; //?
  node.getText(); //?
  sourceFile.isDeclarationFile; //?
  if (sourceFile.isDeclarationFile) {
    return true;
  }
  const symbol = checker.getSymbolAtLocation(node); //?
  const declarationNode = getValueDeclaration(symbol); //?
  if (declarationNode) {
    t.getKindNameFromNode(declarationNode); //?
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

function getValueDeclaration(symbol?: ts.Symbol): ts.Node | undefined {
  return symbol?.valueDeclaration || symbol?.declarations?.[0];
}

function isOptional(symbol: ts.Symbol): boolean {
  return (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0;
}

function getTypeValueFromNode(checker: ts.TypeChecker, node: ts.Node): Value {
  if (node === undefined) {
    return unknownValue('???');
  }
  console.log(t.getKindNameFromNode(node) || node.kind, node.getText());

  if (t.isTupleType(node)) {
    return {kind: 'tuple', value: node.elements.map(e => getTypeValueFromNode(checker, e))};
  }

  if (
    (t.isTypeAliasDeclaration(node) && t.isTypeLiteral(node.type)) ||
    t.isInterfaceDeclaration(node)
  ) {
    // Treat Interfaces and Types with TypeLiterals as interfaces
    const type = checker.getTypeAtLocation(node);
    checker.typeToString(type); //?
    const properties = type.getProperties().map<TypeMember>(p => {
      // p.parameters[0].name; //?
      p.name; //?
      t.getKindNameFromNode(getValueDeclaration(p)); //?
      return getTypeValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
    });

    if (isObject(type) && properties.length) {
      const typeParameters = (
        (node as ts.InterfaceDeclaration).typeParameters ||
        (node.parent as TypeAliasDeclaration).typeParameters
      )?.map(p => getTypeValueFromNode(checker, p) as TypeParameter);
      // type.getStringIndexType(); //?
      // type.getNumberIndexType(); //?
      // checker.getIndexTypeOfType(type, ts.IndexKind.String); //?
      // t.getKindNameFromNode(checker.getIndexInfoOfType(type, ts.IndexKind.String)?.declaration); //?
      // checker.typeToString(type); //?
      // symbol?.getDocumentationComment();
      const symbol = getSymbolFromNode(checker, node); //?
      // TODO how to get index signatures?!

      // symbol?.members?.size; //?
      // checker.getSignatureFromDeclaration(node); //?
      type.getCallSignatures().map(s => {
        s.parameters.map(p => p.name); //?
      });
      type.getStringIndexType(); //?
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
    const properties = type.getApparentProperties().map<TypeMember>(p => {
      p.name; //?
      return getTypeValueFromNode(checker, getValueDeclaration(p)!) as TypeMember;
    });
    return {kind: 'typeLiteral', properties};
  }

  if (t.isArrayType(node)) {
    return {kind: 'array', value: getTypeValueFromNode(checker, node.elementType)};
  }

  if (t.isTypeParameter(node)) {
    t.getKindNameFromNode(node.parent); //?
    const constraint = node.constraint ? getTypeValueFromNode(checker, node.constraint) : undefined; //?
    const defaultValue = node.default ? getTypeValueFromNode(checker, node.default) : undefined; //?
    return {
      kind: 'typeParameter',
      name: node.name.text,
      defaultValue,
      constraint,
      required: !defaultValue,
    };
  }

  // Handle function declarations and arrow functions
  if (
    t.isFunctionDeclaration(node) ||
    t.isVariableDeclaration(node) ||
    t.isMethodDeclaration(node)
  ) {
    console.log('function?');
    // for a variable declaration with an arrow function, the signature
    // declaration is the initializer. For function declaration, it is the node
    const signatureNode = (node as ts.VariableDeclaration).initializer || node;
    const symbol = getSymbolFromNode(checker, signatureNode);

    if ((symbol?.flags || 0) & ts.SymbolFlags.Function) {
      'here'; //?
      const signature = checker.getSignatureFromDeclaration(
        signatureNode as ts.SignatureDeclaration
      );
      if (signature) {
        const parameters = signature.parameters.map(s => {
          return getTypeValueFromNode(checker, getValueDeclaration(s)!) as ObjectParameter;
        }); //?
        checker.typeToString(signature.getReturnType()); //?
        return {
          kind: 'function',
          parameters,
          returnType:
            getValueFromType(checker, signature.getReturnType()) || unknownValue(node.getText()),
        };
      }
      return unknownValue(node.getText());
    }
  }

  if (ts.isVariableDeclaration(node)) {
    console.log('has type?');
    // If there's a predefined type, return the type. Otherwise infer the type from assignment
    if (node.type) {
      return getTypeValueFromNode(checker, node.type);
    }

    'here'; //?
    const type = checker.getTypeAtLocation(node);
    if (isObject(type)) {
      console.log('variable declaration is an object');
      'here'; //?
      const properties = type.getApparentProperties().map<ObjectParameter>(p => {
        return getTypeValueFromNode(checker, getValueDeclaration(p)!) as ObjectParameter;
      });

      return {kind: 'object', properties};
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
      typeInfo: node.type ? getTypeValueFromNode(checker, node.type) : unknownValue(node.getText()),
      ...jsDoc,
    };
  }

  if (t.isIndexSignature(node)) {
    'here'; //?
  }

  if (t.isPropertyAssignment(node)) {
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    checker.typeToString(type); //?
    getTypeValueFromNode(checker, node.initializer); //?
    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue: getTypeValueFromNode(checker, node.initializer),
      typeInfo: getValueFromType(checker, type) || unknownValue(node.getText()),
      required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
      ...jsDoc,
    };
  }

  if (t.isAsExpression(node)) {
    return getTypeValueFromNode(checker, node.expression);
  }

  if (t.isLiteralType(node)) {
    return getTypeValueFromNode(checker, node.literal);
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
    return {kind: 'union', value: node.types.map(type => getTypeValueFromNode(checker, type))};
  }

  if (t.isParenthesizedType(node)) {
    return {kind: 'parenthesis', value: getTypeValueFromNode(checker, node.type)};
  }

  if (t.isIndexedAccessType(node)) {
    'here'; //?
    return {
      kind: 'indexedAccess',
      object: getTypeValueFromNode(checker, node.objectType),
      index: getTypeValueFromNode(checker, node.indexType),
    };
  }

  if (t.isMethodDeclaration(node)) {
    const signature = checker.getSignatureFromDeclaration(node as ts.SignatureDeclaration);
    if (signature) {
      const returnType = signature.getReturnType();

      const type = checker.getTypeAtLocation(node);
      const symbol = getSymbolFromNode(checker, node);
      const jsDoc = findDocComment(checker, symbol);
      checker.typeToString(type); //?
      const typeInfo: FunctionValue = {
        kind: 'function',
        parameters: node.parameters.map(n => getTypeValueFromNode(checker, n) as ObjectParameter),
        returnType:
          getValueFromType(checker, returnType) || unknownValue(checker.typeToString(returnType)),
      };
      return {
        kind: 'parameter',
        name: symbol?.name || '',
        defaultValue: undefined,
        typeInfo,
        required: symbol ? !isOptional(symbol) && !includesUndefined(type) : false,
        ...jsDoc,
      };
    }
  }

  if (t.isQualifiedName(node)) {
    'here'; //?
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
      symbol.name; //?
      const declaration = getValueDeclaration(symbol)!;
      declaration; //?
      return getTypeValueFromNode(checker, declaration);
    }
  }

  if (t.isImportSpecifier(node)) {
    console.log('import specifier');
    return {};
  }

  if (t.isTypeReference(node)) {
    'here'; //?
    const typeParameters = node.typeArguments?.map(
      p => getTypeValueFromNode(checker, p) as TypeParameter
    );
    const externalSymbol = getExternalSymbol(node.typeName.getText());
    if (externalSymbol) {
      return {kind: 'external', name: node.typeName.getText(), url: externalSymbol, typeParameters};
    }
    if (isExportedSymbol(checker, node.typeName)) {
      'here'; //?
      return {kind: 'symbol', name: node.typeName.getText(), typeParameters};
    }
    // if (t.isQualifiedName(node.typeName)) {
    //   if (isExportedSymbol(checker, node.typeName.left)) {
    //     'here'; //?
    //     return {kind: 'symbol', name: node.typeName.left.getText(), typeParameters};
    //   }
    // }

    // The TypeReference isn't exported, so we'll return the type of the
    // symbol's value declaration directly
    const symbol = getSymbolFromNode(checker, node.typeName);
    'here'; //?
    node.getText(); //?
    node.typeName.getText(); //?
    symbol; //?
    const type = checker.getTypeAtLocation(node);
    type.getFlags() & ts.TypeFlags.Instantiable; //?
    if (symbol) {
      symbol.name; //?
      if (type.getFlags() & ts.TypeFlags.Instantiable) {
        // It is a generic type
        return {kind: 'generic', name: symbol?.name};
      }
    }

    console.log('here'); //?

    // If it is a qualified name, handle that specially. The `left` might be a symbol
    if (t.isQualifiedName(node.typeName)) {
      return getTypeValueFromNode(checker, node.typeName);
    }
    // The type reference is not external, not an exported symbol, and not generic.
    // Fall back to returning the value from it's type property
    return getValueFromType(checker, type) || unknownValue(node.getText()); //?
  }

  if (t.isParameter(node)) {
    'here'; //?
    const type = checker.getTypeAtLocation(node);
    const symbol = getSymbolFromNode(checker, node);
    const jsDoc = findDocComment(checker, symbol);
    checker.typeToString(type); //?
    node.type; //?
    const isRequired = node.initializer
      ? false
      : symbol
      ? !isOptional(symbol) && !includesUndefined(type)
      : false;

    const typeInfo = node.type
      ? getTypeValueFromNode(checker, node.type)
      : getValueFromType(checker, type, !isRequired) || unknownValue(node.getText());
    return {
      kind: 'parameter',
      name: symbol?.name || '',
      defaultValue: node.initializer ? getTypeValueFromNode(checker, node.initializer) : undefined,
      typeInfo,
      required: isRequired,
      ...jsDoc,
    };
  }

  if (ts.isTypeNode(node)) {
    'here'; //?
    const type = checker.getTypeAtLocation(node);
    return getValueFromType(checker, type) || unknownValue(node.getText());
  }

  const symbol = getSymbolFromNode(checker, node);
  if (!symbol) {
    'unknown'; //?
    return unknownValue(node.getText());
  }
  const declaration = getValueDeclaration(symbol);
  (declaration && t.getKindNameFromNode(declaration)) || symbol.name; //?

  return unknownValue(node.getText());
}

export function findDocs(program: ts.Program, fileName: string): ExportedSymbol[] {
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
    const symbol = getSymbolFromNode(checker, node);
    if (symbol) {
      'here'; //?
      docs.push({
        name: symbol.name,
        packageName: getPackageName(fileName),
        fileName,
        ...findDocComment(checker, symbol),
        typeInfo: getTypeValueFromNode(checker, node),
      });
    }
  });

  return docs;
}
