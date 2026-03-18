import {ASTPath, ImportDeclaration, Transform} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const formfieldSpecifiers: SpecifierType[] = [];
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
          specifier.imported.name === 'FormField'
        ) {
          formfieldSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (formfieldSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingFormFieldImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/form-field'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingFormFieldImports.length) {
    existingFormFieldImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        formfieldSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          formfieldSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/form-field')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-preview-react/form-field'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
