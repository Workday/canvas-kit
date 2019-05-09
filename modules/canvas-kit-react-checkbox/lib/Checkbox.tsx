import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import canvas, {
  colors,
  iconColors,
  inputColors,
  spacingNumbers as spacing,
} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
}

const checkboxBorderRadius = 2;
const checkboxHeight = 18;
const checkboxTapArea = spacing.m;
const checkboxContainerHeight = checkboxTapArea + spacing.xxs;
const checkboxLabelDistance = spacing.xs;
const checkboxWidth = 18;
const rippleRadius = (40 - checkboxWidth) / 2;

const CheckboxContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: checkboxContainerHeight,
});

/**
 * Using a wrapper prevents the browser default behavior of trigging
 * :hover on the checkbox when you hover on it's corresponding label.
 * This stops the ripple from showing when you hover on the label.
 */
const CheckboxInputWrapper = styled('div')<Pick<CheckboxProps, 'disabled'>>(
  {
    height: checkboxHeight,
    '&::after': {
      borderRadius: 999,
      boxShadow: '0 0 0 0 ' + colors.soap200,
      content: '""',
      display: 'inline-block',
      height: checkboxHeight,
      transition: 'box-shadow 150ms ease-out',
      width: checkboxWidth,
      zIndex: 1,
    },
  },
  ({disabled}) => ({
    '&:hover::after': {
      boxShadow: disabled ? undefined : '0 0 0 ' + rippleRadius + 'px ' + colors.soap200,
    },
  })
);

/**
 * Note: `~ div:first-of-type` refers to `CheckboxBackground`
 * and was easier to use than a component selector in this case.
 */
const CheckboxInput = styled('input')<CheckboxProps>(
  {
    borderRadius: checkboxBorderRadius,
    width: checkboxTapArea,
    height: checkboxTapArea,
    margin: 0,
    marginTop: '-3px',
    marginLeft: '-3px',
    position: 'absolute',
    opacity: 0,
    '&:focus, &:active': {
      outline: 'none',
    },
    '&:focus, &focus:hover': {
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
      borderColor: disabled ? inputColors.disabled.border : colors.blueberry400,
    },
    [`[data-whatinput="mouse"] &:focus ~ div:first-of-type,
      [data-whatinput="touch"] &:focus ~ div:first-of-type,
      [data-whatinput="pointer"] &:focus ~ div:first-of-type`]: {
      ...focusRing(0, 0),
      borderWidth: '1px',
      borderColor: checked ? colors.blueberry400 : inputColors.border,
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
    },
  })
);

const CheckboxBackground = styled('div')<CheckboxProps>(
  {
    alignItems: 'center',
    backgroundColor: colors.frenchVanilla100,
    borderRadius: checkboxBorderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    height: checkboxHeight,
    justifyContent: 'center',
    padding: '0px 2px',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: checkboxWidth,
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

const CheckboxCheck = styled('div')<Pick<CheckboxProps, 'checked'>>(
  {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'transform 200ms ease, opacity 200ms ease',
  },
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

const CheckboxLabel = styled('label')<{disabled?: boolean}>(
  {
    ...canvas.type.body,
    paddingLeft: checkboxLabelDistance,
  },
  ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
);

export default class Checkbox extends React.Component<CheckboxProps> {
  public static defaultProps = {
    checked: false,
    label: '',
  };

  public render() {
    const {checked, disabled, id, inputRef, label, onChange, value, ...otherProps} = this.props;

    return (
      <CheckboxContainer>
        <CheckboxInputWrapper disabled={disabled}>
          <CheckboxInput
            checked={checked}
            disabled={disabled}
            id={id}
            innerRef={inputRef}
            onChange={onChange}
            type="checkbox"
            value={value}
            {...otherProps}
          />
          <CheckboxBackground checked={checked} disabled={disabled}>
            <CheckboxCheck checked={checked}>
              <SystemIcon icon={checkSmallIcon} color={iconColors.inverse} />
            </CheckboxCheck>
          </CheckboxBackground>
        </CheckboxInputWrapper>
        {label && (
          <CheckboxLabel htmlFor={id} disabled={disabled}>
            {label}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
    );
  }
}
