import {text} from '@workday/canvas-kit-react/layout';
import {API, FileInfo, Options, JSXElement, ImportDeclaration, ASTPath} from 'jscodeshift';
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
      // (nodePath.value.children || []).forEach((child, index) => {
      //   if (child.type === 'JSXText') {
      //     console.log(child);
      //     const ToastBodyJSX = j.jsxMemberExpression(
      //       j.jsxIdentifier(importMap.Toast),
      //       j.jsxIdentifier('Body')
      //     );

      //     const ToastMessageJSX = j.jsxMemberExpression(
      //       j.jsxIdentifier(importMap.Toast),
      //       j.jsxIdentifier('Message')
      //     );
      //     // console.log(child.value);
      //     const ToastMessageContainer = j.jsxElement(
      //       j.jsxOpeningElement(ToastMessageJSX),
      //       j.jsxClosingElement(ToastMessageJSX)
      //       // j.jsxFragment(child.value)
      //     );
      //     const test = j.jsxElement(
      //       j.jsxOpeningElement(ToastBodyJSX),
      //       j.jsxClosingElement(ToastBodyJSX)
      //     );
      //     console.log(test);
      //     // const ToastBodyJSX = j.jsxMemberExpression(j.jsxIdentifier(importMap.Toast));
      //   }
      // });

      const children = nodePath.value.children || [];
      console.warn(nodePath.value.children);

      // Toast Body JSX
      const ToastBodyJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Body')
      );

      // Toast Message JSX
      const ToastMessageJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.Toast),
        j.jsxIdentifier('Message')
      );

      // Keep space for code structure

      // Toast Message JSX inclduing children which should be the string
      const Message = j.jsxElement(
        j.jsxOpeningElement(ToastMessageJSX),
        j.jsxClosingElement(ToastMessageJSX),
        nodePath.value.children
        // innerText
      );

      const textLiteral = children.find(child => child.type === 'JSXText');

      const Body = j.jsxElement(
        j.jsxOpeningElement(ToastBodyJSX),
        j.jsxClosingElement(ToastBodyJSX),
        [Message]
      );

      // console.log(textLiteralEnd);

      // const Body = j.jsxElement(
      //   j.jsxOpeningElement(ToastBodyJSX),
      //   j.jsxClosingElement(ToastBodyJSX),
      //   Message
      // );

      // const MessageAndBody = j.jsxElement(
      //   j.jsxOpeningElement(ToastBodyJSX),
      //   j.jsxClosingElement(ToastBodyJSX),
      //   Message
      // );

      // console.log(MessageAndBody);
      // const test = (nodePath.value.children = MessageAndBody);
      // console.log(test.children);

      // All Toast attributes
      const attributes = nodePath.value.openingElement.attributes;
      console.log(attributes);

      // jsx.jsx

      console.log(Message);
      // console.log(child.value);
      // const ToastMessageJSX = j.jsxElement(
      //   j.jsxOpeningElement(ToastMessageJSX),
      //   j.jsxClosingElement(ToastMessageJSX)
      //   // j.jsxFragment(child.value)
      // );

      // Remove all attributes from ActionBar to replace them to ActionBar.List
      // const attributes = nodePath.value.openingElement.attributes;
      // console.log(attributes);
      // if (attributes) {
      //   nodePath.value.openingElement.attributes = attributes.filter(
      //     item => !(item.type === 'JSXAttribute' && item.name.type === 'JSXIdentifier')
      //   );
      // }

      // // Create closing element for ActionBar without closing tag
      // if (nodePath.value.openingElement.selfClosing) {
      //   nodePath.value.openingElement.selfClosing = false;
      //   nodePath.value.closingElement = j.jsxClosingElement(nodePath.value.openingElement.name);
      // }

      // console.log(children);

      // // Create ActionBar.List component
      // const ActionBarListJSX = j.jsxMemberExpression(
      //   j.jsxIdentifier(importMap.ActionBar),
      //   j.jsxIdentifier('List')
      // );

      // const subComponentJSX = j.jsxElement(
      //   j.jsxOpeningElement(
      //     ActionBarListJSX,
      //     // All attributes except fixed should be passed
      //     attributes?.filter(attr => !(attr.type === 'JSXAttribute' && attr.name.name === 'fixed'))
      //   ),
      //   j.jsxClosingElement(ActionBarListJSX),
      //   children
      // );

      // // Keep space for code structure
      // const textLiteralStart = children.find(child => child.type === 'JSXText');
      // const textLiteralEnd = children
      //   .slice()
      //   .reverse()
      //   .find(child => child.type === 'JSXText');

      nodePath.value.children = [Body];
    });

  return root.toSource();
}
