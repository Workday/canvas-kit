import {Transform} from 'jscodeshift';

import deprecateDrawer from './deprecateDrawer';
import deprecateLayout from './deprecateLayout';
import deprecatePreviewMenu from './deprecatePreviewMenu';
import revomeDefaultImports from './removeDefaultImports';
import promoteComponentsToTesting from './promoteComponentsToTesting';
import promoteBreadcrumbs from './promoteBreadcrumbs';
import restructureBreadcrumbs from './restructureBreadcrumbs';
import refactorActionBarOverflowButton from './refactorActionBarOverflowButton';
import renameLoadingAnimation from './renameLoadingAnimation';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    promoteBreadcrumbs,
    restructureBreadcrumbs,
    revomeDefaultImports,
    deprecateDrawer,
    deprecateLayout,
    deprecatePreviewMenu,
    promoteComponentsToTesting,
    refactorActionBarOverflowButton,
    renameLoadingAnimation,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
