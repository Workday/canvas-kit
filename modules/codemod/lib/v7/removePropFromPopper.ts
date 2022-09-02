import {API, FileInfo, Options, JSXElement} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const popupBarPackage = '@workday/canvas-kit-react/popup';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, popupBarPackage, ['Popper'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, popupBarPackage);

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Popper ||
          value.openingElement.name.name === styledMap.Popper)
    )
    .forEach(nodePath => {
      const attributes = nodePath.value.openingElement.attributes;
      // Remove containerElement prop from Popper component
      if (attributes) {
        nodePath.value.openingElement.attributes = attributes.filter(item =>
          item.type === 'JSXAttribute' &&
          item.name.type === 'JSXIdentifier' &&
          ['containerElement'].includes(item.name.name)
            ? false
            : true
        );
      }
    });

  return root.toSource();
}
