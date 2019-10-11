import * as React from 'react';
import styled, {css} from 'react-emotion';
import { CSSObject } from 'create-emotion';
import { type, colors, spacing, spacingNumbers } from '@workday/canvas-kit-react-core';
import { GrowthBehavior } from '@workday/canvas-kit-react-common';
import { IconButton, IconButtonVariant } from '@workday/canvas-kit-react-button';
import { searchIcon, xIcon } from '@workday/canvas-system-icons-web';
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
  searchTheme?: SearchTheme | SearchThemeAttributes;

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
    background: isFocused && theme.backgroundFocus ? theme.backgroundFocus : theme.background,
    backgroundHover: theme.backgroundHover,
    color: isFocused && theme.colorFocus ? theme.colorFocus : theme.color,
    placeholderColor: isFocused && theme.placeholderColorFocus ? theme.placeholderColorFocus : theme.placeholderColor,
    boxShadow: isFocused && theme.boxShadowFocus ? theme.boxShadowFocus : theme.boxShadow,
  }
}

const formCollapsedBackground = colors.frenchVanilla100;

const SearchContainer = styled('form')<Pick<SearchBarProps, | 'isCollapsed' | 'grow'> & Pick<SearchBarState, 'mobileToggle'>>(
  {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    marginLeft: spacing.m,
    maxWidth: '480px',
  },
  ({ isCollapsed, grow, mobileToggle }) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 0,
        position: mobileToggle ? 'absolute' : 'relative',
        backgroundColor: mobileToggle ? formCollapsedBackground : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 120ms',
        maxWidth: mobileToggle ? 'none' : spacingNumbers.xl + spacingNumbers.xxs,
        overflow: mobileToggle ? 'none' : 'hidden',
        zIndex: 1,
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

const SearchSubmit = styled(IconButton)<Pick<SearchBarProps, 'isCollapsed'>>(
  ({ isCollapsed }) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
        width: spacing.xl,
        height: spacing.xl,
      }
      : {
        width: spacing.l,
        height: spacing.l,
        position: `absolute`,
      };

    return {
      margin: `${spacing.xxxs} ${spacing.xxs}`,
      bottom: `${spacing.zero}`,
      zIndex: 3,
      ...collapseStyles,
    }
  }
);

const CloseButton = styled(IconButton)<Pick<SearchBarProps, 'isCollapsed'> & Pick<SearchBarState, 'mobileToggle'>>(
  ({ isCollapsed, mobileToggle }) => {
    const collapseStyles: CSSObject = isCollapsed && mobileToggle
      ? {
        display: 'inline-block'
      }
      : {
        display: 'none'
      };

    return {
      margin: `${spacing.xxxs} ${spacing.xxs}`,
      bottom: `${spacing.zero}`,
      zIndex: 3,
      ...collapseStyles,
    }
  }
);

const SearchInput = styled(TextInput)<Pick<SearchBarProps, 'isCollapsed'> & { inputColors: ReturnType<typeof getInputColors> } & Pick<SearchBarState, 'mobileToggle'>>(
  ({isCollapsed, inputColors, mobileToggle}) => {
    const collapseStyles: CSSObject = isCollapsed
      ? {
        ...type.h3,
        fontWeight: 400,
        paddingLeft: spacing.xs,
        paddingRight: spacing.xs,
        margin: `${spacing.xs} 0`,
        maxWidth: 'none',
        width: '100%',
        minWidth: 0,
        backgroundColor: `rgba(0, 0, 0, 0)`,
        display: mobileToggle ? 'inline-block' : 'none'
      }
      : {
        ...type.body,
        maxWidth: '480px',
        paddingLeft: spacingNumbers.xl + spacingNumbers.xxs,
        paddingRight: spacing.xl,
        backgroundColor: inputColors.background,
      };

    return {
      boxShadow: inputColors.boxShadow,
      color: inputColors.color,
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
        '&:hover': {
          backgroundColor: inputColors.backgroundHover,
        },
      },
      ...collapseStyles,
    };
  }
);

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static Theme = SearchTheme;
  static defaultProps = {
    placeholder: 'Search',
    accessibleLabel: 'Search',
    showClearButton: true,
  };

  private inputRef = React.createRef<HTMLInputElement>();
  private submitRef = React.createRef<HTMLButtonElement>();

  state: Readonly<SearchBarState> = {
    mobileToggle: false,
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
  }

  private getThemeColors = (): ReturnType<typeof getInputColors> => {
    const theme = this.props.isCollapsed && this.state.mobileToggle ? searchThemes[SearchTheme.Transparent] : this.getTheme();
    return getInputColors(theme, this.state.isFocused);
  }

  getIconButtonType = (): IconButtonVariant => {
    let background = this.getThemeColors().background || `rgba(0, 0, 0, 0)`;
    if (this.props.isCollapsed && this.state.mobileToggle) {
      background = formCollapsedBackground
    }
    const isDarkBackground = chroma(background).get('lab.l') < 70
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

  openMobileSearch = (): void => {
    if (this.props.isCollapsed && !this.state.mobileToggle) {
      this.setState({ mobileToggle: true });
    }
  }

  closeMobileSearch = (): void => {
    if (this.props.isCollapsed && this.state.mobileToggle) {
      this.setState({ mobileToggle: false });
    }
    this.focusSubmit()
  }

  focusInput = (): void => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  focusSubmit = (): void => {
    if (this.submitRef.current) {
      this.submitRef.current.focus();
    }
  }

  handleFocus = (): void => {
    this.setState({ isFocused: true });
  };

  handleBlur = (): void => {
    this.setState({ isFocused: false });
  };

  handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
    if (this.props.onInputChange) {
      this.props.onInputChange(event)
    }
  };

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
        role='search'
        isCollapsed={isCollapsed}
        onSubmit={this.handleSubmit}
        mobileToggle={this.state.mobileToggle}
        {...elemProps}
      >
        <SearchSubmit
          aria-label={accessibleLabel}
          icon={searchIcon}
          isCollapsed={isCollapsed}
          variant={this.getIconButtonType()}
          onClick={this.openMobileSearch}
          buttonRef={this.submitRef}
          type={this.props.isCollapsed && !this.state.mobileToggle ? 'button' : 'submit'}
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
            showClearButton={!isCollapsed && showClearButton}
            clearButtonLabel={clearButtonLabel}
          >
            <SearchInput
              inputRef={this.inputRef}
              value={this.state.searchQuery}
              placeholder={placeholder}
              isCollapsed={isCollapsed}
              mobileToggle={this.state.mobileToggle}
              inputColors={this.getThemeColors()}
            />
          </Combobox>
        </FormField>
        <CloseButton
          aria-label={clearButtonLabel || 'Cancel'}
          icon={xIcon}
          isCollapsed={isCollapsed}
          variant={IconButton.Variant.Plain}
          mobileToggle={this.state.mobileToggle}
          onClick={this.closeMobileSearch}
        />
      </SearchContainer>
    );
  }
}
