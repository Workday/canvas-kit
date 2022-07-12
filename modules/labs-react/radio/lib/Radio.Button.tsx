import React from 'react';

import canvas, {
  borderRadius,
  colors,
  inputColors,
  spaceNumbers,
} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  Themeable,
  focusRing,
  mouseFocusBehavior,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import RadioButtonInput from './RadioButton.Input';
import RadioLabel from './RadioButton.Label';

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
const radioDot = 8;
const radioHeight = 18;
const radioTapArea = spaceNumbers.m;
const radioContainerHeight = radioTapArea;
const radioLabelDistance = spaceNumbers.m;
const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;

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
const RadioInputWrapper = styled('div')<Pick<RadioButtonProps, 'disabled'>>({
  display: 'flex',
  height: radioHeight,
  width: radioWidth,
});

const RadioRipple = styled('span')<Pick<RadioButtonProps, 'disabled'>>({
  borderRadius: borderRadius.circle,
  boxShadow: `0 0 0 0 ${colors.soap200}`,
  height: radioHeight,
  transition: 'box-shadow 150ms ease-out',
  width: radioWidth,
  position: 'absolute',
  pointerEvents: 'none', // This is a decorative element we don't want it to block clicks to input
  zIndex: -1,
});

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
    theme: {
      canvas: {
        palette: {primary: themePrimary},
      },
    },
  }) => ({
    borderColor: checked
      ? themePrimary.main
      : disabled
      ? inputColors.disabled.border
      : inputColors.border,
    backgroundColor: checked
      ? themePrimary.main
      : disabled
      ? inputColors.disabled.background
      : 'white',
  })
);

const RadioCheck = styled('div')<Pick<RadioButtonProps, 'checked'>>(
  {
    borderRadius: radioBorderRadius,
    display: 'flex',
    flexDirection: 'column',
    height: radioDot,
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    width: radioDot,
  },
  ({theme}) => ({
    backgroundColor: theme.canvas.palette.primary.contrast,
  }),
  ({checked}) => ({
    opacity: checked ? 1 : 0,
    transform: checked ? 'scale(1)' : 'scale(0.5)',
  })
);

export const RadioButton = createComponent('input')({
  displayName: 'Radio.Button',
  Component: (
    {
      children,
      model,
      disabled,
      checked,
      value,
      name,
      id,
      label,
      onChange,
      ...elemProps
    }: RadioButtonProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    const onRadioChange = (
      existingOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
      index: number,
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      if (existingOnChange) {
        existingOnChange(event);
      }

      const target = event.currentTarget;
      if (target && onChange) {
        if (target.value) {
          onChange(target.value);
        } else {
          onChange(index);
        }
      }
    };
    const RenderChildren = (
      child: React.ReactElement<RadioButtonProps>,
      index: number,
      value: string | number | undefined
    ): React.ReactNode => {
      if (typeof child.type === typeof RadioButton) {
        const childProps = child.props;
        const checked = typeof value === 'number' ? index === value : childProps.value === value;
        // const radioButtonName = name ? name : childProps.name;

        return React.cloneElement(child, {
          checked,
          onChange: onRadioChange.bind(this, childProps.onChange, index),
        });
      }

      return child;
    };
    return (
      <RadioContainer>
        <RadioInputWrapper disabled={disabled}>
          {React.Children.map(children, (child, index) => RenderChildren(child, index, value))}
          <RadioRipple />
          <RadioBackground checked={checked} disabled={disabled}>
            <RadioCheck checked={checked} />
          </RadioBackground>
          {label &&
            React.Children.map(children, (child, index) => RenderChildren(child, index, value))}
          {/* {label && (
            <RadioLabel htmlFor={inputId} disabled={disabled}>
              {label}
            </RadioLabel>
          )} */}
        </RadioInputWrapper>
      </RadioContainer>
    );
  },
});
