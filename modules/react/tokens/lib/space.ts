type ValueOf<T> = T[keyof T];

// Writing out `CanvasSpace` is more verbose for us, but nicer for consumers.
// Casting this type as `const` would have the same effect,
// but writing it this way removes the `readonly` in the hint,
// which adds a lot of visual noise and can be confusing for folks.

/** Type for the `space` object with keys and rem values (strings) */
export type CanvasSpace = {
  zero: '0';
  xxxs: '0.25rem';
  xxs: '0.5rem';
  xs: '0.75rem';
  s: '1rem';
  m: '1.5rem';
  l: '2rem';
  xl: '2.5rem';
  xxl: '4rem';
  xxxl: '5rem';
};

/** Type for `CanvasSpace` keys */
export type CanvasSpaceKeys = keyof CanvasSpace;

/** The rem values for CanvasSpace (strings) */
export type CanvasSpaceValues = ValueOf<CanvasSpace>;

/**
 * An object of space keys and rem values (strings)
 *
 * Below is a table to show the equivalent values from `px` to `rem`.
 *
 * | px Value  | rem Value | space token |
 * | --------- | --------- | ----------- |
 * | 0         | 0         | zero        |
 * | 4px       | 0.25rem   | xxxs        |
 * | 8px       | 0.5rem    | xxs         |
 * | 12px      | 0.75rem   | xs          |
 * | 16px      | 1rem      | s           |
 * | 24px      | 1.5rem    | m           |
 * | 32px      | 2rem      | l           |
 * | 40px      | 2.5rem    | xl          |
 * | 64px      | 4rem      | xxl         |
 * | 80px      | 5rem      | xxxl        |
 *
 * */
export const space: CanvasSpace = {
  zero: '0',
  xxxs: '0.25rem',
  xxs: '0.5rem',
  xs: '0.75rem',
  s: '1rem',
  m: '1.5rem',
  l: '2rem',
  xl: '2.5rem',
  xxl: '4rem',
  xxxl: '5rem',
};

/** Type for the `spaceNumbers` object with keys and numeric rem values (numbers) */
export type CanvasSpaceNumbers = {
  zero: 0;
  xxxs: 0.25;
  xxs: 0.5;
  xs: 0.75;
  s: 1;
  m: 1.5;
  l: 2;
  xl: 2.5;
  xxl: 4;
  xxxl: 5;
};

/** The numeric rem values for CanvasSpaceNumbers (numbers) */
export type CanvasSpaceNumberValues = ValueOf<CanvasSpaceNumbers>;

/**
 * An object of space keys and their numeric rem values (numbers)
 * - These are helpful when you need a raw numeric rem value.
 * - Here's an example usage to perform calculations:
 * @example
 * ```tsx
 * const buttonPaddingLeft = `${spaceNumbers.s + iconSize}rem`;
 * ```
 *
 * Below is a table to show the equivalent values from `px` to `rem`.
 *
 * | px Value  | rem Value | space token |
 * | --------- | --------- | ----------- |
 * | 0         | 0         | zero        |
 * | 4px       | 0.25rem   | xxxs        |
 * | 8px       | 0.5rem    | xxs         |
 * | 12px      | 0.75rem   | xs          |
 * | 16px      | 1rem      | s           |
 * | 24px      | 1.5rem    | m           |
 * | 32px      | 2rem      | l           |
 * | 40px      | 2.5rem    | xl          |
 * | 64px      | 4rem      | xxl         |
 * | 80px      | 5rem      | xxxl        |
 *
 */
export const spaceNumbers: CanvasSpaceNumbers = {
  zero: 0,
  xxxs: 0.25,
  xxs: 0.5,
  xs: 0.75,
  s: 1,
  m: 1.5,
  l: 2,
  xl: 2.5,
  xxl: 4,
  xxxl: 5,
};
