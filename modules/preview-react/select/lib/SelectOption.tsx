import * as React from 'react';
import {CSSObject} from '@emotion/styled';
import {
  EmotionCanvasTheme,
  ErrorType,
  Themeable,
  pickForegroundColor,
  styled,
} from '@workday/canvas-kit-react/common';
import {colors, commonColors, type} from '@workday/canvas-kit-react/tokens';
/**
 * @deprecated ⚠️ `SelectOptionProps` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export interface SelectOptionProps extends Themeable, React.LiHTMLAttributes<HTMLLIElement> {
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
   * If true, set the SelectOption to the interactive state. Non-interactive SelectOptions should not give any visual cues that they are interactive (e.g., remove hover styling).
   * @default true
   */
  interactive?: boolean;
  /**
   * The ref to the list item that the styled component renders. Use this to imperatively manipulate the SelectOption (e.g., to scroll to it if it's out of view in the Select menu).
   */
  optionRef?: React.Ref<HTMLLIElement>;
  /**
   * The value of the SelectOption.
   */
  value?: string;
}

const optionPadding = 6;

const activeStyles = (theme: EmotionCanvasTheme): CSSObject => {
  const activeBgColor = theme.canvas.palette.primary.main;
  return {
    backgroundColor: activeBgColor,
    color: pickForegroundColor(activeBgColor),
  };
};

const Option = styled('li')<SelectOptionProps>(
  {
    ...type.levels.subtext.large,
    cursor: 'default',
    // Apply listStyle at the list item style to ensure it's styled properly
    // in Visual Testing States
    listStyle: 'none',
    // In case the content of the option is empty/undefined for some reason
    minHeight: type.levels.subtext.large.lineHeight,
    textAlign: 'left',
  },
  ({'aria-disabled': disabled, focused, interactive, theme}) => {
    if (disabled) {
      // If the option is disabled, return disabled styles...
      return {
        color: colors.licorice100,
      };
    } else if (focused) {
      // ...else if the option is focused, return focused styles...
      return {
        ...activeStyles(theme),
      };
    } else {
      // ...else return hover and selected (via aria-selected) styles
      const selectedBgColor = theme.canvas.palette.primary.lightest;
      const selectedStyles = {
        '&[aria-selected="true"]': {
          backgroundColor: selectedBgColor,
          color: pickForegroundColor(selectedBgColor),
        },
      };
      // Only display interactive (hover/active) styles if the option is interactive
      const interactiveStyles = interactive
        ? {
            '&:hover': {
              backgroundColor: commonColors.hoverBackground,
            },
            '&:active, &:active[aria-selected="true"]': {
              ...activeStyles(theme),
            },
          }
        : {};
      return {
        // Place selected styles after interactive styles to have selected styles
        // override interactive styles (subject to CSS specificity rules)
        ...interactiveStyles,
        ...selectedStyles,
      };
    }
  },
  ({error}) => ({
    padding: `${optionPadding}px ${
      error === ErrorType.Caution ? optionPadding - 1 : optionPadding
    }px`,
  })
);

/**
 * @deprecated ⚠️ `SelectOption` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export const SelectOption = ({
  children,
  focused = false,
  interactive = true,
  optionRef,
  value,
  ...elemProps
}: SelectOptionProps) => {
  return (
    <Option
      data-value={value}
      focused={focused}
      interactive={interactive}
      ref={optionRef}
      role="option"
      {...elemProps}
    >
      {children}
    </Option>
  );
};
