import React from 'react';

import {
  StyledType,
  focusRing,
  createComponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';

import {Box, Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  CSProps,
  calc,
  cssVar,
  createStencil,
  px2rem,
  handleCsProp,
} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {RadioLabelContext} from './RadioLabel';

const radioWidth = 18;
const radioHeight = 18;

export interface StyledRadioButtonProps extends CSProps {
  variant?: 'inverse' | undefined;
}

const radioInputStencil = createStencil({
  base: {
    cursor: 'pointer',
    height: px2rem(radioHeight),
    width: px2rem(radioWidth),
    borderRadius: system.shape.round,
    position: 'absolute',
    margin: system.space.zero,
    '&:focus-visible, &.focus, &:active': {
      outline: 'transparent',
    },
    '&:disabled, &.disabled': {
      cursor: 'auto',
      '+ .cnvs-radio-check': {
        borderColor: system.color.border.input.disabled,
        backgroundColor: system.color.bg.alt.softer,
      },
      '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
        borderColor: system.color.border.input.disabled,
      },
      // This creates the inner circle when the Radio is checked.
      // The backgroundColor represents the dot in the middle of the radio.
      // The borderColor represents the border around the middle dot of the radio.
      '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
        backgroundColor: brand.primary.accent, // inner circle background color
        border: `${px2rem(5)} solid ${brand.primary.base}`, // inner circle border color
      },
    },

    // Circle element styles the radio as checked or unchecked
    '+ .cnvs-radio-check': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: system.color.bg.default,
      borderRadius: system.shape.round,
      boxSizing: 'border-box',
      border: `${px2rem(1)} solid ${system.color.border.input.default}`,
      height: px2rem(radioHeight),
      width: px2rem(radioWidth),
      justifyContent: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: system.opacity.full,
    },

    '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
      borderColor: system.color.border.input.strong,
    },

    '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
      borderColor: system.color.border.primary.default,
      ...focusRing({
        width: 1,
        separation: 0,
        animate: false,
        /* TODO: Update to `system.color.border.inverse.default` in v15. */
        innerColor: cssVar(system.color.border.inverse, base.neutral0),
        outerColor: brand.common.focusOutline,
      }),
    },

    '&:focus-visible:hover + .cnvs-radio-check, &.focus:hover + .cnvs-radio-check': {
      outline: 'transparent',
    },
    // This creates the inner circle when the Radio is checked.
    // The backgroundColor represents the dot in the middle of the radio.
    // The borderColor represents the border around the middle dot of the radio.
    '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
      backgroundColor: brand.primary.accent, // inner circle background color
      border: `${px2rem(5)} solid ${brand.primary.base}`, // inner circle border color
    },

    '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
      {
        outline: 'transparent',
        ...focusRing({
          width: 2,
          separation: 2,
          animate: false,
          /* TODO: Update to `system.color.border.inverse.default` in v15. */
          innerColor: cssVar(system.color.border.inverse, base.neutral0),
          outerColor: brand.common.focusOutline,
        }),
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '+ .cnvs-radio-check': {
          backgroundColor: system.color.bg.alt.softer,
          borderColor: system.color.border.input.inverse,
        },
        '&:disabled, &.disabled': {
          opacity: system.opacity.disabled,
          '+ .cnvs-radio-check': {
            backgroundColor: system.color.bg.alt.softer,
            borderColor: system.color.border.input.disabled,
            opacity: system.opacity.disabled,
          },
          // This creates the inner circle when the Radio is checked.
          // The backgroundColor represents the dot in the middle of the radio.
          // The borderColor represents the border around the middle dot of the radio.
          '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
            backgroundColor: brand.primary.base, // inner circle background color
            /* TODO: Update to `system.color.border.inverse.default` in v15. */
            borderColor: cssVar(system.color.border.inverse, base.neutral0), // inner circle border color
          },
        },
        '&:hover + .cnvs-radio-check, &.hover + .cnvs-radio-check': {
          borderColor: system.color.border.input.inverse,
        },
        '&:focus-visible + .cnvs-radio-check, &.focus + .cnvs-radio-check': {
          borderColor: system.color.border.input.inverse,
        },
        // This creates the inner circle when the Radio is checked.
        // The backgroundColor represents the dot in the middle of the radio.
        // The borderColor represents the border around the middle dot of the radio.
        '&:checked + .cnvs-radio-check, &.checked + .cnvs-radio-check': {
          backgroundColor: brand.primary.base, // inner circle background color
          /* TODO: Update to `system.color.border.inverse.default` in v15. */
          borderColor: cssVar(system.color.border.inverse, base.neutral0), // inner circle border color
        },
        '&:focus-visible + .cnvs-radio-check, &:focus-visible:hover + .cnvs-radio-check, &.focus + .cnvs-radio-check, &.focus:hover + .cnvs-radio-check':
          {
            ...focusRing({
              width: 2,
              separation: 0,
              innerColor: system.color.border.contrast.default,
              /* TODO: Update to `system.color.border.inverse.default` in v15. */
              outerColor: cssVar(system.color.border.inverse, base.neutral0),
            }),
          },
        '&:focus-visible:checked + .cnvs-radio-check, &:focus-visible:hover:checked + .cnvs-radio-check, &.focus:checked + .cnvs-radio-check, &.focus:hover:checked + .cnvs-radio-check':
          {
            ...focusRing({
              width: 2,
              separation: 2,
              innerColor: system.color.border.contrast.default,
              /* TODO: Update to `system.color.border.inverse.default` in v15. */
              outerColor: cssVar(system.color.border.inverse, base.neutral0),
            }),
          },
      },
    },
  },
});

const StyledRadioInput = createComponent('input')<StyledRadioButtonProps & StyledType>({
  displayName: 'StyledRadioInput',
  Component: ({children, variant, ...elemProps}: StyledRadioButtonProps, ref, Element) => {
    return <Element ref={ref} {...mergeStyles(elemProps, radioInputStencil({variant}))} />;
  },
});

const radioInputWrapperStyles = createStencil({
  base: {
    height: px2rem(radioHeight),
    width: px2rem(radioWidth),
    flex: '0 0 auto',
    // Hover Ripple element
    '::before': {
      content: "''",
      position: 'absolute',
      borderRadius: system.shape.round,
      height: px2rem(radioHeight),
      transition: 'box-shadow 150ms ease-out',
      width: px2rem(radioWidth),
      pointerEvents: 'none',
      opacity: system.opacity.full,
    },
    '&:hover:before, &.hover:before': {
      boxShadow: `0 0 0 ${calc.subtract(system.space.x2, px2rem(1))} ${system.color.bg.alt.soft}`,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        '::before': {
          opacity: system.opacity.disabled,
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
        <span className="cnvs-radio-check" />
      </RadioInputWrapper>
    );
  },
});
