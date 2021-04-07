import slashImports from './slashImports';
import removeDefaultImports from './removeDefaultImports';
import removeButtonEnums from './removeButtonEnums';
import renameButtonRefs from './renameButtonRefs';

import {API, FileInfo, Options} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API, options: Options) {
  // These will run in order. If your transform depends on others, place yours after dependent
  // transforms
  const fixes = [slashImports, removeDefaultImports, removeButtonEnums, renameButtonRefs];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options), file.source);
}
