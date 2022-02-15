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
