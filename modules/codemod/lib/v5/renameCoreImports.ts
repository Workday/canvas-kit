import {API, FileInfo} from 'jscodeshift';

type SourceMap = {
  '@workday/canvas-kit-react/core': '@workday/canvas-kit-react/tokens';
  '@workday/canvas-kit-labs-react/core': '@workday/canvas-kit-labs-react/tokens';
};

const sourceMap: SourceMap = {
  '@workday/canvas-kit-react/core': '@workday/canvas-kit-react/tokens',
  '@workday/canvas-kit-labs-react/core': '@workday/canvas-kit-labs-react/tokens',
};

// Rename "/core" imports to "/tokens"
export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // transform core imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/core'}})
    .forEach(nodePath => {
      const source = nodePath.value.source.value as keyof SourceMap;
      nodePath.value.source.value = sourceMap[source];

      return nodePath;
    });

  // transform labs core imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/core'}})
    .forEach(nodePath => {
      const source = nodePath.value.source.value as keyof SourceMap;
      nodePath.value.source.value = sourceMap[source];

      return nodePath;
    });

  return root.toSource();
}
