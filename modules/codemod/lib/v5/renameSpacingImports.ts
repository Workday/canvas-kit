import {API, FileInfo} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root.find(j.ImportDeclaration).forEach(nodePath => {
    const source = nodePath.value.source.value;
    // Skip if source isn't canvas-kit/core
    if (source !== '@workday/canvas-kit-react/core') {
      return;
    }

    nodePath.value.specifiers?.forEach(specifier => {
      // only iterate over named import statements
      if (specifier.type === 'ImportSpecifier') {
        switch (specifier.imported.name) {
          // `import { spacing }` becomes `import { space }`
          case 'spacing':
            specifier.imported.name = 'space';
            break;
          // `import { spacingNumbers }` becomes `import { spaceNumbers }`
          case 'spacingNumbers':
            specifier.imported.name = 'spaceNumbers';
            break;
          // `import { CanvasSpacing }` becomes `import { CanvasSpace }`
          case 'CanvasSpacing':
            specifier.imported.name = 'CanvasSpace';
            break;
          // `import { CanvasSpacingValue }` becomes `import { CanvasSpaceValues }`
          case 'CanvasSpacingValue':
            specifier.imported.name = 'CanvasSpaceValues';
            break;
          // `import { CanvasSpacingNumber }` becomes `import { CanvasSpaceNumbers }`
          case 'CanvasSpacingNumber':
            specifier.imported.name = 'CanvasSpaceNumbers';
            break;
          default:
            break;
        }
      }
      return specifier;
    });

    return nodePath;
  });

  return root.toSource();
}
