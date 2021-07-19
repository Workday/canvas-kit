import {API, FileInfo, Identifier} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Rename spacing imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/core'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        // Only iterate over named import statements
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

  // Rename spacing expressions
  // Check file import statements for canvas-kit imports
  // This allows us to somewhat safely assume any member expressions or types should not be modified
  const canvasKitImports = root.find(j.ImportDeclaration).filter(nodePath => {
    const importSource = nodePath.value.source.value;
    return (
      importSource === '@workday/canvas-kit-react/core' ||
      importSource === '@workday/canvas-kit-react'
    );
  });

  // If there are no canvas-kit imports, return the original AST
  if (!canvasKitImports.length) {
    return root.toSource();
  }

  // Replace all member expressions of 'spacing' with 'space'
  // e.g. `{ margin: spacing.m }` becomes `{ margin: space.m }`
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'spacing'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.object as Identifier;
      identifier.name = 'space';
      return nodePath;
    });

  // Replace all member expressions of 'spacingNumbers' with 'spaceNumbers'
  // e.g. `{ margin: spacingNumbers.m }` becomes `{ margin: spaceNumbers.m }`
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'spacingNumbers'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.object as Identifier;
      identifier.name = 'spaceNumbers';
      return nodePath;
    });

  // Replace all spacing and spacingNumber properties from canvas
  // e.g. `{ margin: canvas.spacing.m }` becomes `{ margin: canvas.space.m }`
  // and `{ margin: canvas.spacingNumber.m }` becomes `{ margin: canvas.spaceNumber.m }`
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'canvas'}})
    .forEach(nodePath => {
      const objectProperty = nodePath.value.property as Identifier;
      if (objectProperty.name === 'spacing') {
        objectProperty.name = 'space';
      }
      if (objectProperty.name === 'spacingNumbers') {
        objectProperty.name = 'spaceNumbers';
      }

      return nodePath;
    });

  // Replace all type references of 'CanvasSpacing' with 'CanvasSpace'
  // e.g. `type SpaceProps = CanvasSpacing;`
  // becomes `type SpaceProps = CanvasSpace;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacing'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpace';
      return nodePath;
    });

  // Replace all type references of 'CanvasSpacingNumber' with 'CanvasSpaceNumbers'
  // e.g. `type SpaceNumberProps = CanvasSpacingNumber;`
  // becomes `type SpaceNumberProps = CanvasSpaceNumbers;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacingNumber'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpaceNumbers';
      return nodePath;
    });

  // Replace all type references of 'CanvasSpacingValue' with 'CanvasSpaceValues'
  // e.g. `type SpaceValueProps = CanvasSpacingValue;`
  // becomes `type SpaceValueProps = CanvasSpaceValues;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacingValue'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpaceValues';
      return nodePath;
    });

  return root.toSource();
}
