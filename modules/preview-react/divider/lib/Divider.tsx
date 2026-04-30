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
  base: ({space}) => {
    return {
      display: 'block',
      height: px2rem(1),
      border: 'none',
      borderTop: `1px solid ${system.legacy.color.border.default}`,
      margin: `${calc.divide(cssVar(space, system.legacy.gap.xs), 2)} 0`,
    };
  },
});

export interface DividerProps extends CSProps {
  /**
   * Applies top and bottom margin evenly. It divides the provided value by two and applies half to each end.
   * E.g. `space="2rem"` would apply `1rem` margin to the top, and `1rem` margin to the bottom.
   * @default `system.gap.md` (1rem)
   */
  space?: string;
}

/**
 * # Divider
 * A divider to segment and visually organize content. By default, it renders a semantic `[<hr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)` element.
 *
 * [View Docs](https://workday.github.io/canvas-kit/?path=/docs/preview-divider--docs)
 *
 * The `space` prop will equally apply top and bottom margin styles.
 * In the example below, `system.gap.xs` (0.5rem), adds `0.25rem` margin to the top and `0.25rem` to the bottom
 *
 * @example
 * ```tsx
 * import { Divider } from '@workday/canvas-kit-preview-react/divider';
 *
 *
 * <Divider space={system.gap.xs} />
 *
 * ```
 */
export const Divider = createComponent('hr')({
  displayName: 'Divider',
  Component: ({space, ...elemProps}: DividerProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, dividerStencil({space}))} />
  ),
});
