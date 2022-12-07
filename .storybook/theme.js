import {themes, create} from '@storybook/theming';
import {commonColors, typeColors, fontFamily} from '../modules/react/tokens';
import {version} from '../lerna.json';
import canvasKitLogo from './workday-canvas-kit-logo-sb.png';

export default create({
  ...themes.light, // Overrides a user's preferred color scheme (e.g. Dark Mode), will need to flesh this out later when CK is compatible with a dark mode
  mainTextColor: typeColors.body,
  mainTextFace: fontFamily,
  mainBackground: commonColors.backgroundAlt,
  // brandImage: canvasKitLogo,
  brandTitle: `Canvas Kit v${version}`,
});
