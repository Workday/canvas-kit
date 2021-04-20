import {API, FileInfo, Options, JSXElement, JSXAttribute, JSXSpreadAttribute} from 'jscodeshift';

import {getImportRenameMap} from './getImportRenameMap';

function filterDefined<T>(input: any): input is T {
  return !!input;
}

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/card'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Card ||
          value.openingElement.name.name === styledMap.Card)
    )
    .forEach(nodePath => {
      // bail early if we find a `Card.Body` as a child
      for (const child of nodePath.value.children || []) {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === 'Card' &&
          child.openingElement.name.property.type === 'JSXIdentifier' &&
          child.openingElement.name.property.name === 'Body'
        ) {
          return;
        }
      }

      const findAttribute = (name: string) => (item: JSXAttribute | JSXSpreadAttribute) => {
        if (
          item.type === 'JSXAttribute' &&
          item.name.type === 'JSXIdentifier' &&
          item.name.name === name
        ) {
          return true;
        }
        return false;
      };
      const attributes = nodePath.value.openingElement.attributes;

      if (attributes) {
        const header = attributes.find(findAttribute('heading')) as JSXAttribute | undefined;
        const id = attributes.find(findAttribute('headingId')) as JSXAttribute | undefined;
        const children = nodePath.value.children;

        // remove these attributes from the list - we'll add them as sub components
        nodePath.value.openingElement.attributes = attributes.filter(item => {
          if (
            item.type === 'JSXAttribute' &&
            item.name.type === 'JSXIdentifier' &&
            ['heading', 'headingId'].includes(item.name.name)
          ) {
            return false;
          }
          return true;
        });

        const CardHeadingJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Card),
          j.jsxIdentifier('Heading')
        );

        const CardBodyJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Card),
          j.jsxIdentifier('Body')
        );

        const convertAttributeToChildren = (input: JSXAttribute) => {
          switch (input.value?.type) {
            case 'JSXExpressionContainer':
              // unwrap JSXElements
              if (input.value.expression.type === 'JSXElement') {
                return [input.value.expression];
              }
              return [input.value];
            default:
              return [input.value!];
          }
        };

        // Add header back as children
        nodePath.value.children = [
          !!header
            ? j.jsxElement(
                j.jsxOpeningElement(
                  CardHeadingJSX,
                  id ? [j.jsxAttribute(j.jsxIdentifier('id'), id.value)] : []
                ),
                j.jsxClosingElement(CardHeadingJSX),
                convertAttributeToChildren(header)
              )
            : undefined,
          j.jsxElement(
            j.jsxOpeningElement(CardBodyJSX),
            j.jsxClosingElement(CardBodyJSX),
            children
          ),
        ].filter<JSXElement>(filterDefined);
      }
    });

  return root.toSource();
}
