import {calc} from './calc';

/**
 * Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with
 * `{padding: 'var(--foo)'}`. It also works on variables in the middle of the property. Takes any
 * string and returns a string with CSS variables wrapped if necessary.
 *
 * ```ts
 * maybeWrapCSSVariables('1rem'); // 1rem
 * maybeWrapCSSVariables('--foo'); // var(--foo)
 * maybeWrapCSSVariables('var(--foo)'); // var(--foo)
 * maybeWrapCSSVariables('calc(--foo)'); // calc(var(--foo))
 * ```
 */
export function maybeWrapValue(input: string, fallback: string): string {
  // matches an string starting with `--` that isn't already wrapped in a `var()`. It tries to match
  // any character that isn't a valid separator in CSS
  return input.replace(/([a-z]*[ (]*)(--[^\s;,'})]+)/gi, (match: string, prefix: string) => {
    if (prefix === 'var(') {
      return match;
    }
    return `var(${input}, ${fallback.startsWith('--') ? `${prefix}var(${fallback})` : fallback})`;
  });
}

/**
 * Function that darkens the value of a CSS variable or value.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'color-mix(in oklch, var(--color, --fallback), var(--mixinColor) var(--mixinValue)'
 *   backgroundColor: 'color-mix(in oklch, var(--color, --fallback), var(--mixinColor) var(--mixinValue)'
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
  return `color-mix(in oklch, ${maybeWrapValue(color, fallback)} , ${maybeWrapValue(mixinColor, 'black')} ${calc.multiply(maybeWrapValue(mixinValue, '0.08'), '100%')})`;
};

export const colorSpace = {
  darken,
};
