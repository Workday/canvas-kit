import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const switchContainerStencil = createStencil({
  base: {
    position: 'relative',
    marginBlockStart: system.legacy.gap.xs,
    height: system.legacy.size.xxs,
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: px2rem(34),
  },
});

export const SwitchContainer = createComponent('div')({
  displayName: 'SwitchContainer',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, switchContainerStencil())}>
        {children}
      </Element>
    );
  },
});
