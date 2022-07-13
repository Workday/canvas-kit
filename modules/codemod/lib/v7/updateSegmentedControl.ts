import {API, FileInfo, Options, JSXElement} from 'jscodeshift';

import {getImportRenameMap} from './utils/getImportRenameMap';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/segmented-control'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.SegmentedControl ||
          value.openingElement.name.name === styledMap.SegmentedControl)
    )
    .forEach(nodePath => {
      for (const child of nodePath.value.children || []) {
        if (child.type === 'JSXElement' && child.openingElement.name.type === 'JSXIdentifier') {
          child.openingElement.name.name = 'SegmentedControl.Button';
        }
      }
    });

  return root.toSource();
}
