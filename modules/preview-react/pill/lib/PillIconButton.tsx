import React from 'react';

import {focusRing, styled, StyledType, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';

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

const getIconColors = () => {
  return {
    default: {
      icon: colors.licorice200,
    },

    hover: {
      icon: colors.licorice500,
    },
    active: {
      icon: colors.licorice500,
    },
    focus: {
      icon: colors.licorice500,

      focusRing: focusRing({
        outerColor: colors.blueberry400,
        innerColor: 'transparent',
        separation: 0,
        width: 2,
        inset: 'inner',
      }),
    },
    disabled: {
      icon: colors.licorice100,
      opacity: '1',
    },
  };
};

const StyledIconButton = styled(BaseButton)<StyledType & PillIconButtonProps>({
  marginInlineEnd: '-7px', // visually pull in the pill to the right size
  marginInlineStart: `-2px`, // visually create space between label and the button
  overflow: 'visible',
  '::after': {
    content: '""',
    height: 32,
    width: 32,
    position: 'absolute',
    left: '-7px',
    bottom: '-7px',
    margin: 0,
    pointerEvents: 'all',
    cursor: 'pointer',
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
        colors={getIconColors()}
        aria-labelledby={`removable ${model.state.id}`}
        as={Element}
        position="relative"
        {...elemProps}
      >
        <SystemIcon aria-label={ariaLabel} id={'removable'} icon={icon} size={24} role="img" />
      </StyledIconButton>
    );
  }
);
