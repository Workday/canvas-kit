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
 * | px Value  | rem Value | space token | new token |
 * | --------- | --------- | ----------- | --------- |
 * | 0         | 0         | zero        | `system.space.zero` |
 * | 4px       | 0.25rem   | xxxs        | `system.space.x1` |
 * | 8px       | 0.5rem    | xxs         | `system.space.x2` |
 * | 12px      | 0.75rem   | xs          | `system.space.x3` |
 * | 16px      | 1rem      | s           | `system.space.x4` |
 * | 24px      | 1.5rem    | m           | `system.space.x6` |
 * | 32px      | 2rem      | l           | `system.space.x8` |
 * | 40px      | 2.5rem    | xl          | `system.space.x10` |
 * | 64px      | 4rem      | xxl         | `system.space.x16` |
 * | 80px      | 5rem      | xxxl        | `system.space.x20` |
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
 * @deprecated ⚠️ `spaceNumbers` has been deprecated in a future major version. Please use our css var based [`space`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-space--docs) tokens. In the case where you need to calculate a value, use [calc() function](https://workday.github.io/canvas-kit/?path=/docs/styling-utilities--docs#calc-functions).
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
 * @deprecated ⚠️ `CanvasSpaceNumberValues` has been deprecated in a future major version. Please use our css var based [`space`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-space--docs) tokens. In the case where you need to calculate a value, use [calc() function](https://workday.github.io/canvas-kit/?path=/docs/styling-utilities--docs#calc-functions).
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
 * @deprecated ⚠️ `spaceNumbers` has been deprecated in a future major version. Please use our css var based [`space`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-space--docs) tokens. In the case where you need to calculate a value, use [calc() function](https://workday.github.io/canvas-kit/?path=/docs/styling-utilities--docs#calc-functions).
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
