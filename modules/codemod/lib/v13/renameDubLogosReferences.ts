import {API, FileInfo, Identifier, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const dubLogoPackages = ['@workday/canvas-kit-react', '@workday/canvas-kit-react/common'];
const packageImports = ['dubLogoPrimary', 'dubLogoReversed', 'wdayLogoPrimary', 'wdayLogoReversed'];
const oldpackageImports = ['dubLogoBlue', 'dubLogoWhite', 'wdayLogoBlue', 'wdayLogoWhite'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, dubLogoPackages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  const expressions = root.find(j.JSXExpressionContainer);

  // Transform attributes

  expressions
    .find(j.Identifier, (value: Identifier) => {
      const isCorrectImport = Object.entries(importMap).some(
        ([original, imported]) => imported === original && oldpackageImports.includes(value.name)
      );

      return isCorrectImport;
    })
    .forEach(nodePath => {
      if (nodePath.node.name === 'dubLogoBlue') {
        nodePath.node.name = 'dubLogoPrimary';
      } else if (nodePath.node.name === 'dubLogoWhite') {
        nodePath.node.name = 'dubLogoReversed';
      }
      if (nodePath.node.name === 'wdayLogoBlue') {
        nodePath.node.name = 'wdayLogoPrimary';
      }
      if (nodePath.node.name === 'wdayLogoWhite') {
        nodePath.node.name = 'wdayLogoReversed';
      }
    });

  return root.toSource();
}
