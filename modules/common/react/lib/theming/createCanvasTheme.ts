import chroma from 'chroma-js';
import merge from 'lodash/merge';
import memoize from 'lodash/memoize';
import colors from '@workday/canvas-colors-web';
import {defaultCanvasTheme} from './theme';
import {
  CanvasTheme,
  PartialCanvasTheme,
  CanvasThemePalette,
  PartialCanvasThemePalette,
  ContentDirection,
} from './types';
import {CanvasColor} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '../utils';

const {gradients, primary, ...allColors} = colors;

enum ColorDirection {
  Darken,
  Brighten,
}

function shiftColor(hexColor: string, direction: ColorDirection) {
  const canvasColor = Object.keys(allColors).find(
    key => allColors[key as CanvasColor] === hexColor
  );

  const darken = direction === ColorDirection.Darken;

  if (canvasColor) {
    const colorRegex = /([a-zAz]*)(\d{3})/g;
    const match = colorRegex.exec(canvasColor);

    if (match) {
      const baseColor = match[1];
      const shadeNumber = parseInt(match[2], 10);

      const newShade = darken ? shadeNumber + 100 : shadeNumber - 100;

      if (newShade >= 100 && newShade <= 600) {
        return colors[(baseColor + newShade) as CanvasColor];
      }
    }
  }

  try {
    const newColor = darken ? chroma(hexColor).darken() : chroma(hexColor).brighten();
    return newColor.hex();
  } catch (e) {
    console.warn(`Invalid color '${hexColor}' used in theme`);
    return hexColor;
  }
}

function fillPalette(
  defaultPalette: CanvasThemePalette,
  palette?: PartialCanvasThemePalette
): CanvasThemePalette | {} {
  if (!palette) {
    return {};
  }

  const main = palette.main || defaultPalette.main;
  const dark =
    palette.dark ||
    (palette.main && shiftColor(palette.main, ColorDirection.Darken)) ||
    defaultPalette.dark;
  const darkest =
    palette.darkest ||
    (palette.main && shiftColor(dark, ColorDirection.Darken)) ||
    defaultPalette.darkest;
  const light =
    palette.light ||
    (palette.main && shiftColor(palette.main, ColorDirection.Brighten)) ||
    defaultPalette.light;
  const lightest =
    palette.lightest ||
    (palette.main && shiftColor(light, ColorDirection.Brighten)) ||
    defaultPalette.lightest;
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

  return merge({}, defaultCanvasTheme, mergeable, extraFields) as CanvasTheme;
}

export const createCanvasTheme = memoize(calculateCanvasTheme, (...args) => JSON.stringify(args));
