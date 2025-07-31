import {Transform} from 'jscodeshift';

import updateStatusIndicatorPreview from './updateStatusIndicatorPreview';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [updateStatusIndicatorPreview];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
