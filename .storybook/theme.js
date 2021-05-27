import {themes, create} from '@storybook/theming';
import {commonColors, typeColors, fontFamily} from '../modules/core/react';
import {version} from '../lerna.json';

export default create({
  ...themes.light, // Overrides a user's preferred color scheme (e.g. Dark Mode), will need to flesh this out later when CK is compatible with a dark mode
  brandTitle: `Canvas Kit v${version}`,
  mainTextColor: typeColors.body,
  mainTextFace: fontFamily,
  mainBackground: commonColors.backgroundAlt,
});
