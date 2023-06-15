import React from 'react';
import {
  styled,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {colors, inputColors, spaceNumbers, borderRadius} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelProps, RadioLabelContext} from './RadioLabel';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioHeight = 18;

const StyledRadioInput = styled(Box.as('input'))<RadioLabelProps & StyledType>(
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
    cursor: disabled ? undefined : 'pointer',
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
    height: '18px',
    width: '18px',

    // Circle element styles the radio as checked or unchecked
    ':after': {
      content: "''",
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
      paddingY: '0px',
      paddingX: '2px',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: disabled && variant === 'inverse' ? '.4' : '1',
    },

    '&:checked:after': {
      backgroundColor: variant === 'inverse' ? themePrimary.main : colors.frenchVanilla100,
      border: `5px solid`,
      borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
    },

    '&:focus:after, &:focus:hover:after': {
      outline: 'transparent',
      ...focusRing({
        width: variant === 'inverse' ? 2 : 2,
        separation: 0,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : colors.blueberry400,
      }),
    },

    '&:focus:checked:after, &:focus:hover:checked:after': {
      outline: 'transparent',
      ...focusRing({
        width: variant === 'inverse' ? 2 : 2,
        separation: 2,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : colors.blueberry400,
      }),
    },

    ...mouseFocusBehavior({
      '&:focus:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
      },
      '&:focus:hover:after, &:focus:active:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
      },
      '&:focus:hover:checked:after, &:focus:active:checked:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
      },
    }),
  })
);

const RadioInputWrapper = styled(Flex)<Pick<RadioLabelProps, 'disabled' | 'variant'>>(
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
      boxShadow: disabled ? undefined : `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },
  })
);

const useRadioInput = createElemPropsHook(useRadioModel)(
  (model, ref, elemProps: {value?: string; checked?: boolean} = {}) => {
    const {disabled, variant} = React.useContext(RadioLabelContext);
    return {
      'aria-describedby': model.state['aria-describedby'],
      disabled: disabled,
      variant: variant,
      checked:
        elemProps.value === model.state.value ||
        elemProps.value === model.state.initialValue ||
        elemProps.checked,
      'aria-checked':
        elemProps.value === model.state.value ||
        elemProps.value === model.state.initialValue ||
        elemProps.checked,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        model.onChange(event);
      },
      name: model.state.name,
    };
  }
);
export const RadioInput = createSubcomponent('input')({
  modelHook: useRadioModel,
  elemPropsHook: useRadioInput,
})<RadioLabelProps>(
  (
    {
      children,
      disabled,
      checked,
      value,
      name,
      'aria-checked': ariaChecked,
      'aria-describedby': ariaDescribedby,
      ...elemProps
    },
    Element,
    model
  ) => {
    return (
      <RadioInputWrapper
        height="18px"
        width="18px"
        flex="0 0 auto"
        disabled={disabled}
        {...elemProps}
      >
        <StyledRadioInput
          borderRadius="circle"
          position="absolute"
          margin="zero"
          as={Element}
          value={value}
          name={name}
          type="radio"
          checked={checked}
          aria-checked={ariaChecked}
          aria-describedby={ariaDescribedby}
          disabled={disabled}
          {...elemProps}
        />
      </RadioInputWrapper>
    );
  }
);
