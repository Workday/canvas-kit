import * as React from 'react';
import styled, {css} from 'react-emotion';
import { CSSObject } from 'create-emotion';
import { type, colors, spacing, spacingNumbers } from '@workday/canvas-kit-react-core';
import { GrowthBehavior } from '@workday/canvas-kit-react-common';
import { IconButton, IconButtonVariant } from '@workday/canvas-kit-react-button';
import { searchIcon } from '@workday/canvas-system-icons-web';
import {FormField, FormFieldLabelPosition} from '@workday/canvas-kit-react-form-field';
import {Combobox} from '@workday/canvas-kit-react-combobox';
import {TextInput} from '@workday/canvas-kit-react-text-input';
import {MenuItemProps} from '@workday/canvas-kit-react-menu';
import {SearchThemeAttributes, searchThemes} from '../shared/themes'
import {SearchTheme} from '../shared/types'
import chroma from 'chroma-js';

export interface SearchBarProps extends GrowthBehavior, React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * An function that gets called and passed the current input value when the search form is submitted
   */
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  /**
   * True if the search input should be collapsed into a toggle icon (for responsive).
   */
  isCollapsed?: boolean;

  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;

  autocompleteItems?: React.ReactElement<MenuItemProps>[];

  accessibleId?: string;

  /**
   * The theme of the header the search input is being rendered in
   */
  searchTheme: SearchTheme | SearchThemeAttributes;

  placeholder: string

  /**
   * False if the search input should grow to left align it. True if it should right align.
   */
  rightAlign?: boolean;

  accessibleLabel: string

  /**
   * Show button to clear input field
   */
  showClearButton: boolean;
  /**
   * Aria Label for clear button
   */
  clearButtonLabel?: string;
}

export interface SearchBarState {
  mobileToggle: boolean;
  searchQuery: string;
  isFocused: boolean;
}

function getInputColors(theme: SearchThemeAttributes, isFocused?: boolean) {
  return {
    background: isFocused && theme.backgroundFocused ? theme.backgroundFocused : theme.background,
    color: isFocused && theme.colorFocused ? theme.colorFocused : theme.color,
    placeholderColor: isFocused && theme.placeholderColorFocused ? theme.placeholderColorFocused : theme.placeholderColor,
    boxShadow: isFocused && theme.boxShadowFocused ? theme.boxShadowFocused : theme.boxShadow,
  }
}


const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<Pick<SearchBarProps, | 'isCollapsed' | 'grow'>>(
  {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    marginLeft: spacing.m,
    maxWidth: '480px',
  },
  ({ isCollapsed, grow }) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 0,
        position: 'absolute',
        background: colors.frenchVanilla100,
        maxWidth: 'unset',
        zIndex: 1,
        '&.search-enter': {
          opacity: 0,
        },
        '&.search-enter-active': {
          opacity: 1,
          transition: `opacity ${mobileTransitionDuration}ms`,
        },
        '&.search-exit': {
          opacity: 1,
        },
        '&.search-exit-active': {
          opacity: 0,
          transition: `opacity ${mobileTransitionDuration}ms`,
        },
      }
      : {};
    const growStyles: CSSObject = grow
      ? {
        width: '100%',
        maxWidth: '100%',
      }
      : {};
    return { ...collapseStyles, ...growStyles };
  },
);

const inputHeight = spacing.l
const SearchSubmit = styled(IconButton)({
  width: inputHeight,
  height: inputHeight,
  position: `absolute`,
  margin: `${spacing.xxxs} ${spacing.xxs}`,
  bottom: `${spacing.zero}`,
  zIndex: 3,
});

const SearchInput = styled(TextInput)<Pick<SearchBarProps, 'isCollapsed'> & {inputColors: SearchThemeAttributes}>(
  ({isCollapsed, inputColors}) => {
    const collapseStyles = isCollapsed
      ? {
        ...type.h3,
        fontWeight: 400,
        padding: `${spacing.xs} 0`,
        margin: `${spacing.xs} ${spacing.s}`,
        maxWidth: 'none',
        width: `calc(100% - ${spacing.l} - ${spacing.xl})`,
      }
      : {};

    return {
      ...type.body,
      backgroundColor: inputColors.background,
      boxShadow: inputColors.boxShadow,
      color: inputColors.color,
      maxWidth: '480px',
      paddingLeft: spacingNumbers.xl + spacingNumbers.xxs,
      paddingRight: spacing.xl,
      border: 'none',
      WebkitAppearance: 'none',
      transition: 'background-color 120ms, color 120ms, box-shadow 200ms, border-color 200ms',
      zIndex: 2,
      '&::-webkit-search-cancel-button': {
        display: 'none',
      },
      '&::placeholder': {
        color: inputColors.placeholderColor,
      },
      '&:not([disabled])': {
        '&:focus, &:active': {
          outline: 'none',
          boxShadow: inputColors.boxShadow,
        },
      },
      ...collapseStyles,
    };
  }
);

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static Theme = SearchTheme;
  static defaultProps = {
    searchTheme: SearchTheme.Light,
    placeholder: 'Search',
    accessibleLabel: 'Search',
    showClearButton: true,
  };

  private inputRef = React.createRef<HTMLInputElement>();
  private formRef = React.createRef<HTMLFormElement>();

  state: Readonly<SearchBarState> = {
    mobileToggle: false,
    searchQuery: '',
    isFocused: false,
  };

  getThemeColors = () => getInputColors(
    typeof this.props.searchTheme === 'number'
      ? searchThemes[this.props.searchTheme]
      : { ...searchThemes[SearchTheme.Transparent], ...this.props.searchTheme },
    this.state.isFocused,
  );

  getIconButtonType = (): IconButtonVariant => {
    const isDarkBackground = chroma(this.getThemeColors().background || `rgba(0, 0, 0, 0)`).get('lab.l') < 70
    return isDarkBackground ? IconButton.Variant.Inverse : IconButton.Variant.Plain
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.state.searchQuery.trim()) {
      this.props.onSubmit(event);
    } else {
      this.focusInput();
    }
  }

  openMobileSearch(): void {
    this.setState({ mobileToggle: true });
  }

  closeMobileSearch(): void {
    this.setState({ mobileToggle: false });
  }

  focusInput(): void {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
    if (this.props.onInputChange) {
      this.props.onInputChange(event)
    }
  };

  clearForm = (): void => {
    if (this.formRef.current) {
      this.formRef.current.reset()
    }
  }

  render() {
    const {
      grow,
      onSubmit,
      isCollapsed,
      onInputChange,
      autocompleteItems,
      accessibleId,
      searchTheme,
      placeholder,
      rightAlign,
      accessibleLabel,
      showClearButton,
      clearButtonLabel,
      ...elemProps
    } = this.props;

    return (
      <SearchContainer
        role="search"
        isCollapsed={isCollapsed}
        onSubmit={this.handleSubmit}
        innerRef={this.formRef}
        {...elemProps}
      >
        <SearchSubmit
          aria-label={accessibleLabel}
          icon={searchIcon}
          variant={this.getIconButtonType()}
          type="submit"
        />
        <FormField
          grow={grow}
          label={accessibleLabel}
          labelPosition={FormFieldLabelPosition.Hidden}
          inputId={accessibleId}
          className={css({marginBottom: spacingNumbers.zero, width: grow ? '100%' : 'auto'})}
        >
          <Combobox
            clearButtonVariant={this.getIconButtonType()}
            autocompleteItems={autocompleteItems}
            onChange={this.handleSearchInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            showClearButton={showClearButton}
            clearButtonLabel={clearButtonLabel}
          >
            <SearchInput
              inputRef={this.inputRef}
              value={this.state.searchQuery}
              placeholder={placeholder}
              inputColors={this.getThemeColors()}
            />
          </Combobox>
        </FormField>
      </SearchContainer>
    );
  }
}
