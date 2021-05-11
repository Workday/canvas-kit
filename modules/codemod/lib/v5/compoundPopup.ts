import {
  API,
  FileInfo,
  Options,
  JSXElement,
  JSXAttribute,
  JSXSpreadAttribute,
  CallExpression,
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
          j.jsxIdentifier('Popup'),
          j.jsxIdentifier('Card')
        );

        if (nodePath.value.closingElement) {
          nodePath.value.closingElement.name = j.jsxMemberExpression(
            j.jsxIdentifier('Popup'),
            j.jsxIdentifier('Card')
          );
        }
      }
    });

  /**
   * Convert Popup hooks if possible - only if `usePopup` was used. It is too nuanced otherwise
   */
  if (importMap.usePopup) {
    root.find(j.VariableDeclarator, {init: {callee: {name: 'usePopup'}}}).forEach(nodePath => {
      if (nodePath.value.id.type === 'ObjectPattern') {
        // add `model` to the object list
        nodePath.value.id.properties.push(
          j.property.from({
            kind: 'init',
            key: j.identifier('model'),
            value: j.identifier('model'),
            shorthand: true,
          })
        );
      }
    });

    const popupHooks = [
      'useAlwaysCloseOnOutsideClick',
      'useAssistiveHideSiblings',
      'useBringToTopOnClick',
      'useCloseOnOutsideClick',
      'useCloseOnEscape',
      'useFocusTrap',
    ];
    root.find(j.CallExpression, (node: CallExpression) => {
      if (
        node.callee.type === 'Identifier' &&
        popupHooks.includes(node.callee.name) &&
        // first argument is 'stackRef'
        ((node.arguments[0]?.type === 'Identifier' && node.arguments[0].name === 'stackRef') ||
          // first argument is 'popperProps.ref'
          (node.arguments[0]?.type === 'MemberExpression' &&
            node.arguments[0].object.type === 'Identifier' &&
            node.arguments[0].object.name === 'popperProps' &&
            node.arguments[0].property.type === 'Identifier' &&
            node.arguments[0].property.name === 'ref'))
      ) {
        node.arguments = [j.identifier('model')];
      }
    });
  }

  return root.toSource();
}
