import React from 'react';
import {ButtonContainerNewProps, Button, ButtonColors} from '@workday/canvas-kit-react/button';
import {createComponent, mouseFocusBehavior, styled} from '@workday/canvas-kit-react/common';
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
      background: toggled ? colors.blueberry400 : undefined,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    disabled: {
      background: toggled ? colors.soap100 : colors.soap100,
      icon: colors.soap600,
    },
  };
};

const StyledButton = styled(Button)(
  {
    borderRadius: borderRadius.zero,
    border: `1px solid ${colors.soap500}`,
    borderLeft: 'none',
    minWidth: space.xl,
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
  })
);

export interface SegmentedControlButtonProps extends ButtonContainerNewProps {
  toggled?: boolean;
  icon: CanvasSystemIcon;
  value: string | number;
}

export const SegmentedControlButton = createComponent()({
  displayName: 'Button',
  Component: ({children, value, icon, toggled, ...props}: SegmentedControlButtonProps, ref) => {
    console.warn('value', value);
    return (
      <StyledButton
        aria-pressed={toggled}
        value={value}
        colors={getIconButtonColors(toggled)}
        {...props}
      >
        <Button.Icon size="medium" icon={icon} />
      </StyledButton>
    );
  },
});
