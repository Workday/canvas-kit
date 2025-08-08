import {Transform} from 'jscodeshift';

import updateStatusIndicatorPreview from './updateStatusIndicatorPreview';
import updatePillAvatarProp from './updatePillAvatarProp';
import updateExpandableAvatarProp from './updateExpandableAvatarProp';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [updateStatusIndicatorPreview, updatePillAvatarProp, updateExpandableAvatarProp];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
