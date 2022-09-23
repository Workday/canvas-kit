import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

// used to filter our imports we want to keep in @workday/canvas-kit-labs-react/common
const commonSpecifiers = ['useTheme', 'useThemeRTL', 'useThemedRing'];

const layoutSpecifiers = [
  'ComponentStatesTable',
  'permutateProps',
  'ComponentStatesTableProps',
  'PropCombination',
  'PropDeclaration',
  'Props',
  'PropsDeclaration',
];

// 1. Gather all import specifiers from @workday/canvas-kit-labs-react/layout
// 2. Filter through all imports from @workday/canvas-kit-labs-react/common and gather specifiers we care about
// 3. If there's an existing @workday/canvas-kit-react/layout add gathered specifiers to that import
// 4. If no existing import, create new import with specifiers and insert before closest canvas kit import
const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const reactLayoutSpecifiers: {importedName?: string; name: string}[] = [];
  const foundImport: ASTPath<ImportDeclaration>[] = [];

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes('@workday/canvas-kit-labs-react')},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          !commonSpecifiers.includes(specifier.imported.name)
        ) {
          if (
            specifier?.local?.name !== undefined &&
            layoutSpecifiers.includes(specifier?.local?.name)
          ) {
            reactLayoutSpecifiers.push({
              importedName: specifier?.local?.name,
              name: specifier?.imported?.name,
            });
            return false;
          }
        }
        return true;
      });

      foundImport.push(nodePath);
    });

  const existingLayoutImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/common'},
  });

  const mapToSpecifiers = (specifier: typeof reactLayoutSpecifiers[0]) => {
    return j.importSpecifier(
      j.identifier(specifier.name),
      specifier.importedName ? j.identifier(specifier.importedName) : undefined
    );
  };
  // add to existing import
  if (existingLayoutImports.length) {
    existingLayoutImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        reactLayoutSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          reactLayoutSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/common')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      importPath.value.specifiers?.length === 0 ||
      importPath.value.source.value === '@workday/canvas-kit-labs-react/common'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
