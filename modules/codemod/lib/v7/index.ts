import {Transform} from 'jscodeshift';

import compoundActionBar from './compoundActionBar';
import compoundBanner from './compoundBanner';
import recategorizeIconButtons from './recategorizeIconButtons';
import removePropFromPopper from './removePropFromPopper';
import renameIconPosition from './renameIconPosition';
import renameLayoutImports from './renameLayoutImports';
import updateSegmentedControl from './updateSegmentedControl';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    compoundActionBar,
    compoundBanner,
    recategorizeIconButtons,
    removePropFromPopper,
    renameIconPosition,
    renameLayoutImports,
    updateSegmentedControl,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
