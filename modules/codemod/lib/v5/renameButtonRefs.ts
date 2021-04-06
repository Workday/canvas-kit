import {API, FileInfo, Options, JSXIdentifier} from 'jscodeshift';
import {getImportRenameMap} from './getImportRenameMap';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports} = getImportRenameMap(j, root, '@workday/canvas-kit-react/button');

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(j.JSXIdentifier, (value: JSXIdentifier) => value.name === 'buttonRef')
    .replaceWith(() => {
      return j.jsxIdentifier('ref');
    });

  return root.toSource();
}
