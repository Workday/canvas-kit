import React from 'react';

import {ExtractProps, StyledType, createComponent} from '@workday/canvas-kit-react/common';
import {Box, Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {RadioLabelContext} from './RadioLabel';

const radioWidth = 18;
const radioHeight = 18;

export interface StyledRadioButtonProps extends CSProps {
  variant?: 'inverse' | undefined;
}

export const radioInputStencil = createStencil({
  parts: {
    check: 'cnvs-radio-check',
  },
  base: {
    cursor: 'pointer',
    height: cssVar(base.legacy.size225, px2rem(radioHeight)),
    width: cssVar(base.legacy.size225, px2rem(radioWidth)),
    borderRadius: system.legacy.shape.full,
    position: 'absolute',
    margin: 0,
    '&:focus-visible, &.focus, &:active': {
      outline: 'transparent',
    },
    '&:disabled, &.disabled': {
      cursor: 'auto',
      opacity: system.opacity.disabled,
      // This creates the inner circle when the Radio is checked.
      // The backgroundColor represents the dot in the middle of the radio.
      // The borderColor represents the border around the middle dot of the radio.
      '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
        backgroundColor: system.legacy.color.surface.default, // inner circle background color
        border: `${px2rem(5)} solid ${system.legacy.color.brand.accent.primary}`, // inner circle border color
      },
    },

    // Circle element styles the radio as checked or unchecked
    '+ .cnvs-radio-check': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: system.color.bg.default,
      boxSizing: 'border-box',
      border: `${px2rem(1)} solid ${system.color.border.input.default}`,
      height: cssVar(base.legacy.size225, px2rem(radioHeight)),
      width: cssVar(base.legacy.size225, px2rem(radioWidth)),
      borderRadius: system.legacy.shape.full,
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: system.opacity.full,
    },

    '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
      borderColor: system.color.border.input.default,
    },

    '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
      outline: 'transparent',
      borderColor: system.legacy.color.brand.border.primary,
      boxShadow: `0 0 0 0px ${system.legacy.color.focus.inverse} ,0 0 0 1px ${system.legacy.color.brand.focus.primary} `,
    },
    // This creates the inner circle when the Radio is checked.
    // The backgroundColor represents the dot in the middle of the radio.
    // The borderColor represents the border around the middle dot of the radio.
    '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
      backgroundColor: system.legacy.color.surface.default, // inner circle background color
      border: `${px2rem(5)} solid ${system.legacy.color.brand.accent.primary}`, // inner circle border color
    },

    '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
      {
        outline: 'transparent',
        boxShadow: `0 0 0 ${px2rem(2)}  ${system.legacy.color.focus.inverse} ,0 0 0 ${px2rem(4)}  ${system.legacy.color.brand.focus.primary} `,
      },
  },
  modifiers: {
    variant: {
      inverse: ({checkPart}) => ({
        [`+ ${checkPart}`]: {
          backgroundColor: system.legacy.color.surface.inverse,
          borderColor: system.legacy.color.border.inverse.default,
        },
        '&:disabled, &.disabled': {
          opacity: system.opacity.disabled,
          [`+ ${checkPart}`]: {
            backgroundColor: system.legacy.color.surface.inverse,
            borderColor: system.legacy.color.focus.inverse,
            // opacity: system.opacity.disabled,
          },
          // This creates the inner circle when the Radio is checked.
          // The backgroundColor represents the dot in the middle of the radio.
          // The borderColor represents the border around the middle dot of the radio.
          [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
            backgroundColor: system.legacy.color.brand.accent.primary, // inner circle background color
            borderColor: system.legacy.color.border.inverse.default, // inner circle border color
          },
        },
        [`&:hover + ${checkPart}, &.hover + ${checkPart}`]: {
          borderColor: system.legacy.color.border.inverse.default,
        },
        [`&:focus-visible + ${checkPart}, &.focus + ${checkPart}`]: {
          borderColor: system.legacy.color.border.inverse.default,
        },
        // This creates the inner circle when the Radio is checked.
        // The backgroundColor represents the dot in the middle of the radio.
        // The borderColor represents the border around the middle dot of the radio.
        [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
          backgroundColor: system.legacy.color.brand.accent.primary, // inner circle background color
          borderColor: system.legacy.color.border.inverse.default, // inner circle border color
        },
        [`&:focus-visible + ${checkPart}, &:focus-visible:hover + ${checkPart}, &.focus + ${checkPart}, &.focus:hover + ${checkPart}`]:
          {
            boxShadow: `0 0 0 ${px2rem(2)}  ${system.legacy.color.brand.border.primary}`,
          },
        [`&:focus-visible:checked + ${checkPart}, &:focus-visible:hover:checked + ${checkPart}, &.focus:checked + ${checkPart}, &.focus:hover:checked + ${checkPart}`]:
          {
            boxShadow: `0 0 0 ${px2rem(2)}  ${system.color.border.contrast.default} ,0 0 0 ${px2rem(4)}  ${system.legacy.color.focus.inverse} `,
          },
      }),
    },
  },
});

const StyledRadioInput = createComponent('input')<StyledRadioButtonProps & StyledType>({
  displayName: 'StyledRadioInput',
  Component: ({children, variant, ...elemProps}: StyledRadioButtonProps, ref, Element) => {
    return <Element ref={ref} {...mergeStyles(elemProps, radioInputStencil({variant}))} />;
  },
});

export const radioInputWrapperStencil = createStencil({
  base: {
    height: cssVar(base.legacy.size225, px2rem(radioHeight)),
    width: cssVar(base.legacy.size225, px2rem(radioWidth)),
    flex: '0 0 auto',
    // Hover Ripple element
    '::before': {
      content: "''",
      position: 'absolute',
      borderRadius: system.legacy.shape.full,
      height: cssVar(base.legacy.size225, px2rem(radioHeight)),
      transition: 'box-shadow 150ms ease-out',
      width: cssVar(base.legacy.size225, px2rem(radioWidth)),
      pointerEvents: 'none',
      opacity: system.opacity.full,
    },
    '&:hover:before, &.hover:before': {
      boxShadow: `0 0 0 ${px2rem(7)} ${system.legacy.color.surface.overlay.hover.default}`,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        '&:hover:before, &.hover:before': {
          boxShadow: `0 0 0 ${px2rem(7)} ${system.legacy.color.surface.overlay.hover.inverse}`,
        },
      },
    },
    disabled: {
      true: {
        opacity: system.opacity.disabled,
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
      <Element
        ref={ref}
        {...handleCsProp(elemProps, radioInputWrapperStencil({variant, disabled}))}
      >
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
  Component: (
    {className, variant, disabled, ...elemProps}: StyledRadioButtonProps,
    ref,
    Element
  ) => {
    return (
      <RadioInputWrapper className={className} variant={variant} disabled={disabled}>
        <StyledRadioInput
          as={Element}
          ref={ref}
          type="radio"
          className={className}
          variant={variant}
          disabled={disabled}
          {...elemProps}
        />
        <span {...radioInputStencil.parts.check} className="cnvs-radio-check" />
      </RadioInputWrapper>
    );
  },
});
