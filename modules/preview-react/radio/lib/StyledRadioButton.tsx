import React from 'react';

import {ExtractProps, StyledType, createComponent} from '@workday/canvas-kit-react/common';
import {Box, Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

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
    height: cssVar(base.size225, px2rem(radioHeight)),
    width: cssVar(base.size225, px2rem(radioWidth)),
    borderRadius: system.shape.full,
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
        backgroundColor: cssVar(system.color.surface.default, brand.primary.accent), // inner circle background color
        border: `${px2rem(5)} solid ${cssVar(system.color.brand.accent.primary, brand.primary.base)}`, // inner circle border color
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
      height: cssVar(base.size225, px2rem(radioHeight)),
      width: cssVar(base.size225, px2rem(radioWidth)),
      borderRadius: system.shape.full,
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: system.opacity.full,
    },

    '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
      borderColor: cssVar(system.color.border.input.default, system.color.border.input.strong),
    },

    '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
      outline: 'transparent',
      borderColor: cssVar(system.color.brand.border.primary, system.color.border.primary.default),
      boxShadow: `0 0 0 0px ${cssVar(system.color.focus.inverse, base.neutral0)} ,0 0 0 1px ${cssVar(system.color.brand.focus.primary, brand.common.focusOutline)} `,
    },
    // This creates the inner circle when the Radio is checked.
    // The backgroundColor represents the dot in the middle of the radio.
    // The borderColor represents the border around the middle dot of the radio.
    '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
      backgroundColor: cssVar(system.color.surface.default, brand.primary.accent), // inner circle background color
      border: `${px2rem(5)} solid ${cssVar(system.color.brand.accent.primary, brand.primary.base)}`, // inner circle border color
    },

    '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
      {
        outline: 'transparent',
        boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.focus.inverse, base.neutral0)} ,0 0 0 ${px2rem(4)}  ${cssVar(system.color.brand.focus.primary, brand.common.focusOutline)} `,
      },
  },
  modifiers: {
    variant: {
      inverse: ({checkPart}) => ({
        [`+ ${checkPart}`]: {
          backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.alt.softer),
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        '&:disabled, &.disabled': {
          opacity: system.opacity.disabled,
          [`+ ${checkPart}`]: {
            backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.alt.softer),
            borderColor: cssVar(system.color.focus.inverse, base.neutral0),
            // opacity: system.opacity.disabled,
          },
          // This creates the inner circle when the Radio is checked.
          // The backgroundColor represents the dot in the middle of the radio.
          // The borderColor represents the border around the middle dot of the radio.
          [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
            backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base), // inner circle background color
            borderColor: cssVar(system.color.border.inverse.default, base.neutral0), // inner circle border color
          },
        },
        [`&:hover + ${checkPart}, &.hover + ${checkPart}`]: {
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        [`&:focus-visible + ${checkPart}, &.focus + ${checkPart}`]: {
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        // This creates the inner circle when the Radio is checked.
        // The backgroundColor represents the dot in the middle of the radio.
        // The borderColor represents the border around the middle dot of the radio.
        [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
          backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base), // inner circle background color
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0), // inner circle border color
        },
        [`&:focus-visible + ${checkPart}, &:focus-visible:hover + ${checkPart}, &.focus + ${checkPart}, &.focus:hover + ${checkPart}`]:
          {
            boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.brand.border.primary, system.color.border.primary.default)}`,
          },
        [`&:focus-visible:checked + ${checkPart}, &:focus-visible:hover:checked + ${checkPart}, &.focus:checked + ${checkPart}, &.focus:hover:checked + ${checkPart}`]:
          {
            boxShadow: `0 0 0 ${px2rem(2)}  ${system.color.border.contrast.default} ,0 0 0 ${px2rem(4)}  ${cssVar(system.color.focus.inverse, base.neutral0)} `,
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
    height: cssVar(base.size225, px2rem(radioHeight)),
    width: cssVar(base.size225, px2rem(radioWidth)),
    flex: '0 0 auto',
    // Hover Ripple element
    '::before': {
      content: "''",
      position: 'absolute',
      borderRadius: system.shape.full,
      height: cssVar(base.size225, px2rem(radioHeight)),
      transition: 'box-shadow 150ms ease-out',
      width: cssVar(base.size225, px2rem(radioWidth)),
      pointerEvents: 'none',
      opacity: system.opacity.full,
    },
    '&:hover:before, &.hover:before': {
      boxShadow: `0 0 0 ${px2rem(7)} ${cssVar(system.color.surface.overlay.hover.default, system.color.bg.alt.soft)}`,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        '&:hover:before, &.hover:before': {
          boxShadow: `0 0 0 ${px2rem(7)} ${cssVar(system.color.surface.overlay.hover.inverse, system.color.bg.alt.soft)}`,
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
