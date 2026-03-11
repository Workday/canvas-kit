import {system} from '@workday/canvas-tokens-web';

import {calc} from './calc';

/**
 * Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with
 * `{padding: 'var(--foo)'}`. It also works on variables in the middle of the property. Takes any
 * string and returns a string with CSS variables wrapped if necessary.
 *
 * ```ts
 * maybeWrapValue('1rem'); // 1rem
 * maybeWrapValue('--foo'); // var(--foo)
 * maybeWrapValue('var(--foo)'); // var(--foo)
 * maybeWrapValue('calc(--foo)'); // calc(var(--foo))
 * ```
 */
export function maybeWrapValue(input: string, fallback: string): string {
  // matches an string starting with `--` that isn't already wrapped in a `var()`. It tries to match
  // any character that isn't a valid separator in CSS
  return input.replace(
    /([a-z]*[ (]*)(--[^\s;,'})]+)/gi,
    (match: string, prefix: string, variable: string) => {
      if (prefix === 'var(') {
        return match;
      }
      return `${prefix}var(${variable}, ${fallback.startsWith('--') ? `${prefix}var(${fallback})` : fallback})`;
    }
  );
}

/**
 * Function that darkens the value of a CSS variable or value.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'color-mix(in srgb, var(--color, --fallback), var(--mixinColor) var(--mixinValue)'
 *   backgroundColor: 'color-mix(in srgb, var(--color, --fallback), var(--mixinColor) var(--mixinValue)'
 * }
 * ```
 *
 * @param color
 * The value being darkened.
 *
 * @param fallback
 * This is the color that will be used if `color` is not defined.
 *
 * @param mixinColor
 * The mixinColor is the color that will be mixed in with `color`.
 *
 * @param mixinValue
 * The mixinValue is the percent of the `mixinColor` that will be mixed in with `color`.
 *
 */
const darken = (color: string, fallback: string, mixinColor: string, mixinValue: string) => {
  return `color-mix(in srgb, ${maybeWrapValue(color, fallback)} , ${maybeWrapValue(mixinColor, 'black')} ${calc.multiply(maybeWrapValue(mixinValue, '0'), '100%')})`;
};

/**
 * The `colorSpace.hover()` function is used in `hover` interactive states. It will return [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) for interactive states
 * and takes three parameters: `color`, `fallback` and `colorType`.
 * ```tsx
 * '&:hover': {
 *  backgroundColor: colorSpace.hover(color, fallback, colorType)
 * }
 * ```
 * - `color`: Base color value.
 * - `fallback`: Fallback color value if the base color is not defined or invalid.
 * - `colorType`: A string that will determine where the mixin color and the mixin percentage comes from (i.e. `system.color.accent....` or `system.color.surface....`).
 *
 * @param color
 * The value being darkened.
 *
 * @param fallback
 * This is the color that will be used if `color` is not defined.
 *
 * @param colorType
 * A string that will determine where the mixin color and the mixin percentage comes from within tokens.
 *
 */
const hover = (color: string, fallback: string, colorType: 'accent' | 'surface') => {
  return darken(
    color,
    fallback,
    system.color[colorType].overlay.mixin,
    system.opacity[colorType].hover
  );
};

/**
 * The `colorSpace.pressed()` function is used in `active` or `pressed` interactive states. It will return [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) for interactive states
 * and takes three parameters: `color`, `fallback` and `colorType`.
 * ```tsx
 * '&:active': {
 *  backgroundColor: colorSpace.pressed(color, fallback, colorType)
 * }
 * ```
 * - `color`: Base color value.
 * - `fallback`: Fallback color value if the base color is not defined or invalid.
 * - `colorType`: A string that will determine where the mixin color and the mixin percentage comes from in tokens (i.e. `system.color.accent....`, `system.color.surface....`, `system.opacity.accent....` or `system.opacity.surface....`).
 *
 * @param color
 * The value being darkened.
 *
 * @param fallback
 * This is the color that will be used if `color` is not defined.
 *
 * @param colorType
 * A string that will determine where the mixin color and the mixin percentage comes from within tokens.
 */
const pressed = (color: string, fallback: string, colorType: 'accent' | 'surface') => {
  return darken(
    color,
    fallback,
    system.color[colorType].overlay.mixin,
    system.opacity[colorType].pressed
  );
};

export const colorSpace = {
  darken,
  hover,
  pressed,
};
