import {API, FileInfo, Options, JSXElement} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/action-bar'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

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
