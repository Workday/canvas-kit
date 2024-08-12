import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, CSProps, calc, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const dividerStencil = createStencil({
  vars: {
    space: cssVar(system.space.x4),
  },
  base: ({space}) => {
    return {
      display: 'block',
      height: 1,
      border: 'none',
      borderTop: `1px solid ${system.color.border.divider}`,
      margin: `${calc.divide(space, 2)} 0`,
    };
  },
});

interface DividerProps extends CSProps {
  space?: string;
}

/**
 * # Divider
 * A divider to segment and visually organize content. By default, it renders a semantic `<hr>` element.
 *
 * [View Docs](https://workday.github.io/canvas-kit/?path=/docs/preview-divider-react)
 *
 * The `space` prop will equally apply top and bottom margin styles.
 * In the example below, `x2` (0.5rem), adds `0.25rem` margin to the top and `0.25rem` to the bottom
 *
 * @example
 * ```tsx
 * import { Divider } from '@workday/canvas-kit-preview-react/divider';
 * import {system} from '@workday/canvas-tokens-web';
 *
 * <Divider space={system.space.x2} />
 *
 * ```
 *
 * ## Accessibility
 *
 * Screen readers announce `<hr>` elements to alert users to a break in content. If you're using `Divider` as a purely decorative element and not a thematic break, you should use `aria-hidden` to prevent screen readers from announcing it.
 *
 * ```tsx
 * <Divider aria-hidden={true} />
 *```
 */
export const Divider = createComponent('hr')({
  displayName: 'Divider',
  Component: ({space, ...elemProps}: DividerProps, ref, Element) => (
    <Element ref={ref} {...handleCsProp(elemProps, dividerStencil({space}))} />
  ),
});
