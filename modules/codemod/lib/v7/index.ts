import {Transform} from 'jscodeshift';

import compoundActionBar from './compoundActionBar';
import compoundBanner from './compoundBanner';
import removePropFromPopper from './removePropFromPopper';
import renameIconRef from './renameIconRef';
import renameLayoutImports from './renameLayoutImports';
import updateSegmentedControl from './updateSegmentedControl';
import renameIconPosition from './renameIconPosition';
import recategorizeIconButtons from './recategorizeIconButtons';
import updateModelSignatures from './updateModelSignatures';
import updateTabs from './updateTabs';
import updateDisclosureShowHide from './updateDisclosureShowHide';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    compoundActionBar,
    compoundBanner,
    recategorizeIconButtons,
    renameIconRef,
    removePropFromPopper,
    renameIconPosition,
    renameLayoutImports,
    updateSegmentedControl,
    updateModelSignatures,
    updateTabs,
    updateDisclosureShowHide,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
