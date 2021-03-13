import {colors} from '@workday/canvas-kit-react/core';
import chroma from 'chroma-js';

// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
export const expandHex = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });
};

// Used to as a fallback to determine foreground color
const colorPriority = [
  colors.frenchVanilla100,
  colors.blackPepper300,
  colors.blackPepper400,
  colors.blackPepper500,
  colors.blackPepper600,
];

/**
 *
 * Chooses foreground color with accesible contrast against background. If contrast ratio
 * is greater than 4.5:1, chooses provided light or dark color (favoring light color). If neither
 * have a high enough contrast ratio, picks the first color of the following that meets 4.5:1 or higher:
 * [frenchVanilla100, blackPepper300, blackPepper400, blackPepper500, blackPepper600]
 * (https://www.w3.org/TR/WCAG20-TECHS/G18.html)
 */
export const pickForegroundColor = (
  background: string,
  darkColor?: string,
  lightColor?: string
) => {
  if (chroma.valid(background)) {
    if (lightColor && chroma.contrast(background, lightColor) >= 4.5) {
      return lightColor;
    } else if (darkColor && chroma.contrast(background, darkColor) >= 4.5) {
      return darkColor;
    } else {
      for (let i = 0; i < colorPriority.length; i++) {
        const color = colorPriority[i];

        if (chroma.contrast(background, color) >= 4.5) {
          return color;
        }
      }
    }
  }
  return;
};
