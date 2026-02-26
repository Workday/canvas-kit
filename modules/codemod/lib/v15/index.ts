import {Transform} from 'jscodeshift';

import promoteAvatar from './promoteAvatar';
import promoteInformationHighlight from './promoteInformationHighlight';
import promotePill from './promotePill';
import promoteSegmentedControl from './promoteSegmentedControl';
import promoteSidePanel from './promoteSidePanel';
import updateCardVariant from './updateCardVariant';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes: Transform[] = [
    promoteSegmentedControl,
    promoteInformationHighlight,
    promotePill,
    promoteAvatar,
    promoteSidePanel,
    updateCardVariant,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
