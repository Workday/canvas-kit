import * as React from 'react';
import {CSSObject} from '@emotion/core';
import {colors, space, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {GrowthBehavior, styled} from '@workday/canvas-kit-react/common';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';
import {searchIcon, xIcon} from '@workday/canvas-system-icons-web';
import {FormField, FormFieldLabelPosition} from '@workday/canvas-kit-react/form-field';
import {Combobox} from '@workday/canvas-kit-labs-react/combobox';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {MenuItemProps} from '@workday/canvas-kit-preview-react/menu';
import {SearchThemeAttributes, searchThemes, SearchTheme} from './themes';
import chroma from 'chroma-js';
import uuid from 'uuid/v4';

export interface SearchFormProps extends GrowthBehavior, React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * The function called when the SearchForm form is submitted. The current input value is passed to the callback function.
   */
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  /**
   * If true, collapse the SearchForm text input into a toggle icon. Useful for responsive layouts.
   * @default false
   */
  isCollapsed?: boolean;
  /**
   * The function called when the SearchForm text input changes.
   */
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * The autocomplete items of the SearchForm. This array of menu items is shown under the search bar.
   */
  autocompleteItems?: React.ReactElement<MenuItemProps>[];
  /**
   * The theme of the header the search input is being rendered in.
   */
  searchTheme?: SearchTheme | SearchThemeAttributes;
  /**
   * The placeholder text of the SearchForm text input.
   * @default Search
   */
  placeholder?: string;
  /**
   * The initial value of the SearchForm text input.
   */
  initialValue?: string;
  /**
   * If true, right-align the SearchForm. If false, the text input should grow to left-align the SearchForm.
   * @default false
   */
  rightAlign?: boolean;
  /**
   * The screenreader label text for the SearchForm text input.
   * @default Search
   */
  inputLabel?: string;
  /**
   * The screenreader label text for the SearchForm submit button.
   * @default Search
   */
  submitAriaLabel?: string;
  /**
   * The screenreader label text for the SearchForm clear button.
   * @default Reset Search Form
   */
  clearButtonAriaLabel?: string;
  /**
   * The screenreader label text for the button to open the collapsed SearchForm.
   * @default Open Search
   */
  openButtonAriaLabel?: string;
  /**
   * The screenreader label text for the button to close the open SearchForm.
   * @default Cancel
   */
  closeButtonAriaLabel?: string;
  /**
   * If true, render the SearchForm with a button to clear the text input.
   * @default true
   */
  showClearButton?: boolean;
  /**
   * Height of the Search Form in pixels
   * @default 40
   */
  height?: number;
}

export interface SearchFormState {
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

const StyledSearchForm = styled('form')<
  Pick<SearchFormProps, 'isCollapsed' | 'rightAlign' | 'grow'> & Pick<SearchFormState, 'showForm'>
>(
  {
    position: 'relative',
    flex: `1 1 auto`, // Instead of just flex-grow: 1 for IE11, see https://github.com/philipwalton/flexbugs#flexbug-1
    display: 'flex',
    alignItems: 'center',
    marginLeft: space.m,
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
          maxWidth: showForm ? 'none' : spaceNumbers.xl + spaceNumbers.xxs,
          minWidth: spaceNumbers.xl + spaceNumbers.xs,
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

const SearchContainer = styled('div')<Pick<SearchFormProps, 'height'>>(
  {
    position: `relative`,
    display: 'flex',
    alignItems: 'center',
    width: `100%`,
    textAlign: 'left',
  },
  ({height}) => ({
    minHeight: height,
    height: height, // Needed to keep IE11 vertically centered
  })
);

const SearchCombobox = styled(Combobox)({
  width: `100%`,
});

const SearchIcon = styled(IconButton)<Pick<SearchFormProps, 'isCollapsed'> & {isHidden: boolean}>(
  ({isCollapsed, isHidden}) => {
    const collapsedSize = 40;
    const size = 32;
    const collapseStyles: CSSObject = isCollapsed
      ? {
          minWidth: collapsedSize,
          width: collapsedSize,
          minHeight: collapsedSize,
          height: collapsedSize,
        }
      : {
          minWidth: size,
          width: size,
          minHeight: size,
          height: size,
        };

    return {
      position: `absolute`,
      margin: isCollapsed ? `auto ${space.xxs}` : `auto ${space.xxxs}`,
      top: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      zIndex: 3,
      display: isHidden ? 'none' : 'flex',
      ...collapseStyles,
    };
  }
);

const CloseButton = styled(IconButton)<
  Pick<SearchFormProps, 'isCollapsed'> & Pick<SearchFormState, 'showForm'>
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
    top: 0,
    bottom: 0,
    right: 0,
    margin: `auto ${space.xxs}`,
    zIndex: 3,
    ...collapseStyles,
  };
});

const SearchField = styled(FormField)<
  Pick<SearchFormProps, 'isCollapsed' | 'grow' | 'height'> & Pick<SearchFormState, 'showForm'>
>(({isCollapsed, showForm, grow, height}) => {
  return {
    display: (isCollapsed && showForm) || !isCollapsed ? 'inline-block' : 'none',
    width: '100%',
    height: height,
    maxWidth: isCollapsed || grow ? '100%' : maxWidth,
    marginBottom: space.zero,
    '> div': {
      display: 'block',
    },
  };
});

const SearchInput = styled(TextInput)<
  Pick<SearchFormProps, 'isCollapsed' | 'grow' | 'height'> & {
    inputColors: ReturnType<typeof getInputColors>;
  }
>(({isCollapsed, inputColors, grow, height}) => {
  const collapseStyles: CSSObject = isCollapsed
    ? {
        fontSize: '20px',
        lineHeight: '20px', // For ie11, line-height needs to match font-size
        paddingLeft: spaceNumbers.xl + spaceNumbers.s,
        paddingRight: spaceNumbers.xl + spaceNumbers.s,
        maxWidth: 'none',
        minWidth: 0,
        backgroundColor: `rgba(0, 0, 0, 0)`,
        height: height,
      }
    : {
        maxWidth: grow ? '100%' : maxWidth,
        minWidth: minWidth,
        paddingLeft: spaceNumbers.xl + spaceNumbers.xxs,
        paddingRight: space.xl,
        backgroundColor: inputColors.background,
        height: height,
      };
  return {
    fontSize: '14px',
    lineHeight: '14px', // For ie11, line-height needs to match font-size
    boxShadow: inputColors.boxShadow,
    color: inputColors.color,
    border: 'none',
    WebkitAppearance: 'none',
    transition: 'background-color 120ms, color 120ms, box-shadow 200ms, border-color 200ms',
    zIndex: 2,
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

export class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  static Theme = SearchTheme;

  private inputRef = React.createRef<HTMLInputElement>();
  private openRef = React.createRef<HTMLButtonElement>();
  private labelId = uuid();

  state: Readonly<SearchFormState> = {
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

  getIconButtonType = (): IconButtonProps['variant'] => {
    let background = this.getThemeColors().background || `#fff`;
    if (this.props.isCollapsed && this.state.showForm) {
      background = formCollapsedBackground;
    }
    const isDarkBackground = chroma(background).get('lab.l') < 70;
    return isDarkBackground ? 'inverse' : 'plain';
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

  componentDidUpdate(prevProps: SearchFormProps, prevState: SearchFormState) {
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
      clearButtonAriaLabel = 'Reset Search Form',
      placeholder = 'Search',
      inputLabel = 'Search',
      submitAriaLabel = 'Search',
      openButtonAriaLabel = 'Open Search',
      closeButtonAriaLabel = 'Cancel',
      showClearButton = true,
      height = 40,
      grow,
      onSubmit,
      isCollapsed,
      onInputChange,
      autocompleteItems,
      initialValue,
      searchTheme,
      rightAlign,
      ...elemProps
    } = this.props;

    return (
      <StyledSearchForm
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
        <SearchContainer height={height}>
          <SearchIcon
            aria-label={submitAriaLabel}
            icon={searchIcon}
            isCollapsed={isCollapsed}
            variant={this.getIconButtonType()}
            type="submit"
            isHidden={!!isCollapsed && !this.state.showForm}
          />
          <SearchIcon
            aria-label={openButtonAriaLabel}
            icon={searchIcon}
            isCollapsed={isCollapsed}
            variant={this.getIconButtonType()}
            onClick={this.openCollapsedSearch}
            ref={this.openRef}
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
            height={height}
          >
            <SearchCombobox
              initialValue={initialValue}
              clearButtonVariant={this.getIconButtonType()}
              autocompleteItems={autocompleteItems}
              onChange={this.handleSearchInputChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              showClearButton={!isCollapsed && showClearButton}
              clearButtonAriaLabel={clearButtonAriaLabel}
              labelId={this.labelId}
            >
              <SearchInput
                ref={this.inputRef}
                value={this.state.searchQuery}
                placeholder={placeholder}
                isCollapsed={isCollapsed}
                inputColors={this.getThemeColors()}
                height={height}
                name="search"
              />
            </SearchCombobox>
          </SearchField>
          <CloseButton
            aria-label={closeButtonAriaLabel}
            icon={xIcon}
            isCollapsed={isCollapsed}
            variant="plain"
            showForm={this.state.showForm}
            onClick={this.closeCollapsedSearch}
            type="button"
          />
        </SearchContainer>
      </StyledSearchForm>
    );
  }
}
