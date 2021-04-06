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
      if (specifier.type === 'ImportSpecifier') {
        switch (specifier.imported.name) {
          case 'spacing':
            specifier.imported.name = 'space';
            break;
          case 'spacingNumbers':
            specifier.imported.name = 'spaceNumbers';
            break;
          case 'CanvasSpacing':
            specifier.imported.name = 'CanvasSpace';
            break;
          case 'CanvasSpacingValue':
            specifier.imported.name = 'CanvasSpaceValues';
            break;
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
