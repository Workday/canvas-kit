import {Transform} from 'jscodeshift';

// TODO: Remove this
import placeholderCodemod from './__remove_this__';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // TODO: Remove this
    placeholderCodemod,
    // add codemods here
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
