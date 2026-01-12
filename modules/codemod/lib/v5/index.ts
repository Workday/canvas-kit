import {API, FileInfo, Options} from 'jscodeshift';

// card codemods
import compoundCard from './compoundCard';
// type hierarchy codemods
import mapTypeTokensToNewHierarchy from './mapTypeTokensToNewHierarchy';
// input provider
import moveInputProvider from './moveInputProvider';
import recategorizeButtons from './recategorizeButtons';
// button codemods
import removeButtonEnums from './removeButtonEnums';
import removeDefaultImports from './removeDefaultImports';
import renameButtonRefs from './renameButtonRefs';
// core and labs/core codemods
import renameCoreImports from './renameCoreImports';
// input codemods
import renameInputRefs from './renameInputRefs';
// preview/tokens codemods
import renamePreviewTokenImports from './renamePreviewTokenImports';
// spacing codemods
import renameSpacing from './renameSpacing';
import slashImports from './slashImports';

export default function transformer(file: FileInfo, api: API, options: Options) {
  // These will run in order. If your transform depends on others, place yours after dependent
  // transforms
  const fixes = [
    slashImports,
    removeDefaultImports,
    removeButtonEnums,
    renameButtonRefs,
    renameSpacing,
    renameCoreImports,
    recategorizeButtons,
    compoundCard,
    moveInputProvider,
    renameInputRefs,
    mapTypeTokensToNewHierarchy,
    renamePreviewTokenImports,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options), file.source);
}
