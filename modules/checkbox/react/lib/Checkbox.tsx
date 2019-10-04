import * as React from 'react';
import styled from 'react-emotion';
import {ErrorType, focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import canvas, {
  borderRadius,
  colors,
  iconColors,
  inputColors,
  spacingNumbers as spacing,
} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import uuid from 'uuid/v4';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  error?: ErrorType;
}

const checkboxHeight = 18;
const checkboxTapArea = spacing.m;
const checkboxContainerHeight = checkboxTapArea;
const checkboxLabelDistance = spacing.xs;
const checkboxWidth = 18;
const rippleRadius = (spacing.l - checkboxWidth) / 2;

const CheckboxContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: checkboxContainerHeight,
  position: 'relative',
});

/**
 * Using a wrapper prevents the browser default behavior of trigging
 * :hover on the checkbox when you hover on it's corresponding label.
 * This stops the ripple from showing when you hover on the label.
 */
const CheckboxInputWrapper = styled('div')<Pick<CheckboxProps, 'disabled'>>(
  {
    height: checkboxHeight,
    width: checkboxWidth,
    marginTop: '3px',
    alignSelf: 'flex-start',
    '&::after': {
      borderRadius: borderRadius.circle,
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
    borderRadius: borderRadius.s,
    width: checkboxTapArea,
    height: checkboxTapArea,
    margin: 0,
    marginTop: '-3px',
    marginLeft: '-3px',
    position: 'absolute',
    opacity: 0,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    // States
    '&:not(:checked):not(:disabled):not(:focus):hover ~ div:first-of-type': {
      borderColor: inputColors.hoverBorder,
    },
    '&:checked ~ div:first-of-type': {
      borderColor: colors.blueberry400,
      backgroundColor: colors.blueberry400,
    },
    '&:disabled ~ div:first-of-type': {
      borderColor: inputColors.disabled.border,
      backgroundColor: inputColors.disabled.background,
    },
    '&:disabled:checked ~ div:first-of-type': {
      borderColor: colors.blueberry200,
      backgroundColor: colors.blueberry200,
    },

    // Focus
    '&:focus, &:active': {
      outline: 'none',
    },
    '&:focus ~ div:first-of-type': {
      borderColor: colors.blueberry400,
      borderWidth: '2px',
      zIndex: 2,
      boxShadow: 'none',
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing(2, 2, false),
      '& span': {
        marginLeft: '-7px',
      },
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        border: `1px solid ${inputColors.border}`,
        boxShadow: 'none',
        '& span': {
          marginLeft: '-6px',
        },
      },
      '&:checked ~ div:first-of-type': {
        borderColor: colors.blueberry400,
      },
      '&:disabled:checked ~ div:first-of-type': {
        borderColor: colors.blueberry200,
        backgroundColor: colors.blueberry200,
      },
    }),
  },
  ({error}) => {
    let errorRingColor;
    let errorRingBorderColor = 'transparent';

    if (error === ErrorType.Error) {
      errorRingColor = inputColors.error.border;
    } else if (error === ErrorType.Alert) {
      errorRingColor = inputColors.warning.border;
      errorRingBorderColor = colors.cantaloupe600;
    } else {
      return;
    }

    const errorStyles = {
      '& ~ div:first-of-type': {
        border: `1px solid ${errorRingColor}`,
        boxShadow: `0 0 0 1px ${errorRingColor}, 0 0 0 2px ${errorRingBorderColor}`,
      },
      '&:not(:checked):not(:disabled):not(:focus):hover ~ div:first-of-type': {
        borderColor: errorRingColor,
      },
      '&:checked ~ div:first-of-type': {
        borderColor: colors.blueberry400,
        boxShadow: `
            0 0 0 2px ${colors.frenchVanilla100},
            0 0 0 4px ${errorRingColor},
            0 0 0 5px ${errorRingBorderColor}`,
      },
    };
    return {
      ...errorStyles,
      // Error rings take precedence over focus
      ...mouseFocusBehavior({
        ...errorStyles,
        '&:not(:checked):focus ~ div:first-of-type': {
          border: `1px solid ${errorRingColor}`,
          boxShadow: `0 0 0 1px ${errorRingColor}, 0 0 0 2px ${errorRingBorderColor}`,
        },
      }),
    };
  }
);

const CheckboxBackground = styled('div')<CheckboxProps>({
  alignItems: 'center',
  backgroundColor: colors.frenchVanilla100,
  borderRadius: borderRadius.s,
  border: '1px solid ' + inputColors.border,
  boxSizing: 'border-box',
  display: 'flex',
  height: checkboxHeight,
  justifyContent: 'center',
  padding: '0px 2px',
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'border 200ms ease, background 200ms',
  width: checkboxWidth,
});

const CheckboxCheck = styled('div')<Pick<CheckboxProps, 'checked'>>(
  {
    display: 'flex',
    flexDirection: 'column',
    // When using align-items: center on a flex container in the column direction,
    // the contents of flex item, if too big, will overflow their container in IE 10-11.
    // max-width: 100%; is a workaround
    // https://github.com/philipwalton/flexbugs#flexbug-2
    maxWidth: '100%',
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    span: {
      // This is necessary because we're using max-width: 100% in the CheckboxCheck container
      // in order for the Checkbox to render properly on IE 11
      marginLeft: '-6px',
      transition: 'margin 200ms ease',
    },
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
  static ErrorType = ErrorType;

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
      onChange,
      value,
      error,
      ...elemProps
    } = this.props;

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
            error={error}
            {...elemProps}
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
