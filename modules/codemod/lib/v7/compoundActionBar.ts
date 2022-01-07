import {API, FileInfo, Options, JSXElement, ImportDeclaration, ASTPath} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';

const mainPackage = '@workday/canvas-kit-react';
const actionBarPackage = '@workday/canvas-kit-react/action-bar';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  let hasActionBarImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const {value} = nodePath.source;
    // If there's an import from the action-bar package, set the import boolean check to true
    if (value === actionBarPackage) {
      hasActionBarImports = true;
      return;
    }
    // If there's an import from the main package, check to see if ActionBar is among the named imports
    // e.g. import ActionBar from '@workday/canvas-kit-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          if (specifierName === 'ActionBar') {
            hasActionBarImports = true;
          }
        }
      });
    }
  });

  // Failsafe to skip transforms unless a ActionBar import is detected
  if (!hasActionBarImports) {
    return root.toSource();
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

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/action-bar'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  // Remove fixed prop from ActionBar component
  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.ActionBar ||
          value.openingElement.name.name === styledMap.ActionBar)
    )
    .forEach(nodePath => {
      const attributes = nodePath.value.openingElement.attributes;

      if (attributes) {
        // remove these attributes from ActionBar
        nodePath.value.openingElement.attributes = attributes.filter(item =>
          item.type === 'JSXAttribute' &&
          item.name.type === 'JSXIdentifier' &&
          ['fixed'].includes(item.name.name)
            ? false
            : true
        );
      }
    });

  return root.toSource();
}
