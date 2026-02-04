import {maybeWrapCSSVariables} from './cs';

/**
 * Function that darkens the value of a CSS variable or value.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'oklch(from color calc(l - value) c h)'
 *   backgroundColor: 'oklch(from color calc(l - value) c h)'
 * }
 * ```
 *
 * @param color
 * The value being darkened.
 *
 * @param value
 * The value at which the color will be darkened.
 *
 * @returns 'oklch(from color calc(l - value) c h)'
 */
const darken = (color: string, value?: number, alpha?: number) => {
  return `oklch(from ${maybeWrapCSSVariables(color)} calc(l - ${value ? value : 0.07}) c h / ${alpha ? alpha : 1})`;
};

export const colorSpace = {
  darken,
};
