type ValueOf<T> = T[keyof T];
/** ### Font Weight Tokens
 * ---
 * There are three font-weight tokens.
 * Each token name maps to the weight name, and each value is a number.
 *
 * - regular (400)
 * - medium (500)
 * - bold (700)
 *
 * @example
 * ```tsx
 * import { type } from '@workday/canvas-kit-react/tokens';
 *
 * const BoldText = () => (
 *   <p css={{fontWeight: type.properties.fontWeights.bold}>
 *     Bold Text
 *   </p>
 * );
 * ```
 * @deprecated ⚠️ `fontWeights` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
export const fontWeights: CanvasFontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

/** @deprecated ⚠️ `CanvasFontWeights` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasFontWeights = {
  /** regular font-weight (400) */
  regular: 400;
  /** medium font-weight (500) */
  medium: 500;
  /** bold font-weight (700) */
  bold: 700;
};

/** @deprecated ⚠️ `CanvasFontWeightValues` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasFontWeightValues = ValueOf<CanvasFontWeights>;
