import * as React from 'react';
import colors from '@workday/canvas-colors-web';
import deepmerge from 'deepmerge';
import {CanvasTheme} from './types';
import {ThemeContext} from '@emotion/core';
import {breakpoints, up, down, between, only} from './breakpoints';

/**
 * Considerations:
 * - Hex vs. Canvas colors
 * - Hover/Active and constrasting text colors need to be calculateable. Two options:
 *   1. Reverse lookup. i.e. given blueberry 400, we assume hover is 500 and active is 600. We still need to calculate colors outside our range though (i.e. Hex or if we run out of shades)
 *   2. Calculate all colors. This would likely require a change to our colors, but would use the same approach in all cases.
 * - Should consumers be able to theme grays? (e.g. pills, secondary buttons, etc.)
 * - Should components that accept a color be controlled by the theme (e.g. StatusIndicator), or is it only errors and alerts?
 * - Text colors?
 * - Background?
 */

export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      lightest: colors.blueberry100,
      light: colors.blueberry200,
      main: colors.blueberry400,
      dark: colors.blueberry500,
      darkest: colors.blueberry600,
      contrast: colors.frenchVanilla100,
    },
    alert: {
      lightest: colors.cantaloupe100,
      light: colors.cantaloupe300,
      main: colors.cantaloupe400,
      dark: colors.cantaloupe500,
      darkest: colors.cantaloupe600,
      contrast: colors.frenchVanilla100,
    },
    error: {
      lightest: colors.cinnamon100,
      light: colors.cinnamon300,
      main: colors.cinnamon500,
      dark: colors.cinnamon600,
      darkest: '#80160E',
      contrast: colors.frenchVanilla100,
    },
    success: {
      lightest: colors.greenApple100,
      light: colors.greenApple300,
      main: colors.greenApple600,
      dark: '',
      darkest: '',
      contrast: colors.frenchVanilla100,
    },
    neutral: {
      lightest: colors.soap200,
      light: colors.soap300,
      main: colors.soap600,
      dark: colors.licorice300,
      darkest: colors.licorice400,
      contrast: colors.frenchVanilla100,
    },
    common: {
      focusOutline: colors.blueberry400,
    },
  },
  breakpoints: {
    values: breakpoints,
    up,
    down,
    between,
    only,
  },
};

/**
 * Hook function to get the correct theme object.
 * @param {Object=} theme - The theme object returned from the emotion ThemeContext
 * (through ThemeProvider).
 * NOTE: If you are using a class component, you MUST pass the theme.
 * If not passed, the function will try to pull the theme from ThemeContext.
 * If that does not work, it will try to retrieve it from the window object.
 * As a last resort, it will return the default Canvas theme.
 *
 * Providing the default theme here is currently a work around for when no
 * ThemeProvider or context exists.
 * Tracked on https://github.com/emotion-js/emotion/issues/1193.
 */
export function useTheme(theme?: Object): CanvasTheme {
  if (theme && Object.entries(theme).length !== 0) {
    return theme as CanvasTheme;
  }

  try {
    const context = React.useContext(ThemeContext);
    if (context) {
      return context as CanvasTheme;
    }
  } catch (e) {
    // Context not supported or invalid (probably called from within a class component)
  }

  if (window.wdCanvas && window.wdCanvas.theme) {
    return window.wdCanvas.theme;
  }

  return defaultCanvasTheme;
}

// TODO: Should we use PartialCanvasTheme here?
export function createCanvasTheme(partialTheme: Object): CanvasTheme {
  return deepmerge(defaultCanvasTheme, partialTheme);
}
