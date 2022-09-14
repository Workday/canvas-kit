import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SegmentedControlButton, SegmentedControlButtonProps} from './SegmentedControlButton';

/**
 * ### Deprecated SegmentedControl Props
 *
 * As of Canvas Kit v8, SegmentedControl is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export interface DeprecatedSegmentedControlProps {
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
 * ### Deprecated SegmentedControl
 *
 * As of Canvas Kit v8, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export const DeprecatedSegmentedControl = createComponent('div')({
  displayName: 'SegmentedControl',
  Component: (
    {value = 0, children, onChange, ...elemProps}: DeprecatedSegmentedControlProps,
    ref
  ) => {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );

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
