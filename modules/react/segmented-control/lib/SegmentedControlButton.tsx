import {brand, system} from '@workday/canvas-tokens-web';
import {BaseButton, ButtonContainerProps, buttonStencil} from '@workday/canvas-kit-react/button';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const segmentedControlButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    borderInlineStart: 'none',
    minWidth: 'auto',

    [buttonStencil.vars.background]: system.color.bg.alt.soft,
    [buttonStencil.vars.border]: system.color.border.container,
    [buttonStencil.vars.borderRadius]: system.shape.zero,
    [systemIconStencil.vars.color]: system.color.fg.muted.soft,

    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
    },

    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.alt.softer,
      [buttonStencil.vars.border]: system.color.border.container,
      [systemIconStencil.vars.color]: system.color.icon.soft,
    },

    '&:first-of-type': {
      borderRadius: `${system.shape.x1} 0 0 ${system.shape.x1}`,
      borderInlineStart: `${px2rem(1)} solid ${system.color.border.container}`,
    },

    '&:last-of-type': {
      borderRadius: `0 ${system.shape.x1} ${system.shape.x1} 0`,
    },

    '&[aria-pressed="true"]': {
      [buttonStencil.vars.background]: brand.primary.base,
      [buttonStencil.vars.border]: brand.primary.base,
      [systemIconStencil.vars.color]: system.color.fg.inverse,

      '&:first-of-type': {
        borderInlineStartColor: brand.primary.base,
      },

      '&:disabled, &.disabled': {
        [buttonStencil.vars.background]: system.color.bg.alt.softer,
        [buttonStencil.vars.border]: system.color.border.container,
        [systemIconStencil.vars.color]: system.color.icon.soft,
      },
    },

    '&:focus-visible, &.focus': {
      borderRadius: system.shape.x1,
      zIndex: 1,
      animation: 'none',
      transition: 'all 120ms border-radius 1ms',
    },
  },
  modifiers: {
    segmentedControlButtonSize: {
      small: {
        width: system.space.x8,
        height: system.space.x8,
      },
      medium: {
        width: system.space.x10,
        height: system.space.x10,
      },
      large: {
        width: calc.add(system.space.x10, system.space.x2),
        height: calc.add(system.space.x10, system.space.x2),
      },
    },
  },
});

/**
 * @deprecated ⚠️ `SegmentedControlButtonProps` in Main has been deprecated and will be removed in a future major version. Please use [`SegmentedControl` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control--docs) instead.
 */
export interface SegmentedControlButtonProps extends ButtonContainerProps {
  toggled?: boolean;
  icon: CanvasSystemIcon;
  value?: string | number;
  size?: 'small' | 'medium' | 'large';
}

/**
 * @deprecated ⚠️ `SegmentedControlButton` in Main has been deprecated and will be removed in a future major version. Please use [`SegmentedControl` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control--docs) instead.
 */
export const SegmentedControlButton = createComponent('button')({
  displayName: 'Button',
  Component: ({value, icon, toggled, ...props}: SegmentedControlButtonProps, ref, Element) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        aria-pressed={toggled}
        value={value}
        {...handleCsProp(
          props,
          segmentedControlButtonStencil({segmentedControlButtonSize: props.size || 'medium'})
        )}
      >
        <BaseButton.Icon size={props.size || 'large'} icon={icon} />
      </BaseButton>
    );
  },
});
