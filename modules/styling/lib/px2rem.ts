/**
 * Function that converts a `px` value (number) to `rem` (string).
 * @example
 * ```ts
 * margin: px2rem(2);
 * // returns '0.125rem'
 * ```
 */
export function px2rem(px: number, base = 16) {
  return `${px / base}rem`;
}
