import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const switchBackgroundStencil = createStencil({
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    // This is used in "High Contrast Mode" to show a border on the Switch background.
    border: `${px2rem(1)} solid transparent`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: '2.125rem',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    padding: `0 ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.accent.muted.soft, system.color.bg.muted.soft),
  },
});

export const SwitchBackground = createComponent('div')({
  displayName: 'SwitchBackground',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, switchBackgroundStencil())}>
        {children}
      </Element>
    );
  },
});
