import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-react';
const pageHeaderPackage = '@workday/canvas-kit-react/page-header';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasPageHeaderImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the page-header package, set the import boolean check to true
    if (value === pageHeaderPackage) {
      hasPageHeaderImports = true;
      return;
    }
    // If there's an import from the main package, check to see if PageHeader or PageHeaderProps are among the named imports
    // e.g. import {PageHeader} from '@workday/canvas-kit-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          if (specifierName === 'PageHeader' || specifierName === 'PageHeaderProps') {
            hasPageHeaderImports = true;
          }
        }
      });
    }
  });

  // Failsafe to skip transforms unless a PageHeader import is detected
  if (!hasPageHeaderImports) {
    return root.toSource();
  }

  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {PageHeader}` becomes `import {DeprecatedPageHeader}`
          if (specifier.imported.name === 'PageHeader') {
            specifier.imported.name = 'DeprecatedPageHeader';
          }
          //  `import {PageHeaderProps}` becomes `import {DeprecatedPageHeaderProps}`
          if (specifier.imported.name === 'PageHeaderProps') {
            specifier.imported.name = 'DeprecatedPageHeaderProps';
          }
        }
        return specifier;
      });
    });

  // Transform PageHeader default and named import statements from the page-header package
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/page-header'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportDefaultSpecifier') {
          //  `import PageHeader` becomes `import DeprecatedPageHeader`
          if (specifier.local?.name === 'PageHeader') {
            specifier.local.name = 'DeprecatedPageHeader';
          }
        }
        if (specifier.type === 'ImportSpecifier') {
          //  `import {PageHeader}` becomes `import {DeprecatedPageHeader}`
          if (specifier.imported.name === 'PageHeader') {
            specifier.imported.name = 'DeprecatedPageHeader';
          }
          //  `import {PageHeaderProps}` becomes `import {DeprecatedPageHeaderProps}`
          if (specifier.imported.name === 'PageHeaderProps') {
            specifier.imported.name = 'DeprecatedPageHeaderProps';
          }
        }
        return specifier;
      });
    });

  // Transform PageHeaderProps type references
  // e.g. `type CustomProps = PageHeaderProps;` becomes `type CustomProps = DeprecatedPageHeaderProps;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'PageHeaderProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedPageHeaderProps';
    });

  // Transform PageHeaderProps type interface declaration references
  // e.g. `interface CustomProps extends PageHeaderProps` becomes `interface CustomProps extends DeprecatedPageHeaderProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending PageHeaderProps, transform the extension name to DeprecatedPageHeaderProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeExtension.expression.name === 'PageHeaderProps'
      ) {
        typeExtension.expression.name = 'DeprecatedPageHeaderProps';
      }
    });
  });

  // Transform PageHeader JSXElements
  // e.g. `<PageHeader>` becomes `<DeprecatedPageHeader>`
  root.find(j.JSXIdentifier, {name: 'PageHeader'}).forEach(nodePath => {
    nodePath.node.name = 'DeprecatedPageHeader';
  });

  return root.toSource();
}
