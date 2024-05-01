import React from 'react';

import {focusRing, styled, StyledType, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton, buttonColorPropVars} from '@workday/canvas-kit-react/button';

export interface PillIconButtonProps extends Omit<SystemIconProps, 'icon'> {
  /**
   * The system icon rendered by the button
   * @default `xSmallIcon`
   */
  icon?: CanvasSystemIcon;
  /**
   * The aria label for the removable icon
   * @default 'remove'
   */
  'aria-label'?: string;
}

const StyledIconButton = styled(BaseButton)<StyledType & PillIconButtonProps>({
  marginInlineEnd: '-7px', // visually pull in the pill to the right size
  marginInlineStart: `-2px`, // visually create space between label and the button
  overflow: 'visible',
  '::after': {
    content: '""',
    height: space.l,
    width: space.l,
    position: 'absolute',
    left: '-7px',
    bottom: '-7px',
    margin: 0,
    pointerEvents: 'all',
  },
  '&.focus, &:focus-visible': {
    ...focusRing({
      innerColor: 'transparent',
    }),
  },
  [buttonColorPropVars.default.background]: colors.soap300,
  [buttonColorPropVars.default.border]: 'transparent',
  [buttonColorPropVars.default.label]: colors.blackPepper400,

  '&:focus-visible, &.focus': {
    [buttonColorPropVars.focus.background]: colors.soap300,
    [buttonColorPropVars.focus.border]: 'transparent',
    [buttonColorPropVars.focus.label]: colors.blackPepper400,
  },

  '&:hover, &.hover': {
    [buttonColorPropVars.hover.background]: colors.soap300,
    [buttonColorPropVars.hover.border]: 'transparent',
    [buttonColorPropVars.hover.label]: colors.blackPepper400,
  },

  '&:active, &.active': {
    [buttonColorPropVars.active.background]: colors.soap500,
    [buttonColorPropVars.active.border]: 'transparent',
    [buttonColorPropVars.active.label]: colors.blackPepper400,
  },

  '&:disabled, &.disabled': {
    [buttonColorPropVars.disabled.background]: colors.soap100,
    [buttonColorPropVars.disabled.label]: colors.licorice100,
    [buttonColorPropVars.disabled.border]: 'transparent',
    [systemIconStencil.vars.color]: colors.licorice100,
  },
});

export const PillIconButton = createSubcomponent('button')({
  modelHook: usePillModel,
})<PillIconButtonProps>(
  (
    {size, icon = xSmallIcon, maxWidth, children, 'aria-label': ariaLabel = 'remove', ...elemProps},
    Element,
    model
  ) => {
    return (
      <StyledIconButton
        borderRadius="s"
        height={20}
        width={20}
        padding="zero"
        disabled={model.state.disabled}
        aria-labelledby={`removable-${model.state.id} label-${model.state.id}`}
        as={Element}
        position="relative"
        {...elemProps}
      >
        <SystemIcon
          aria-label={ariaLabel}
          id={`removable-${model.state.id}`}
          icon={icon}
          size={space.m}
          aria-hidden // This works for Chrome but not needed in Safari
          role="img"
        />
      </StyledIconButton>
    );
  }
);
