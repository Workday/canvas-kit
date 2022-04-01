import {Transform} from 'jscodeshift';
import {renameImports} from './utils';

const headerRenameMap = {
  DubLogoTitle: 'DeprecatedDubLogoTitle',
  GlobalHeader: 'DeprecatedGlobalHeader',
  Header: 'DeprecatedHeader',
  HeaderHeight: 'DeprecatedHeaderHeight',
  HeaderTheme: 'DeprecatedHeaderTheme',
  HeaderVariant: 'DeprecatedHeaderVariant',
  ThemeAttributes: 'DeprecatedHeaderThemeAttributes',
  Themes: 'DeprecatedHeaderThemes',
  WorkdayLogoTitle: 'DeprecatedWorkdayLogoTitle',
  themes: 'deprecatedHeaderThemes',
};

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  return renameImports(
    api,
    root,
    '@workday/canvas-kit-labs-react/header',
    headerRenameMap
  ).toSource();
};

export default transform;
