import {Transform} from 'jscodeshift';

import softDeprecateDrawer from './softDeprecateDrawer';
import softDeprecateLayout from './softDeprecateLayout';
import softDeprecatePreviewMenu from './softDeprecatePreviewMenu';
import revomeDefaultImports from './removeDefaultImports';
import promoteComponentStatesTable from './promoteComponentStatesTable';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    revomeDefaultImports,
    softDeprecateDrawer,
    softDeprecateLayout,
    softDeprecatePreviewMenu,
    promoteComponentStatesTable,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
