import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const toastSpecifiers: SpecifierType[] = [];
  const foundImport: ASTPath<ImportDeclaration>[] = [];

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes('@workday/canvas-kit-labs-react')},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.local &&
          specifier.imported.name === 'Toast'
        ) {
          toastSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (toastSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingToastImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/toast'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingToastImports.length) {
    existingToastImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        toastSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          toastSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/toast')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      importPath.value.specifiers?.length === 0 ||
      importPath.value.source.value === '@workday/canvas-kit-labs-react/toast'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
