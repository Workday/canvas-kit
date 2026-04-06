import {typeColors, statusColors} from '@workday/canvas-colors-web';

/** ### Canvas Type Variants
 * [View Storybook Docs](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs)
 *
 * ---
 * There are three type variants:
 *
 * - `error` Used for making errors more visible
 * - `hint` Used for help text and secondary content
 * - `inverse` Used for any text on a dark or colored background
 *
 * Type variants provide modifiers for text styles.
 * They are typically used in conjunction with other type styles
 * such as the type hierarchy and type properties tokens.
 * You can find more detailed information by inspecting individual variants.
 *
 * @example
 * ```tsx
 * import { type } from '@workday/canvas-kit-react/tokens';
 *
 * const ErrorText = () => (
 *   <span css={{ ...type.levels.subtext.small, ...type.variants.error}}>
 *     Error Text
 *   </span>
 * );
 * ```
 * @deprecated ⚠️ `variants` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
export const variants: CanvasTypeVariants = {
  error: {
    color: statusColors.error,
  },
  hint: {
    color: typeColors.hint,
  },
  inverse: {
    color: typeColors.inverse,
  },
};

/** @deprecated ⚠️ `CanvasTypeVariants` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasTypeVariants = {
  /**
   * - Sets color to Cinnamon 500
   * - Used for making errors more visible
   */
  error: {
    color: typeof statusColors.error;
  };
  /**
   * - Sets color to Licorice 300
   * - Used for help text and secondary content
   */
  hint: {
    color: typeof typeColors.hint;
  };
  /**
   * - Sets color to FrenchVanilla 100
   * - Used for any text on a dark or colored background
   * - Please consider a11y and color contrast when using white text.
   */
  inverse: {
    color: typeof typeColors.inverse;
  };
};
