import {Transform, ImportDeclaration, ASTPath} from 'jscodeshift';

const specifiersToMove = [
  'ComponentStatesTable',
  'permutateProps',
  'ComponentStatesTableProps',
  'PropCombination',
  'PropDeclaration',
  'Props',
  'PropsDeclaration',
  'convertToStaticStates',
  'StaticStates',
];

// 1. Gather all import specifiers from @workday/canvas-kit-labs-react/common & @workday/canvas-kit-react/common
// 2. Filter through all imports from @workday/canvas-kit-labs-react/common and gather specifiers we care about
// 3. If no existing import, create new import with specifiers and insert before closest canvas kit import
const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const commonLabsSpecifiers: {
    importedName?: string;
    name: string;
  }[] = [];
  const foundImport: ASTPath<ImportDeclaration>[] = [];

  // First move specifiers from labs or from main common
  root
    .find(j.ImportDeclaration, {
      source: {
        value: (value: string) =>
          value.includes('@workday/canvas-kit-labs-react') ||
          value.includes('@workday/canvas-kit-react'),
      },
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (
            specifier?.local?.name !== undefined &&
            specifiersToMove.includes(specifier?.local?.name)
          ) {
            commonLabsSpecifiers.push({
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

  const existingTestingImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/testing'},
  });

  const mapToSpecifiers = (specifier: typeof commonLabsSpecifiers[0]) => {
    return j.importSpecifier(
      j.identifier(specifier.name),
      specifier.importedName ? j.identifier(specifier.importedName) : undefined
    );
  };
  // add to existing import testing import
  if (existingTestingImports.length) {
    existingTestingImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        commonLabsSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new testing import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          commonLabsSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/testing')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      importPath.value.specifiers?.length === 0 ||
      importPath.value.source.value === '@workday/canvas-kit-react/testing'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;
