import * as React from 'react';
import styled from '@emotion/styled';
import Radio, {RadioProps} from './Radio';
import {borderRadius, spacing, inputColors, colors} from '@workday/canvas-kit-react-core';
import {ErrorType, GrowthBehavior} from '@workday/canvas-kit-react-common';

export interface RadioGroupProps extends GrowthBehavior {
  /**
   * React children must be of type Radio and have at least two.
   */
  children: React.ReactElement<Radio>[];

  /**
   * The value or index of the Radio that should be toggled on.
   * If a string is passed, the Radio with the corresponding value will be selected.
   * If a number is passed, ihe Radio with the corresponding index will be selected.
   */
  value?: string | number;

  name?: string;

  error?: ErrorType;

  /**
   * Callback function when a button is selected, optional.
   * If the selected button has a value, it will be returned.
   * Otherwise, the index of the button in the group will be returned.
   */
  onChange?: (value: string | number) => void;
}

const Container = styled('div')<Pick<RadioGroupProps, 'error' | 'grow'>>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
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
  ({error}) => {
    let errorBorderColor;
    let errorRingColor;

    if (error === ErrorType.Error) {
      errorRingColor = inputColors.error.border;
    } else if (error === ErrorType.Alert) {
      errorRingColor = inputColors.warning.border;
      errorBorderColor = colors.cantaloupe600;
    } else {
      return {};
    }
    return {
      borderRadius: borderRadius.m,
      transition: '100ms box-shadow',
      boxShadow: errorBorderColor
        ? `inset 0 0 0 1px ${errorBorderColor}, inset 0 0 0 3px ${errorRingColor}`
        : `inset 0 0 0 2px ${errorRingColor}`,
      padding: `${spacing.xxxs} ${spacing.xs}`,
      margin: `-${spacing.xxxs} -${spacing.xs}`,
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
    existingOnChange: (e: React.SyntheticEvent) => void | undefined,
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
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
