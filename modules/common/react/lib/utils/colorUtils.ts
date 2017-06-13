import {colors} from '@workday/canvas-kit-react-core';

// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
export const expandHex = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expandHex(hex));
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 *
 * Chooses luminance color depending on the rgb value of the background color.
 * Eventually should be replaced by by Chroma 2.0
 */
export const pickForegroundColor = (
  background: string,
  darkColor: string = colors.blackPepper600,
  lightColor: string = colors.frenchVanilla100
) => {
  const rgbColor = hexToRgb(background);
  if (rgbColor) {
    const r: number = rgbColor.r;
    const g: number = rgbColor.g;
    const b: number = rgbColor.b;
    /** Based on : https://www.w3.org/TR/WCAG20-TECHS/G18.html */
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
  } else {
    return;
  }
};
