import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const segmentedControlSpecifiers: SpecifierType[] = [];
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
          specifier.imported.name === 'SegmentedControl'
        ) {
          segmentedControlSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (segmentedControlSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingSegmentedControlImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/segmented-control'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingSegmentedControlImports.length) {
    existingSegmentedControlImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        segmentedControlSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          segmentedControlSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/segmented-control')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-preview-react/segmented-control'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
