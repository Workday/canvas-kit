import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const common: SpecifierType[] = [];
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
          specifier.imported.name === 'useThemedRing'
        ) {
          common.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (common.length) {
        foundImport.push(nodePath);
      }
    });

  const existingCommonImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/common'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingCommonImports.length) {
    existingCommonImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(common.map(mapToSpecifiers));
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          common.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/common')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-labs-react/common'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
