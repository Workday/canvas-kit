import {API, FileInfo, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';

const mainPackage = '@workday/canvas-kit-react';
const dubLogoPackage = '@workday/canvas-kit-react/common';
const dubLogoImports = ['dubLogoBlue', 'dubLogoWhite', 'wdayLogoBlue', 'wdayLogoWhite'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, dubLogoPackage, dubLogoImports)) {
    return file.source;
  }

  root
    .find(j.ImportDeclaration, {
      // filter on imports from "@workday/canvas-kit/react" including slash imports
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          // Transform named import
          // e.g. `import {dubLogoBlue}` becomes `import {dubLogoPrimary}`
          if (specifier.imported.name === 'dubLogoBlue') {
            specifier.imported.name = 'dubLogoPrimary';
            // e.g. `import {dubLogoWhite}` becomes `import {dubLogoReversed}`
          } else if (specifier.imported.name === 'dubLogoWhite') {
            specifier.imported.name = 'dubLogoReversed';
            // e.g. `import {wdayLogoBlue}` becomes `import {wdayLogoPrimary}`
          } else if (specifier.imported.name === 'wdayLogoBlue') {
            specifier.imported.name = 'wdayLogoPrimary';
            // e.g. `import {wdayLogoWhite}` becomes `import {wdayLogoReversed}`
          } else if (specifier.imported.name === 'wdayLogoWhite') {
            specifier.imported.name = 'wdayLogoReversed';
          }
        }
        return specifier;
      });
    });

  return root.toSource();
}
