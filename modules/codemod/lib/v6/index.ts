import {API, FileInfo, Options} from 'jscodeshift';
// deprecate PageHeader
import deprecatePageHeader from './deprecatePageHeader';
// deprecate CookieBanner
import deprecateCookieBanner from './deprecateCookieBanner';
// move and rename SearchBar
import moveAndRenameSearchBar from './moveAndRenameSearchBar';
// deprecate header imports
import deprecateHeader from './deprecateHeader';

export default function transformer(file: FileInfo, api: API, options: Options) {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    deprecatePageHeader,
    deprecateCookieBanner,
    moveAndRenameSearchBar,
    // needs to run after `moveAndRenameSearchBar`
    deprecateHeader,
  ];

  return fixes.reduce((source, fix) => fix({...file, source}, api, options), file.source);
}
