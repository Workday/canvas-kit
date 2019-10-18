import colors from '@workday/canvas-colors-web';
import deepmerge from 'deepmerge';
import {CanvasTheme} from './types';

/**
 * Considerations:
 * - Hex vs. Canvas colors
 * - Hover/Active and constrasting text colors need to be calculateable. Two options:
 *   1. Reverse lookup. i.e. given blueberry 400, we assume hover is 500 and active is 600. We still need to calculate colors outside our range though (i.e. Hex or if we run out of shades)
 *   2. Calculate all colors. This would likely require a change to our colors, but would use the same approach in all cases.
 * - Should consumers be able to theme grays? (e.g. pills, secondary buttons, etc.)
 * - Should components that accept a color be controlled by the theme (e.g. StatusIndicator), or is it only errors and alerts?
 * - Text colors?
 * - Background?
 */

export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    common: {
      focusOutline: colors.blueberry400,
    },
    primary: {
      light: colors.blueberry200,
      main: colors.blueberry400,
      dark: colors.blueberry500,
      darkest: colors.blueberry600,
      contrast: colors.frenchVanilla100,
    },
    error: {
      light: colors.cinnamon300,
      main: colors.cinnamon500,
      dark: colors.cinnamon600,
      darkest: '#80160E',
      contrast: colors.frenchVanilla100,
    },
    alert: {
      light: colors.cantaloupe300,
      main: colors.cantaloupe400,
      dark: colors.cantaloupe500,
      darkest: colors.cantaloupe600,
      contrast: colors.frenchVanilla100,
    },
  },
  // Typography
  // Breakpoints
  // Depth?
};

// TODO: Should we use PartialCanvasTheme here?
export function createCanvasTheme(partialTheme: Object): CanvasTheme {
  return deepmerge(defaultCanvasTheme, partialTheme);
}
