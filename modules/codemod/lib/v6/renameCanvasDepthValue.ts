import {API, FileInfo, Identifier, ImportDeclaration} from 'jscodeshift';
import {RenameMap} from './utils';

const mainPackage = '@workday/canvas-kit-react';
const tokensPackage = '@workday/canvas-kit-react/tokens';

const renameMap: RenameMap = {
  CanvasDepthValue: 'CanvasDepthValues',
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasCanvasDepthValueImports = false;

  // Toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // if there is a CanvasDepthValue import from either the main package or the tokens package, toggle the failsafe
    if (value === mainPackage || value === tokensPackage) {
      const importSpecifiers = nodePath.specifiers || [];
      importSpecifiers.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier' && specifier.imported.name in renameMap) {
          hasCanvasDepthValueImports = true;
        }
      });
    }
  });

  // Failsafe to skip transforms unless a CanvasDepthValue import is detected
  if (!hasCanvasDepthValueImports) {
    return root.toSource();
  }

  // Rename CanvasDepthValue import from @workday/canvas-kit-react
  // e.g. import { CanvasDepthValue } from '@workday/canvas-kit-react';
  // becomes import { CanvasDepthValues } from '@workday/canvas-kit-react';
  root.find(j.ImportDeclaration, {source: {value: mainPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    importSpecifiers.forEach(specifier => {
      if (specifier.type === 'ImportSpecifier' && specifier.imported.name in renameMap) {
        specifier.imported.name = renameMap[specifier.imported.name];
      }
    });
  });

  // Rename CanvasDepthValue import from @workday/canvas-kit-react/tokens
  // e.g. import { CanvasDepthValue } from '@workday/canvas-kit-react/tokens';
  // becomes import { CanvasDepthValues } from '@workday/canvas-kit-react/tokens';
  root.find(j.ImportDeclaration, {source: {value: tokensPackage}}).forEach(nodePath => {
    const importSpecifiers = nodePath.value.specifiers || [];
    importSpecifiers.forEach(specifier => {
      if (specifier.type === 'ImportSpecifier' && specifier.imported.name in renameMap) {
        specifier.imported.name = renameMap[specifier.imported.name];
      }
    });
  });

  // Transform CanvasDepthValue type references
  // e.g. type CustomDepthValues = CanvasDepthValue;
  // becomes type CustomDepthValues = CanvasDepthValues;
  root.find(j.TSTypeReference, {typeName: {type: 'Identifier'}}).forEach(nodePath => {
    const identifier = nodePath.value.typeName as Identifier;
    if (identifier.name in renameMap) {
      identifier.name = renameMap[identifier.name];
    }
  });

  // Transform CanvasDepthValue type interface declaration references
  // e.g. interface OtherCustomDepthValues extends CanvasDepthValue {};
  // becomes interface OtherCustomDepthValues extends CanvasDepthValues {};
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending SearchBarProps, transform the extension name to SearchFormProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (typeExtension.expression.type === 'Identifier') {
        const typeName = typeExtension.expression.name;
        if (typeExtension.expression.name in renameMap) {
          typeExtension.expression.name = renameMap[typeName];
        }
      }
    });
  });
  return root.toSource();
}
