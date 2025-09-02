import {Transform} from 'jscodeshift';

import updateStatusIndicatorPreview from './updateStatusIndicatorPreview';
import updatePillAvatarProp from './updatePillAvatarProp';
import updateExpandableAvatarProp from './updateExpandableAvatarProp';
import updateFormFieldAlert from './updateFormFieldAlert';
import renameErrorTypeAlertOnInputs from './renameErrorTypeAlertOnInputs';
import renameErrorTypeAlert from './renameErrorTypeAlert';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    updateStatusIndicatorPreview,
    updatePillAvatarProp,
    updateExpandableAvatarProp,
    renameErrorTypeAlert,
    updateFormFieldAlert,
    renameErrorTypeAlertOnInputs,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
