import * as React from 'react';
import {borderRadius, colors} from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {mouseFocusBehavior, styled} from '@workday/canvas-kit-react-common';

export interface SegmentedControlProps {
  /**
   * The IconButton children of the SegmentedControl (must be at least two).
   * TODO: Add support for text children
   */
  children: React.ReactElement<IconButtonProps>[];

  /**
   * The value or index of the IconButton that the SegmentedControl should be toggled on to.
   * If a string is provided, the IconButton with the corresponding value will be selected.
   * If a number is provided, the IconButton with the corresponding index will be selected.
   * @default 0
   */
  value?: string | number;

  /**
   * The function called when a button in the SegmentedControl is toggled.
   * If the selected button has a value, that value will be passed to the callback function;
   * otherwise, the index of the button will be passed.
   */
  onChange?: (value: string | number) => void;
}

const SegmentedControlContainer = styled('div')({
  '& button': {
    borderRadius: borderRadius.zero,
    border: `1px solid ${colors.soap500}`,
    borderLeft: 'none',
    '&[aria-pressed="true"]': {
      borderColor: colors.blueberry400,
      '&:hover, &:focus:hover': {
        background: colors.blueberry400,
      },
    },
    '&:first-of-type': {
      borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
      borderLeft: `1px solid ${colors.soap500}`,
    },
    '&:last-of-type': {
      borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
    },
    '&:focus': {
      borderRadius: borderRadius.m,
      zIndex: 1,
      animation: 'none', // reset focusRing animation
      transition: 'all 120ms, border-radius 1ms',
      ...mouseFocusBehavior({
        '&': {
          borderRadius: borderRadius.zero,
          '&:first-of-type': {
            borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
          },
          '&:last-of-type': {
            borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
          },
        },
      }),
    },
  },
});

const onButtonClick = (
  existingOnClick: (e: React.SyntheticEvent) => void | undefined,
  onChange: (value: string | number) => void,
  index: number,
  event: React.MouseEvent<HTMLButtonElement>
): void => {
  if (existingOnClick) {
    existingOnClick(event);
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

const SegmentedControl = (props: SegmentedControlProps) => {
  const {value = 0, children, onChange, ...elemProps} = props;

  return (
    <SegmentedControlContainer {...elemProps}>
      {React.Children.map(children, (child: React.ReactElement<IconButtonProps>, index: number) => {
        if (typeof child.type === typeof IconButton) {
          return React.cloneElement(child, {
            toggled: typeof value === 'number' ? index === value : child.props.value === value,
            variant: IconButton.Variant.SquareFilled,
            onClick: onButtonClick.bind(undefined, child.props.onClick, onChange, index),
          });
        }

        return child;
      })}
    </SegmentedControlContainer>
  );
};

export default SegmentedControl;
