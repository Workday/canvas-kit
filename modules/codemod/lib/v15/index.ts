import {Transform} from 'jscodeshift';
import promoteInformationHighlight from './promoteInformationHighlight';
import promoteSegmentedControl from './promoteSegmentedControl';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes: Transform[] = [promoteSegmentedControl, promoteInformationHighlight];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
