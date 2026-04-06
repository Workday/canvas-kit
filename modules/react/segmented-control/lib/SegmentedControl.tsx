import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SegmentedControlButton, SegmentedControlButtonProps} from './SegmentedControlButton';

/**
 * @deprecated ⚠️ `SegmentedControlProps` in Main has been deprecated and will be removed in a future major version. Please use [`SegmentedControl` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control--docs) instead.
 */
export interface SegmentedControlProps {
  /**
   * The Button children of the SegmentedControl (must be at least two).
   * TODO: Add support for text children
   */
  children: React.ReactElement<SegmentedControlButtonProps>[];

  /**
   * The value or index of the Button that the SegmentedControl should be toggled on to.
   * If a string is provided, the Button with the corresponding value will be selected.
   * If a number is provided, the Button with the corresponding index will be selected.
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

const onButtonClick = (
  existingOnClick: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined,
  onChange: ((value: string | number) => void) | undefined,
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

/**
 * @deprecated ⚠️ `SegmentedControl` in Main has been deprecated and will be removed in a future major version. Please use [`SegmentedControl` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control--docs) instead.
 */
export const SegmentedControl = createComponent('div')({
  displayName: 'SegmentedControl',
  Component: ({value = 0, children, onChange, ...elemProps}: SegmentedControlProps, ref) => {
    return (
      <div {...elemProps}>
        {React.Children.map(
          children,
          (
            child: React.ReactElement<
              SegmentedControlButtonProps & {
                onClick?: React.MouseEventHandler<HTMLButtonElement>;
              } & React.HTMLAttributes<HTMLButtonElement> // segmented control button will have correct props
            >,
            index: number
          ) => {
            if (typeof child.type === typeof SegmentedControlButton) {
              return React.cloneElement(child, {
                toggled: typeof value === 'number' ? index === value : child.props.value === value,
                onClick: onButtonClick.bind(undefined, child.props.onClick, onChange, index),
              });
            }

            return child;
          }
        )}
      </div>
    );
  },
  subComponents: {
    Button: SegmentedControlButton,
  },
});
