import {ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier} from 'jscodeshift';

export type ImportSpecifierArray = (
  | ImportSpecifier
  | ImportNamespaceSpecifier
  | ImportDefaultSpecifier
)[];

/**
 * Returns a filtered array of ImportSpecifiers
 * You can filter all ImportSpecifiers or additionally filter by providing an array of import names.
 * @example
 * root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
 *    const importSpecifiers = nodePath.specifiers || [];
 *    // specific named imports we're looking for
 *   const importNames = ['PageHeader', 'PageHeaderProps']
 *   const pageHeaderImports = filterImportSpecifiers(importSpecifiers, importNames);
 *   ...
 * }
 */
export function filterImportSpecifiers(
  importSpecifiers: ImportSpecifierArray,
  importNames?: string[]
) {
  const filteredSpecifiers = [] as ImportSpecifier[];

  importSpecifiers.forEach(specifier => {
    if (specifier.type === 'ImportSpecifier') {
      if (importNames && importNames.includes(specifier.imported.name)) {
        filteredSpecifiers.push(specifier);
      } else {
        filteredSpecifiers.push(specifier);
      }
    }
  });

  return filteredSpecifiers;
}

export type RenameMap = {
  [key: string]: string;
};

/**
 *  Renames import specifiers for a given rename map
 * @example
 * const renameMap = {
 *   'PageHeader': 'DeprecatedPageHeader',
 *   'PageHeaderProps': 'DeprecatedPageHeaderProps',
 * };
 * const pageHeaderImports = filterImportSpecifiers(importSpecifiers, importNames);
 * renameImportSpecifiers(pageHeaderSpecifiers, renameMap);
 */
export function renameImportSpecifiers(importSpecifiers: ImportSpecifier[], renameMap: RenameMap) {
  importSpecifiers.forEach(specifier => {
    const specifierName = specifier.imported.name;
    if (specifierName in renameMap) {
      specifier.imported.name = renameMap[specifierName];
    }
  });
  return importSpecifiers;
}

/**
 * Returns a filtered array of ImportDefaultSpecifiers
 * You can filter all ImportDefaultSpecifiers or additionally filter by providing an array of import names.
 * @example
 * root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
 *   const importSpecifiers = nodePath.specifiers || [];
 *   // specific default imports we're looking for
 *   const importNames = ['PageHeader']
 *   const pageHeaderImports = filterImportDefaultSpecifiers(importSpecifiers, importNames);
 *   ...
 * }
 */
export function filterImportDefaultSpecifiers(
  importSpecifiers: ImportSpecifierArray,
  importNames?: string[]
) {
  const filteredSpecifiers = [] as ImportDefaultSpecifier[];

  importSpecifiers.forEach(specifier => {
    if (specifier.type === 'ImportDefaultSpecifier') {
      const localName = specifier.local?.name || '';
      if (importNames && importNames.includes(localName)) {
        filteredSpecifiers.push(specifier);
      } else {
        filteredSpecifiers.push(specifier);
      }
    }
  });
  return filteredSpecifiers;
}

/**
 * Renames import default specifiers for a given rename map
 * @example
 * const renameMap = { 'PageHeader': 'DeprecatedPageHeader' };
 * const pageHeaderImports = filterImportDefaultSpecifiers(importSpecifiers, importNames);
 * renameImportSpecifiers(pageHeaderSpecifiers, renameMap);
 */
export function renameImportDefaultSpecifiers(
  importSpecifiers: ImportDefaultSpecifier[],
  renameMap: RenameMap
) {
  importSpecifiers.forEach(specifier => {
    const specifierName = specifier.local?.name;
    if (specifier.local && specifierName && specifierName in renameMap) {
      specifier.local.name = renameMap[specifierName];
    }
  });
  return importSpecifiers;
}
