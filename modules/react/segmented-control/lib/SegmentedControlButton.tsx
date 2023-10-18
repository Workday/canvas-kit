import React from 'react';
import {
  BaseButton,
  ButtonColors,
  ButtonSizes,
  ButtonContainerProps,
} from '@workday/canvas-kit-react/button';
import {
  createComponent,
  mouseFocusBehavior,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, borderRadius, space} from '@workday/canvas-kit-react/tokens';

const getIconButtonColors = (toggled?: boolean): ButtonColors => {
  return {
    default: {
      background: toggled ? colors.blueberry400 : colors.soap200,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice200,
    },
    hover: {
      background: toggled ? colors.blueberry400 : colors.soap300,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    active: {
      background: toggled ? colors.blueberry400 : colors.soap500,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    focus: {
      background: toggled ? colors.blueberry400 : colors.soap200,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
      border: toggled ? 'transparent' : colors.soap500,
    },
    disabled: {
      background: toggled ? colors.soap100 : colors.soap100,
      border: colors.soap500,
      icon: colors.soap600,
      opacity: '1',
    },
  };
};

const getSizeStyles = (size?: ButtonSizes) => {
  const sizeValue =
    size === 'large' ? `calc(${space.xl} + ${space.xxs})` : size === 'small' ? space.l : space.xl;

  return {
    width: sizeValue,
    height: sizeValue,
  };
};

const StyledButton = styled(BaseButton)<ButtonContainerProps & StyledType>(
  {
    borderRadius: borderRadius.zero,
    border: `1px solid ${colors.soap500}`,
    borderLeft: 'none',

    '&:first-of-type': {
      borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
      borderLeft: `1px solid ${colors.soap500}`,
    },
    '&:last-of-type': {
      borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
    },
    '&[aria-pressed="true"]': {
      borderColor: `${colors.blueberry400} !important`,
      '&:hover, &:focus:hover': {
        background: colors.blueberry400,
      },
    },
    '&:focus': {
      borderRadius: borderRadius.m,
      zIndex: 1,
      animation: 'none', // reset focusRing animation
      transition: 'all 120ms, border-radius 1ms',
      ...mouseFocusBehavior({
        '&': {
          borderRadius: borderRadius.zero,
          '&:first-of-type': {
            borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
          },
          '&:last-of-type': {
            borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
          },
        },
      }),
    },
  },
  ({theme}) => ({
    '[aria-pressed="true"]': {
      borderColor: theme.canvas.palette.primary.main,
      '&:hover, &:focus:hover': {
        background: theme.canvas.palette.primary.main,
      },
    },
  }),
  ({size}: ButtonContainerProps) => ({
    ...getSizeStyles(size),
  })
);

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
      <StyledButton
        as={Element}
        aria-pressed={toggled}
        value={value}
        colors={getIconButtonColors(toggled)}
        fillIcon={toggled}
        ref={ref}
        {...props}
      >
        <BaseButton.Icon size={props.size || 'large'} icon={icon} />
      </StyledButton>
    );
  },
});
