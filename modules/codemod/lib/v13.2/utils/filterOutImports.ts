import {ASTPath, ImportDeclaration} from 'jscodeshift';

type ImportType = 'colors' | 'depth' | 'space' | 'type' | 'borderRadius';

const canvasImportSources = [
  '@workday/canvas-kit-react/tokens',
  '@workday/canvas-colors-web',
  '@workday/canvas-space-web',
  '@workday/canvas-depth-web',
];

export const filterOutImports = (
  nodePath: ASTPath<ImportDeclaration>,
  type: ImportType | ImportType[]
) => {
  const importName: Record<string, string> = {};

  nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
    if (specifier.type === 'ImportSpecifier' && specifier.local) {
      const localName = specifier.local.name.toString();
      const importedName = specifier.imported.name.toString();

      importName[localName] = importedName;

      return !(
        type.includes(importedName as any) &&
        typeof nodePath.value.source.value === 'string' &&
        canvasImportSources.includes(nodePath.value.source.value)
      );
    }

    return true;
  });

  if (!nodePath.value.specifiers?.length) {
    nodePath.prune();
  }

  return importName;
};
