import {ASTPath, ImportDeclaration} from 'jscodeshift';

export const filterOutImports = (nodePath: ASTPath<ImportDeclaration>) => {
  const importName: Record<string, string> = {};

  nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
    if (specifier.type === 'ImportSpecifier' && specifier.local) {
      const localName = specifier.local.name.toString();
      const importedName = specifier.imported.name.toString();

      importName[localName] = importedName;

      return !(
        typeof nodePath.value.source.value === 'string' &&
        nodePath.value.source.value?.endsWith('tokens')
      );
    }

    return true;
  });

  if (!nodePath.value.specifiers?.length) {
    nodePath.prune();
  }

  return importName;
};
