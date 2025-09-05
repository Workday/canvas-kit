import React from 'react';

import {styled, StyledType, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';

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
  [buttonStencil.vars.background]: colors.soap300,
  [buttonStencil.vars.border]: 'transparent',
  [buttonStencil.vars.label]: colors.blackPepper400,
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

  '&:focus-visible, &.focus': {
    // using `focusRing` in support doesn't work for components that use `styled` function because we changed the type to be `CSSObjectWithVars`. Changing this to use `boxShadow` works in support for non stencil components.
    boxShadow:
      '0 0 0 0px transparent,0 0 0 2px var(--cnvs-brand-common-focus-outline, rgba(8,117,225,1))',
    [buttonStencil.vars.background]: colors.soap300,
    [buttonStencil.vars.border]: 'transparent',
    [buttonStencil.vars.label]: colors.blackPepper400,
  },

  '&:hover, &.hover': {
    [buttonStencil.vars.background]: colors.soap300,
    [buttonStencil.vars.border]: 'transparent',
    [buttonStencil.vars.label]: colors.blackPepper400,
  },

  '&:active, &.active': {
    [buttonStencil.vars.background]: colors.soap500,
    [buttonStencil.vars.border]: 'transparent',
    [buttonStencil.vars.label]: colors.blackPepper400,
  },

  '&:disabled, &.disabled': {
    [buttonStencil.vars.background]: colors.soap100,
    [buttonStencil.vars.label]: colors.licorice100,
    [buttonStencil.vars.border]: 'transparent',
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
