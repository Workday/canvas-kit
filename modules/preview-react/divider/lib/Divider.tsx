import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const dividerStencil = createStencil({
  vars: {
    space: '',
  },
  base: {
    border: 'none',
  },
  modifiers: {
    /**
     * Sets the orientation of the `Divider`.
     * * `horizontal` - renders a horizontal rule with the `space` prop applied to the top and bottom margins.
     * * `vertical` - renders a vertical rule with the `space` prop applied to the left and right margins. It
     *   stretches to fill the height of its container, so it should be placed inside an element with a defined
     *   height (e.g. a flex or grid container).
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: ({space}) => ({
        display: 'block',
        height: px2rem(1),
        borderBlockStart: `1px solid ${system.legacy.color.border.default}`,
        margin: `${calc.divide(cssVar(space, system.legacy.gap.xs), 2)} 0`,
      }),
      vertical: ({space}) => ({
        display: 'inline-block',
        alignSelf: 'stretch',
        width: px2rem(1),
        height: 'auto',
        borderInlineStart: `1px solid ${system.legacy.color.border.default}`,
        margin: `0 ${calc.divide(cssVar(space, system.legacy.gap.xs), 2)}`,
      }),
    },
  },
  defaultModifiers: {
    orientation: 'horizontal',
  },
});

export interface DividerProps extends CSProps {
  /**
   * Applies margin evenly to both ends of the `Divider`. It divides the provided value by two and applies half to each end.
   * For a `horizontal` `Divider` this is the top and bottom margin, and for a `vertical` `Divider` it is the left and right margin.
   * E.g. `space="2rem"` would apply `1rem` margin to each end.
   * @default `system.gap.md` (1rem)
   */
  space?: string;
  /**
   * Sets the orientation of the `Divider`.
   * * `horizontal` - renders a horizontal rule to segment stacked content.
   * * `vertical` - renders a vertical rule to segment content laid out in a row. The `Divider` stretches to fill
   *   the height of its container, so it should be placed inside an element with a defined height (e.g. a flex or
   *   grid container).
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * # Divider
 * A divider to segment and visually organize content. By default, it renders a semantic `[<hr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)` element.
 *
 * [View Docs](https://workday.github.io/canvas-kit/?path=/docs/preview-divider--docs)
 *
 * The `space` prop will equally apply margin styles to both ends of the `Divider`.
 * In the example below, `system.gap.xs` (0.5rem), adds `0.25rem` margin to the top and `0.25rem` to the bottom.
 *
 * @example
 * ```tsx
 * import { Divider } from '@workday/canvas-kit-preview-react/divider';
 *
 *
 * <Divider space={system.gap.xs} />
 *
 * // vertical
 * <Divider orientation="vertical" />
 *
 * ```
 */
export const Divider = createComponent('hr')({
  displayName: 'Divider',
  Component: ({space, orientation = 'horizontal', ...elemProps}: DividerProps, ref, Element) => (
    <Element
      ref={ref}
      aria-orientation={orientation}
      {...handleCsProp(elemProps, dividerStencil({space, orientation}))}
    />
  ),
});
