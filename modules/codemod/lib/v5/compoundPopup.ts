import {
  API,
  FileInfo,
  Options,
  JSXElement,
  JSXAttribute,
  JSXSpreadAttribute,
  ImportSpecifier,
} from 'jscodeshift';

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
    '@workday/canvas-kit-react/popup'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  /**
   * Convert usages of `<Popup>`
   */
  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Popup ||
          value.openingElement.name.name === styledMap.Popup)
    )
    .forEach(nodePath => {
      // bail early if we find a `Popup.Body` as a child
      for (const child of nodePath.value.children || []) {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === 'Popup' &&
          child.openingElement.name.property.type === 'JSXIdentifier' &&
          (child.openingElement.name.property.name === 'Body' ||
            child.openingElement.name.property.name === 'Target')
        ) {
          return;
        }
      }

      // remove `PopupPadding` import
      root
        .find(j.ImportSpecifier, (node: ImportSpecifier) => {
          return node.imported.name === importMap.PopupPadding;
        })
        .remove();

      // Gather attributes
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
        const handleClose = attributes.find(findAttribute('handleClose')) as
          | JSXAttribute
          | undefined;
        const closeButtonAriaLabel = attributes.find(findAttribute('closeButtonAriaLabel')) as
          | JSXAttribute
          | undefined;
        const ariaLabel = attributes.find(findAttribute('ariaLabel')) as JSXAttribute | undefined;
        const closeIconSize = attributes.find(findAttribute('closeIconSize')) as
          | JSXAttribute
          | undefined;
        const children = nodePath.value.children;
        const padding = attributes.find(findAttribute('padding')) as JSXAttribute | undefined;

        // remove these attributes from the list - we'll add them as sub components
        nodePath.value.openingElement.attributes = attributes
          .filter(item => {
            if (
              item.type === 'JSXAttribute' &&
              item.name.type === 'JSXIdentifier' &&
              [
                'heading',
                'headingId',
                'handleClose',
                'closeButtonAriaLabel',
                'ariaLabel',
                'closeIconSize',
              ].includes(item.name.name)
            ) {
              return false;
            }
            return true;
          })
          .concat(
            [
              ariaLabel
                ? j.jsxAttribute(j.jsxIdentifier('aria-label'), ariaLabel.value)
                : undefined,
            ].filter<JSXAttribute>(filterDefined)
          );

        const PopupHeadingJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Popup),
          j.jsxIdentifier('Heading')
        );

        const PopupBodyJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Popup),
          j.jsxIdentifier('Body')
        );

        const PopupCloseIconJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Popup),
          j.jsxIdentifier('CloseIcon')
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

        // Convert `padding={Popup.Padding.s}` to `padding="s"`
        if (
          padding &&
          padding.value?.type === 'JSXExpressionContainer' &&
          padding.value.expression.type === 'MemberExpression' &&
          padding.value.expression.object.type === 'MemberExpression' &&
          padding.value.expression.object.object.type === 'Identifier' &&
          [importMap.Popup, styledMap.Popup].includes(
            padding.value.expression.object.object.name
          ) &&
          padding.value.expression.property.type === 'Identifier'
        ) {
          const spacing = padding.value.expression.property.name;
          padding.value = j.literal(spacing);
        }

        // Convert `padding={PopupPadding.s}` to `padding="s"`
        if (
          padding &&
          padding.value?.type === 'JSXExpressionContainer' &&
          padding.value.expression.type === 'MemberExpression' &&
          padding.value.expression.object.type === 'Identifier' &&
          padding.value.expression.object.name === importMap.PopupPadding &&
          padding.value.expression.property.type === 'Identifier'
        ) {
          const spacing = padding.value.expression.property.name;
          padding.value = j.literal(spacing);
        }

        // Add header back as children
        nodePath.value.children = [
          !!handleClose
            ? j.jsxElement(
                j.jsxOpeningElement(
                  PopupCloseIconJSX,
                  [
                    j.jsxAttribute(j.jsxIdentifier('onClick'), handleClose.value),
                    closeButtonAriaLabel
                      ? j.jsxAttribute(j.jsxIdentifier('aria-label'), closeButtonAriaLabel.value)
                      : undefined,
                    closeIconSize
                      ? j.jsxAttribute(j.jsxIdentifier('size'), closeIconSize.value)
                      : undefined,
                  ].filter<JSXAttribute>(filterDefined),
                  true
                )
              )
            : undefined,
          !!header
            ? j.jsxElement(
                j.jsxOpeningElement(
                  PopupHeadingJSX,
                  [id ? j.jsxAttribute(j.jsxIdentifier('id'), id.value) : undefined].filter<
                    JSXAttribute
                  >(filterDefined)
                ),
                j.jsxClosingElement(PopupHeadingJSX),
                convertAttributeToChildren(header)
              )
            : undefined,
          j.jsxElement(
            j.jsxOpeningElement(PopupBodyJSX),
            j.jsxClosingElement(PopupBodyJSX),
            children
          ),
        ].filter<JSXElement>(filterDefined);

        // Change the JSX element from a `<Popup>` to a `<Popup.Card>`
        nodePath.value.openingElement.name = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Popup),
          j.jsxIdentifier('Card')
        );

        if (nodePath.value.closingElement) {
          nodePath.value.closingElement.name = j.jsxMemberExpression(
            j.jsxIdentifier(importMap.Popup),
            j.jsxIdentifier('Card')
          );
        }
      }
    });

  return root.toSource();
}
