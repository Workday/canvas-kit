import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const switchBackgroundStencil = createStencil({
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    // This is used in "High Contrast Mode" to show a border on the Switch background.
    border: `${px2rem(1)} solid transparent`,
    height: px2rem(18),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: px2rem(34),
    borderRadius: system.shape.full,
    padding: `0 ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    backgroundColor: system.color.accent.muted.soft,
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
