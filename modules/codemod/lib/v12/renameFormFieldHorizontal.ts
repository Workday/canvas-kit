import {API, FileInfo, JSXIdentifier, JSXOpeningElement, Options} from 'jscodeshift';

import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const formFieldPackage = '@workday/canvas-kit-react/form-field';
const packages = [formFieldPackage];
const packageImports = ['FormField'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  root
    .find(j.JSXOpeningElement, (value: JSXOpeningElement) => {
      const isCorrectImport = Object.entries(importMap).some(
        ([original, imported]) =>
          imported === (value.name as JSXIdentifier).name && packageImports.includes(original)
      );

      const isCorrectStyled = Object.entries(styledMap).some(
        ([original, styled]) =>
          styled === (value.name as JSXIdentifier).name && packageImports.includes(original)
      );

      return isCorrectImport || isCorrectStyled;
    })
    .forEach(nodePath => {
      nodePath.node.attributes?.forEach(attr => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'orientation') {
            if (attr.value && attr.value.type === 'StringLiteral') {
              attr.value = j.stringLiteral('horizontalStart');
            }
          }
        }
      });
    });

  return root.toSource();
}
