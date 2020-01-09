import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import canvas, {
  borderRadius,
  colors,
  inputColors,
  spacingNumbers as spacing,
} from '@workday/canvas-kit-react-core';
import uuid from 'uuid/v4';

export interface RadioProps extends Themeable, React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  name?: string;
  onChange?: (e: React.SyntheticEvent) => void;
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
const RadioInputWrapper = styled('div')<Pick<RadioProps, 'disabled'>>(
  {
    display: 'flex',
    height: radioHeight,
    width: radioWidth,
    '&::after': {
      borderRadius: borderRadius.circle,
      boxShadow: '0 0 0 0 ' + colors.soap200,
      content: '""',
      display: 'inline-block',
      height: radioHeight,
      transition: 'box-shadow 150ms ease-out',
      width: radioWidth,
    },
  },
  ({disabled}) => ({
    '&:hover::after': {
      boxShadow: disabled ? undefined : '0 0 0 ' + rippleRadius + 'px ' + colors.soap200,
    },
  })
);

/**
 * Note: `~ div:first-of-type` refers to `RadioBackground`
 * and was easier to use than a component selector in this case.
 */
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
    '&:focus, &:active, &focus:hover, &:active:hover': {
      '& ~ div:first-of-type': {
        borderColor: colors.blueberry400,
        borderWidth: '2px',
        zIndex: 2,
      },
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing(2, 2),
    },
  },
  ({checked, disabled}) => ({
    cursor: disabled ? undefined : 'pointer',
    '&:focus:hover ~ div:first-of-type': {
      borderColor: disabled ? inputColors.border : colors.blueberry400,
    },
    [`[data-whatinput="mouse"] &:focus ~ div:first-of-type,
      [data-whatinput="touch"] &:focus ~ div:first-of-type,
      [data-whatinput="pointer"] &:focus ~ div:first-of-type`]: {
      ...focusRing(0, 0),
      borderWidth: '1px',
      borderColor: checked ? colors.blueberry400 : inputColors.border,
      '&:hover': {
        borderColor: checked ? colors.blueberry400 : inputColors.hoverBorder,
      },
    },
    [`[data-whatinput="mouse"] &:hover ~ div:first-of-type`]: {
      backgroundColor: checked
        ? colors.blueberry400
        : disabled
        ? inputColors.disabled.background
        : 'white',
      borderColor: checked
        ? colors.blueberry400
        : disabled
        ? inputColors.disabled.border
        : inputColors.hoverBorder,
      borderWidth: '1px',
    },
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
  ({checked, disabled}) => ({
    borderColor: checked
      ? colors.blueberry400
      : disabled
      ? inputColors.disabled.border
      : inputColors.border,
    backgroundColor: checked
      ? colors.blueberry400
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
