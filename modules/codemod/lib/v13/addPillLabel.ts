import {API, FileInfo, JSXElement, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const pillPackage = '@workday/canvas-kit-preview-react/pill';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, pillPackage, ['Pill'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-preview-react/pill'
  );

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Pill ||
          value.openingElement.name.name === styledMap.Pill)
    )
    .forEach(nodePath => {
      // Check if children contain at least one Pill.Icon or Pill.Avatar
      const hasPillSubcomponents =
        nodePath.node.children &&
        nodePath.node.children.some(child => {
          if (
            child.type === 'JSXElement' &&
            child.openingElement.type === 'JSXOpeningElement' &&
            child.openingElement.name.type === 'JSXMemberExpression'
          ) {
            return (
              child.openingElement.name?.property.name === 'Icon' ||
              child.openingElement.name.property.name === 'Avatar' ||
              child.openingElement.name.property.name === 'IconButton' ||
              child.openingElement.name.property.name === 'Count'
            );
          }
        });

      if (hasPillSubcomponents) {
        nodePath.node.children = nodePath.node.children?.map(child => {
          if (child.type === 'JSXText' && child.value.trim() !== '') {
            return j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Pill.Label'), []),
              j.jsxClosingElement(j.jsxIdentifier('Pill.Label')),
              [j.jsxText(child.value)]
            );
          }
          if (child.type === 'JSXExpressionContainer' && child.expression.type === 'Identifier') {
            return j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Pill.Label'), []),
              j.jsxClosingElement(j.jsxIdentifier('Pill.Label')),
              [j.jsxExpressionContainer(child.expression)]
            );
          }
          if (child.type === 'JSXExpressionContainer' && child.expression.type === 'Literal') {
            return j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Pill.Label'), []),
              j.jsxClosingElement(j.jsxIdentifier('Pill.Label')),
              [j.literal(child.expression.value)]
            );
          }
          return child;
        });
      }
    });

  return root.toSource();
}
