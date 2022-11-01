import {API, FileInfo, Options, JSXElement, ImportDeclaration, ASTPath} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
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
        // Remove all attributes from ActionBar to replace them to ActionBar.List
        const attributes = nodePath.value.openingElement.attributes || [];

        const isModelProp = !!attributes.find(
          attr =>
            attr.type === 'JSXAttribute' &&
            (attr.name.name === 'model' || attr.name.name === 'items')
        );

        if (
          child.type === 'JSXElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === importMap.ActionBar &&
          child.openingElement.name.property.type === 'JSXIdentifier' &&
          child.openingElement.name.property.name === 'List' &&
          isModelProp
        ) {
          const ActionBarOverflowButtonJSX = j.jsxMemberExpression(
            j.jsxIdentifier(importMap.ActionBar),
            j.jsxIdentifier('OverflowButton')
          );

          const overflowButton = j.jsxElement(
            j.jsxOpeningElement(
              ActionBarOverflowButtonJSX,
              [j.jsxAttribute(j.jsxIdentifier('aria-label'), j.stringLiteral('More actions'))],
              true
            )
          );

          child.openingElement.attributes?.push(
            j.jsxAttribute(
              j.jsxIdentifier('overflowButton'),
              j.jsxExpressionContainer(overflowButton)
            )
          );
        }
      });
    });

  return root.toSource();
}
