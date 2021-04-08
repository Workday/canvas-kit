type ValueOf<T> = T[keyof T];

// Writing out `CanvasSpace` is more verbose for us, but nicer for consumers.
// Casting this type as `const` would have the same effect,
// but writing it this way removes the `readonly` in the hint,
// which adds a lot of visual noise and can be confusing for folks.

/** Type for the `space` object with keys and px values (strings) */
export type CanvasSpace = {
  zero: '0px';
  xxxs: '4px';
  xxs: '8px';
  xs: '12px';
  s: '16px';
  m: '24px';
  l: '32px';
  xl: '40px';
  xxl: '64px';
  xxxl: '80px';
};

/** The px values for CanvasSpace (strings) */
export type CanvasSpaceValues = ValueOf<CanvasSpace>;

/** An object of space keys and px values (strings) */
export const space: CanvasSpace = {
  zero: '0px',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '64px',
  xxxl: '80px',
};

/** Type for the `spaceNumbers` object with keys and numeric px values (numbers) */
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

/** The numeric px values for CanvasSpaceNumbers (numbers) */
export type CanvasSpaceNumberValues = ValueOf<CanvasSpaceNumbers>;

/**
 * An object of space keys and their numeric px values (numbers)
 * - These are helpful when you need a raw numeric px value.
 * - Here's an example usage to perform calculations:
 * @example
 * const buttonPaddingLeft = spaceNumbers.s + iconSize;
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
