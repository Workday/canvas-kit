import {Transform} from 'jscodeshift';

import softDeprecateStack from '../softDeprecate/Stack/softDeprecateStack';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // add codemods here
    softDeprecateStack,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
