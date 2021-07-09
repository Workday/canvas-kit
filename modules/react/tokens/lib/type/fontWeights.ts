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
 */
export const fontWeights: CanvasFontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type CanvasFontWeights = {
  /** regular font-weight (400) */
  regular: 400;
  /** medium font-weight (500) */
  medium: 500;
  /** bold font-weight (700) */
  bold: 700;
};

export type CanvasFontWeightValues = ValueOf<CanvasFontWeights>;
