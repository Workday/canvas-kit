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
  ({disabled, focused, suppressed}) => {
    if (disabled) {
      // If the option is disabled, return disabled styles...
      return {
        color: colors.licorice100,
      };
    } else if (focused) {
      // ...else if the option is focused, return focused styles...
      return {
        backgroundColor: commonColors.focusBackground,
        color: typeColors.inverse,
      };
    } else {
      // ...else return hover and selected (via aria-selected) styles
      const selectedStyles = {
        '&[aria-selected="true"]': {
          backgroundColor: colors.blueberry100,
        },
      };
      // Do not display hover styles if the option is suppressed
      const hoverStyles = suppressed
        ? {}
        : {
            '&:hover': {
              backgroundColor: commonColors.hoverBackground,
            },
          };
      return {
        // Place selected styles after hover styles to have selected styles
        // override hover styles
        ...hoverStyles,
        ...selectedStyles,
      };
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
    const {children, id, label, optionRef, value, ...elemProps} = this.props;

    return (
      <Option data-value={value} id={id} ref={optionRef} role="option" {...elemProps}>
        {children}
      </Option>
    );
  }
}
