import {CanvasColor, colors} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';

/**
 * The function takes in a color string or an enum value of CanvasColor and returns its hex value color.
 * @param value a string or an enum value of CanvasColor
 * @returns the hex value color
 */
export function getColor(value?: CanvasColor | string) {
  if (value! in colors) {
    return colors[value as keyof typeof colors];
  }
  return value;
}

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
 * Chooses foreground color with accessible contrast against background. If contrast ratio
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
  const [bg, dark, light] = [getColor(background), getColor(darkColor), getColor(lightColor)];
  if (bg && chroma.valid(bg)) {
    if (light && chroma.contrast(bg, light) >= 4.5) {
      return light;
    } else if (dark && chroma.contrast(bg, dark) >= 4.5) {
      return dark;
    } else {
      for (let i = 0; i < colorPriority.length; i++) {
        const color = colorPriority[i];

        if (chroma.contrast(bg, color) >= 4.5) {
          return color;
        }
      }
    }
  }
  return;
};
