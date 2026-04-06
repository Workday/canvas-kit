type ValueOf<T> = T[keyof T];

// Writing out `CanvasBorderRadius` is more verbose for us, but nicer for consumers.
// Casting this type as `const` would have the same effect,
// but writing it this way removes the `readonly` in the hint,
// which adds a lot of visual noise and can be confusing for folks.

/**
 * Type for the `borderRadius` object with keys and px values (strings and numbers)
 * @deprecated ⚠️ `CanvasBorderRadius` has been deprecated in a future major version. Please use our css var based [`borderRadius tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs) tokens.
 */
export type CanvasBorderRadius = {
  zero: '0px';
  s: '2px';
  m: '4px';
  l: '8px';
  circle: '999px';
};

/** the tokens (keys) for CanvasBorderRadius
 * @deprecated ⚠️ `CanvasBorderRadiusKeys` has been deprecated in a future major version. Please use our css var based [`borderRadius tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs) tokens.
 */
export type CanvasBorderRadiusKeys = keyof CanvasBorderRadius;

/** the values for CanvasBorderRadius (strings and numbers)
 * @deprecated ⚠️ `CanvasBorderRadiusValues` has been deprecated in a future major version. Please use our css var based [`borderRadius tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs) tokens.
 */
export type CanvasBorderRadiusValues = ValueOf<CanvasBorderRadius>;

/**
 * An object of border-radius keys and px values (strings and numbers)
 * @deprecated ⚠️ `borderRadius` has been deprecated in a future major version. Please use our css var based [`borderRadius tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs) tokens.
 */
export const borderRadius: CanvasBorderRadius = {
  zero: '0px',
  s: '2px',
  m: '4px',
  l: '8px',
  circle: '999px',
};
