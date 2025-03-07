/**
 * Function that converts a `px` value (number) to `rem` (string). It will also convert pixel strings to rem strings.
 * @example
 * ```ts
 * margin: px2rem(2);
 * // returns '0.125rem'
 * ```
 */
export function px2rem(px: number | string | undefined, base = 16): string {
  if (typeof px === 'number') {
    return `${px / base}rem`;
  } else if (typeof px === 'string') {
    const value = parseFloat(px);
    return `${value / base}rem`;
  } else {
    return '';
  }
}
