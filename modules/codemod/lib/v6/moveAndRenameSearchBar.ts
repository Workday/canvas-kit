import {ASTPath, Transform, Identifier, ImportDeclaration, ImportSpecifier} from 'jscodeshift';
import {
  filterImportSpecifiers,
  renameImportSpecifiers,
  ImportSpecifierArray,
  renameImports,
  hasImportSpecifiers,
} from './utils';

const mainPackage = '@workday/canvas-kit-labs-react';
const headerPackage = '@workday/canvas-kit-labs-react/header';
const searchBarRenameImports = ['SearchBar', 'SearchBarProps', 'SearchBarState'];

const searchBarImportSpecifiers = [
  ...searchBarRenameImports,
  'SearchThemeAttributes',
  'SearchThemes',
];

const renameMap = {
  SearchBar: 'SearchForm',
  SearchBarProps: 'SearchFormProps',
  SearchBarState: 'SearchFormState',
};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  if (
    !hasImportSpecifiers(api, root, '@workday/canvas-kit-labs-react/header', Object.keys(renameMap))
  ) {
    return file.source;
  }

  function insertImportDeclarationBefore(
    nodePath: ASTPath<ImportDeclaration>,
    specifiers: ImportSpecifierArray,
    sourcePath: string
  ) {
    nodePath.insertBefore(j.importDeclaration(specifiers, j.stringLiteral(sourcePath)));
  }

  // Rename search-bar named imports from @workday/canvas-kit-labs-react
  // e.g. import { SearchBar, SearchBarProps } from '@workday/canvas-kit-labs-react';
  // becomes import { SearchForm, SearchFormProps } from '@workday/canvas-kit-labs-react';
  root.find(j.ImportDeclaration, {source: {value: mainPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    // Filter search bar imports
    const searchBarImports = filterImportSpecifiers(importSpecifiers);
    // Rename search bar imports
    renameImportSpecifiers(searchBarImports, renameMap);
  });

  // Handle imports from @workday/canvas-kit-react/header
  // e.g import { Header, SearchBar, SearchBarProps } from '@workday/canvas-kit-labs-react/header';
  // becomes import { Header } from '@workday/canvas-kit-labs-react/header';
  // and import { SearchForm, SearchFormProps } from '@workday/canvas-kit-labs-react/search-form';
  root.find(j.ImportDeclaration, {source: {value: headerPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    const headerSpecifiers = [] as ImportSpecifierArray;
    const searchBarSpecifiers = [] as ImportSpecifier[];

    importSpecifiers.forEach(specifier => {
      // If there is a SearchBar import specifier, keep it in an array.
      // This will be used to build a new import declaration later.
      if (
        specifier.type === 'ImportSpecifier' &&
        searchBarImportSpecifiers.includes(specifier.imported.name)
      ) {
        searchBarSpecifiers.push(specifier);
      } else {
        // If there is another header import specifier, keep it in a separate array.
        // This will be used to build a new import declaration later.
        headerSpecifiers.push(specifier);
      }
    });
    // Remove the original import declaration
    root.find(j.ImportDeclaration, {source: {value: headerPackage}}).remove();

    // If SearchBar import specifiers were found, insert a new import declaration above the original import declaration
    if (searchBarSpecifiers.length) {
      const renamedSearchBarSpecifiers = renameImportSpecifiers(searchBarSpecifiers, renameMap);
      insertImportDeclarationBefore(
        nodePath,
        renamedSearchBarSpecifiers,
        '@workday/canvas-kit-labs-react/search-form'
      );
    }

    // If other header import specifiers were found, insert a new import declaration above the original import declaration
    // This will replace the import declaration that was removed above
    if (headerSpecifiers.length) {
      insertImportDeclarationBefore(nodePath, headerSpecifiers, headerPackage);
    }
  });

  return renameImports(api, root, '@workday/canvas-kit-labs-react/header', renameMap).toSource();
};

export default transform;
