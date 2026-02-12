import React from 'react';

import {
  ExtractProps,
  StyledType,
  createComponent,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {Box, Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {RadioLabelContext} from './RadioLabel';

const radioWidth = 18;
const radioHeight = 18;

export interface StyledRadioButtonProps extends CSProps {
  variant?: 'inverse' | undefined;
}

const radioInputStencil = createStencil({
  parts: {
    check: 'cnvs-radio-check',
  },
  base: {
    cursor: 'pointer',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, px2rem(radioHeight)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(base.size225, px2rem(radioWidth)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
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
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(base.size225, px2rem(radioHeight)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      width: cssVar(base.size225, px2rem(radioWidth)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.full, system.shape.round),
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: system.opacity.full,
    },

    '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.border.input.default, system.color.border.input.strong),
    },

    '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
      outline: 'transparent',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.alt.softer),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        '&:disabled, &.disabled': {
          opacity: system.opacity.disabled,
          [`+ ${checkPart}`]: {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.alt.softer),
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            borderColor: cssVar(system.color.focus.inverse, base.neutral0),
            // opacity: system.opacity.disabled,
          },
          // This creates the inner circle when the Radio is checked.
          // The backgroundColor represents the dot in the middle of the radio.
          // The borderColor represents the border around the middle dot of the radio.
          [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base), // inner circle background color
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            borderColor: cssVar(system.color.border.inverse.default, base.neutral0), // inner circle border color
          },
        },
        [`&:hover + ${checkPart}, &.hover + ${checkPart}`]: {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        [`&:focus-visible + ${checkPart}, &.focus + ${checkPart}`]: {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
        },
        // This creates the inner circle when the Radio is checked.
        // The backgroundColor represents the dot in the middle of the radio.
        // The borderColor represents the border around the middle dot of the radio.
        [`&:checked + ${checkPart}, &.checked + ${checkPart}`]: {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base), // inner circle background color
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.border.inverse.default, base.neutral0), // inner circle border color
        },
        [`&:focus-visible + ${checkPart}, &:focus-visible:hover + ${checkPart}, &.focus + ${checkPart}, &.focus:hover + ${checkPart}`]:
          {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            boxShadow: `0 0 0 ${px2rem(2)}  ${cssVar(system.color.brand.border.primary, system.color.border.primary.default)}`,
          },
        [`&:focus-visible:checked + ${checkPart}, &:focus-visible:hover:checked + ${checkPart}, &.focus:checked + ${checkPart}, &.focus:hover:checked + ${checkPart}`]:
          {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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

const radioInputWrapperStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, px2rem(radioHeight)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(base.size225, px2rem(radioWidth)),
    flex: '0 0 auto',
    // Hover Ripple element
    '::before': {
      content: "''",
      position: 'absolute',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.full, system.shape.round),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(base.size225, px2rem(radioHeight)),
      transition: 'box-shadow 150ms ease-out',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      width: cssVar(base.size225, px2rem(radioWidth)),
      pointerEvents: 'none',
      opacity: system.opacity.full,
    },
    '&:hover:before, &.hover:before': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      boxShadow: `0 0 0 ${px2rem(7)} ${cssVar(system.color.surface.overlay.hover.default, system.color.bg.alt.soft)}`,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        '&:hover:before, &.hover:before': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
