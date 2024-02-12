import React from 'react';

import {focusRing, styled, StyledType, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton, buttonVars} from '@workday/canvas-kit-react/button';

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
  [buttonVars.default.background]: colors.soap300,
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.label]: colors.blackPepper400,

  [buttonVars.hover.background]: colors.soap300,
  [buttonVars.hover.border]: 'transparent',
  [buttonVars.hover.label]: colors.blackPepper400,

  [buttonVars.focus.background]: colors.soap300,
  [buttonVars.focus.border]: 'transparent',
  [buttonVars.focus.label]: colors.blackPepper400,

  [buttonVars.active.background]: colors.soap500,
  [buttonVars.active.border]: 'transparent',
  [buttonVars.active.label]: colors.blackPepper400,

  [buttonVars.disabled.background]: colors.soap100,
  [buttonVars.disabled.label]: colors.licorice100,
  [buttonVars.disabled.border]: 'transparent',
  [buttonVars.disabled.icon]: colors.licorice100,
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
