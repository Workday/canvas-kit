import {API, FileInfo, Identifier, ImportDeclaration} from 'jscodeshift';
import {
  filterImportDefaultSpecifiers,
  filterImportSpecifiers,
  renameImportDefaultSpecifiers,
  renameImportSpecifiers,
  RenameMap,
} from './utils';

const mainPackage = '@workday/canvas-kit-labs-react';
const headerPackage = '@workday/canvas-kit-labs-react/header';

const headerComponents = ['DubLogoTitle', 'Header', 'GlobalHeader', 'WorkdayLogoTitle'];
const headerUtils = ['themes'];
const headerTypes = ['Themes', 'ThemeAttributes', 'HeaderTheme', 'HeaderVariant', 'HeaderHeight'];

const headerImportSpecifiers = [...headerComponents, ...headerUtils, ...headerTypes];

const headerDefaultImportSpecifiers = ['Header'];

const headerRenameMap: RenameMap = {
  DubLogoTitle: 'DeprecatedDubLogoTitle',
  GlobalHeader: 'DeprecatedGlobalHeader',
  Header: 'DeprecatedHeader',
  HeaderHeight: 'DeprecatedHeaderHeight',
  HeaderTheme: 'DeprecatedHeaderTheme',
  HeaderVariant: 'DeprecatedHeaderVariant',
  ThemeAttributes: 'DeprecatedHeaderThemeAttributes',
  Themes: 'DeprecatedHeaderThemes',
  WorkdayLogoTitle: 'DeprecatedWorkdayLogoTitle',
  themes: 'deprecatedHeaderThemes',
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasHeaderImports = false;

  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // if importing from the header package, set the failsafe to true
    if (value === headerPackage) {
      hasHeaderImports = true;
      return;
    }
    // if importing from the main package, check for header imports and toggle the failsafe if any are found
    if (value === mainPackage) {
      const importSpecifiers = nodePath.specifiers || [];
      const headerSpecifiers = filterImportSpecifiers(importSpecifiers, headerImportSpecifiers);
      if (headerSpecifiers.length) {
        hasHeaderImports = true;
      }
    }
  });

  // Failsafe to skip transforms unless a header import is detected
  if (!hasHeaderImports) {
    return root.toSource();
  }

  // Rename header named imports from @workday/canvas-kit-labs-react
  // e.g. `import { Header } from '@workday/canvas-kit-labs-react';`
  // becomes `import { DeprecatedHeader } from '@workday/canvas-kit-labs-react';`
  root.find(j.ImportDeclaration, {source: {value: mainPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    // filter header imports
    const headerImports = filterImportSpecifiers(importSpecifiers, headerImportSpecifiers);
    renameImportSpecifiers(headerImports, headerRenameMap);
  });

  // Rename default and named header imports from @workday/canvas-kit-labs-react/header
  // e.g. `import Header, { GlobalHeader } from '@workday/canvas-kit-labs-react/header';`
  // becomes `import DeprecatedHeader, { DeprecatedGlobalHeader } from '@workday/canvas-kit-labs-react/header';`
  root.find(j.ImportDeclaration, {source: {value: headerPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    // filter header named imports
    const headerImports = filterImportSpecifiers(importSpecifiers, headerImportSpecifiers);
    // rename header import specifiers
    // e.g import { Header } becomes import { DeprecatedHeader }
    renameImportSpecifiers(headerImports, headerRenameMap);
    // filter header default imports
    const headerDefaultImports = filterImportDefaultSpecifiers(
      importSpecifiers,
      headerDefaultImportSpecifiers
    );
    // rename header import default specifiers
    // e.g import Header becomes import DeprecatedHeader
    renameImportDefaultSpecifiers(headerDefaultImports, headerRenameMap);
  });

  // Transform header type references
  // e.g. `type CustomThemeAttributes = ThemeAttributes;` becomes `type CustomThemeAttributes = DeprecatedCThemeAttributes;`
  root.find(j.TSTypeReference, {typeName: {type: 'Identifier'}}).forEach(nodePath => {
    const identifier = nodePath.value.typeName as Identifier;
    if (headerTypes.includes(identifier.name)) {
      identifier.name = headerRenameMap[identifier.name];
    }
  });

  // Transform header type interface declaration references
  // e.g. `interface CustomThemeAttributes extends ThemeAttributes {}`
  // becomes `interface CustomThemeAttributes extends DeprecatedHeaderThemeAttributes {}`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending header type, transform the extension name,
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        headerTypes.includes(typeExtension.expression.name)
      ) {
        typeExtension.expression.name = headerRenameMap[typeExtension.expression.name];
      }
    });
  });

  // Transform header JSXElements
  // e.g. `<Header>` becomes `<DeprecatedHeader>`
  root.find(j.JSXIdentifier).forEach(nodePath => {
    const identifierName = nodePath.node.name;
    if (headerComponents.includes(identifierName)) {
      nodePath.node.name = headerRenameMap[identifierName];
    }
  });

  // Transform header MemberExpressions
  // e.g. `HeaderHeight.Small` becomes `DeprecatedHeaderHeight.Small`
  root.find(j.MemberExpression, {object: {type: 'Identifier'}}).forEach(nodePath => {
    const identifier = nodePath.value.object as Identifier;
    if (identifier.name in headerRenameMap) {
      identifier.name = headerRenameMap[identifier.name];
    }
  });

  return root.toSource();
}
