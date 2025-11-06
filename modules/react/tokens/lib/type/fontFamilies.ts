// prettier-ignore
//@ts-ignore
const canvasObject = typeof window !== 'undefined' && window.workday && window.workday.canvas && window.workday.canvas;

const inheritFont: boolean = typeof canvasObject !== 'undefined' && canvasObject.inheritFontFamily;
const inheritMonoFont: boolean | string =
  typeof canvasObject !== 'undefined' && canvasObject.inheritMonoFontFamily;

/** @deprecated ⚠️ `fontFamily` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export const fontFamily = inheritFont
  ? 'inherit'
  : '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';

/** @deprecated ⚠️ `monoFontFamily` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens. */
export const monoFontFamily =
  inheritMonoFont === true
    ? 'inherit'
    : inheritMonoFont || '"Roboto Mono", "Courier New", Courier, monospace';

/** ### Font Family Tokens
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
 *   <p css={{fontFamily: type.properties.fonts.monospace}}>
 *     monospace_text
 *   </p>
 * );
 * ```
 * @deprecated ⚠️ `fontFamilies` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
export const fontFamilies: CanvasFontFamilies = {
  default: fontFamily,
  monospace: monoFontFamily,
};

/**
 * @deprecated ⚠️ `CanvasFontFamilies` has been deprecated in a future major version. Please use our css var based [`fontFamily`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-type--docs) tokens.
 */
export type CanvasFontFamilies = {
  /**
   * '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif'
   * unless the font-family is explicitly set in `window.workday.canvas.inheritFontFamily`
   * */
  default: typeof fontFamily;
  /**
   * '"Roboto Mono", "Courier New", Courier, monospace'
   * unless the font-family is explicitly set in `window.workday.canvas.inheritMonoFontFamily`
   * */
  monospace: typeof monoFontFamily;
};
