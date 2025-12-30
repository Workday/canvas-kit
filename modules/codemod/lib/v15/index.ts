import {Transform} from 'jscodeshift';
import promoteInformationHighlight from './promoteInformationHighlight';
import promoteSegmentedControl from './promoteSegmentedControl';
import promoteAvatar from './promoteAvatar';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes: Transform[] = [promoteSegmentedControl, promoteInformationHighlight, promoteAvatar];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
