import * as React from 'react';
import styled from '@emotion/styled';
import {spacing, borderRadius} from '@workday/canvas-kit-react-core';
import IconButton, {IconButtonCon, IconButtonProps} from './IconButton';

export interface IconButtonToggleGroupProps {
  /**
   * The IconButton children of the IconButtonToggleGroup (must be at least two).
   */
  children: React.ReactElement<IconButtonProps>[];

  /**
   * The value or index of the IconButton that the IconButtonToggleGroup should be toggled on to. If a string is provided, the IconButton with the corresponding value will be selected. If a number is provided, the IconButton with the corresponding index will be selected.
   * @default 0
   */
  value?: string | number;

  /**
   * If true, render the IconButtonToggleGroup from right to left.
   * @default false
   */
  isRTL?: boolean;

  /**
   * The function called when a button in the IconButtonToggleGroup is selected. If the selected button has a value, that value will be passed to the callback function; otherwise, the index of the button will be passed.
   */
  onChange?: (value: string | number) => void;
}

const Container = styled('div')({
  [IconButtonCon as any]: {
    borderRadius: borderRadius.zero,
    borderWidth: '1px',
    marginLeft: '-1px',
    '&:first-child': {
      borderTopLeftRadius: spacing.xxxs,
      borderBottomLeftRadius: spacing.xxxs,
      marginLeft: 0,
    },
    '&:last-child': {
      borderTopRightRadius: spacing.xxxs,
      borderBottomRightRadius: spacing.xxxs,
    },
    '&:focus': {
      borderRadius: spacing.xxxs,
      zIndex: 1,
      animation: 'none', // reset focusRing animation
      transition: 'all 120ms, border-radius 1ms',
    },
  },
});

export default class IconButtonToggleGroup extends React.Component<IconButtonToggleGroupProps> {
  static defaultProps = {
    value: 0,
  };

  render(): React.ReactNode {
    const children = this.props.isRTL ? [...this.props.children].reverse() : this.props.children;
    return <Container>{React.Children.map(children, this.renderChild)}</Container>;
  }

  private renderChild = (
    child: React.ReactElement<IconButtonProps>,
    index: number
  ): React.ReactNode => {
    if (typeof child.type === typeof IconButton) {
      const childProps = child.props;
      const toggled =
        typeof this.props.value === 'number'
          ? index === this.props.value
          : childProps.value === this.props.value;

      return React.cloneElement(child, {
        toggled,
        variant: IconButton.Variant.SquareFilled,
        onClick: this.onButtonClick.bind(this, childProps.onClick, index),
      });
    }

    return child;
  };

  private onButtonClick = (
    existingOnClick: (e: React.SyntheticEvent) => void | undefined,
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (existingOnClick) {
      existingOnClick(event);
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
