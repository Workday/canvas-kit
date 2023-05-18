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
import {
  borderRadius,
  colors,
  inputColors,
  spaceNumbers,
  remToPxValue,
} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {LabelText} from '@workday/canvas-kit-react/text';

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
   * @default {useUniqueId}
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
  /**
   * The variant for the checkbox
   */
  variant?: 'inverse' | undefined;
}

const checkboxHeight = 18;
const checkboxTapArea = `${spaceNumbers.m}rem`;
const checkboxContainerHeight = checkboxTapArea;
const checkboxLabelDistance = `${spaceNumbers.xs}rem`;
const checkboxWidth = 18;
const rippleRadius = (remToPxValue(spaceNumbers.l) - checkboxWidth) / 2;

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

const CheckboxRipple = styled('span')<Pick<CheckboxProps, 'disabled' | 'variant'>>(
  {
    borderRadius: borderRadius.circle,
    boxShadow: `0 0 0 0 ${colors.soap200}`,
    height: checkboxHeight,
    transition: 'box-shadow 150ms ease-out',
    width: checkboxWidth,
    position: 'absolute',
    pointerEvents: 'none', // This is a decorative element we don't want it to block clicks to input
  },
  ({variant}) => ({
    opacity: variant === 'inverse' ? '0.4' : '1',
  })
);

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
    variant,
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
        borderColor: variant === 'inverse' ? colors.soap300 : inputColors.hoverBorder,
      },
    },
    '&:checked ~ div:first-of-type': {
      borderColor: variant === 'inverse' ? colors.soap300 : themePrimary.main,
      backgroundColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
    },
    '&:disabled ~ div:first-of-type': {
      borderColor: inputColors.disabled.border,
      backgroundColor: variant === 'inverse' ? colors.soap300 : inputColors.disabled.background,
      opacity: variant === 'inverse' ? '.4' : '1',
    },
    '&:disabled:checked ~ div:first-of-type': {
      borderColor: variant === 'inverse' ? colors.soap300 : themePrimary.light,
      backgroundColor: variant === 'inverse' ? colors.soap300 : themePrimary.light,
    },

    // Focus
    '&:focus, &:active': {
      outline: 'none',
    },
    '&:focus ~ div:first-of-type': {
      borderColor: variant === 'inverse' ? colors.blackPepper400 : themePrimary.main,
      borderWidth: '2px',
      boxShadow: 'none',
      ...focusRing({
        width: variant === 'inverse' ? 2 : 0,
        separation: 0,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : undefined,
      }),
    },
    '&:checked:focus ~ div:first-of-type': {
      ...focusRing({
        width: 2,
        separation: 2,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
      }),
      borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
      borderWidth: '2px',
      '& span': {
        marginLeft: '-7px',
      },
    },
    ...mouseFocusBehavior({
      '&:focus ~ div:first-of-type': {
        border:
          variant === 'inverse'
            ? `1px solid ${colors.soap300}`
            : `1px solid ${inputColors.hoverBorder}`,
        boxShadow: 'none',
        '& span': {
          marginLeft: '-6px',
        },
      },
      '&:checked ~ div:first-of-type': {
        borderColor: variant === 'inverse' ? colors.soap300 : themePrimary.main,
      },
      '&:disabled:checked ~ div:first-of-type': {
        borderColor: themePrimary.light,
        backgroundColor: variant === 'inverse' ? colors.soap300 : themePrimary.light,
      },
    }),
  }),
  ({disabled}) => ({
    '&:hover ~ span:first-of-type': {
      boxShadow: disabled ? undefined : `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },
  }),
  ({theme, error, variant}) => {
    const errorColors = getErrorColors(error, theme);

    if (errorColors.outer === errorColors.inner) {
      errorColors.outer = 'transparent';
    }

    const errorStyles = {
      '& ~ div:first-of-type': {
        border:
          variant === 'inverse' ? `1px solid ${colors.soap300}` : `1px solid ${errorColors.inner}`,
        boxShadow: `0 0 0 1px ${errorColors.inner}, 0 0 0 2px ${errorColors.outer}`,
      },
      '&:not(:checked):not(:disabled):not(:focus):hover, &:not(:checked):not(:disabled):active': {
        '~ div:first-of-type': {
          borderColor: variant === 'inverse' ? `1px solid ${colors.soap300}` : errorColors.inner,
        },
      },
      '&:checked ~ div:first-of-type': {
        borderColor: variant === 'inverse' ? colors.soap300 : theme.canvas.palette.primary.main,
        boxShadow: `
              0 0 0 2px ${colors.frenchVanilla100},
              0 0 0 4px ${errorColors.inner},
              0 0 0 5px ${errorColors.outer}`,
      },
    };
    return {
      // Error rings take precedence over focus
      ...mouseFocusBehavior({
        ...errorStyles,
        '&:not(:checked):focus ~ div:first-of-type': {
          border: `1px solid ${errorColors.inner}`,
          boxShadow: `0 0 0 1px ${errorColors.inner}, 0 0 0 2px ${errorColors.outer}`,
        },
      }),
      ...errorStyles,
    };
  }
);

const CheckboxBackground = styled('div')<CheckboxProps>(
  {
    alignItems: 'center',
    backgroundColor: colors.frenchVanilla100,
    borderRadius: borderRadius.s,
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
  ({variant}) => ({
    border: `1px solid ${variant === 'inverse' ? colors.soap300 : inputColors.border}`,
  })
);

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

const IndeterminateBox = styled('div')<CheckboxProps>(
  {
    width: '10px',
    height: '2px',
  },
  ({theme, variant}) => ({
    backgroundColor:
      variant === 'inverse'
        ? theme.canvas.palette.primary.main
        : theme.canvas.palette.primary.contrast,
  })
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
      indeterminate,
      variant,
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
            type="checkbox"
            variant={variant}
            aria-checked={indeterminate ? 'mixed' : checked}
            {...elemProps}
          />
          <CheckboxRipple variant={variant} />
          <CheckboxBackground variant={variant} checked={checked} disabled={disabled}>
            <CheckboxCheck checked={checked}>
              {indeterminate ? (
                <IndeterminateBox variant={variant} />
              ) : (
                <SystemIcon
                  icon={checkSmallIcon}
                  color={
                    variant === 'inverse'
                      ? theme.canvas.palette.primary.main
                      : theme.canvas.palette.primary.contrast
                  }
                />
              )}
            </CheckboxCheck>
          </CheckboxBackground>
        </CheckboxInputWrapper>
        {label && (
          <LabelText
            htmlFor={inputId}
            disabled={disabled}
            variant={variant}
            paddingLeft={checkboxLabelDistance}
          >
            {label}
          </LabelText>
        )}
      </CheckboxContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});
