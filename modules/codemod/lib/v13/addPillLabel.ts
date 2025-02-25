import {object} from 'yup';
// import {FileInfo, API} from 'jscodeshift';

// const transformer = (file: FileInfo, api: API): string => {
//   const j = api.jscodeshift;
//   const root = j(file.source);

//   // Find the Pill import from @workday/canvas-kit-preview-react/pill
//   const pillImport = root.find(j.ImportDeclaration, {
//     source: {value: '@workday/canvas-kit-preview-react/pill'},
//   });

//   if (pillImport.size() === 0) {
//     return file.source; // No Pill import found, return unchanged
//   }

//   // Transform the JSX elements
//   root
//     .find(j.JSXElement, {
//       openingElement: {
//         name: {type: 'JSXIdentifier', name: 'Pill'},
//       },
//     })
//     .forEach(path => {
//       const children = path.node.children;
//       children; //?

//       // Check if children contain Pill.Icon or Pill.IconButton
//       const hasIconChild = children.some(
//         child =>
//           j.JSXElement.check(child) &&
//           j.JSXIdentifier.check(child.openingElement.name) &&
//           (child.openingElement.name.name === 'Pill.Icon' ||
//             child.openingElement.name.name === 'Pill.IconButton')
//       );

//       if (!hasIconChild) {
//         return;
//       }

//       const newChildren = children.map(child => {
//         if (
//           j.JSXText.check(child) &&
//           child.value.trim() !== '' // Ensure it's not just whitespace
//         ) {
//           return j.jsxElement(
//             j.jsxOpeningElement(j.jsxIdentifier('Pill.Label'), []),
//             j.jsxClosingElement(j.jsxIdentifier('Pill.Label')),
//             [j.jsxText(child.value)]
//           );
//         }
//         return child;
//       });

//       path.node.children = newChildren;
//     });

//   return root.toSource();
// };

// export default transformer;

import {API, FileInfo, JSXElement, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const pillPackage = '@workday/canvas-kit-preview-react/pill';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, pillPackage, ['Pill'])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-preview-react/pill'
  );

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Pill ||
          value.openingElement.name.name === styledMap.Pill)
    )
    .forEach(nodePath => {
      // Check if children contain at least one Pill.Icon or Pill.Avatar
      const hasPillSubcomponents =
        nodePath.node.children &&
        nodePath.node.children.some(
          child => {
            if (child.type === 'JSXElement') {
              if (child.openingElement.type === 'JSXOpeningElement') {
                if (child.openingElement.name.property.type === 'JSXIdentifier') {
                  return (
                    child.openingElement.name.property.name === 'Icon' ||
                    child.openingElement.name.property.name === 'Avatar' ||
                    child.openingElement.name.property.name === 'IconButton' ||
                    child.openingElement.name.property.name === 'Count'
                  );
                }
                // return child.openingElement.name.property.name === 'Icon'; //?
              }
            }
          }
          // j.JSXElement.check(child) &&
          // j.JSXIdentifier.check(child.openingElement.name) &&
          // (child.openingElement.name.name === 'Pill.Icon' ||
          //   child.openingElement.name.name === 'Pill.Avatar')
        );
      hasPillSubcomponents;
      if (hasPillSubcomponents) {
        nodePath.node.children?.forEach(child => {
          if (child.type === 'JSXText' && child.value.trim() !== '') {
            j.jsxElement(
              j.jsxOpeningElement(j.jsxIdentifier('Pill.Label'), []),
              j.jsxClosingElement(j.jsxIdentifier('Pill.Label')),
              [j.jsxText(child.value)]
            );
            child; //?
          }
        });
      }
    });

  return root.toSource();
}
