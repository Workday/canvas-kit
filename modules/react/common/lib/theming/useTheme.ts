// refactor for v5
/// <reference types="@types/node" />
import {useTheme as useEmotionTheme} from '@emotion/react';
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
 * `getTheme` function should be used to get the correct theme object
 * for `styled` and class components or functions and variables outside a component scope.
 * @param {Object=} theme - The theme object.
 *
 * If you are using a class component, you MUST pass the theme.
 * If not passed, the function will try to retrieve it from the window object.
 * As a last resort, it will return the default Canvas theme.
 *
 * The resulting theme will be merged with the default Canvas theme
 * (using memoized createCanvasTheme()) to establish any missing fields that have
 * not been defined by the consumer's theme object.
 */
//
export function getTheme(theme?: PartialEmotionCanvasTheme): EmotionCanvasTheme {
  if (theme?.canvas) {
    return getFilledTheme(theme);
  }

  const windowTheme = typeof window !== 'undefined' && (window as any)?.workday?.canvas?.theme;

  if (windowTheme) {
    return getFilledTheme({canvas: windowTheme});
  }

  return {canvas: defaultCanvasTheme};
}

/**
 * Hook function to get the correct theme object for functional components.
 * @param {Object=} theme - The theme object returned from the emotion ThemeContext
 * (through ThemeProvider). The Canvas Kit theme is namespaced within this variable under the `canvas` key.
 *
 * NOTE: If theme is not passed, the function will try to pull the theme from ThemeContext.
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
  if (!theme) {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const contextTheme = useEmotionTheme() as EmotionCanvasTheme;
      if (contextTheme?.canvas) {
        return getFilledTheme(contextTheme);
      }
    } catch (e) {
      if (process && process.env.NODE_ENV === 'development') {
        console.warn(
          'useTheme: Context not supported or invalid. Please consider to use `getTheme` function instead for `styled` or class components.'
        );
      }
    }
  }

  return getTheme(theme);
}
