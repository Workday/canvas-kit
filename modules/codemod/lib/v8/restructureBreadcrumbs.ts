import {API, FileInfo, Options, JSXElement} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const breadcrumbsPackage = '@workday/canvas-kit-react/breadcrumbs';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, breadcrumbsPackage, ['Breadcrumbs'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, breadcrumbsPackage);

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXMemberExpression' &&
        value.openingElement.name.object.type === 'JSXIdentifier' &&
        (value.openingElement.name.object.name === importMap.Breadcrumbs ||
          value.openingElement.name.object.name === styledMap.Breadcrumbs) &&
        value.openingElement.name.property.name === 'Nav'
    )
    .forEach(nodePath => {
      // Select all props from opening tag
      const attributes = nodePath.value.openingElement.attributes || [];
      if (attributes) {
        nodePath.value.openingElement.attributes = attributes.filter(
          item => !(item.type === 'JSXAttribute' && item.name.type === 'JSXIdentifier')
        );
      }

      nodePath.value.openingElement = j.jsxOpeningElement(j.jsxIdentifier(importMap.Breadcrumbs));
      nodePath.value.closingElement = j.jsxClosingElement(j.jsxIdentifier(importMap.Breadcrumbs));

      (nodePath.value.children || []).forEach(child => {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.name.type === 'JSXMemberExpression'
        ) {
          if (child.openingElement.name.property.name.includes('List')) {
            child.openingElement.attributes = [
              ...(child.openingElement.attributes || []),
              ...attributes,
            ];
          }
          if (child.openingElement.name.property.name === 'CollapsibleList') {
            if (child.openingElement.name.type === 'JSXMemberExpression') {
              child.openingElement.name.property.name = 'List';
            }
            if (child.closingElement && child.closingElement.name.type === 'JSXMemberExpression') {
              child.closingElement.name.property.name = 'List';
            }
          }
        }
      });
    });

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXMemberExpression' &&
        value.openingElement.name.object.type === 'JSXIdentifier' &&
        (value.openingElement.name.object.name === importMap.Breadcrumbs ||
          value.openingElement.name.object.name === styledMap.Breadcrumbs) &&
        value.openingElement.name.property.name === 'ListItem'
    )
    .forEach(nodePath => {
      if (nodePath.value.openingElement.name.type === 'JSXMemberExpression') {
        nodePath.value.openingElement.name.property.name = 'Item';
      }
      if (
        nodePath.value.closingElement &&
        nodePath.value.closingElement.name.type === 'JSXMemberExpression'
      ) {
        nodePath.value.closingElement.name.property.name = 'Item';
      }
    });

  return root.toSource();
}
