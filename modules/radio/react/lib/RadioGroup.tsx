import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import Radio, {RadioProps} from './Radio';
import {borderRadius, spacing} from '@workday/canvas-kit-react-core';
import {ErrorType, GrowthBehavior, getErrorColors} from '@workday/canvas-kit-react-common';

export interface RadioGroupProps extends Themeable, GrowthBehavior {
  /**
   * The Radio button children of the RadioGroup (must be at least two).
   */
  children: React.ReactElement<RadioProps>[];
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
  /**
   * The function called when the RadioGroup state changes. The value passed to the callback function will be the value of the selected Radio button if it has one; otherwise, the index of the selected Radio button will be passed in.
   */
  onChange?: (value: string | number) => void;
}

const Container = styled('div')<Pick<RadioGroupProps, 'error' | 'grow' | 'theme'>>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: borderRadius.m,
    padding: `${spacing.xxxs} ${spacing.xs}`,
    margin: `-${spacing.xxxs} -${spacing.xs}`,
    '& > div': {
      margin: `${spacing.xxs} ${spacing.zero}`,
      '&:first-child': {
        marginTop: spacing.xxxs,
      },
      '&:last-child': {
        marginBottom: spacing.xxxs,
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

export default class RadioGroup extends React.Component<RadioGroupProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    value: 0,
  };

  render(): React.ReactNode {
    const {children, error, onChange, value, grow, ...elemProps} = this.props;
    return (
      <Container error={error} grow={grow} {...elemProps}>
        {React.Children.map(children, this.renderChild)}
      </Container>
    );
  }

  private renderChild = (child: React.ReactElement<RadioProps>, index: number): React.ReactNode => {
    if (typeof child.type === typeof Radio) {
      const childProps = child.props;
      const checked =
        typeof this.props.value === 'number'
          ? index === this.props.value
          : childProps.value === this.props.value;
      const name = this.props.name ? this.props.name : childProps.name;

      return React.cloneElement(child, {
        checked,
        name,
        onChange: this.onRadioChange.bind(this, childProps.onChange, index),
      });
    }

    return child;
  };

  private onRadioChange = (
    existingOnChange: (e: React.ChangeEvent) => void | undefined,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (existingOnChange) {
      existingOnChange(event);
    }

    const target = event.currentTarget;
    if (target && this.props.onChange) {
      if (target.value) {
        this.props.onChange(target.value);
      } else {
        this.props.onChange(index);
      }
    }
  };
}
