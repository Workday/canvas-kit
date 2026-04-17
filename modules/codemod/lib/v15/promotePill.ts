import {ASTPath, ImportDeclaration, Transform} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const pillSpecifiers: SpecifierType[] = [];
  const foundImport: ASTPath<ImportDeclaration>[] = [];

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes('@workday/canvas-kit-preview-react')},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.local &&
          specifier.imported.name === 'Pill'
        ) {
          pillSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (pillSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingPillImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/pill'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingPillImports.length) {
    existingPillImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        pillSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          pillSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/pill')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-preview-react/pill'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
