import {API, FileInfo, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const dubLogoPackage = '@workday/canvas-kit-react/common';
const packageImports = ['dubLogoPrimary', 'dubLogoReversed', 'wdayLogoPrimary', 'wdayLogoReversed'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, dubLogoPackage, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');
  console.log(importMap);

  // Transform dangerouslySetInnerHTML attributes

  root
    .find(j.JSXAttribute, {
      name: {name: 'dangerouslySetInnerHTML'},
    })
    .forEach(nodePath => {
      if (
        nodePath.node.value?.type === 'JSXExpressionContainer' &&
        nodePath.node.value.expression.type === 'ObjectExpression'
      ) {
        nodePath.node.value.expression.properties.forEach(attr => {
          if (attr.type === 'ObjectProperty' && attr.key.type === 'Identifier') {
            if (attr.key.name === '__html' && attr.value.type === 'Identifier') {
              if (attr.value.name === 'dubLogoBlue') {
                attr.value.name = 'dubLogoPrimary';
              } else if (attr.value.name === 'dubLogoWhite') {
                attr.value.name = 'dubLogoReversed';
              } else if (attr.value.name === 'wdayLogoBlue') {
                attr.value.name = 'wdayLogoPrimary';
              } else if (attr.value.name === 'wdayLogoWhite') {
                attr.value.name = 'wdayLogoReversed';
              }
            }
          }
        });
      }
    });

  return root.toSource();
}
