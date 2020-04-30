import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {colors, commonColors, spacing, type, typeColors} from '@workday/canvas-kit-react-core';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

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
    position: 'relative',
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
        '&:hover': {
          backgroundColor: colors.blueberry500,
        },
      };
    } else {
      // ...else, return interactive (hover/active) styles if the option is interactive
      return interactive
        ? {
            '&:hover': {
              backgroundColor: commonColors.hoverBackground,
            },
            '&:active': {
              ...activeStyles,
              // TODO: is there a better way to designate this fill color?
              '.wd-icon-fill': {
                fill: colors.frenchVanilla100,
              },
            },
          }
        : {};
    }
  },
  ({error}) => ({
    padding: `${optionPadding}px ${
      error === ErrorType.Alert ? optionPadding - 1 : optionPadding
    }px`,
  })
);

const SelectedIcon = styled(SystemIcon)({
  position: 'absolute',
  top: spacing.xxxs,
  right: spacing.xxxs,
  pointerEvents: 'none',
});

const SelectOption = (props: SelectOptionProps) => {
  const {'aria-selected': ariaSelected, children, focused, optionRef, value, ...elemProps} = props;

  return (
    <Option
      aria-selected={ariaSelected}
      data-value={value}
      focused={focused}
      ref={optionRef}
      role="option"
      {...elemProps}
    >
      {children}
      {ariaSelected && (
        <SelectedIcon
          color={focused ? colors.frenchVanilla100 : colors.blueberry500}
          icon={checkIcon}
        />
      )}
    </Option>
  );
};

SelectOption.defaultProps = {
  interactive: true,
};

export default SelectOption;
