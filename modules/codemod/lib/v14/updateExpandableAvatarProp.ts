import {API, FileInfo, JSXElement, JSXIdentifier, Options} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const expandablePackage = '@workday/canvas-kit-react/expandable';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Skip transformation if Expandable is not imported from the target package
  if (!hasImportSpecifiers(api, root, expandablePackage, ['Expandable'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Expandable ||
          value.openingElement.name.name === styledMap.Expandable)
    )
    .forEach(nodePath => {
      // Get the local name of the Expandable component (e.g., Expandable, MyExpandable, StyledExpandable)
      const expandableName = (nodePath.node.openingElement.name as JSXIdentifier).name;

      // Look for Expandable.Avatar elements and rename altText prop to name
      nodePath.node.children?.forEach(child => {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.type === 'JSXOpeningElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === expandableName &&
          child.openingElement.name.property.name === 'Avatar'
        ) {
          // This is an Expandable.Avatar element, check for altText prop
          child.openingElement.attributes?.forEach(attr => {
            if (
              attr.type === 'JSXAttribute' &&
              attr.name.type === 'JSXIdentifier' &&
              attr.name.name === 'altText'
            ) {
              // Rename altText to name
              attr.name.name = 'name';
            }
          });
        }
      });
    });

  return root.toSource();
}
