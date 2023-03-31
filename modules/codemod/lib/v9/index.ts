import {Transform} from 'jscodeshift';

import softDeprecateStack from './deprecateStack';
import promoteToast from './promoteToast';
import compoundToast from './compoundToast';
import promoteUseThemedRing from './promoteUseThemedRing';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // add codemods here
    softDeprecateStack,
    promoteToast,
    compoundToast,
    promoteUseThemedRing,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
