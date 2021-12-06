import {API, ASTPath, FileInfo, Identifier, ImportDeclaration, ImportSpecifier} from 'jscodeshift';
import {
  filterImportSpecifiers,
  renameImportSpecifiers,
  ImportSpecifierArray,
  RenameMap,
} from './utils';

const mainPackage = '@workday/canvas-kit-labs-react';
const headerPackage = '@workday/canvas-kit-labs-react/header';
const searchBarRenameImports = ['SearchBar', 'SearchBarProps', 'SearchBarState'];

const searchBarImportSpecifiers = [
  ...searchBarRenameImports,
  'SearchThemeAttributes',
  'SearchThemes',
];

const renameMap: RenameMap = {
  SearchBar: 'SearchForm',
  SearchBarProps: 'SearchFormProps',
  SearchBarState: 'SearchFormState',
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasSearchBarImports = false;

  function insertImportDeclarationBefore(
    nodePath: ASTPath<ImportDeclaration>,
    specifiers: ImportSpecifierArray,
    sourcePath: string
  ) {
    nodePath.insertBefore(j.importDeclaration(specifiers, j.stringLiteral(sourcePath)));
  }

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // if there's any SearchBar imports from either the main package or the header package, toggle the failsafe
    if (value === mainPackage || value === headerPackage) {
      const importSpecifiers = nodePath.specifiers || [];
      const searchBarImports = filterImportSpecifiers(importSpecifiers, searchBarImportSpecifiers);

      if (searchBarImports.length) {
        hasSearchBarImports = true;
      }
    }
  });

  // Failsafe to skip transforms unless a SearchBar import is detected
  if (!hasSearchBarImports) {
    return root.toSource();
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

  // Transform SearchBar JSXElements
  // e.g. `<SearchBar>` becomes `<SearchForm>`
  root.find(j.JSXIdentifier, {name: 'SearchBar'}).forEach(nodePath => {
    nodePath.node.name = 'SearchForm';
  });

  // Transform SearchBarProps and SearchBarState type references
  // e.g. type CustomSearchType = SearchBarProps & SearchBarState;
  // becomes type CustomSearchType = SearchFormProps & SearchFormState;
  root.find(j.TSTypeReference, {typeName: {type: 'Identifier'}}).forEach(nodePath => {
    const identifier = nodePath.value.typeName as Identifier;
    if (identifier.name in renameMap) {
      identifier.name = renameMap[identifier.name];
    }
  });

  // Transform SearchBarProps type interface declaration references
  // e.g. `interface CustomProps extends SearchBarProps` becomes `interface CustomProps extends SearchFormProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending SearchBarProps, transform the extension name to SearchFormProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (typeExtension.expression.type === 'Identifier') {
        const typeName = typeExtension.expression.name;
        if (typeName in renameMap) {
          typeExtension.expression.name = renameMap[typeName];
        }
      }
    });
  });

  return root.toSource();
}
