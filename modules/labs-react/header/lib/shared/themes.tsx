import {
  colors,
  gradients,
  iconColors,
  depth,
  CSSProperties,
} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';
import {DeprecatedHeaderTheme} from './types';

/**
 * ### Deprecated Header Theme Attributes Interface
 *
 * As of Canvas Kit v6, this type interface is being soft-deprecated along with the rest of the labs/header package.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export interface DeprecatedHeaderThemeAttributes {
  color: string;
  background: string;
  depth: CSSProperties;
  systemIcon: {
    color: string;
    colorHover: string;
  };
  linkColor: string;
  linkFadeOutColor: string;
  currentLinkColor: string;
  chipColor: string;
}

/**
 * ### Deprecated Header Themes Interface
 *
 * As of Canvas Kit v6, this type interface is being soft-deprecated along with the rest of the labs/header package.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export interface DeprecatedHeaderThemes {
  [key: string]: DeprecatedHeaderThemeAttributes;
}

/**
 * ### Deprecated Header Themes
 *
 * As of Canvas Kit v6, this theme object is being soft-deprecated along with the rest of the labs/header package.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export const deprecatedHeaderThemes: DeprecatedHeaderThemes = {
  [DeprecatedHeaderTheme.White]: {
    color: colors.blackPepper400,
    background: colors.frenchVanilla100,
    depth: depth['1'],
    systemIcon: {
      color: iconColors.standard,
      colorHover: iconColors.hover,
    },
    linkColor: colors.blackPepper400,
    linkFadeOutColor: colors.licorice200,
    currentLinkColor: colors.blueberry500,
    chipColor: colors.blueberry400,
  },
  [DeprecatedHeaderTheme.Blue]: {
    color: colors.frenchVanilla100,
    background: gradients.blueberry,
    depth: depth['3'],
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.blueberry200,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
  [DeprecatedHeaderTheme.Transparent]: {
    color: colors.frenchVanilla100,
    background: 'transparent',
    depth: {boxShadow: 'none'},
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.blueberry200,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
};
