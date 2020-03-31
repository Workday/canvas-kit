import * as React from 'react';
import styled from '@emotion/styled';
import {CSSObject} from '@emotion/core';
import {type, colors, spacing, spacingNumbers} from '@workday/canvas-kit-react-core';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {searchIcon, xIcon} from '@workday/canvas-system-icons-web';
import {FormField, FormFieldLabelPosition} from '@workday/canvas-kit-react-form-field';
import {Combobox} from '@workday/canvas-kit-labs-react-combobox';
import {TextInput} from '@workday/canvas-kit-react-text-input';
import {MenuItemProps} from '@workday/canvas-kit-labs-react-menu';
import {SearchThemeAttributes, searchThemes} from '../shared/themes';
import {SearchTheme} from '../shared/types';
import chroma from 'chroma-js';
import uuid from 'uuid/v4';

export interface SearchBarProps extends GrowthBehavior, React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * The function called when the SearchBar form is submitted. The current input value is passed to the callback function.
   */
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  /**
   * If true, collapse the SearchBar text input into a toggle icon. Useful for responsive layouts.
   * @default false
   */
  isCollapsed?: boolean;
  /**
   * The function called when the SearchBar text input changes.
   */
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * The autocomplete items of the SearchBar. This array of menu items is shown under the search bar.
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * The theme of the header the search input is being rendered in.
   */
  searchTheme?: SearchTheme | SearchThemeAttributes;
  /**
   * The placeholder text of the SearchBar text input.
   * @default Search
   */
  placeholder?: string;
  /**
   * The initial value of the SearchBar text input.
   */
  initialValue?: string;
  /**
   * If true, right-align the SearchBar. If false, the text input should grow to left-align the SearchBar.
   * @default false
   */
  rightAlign?: boolean;
  /**
   * The screenreader label text for the SearchBar text input.
   * @default Search
   */
  inputLabel?: string;
  /**
   * The screenreader label text for the SearchBar submit button.
   * @default Search
   */
  submitLabel: string;
  /**
   * The screenreader label text for the SearchBar clear button.
   * @default Reset Search Form
   */
  clearButtonAriaLabel?: string;
  /**
   * The screenreader label text for the button to open the collapsed SearchBar.
   * @default Open Search
   */
  openButtonLabel: string;
  /**
   * The screenreader label text for the button to close the open SearchBar.
   * @default Cancel
   */
  closeButtonLabel: string;
  /**
   * If true, render the SearchBar with a button to clear the text input.
   * @default true
   */
  showClearButton?: boolean;
}

export interface SearchBarState {
  showForm: boolean;
  searchQuery: string;
  isFocused: boolean;
}

function getInputColors(theme: SearchThemeAttributes, isFocused?: boolean) {
  return {
    background: isFocused && theme.backgroundFocus ? theme.backgroundFocus : theme.background,
    backgroundHover: theme.backgroundHover,
    color: isFocused && theme.colorFocus ? theme.colorFocus : theme.color,
    placeholderColor:
      isFocused && theme.placeholderColorFocus
        ? theme.placeholderColorFocus
        : theme.placeholderColor,
    boxShadow: isFocused && theme.boxShadowFocus ? theme.boxShadowFocus : theme.boxShadow,
  };
}

const formCollapsedBackground = colors.frenchVanilla100;

const maxWidth = 480;
const minWidth = 120;
const height = 44;

const SearchForm = styled('form')<
  Pick<SearchBarProps, 'isCollapsed' | 'rightAlign' | 'grow'> & Pick<SearchBarState, 'showForm'>
>(
  {
    position: 'relative',
    flex: `1 1 auto`, // Instead of just flex-grow: 1 for IE11, see https://github.com/philipwalton/flexbugs#flexbug-1
    display: 'flex',
    alignItems: 'center',
    marginLeft: spacing.m,
    minWidth: minWidth,
  },
  ({isCollapsed, showForm, rightAlign, grow}) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          margin: 0,
          position: showForm ? 'absolute' : 'relative',
          backgroundColor: showForm ? formCollapsedBackground : 'rgba(0, 0, 0, 0)',
          transition: 'background-color 120ms',
          maxWidth: showForm ? 'none' : spacingNumbers.xl + spacingNumbers.xxs,
          minWidth: spacingNumbers.xl + spacingNumbers.xs,
          overflow: showForm ? 'visible' : 'hidden',
          zIndex: 1,
        }
      : {};
    const rightAlignStyles: CSSObject = rightAlign
      ? {
          textAlign: 'right',
          maxWidth: grow ? '100%' : maxWidth,
        }
      : {};
    return {...rightAlignStyles, ...collapseStyles};
  }
);

const SearchContainer = styled('div')({
  position: `relative`,
  width: `100%`,
  textAlign: 'left',
  minHeight: height,
  height: height, // Needed to keep IE11 vertically centered
});

const SearchCombobox = styled(Combobox)({
  width: `100%`,
});

const SearchIcon = styled(IconButton)<Pick<SearchBarProps, 'isCollapsed'> & {isHidden: boolean}>(
  ({isCollapsed, isHidden}) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
          width: spacing.xl,
          height: spacing.xl,
        }
      : {
          width: spacing.l,
          height: spacing.l,
        };

    return {
      position: `absolute`,
      margin: `auto ${spacing.xxs}`,
      top: spacing.zero,
      bottom: spacing.zero,
      zIndex: 3,
      display: isHidden ? 'none' : 'flex',
      ...collapseStyles,
    };
  }
);

const CloseButton = styled(IconButton)<
  Pick<SearchBarProps, 'isCollapsed'> & Pick<SearchBarState, 'showForm'>
>(({isCollapsed, showForm}) => {
  const collapseStyles: CSSObject =
    isCollapsed && showForm
      ? {
          display: 'inline-block',
        }
      : {
          display: 'none',
        };

  return {
    position: `absolute`,
    top: spacing.zero,
    right: spacing.zero,
    bottom: spacing.zero,
    margin: `auto ${spacing.xxs}`,
    zIndex: 3,
    ...collapseStyles,
  };
});

const SearchField = styled(FormField)<
  Pick<SearchBarProps, 'isCollapsed' | 'grow'> & Pick<SearchBarState, 'showForm'>
>(({isCollapsed, showForm, grow}) => {
  return {
    display: (isCollapsed && showForm) || !isCollapsed ? 'inline-block' : 'none',
    width: '100%',
    height: height,
    maxWidth: isCollapsed || grow ? '100%' : maxWidth,
    marginBottom: spacingNumbers.zero,
    '> div': {
      display: 'block',
    },
  };
});

const SearchInput = styled(TextInput)<
  Pick<SearchBarProps, 'isCollapsed' | 'grow'> & {inputColors: ReturnType<typeof getInputColors>}
>(({isCollapsed, inputColors, grow}) => {
  const collapseStyles: CSSObject = isCollapsed
    ? {
        ...type.h3,
        fontWeight: 400,
        paddingLeft: spacingNumbers.xl + spacingNumbers.s,
        paddingRight: spacingNumbers.xl + spacingNumbers.s,
        maxWidth: 'none',
        minWidth: 0,
        backgroundColor: `rgba(0, 0, 0, 0)`,
      }
    : {
        maxWidth: grow ? '100%' : maxWidth,
        minWidth: minWidth,
        paddingLeft: spacingNumbers.xl + spacingNumbers.xxs,
        paddingRight: spacing.xl,
        backgroundColor: inputColors.background,
      };
  return {
    ...type.body,
    boxShadow: inputColors.boxShadow,
    color: inputColors.color,
    border: 'none',
    WebkitAppearance: 'none',
    transition: 'background-color 120ms, color 120ms, box-shadow 200ms, border-color 200ms',
    zIndex: 2,
    height: height,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xs,
    width: '100%',
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
      '&:hover': {
        backgroundColor: inputColors.backgroundHover,
      },
    },
    ...collapseStyles,
  };
});

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static Theme = SearchTheme;
  static defaultProps = {
    placeholder: 'Search',
    inputLabel: 'Search',
    submitLabel: 'Search',
    openButtonLabel: 'Open Search',
    closeButtonLabel: 'Cancel',
    showClearButton: true,
  };

  private inputRef = React.createRef<HTMLInputElement>();
  private openRef = React.createRef<HTMLButtonElement>();
  private labelId = uuid();

  state: Readonly<SearchBarState> = {
    showForm: false,
    searchQuery: '',
    isFocused: false,
  };

  private getTheme = () => {
    let theme: SearchThemeAttributes;
    if (typeof this.props.searchTheme === 'number') {
      theme = searchThemes[this.props.searchTheme];
    } else if (this.props.searchTheme) {
      theme = this.props.searchTheme;
    } else {
      theme = searchThemes[SearchTheme.Light];
    }
    return theme;
  };

  private getThemeColors = (): ReturnType<typeof getInputColors> => {
    const theme =
      this.props.isCollapsed && this.state.showForm
        ? searchThemes[SearchTheme.Transparent]
        : this.getTheme();
    return getInputColors(theme, this.state.isFocused);
  };

  getIconButtonType = (): IconButtonVariant => {
    let background = this.getThemeColors().background || `#fff`;
    if (this.props.isCollapsed && this.state.showForm) {
      background = formCollapsedBackground;
    }
    const isDarkBackground = chroma(background).get('lab.l') < 70;
    return isDarkBackground ? IconButton.Variant.Inverse : IconButton.Variant.Plain;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.state.searchQuery.trim()) {
      this.props.onSubmit(event);
    } else {
      this.focusInput();
    }
  };

  openCollapsedSearch = (): void => {
    if (this.props.isCollapsed && !this.state.showForm) {
      this.setState({showForm: true});
    }
  };

  closeCollapsedSearch = (): void => {
    if (this.props.isCollapsed && this.state.showForm) {
      this.setState({showForm: false});
    }
  };

  componentDidUpdate(prevProps: SearchBarProps, prevState: SearchBarState) {
    const showFormToggled = this.state.showForm !== prevState.showForm;
    if (showFormToggled) {
      if (this.state.showForm) {
        this.focusInput();
      } else {
        this.focusOpen();
      }
    }
  }

  focusInput = (): void => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  focusOpen = (): void => {
    if (this.openRef.current) {
      this.openRef.current.focus();
    }
  };

  handleFocus = (): void => {
    this.setState({isFocused: true});
  };

  handleBlur = (): void => {
    this.setState({isFocused: false});
  };

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({searchQuery: event.target.value});
    if (this.props.onInputChange) {
      this.props.onInputChange(event);
    }
  };

  render() {
    const {
      grow,
      onSubmit,
      isCollapsed,
      onInputChange,
      autocompleteItems,
      initialValue,
      searchTheme,
      placeholder,
      rightAlign,
      inputLabel,
      submitLabel,
      showClearButton,
      clearButtonAriaLabel,
      closeButtonLabel,
      openButtonLabel,
      ...elemProps
    } = this.props;

    return (
      <SearchForm
        role="search"
        action="."
        rightAlign={rightAlign}
        grow={grow}
        aria-labelledby={this.labelId}
        isCollapsed={isCollapsed}
        onSubmit={this.handleSubmit}
        showForm={this.state.showForm}
        {...elemProps}
      >
        <SearchContainer>
          <SearchIcon
            aria-label={submitLabel}
            icon={searchIcon}
            isCollapsed={isCollapsed}
            variant={this.getIconButtonType()}
            type="submit"
            isHidden={!!isCollapsed && !this.state.showForm}
          />
          <SearchIcon
            aria-label={openButtonLabel}
            icon={searchIcon}
            isCollapsed={isCollapsed}
            variant={this.getIconButtonType()}
            onClick={this.openCollapsedSearch}
            buttonRef={this.openRef}
            type="button"
            isHidden={!isCollapsed || (!!isCollapsed && this.state.showForm)}
          />
          <SearchField
            grow={grow}
            id={this.labelId}
            inputId={`input-${this.labelId}`}
            label={inputLabel}
            labelPosition={FormFieldLabelPosition.Hidden}
            useFieldset={false}
            isCollapsed={isCollapsed}
            showForm={this.state.showForm}
          >
            <SearchCombobox
              initialValue={initialValue}
              clearButtonVariant={this.getIconButtonType()}
              autocompleteItems={autocompleteItems}
              onChange={this.handleSearchInputChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              showClearButton={!isCollapsed && showClearButton}
              clearButtonAriaLabel={clearButtonAriaLabel || 'Reset Search Form'}
              labelId={this.labelId}
            >
              <SearchInput
                inputRef={this.inputRef}
                value={this.state.searchQuery}
                placeholder={placeholder}
                isCollapsed={isCollapsed}
                inputColors={this.getThemeColors()}
                name="search"
              />
            </SearchCombobox>
          </SearchField>
          <CloseButton
            aria-label={closeButtonLabel}
            icon={xIcon}
            isCollapsed={isCollapsed}
            variant={IconButton.Variant.Plain}
            showForm={this.state.showForm}
            onClick={this.closeCollapsedSearch}
            type="button"
          />
        </SearchContainer>
      </SearchForm>
    );
  }
}
