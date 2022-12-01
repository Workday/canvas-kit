import ts from 'typescript';
import {JSDoc, Doc, Prop, ObjectDoc} from './docTypes';
import t, {find} from './traverse';

/** True if this is visible outside this file, false otherwise */
function isNodeExported(node: ts.Node): boolean {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
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

// https://github.com/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/components/PropertiesViewer.tsx#L172
function getSymbolForNode(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined {
  return (node as any).symbol || checker.getSymbolAtLocation(node);
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

function getPackageName(fileName: string): string {
  const match = fileName.match(/modules\/([a-z-]+)\//i);

  if (match) {
    return match[1];
  }

  return 'react';
}

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

function getDocsAtNode(checker: ts.TypeChecker, node: ts.Node): Doc[] {
  const docs: Doc[] = [];

  if (t.isVariableDeclaration(node) && t.isIdentifier(node.name)) {
    if (node.name.text.match(/use[a-z]+Model/i)) {
      // mode hook
    }
  }
  if (t.isInterfaceDeclaration(node) && t.isIdentifier(node.name)) {
    'here'; //?
    const doc = getObjectDoc(checker, node, node.name.text);
    if (doc) {
      docs.push(doc);
    }
  }

  return docs;
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

export function findDocSymbols(program: ts.Program, fileName: string): Doc[] {
  const docs: Doc[] = [];
  const checker = program.getTypeChecker();

  const sourceFile = program.getSourceFile(fileName)!;

  find(sourceFile, node => {
    const kind = node.kind;

    return (
      ['VariableStatement', 'InterfaceDeclaration', 'TypeAliasDeclaration', 'FunctionDeclaration']
        .map(k => (ts.SyntaxKind as any)[k])
        .includes(kind) && isNodeExported(node)
    );
  }).forEach(node => {
    docs.push(...getDocsAtNode(checker, node));
  });

  return docs;
}
