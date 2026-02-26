import {ASTPath, ImportDeclaration, Transform} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const sidePanelSpecifiers: SpecifierType[] = [];
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
          specifier.imported.name === 'SidePanel'
        ) {
          sidePanelSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (sidePanelSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingInformationHighlightImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/side-panel'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingInformationHighlightImports.length) {
    existingInformationHighlightImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        sidePanelSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          sidePanelSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/side-panel')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-labs-react/side-panel'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
