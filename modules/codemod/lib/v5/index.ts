import slashImports from './slashImports';
import removeDefaultImports from './removeDefaultImports';
import removeButtonEnums from './removeButtonEnums';
import renameButtonRefs from './renameButtonRefs';

import {API, FileInfo, Options} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API, options: Options) {
  // These will run in order. If your transform depends on others, place yours after dependent
  // transforms
  const fixes = [slashImports, removeDefaultImports, removeButtonEnums, renameButtonRefs];

  let src = file.source;
  fixes.forEach(fix => {
    if (typeof src === 'undefined') {
      return;
    }
    src = fix({...file, source: src}, api, options);
  });

  return src;
}
