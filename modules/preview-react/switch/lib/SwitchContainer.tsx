import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const switchContainerStencil = createStencil({
  base: {
    position: 'relative',
    marginTop: system.legacy.gap.xs,
    height: px2rem(18),
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
