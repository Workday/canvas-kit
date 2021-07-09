import * as React from 'react';
import {
  createComponent,
  StyledType,
  ErrorType,
  useUniqueId,
  focusRing,
  mouseFocusBehavior,
  getErrorColors,
  styled,
  useTheme,
  Themeable,
} from '@workday/canvas-kit-react/common';
import canvas, {
  borderRadius,
  colors,
  inputColors,
  spaceNumbers,
} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';

export interface CheckboxProps extends Themeable {
  /**
   * If true, set the Checkbox to the checked state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Checkbox to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying checkbox input element. This is required if `label` is defined as a non-empty string.
   * @default A uniquely generated id by uuid()
   */
  id?: string;
  /**
   * The text of the Checkbox label.
   * @default ''
   */
  label?: string;
  /**
   * The function called when the Checkbox state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Checkbox.
   */
  value?: string;
  /**
   * The type of error associated with the Checkbox (if applicable).
   */
  error?: ErrorType;
  /**
   * If true, set the Checkbox to an indeterminate state. Use this on a Checkbox with nested child Checkboxes to denote that some (but not all) child Checkboxes are checked.
   * @default false
   */
  indeterminate?: boolean;
}

const checkboxHeight = 18;
const checkboxTapArea = spaceNumbers.m;
const checkboxContainerHeight = checkboxTapArea;
const checkboxLabelDistance = spaceNumbers.xs;
const checkboxWidth = 18;
const rippleRadius = (spaceNumbers.l - checkboxWidth) / 2;

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
const CheckboxInputWrapper = styled('div')<Pick<CheckboxProps, 'disabled'>>({
  display: 'flex',
  height: checkboxHeight,
  minWidth: checkboxWidth,
  marginTop: '3px',
  alignSelf: 'flex-start',
});

const CheckboxRipple = styled('span')<Pick<CheckboxProps, 'disabled'>>({
  borderRadius: borderRadius.circle,
  boxShadow: `0 0 0 0 ${colors.soap200}`,
  height: checkboxHeight,
  transition: 'box-shadow 150ms ease-out',
  width: checkboxWidth,
  position: 'absolute',
  pointerEvents: 'none', // This is a decorative element we don't want it to block clicks to input
  zIndex: -1,
});

/**
 * Note: `~ div:first-of-type` refers to `CheckboxBackground`
 * and was easier to use than a component selector in this case.
 */
const CheckboxInput = styled('input')<CheckboxProps & StyledType>(
  ({
    theme: {
      canvas: {
        palette: {
          primary: themePrimary,
          common: {focusOutline: themeFocusOutline},
        },
      },
    },
  }) => ({
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
    '&:not(:checked):not(:disabled):not(:focus):hover, &:not(:checked):not(:disabled):active': {
      '~ div:first-of-type': {
        borderColor: inputColors.hoverBorder,
      },
    },
    '&:checked ~ div:first-of-type': {
      borderColor: themePrimary.main,
      backgroundColor: themePrimary.main,
    },
    '&:disabled ~ div:first-of-type': {
      borderColor: inputColors.disabled.border,
      backgroundColor: inputColors.disabled.background,
    },
    '&:disabled:checked ~ div:first-of-type': {
      borderColor: themePrimary.light,
      backgroundColor: themePrimary.light,
    },

    // Focus
    '&:focus, &:active': {
      outline: 'none',
    },
    '&:focus ~ div:first-of-type': {
      borderColor: themePrimary.main,
      borderWidth: '2px',
      boxShadow: 'none',
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing({width: 2, separation: 2, animate: false, outerColor: themeFocusOutline}),
      '& span': {
        marginLeft: '-7px',
      },
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        border: `1px solid ${inputColors.hoverBorder}`,
        boxShadow: 'none',
        '& span': {
          marginLeft: '-6px',
        },
      },
      '&:checked ~ div:first-of-type': {
        borderColor: themePrimary.main,
      },
      '&:disabled:checked ~ div:first-of-type': {
        borderColor: themePrimary.light,
        backgroundColor: themePrimary.light,
      },
    }),
  }),
  ({disabled}) => ({
    '&:hover ~ span:first-of-type': {
      boxShadow: disabled ? undefined : `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },
  }),
  ({theme, error}) => {
    const errorColors = getErrorColors(error, theme);

    if (errorColors.outer === errorColors.inner) {
      errorColors.outer = 'transparent';
    }

    const errorStyles = {
      '& ~ div:first-of-type': {
        border: `1px solid ${errorColors.inner}`,
        boxShadow: `0 0 0 1px ${errorColors.inner}, 0 0 0 2px ${errorColors.outer}`,
      },
      '&:not(:checked):not(:disabled):not(:focus):hover, &:not(:checked):not(:disabled):active': {
        '~ div:first-of-type': {
          borderColor: errorColors.inner,
        },
      },
      '&:checked ~ div:first-of-type': {
        borderColor: theme.canvas.palette.primary.main,
        boxShadow: `
            0 0 0 2px ${colors.frenchVanilla100},
            0 0 0 4px ${errorColors.inner},
            0 0 0 5px ${errorColors.outer}`,
      },
    };
    return {
      ...errorStyles,
      // Error rings take precedence over focus
      ...mouseFocusBehavior({
        ...errorStyles,
        '&:not(:checked):focus ~ div:first-of-type': {
          border: `1px solid ${errorColors.inner}`,
          boxShadow: `0 0 0 1px ${errorColors.inner}, 0 0 0 2px ${errorColors.outer}`,
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

const IndeterminateBox = styled('div')(
  {
    width: '10px',
    height: '2px',
  },
  ({theme}) => ({
    backgroundColor: theme.canvas.palette.primary.contrast,
  })
);

const CheckboxLabel = styled('label')<{disabled?: boolean}>(
  {
    ...canvas.type.levels.subtext.large,
    paddingLeft: checkboxLabelDistance,
  },
  ({disabled}) => (disabled ? {color: inputColors.disabled.text} : {cursor: 'pointer'})
);

export const Checkbox = createComponent('input')({
  displayName: 'Checkbox',
  Component: (
    {
      checked = false,
      label = '',
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      id,
      disabled,
      onChange,
      value,
      error,
      indeterminate,
      ...elemProps
    }: CheckboxProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    return (
      <CheckboxContainer>
        <CheckboxInputWrapper disabled={disabled}>
          <CheckboxInput
            as={Element}
            checked={checked}
            disabled={disabled}
            id={inputId}
            ref={ref}
            onChange={onChange}
            type="checkbox"
            value={value}
            error={error}
            aria-checked={indeterminate ? 'mixed' : checked}
            {...elemProps}
          />
          <CheckboxRipple />
          <CheckboxBackground checked={checked} disabled={disabled}>
            <CheckboxCheck checked={checked}>
              {indeterminate ? (
                <IndeterminateBox />
              ) : (
                <SystemIcon icon={checkSmallIcon} color={theme.canvas.palette.primary.contrast} />
              )}
            </CheckboxCheck>
          </CheckboxBackground>
        </CheckboxInputWrapper>
        {label && (
          <CheckboxLabel htmlFor={inputId} disabled={disabled}>
            {label}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});

export default Checkbox;
