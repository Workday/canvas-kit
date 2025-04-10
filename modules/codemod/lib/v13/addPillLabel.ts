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

      // Check for subcomponents using the local Pill name
      const hasPillSubcomponents =
        nodePath.node.children &&
        nodePath.node.children.some(child => {
          if (
            child.type === 'JSXElement' &&
            child.openingElement.type === 'JSXOpeningElement' &&
            child.openingElement.name.type === 'JSXMemberExpression' &&
            child.openingElement.name.object.type === 'JSXIdentifier' &&
            child.openingElement.name.object.name === pillName
          ) {
            return (
              child.openingElement.name.property.name === 'Icon' ||
              child.openingElement.name.property.name === 'Avatar' ||
              child.openingElement.name.property.name === 'IconButton' ||
              child.openingElement.name.property.name === 'Count'
            );
          }
          return false;
        });

      // If subcomponents are present, wrap text and expressions in Pill.Label
      if (hasPillSubcomponents) {
        nodePath.node.children = nodePath.node.children?.map(child => {
          if (child.type === 'JSXText' && child.value.trim() !== '') {
            return j.jsxElement(
              j.jsxOpeningElement(
                j.jsxMemberExpression(j.jsxIdentifier(pillName), j.jsxIdentifier('Label')),
                []
              ),
              j.jsxClosingElement(
                j.jsxMemberExpression(j.jsxIdentifier(pillName), j.jsxIdentifier('Label'))
              ),
              [child]
            );
          } else if (child.type === 'JSXExpressionContainer') {
            return j.jsxElement(
              j.jsxOpeningElement(
                j.jsxMemberExpression(j.jsxIdentifier(pillName), j.jsxIdentifier('Label')),
                []
              ),
              j.jsxClosingElement(
                j.jsxMemberExpression(j.jsxIdentifier(pillName), j.jsxIdentifier('Label'))
              ),
              [child]
            );
          }
          return child;
        });
      }
    });

  return root.toSource();
}
