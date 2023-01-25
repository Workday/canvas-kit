import React from 'react';
import {
  createContainer,
  Themeable,
  GrowthBehavior,
  ErrorType,
  getErrorColors,
  styled,
} from '@workday/canvas-kit-react/common';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {RadioButton, RadioButtonProps} from './Radio.Button';
import RadioButtonInput from './RadioButton.Input';
import RadioLabel from './RadioButton.Label';
import {useRadioModel} from './hooks/useRadioModel';

export interface RadioGroupProps extends Themeable, GrowthBehavior {
  /**
   * The Radio button children of the RadioGroup (must be at least two).
   */
  children: React.ReactElement<RadioButtonProps>[];
  /**
   * The selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected. If a number is provided, the Radio button with the corresponding index will be selected.
   * @default 0
   */
  value?: string | number;
  /**
   * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
   */
  name?: string;
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

const Container = styled('div')<Pick<RadioGroupProps, 'error' | 'grow' | 'theme'>>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: borderRadius.m,
    padding: `${space.xxxs} ${space.xs}`,
    margin: `-${space.xxxs} -${space.xs}`,
    '& > div': {
      margin: `${space.xxs} ${space.zero}`,
      '&:first-of-type': {
        marginTop: space.xxxs,
      },
      '&:last-child': {
        marginBottom: space.xxxs,
      },
    },
  },
  ({grow}) => grow && {width: '100%'},
  ({error, theme}) => {
    const errorColors = getErrorColors(error, theme);
    return {
      transition: '100ms box-shadow',
      boxShadow:
        errorColors.outer !== errorColors.inner
          ? `inset 0 0 0 1px ${errorColors.outer}, inset 0 0 0 3px ${errorColors.inner}`
          : `inset 0 0 0 2px ${errorColors.inner}`,
    };
  }
);

export const RadioGroup = createContainer('div')({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    Button: RadioButton,
    Input: RadioButtonInput,
    Label: RadioLabel,
  },
})<RadioGroupProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Container as={Element} name={model.state.name} {...elemProps}>
      {children}
    </Container>
  );
});
