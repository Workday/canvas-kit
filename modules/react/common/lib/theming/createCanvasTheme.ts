import chroma from 'chroma-js';
import colors from '@workday/canvas-colors-web';
import {defaultCanvasTheme} from './theme';
import {
  CanvasTheme,
  PartialCanvasTheme,
  CanvasThemePalette,
  PartialCanvasThemePalette,
  ContentDirection,
} from './types';
import {CanvasColor} from '@workday/canvas-kit-react/tokens';
import {pickForegroundColor} from '../utils';

// Should these be exported?
import {deepMerge} from '../utils/deepMerge';
import {memoize} from '../utils/memoize';

export const shiftColor = memoize(
  (hexColor: string, amount = 100) => {
    const canvasColor = Object.keys(colors).find(color => colors[color] === hexColor);

    if (canvasColor) {
      const colorRegex = /([a-zAz]*)(\d{3})/g;
      const match = colorRegex.exec(canvasColor);

      if (match) {
        const baseColor = match[1];
        const shadeNumber = parseInt(match[2], 10);

        const newShade = shadeNumber + amount;

        if (newShade >= 100 && newShade <= 600) {
          return colors[(baseColor + newShade) as CanvasColor];
        }
      }
    }

    try {
      const newColor =
        amount > 0
          ? chroma(hexColor).darken(amount / 100)
          : chroma(hexColor).brighten(-amount / 100);
      return newColor.hex();
    } catch (e) {
      console.warn(`Invalid color '${hexColor}' used in theme`);
      return hexColor;
    }
  },
  (color, value) => `${color}.${value}`
);

function fillPalette(
  defaultPalette: CanvasThemePalette,
  palette?: PartialCanvasThemePalette
): CanvasThemePalette | {} {
  if (!palette) {
    return {};
  }

  const main = palette.main || defaultPalette.main;
  const dark =
    palette.dark || (palette.main && shiftColor(palette.main, 100)) || defaultPalette.dark;
  const darkest =
    palette.darkest || (palette.main && shiftColor(palette.main, 200)) || defaultPalette.darkest;
  const light =
    palette.light || (palette.main && shiftColor(palette.main, -100)) || defaultPalette.light;
  const lightest =
    palette.lightest || (palette.main && shiftColor(palette.main, -200)) || defaultPalette.lightest;
  const contrast = palette.contrast || pickForegroundColor(main) || defaultPalette.contrast;

  return {
    lightest,
    light,
    main,
    dark,
    darkest,
    contrast,
  };
}

function calculateCanvasTheme(partialTheme: PartialCanvasTheme): CanvasTheme {
  const {palette = {}, breakpoints = {}, direction, ...extraFields} = partialTheme;
  const {primary, alert, error, success, neutral, common = {}} = palette!;

  const mergeable: PartialCanvasTheme = {
    palette: {
      common,
      primary: fillPalette(defaultCanvasTheme.palette.primary, primary),
      alert: fillPalette(defaultCanvasTheme.palette.alert, alert),
      error: fillPalette(defaultCanvasTheme.palette.error, error),
      success: fillPalette(defaultCanvasTheme.palette.success, success),
      neutral: fillPalette(defaultCanvasTheme.palette.neutral, neutral),
    },
    breakpoints,
    direction: direction === ContentDirection.RTL ? direction : ContentDirection.LTR,
  };

  return deepMerge(deepMerge({}, defaultCanvasTheme), {...mergeable, ...extraFields});
}

/**
 * Creates a full {@link CanvasTheme} from any partial theme by deeply merging with the
 * `defaultCanvasTheme` object. The function is memoized, but it is best to run this function
 * only once and save the result.
 */
export const createCanvasTheme = memoize(calculateCanvasTheme, (...args) => JSON.stringify(args));
