import * as React from 'react';
import styled from 'react-emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import IconButton, {IconButtonCon, IconButtonProps} from './IconButton';

export interface IconButtonToggleGroupProps {
  /**
   * React children must be of type IconButton and have at least two.
   */
  children: React.ReactElement<IconButtonProps>[];

  /**
   * The value or index of the IconButton that should be toggled on.
   * If a string is passed, the IconButton with the corresponding value will be selected.
   * If a number is passed, ihe IconButton with the corresponding index will be selected.
   */
  value?: string | number;

  /**
   * Internationalization config
   */
  isRTL?: boolean;

  /**
   * Callback function when a button is selected, optional.
   * If the selected button has a value, it will be returned.
   * Otherwise, the index of the button in the group will be returned.
   */
  onChange?: (value: string | number) => void;
}

const Container = styled('div')({
  [IconButtonCon as any]: {
    borderRadius: 0,
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
