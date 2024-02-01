import React from 'react';
import {
  StyledType,
  focusRing,
  createComponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';

import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {RadioLabelContext} from './RadioLabel';

const radioWidth = 18;
const radioHeight = 18;

export interface StyledRadioButtonProps extends CSProps {
  variant?: 'inverse' | undefined;
}

const radioInputStyles = createStencil({
  base: {
    cursor: 'pointer',
    opacity: '1',
    height: '18px',
    width: '18px',
    borderRadius: system.shape.round,
    position: 'absolute',
    margin: '0',
    '&:focus-visible, &.focus, &:active': {
      outline: 'transparent',
    },
    '&:disabled, &.disabled': {
      cursor: 'auto',
      '+ .cnvs-radio-check': {
        borderColor: base.licorice100,
        backgroundColor: base.soap100,
      },
      '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
        borderColor: base.licorice100,
      },
      '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
        backgroundColor: brand.primary.accent, // inner circle color
        border: `5px solid`, // this creates the inner circle
        borderColor: brand.primary.base, // outer circle color
      },
    },

    // Circle element styles the radio as checked or unchecked
    '+ .cnvs-radio-check': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: base.frenchVanilla100,
      borderRadius: '999px',
      boxSizing: 'border-box',
      border: `1px solid`,
      borderColor: base.licorice200,
      height: '18px',
      width: '18px',
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: '1',
    },

    '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
      borderColor: base.licorice500,
    },

    '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
      borderColor: base.blueberry400,
      ...focusRing({
        width: 1,
        separation: 0,
        animate: false,
        innerColor: base.frenchVanilla100,
        outerColor: brand.common.focusOutline,
      }),
    },

    '&:focus-visible:hover + .cnvs-radio-check, &.focus:hover + .cnvs-radio-check': {
      outline: 'transparent',
    },

    '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
      backgroundColor: brand.primary.accent, // inner circle color
      border: `5px solid`, // this creates the inner circle
      borderColor: brand.primary.base, // outer circle color
    },

    '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
      {
        outline: 'transparent',
        ...focusRing({
          width: 2,
          separation: 2,
          animate: false,
          innerColor: base.frenchVanilla100,
          outerColor: brand.common.focusOutline,
        }),
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '+ .cnvs-radio-check': {
          backgroundColor: base.soap100,
          borderColor: base.soap300,
        },
        '&:disabled, &.disabled': {
          opacity: '0.4',
          '+ .cnvs-radio-check': {
            backgroundColor: base.soap100,
            borderColor: base.licorice100,
            opacity: '0.4',
          },
          '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
            backgroundColor: brand.primary.base, // inner circle color
            borderColor: base.frenchVanilla100, // outer circle color
          },
        },
        '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
          borderColor: base.soap300,
        },
        '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
          borderColor: base.soap300,
        },
        '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
          backgroundColor: brand.primary.base, // inner circle color
          borderColor: base.frenchVanilla100, // outer circle color
        },
        '&:focus-visible + .cnvs-radio-check, &:focus-visible:hover + .cnvs-radio-check, &.focus + .cnvs-radio-check, &.focus:hover + .cnvs-radio-check':
          {
            ...focusRing({
              width: 2,
              separation: 0,
              innerColor: base.blackPepper400,
              outerColor: base.frenchVanilla100,
            }),
          },
        '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
          {
            ...focusRing({
              width: 2,
              separation: 2,
              innerColor: base.blackPepper400,
              outerColor: base.frenchVanilla100,
            }),
          },
      },
    },
  },
});

const StyledRadioInput = createComponent('input')<StyledRadioButtonProps & StyledType>({
  displayName: 'StyledRadioInput',
  Component: ({children, variant, ...elemProps}: StyledRadioButtonProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, radioInputStyles({variant}))} />;
  },
});

const radioInputWrapperStyles = createStencil({
  base: {
    height: '18px',
    width: '18px',
    flex: '0 0 auto',
    // Hover Ripple element
    '::before': {
      content: "''",
      position: 'absolute',
      borderRadius: system.shape.round,
      height: radioHeight,
      transition: 'box-shadow 150ms ease-out',
      width: radioWidth,
      pointerEvents: 'none',
      opacity: '1',
    },
    '&:hover:before, &.hover:before': {
      boxShadow: `0 0 0 calc((${system.space.x8} - ${radioWidth}px) / 2) ${base.soap200}`,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        '::before': {
          opacity: '0.4',
        },
      },
    },
    disabled: {
      true: {
        '&:hover:before, &.hover:before': {
          boxShadow: 'none',
          cursor: 'auto',
        },
      },
    },
  },
});

const RadioInputWrapper = createComponent(Flex)<
  Pick<StyledRadioButtonProps, 'disabled' | 'variant'>
>({
  displayName: 'RadioInputWrapper',
  Component: ({children, variant, ...elemProps}: StyledRadioButtonProps, ref, Element) => {
    const {disabled} = React.useContext(RadioLabelContext);
    return (
      <Element ref={ref} {...handleCsProp(elemProps, radioInputWrapperStyles({variant, disabled}))}>
        {children}
      </Element>
    );
  },
});

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
        {...elemProps} // This ensures our visual testing stories work properly
      >
        <StyledRadioInput type="radio" {...elemProps} />
        <span className="cnvs-radio-check" />
      </RadioInputWrapper>
    );
  },
});
