import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {themedFocusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import canvas, {
  borderRadius,
  colors,
  inputColors,
  spacingNumbers as spacing,
} from '@workday/canvas-kit-react-core';
import uuid from 'uuid/v4';

export interface RadioProps extends Themeable, React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * If true, set the Radio button to the checked state.
   * @default false
   */
  checked: boolean;
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
   * The ref to the underlying radio input element. Use this to imperatively check or focus the Radio button.
   */
  inputRef?: React.Ref<HTMLInputElement>;
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
  onChange?: (e: React.SyntheticEvent) => void;
  /**
   * The value of the Radio button.
   */
  value?: string;
}

const radioBorderRadius = 9;
const radioDot = 8;
const radioHeight = 18;
const radioTapArea = spacing.m;
const radioContainerHeight = radioTapArea;
const radioLabelDistance = spacing.xs;
const radioWidth = 18;
const rippleRadius = (spacing.l - radioWidth) / 2;

const RadioContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: radioContainerHeight,
  position: 'relative',
});

/**
 * Using a wrapper prevents the browser default behavior of trigging
 * :hover on the radio when you hover on it's corresponding label.
 * This stops the ripple from showing when you hover on the label.
 */
const RadioInputWrapper = styled('div')<Pick<RadioProps, 'disabled'>>({
  display: 'flex',
  height: radioHeight,
  width: radioWidth,
});

const RadioRipple = styled('span')<Pick<RadioProps, 'disabled'>>({
  borderRadius: borderRadius.circle,
  boxShadow: `0 0 0 0 ${colors.soap200}`,
  height: radioHeight,
  transition: 'box-shadow 150ms ease-out',
  width: radioWidth,
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: -1,
});

const RadioInput = styled('input')<RadioProps>(
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
  ({checked, disabled, theme}) => ({
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
        ? theme.palette.primary.main
        : disabled
        ? inputColors.disabled.background
        : 'white',
      borderColor: checked
        ? theme.palette.primary.main
        : disabled
        ? inputColors.disabled.border
        : inputColors.hoverBorder,
      borderWidth: '1px',
    },
    '&:focus, &focus:hover': {
      '& ~ div:first-of-type': {
        borderColor: checked ? theme.palette.primary.main : theme.palette.common.focusOutline,
        borderWidth: '2px',
      },
    },
    '&:checked:focus ~ div:first-of-type': {
      ...themedFocusRing(theme, {width: 2, separation: 2}),
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        ...themedFocusRing(theme, {width: 0}),
        borderWidth: '1px',
        borderColor: checked ? theme.palette.primary.main : inputColors.border,
      },
      '&:focus:hover ~ div:first-of-type, &:focus:active ~ div:first-of-type': {
        borderColor: checked ? theme.palette.primary.main : inputColors.hoverBorder,
      },
    }),
  })
);

const RadioBackground = styled('div')<RadioProps>(
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
  ({checked, disabled, theme}) => ({
    borderColor: checked
      ? theme.palette.primary.main
      : disabled
      ? inputColors.disabled.border
      : inputColors.border,
    backgroundColor: checked
      ? theme.palette.primary.main
      : disabled
      ? inputColors.disabled.background
      : 'white',
  })
);

const RadioCheck = styled('div')<Pick<RadioProps, 'checked'>>(
  {
    backgroundColor: colors.frenchVanilla100,
    borderRadius: radioBorderRadius,
    display: 'flex',
    flexDirection: 'column',
    height: radioDot,
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    width: radioDot,
  },
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

const RadioLabel = styled('label')<{disabled?: boolean}>(
  {
    ...canvas.type.body,
    paddingLeft: radioLabelDistance,
  },
  ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
);

export default class Radio extends React.Component<RadioProps> {
  public static defaultProps = {
    checked: false,
    label: '',
  };

  private id = uuid();

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      checked,
      disabled,
      id = this.id,
      inputRef,
      label,
      name,
      onChange,
      value,
      ...elemProps
    } = this.props;

    return (
      <RadioContainer>
        <RadioInputWrapper disabled={disabled}>
          <RadioInput
            checked={checked}
            disabled={disabled}
            id={id}
            ref={inputRef}
            name={name}
            onChange={onChange}
            type="radio"
            value={value}
            aria-checked={checked}
            {...elemProps}
          />
          <RadioRipple />
          <RadioBackground checked={checked} disabled={disabled}>
            <RadioCheck checked={checked} />
          </RadioBackground>
        </RadioInputWrapper>
        {label && (
          <RadioLabel htmlFor={id} disabled={disabled}>
            {label}
          </RadioLabel>
        )}
      </RadioContainer>
    );
  }
}
