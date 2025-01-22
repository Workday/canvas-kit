import React from 'react';

import {focusRing, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';
import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

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

const pillIconButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    marginInlineEnd: '-7px', // visually pull in the pill to the right size
    marginInlineStart: `-2px`, // visually create space between label and the button
    borderRadius: system.shape.half,
    height: 20,
    width: 20,
    padding: 0,
    overflow: 'visible',
    position: 'relative',
    borderColor: 'transparent',
    [buttonStencil.vars.background]: system.color.bg.alt.soft,
    [systemIconStencil.vars.color]: system.color.icon.default,
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
      borderColor: 'transparent',
      ...focusRing({
        innerColor: 'transparent',
      }),
    },
    '&:hover, &.hover': {
      border: 'transparent',
    },
    '&:disabled, &.disabled': {
      borderColor: 'transparent',
    },
  },
});

export const PillIconButton = createSubcomponent('button')({
  modelHook: usePillModel,
})<PillIconButtonProps>(
  (
    {size, icon = xSmallIcon, maxWidth, children, 'aria-label': ariaLabel = '', ...elemProps},
    Element,
    model
  ) => {
    return (
      <BaseButton
        data-part="pill-icon-button"
        as={Element}
        disabled={model.state.disabled}
        aria-labelledby={`removable-${model.state.id} label-${model.state.id}`}
        {...mergeStyles(elemProps, pillIconButtonStencil())}
      >
        <SystemIcon
          aria-label={ariaLabel}
          id={`removable-${model.state.id}`}
          icon={icon}
          size={system.space.x6}
          aria-hidden // This works for Chrome but not needed in Safari
          role="img"
        />
      </BaseButton>
    );
  }
);
