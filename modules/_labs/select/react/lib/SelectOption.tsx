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
   * @ignore
   * The type of error associated with the SelectOption (if applicable). This prop is managed by the parent Select and should NOT be explicitly set on the SelectOption.
   */
  error?: ErrorType;
  /**
   * @ignore
   * If true, set the SelectOption to the focused state. This prop is managed by the parent Select and should NOT be explicitly set on the SelectOption.
   * @default false
   */
  focused?: boolean;
  /**
   * The HTML `id` of the SelectOption.
   */
  id?: string;
  /**
   * The label of the SelectOption.
   */
  label?: string;
  /**
   * The ref to the list item that the styled component renders. Use this to imperatively manipulate the SelectOption (e.g., to scroll to it if it's out of view in the Select menu).
   */
  optionRef?: React.Ref<HTMLLIElement>;
  /**
   * @ignore
   * If true, set the SelectOption to the selected state. This prop is managed by the parent Select and should NOT be explicitly set on the SelectOption.
   * @default false
   */
  selected?: boolean;
  /**
   * @ignore
   * If true, set the SelectOption to the suppressed (from user interaction) state. This prop is managed by the parent Select and should NOT be explicitly set on the SelectOption.
   * @default false
   */
  suppressed?: boolean;
  /**
   * The value of the SelectOption.
   */
  value?: string;
}

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.body,
    cursor: 'default',
    // In case label is empty/undefined for some reason
    minHeight: type.body.lineHeight,
  },
  ({disabled, focused, selected, suppressed}) => {
    if (disabled) {
      return {
        color: colors.licorice100,
      };
    } else if (selected) {
      return {
        backgroundColor: colors.blueberry100,
      };
    } else if (focused) {
      return {
        backgroundColor: commonColors.focusBackground,
        color: typeColors.inverse,
      };
    } else if (!suppressed) {
      return {
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
        },
      };
    } else {
      return;
    }
  },
  ({error}) => ({
    padding: `6px ${error === ErrorType.Alert ? 7 : 8}px`,
  })
);

export default class SelectOption extends React.Component<SelectOptionProps> {
  static defaultProps = {
    disabled: false,
  };

  public render() {
    const {id, label, optionRef, selected, value, ...elemProps} = this.props;

    return (
      <Option
        aria-selected={selected === true ? 'true' : undefined}
        data-value={value}
        id={id}
        ref={optionRef}
        role="option"
        selected={selected}
        {...elemProps}
      >
        {label}
      </Option>
    );
  }
}
