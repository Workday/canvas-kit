import {fontFamilies, CanvasFontFamilies} from './fontFamilies';
import {fontSizes, CanvasFontSizes} from './fontSizes';
import {fontWeights, CanvasFontWeights} from './fontWeights';
import {levels, CanvasTypeHierarchy} from './levels';
import {variants, CanvasTypeVariants} from './variants';

export {fontFamily, monoFontFamily} from './fontFamilies';

/** @deprecated ⚠️ `CanvasTypeProperties`, `CanvasTypeVariants`, `CanvasTypeHierarchy` have been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type {CanvasTypeProperties, CanvasTypeVariants, CanvasTypeHierarchy};

/** ### Canvas Type Properties
 * [View Storybook Docs](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs)
 *
 * ---
 * The type properties provide precise control and are only intended to be used when the type hierarchy tokens are not well-suited for the task.
 *
 * The properties are organized in three parts:
 *
 * - `fontFamilies`
 * - `fontSizes`
 * - `fontWeights`
 *
 * You can find more detailed information by inspecting individual properties.
 * @deprecated ⚠️ `properties` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
const properties: CanvasTypeProperties = {
  fontFamilies,
  fontSizes,
  fontWeights,
};

/**
 * ### Canvas Type Tokens
 * [View Storybook Docs](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs)
 *
 * ---
 * Type tokens are separated into three sections:
 *
 * - `levels` - provide higher-level styles for the Canvas type hierarchy: title, heading, body, and subtext
 * - `properties` - provide low-level type properties (font families, sizes, and weights)
 * - `variants` - provide modifiers for text styles (error, hint, and inverse)
 *
 * @deprecated ⚠️ `type` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 * */
export const type: CanvasType = {
  levels,
  properties,
  variants,
};

/** @deprecated ⚠️ `CanvasTypeProperties` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
type CanvasTypeProperties = {
  /** ### Font Family Tokens
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
   *
   * ---
   * There are two font family tokens:
   *
   * - `default`: "Roboto" - what you'll almost always want to choose
   * - `monospace`: "Roboto Mono" - what you'll want for monospace type
   *
   * You can find more detailed information by inspecting individual families.
   * @example
   * ```tsx
   * import { type } from '@workday/canvas-kit-react/tokens';
   *
   * const MonospaceText = () => (
   *   <p css={{fontFamily: type.properties.fontFamilies.monospace}}>
   *     monospace_text
   *   </p>
   * );
   * ```
   */
  fontFamilies: CanvasFontFamilies;
  /** ### Font Size Tokens
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
   *
   * ---
   * There are twelve font size tokens. Here's a quick reference:
   *
   * `10`, `12`, `14`, `16`, `18`, `20`, `24`, `28`, `32`, `40`, `48`, `56`
   *
   * Each token key corresponds to a pixel value. So if you're looking for a token
   * that matches 16px, you'd grab the `fontSizes[16]` token.
   *
   * Note that the value of each token is converted to base-16 rem. For example:
   *
   * ```ts
   * fontSizes[16] \\ returns '1rem'
   * ```
   * You can find more detailed information by inspecting individual font sizes.
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
   */
  fontSizes: CanvasFontSizes;
  /** ### Font Weight Tokens
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
   *
   * ---
   * There are three font-weight tokens:
   *
   * - `regular` (400)
   * - `medium` (500)
   * - `bold` (700)
   *
   * Each token maps a weight name to a number value.
   *
   * @example
   * ```tsx
   * import { type } from '@workday/canvas-kit-react/tokens';
   *
   * const BoldText = () => (
   *   <p css={{fontWeight: type.properties.fontWeights.bold}}>
   *     Bold Text
   *   </p>
   * );
   * ```
   */
  fontWeights: CanvasFontWeights;
};

/** @deprecated ⚠️ `CanvasType` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export type CanvasType = {
  /** ### Canvas Type Hierarchy
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
   *
   * ---
   * The hierarchy is organized into four levels, which correspond to levels defined in Figma.
   *
   * - `title`: Intended to be used for large page titles.
   * - `heading`: Intended to be used for headings and large text.
   * - `body`: Intended to be used for standard body text.
   * - `subtext`: Intended to be used for small subtext content or in tight spaces.
   *
   * Each level has three sizes: `large`, `medium`, and `small`.
   *
   * The type hierarchy tokens are recommended for most type usage.
   * These objects handle font sizes, weights, line heights, letter spacing, and color for you,
   * making it really simple to implement consistent type without much effort
   *
   * You can find more detailed information by inspecting individual levels and sizes.
   *
   * @example
   * ```tsx
   * import { type } from '@workday/canvas-kit-react/tokens';
   *
   * const Heading = () => (
   *   <h3 css={type.levels.heading.medium}>
   *     Heading Text
   *   </h3>
   * );
   * ```
   */
  levels: CanvasTypeHierarchy;
  /** ### Canvas Type Properties
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
   *
   * ---
   * Type properties are organized in three parts:
   *
   * - `fontFamilies`
   * - `fontSizes`
   * - `fontWeights`
   *
   * Type properties provide precise control and are only intended to be used when the
   * type hierarchy tokens are not well-suited for the task. You can find more detailed
   * information by inspecting individual properties.
   *
   */
  properties: CanvasTypeProperties;
  /** ### Canvas Type Variants
   * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens--type)
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
   *   <span css={{...type.levels.subtext.small, ...type.variants.error}}>
   *     Error Text
   *   </span>
   * );
   * ```
   */
  variants: CanvasTypeVariants;
};
