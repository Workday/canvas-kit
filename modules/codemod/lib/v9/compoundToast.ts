import {API, ASTPath, FileInfo, ImportDeclaration, JSXElement, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const toastPackage = '@workday/canvas-kit-react/toast';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, toastPackage, ['Toast'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react/toast');

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Toast ||
          value.openingElement.name.name === styledMap.Toast)
    )
    .forEach(nodePath => {
      // Toast Body JSX
      const ToastBodyJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Body')
      );

      // Toast CloseIcon JSX
      const ToastCloseJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Close')
      );

      // Toast Message JSX
      const ToastMessageJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Message')
      );

      // Toast Icon JSX
      const ToastIconJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Icon')
      );
      // Toast Link JSX
      const ToastLinkJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Link')
      );

      // Attributes

      const attributes = nodePath.value.openingElement.attributes;

      const defaultIconAttributes = [
        j.jsxAttribute(j.jsxIdentifier('color'), j.stringLiteral('greenApple400')),
        j.jsxAttribute(
          j.jsxIdentifier('icon'),
          j.jsxExpressionContainer(j.jsxIdentifier('checkIcon'))
        ),
      ];

      const unchangedIconAttributes = attributes?.filter(
        attr =>
          attr.type === 'JSXAttribute' &&
          typeof attr.name.name === 'string' &&
          /icon|iconColor/g.test(attr.name.name)
      );

      const updatedIconAttrs = unchangedIconAttributes?.map(specifier => {
        if (specifier.type === 'JSXAttribute' && specifier.name.name === 'iconColor') {
          specifier.name.name = 'color';
        }
        return specifier;
      });

      const chooseIconAttrs =
        unchangedIconAttributes && unchangedIconAttributes.length
          ? updatedIconAttrs
          : defaultIconAttributes;

      const closeAttributes = attributes?.filter(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'onClose'
      );

      const linkAttributes = attributes?.filter(
        attr =>
          (attr.type === 'JSXAttribute' && (attr.name.name === 'actionText' || attr.name.name === 'onActionClick')
      );

      // Elements

      const OpeningIconJSX = j.jsxOpeningElement(ToastIconJSX, chooseIconAttrs, true);

      const IconElement = j.jsxElement(OpeningIconJSX);

      // Add `import {checkIcon} from '@workday/canvas-system-icons-web'`
      // when there's a default toast
      const lastImport = root.find(j.ImportDeclaration).at(-1);
      if (lastImport && !unchangedIconAttributes?.length) {
        lastImport.insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier('checkIcon'))],
            j.stringLiteral('@workday/canvas-system-icons-web')
          )
        );
      }

      const lineBreakStart = j.jsxText('\n  ');
      const lineBreakEnd = j.jsxText('\n');

      // Filter out all old props
      const filterAttr = nodePath.value.openingElement.attributes?.filter(attr => {
        if (attr.type === 'JSXAttribute') {
          return (
            attr.name.name !== 'actionText' &&
            attr.name.name !== 'icon' &&
            attr.name.name !== 'onActionClick' &&
            attr.name.name !== 'iconColor' &&
            attr.name.name !== 'icon' &&
            attr.name.name !== 'onClose' &&
            attr.name.name !== 'color'
          );
        }
        return attr;
      });

      nodePath.value.openingElement.attributes = filterAttr;

      const OpeningCloseElement = j.jsxOpeningElement(ToastCloseJSX, closeAttributes, true);

      const CloseElement = j.jsxElement(OpeningCloseElement);

      // grab the onActionClick attr
      const onActionClickAttr = linkAttributes?.filter(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'onActionClick'
      );

      // rename onActionClick to onClick for the Toast.Link component
      const renameOnActionClick = onActionClickAttr?.map(attr => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'onActionClick') {
          attr.name.name = 'onClick';
        }
        return attr;
      });

      // grab the actionText prop
      const actionTextAttr = linkAttributes?.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'actionText'
      );

      // Get value of the actionText prop to pass as children to the LinkElement
      const actionText =
        actionTextAttr &&
        actionTextAttr.type === 'JSXAttribute' &&
        actionTextAttr.value?.type === 'StringLiteral'
          ? [actionTextAttr.value]
          : [];

      const LinkElement = j.jsxElement(
        j.jsxOpeningElement(ToastLinkJSX, renameOnActionClick),
        j.jsxClosingElement(ToastLinkJSX),
        actionText
      );

      // Toast Message JSX inclduing children which should be the string
      const MessageElement = j.jsxElement(
        j.jsxOpeningElement(ToastMessageJSX),
        j.jsxClosingElement(ToastMessageJSX),
        nodePath.value.children
      );

      if (linkAttributes && linkAttributes?.length) {
        // If there's a link, add mode="dialog" to the main Toast component for accessibility
        nodePath.value.openingElement.attributes = [
          j.jsxAttribute(j.jsxIdentifier('mode'), j.stringLiteral('dialog')),
        ];
      }

      // Body element including Message and its children
      const BodyElement = j.jsxElement(
        j.jsxOpeningElement(ToastBodyJSX),
        j.jsxClosingElement(ToastBodyJSX),
        [lineBreakStart, MessageElement, lineBreakEnd]
      );
      // If there's an actionText or onActionClick, add the Toast.Link with its attributes inside Toast.Body
      if (linkAttributes && linkAttributes.length) {
        BodyElement.children?.push(LinkElement, lineBreakEnd);
      }

      // Default Toast with no Close or Link
      nodePath.value.children = [
        lineBreakStart,
        IconElement,
        lineBreakEnd,
        BodyElement,
        lineBreakEnd,
      ];

      // If there's an onClose, add the Toast.Close with its attributes
      if (closeAttributes && closeAttributes?.length) {
        nodePath.value.children.push(CloseElement, lineBreakEnd);
      }
    });

  return root.toSource();
}
