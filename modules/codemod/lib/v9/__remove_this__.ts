import {Transform} from 'jscodeshift';

// placeholder codemod
const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  return root.toSource();
};

export default transform;
