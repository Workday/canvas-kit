import {API, FileInfo, Identifier} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

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

  // replace all member expressions of 'spacing' with 'space'
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'spacing'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.object as Identifier;
      identifier.name = 'space';
      return nodePath;
    });

  // replace all member expressions of 'spacingNumbers' with 'spaceNumbers'
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'spacingNumbers'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.object as Identifier;
      identifier.name = 'spaceNumbers';
      return nodePath;
    });

  // replace all spacing and spacingNumber properties from canvas
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

  // replace all member expressions of 'CanvasSpacing' with 'CanvasSpace'
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacing'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpace';
      return nodePath;
    });

  // replace all member expressions of 'CanvasSpacingNumber' with 'CanvasSpaceNumbers'
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacingNumber'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpaceNumbers';
      return nodePath;
    });

  // replace all member expressions of 'CanvasSpacingValue' with 'CanvasSpaceValues'
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CanvasSpacingValue'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'CanvasSpaceValues';
      return nodePath;
    });

  return root.toSource();
}
