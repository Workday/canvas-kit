import {
  API,
  FileInfo,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  ImportDefaultSpecifier,
} from 'jscodeshift';

const sourceMap = {
  '@workday/canvas-kit-react/core': '@workday/canvas-kit-react/tokens',
  '@workday/canvas-kit-labs-react/core': '@workday/canvas-kit-labs-react/tokens',
};

// Rename "/core" imports to "/tokens"
export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // transform import {} from "@workday/canvas-kit-react/core"
  // to import {} from "@workday/canvas-kit-react/tokens"
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/core'}})
    .forEach(nodePath => {
      const source = nodePath.value.source.value as keyof typeof sourceMap;
      nodePath.value.source.value = sourceMap[source];

      return nodePath;
    });

  // transform "@workday/canvas-kit-labs-react/core" imports
  // to "@workday/canvas-kit-labs-react/tokens"
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/core'}})
    .forEach(nodePath => {
      const source = nodePath.value.source.value as keyof typeof sourceMap;
      nodePath.value.source.value = sourceMap[source];

      return nodePath;
    });

  // transform `import type from "@workday/canvas-kit-labs-react/tokens";`
  // to `import {type} from "@workday/canvas-kit-labs-react/tokens";`
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/tokens'}})
    .forEach(nodePath => {
      const newSpecifiers = [] as (
        | ImportSpecifier
        | ImportDefaultSpecifier
        | ImportNamespaceSpecifier
      )[];

      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportDefaultSpecifier' && specifier.local?.name === 'type') {
          return newSpecifiers.push({
            type: 'ImportSpecifier',
            imported: {type: 'Identifier', name: 'type'},
          });
        }
        return newSpecifiers.push(specifier);
      });

      nodePath.value.specifiers = newSpecifiers;
      return nodePath;
    });

  return root.toSource();
}
