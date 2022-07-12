import React from 'react';
import {
  styled,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {colors, inputColors, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {RadioModel} from './useRadioModel';

export interface RadioButtonProps extends Themeable {
  model?: RadioModel;
  children?: React.ReactNode;
  /**
   * If true, set the Radio button to the checked state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Radio button to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying radio input element. This is required if `label` is defined as a non-empty string.
   * @default A uniquely generated id
   */
  id?: string;
  /**
   * The text of the Radio button label.
   * @default ''
   */
  label?: string;
  /**
   * The name of the Radio button.
   */
  name?: string;
  /**
   * The function called when the Radio button state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Radio button.
   */
  value?: string;
}

const radioBorderRadius = 9;
const radioTapArea = spaceNumbers.m;
const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;

const RadioButtonInput = styled('input')<RadioButtonProps & StyledType>(
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
        ? themePrimary.main
        : disabled
        ? inputColors.disabled.background
        : 'white',
      borderColor: checked
        ? themePrimary.main
        : disabled
        ? inputColors.disabled.border
        : inputColors.hoverBorder,
      borderWidth: '1px',
    },
    '&:focus, &focus:hover': {
      '& ~ div:first-of-type': {
        borderColor: checked ? themePrimary.main : themeFocusOutline,
        borderWidth: '2px',
      },
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing({separation: 2, outerColor: themeFocusOutline}),
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        ...focusRing({width: 0, outerColor: themeFocusOutline}),
        borderWidth: '1px',
        borderColor: checked ? themePrimary.main : inputColors.border,
      },
      '&:focus:hover ~ div:first-of-type, &:focus:active ~ div:first-of-type': {
        borderColor: checked ? themePrimary.main : inputColors.hoverBorder,
      },
    }),
  })
);

export default RadioButtonInput;
