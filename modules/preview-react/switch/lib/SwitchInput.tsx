import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {SwitchProps} from './Switch';

export const switchInputStencil = createStencil({
  base: {
    display: 'flex',
    position: 'absolute',
    // This allows for the input to be the same size as the clickable area for the Switch
    margin: 0,
    height: base.legacy.size225,
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: px2rem(34),
    borderRadius: system.legacy.shape.full,
    opacity: '0',
    cursor: 'pointer',
    // This is used in "High Contrast Mode" to show an outline on the Switch background.
    '& ~ div:first-of-type': {
      outlineOffset: px2rem(2),
    },
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        backgroundColor: cssVar(system.legacy.color.brand.accent.primary, brand.primary.base),
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
          boxShadow: `
              0 0 0 ${px2rem(2)} ${cssVar(system.legacy.color.focus.inverse, base.legacy.neutral0)},
              0 0 0 ${system.space.x1} ${cssVar(system.legacy.color.brand.focus.critical, brand.common.errorInner)},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      caution: {
        '& ~ div:first-of-type': {
          boxShadow: `
          0 0 0 ${px2rem(2)} ${cssVar(system.legacy.color.focus.inverse, base.legacy.neutral0)},
          0 0 0 ${system.space.x1} ${cssVar(system.legacy.color.brand.focus.caution.inner, brand.common.alertInner)},
          0 0 0 ${px2rem(5)} ${cssVar(system.legacy.color.brand.border.caution, brand.common.alertOuter)}`,
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
