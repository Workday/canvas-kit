import {API, FileInfo, Options, JSXIdentifier} from 'jscodeshift';
import {getImportRenameMap} from './getImportRenameMap';

const buttonNames = [
  'Button',
  'DeleteButton',
  'deprecated_Button',
  'DropdownButton',
  'HighlightButton',
  'Hyperlink',
  'IconButton',
  'OutlineButton',
  'TextButton',
  'ToolbarDropdownButton',
  'ToolbarIconButton',
];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/button'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(j.JSXIdentifier, (value: JSXIdentifier) => value.name === 'buttonRef')
    .replaceWith(nodePath => {
      // only replace via one of our Button imports
      const elementName = nodePath.parent?.parent?.value?.name?.name;
      if (buttonNames.map(n => importMap[n]).includes(elementName)) {
        return j.jsxIdentifier('ref');
      }
      return nodePath.value;
    });

  return root.toSource();
}
