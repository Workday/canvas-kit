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

  // Replace default import with named or renamed import
  root.find(j.ImportDefaultSpecifier).forEach(nodePath => {
    const parent = nodePath.parent as ASTPath<ImportDeclaration>;
    const importSource = String(parent.node.source.value) as typeof toastPackage;
    const localName = nodePath.value.local?.name;

    if (toastPackage === importSource && localName) {
      console.log(nodePath);
      nodePath.replace(j.importSpecifier(j.identifier('Toast'), j.identifier(localName)));
    }
  });

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
        j.jsxAttribute(j.jsxIdentifier('icon'), j.stringLiteral('checkIcon')),
      ];

      const unchangedIconAttributes = attributes?.filter(
        attr =>
          (attr.type === 'JSXAttribute' && attr.name.name === 'icon') ||
          (attr.type === 'JSXAttribute' && attr.name.name === 'iconColor')
      );

      const updatedIconAttrs = unchangedIconAttributes?.map(specifier => {
        if (specifier.type === 'JSXAttribute') {
          if (specifier.name.name === 'iconColor') {
            specifier.name.name = 'color';
          }
        }
        return specifier;
      });

      const chooseIconAttrs =
        unchangedIconAttributes && unchangedIconAttributes.length > 0
          ? updatedIconAttrs
          : defaultIconAttributes;

      const closeAttributes = attributes?.filter(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'onClose'
      );

      const linkAttributes = attributes?.filter(
        attr =>
          (attr.type === 'JSXAttribute' && attr.name.name === 'actionText') ||
          (attr.type === 'JSXAttribute' && attr.name.name === 'onActionClick')
      );

      // Elements

      const OpeningIconJSX = j.jsxOpeningElement(ToastIconJSX, chooseIconAttrs);
      OpeningIconJSX.selfClosing = true;

      const IconElement = j.jsxElement(OpeningIconJSX);

      // Add `import {checkIcon} from '@workday/canvas-system-icons-web'`
      // when there's a default toast
      const lastImport = root.find(j.ImportDeclaration).at(-1);
      if (lastImport && unchangedIconAttributes?.length === 0) {
        lastImport.insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier('checkIcon'))],
            j.stringLiteral('@workday/canvas-system-icons-web')
          )
        );
      }

      // Filter out all old props
      nodePath.value.openingElement.attributes?.filter(attr => {
        if (attr.type === 'JSXAttribute') {
          return (
            attr.name.name !== 'actionText' &&
            attr.name.name !== 'icon' &&
            attr.name.name !== 'onActionClick' &&
            attr.name.name !== 'iconColor' &&
            attr.name.name !== 'icon'
          );
        }
      });

      const CloseElement = j.jsxElement(
        j.jsxOpeningElement(ToastCloseJSX, closeAttributes),
        j.jsxClosingElement(ToastCloseJSX)
      );

      const LinkElement = j.jsxElement(
        j.jsxOpeningElement(ToastLinkJSX, linkAttributes),
        j.jsxClosingElement(ToastLinkJSX)
      );

      // Toast Message JSX inclduing children which should be the string
      const MessageElement = j.jsxElement(
        j.jsxOpeningElement(ToastMessageJSX),
        j.jsxClosingElement(ToastMessageJSX),
        nodePath.value.children
      );

      // Body element including Message and its children
      const BodyElement = j.jsxElement(
        j.jsxOpeningElement(ToastBodyJSX),
        j.jsxClosingElement(ToastBodyJSX),
        [MessageElement]
      );

      // Default Toast with no Close or Link
      nodePath.value.children = [IconElement, BodyElement];

      // If there's an onClose, add the Toast.Close with its attributes
      if (closeAttributes && closeAttributes?.length > 0) {
        nodePath.value.children.push(CloseElement);
      }

      // If there's an actionText or onActionClick, add the Toast.Link with its attributes
      if (linkAttributes && linkAttributes?.length > 0) {
        nodePath.value.children.push(LinkElement);
        // If there's a link, add mode="dialog" for accessibility
        nodePath.value.openingElement.attributes = [
          j.jsxAttribute(j.jsxIdentifier('mode'), j.stringLiteral('dialog')),
        ];
      }

      console.warn(nodePath.value.children);
    });

  return root.toSource();
}
