import {API, FileInfo, JSXElement, JSXMemberExpression, Options} from 'jscodeshift';

import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = ['@workday/canvas-kit-react', '@workday/canvas-kit-react/form-field'];
const packageImports = ['FormField'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  let hasChanges = false;

  // Find all JSXElements with name FormField.Container
  root
    .find(j.JSXElement, (value: JSXElement) => {
      if (value.openingElement.name.type !== 'JSXMemberExpression') {
        return false;
      }

      const memberExpr = value.openingElement.name as JSXMemberExpression;

      // Check if it's FormField.Container (including renamed imports)
      const objectName =
        memberExpr.object.type === 'JSXIdentifier' ? memberExpr.object.name : undefined;
      const propertyName =
        memberExpr.property.type === 'JSXIdentifier' ? memberExpr.property.name : undefined;
      const styledFormFieldName =
        styledMap[importMap.FormField as keyof typeof styledMap] || styledMap.FormField;

      return (
        propertyName === 'Container' &&
        (objectName === importMap.FormField || objectName === styledFormFieldName)
      );
    })
    .forEach(path => {
      hasChanges = true;

      // Replace opening tag
      if (
        path.value.openingElement.name.type === 'JSXMemberExpression' &&
        path.value.openingElement.name.property.type === 'JSXIdentifier'
      ) {
        path.value.openingElement.name.property.name = 'Field';
      }

      // Replace closing tag if it exists
      if (
        path.value.closingElement &&
        path.value.closingElement.name.type === 'JSXMemberExpression' &&
        path.value.closingElement.name.property.type === 'JSXIdentifier'
      ) {
        path.value.closingElement.name.property.name = 'Field';
      }
    });

  return hasChanges ? root.toSource() : file.source;
}
