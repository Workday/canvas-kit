import React from 'react';

import {focusRing, styled, StyledType, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';

export interface PillIconButtonProps extends Omit<SystemIconProps, 'icon'> {
  icon?: CanvasSystemIcon;
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
        width: 0,
        innerColor: 'transparent',
        outerColor: 'transparent',
      }),
    },
    disabled: {
      icon: colors.licorice100,
      opacity: '1',
    },
  };
};

const StyledFocusTarget = styled('span')<StyledType & PillIconButtonProps>({
  height: 20,
  position: 'absolute',
  right: '5px',
  left: space.xxxs,
  margin: 0,
  borderRadius: borderRadius.m,
  '&:focus': {
    outline: 'none',
    ...focusRing({
      outerColor: colors.blueberry400,
      innerColor: 'transparent',
      separation: 0,
      width: 2,
      inset: 'inner',
    }),
  },
});

const StyledIconButton = styled(BaseButton)<StyledType & PillIconButtonProps>({
  marginInlineEnd: '-14px !important', // visually pull in the pill to the right size
  paddingInlineEnd: space.xxxs, // add 4px padding outside the pill for click target
  marginInlineStart: `-${space.xxs} !important`, // visually create space between label and the button
});

export const PillIconButton = createSubcomponent('button')({
  modelHook: usePillModel,
})<PillIconButtonProps>(
  ({size, icon = xSmallIcon, maxWidth, children, ...elemProps}, Element, model) => {
    return (
      <StyledIconButton
        borderRadius="s"
        height={space.l}
        width={space.l}
        padding="zero"
        disabled={model.state.disabled}
        colors={getIconColors()}
        tabIndex={-1}
        as={Element}
        position="relative"
        {...elemProps}
      >
        {/* We made the clickable element in this case the button larger, and have the span be the visible focus area */}
        <StyledFocusTarget aria-hidden="true" tabIndex={model.state.disabled ? -1 : 0} />
        <SystemIcon icon={icon} size={20} />
      </StyledIconButton>
    );
  }
);
