import {px2rem} from './px2rem';

/**
 *
 * Function that converts a number to a string. If the value is a number, it will convert it to a `rem` string.
 */
export function number2rem(value: number | string | undefined): string {
  if (typeof value === 'number') {
    return px2rem(value);
  }
  return value || '';
}
