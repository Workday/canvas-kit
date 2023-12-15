import {cssVar} from './cs';

/**
 * Function to conditionally wrap CSS vars if they are not already wrapped with `var()`.
 * Only intended for internal use in these functions.
 */
function wrapCSSVar(value: any, fallback?: string) {
  if (typeof value === 'string' && value.startsWith('--')) {
    return cssVar(value, fallback);
  } else {
    return value;
  }
}

/**
 * Function that returns a CSS `calc()` addition string.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'calc(var(--cnvs-sys-space-x1) + 0.125rem)'
 *   padding: calc.add("--cnvs-sys-space-x1", '0.125rem'),
 * }
 * ```
 *
 * @param augend
 * The base value. E.g. '1rem' or '--cnvs-sys-space-x4'
 *
 * @param addend
 * The value being added to the base. E.g. '1rem' or '--cnvs-sys-space-x4'
 *
 * @returns 'calc(augend + addend)'
 */
function add(augend: string, addend: string) {
  return `calc(${wrapCSSVar(augend)} + ${wrapCSSVar(addend)})`;
}

/**
 * Function that returns a CSS `calc()` subtraction string.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'calc(var(--cnvs-sys-space-x1) - 0.125rem)'
 *   padding: calc.subtract("--cnvs-sys-space-x1", '0.125rem'),
 * }
 * ```
 *
 * @param minuend
 * The base value. E.g. '1rem' or '--cnvs-sys-space-x4'
 *
 * @param subtrahend
 * The value being subtracted from the base. E.g. '1rem' or '--cnvs-sys-space-x4'
 *
 * @returns 'calc(minuend - subtrahend)'
 */
function subtract(minuend: string, subtrahend: string) {
  return `calc(${wrapCSSVar(minuend)} - ${wrapCSSVar(subtrahend)})`;
}

/**
 * Function that returns a CSS `calc()` multiplication string.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'calc(var(--cnvs-sys-space-x1) * 3)'
 *   padding: calc.multiply("--cnvs-sys-space-x1", 3),
 * }
 * ```
 *
 * @param multiplicand
 * The base value being multiplied. E.g. '1rem' or '--cnvs-sys-space-x1'
 *
 * @param multiplier
 * The value being multiplied to the base. E.g. 2 or '--cnvs-sys-space-x1'
 *
 * @returns 'calc(multiplicand * multiplier)'
 */
function multiply(multiplicand: string, multiplier: string | number = 1) {
  const formattedMultiplier = typeof multiplier === 'string' ? wrapCSSVar(multiplier) : multiplier;

  return `calc(${wrapCSSVar(multiplicand)} * ${formattedMultiplier})`;
}

/**
 * Function that returns a CSS `calc()` division string
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'calc(var(--cnvs-sys-space-x1) / 2)'
 *   padding: calc.divide("--cnvs-sys-space-x1", 2),
 * }
 * ```
 *
 * @param dividend
 * The base value being divided.  E.g. '1rem' or '--cnvs-sys-space-x1'
 *
 * @param divisor
 * The divisor of the base value. E.g. 2 or '--cnvs-sys-space-x1'
 *
 * @returns 'calc(dividend / divisor)'
 */
function divide(dividend: string, divisor: string | number = 1) {
  const formattedDivisor = typeof divisor === 'string' ? wrapCSSVar(divisor) : divisor;

  return `calc(${wrapCSSVar(dividend)} / ${formattedDivisor})`;
}

/**
 * Function that negates the value of a CSS variable or value.
 * CSS vars will be automatically wrapped in `var()` if provided.
 *
 * ```ts
 * const styles = {
 *   // returns 'calc(var(--cnvs-sys-space-x4) * -1)'
 *   padding: negate('--cnvs-sys-space-x4');
 * }
 * ```
 *
 * @param value
 * The value being negated. E.g. '--cnvs-sys-space-x1' or '1rem'
 *
 * @param fallback
 * An optional fallback value for a CSS variable. E.g. '1rem'
 *
 * @returns 'calc(var(value) * -1)'
 */
function negate(value: string, fallback?: string) {
  const multiplicand = wrapCSSVar(value, fallback);

  return multiply(multiplicand, -1);
}

export const calc = {
  add,
  divide,
  multiply,
  negate,
  subtract,
};
