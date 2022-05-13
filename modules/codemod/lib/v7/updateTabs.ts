import {API, FileInfo, Options} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap} = getImportRenameMap(j, root);
  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(j.JSXOpeningElement, {name: {object: {name: importMap.Tabs}, property: {name: 'Item'}}})
    .forEach(nodePath => {
      nodePath.value.attributes = nodePath.value.attributes?.map(attribute => {
        if (
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          attribute.name.name === 'name'
        ) {
          attribute.name.name = 'data-id';
        }
        return attribute;
      });
    });

  return root.toSource();
}
