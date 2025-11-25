import {ASTPath, ImportDeclaration} from 'jscodeshift';

export const getImports = (nodePath: ASTPath<ImportDeclaration>) => {
  const importName: Record<string, string> = {};

  nodePath.value.specifiers?.forEach(specifier => {
    if (specifier.type === 'ImportSpecifier' && specifier.local) {
      const localName = specifier.local.name.toString();
      const importedName = specifier.imported.name.toString();

      importName[localName] = importedName;
    }
  });

  return importName;
};
