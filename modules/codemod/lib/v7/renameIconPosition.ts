import {API, FileInfo, Options, JSXElement, JSXAttribute, JSXSpreadAttribute} from 'jscodeshift';

import {getImportRenameMap} from './utils/getImportRenameMap';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/button'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name ===
          (importMap.PrimaryButton || importMap.SecondaryButton) ||
          value.openingElement.name.name === (styledMap.PrimaryButton || styledMap.SecondaryButton))
    )
    .forEach(nodePath => {
      const findAttribute = (name: string) => (item: JSXAttribute | JSXSpreadAttribute) => {
        if (
          item.type === 'JSXAttribute' &&
          item.name.type === 'JSXIdentifier' &&
          item.name.name === name
        ) {
          return true;
        }
        return false;
      };
      const attributes = nodePath.value.openingElement.attributes;
      if (attributes) {
        const iconPosition = attributes.find(findAttribute('iconPosition')) as
          | JSXAttribute
          | undefined;

        if (iconPosition?.value?.type === 'StringLiteral') {
          if (iconPosition.value.value === 'left') {
            iconPosition.value.value = 'start';
          } else {
            iconPosition.value.value = 'end';
          }
        }
      }
    });

  return root.toSource();
}
