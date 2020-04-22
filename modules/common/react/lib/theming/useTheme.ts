import * as React from 'react';
import get from 'lodash/get';
import {ThemeContext} from '@emotion/core';
import {CanvasTheme, defaultCanvasTheme, createCanvasTheme} from './index';

/**
 * Hook function to get the correct theme object.
 * @param {Object=} theme - The theme object returned from the emotion ThemeContext
 * (through ThemeProvider).
 * NOTE: If you are using a class component, you MUST pass the theme.
 * If not passed, the function will try to pull the theme from ThemeContext.
 * If that does not work, it will try to retrieve it from the window object.
 * As a last resort, it will return the default Canvas theme.
 *
 * The resulting theme will be merged with the default Canvas theme
 * (using memoized createCanvasTheme()) to establish any missing fields that have
 * not been defined by the consumer's theme object.
 *
 * Providing the default theme here is currently a work around for when no
 * ThemeProvider or context exists.
 * Tracked on https://github.com/emotion-js/emotion/issues/1193.
 */
export function useTheme(theme?: Object): CanvasTheme {
  if (theme && Object.keys(theme).length !== 0) {
    return createCanvasTheme(theme);
  }

  try {
    const context = React.useContext(ThemeContext);
    if (context && Object.keys(context).length !== 0) {
      return createCanvasTheme(context);
    }
  } catch (e) {
    // Context not supported or invalid (probably called from within a class component)
  }

  const windowTheme = get(window, 'window.workday.canvas.theme');
  if (windowTheme) {
    return createCanvasTheme(windowTheme);
  }

  return defaultCanvasTheme;
}
