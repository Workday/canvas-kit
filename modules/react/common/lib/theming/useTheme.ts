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
 * Function to get the correct theme object for `styled` and class components
 * or to be used outside component.
 * @param {Object=} theme - The theme object with the Canvas Kit theme.
 * It should be namespaced within this variable under the `canvas` key.
 * Value of `canvas` property is any partial or full theme object to overwtite default theme.
 *
 * @returns An object containing updated or default Canvas Kit theme under `canvas` key.
 *
 * The passed partial theme object will be merged with the default Canvas theme
 * (using memoized createCanvasTheme()) to establish any missing fields that have
 * not been defined by the consumer's theme object.
 *
 * If theme is not passed, the function will try to retrieve it from the window object.
 * If window theme is not found, it will return the default Canvas theme.
 *
 * @example
 * import {getTheme} from '@workday/canvas-kit-react/common';
 *
 * const theme = getTheme();
 * const {up, down} = theme.canvas.breakpoints;
 * const small = down('m'); // Returns '@media (max-width: 768px)'
 * const medium = up('m'); // Returns '@media (min-width: 768px)'
 *
 * const styles = {
 *  [small]: {
 *    margin: space.m
 *  },
 *  [medium]: {
 *    margin: space.l
 *  }
 * }
 */
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
 * @param {Object=} theme - The theme object with the Canvas Kit theme.
 * It should be namespaced within this variable under the `canvas` key.
 * Value of `canvas` property is any partial or full theme object to overwtite default theme.
 *
 * @returns An object containing updated or default Canvas Kit theme under `canvas` key.
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
 *
 * @example
 * export const ErrorMessage = () => {
 *  const theme = useTheme();
 *  return (
 *    <Subtext size="large" color={theme.canvas.palette.error.main}>
 *  );
 * }
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
          'useTheme: Context not supported or invalid. Please consider using `getTheme` function instead for `styled` or class components.'
        );
      }
    }
  }

  return getTheme(theme);
}
