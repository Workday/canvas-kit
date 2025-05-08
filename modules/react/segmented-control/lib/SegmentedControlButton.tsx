import {
  BaseButton,
  ButtonContainerProps,
  buttonColorPropVars,
} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

const segmentedControlButtonStencil = createStencil({
  base: {
    borderRadius: system.shape.zero,
    border: `${px2rem(1)} solid ${system.color.border.container}`,
    borderLeft: 'none',
    minWidth: 'auto',

    [buttonColorPropVars.default.background]: system.color.bg.alt.soft,
    [buttonColorPropVars.default.icon]: system.color.icon.default,
    [buttonColorPropVars.hover.background]: system.color.bg.alt.default,
    [buttonColorPropVars.hover.icon]: system.color.icon.strong,
    [buttonColorPropVars.active.background]: system.color.bg.alt.stronger,
    [buttonColorPropVars.active.icon]: system.color.icon.strong,
    [buttonColorPropVars.focus.background]: system.color.bg.alt.soft,
    [buttonColorPropVars.focus.icon]: system.color.icon.strong,
    [buttonColorPropVars.focus.border]: system.color.border.container,
    [buttonColorPropVars.disabled.background]: system.color.bg.alt.softer,
    [buttonColorPropVars.disabled.border]: system.color.border.container,
    [buttonColorPropVars.disabled.icon]: base.soap600,
    [buttonColorPropVars.disabled.opacity]: system.opacity.full,

    '&:first-of-type': {
      borderRadius: `${system.shape.x1} 0 0 ${system.shape.x1}`,
      borderLeft: `1px solid ${system.color.border.container}`,
    },

    '&:last-of-type': {
      borderRadius: `0 ${system.shape.x1} ${system.shape.x1} 0`,
    },

    '&[aria-pressed="true"]': {
      borderColor: `${brand.primary.base} !important`,

      [buttonColorPropVars.default.background]: brand.primary.base,
      [buttonColorPropVars.default.icon]: system.color.icon.inverse,
      [buttonColorPropVars.hover.background]: brand.primary.base,
      [buttonColorPropVars.hover.icon]: system.color.icon.inverse,
      [buttonColorPropVars.active.background]: brand.primary.base,
      [buttonColorPropVars.active.icon]: system.color.icon.inverse,
      [buttonColorPropVars.focus.background]: brand.primary.base,
      [buttonColorPropVars.focus.icon]: system.color.icon.inverse,
      [buttonColorPropVars.focus.border]: system.color.border.transparent,
      [buttonColorPropVars.disabled.background]: system.color.bg.alt.softer,
      [buttonColorPropVars.disabled.border]: system.color.border.container,
      [buttonColorPropVars.disabled.icon]: base.soap600,
      [buttonColorPropVars.disabled.opacity]: system.opacity.full,

      '&:hover, &:focus:hover': {
        background: brand.primary.base,
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
    size: {
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

export interface SegmentedControlButtonProps extends ButtonContainerProps {
  toggled?: boolean;
  icon: CanvasSystemIcon;
  value?: string | number;
  size?: 'small' | 'medium' | 'large';
}

export const SegmentedControlButton = createComponent('button')({
  displayName: 'Button',
  Component: ({value, icon, toggled, ...props}: SegmentedControlButtonProps, ref, Element) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        aria-pressed={toggled}
        value={value}
        {...handleCsProp(props, segmentedControlButtonStencil({size: props.size || 'medium'}))}
      >
        <BaseButton.Icon size={props.size || 'large'} icon={icon} />
      </BaseButton>
    );
  },
});
