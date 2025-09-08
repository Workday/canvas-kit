import * as React from 'react';
import {
  createComponent,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  styled,
  Themeable,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, inputColors, space} from '@workday/canvas-kit-react/tokens';
import {LabelText} from '@workday/canvas-kit-react/text';
import {px2rem} from '@workday/canvas-kit-styling';

/**
 * @deprecated ⚠️ `RadioProps` in Main has been deprecated and will be removed in a future major version. Please use [`Radio` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs) instead.
 */
export interface RadioProps extends Themeable {
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
  variant?: 'inverse' | undefined;
}

const radioBorderRadius = 9;

const RadioContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minHeight: space.m,
  position: 'relative',
});

/**
 * Using a wrapper prevents the browser default behavior of trigging
 * :hover on the radio when you hover on it's corresponding label.
 * This stops the ripple from showing when you hover on the label.
 */
const RadioInputWrapper = styled('div')<Pick<RadioProps, 'disabled'>>({
  display: 'flex',
  height: `calc(${space.s} + 2px)`,
  width: `calc(${space.s} + 2px)`,
});

const RadioRipple = styled('span')<Pick<RadioProps, 'disabled' | 'variant'>>(
  {
    borderRadius: borderRadius.circle,
    boxShadow: `0 0 0 0 ${colors.soap200}`,
    height: `calc(${space.s} + 2px)`,
    transition: 'box-shadow 150ms ease-out',
    width: `calc(${space.s} + 2px)`,
    position: 'absolute',
    pointerEvents: 'none', // This is a decorative element we don't want it to block clicks to input
  },
  ({variant}) => ({
    opacity: variant === 'inverse' ? '0.4' : '1',
  })
);

const RadioInput = styled('input')<RadioProps & StyledType>(
  {
    borderRadius: `calc(${space.xxs} + 1px)`,
    width: space.m,
    height: space.m,
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
      boxShadow: disabled
        ? undefined
        : `0 0 0 calc((${space.l} - (${space.s} + 2px)) / 2) ${colors.soap200}`,
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
        outline: `${px2rem(2)} solid transparent`,
        outlineOffset: variant === 'inverse' ? '0' : '2px',
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

const RadioBackground = styled('div')<RadioProps>(
  {
    alignItems: 'center',
    backgroundColor: colors.frenchVanilla100,
    borderRadius: radioBorderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    height: `calc(${space.s} + 2px)`,
    justifyContent: 'center',
    padding: '0px 2px',
    pointerEvents: 'none',
    position: 'absolute',
    transition: 'border 200ms ease, background 200ms',
    width: `calc(${space.s} + 2px)`,
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
      ? colors.licorice100
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

const RadioCheck = styled('div')<Pick<RadioProps, 'checked' | 'variant'>>(
  {
    borderRadius: radioBorderRadius,
    display: 'flex',
    flexDirection: 'column',
    height: space.xxs,
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    width: space.xxs,
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

/**
 * @deprecated ⚠️ `Radio` in Main has been deprecated and will be removed in a future major version. Please use [`Radio` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs) instead.
 */
export const Radio = createComponent('input')({
  displayName: 'Radio',
  Component: (
    {
      checked = false,
      id,
      label = '',
      disabled,
      name,
      onChange,
      value,
      variant,
      ...elemProps
    }: RadioProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    return (
      <RadioContainer>
        <RadioInputWrapper disabled={disabled}>
          <RadioInput
            as={Element}
            checked={checked}
            disabled={disabled}
            id={inputId}
            ref={ref}
            name={name}
            onChange={onChange}
            type="radio"
            value={value}
            aria-checked={checked}
            variant={variant}
            {...elemProps}
          />
          <RadioRipple variant={variant} />
          <RadioBackground checked={checked} disabled={disabled} variant={variant}>
            <RadioCheck checked={checked} variant={variant} />
          </RadioBackground>
        </RadioInputWrapper>
        {label && (
          <LabelText paddingLeft={space.xs} htmlFor={inputId} disabled={disabled} variant={variant}>
            {label}
          </LabelText>
        )}
      </RadioContainer>
    );
  },
});
