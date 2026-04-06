type ValueOf<T> = T[keyof T];
/** ### Font Size Tokens
 * ---
 * There are twelve font size tokens. Each token key corresponds to a pixel value.
 * So if you're looking for a token that matches 16px, you'd grab the `fontSizes[16]` token.
 * But it's important to note that the value of each token is converted to base-16 rem.
 *
 * E.g. `fontSizes[16]` returns `'1rem'`
 *
 * Here's a quick reference for all font size tokens:
 * - 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56
 *
 * @example
 * ```tsx
 * import { type } from '@workday/canvas-kit-react/tokens';
 *
 * const LargeText = () => (
 *   <p css={{fontSize: type.properties.fontSizes[20]}}>
 *     Bold Text
 *   </p>
 * );
 * ```
 * @deprecated ⚠️ `fontSizes` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
export const fontSizes: CanvasFontSizes = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  56: '3.5rem',
};

/** @deprecated ⚠️ `CanvasFontSizes` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasFontSizes = {
  /** 10px converted to base-16 rem */
  10: '0.625rem';
  /** 12px converted to base-16 rem */
  12: '0.75rem';
  /** 14px converted to base-16 rem */
  14: '0.875rem';
  /** 16px converted to base-16 rem */
  16: '1rem';
  /** 18px converted to base-16 rem */
  18: '1.125rem';
  /** 20px converted to base-16 rem */
  20: '1.25rem';
  /** 24px converted to base-16 rem */
  24: '1.5rem';
  /** 28px converted to base-16 rem */
  28: '1.75rem';
  /** 32px converted to base-16 rem */
  32: '2rem';
  /** 40px converted to base-16 rem */
  40: '2.5rem';
  /** 48px converted to base-16 rem */
  48: '3rem';
  /** 56px converted to base-16 rem */
  56: '3.5rem';
};

/** @deprecated ⚠️ `CanvasFontSizeValues` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasFontSizeValues = ValueOf<CanvasFontSizes>;
