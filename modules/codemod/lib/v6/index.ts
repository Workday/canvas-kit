import {Transform} from 'jscodeshift';

// deprecate CookieBanner
import deprecateCookieBanner from './deprecateCookieBanner';
// deprecate header imports
import deprecateHeader from './deprecateHeader';
// deprecate PageHeader
import deprecatePageHeader from './deprecatePageHeader';
// move and rename SearchBar
import moveAndRenameSearchBar from './moveAndRenameSearchBar';
// rename CanvasDepthValue
import renameCanvasDepthValue from './renameCanvasDepthValue';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    deprecatePageHeader,
    deprecateCookieBanner,
    moveAndRenameSearchBar,
    // needs to run after `moveAndRenameSearchBar`
    deprecateHeader,
    renameCanvasDepthValue,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
