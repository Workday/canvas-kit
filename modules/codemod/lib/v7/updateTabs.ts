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
    // Find <Tabs
    .find(j.JSXOpeningElement, {name: {object: {name: importMap.Tabs}}})
    // Filter for <Tabs.Item and <Tabs.Panel
    .filter(path => {
      return (
        path.value.name.type === 'JSXMemberExpression' &&
        (path.value.name.property.name === 'Item' || path.value.name.property.name === 'Panel')
      );
    })
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

  root
    // find <Tabs.Menu.Item
    .find(j.JSXOpeningElement, {
      name: {
        object: {object: {name: importMap.Tabs}, property: {name: 'Menu'}},
        property: {name: 'Item'},
      },
    })
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
