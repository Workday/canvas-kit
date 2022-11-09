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
import {useRadioModel} from './useRadioModel';
import {RadioButtonProps, RadioButtonContext} from './Radio.Button';

const radioBorderRadius = 9;
const radioTapArea = spaceNumbers.m;
const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioDot = 8;
const radioHeight = 18;

const RadioInput = styled('input')<RadioButtonProps & StyledType>(
  {
    borderRadius: radioBorderRadius,
    width: radioTapArea,
    height: radioTapArea,
    margin: 0,
    marginTop: '-3px',
    marginLeft: '-3px',
    position: 'absolute',
    opacity: 0,
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
    '&:hover ~ span:first-of-type': {
      boxShadow: disabled ? undefined : `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },

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

/**
 * Using a wrapper prevents the browser default behavior of trigging
 * :hover on the radio when you hover on it's corresponding label.
 * This stops the ripple from showing when you hover on the label.
 */
const RadioInputWrapper = styled('div')<Pick<RadioButtonProps, 'disabled'>>({
  display: 'flex',
  height: radioHeight,
  width: radioWidth,
});

const RadioRipple = styled('span')<Pick<RadioButtonProps, 'disabled' | 'variant'>>(
  {
    borderRadius: borderRadius.circle,
    boxShadow: `0 0 0 0 ${colors.soap200}`,
    height: radioHeight,
    transition: 'box-shadow 150ms ease-out',
    width: radioWidth,
    position: 'absolute',
    pointerEvents: 'none', // This is a decorative element we don't want it to block clicks to input
  },
  ({variant}) => ({
    opacity: variant === 'inverse' ? '0.4' : '1',
  })
);

const RadioBackground = styled('div')<RadioButtonProps>(
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

const RadioCheck = styled('div')<Pick<RadioButtonProps, 'checked' | 'variant'>>(
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

const useRadioButtonInput = createElemPropsHook(useRadioModel)(
  (model, ref, elemProps: {name?: string; value?: string} = {}) => {
    const radioContext = React.useContext(RadioButtonContext);
    return {
      checked: elemProps.value === model.state.value,
      'aria-checked': elemProps.value === model.state.value,
      onChange(event: React.ChangeEvent) {
        model.events.change(event);
      },
      name: model.state.name,
      disabled: radioContext.disabled,
      variant: radioContext.variant,
      id: radioContext.id,
    };
  }
);
export const RadioButtonInput = createSubcomponent('input')({
  displayName: 'RadioButton.Input',
  modelHook: useRadioModel,
  elemPropsHook: useRadioButtonInput,
})<RadioButtonProps>(({children, ...elemProps}, Element, model) => {
  return (
    <RadioInputWrapper>
      <RadioInput as={Element} type="radio" value={model.state.value} {...elemProps} />
      <RadioRipple variant={elemProps.variant} />
      <RadioBackground
        checked={elemProps.checked}
        disabled={elemProps.disabled}
        variant={elemProps.variant}
      >
        <RadioCheck checked={elemProps.checked} variant={elemProps.variant} />
      </RadioBackground>
    </RadioInputWrapper>
  );
});

export default RadioButtonInput;
