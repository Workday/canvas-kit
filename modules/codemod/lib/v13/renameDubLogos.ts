import {API, FileInfo, JSXIdentifier, JSXOpeningElement, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v13/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';
import {attributeIcon} from '@workday/canvas-system-icons-web';

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

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react/common');

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
          // e.g. `import {dubLogoWhite}` becomes `import {dubLogoReversed}`
          // e.g. `import {wdayLogoBlue}` becomes `import {wdayLogoPrimary}`
          // e.g. `import {wdayLogoWhite}` becomes `import {wdayLogoReversed}`
          if (specifier.imported.name === 'dubLogoBlue') {
            specifier.imported.name = 'dubLogoPrimary';
          } else if (specifier.imported.name === 'dubLogoWhite') {
            specifier.imported.name = 'dubLogoReversed';
          } else if (specifier.imported.name === 'wdayLogoBlue') {
            specifier.imported.name = 'wdayLogoPrimary';
          } else if (specifier.imported.name === 'wdayLogoWhite') {
            specifier.imported.name = 'wdayLogoReversed';
          }
        }
        return specifier;
      });
    });

  // Transform LoadingAnimation JSXElements
  // e.g. `<LoadingAnimation />` becomes `<LoadingDots />`
  root
    .find(j.JSXOpeningElement, (value: JSXOpeningElement) => {
      const isCorrectImport = Object.entries(importMap).some(
        ([original, imported]) =>
          imported === (value.name as JSXIdentifier).name && dubLogoImports.includes(original)
      );

      const isCorrectStyled = Object.entries(styledMap).some(
        ([original, styled]) =>
          styled === (value.name as JSXIdentifier).name && dubLogoImports.includes(original)
      );

      return isCorrectImport || isCorrectStyled;
    })
    .forEach(nodePath => {
      nodePath.node.attributes?.forEach(attr => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'dangerouslySetInnerHTML') {
            if (attr.value && attr.value.type === 'JSXExpressionContainer') {
              const value = attr.value.expression as any;
              value.forEach(i => {
                if (i.type === 'Property') {
                  if (i.value.name === 'dubLogoBlue') {
                    return (i.value.name = 'dubLogoPrimary');
                  }
                }
              });
              if (value.type === 'Identifier') {
                // attr.value.expression;
                attr.value.expression = j.conditionalExpression(
                  j.identifier(value.name),
                  j.stringLiteral('error'),
                  j.identifier('undefined')
                );
              }
            }
          }
        }
        return attr;
      });
    });

  return root.toSource();
}
