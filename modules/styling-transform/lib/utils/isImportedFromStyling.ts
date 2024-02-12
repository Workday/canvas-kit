import ts from 'typescript';

/**
 * Checks if the node was imported from '@workday/canvas-kit-styling'. This is useful if you want to
 * limit transformation to only styling imports.
 */
export function isImportedFromStyling(node: ts.Node, checker: ts.TypeChecker) {
  const symbol = checker.getSymbolAtLocation(node);
  const declaration = symbol?.valueDeclaration || symbol?.declarations[0];

  if (
    declaration &&
    ts.isImportSpecifier(declaration) &&
    ts.isStringLiteral(declaration.parent.parent.parent.moduleSpecifier) &&
    declaration.parent.parent.parent.moduleSpecifier.text === '@workday/canvas-kit-styling'
  ) {
    return true;
  }

  return false;
}
