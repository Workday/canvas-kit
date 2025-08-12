import * as React from 'react';
import {Radio, RadioProps} from './Radio';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {
  ErrorType,
  GrowthBehavior,
  getErrorColors,
  styled,
  Themeable,
} from '@workday/canvas-kit-react/common';

/**
 * @deprecated ⚠️ `RadioGroupProps` in Main has been deprecated and will be removed in a future major version. Please use [`Radio` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs) instead.
 */
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
    padding: `${space.xxxs} ${space.xs}`,
    margin: `0 -${space.xs}`,
    '& > div': {
      margin: `${space.xxs} ${space.zero}`,
      alignItems: 'flex-start',
      '> div': {
        flex: '0 0 auto',
      },
      '&:first-of-type': {
        marginTop: '6px',
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

/**
 * @deprecated ⚠️ `RadioGroup` in Main has been deprecated and will be removed in a future major version. Please use [`Radio` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs) instead.
 */
export class RadioGroup extends React.Component<RadioGroupProps> {
  static ErrorType = ErrorType;

  render(): React.ReactNode {
    const {value = 0, children, error, onChange, grow, ...elemProps} = this.props;
    return (
      <Container error={error} grow={grow} {...elemProps}>
        {React.Children.map(children, (child, index) => this.renderChild(child, index, value))}
      </Container>
    );
  }

  private renderChild = (
    child: React.ReactElement<RadioProps>,
    index: number,
    value: string | number
  ): React.ReactNode => {
    if (typeof child.type === typeof Radio) {
      const childProps = child.props;
      const checked = typeof value === 'number' ? index === value : childProps.value === value;
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
    existingOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
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

RadioGroup.ErrorType = ErrorType;
