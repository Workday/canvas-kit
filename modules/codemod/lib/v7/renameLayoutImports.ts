import {Transform} from 'jscodeshift';
import {renameImports} from './utils';

const sourceMap = {
  '@workday/canvas-kit-labs-react/layout': '@workday/canvas-kit-react/layout',
  // '@workday/canvas-kit-labs-react/core': '@workday/canvas-kit-labs-react/tokens',
};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  // transform import {} from "@workday/canvas-kit-react/core"
  // to import {} from "@workday/canvas-kit-react/tokens"
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/layout'}})
    .forEach(nodePath => {
      const importSource = String(nodePath.value.source.value) as keyof typeof sourceMap;

      nodePath.value.source.value = sourceMap[importSource];

      return nodePath;
    });
  console.log(root.toSource());

  return root.toSource();
};

export default transform;
