// refactor for v5
/// <reference types="@types/node" />
import {useTheme as useEmotionTheme} from '@emotion/react';

import {cssVar} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

import {
  CanvasTheme,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
  defaultCanvasTheme,
} from './index';

/**
 * Attempt to match chroma-js's darken/brighten behavior using OKLCH.
 * Chroma's darken(1) reduces LAB lightness by ~18 units (out of 100).
 * In OKLCH, lightness is 0-1, so we scale: value/100 * 0.18 = value * 0.0018
 * @deprecated ⚠️ `shiftColor` is deprecated and will be removed in a future major version. While we work on an algorithm for color shifting, you can use [`oklch from`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) to generate a palette.
 */
const shiftColor = (color: string, value: number) => {
  const shift = Math.abs(value) * 0.0018;
  return `oklch(from ${color} calc(l ${value > 0 ? '+' : '-'} ${shift}) c h)`;
};

const generatePalette = (
  key: Exclude<keyof CanvasTheme['palette'], 'common'>,
  palette?: CanvasTheme['palette']
) => {
  const colorPalette = palette?.[key];
  if (colorPalette) {
    const defaultPalette = defaultCanvasTheme.palette[key];
    const result: any = {};

    // Handle new numerical scale keys (25, 50, 100...975)
    const numericalKeys = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975] as const;
    numericalKeys.forEach(numKey => {
      const numKeyStr = numKey.toString() as keyof typeof colorPalette;
      if ((colorPalette as any)[numKeyStr] !== undefined) {
        result[numKeyStr] = (colorPalette as any)[numKeyStr];
      } else if ((defaultPalette as any)[numKeyStr] !== undefined) {
        result[numKeyStr] = (defaultPalette as any)[numKeyStr];
      }
    });

    // Handle legacy keys for backward compatibility
    // Map legacy keys to numerical equivalents if provided, otherwise use legacy values or generate from main
    result.lightest =
      colorPalette.lightest ||
      colorPalette[25] ||
      (colorPalette.main && shiftColor(colorPalette.main, 400)) ||
      defaultPalette.lightest;
    result.lighter =
      colorPalette.lighter ||
      colorPalette[50] ||
      (colorPalette.main && shiftColor(colorPalette.main, 150)) ||
      defaultPalette.lighter;
    result.light =
      colorPalette.light ||
      colorPalette[200] ||
      (colorPalette.main && shiftColor(colorPalette.main, 100)) ||
      defaultPalette.light;
    result.main = colorPalette.main || colorPalette[600] || defaultPalette.main;
    result.dark =
      colorPalette.dark ||
      colorPalette[700] ||
      (colorPalette.main && shiftColor(colorPalette.main, -100)) ||
      defaultPalette.dark;
    result.darkest =
      colorPalette.darkest ||
      colorPalette[800] ||
      (colorPalette.main && shiftColor(colorPalette.main, -200)) ||
      defaultPalette.darkest;
    result.contrast = colorPalette.contrast || cssVar(base.neutral0);

    return result;
  }
  return defaultCanvasTheme.palette[key];
};

const generateTheme = (theme?: PartialEmotionCanvasTheme): EmotionCanvasTheme['canvas'] => {
  return {
    palette: {
      primary: generatePalette('primary', theme?.canvas?.palette as CanvasTheme['palette']),
      alert: generatePalette('alert', theme?.canvas?.palette as CanvasTheme['palette']),
      error: generatePalette('error', theme?.canvas?.palette as CanvasTheme['palette']),
      success: generatePalette('success', theme?.canvas?.palette as CanvasTheme['palette']),
      neutral: generatePalette('neutral', theme?.canvas?.palette as CanvasTheme['palette']),
      common: {...defaultCanvasTheme.palette.common, ...theme?.canvas?.palette?.common},
    },
    breakpoints: defaultCanvasTheme.breakpoints,
    direction: theme?.canvas?.direction || defaultCanvasTheme.direction,
  };
};

const getFilledTheme = (theme: PartialEmotionCanvasTheme): EmotionCanvasTheme => {
  return {
    ...defaultCanvasTheme,
    ...theme,
    canvas: generateTheme(theme),
  };
};

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
 * @deprecated ⚠️ `getTheme` is deprecated and will be removed in a future major version. Please use our [CSS tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-brand-tokens--docs) to theme components.
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
 * @deprecated ⚠️ `useTheme` is deprecated and will be removed in a future major version. Please use our [CSS tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-brand-tokens--docs) to theme components.
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
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'useTheme: Context not supported or invalid. Please consider using `getTheme` function instead for `styled` or class components.'
        );
      }
    }
  }

  return getTheme(theme);
}
