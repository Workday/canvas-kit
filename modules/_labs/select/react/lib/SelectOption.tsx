import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {colors, commonColors, type, typeColors} from '@workday/canvas-kit-react-core';

export interface SelectOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * If true, set the SelectOption to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type of error associated with the SelectOption (if applicable).
   */
  error?: ErrorType;
  /**
   * If true, set the SelectOption to the focused state.
   * @default false
   */
  focused?: boolean;
  /**
   * The HTML `id` of the SelectOption.
   */
  id?: string;
  /**
   * The ref to the list item that the styled component renders. Use this to imperatively manipulate the SelectOption (e.g., to scroll to it if it's out of view in the Select menu).
   */
  optionRef?: React.Ref<HTMLLIElement>;
  /**
   * If true, set the SelectOption to the interactive state. Non-interactive SelectOptions should not give any visual cues that they are interactive (e.g., remove hover styling).
   * @default true
   */
  interactive: boolean;
  /**
   * The value of the SelectOption.
   */
  value?: string;
}

const optionPadding = 6;

const activeStyles = {
  backgroundColor: commonColors.focusBackground,
  color: typeColors.inverse,
};

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    cursor: 'default',
    // Apply listStyle at the list item style to ensure it's styled properly
    // in Visual Testing States
    listStyle: 'none',
    // In case the content of the option is empty/undefined for some reason
    minHeight: type.body.lineHeight,
  },
  ({disabled, focused, interactive}) => {
    if (disabled) {
      // If the option is disabled, return disabled styles...
      return {
        color: colors.licorice100,
      };
    } else if (focused) {
      // ...else if the option is focused, return focused styles...
      return {
        ...activeStyles,
      };
    } else {
      // ...else return hover and selected (via aria-selected) styles
      const selectedStyles = {
        '&[aria-selected="true"]': {
          backgroundColor: colors.blueberry100,
        },
      };
      // Only display interactive (hover/active) styles if the option is interactive
      const interactiveStyles = interactive
        ? {
            '&:hover': {
              backgroundColor: commonColors.hoverBackground,
            },
            '&:active': {
              ...activeStyles,
            },
          }
        : {};
      return {
        // Place selected styles after interactive styles to have selected styles
        // override interactive styles
        ...interactiveStyles,
        ...selectedStyles,
      };
    }
  },
  ({error}) => ({
    padding: `${optionPadding}px ${
      error === ErrorType.Alert ? optionPadding - 1 : optionPadding
    }px`,
  })
);

const SelectOption = (props: SelectOptionProps) => {
  const {children, optionRef, value, ...elemProps} = props;

  return (
    <Option data-value={value} ref={optionRef} role="option" {...elemProps}>
      {children}
    </Option>
  );
};

SelectOption.defaultProps = {
  interactive: true,
};

export default SelectOption;
