import {Transform} from 'jscodeshift';

import revomeDefaultImports from './removeDefaultImports';
import promoteBreadcrumbs from './promoteBreadcrumbs';
import restructureBreadcrumbs from './restructureBreadcrumbs';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [promoteBreadcrumbs, revomeDefaultImports, restructureBreadcrumbs];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};
export default transform;
