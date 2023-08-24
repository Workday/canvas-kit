import React from 'react';
import {
  styled,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  createComponent,
  ExtractProps,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {colors, inputColors, spaceNumbers, borderRadius} from '@workday/canvas-kit-react/tokens';

import {Box, Flex} from '@workday/canvas-kit-react/layout';

const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioHeight = 18;

export interface StyledRadioButtonProps extends ExtractProps<typeof Box, 'input'>, Themeable {
  variant?: 'inverse' | undefined;
}

const StyledRadioInput = styled(Box.as('input'))<StyledRadioButtonProps & StyledType>(
  {
    '&:focus, &:active': {
      outline: 'transparent',
    },
  },
  ({
    disabled,
    variant,
    theme: {
      canvas: {
        palette: {
          primary: themePrimary,
          common: {focusOutline: themeFocusOutline},
        },
      },
    },
  }) => ({
    cursor: !disabled ? 'pointer' : undefined,
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
    height: '18px',
    width: '18px',

    // Circle element styles the radio as checked or unchecked
    '+ .cnvs-radio-check': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: disabled ? inputColors.disabled.background : colors.frenchVanilla100,
      borderRadius: '999px',
      boxSizing: 'border-box',
      border: `1px solid`,
      borderColor: disabled
        ? inputColors.disabled.border
        : variant === 'inverse'
        ? colors.soap300
        : inputColors.border,
      height: '18px',
      width: '18px',
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: disabled && variant === 'inverse' ? '.4' : '1',
    },

    '&:hover + .cnvs-radio-check': {
      borderColor: disabled
        ? inputColors.disabled.border
        : variant === 'inverse'
        ? colors.soap300
        : colors.licorice500,
    },

    '&:focus + .cnvs-radio-check': {
      borderColor: disabled
        ? inputColors.disabled.border
        : variant === 'inverse'
        ? colors.soap300
        : colors.blueberry400,
    },

    '&:checked + .cnvs-radio-check': {
      backgroundColor: variant === 'inverse' ? themePrimary.main : themePrimary.contrast, // inner circle color
      border: `5px solid`, // this creates the inner circle
      borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main, // outer circle color
    },

    '&:focus + .cnvs-radio-check, &:focus:hover + .cnvs-radio-check': {
      outline: 'transparent',

      ...focusRing({
        width: variant === 'inverse' ? 2 : 1,
        separation: 0,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
      }),
    },

    '&:focus:checked + .cnvs-radio-check, &:focus:hover:checked + .cnvs-radio-check': {
      outline: 'transparent',
      ...focusRing({
        width: 2,
        separation: 2,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
      }),
    },

    ...mouseFocusBehavior({
      '&:focus + .cnvs-radio-check, &:focus:hover + .cnvs-radio-check, &:focus:active + .cnvs-radio-check, &:focus:hover:checked + .cnvs-radio-check, &:focus:active:checked + .cnvs-radio-check': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
      },
    }),
  })
);

const RadioInputWrapper = styled(Flex)<Pick<StyledRadioButtonProps, 'disabled' | 'variant'>>(
  {
    // Hover Ripple element
    '::before': {
      content: "''",
      borderRadius: borderRadius.circle,
      height: radioHeight,
      transition: 'box-shadow 150ms ease-out',
      width: radioWidth,
      pointerEvents: 'none',
    },
  },
  ({variant, disabled}) => ({
    '::before': {
      opacity: variant === 'inverse' ? '0.4' : '1',
    },
    '&:hover:before': {
      boxShadow: !disabled ? `0 0 0 ${rippleRadius}px ${colors.soap200}` : undefined,
    },
  })
);

export interface StyledRadioButtonProps extends ExtractProps<typeof Box, 'input'> {
  variant?: 'inverse' | undefined;
}

/**
 * Use `StyledRadioButton` when you want a styled radio button on its own without using `RadioGroup`.
 * You will need to handle behavior and accessibility.
 */
export const StyledRadioButton = createComponent('input')({
  displayName: 'Radio',
  Component: ({...elemProps}: StyledRadioButtonProps, ref, Element) => {
    return (
      <RadioInputWrapper
        height="18px"
        width="18px"
        flex="0 0 auto"
        {...elemProps} // This ensures our visual testing stories work properly
      >
        <StyledRadioInput
          borderRadius="circle"
          position="absolute"
          margin="zero"
          as={Element}
          type="radio"
          ref={ref}
          {...elemProps}
        />
        <span className="cnvs-radio-check"></span>
      </RadioInputWrapper>
    );
  },
});
