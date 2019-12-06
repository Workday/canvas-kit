import chroma from 'chroma-js';
import merge from 'lodash/merge';
import colors from '@workday/canvas-colors-web';
import {defaultCanvasTheme} from './theme';
import {
  CanvasTheme,
  PartialCanvasTheme,
  CanvasThemePalette,
  PartialCanvasThemePalette,
} from './types';
import {CanvasColor} from '@workday/canvas-kit-react-core';

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

function fillPalette(palette?: PartialCanvasThemePalette): CanvasThemePalette | {} {
  if (!palette) {
    return {};
  }
  const shades = {...palette};

  if (!shades.main) {
    console.warn(
      'The color provided to fillPalette(palette) is invalid. The palette object needs to have a `main` property'
    );
    return {};
  }

  const dark = shades.dark || shiftColor(shades.main, ColorDirection.Darken);
  const darkest = shades.darkest || shiftColor(dark, ColorDirection.Darken);
  const light = shades.light || shiftColor(shades.main, ColorDirection.Brighten);
  const lightest = shades.lightest || shiftColor(light, ColorDirection.Brighten);

  return {
    lightest,
    light,
    main: shades.main,
    dark,
    darkest,
    contrast: shades.contrast || colors.frenchVanilla100,
  };
}

export default function createCanvasTheme(partialTheme: PartialCanvasTheme): CanvasTheme {
  const {palette = {}, breakpoints = {}} = partialTheme;
  const {primary, alert, error, success, neutral, common = {}} = palette;

  const mergable: PartialCanvasTheme = {
    palette: {
      common,
      primary: fillPalette(primary),
      alert: fillPalette(alert),
      error: fillPalette(error),
      success: fillPalette(success),
      neutral: fillPalette(neutral),
    },
    breakpoints,
  };

  return merge(defaultCanvasTheme, mergable) as CanvasTheme;
}
