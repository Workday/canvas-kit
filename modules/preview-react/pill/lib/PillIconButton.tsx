import React from 'react';

import {
  createComponent,
  focusRing,
  styled,
  useModelContext,
  mergeProps,
  StyledType,
} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';

export interface PillIconButtonProps extends Omit<SystemIconProps, 'icon'> {
  model?: PillModel;
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

      focusRing: focusRing({width: 0, innerColor: 'transparent', outerColor: 'transparent'}),
    },
    disabled: {
      icon: colors.licorice100,
      opacity: '1',
    },
  };
};

const StyledFocusTarget = styled('span')<StyledType & PillIconButtonProps>({
  height: 22,
  position: 'absolute',
  right: space.xxxs,
  left: space.xxxs,
  margin: 0,
  borderRadius: borderRadius.m,
  '&:focus': {
    ...focusRing({
      outerColor: 'transparent',
      innerColor: 'transparent',
    }),
  },
});

const StyledIconButton = styled(BaseButton)<StyledType & PillIconButtonProps>({
  marginInlineEnd: '-14px !important', // visually pull in the pill to the right size
  paddingInlineEnd: space.xxxs, // add 4px padding outside the pill for click target
  marginInlineStart: `-${space.xxxs} !important`, // visually create space between label and the button
});

export const PillIconButton = createComponent('button')({
  displayName: 'Pill.IconButton',
  Component: (
    {size, model, icon = xSmallIcon, ...elemProps}: PillIconButtonProps,
    ref,
    Element
  ) => {
    const {state} = useModelContext(PillModelContext, model);
    const props = mergeProps(
      {onClick: state.onDelete, style: {position: 'relative' as const}},
      elemProps
    );
    return (
      <StyledIconButton
        borderRadius="s"
        height={space.l}
        width={space.l}
        padding="zero"
        disabled={state.disabled}
        colors={getIconColors()}
        tabIndex={-1}
        {...props}
      >
        {/* We made the clickable element in this case the button larger, and have the span be the visible focus area */}
        <StyledFocusTarget aria-hidden="true" tabIndex={state.disabled ? -1 : 0} />
        <SystemIcon icon={icon} ref={ref} size={20} />
      </StyledIconButton>
    );
  },
});
