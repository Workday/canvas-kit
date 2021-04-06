import {API, FileInfo, Identifier} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

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
