import {ImportSpecifier} from 'jscodeshift';

export const addMissingImports = ({j, root}: any, {importPath, specifiers, localName}: any) => {
  // Get the program node directly (not a path)
  const programNode = root.get().node.program;
  const programBody = programNode.body;

  // Find existing import by iterating program body directly (no root.find())
  let existingImport: any = null;
  for (let i = 0; i < programBody.length; i++) {
    const node = programBody[i];
    if (
      node &&
      node.type === 'ImportDeclaration' &&
      node.source &&
      node.source.value === importPath
    ) {
      existingImport = node;
      break;
    }
  }

  if (existingImport) {
    // Ensure specifiers array exists
    if (!existingImport.specifiers) {
      existingImport.specifiers = [];
    }

    specifiers.forEach((specifier: string) => {
      if (
        !existingImport.specifiers.some(
          (existingSpecifier: ImportSpecifier) =>
            existingSpecifier.type === 'ImportSpecifier' &&
            existingSpecifier.imported &&
            existingSpecifier.imported.name === specifier
        )
      ) {
        existingImport.specifiers.push(
          j.importSpecifier(j.identifier(specifier), j.identifier(localName || specifier))
        );

        existingImport.specifiers.sort((a: any, b: any) => {
          const aName = (a.imported && a.imported.name ? a.imported.name.toString() : '') || '';
          const bName = (b.imported && b.imported.name ? b.imported.name.toString() : '') || '';
          return aName.localeCompare(bName);
        });
      }
    });

    return;
  }

  const newImport = j.importDeclaration(
    specifiers.map((specifier: string) =>
      j.importSpecifier(j.identifier(specifier), j.identifier(localName || specifier))
    ),
    j.stringLiteral(importPath)
  );

  // Find the index of the last import statement
  let lastImportIndex = -1;
  for (let i = programBody.length - 1; i >= 0; i--) {
    const node = programBody[i];
    if (node && node.type === 'ImportDeclaration') {
      lastImportIndex = i;
      break;
    }
  }

  if (lastImportIndex >= 0) {
    // Insert after the last import - use the program's body array directly
    programNode.body.splice(lastImportIndex + 1, 0, newImport);
  } else {
    // No imports exist, add to the beginning
    programNode.body.unshift(newImport);
  }
};
