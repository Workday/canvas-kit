import {Transform} from 'jscodeshift';

import compoundActionBar from './compoundActionBar';
import compoundBanner from './compoundBanner';
import removePropFromPopper from './removePropFromPopper';
import renameIconRef from './renameIconRef';
import renameLayoutImports from './renameLayoutImports';
import updateSegmentedControl from './updateSegmentedControl';
import renameIconPosition from './renameIconPosition';
import recategorizeIconButtons from './recategorizeIconButtons';

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
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
