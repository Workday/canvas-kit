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
 * This is based on the default browser font size which is `16px`.
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

/**
 * Example using `space` with calc instead of deprecated `spaceNumbers`.
 *
 * ```tsx
 *  // With deprecated `spaceNumbers`
 * {
 *  paddingLeft: spaceNumbers.xl + 2 // 42px
 * }
 * ```
 *
 * ```tsx
 * // With `rem` based `space` tokens
 * {
 *  padding: `calc(${space.xl} + 2px)` // 42px
 * }
 * ```
 *
 * @deprecated ⚠️ `spaceNumbers` has been deprecated in a future major version. Please use our `rem` based [`space`](https://workday.github.io/canvas-kit/?path=/docs/tokens--space) tokens. In the case where you need to calculate a value, use [CSS calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 */
export type CanvasSpaceNumbers = {
  zero: 0;
  xxxs: 4;
  xxs: 8;
  xs: 12;
  s: 16;
  m: 24;
  l: 32;
  xl: 40;
  xxl: 64;
  xxxl: 80;
};

/** The numeric rem values for CanvasSpaceNumbers (numbers)
 * @deprecated ⚠️ `CanvasSpaceNumberValues` has been deprecated in a future major version. Please use our `rem` based [`space`](https://workday.github.io/canvas-kit/?path=/docs/tokens--space) tokens. In the case where you need to calculate a value, use [CSS calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 */
export type CanvasSpaceNumberValues = ValueOf<CanvasSpaceNumbers>;

/**
 * Example using `space` with calc instead of deprecated `spaceNumbers`.
 *
 * ```tsx
 *  // With deprecated `spaceNumbers`
 * {
 *  paddingLeft: spaceNumbers.xl + 2 // 42px
 * }
 * ```
 *
 * ```tsx
 * // With `rem` based `space` tokens
 * {
 *  padding: `calc(${space.xl} + 2px)` // 42px
 * }
 * ```
 *
 * @deprecated ⚠️ `spaceNumbers` has been deprecated in a future major version. Please use our `rem` based [`space`](https://workday.github.io/canvas-kit/?path=/docs/tokens--space) tokens. In the case where you need to calculate a value, use [CSS calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 */
export const spaceNumbers: CanvasSpaceNumbers = {
  zero: 0,
  xxxs: 4,
  xxs: 8,
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 64,
  xxxl: 80,
};
