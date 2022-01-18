import {Transform} from 'jscodeshift';
import {renameImports} from './utils';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  return renameImports(api, root, '@workday/canvas-kit-react/tokens', {
    CanvasDepthValue: 'CanvasDepthValues',
  }).toSource();
};

export default transform;
