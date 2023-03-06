import {API, FileInfo, Options, JSXElement, ImportDeclaration, ASTPath} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const actionBarPackage = '@workday/canvas-kit-react/action-bar';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, actionBarPackage, ['ActionBar'])) {
    return file.source;
  }

  // Replace default import with named or renamed import
  root.find(j.ImportDefaultSpecifier).forEach(nodePath => {
    const parent = nodePath.parent as ASTPath<ImportDeclaration>;
    const importSource = String(parent.node.source.value) as typeof actionBarPackage;
    const localName = nodePath.value.local?.name;

    if (actionBarPackage === importSource && localName) {
      nodePath.replace(j.importSpecifier(j.identifier('ActionBar'), j.identifier(localName)));
    }
  });

  const {importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/action-bar'
  );

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.ActionBar ||
          value.openingElement.name.name === styledMap.ActionBar)
    )
    .forEach(nodePath => {
      (nodePath.value.children || []).forEach((child, index) => {
        if (child.type === 'JSXElement') {
          // bail early if we find a `ActionBar.List` as a child
          if (
            child.openingElement.name.type === 'JSXMemberExpression' &&
            child.openingElement.name.object.type === 'JSXIdentifier' &&
            child.openingElement.name.object.name === 'ActionBar' &&
            child.openingElement.name.property.type === 'JSXIdentifier' &&
            child.openingElement.name.property.name === 'List'
          ) {
            return;
          }

          // Transform Primary and Secondary button to ActionBar.Item
          if (child.openingElement.name.type === 'JSXIdentifier') {
            const buttonAttrs = child.openingElement.attributes || [];

            const ActionItemJSX = j.jsxMemberExpression(
              j.jsxIdentifier(importMap.ActionBar),
              j.jsxIdentifier('Item')
            );

            if (
              nodePath.value.children &&
              ['PrimaryButton', 'SecondaryButton'].includes(child.openingElement.name.name)
            ) {
              // Add isPrimary attribute to primary Action Item
              const elementAttrs =
                child.openingElement.name.name === 'PrimaryButton'
                  ? [...buttonAttrs, j.jsxAttribute(j.jsxIdentifier('isPrimary'))]
                  : buttonAttrs;

              nodePath.value.children[index] = j.jsxElement(
                j.jsxOpeningElement(ActionItemJSX, elementAttrs),
                j.jsxClosingElement(ActionItemJSX),
                child.children
              );
            }
          }
        }
      });

      const children = nodePath.value.children || [];

      // Remove all attributes from ActionBar to replace them to ActionBar.List
      const attributes = nodePath.value.openingElement.attributes;
      if (attributes) {
        nodePath.value.openingElement.attributes = attributes.filter(
          item => !(item.type === 'JSXAttribute' && item.name.type === 'JSXIdentifier')
        );
      }

      // Create closing element for ActionBar without closing tag
      if (nodePath.value.openingElement.selfClosing) {
        nodePath.value.openingElement.selfClosing = false;
        nodePath.value.closingElement = j.jsxClosingElement(nodePath.value.openingElement.name);
      }

      // Create ActionBar.List component
      const ActionBarListJSX = j.jsxMemberExpression(
        j.jsxIdentifier(importMap.ActionBar),
        j.jsxIdentifier('List')
      );

      const subComponentJSX = j.jsxElement(
        j.jsxOpeningElement(
          ActionBarListJSX,
          // All attributes except fixed should be passed
          attributes?.filter(attr => !(attr.type === 'JSXAttribute' && attr.name.name === 'fixed'))
        ),
        j.jsxClosingElement(ActionBarListJSX),
        children
      );

      // Keep space for code structure
      const textLiteralStart = children.find(child => child.type === 'JSXText');

      const textLiteralEnd = children
        .slice()
        .reverse()
        .find(child => child.type === 'JSXText');

      // console.log(textLiteralStart);

      nodePath.value.children =
        textLiteralStart && textLiteralEnd
          ? [textLiteralStart, subComponentJSX, textLiteralEnd]
          : [subComponentJSX];
    });

  return root.toSource();
}
