import * as React from 'react';
import get from 'lodash/get';
import {ThemeContext} from '@emotion/core';
import {
  defaultCanvasTheme,
  createCanvasTheme,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
} from './index';

const getFilledTheme = (theme: PartialEmotionCanvasTheme) => ({
  ...theme,
  canvas: createCanvasTheme(theme.canvas!),
});

/**
 * Hook function to get the correct theme object.
 * @param {Object=} theme - The theme object returned from the emotion ThemeContext
 * (through ThemeProvider). The Canvas Kit theme is namespaced within this variable under the `canvas` key.
 *
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
export function useTheme(theme?: PartialEmotionCanvasTheme): EmotionCanvasTheme {
  if (theme && theme.canvas) {
    return getFilledTheme(theme);
  }

  try {
    const contextTheme = React.useContext(ThemeContext) as EmotionCanvasTheme;
    if (contextTheme && contextTheme.canvas) {
      return getFilledTheme(contextTheme);
    }
  } catch (e) {
    // Context not supported or invalid (probably called from within a class component)
  }

  const windowTheme = get(window, 'window.workday.canvas.theme');
  if (windowTheme) {
    return getFilledTheme({canvas: windowTheme});
  }

  return {canvas: defaultCanvasTheme};
}
