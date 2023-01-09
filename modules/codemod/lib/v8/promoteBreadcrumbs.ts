import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const breadcrumbsSpecifiers: SpecifierType[] = [];
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
          specifier.imported.name === 'Breadcrumbs'
        ) {
          breadcrumbsSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (breadcrumbsSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingBreadcrumbsImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/breadcrumbs'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingBreadcrumbsImports.length) {
    existingBreadcrumbsImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        breadcrumbsSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          breadcrumbsSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/breadcrumbs')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      importPath.value.specifiers?.length === 0 ||
      importPath.value.source.value === '@workday/canvas-kit-preview-react/breadcrumbs'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
