import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const switchContainerStencil = createStencil({
  base: {
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginTop: cssVar(system.gap.xs, system.space.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
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
