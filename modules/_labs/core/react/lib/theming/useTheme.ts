import * as React from 'react';
import get from 'lodash/get';
import {ThemeContext} from '@emotion/core';
import {CanvasTheme} from './types';
import {defaultCanvasTheme} from './theme';

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
  if (theme && Object.keys(theme).length !== 0) {
    return theme as CanvasTheme;
  }

  try {
    const context = React.useContext(ThemeContext);
    if (context && Object.keys(context).length !== 0) {
      return context as CanvasTheme;
    }
  } catch (e) {
    // Context not supported or invalid (probably called from within a class component)
  }

  const windowTheme = get(window, 'window.workday.canvas.theme');
  if (windowTheme) {
    return windowTheme;
  }

  return defaultCanvasTheme;
}
