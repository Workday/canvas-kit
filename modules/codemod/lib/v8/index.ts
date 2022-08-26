import {Transform} from 'jscodeshift';

import deprecateDrawer from './deprecateDrawer';
import deprecateLayout from './deprecateLayout';
import deprecatePreviewMenu from './deprecatePreviewMenu';
import revomeDefaultImports from './removeDefaultImports';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [revomeDefaultImports, deprecateDrawer, deprecateLayout, deprecatePreviewMenu];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
