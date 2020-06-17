import {colors} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';

// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
export const expandHex = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });
};

/**
 *
 * Chooses foreground color with accesible contrast against background. If contrast ratio
 * is greater than 4.5:1, chooses light color. Otherwise, chooses light or dark based on
 * which highest contrast against background.
 * (https://www.w3.org/TR/WCAG20-TECHS/G18.html)
 */
export const pickForegroundColor = (
  background: string,
  darkColor: string = colors.blackPepper600,
  lightColor: string = colors.frenchVanilla100
) => {
  if (chroma.valid(background)) {
    return chroma.contrast(background, lightColor) >= 4.5
      ? lightColor
      : chroma.contrast(background, darkColor) >= chroma.contrast(background, lightColor)
      ? darkColor
      : lightColor;
  } else {
    return;
  }
};
