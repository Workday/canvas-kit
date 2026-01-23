import * as React from 'react';
import {
  GrowthBehavior,
  generateUniqueId,
  accessibleHideStyles,
} from '@workday/canvas-kit-react/common';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {searchIcon, xIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Combobox} from '@workday/canvas-kit-labs-react/combobox';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {searchThemes, SearchTheme, SearchThemeAttributes} from './themes';
import chroma from 'chroma-js';
import {CSProps, calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
/**
 * @deprecated ⚠️ `SearchFormProps` is deprecated and will be removed in a future major version. Please reference our [Autocomplete example](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs#usage).
 */
export interface SearchFormProps
  extends GrowthBehavior,
    React.FormHTMLAttributes<HTMLFormElement>,
    CSProps {
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
  autocompleteItems?: React.ReactElement<any>[];
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
  /**
   * If true, allow onSubmit being called when input value is empty.
   * @default false
   */
  allowEmptyStringSearch?: boolean;
  /**
   * Sets the `id` for the label
   * @default unique identifier
   */
  labelId?: string;
}
/**
 * @deprecated ⚠️ `SearchFormState` is deprecated and will be removed in a future major version. Please reference our [Autocomplete example](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs#usage).
 */
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

const formCollapsedBackground = '#fff';

/**
 * @deprecated ⚠️ `searchFormStencil` is deprecated and will be removed in a future major version. Please reference our [Autocomplete example](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs#usage).
 */
export const searchFormStencil = createStencil({
  vars: {
    minWidth: '',
    maxWidth: '',
    height: '',
    background: '',
    backgroundFocus: '',
    backgroundHover: '',
    color: '',
    colorFocus: '',
    placeholderColor: '',
    placeholderColorFocus: '',
    boxShadow: '',
    boxShadowFocus: '',
  },
  parts: {
    searchContainer: 'search-form-container',
    combobox: 'search-form-combobox',
    closeButton: 'search-form-close-button',
    searchField: 'search-form-field',
    submitSearchIcon: 'search-form-submit-search-icon',
    openSearchIcon: 'search-form-open-search-icon',
    searchInput: 'search-form-input',
    closeButtonPart: 'search-form-close-button',
  },
  base: ({
    minWidth,
    maxWidth,
    searchContainerPart,
    height,
    comboboxPart,
    closeButtonPart,
    searchFieldPart,
    submitSearchIconPart,
    openSearchIconPart,
    searchInputPart,
    background,
    backgroundFocus,
    backgroundHover,
    color,
    colorFocus,
    placeholderColor,
    placeholderColorFocus,
    boxShadow,
    boxShadowFocus,
  }) => ({
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    marginInlineStart: system.space.x6,
    minWidth: cssVar(minWidth, px2rem(120)),
    maxWidth: cssVar(maxWidth, px2rem(480)),
    [searchContainerPart]: {
      position: `relative`,
      display: 'flex',
      alignItems: 'center',
      width: `100%`,
      textAlign: 'left',
      minHeight: cssVar(height, system.space.x10),
    },
    [comboboxPart]: {
      width: `100%`,
    },
    [closeButtonPart]: {
      position: `absolute`,
      top: 0,
      bottom: 0,
      right: 0,
      margin: `auto ${system.space.x2}`,
      zIndex: 3,
      display: 'none',
    },
    [searchFieldPart]: {
      width: '100%',
      height: cssVar(height, system.space.x10),
      maxWidth: cssVar(maxWidth, px2rem(480)),
      marginBottom: 0,
      display: 'inline-block',
      '> div': {
        display: 'block',
      },
    },
    [`${submitSearchIconPart}, ${openSearchIconPart}`]: {
      position: `absolute`,
      margin: `auto ${system.space.x2}`,
      top: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      zIndex: 3,
      ':dir(rtl)': {
        right: 0,
        left: 'auto',
      },
    },
    [searchInputPart]: {
      maxWidth,
      minWidth,
      paddingInlineStart: calc.add(system.space.x10, system.space.x2),
      paddingInlineEnd: system.space.x10,
      backgroundColor: cssVar(background, system.color.bg.alt.soft),
      height: cssVar(height, system.space.x10),
      fontSize: system.fontSize.subtext.large,
      boxShadow: boxShadow,
      color: cssVar(color, system.color.text.default),
      border: 'none',
      WebkitAppearance: 'none',
      transition: 'background-color 120ms, color 120ms, box-shadow 200ms, border-color 200ms',
      zIndex: 2,
      width: '100%',
      '&::-webkit-search-cancel-button': {
        display: 'none',
      },
      '&::placeholder': {
        color: cssVar(placeholderColor, system.color.text.hint),
      },
      '&:placeholder-shown': {
        textOverflow: 'ellipsis',
      },

      '&:hover': {
        backgroundColor: cssVar(backgroundHover, cssVar(background, system.color.bg.alt.default)),
      },

      '&:is(:focus-visible, .focus):where(:not([disabled]))': {
        background: cssVar(backgroundFocus, system.color.bg.alt.soft),
        color: colorFocus,
        borderColor: brand.common.focusOutline,
        outline: `${px2rem(2)} solid transparent`,
        boxShadow: cssVar(
          boxShadowFocus,
          `0 0 0 0px ${system.color.bg.default}, 0 0 0 2px ${brand.common.focusOutline}`
        ),
        '::placeholder': {
          color: placeholderColorFocus,
        },
      },
    },
  }),
  modifiers: {
    isHiddenSubmitSearchIcon: {
      true: ({submitSearchIconPart}) => ({
        [submitSearchIconPart]: {
          display: 'none',
        },
      }),
    },
    isHiddenOpenSeachIcon: {
      true: ({openSearchIconPart}) => ({
        [openSearchIconPart]: {
          display: 'none',
        },
      }),
    },
    isCollapsed: {
      true: ({
        searchFieldPart,
        submitSearchIconPart,
        openSearchIconPart,
        searchInputPart,
        height,
      }) => ({
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 0,
        position: 'relative',
        backgroundColor: system.color.bg.transparent.default,
        transition: 'background-color 120ms',
        maxWidth: calc.add(system.space.x10, system.space.x2),
        minWidth: calc.add(system.space.x10, system.space.x3),
        overflow: 'hidden',
        zIndex: 1,
        [searchFieldPart]: {
          display: 'none',
          maxWidth: '100%',
        },
        [`${submitSearchIconPart}, ${openSearchIconPart}`]: {
          margin: `auto ${system.space.x2}`,
        },
        [searchInputPart]: {
          fontSize: '20px',
          paddingInlineStart: calc.add(system.space.x10, system.space.x4),
          paddingInlineEnd: calc.add(system.space.x10, system.space.x4),
          maxWidth: 'none',
          minWidth: 0,
          backgroundColor: system.color.bg.transparent.default,
          height: cssVar(height, system.space.x10),
        },
      }),
      false: ({searchFieldPart}) => ({
        [searchFieldPart]: {
          display: 'inline-block',
        },
      }),
    },
    rightAlign: {
      true: {
        textAlign: 'right',
      },
    },
    showForm: {
      true: {},
      false: {},
    },
    grow: {
      true: {
        maxWidth: '100%',
        [`[data-part="search-form-field"], [data-part="search-form-input"]`]: {
          maxWidth: '100%',
        },
      },
    },
    searchTheme: {
      // Light theme
      light: ({searchInputPart}) => ({
        [searchInputPart]: {
          background: system.color.bg.alt.soft,
          color: system.color.text.default,

          '::placeholder': {
            color: system.color.text.hint,
          },
          '&:hover': {
            background: system.color.bg.alt.default,
          },
          '&:is(:focus-visible, &.focus):where(:not([disabled]))': {
            background: system.color.bg.alt.soft,
            boxShadow: `0 0 0 0px ${system.color.border.inverse}, 0 0 0 2px ${brand.common.focusOutline}`,
          },
        },
      }),
      // Dark theme
      dark: ({searchInputPart}) => ({
        [searchInputPart]: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          color: system.color.text.inverse,
          boxShadow: 'none',
          '::placeholder': {
            color: system.color.text.inverse,
          },

          ':hover': {
            background: 'rgba(0, 0, 0, 0.2)',
          },

          '&:is(:focus-visible, &.focus):where(:not([disabled]))': {
            background: system.color.bg.default,
            color: system.color.text.default,
            '::placeholder': {
              color: system.color.text.hint,
            },
            boxShadow: 'none',
          },
        },
      }),
      //Transparent theme
      transparent: ({searchInputPart}) => ({
        [searchInputPart]: {
          background: system.color.bg.transparent.default,
          backgroundFocus: system.color.bg.transparent.default,
          color: system.color.text.default,
          colorFocus: system.color.text.default,
          placeholderColor: system.color.text.hint,
          placeholderColorFocus: system.color.text.hint,
          boxShadow: 'none',
          boxShadowFocus: 'none',
        },
      }),
    },
  },
  compound: [
    {
      modifiers: {showForm: 'true', isCollapsed: 'true'},
      styles: {
        position: 'absolute',
        backgroundColor: system.color.bg.default,
        maxWidth: 'none',
        overflow: 'visible',
        '& [data-part="search-form-close-button"]': {
          display: 'inline-block',
        },
        '& [data-part="search-form-field"]': {
          display: 'inline-block',
        },
        '& [data-part="search-form-input"]': {
          boxShadow: 'none',
          background: system.color.bg.transparent.default,
          ':hover': {
            background: system.color.bg.transparent.default,
          },

          '&:is(:focus-visible, &.focus):where(:not([disabled]))': {
            background: system.color.bg.transparent.default,
            boxShadow: 'none',
          },
        },
      },
    },
    {
      modifiers: {isCollapsed: 'true', showForm: 'true'},
      styles: {
        '& [data-part="search-form-field"]': {
          display: 'inline-block',
        },
      },
    },
  ],
});

/**
 * @deprecated ⚠️ `SearchForm` is deprecated and will be removed in a future major version. Please reference our [Autocomplete example](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs#usage).
 */
export class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  static Theme = SearchTheme;
  private inputRef = React.createRef<HTMLInputElement>();
  private openRef = React.createRef<HTMLButtonElement>();
  private defaultLabelId = generateUniqueId();

  state: Readonly<SearchFormState> = {
    showForm: false,
    searchQuery: '',
    isFocused: false,
  };

  private getTheme = () => {
    let theme: SearchThemeAttributes;
    if (typeof this.props.searchTheme === 'string') {
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

  getIconButtonType = (): TertiaryButtonProps['variant'] => {
    let background = this.getThemeColors().background || `#fff`;
    if (this.props.isCollapsed && this.state.showForm) {
      background = formCollapsedBackground;
    }

    const isDarkBackground = chroma(background as string).get('lab.l') < 70;

    return isDarkBackground ? 'inverse' : undefined;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.props.allowEmptyStringSearch || this.state.searchQuery.trim()) {
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
      labelId = this.defaultLabelId,
      showClearButton = true,
      height = px2rem(40),
      grow,
      onSubmit,
      isCollapsed,
      onInputChange,
      autocompleteItems,
      initialValue,
      searchTheme,
      rightAlign,
      allowEmptyStringSearch = false,
      ...elemProps
    } = this.props;

    return (
      <form
        role="search"
        action="."
        aria-labelledby={labelId}
        onSubmit={this.handleSubmit}
        {...mergeStyles(
          elemProps,
          searchFormStencil({
            grow,
            rightAlign,
            isCollapsed: isCollapsed ? 'true' : 'false',
            showForm: this.state.showForm ? 'true' : 'false',
            height: typeof height === 'number' ? px2rem(height) : height,
            isHiddenSubmitSearchIcon: !!isCollapsed && !this.state.showForm,
            isHiddenOpenSeachIcon: !isCollapsed || (!!isCollapsed && this.state.showForm),
            searchTheme: typeof searchTheme === 'string' ? searchTheme : undefined,
            ...(typeof searchTheme !== 'string' ? searchTheme : {}),
          })
        )}
      >
        <div {...searchFormStencil.parts.searchContainer}>
          <TertiaryButton
            aria-label={submitAriaLabel}
            icon={searchIcon}
            variant={this.getIconButtonType()}
            type="submit"
            size="small"
            {...searchFormStencil.parts.submitSearchIcon}
          />
          <TertiaryButton
            aria-label={openButtonAriaLabel}
            icon={searchIcon}
            variant={this.getIconButtonType()}
            onClick={this.openCollapsedSearch}
            ref={this.openRef}
            type="button"
            {...searchFormStencil.parts.openSearchIcon}
          />
          <FormField id={labelId} {...searchFormStencil.parts.searchField}>
            <FormField.Label cs={accessibleHideStyles}>{inputLabel}</FormField.Label>
            <Combobox
              initialValue={initialValue}
              clearButtonVariant={this.getIconButtonType()}
              autocompleteItems={autocompleteItems}
              onChange={this.handleSearchInputChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              showClearButton={!isCollapsed && showClearButton}
              clearButtonAriaLabel={clearButtonAriaLabel}
              labelId={labelId}
              {...searchFormStencil.parts.combobox}
            >
              <FormField.Input
                as={TextInput}
                ref={this.inputRef as any}
                cs={this.state.isFocused ? 'focus' : undefined}
                onBlur={this.handleBlur}
                value={this.state.searchQuery}
                placeholder={placeholder}
                name="search"
                autoComplete="off"
                {...searchFormStencil.parts.searchInput}
              />
            </Combobox>
          </FormField>
          <TertiaryButton
            icon={xIcon}
            aria-label={closeButtonAriaLabel}
            onClick={this.closeCollapsedSearch}
            id="foo"
            {...searchFormStencil.parts.closeButton}
          />
        </div>
      </form>
    );
  }
}
