import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {SwitchProps} from './Switch';

export const switchInputStencil = createStencil({
  base: {
    display: 'flex',
    position: 'absolute',
    // This allows for the input to be the same size as the clickable area for the Switch
    margin: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: px2rem(34),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    opacity: '0',
    cursor: 'pointer',
    // This is used in "High Contrast Mode" to show an outline on the Switch background.
    '& ~ div:first-of-type': {
      outlineOffset: px2rem(2),
    },
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base),
      },
      '&:disabled, &.disabled': {
        '& ~ div:first-of-type': {
          opacity: system.opacity.disabled,
        },
      },
    },
    '&:disabled, &.disabled': {
      cursor: 'not-allowed',
      '& ~ div:first-of-type': {
        opacity: system.opacity.disabled,
      },
    },
    '&:focus-visible, &:focus, &.focus': {
      outline: 'none',
      '& ~ div:first-of-type': {
        // This is used in "High Contrast Mode" to show an outline on the Switch background.
        outline: `${px2rem(1)} solid transparent`,
        ...focusRing({separation: 2, animate: false}),
      },
    },
  },
  modifiers: {
    error: {
      error: {
        '& ~ div:first-of-type': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `
              0 0 0 ${px2rem(2)} ${cssVar(system.color.focus.inverse, base.neutral0)},
              0 0 0 ${system.space.x1} ${cssVar(system.color.brand.focus.critical, brand.common.errorInner)},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      caution: {
        '& ~ div:first-of-type': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `
          0 0 0 ${px2rem(2)} ${cssVar(system.color.focus.inverse, base.neutral0)},
          0 0 0 ${system.space.x1} ${cssVar(system.color.brand.focus.caution.inner, brand.common.alertInner)},
          0 0 0 ${px2rem(5)} ${cssVar(system.color.brand.border.caution, brand.common.alertOuter)}`,
        },
      },
    },
  },
});

export const SwitchInput = createComponent('input')<SwitchProps>({
  displayName: 'SwitchInput',
  Component: ({error, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, switchInputStencil({error}))} />;
  },
});
