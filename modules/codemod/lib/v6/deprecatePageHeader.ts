import {API, FileInfo, Identifier} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // update PageHeader import statements from the main package
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (specifier.imported.name === 'PageHeader') {
            specifier.imported.name = 'DeprecatedPageHeader';
          }
        }
        return specifier;
      });
    });

  // update PageHeader named import statements from the page-header package
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/page-header'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (specifier.imported.name === 'PageHeader') {
            specifier.imported.name = 'DeprecatedPageHeader';
          }
        }
        return specifier;
      });
    });

  // update PageHeader default import statements from the page-header package
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/page-header'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (specifier.imported.name === 'PageHeader') {
            specifier.imported.name = 'DeprecatedPageHeader';
          }
        }
        return specifier;
      });
    });

  // update PageHeader identifiers
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'PageHeader'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedPageHeader';
      return nodePath;
    });

  // update PageHeaderProps identifiers
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'PageHeaderProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedPageHeaderProps';
      return nodePath;
    });

  return root.toSource();
}
