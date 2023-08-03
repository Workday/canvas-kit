// prettier-ignore
//@ts-ignore
const canvasObject = typeof window !== 'undefined' && window.workday && window.workday.canvas && window.workday.canvas;

const inheritFont: boolean = typeof canvasObject !== 'undefined' && canvasObject.inheritFontFamily;
const inheritMonoFont: boolean | string =
  typeof canvasObject !== 'undefined' && canvasObject.inheritMonoFontFamily;

export const fontFamily = inheritFont
  ? 'inherit'
  : '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif';
export const monoFontFamily =
  inheritMonoFont === true
    ? 'inherit'
    : inheritMonoFont || '"Roboto Mono", "Courier New", Courier, monospace';

/** ### Font Family Tokens
 * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/story/tokens-tokens-react--type)
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
 *   <p css={{fontFamily: type.properties.fonts.monospace}}>
 *     monospace_text
 *   </p>
 * );
 * ```
 */
export const fontFamilies: CanvasFontFamilies = {
  default: fontFamily,
  monospace: monoFontFamily,
};

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
