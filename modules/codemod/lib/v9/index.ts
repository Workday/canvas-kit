import {Transform} from 'jscodeshift';

import softDeprecateStack from './deprecateStack';
import promoteToast from './promoteToast';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // add codemods here
    softDeprecateStack,
    promoteToast,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
