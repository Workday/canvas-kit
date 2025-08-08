import {API, FileInfo, JSXElement, JSXIdentifier, Options} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const pillPackage = '@workday/canvas-kit-preview-react/pill';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Skip transformation if Pill is not imported from the target package
  if (!hasImportSpecifiers(api, root, pillPackage, ['Pill'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-preview-react');

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Pill ||
          value.openingElement.name.name === styledMap.Pill)
    )
    .forEach(nodePath => {
      // Get the local name of the Pill component (e.g., Pill, MyPill, StyledPill)
      const pillName = (nodePath.node.openingElement.name as JSXIdentifier).name;

      // Look for Pill.Avatar elements and rename altText prop to name
      nodePath.node.children?.forEach(child => {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.type === 'JSXOpeningElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === pillName &&
          child.openingElement.name.property.name === 'Avatar'
        ) {
          // This is a Pill.Avatar element, check for altText prop
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
