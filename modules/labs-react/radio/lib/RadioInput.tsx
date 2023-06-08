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

const radioBorderRadius = 9;
const radioTapArea = spaceNumbers.m;
const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioDot = 8;
const radioHeight = 18;

const StyledRadioInput = styled(Box.as('input'))<RadioLabelProps & StyledType>(
  {
    '&:focus, &:active': {
      outline: 'none',
    },
  },
  ({
    checked,
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
    /**
     * These selectors are targetting various sibling elements (~) here because
     * their styles need to be connected to changes around the input's state
     * (e.g. hover, focus, etc.).
     *
     * We are choosing not to use component selectors from Emotion in this case.
     * The Babel transforms have been problematic in the past.
     */

    // `span:first-of-type` refers to `RadioRipple`, the light grey
    // element that animates around the component on hover

    // `div:first-of-type` refers to the `RadioBackground`, the visual facade of the
    // input (which is visually hidden)
    '&:hover ~ div:first-of-type': {
      backgroundColor: checked
        ? variant === 'inverse'
          ? colors.frenchVanilla100
          : themePrimary.main
        : disabled
        ? inputColors.disabled.background
        : 'white',
      borderColor: checked
        ? variant === 'inverse'
          ? colors.soap300
          : themePrimary.main
        : disabled
        ? inputColors.disabled.border
        : variant === 'inverse'
        ? colors.soap300
        : inputColors.hoverBorder,
      borderWidth: '1px',
    },
    '&:focus, &focus:hover': {
      '& ~ div:first-of-type': {
        borderWidth: '2px',
        borderColor: variant === 'inverse' ? colors.blackPepper400 : themeFocusOutline,
        boxShadow: 'none',
        ...focusRing({
          width: variant === 'inverse' ? 2 : 0,
          separation: 0,
          animate: false,
          innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : undefined,
        }),
      },
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing({
        separation: 2,
        width: 2,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
      }),
      borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
      borderWidth: '2px',
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
        borderWidth: '1px',
        borderColor: checked
          ? variant === 'inverse'
            ? colors.soap300
            : themePrimary.main
          : inputColors.border,
      },
      '&:focus:hover ~ div:first-of-type, &:focus:active ~ div:first-of-type': {
        borderColor: checked
          ? variant === 'inverse'
            ? colors.soap300
            : themePrimary.main
          : variant === 'inverse'
          ? colors.soap300
          : inputColors.hoverBorder,
      },
    }),
  })
);

const RadioInputWrapper = styled('div')<Pick<RadioLabelProps, 'disabled' | 'variant'>>(
  {
    display: 'flex',
    height: radioHeight,
    width: radioWidth,
    flex: '0 0 auto',
    //Ripple element
    '::before': {
      content: "''",
      borderRadius: borderRadius.circle,
      height: radioHeight,
      transition: 'box-shadow 150ms ease-out',
      width: radioWidth,
      pointerEvents: 'none', //
    },
    '&:hover:before': {
      boxShadow: `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },
  },
  ({variant}) => ({
    '::before': {
      opacity: variant === 'inverse' ? '0.4' : '1',
    },
  })
);

const RadioBackground = styled(Flex)<RadioLabelProps>(
  {
    alignItems: 'center',
    backgroundColor: colors.frenchVanilla100,
    borderRadius: radioBorderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    height: radioHeight,
    justifyContent: 'center',
    padding: '0px 2px',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: radioWidth,
  },
  ({
    checked,
    disabled,
    variant,
    theme: {
      canvas: {
        palette: {primary: themePrimary},
      },
    },
  }) => ({
    borderColor: checked
      ? variant === 'inverse'
        ? colors.soap300
        : themePrimary.main
      : disabled
      ? inputColors.disabled.border
      : variant === 'inverse'
      ? colors.soap300
      : inputColors.border,
    backgroundColor: checked
      ? variant === 'inverse'
        ? colors.frenchVanilla100
        : themePrimary.main
      : disabled
      ? inputColors.disabled.background
      : 'white',
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
  })
);

const RadioCheck = styled('div')<Pick<RadioLabelProps, 'checked' | 'variant'>>(
  {
    borderRadius: radioBorderRadius,
    display: 'flex',
    flexDirection: 'column',
    height: radioDot,
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    width: radioDot,
  },
  ({theme, variant}) => ({
    backgroundColor:
      variant === 'inverse'
        ? theme.canvas.palette.primary.main
        : theme.canvas.palette.primary.contrast,
  }),
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

const useRadioInput = createElemPropsHook(useRadioModel)(
  (model, ref, elemProps: {value?: string} = {}) => {
    const {disabled, variant} = React.useContext(RadioLabelContext);
    return {
      disabled: disabled,
      variant: variant,
      checked:
        elemProps.value === model.state.value || elemProps.value === model.state.initialValue,
      'aria-checked': elemProps.value === model.state.value,
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
})<RadioLabelProps>(({children, ...elemProps}, Element, model) => {
  return (
    <RadioInputWrapper variant={elemProps.variant}>
      <StyledRadioInput
        borderRadius="circle"
        width="m"
        height="m"
        position="absolute"
        top="-3px"
        left="-3px"
        opacity="0"
        margin="zero"
        as={Element}
        type="radio"
        {...elemProps}
      />
      alignItems: 'center', backgroundColor: colors.frenchVanilla100, borderRadius:
      radioBorderRadius, borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display:
      'flex', height: radioHeight, justifyContent: 'center', padding: '0px 2px', pointerEvents:
      'none', position: 'absolute', transition: 'border 200ms ease, background 200ms', width:
      radioWidth,
      <RadioBackground
        id="background"
        alignItems="center"
        backgroundColor="frenchVanilla100"
        borderRadius="circle"
        boxSizing="border-box"
        border="1px solid"
        // height={radi}
        checked={elemProps.checked}
        disabled={elemProps.disabled}
        variant={elemProps.variant}
      >
        <RadioCheck checked={elemProps.checked} variant={elemProps.variant} />
      </RadioBackground>
    </RadioInputWrapper>
  );
});

export default StyledRadioInput;
