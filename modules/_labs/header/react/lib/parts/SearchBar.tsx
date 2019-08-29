import * as React from 'react';
import styled, {css} from 'react-emotion';
import { CSSObject } from 'create-emotion';
import { HeaderHeight, HeaderTheme } from '../shared/types';
import { colors, spacing, spacingNumbers } from '@workday/canvas-kit-react-core';
import { focusRing, GrowthBehavior } from '@workday/canvas-kit-react-common';
import { IconButton } from '@workday/canvas-kit-react-button';
import { searchIcon } from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react-form-field';
import {Combobox} from '@workday/canvas-kit-react-combobox';
import {TextInput} from '@workday/canvas-kit-react-text-input';
import {MenuItemProps} from '@workday/canvas-kit-react-menu';

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

  headerHeight: HeaderHeight

  /**
   * The theme of the header the search input is being rendered in
   */
  themeColor: HeaderTheme; // TODO should this be variant??????????????

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

const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<Pick<SearchBarProps, 'rightAlign' | 'isCollapsed' | 'grow'>>(
  {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  ({ rightAlign, isCollapsed, grow }) => {
    const rightAlignStyles: CSSObject = rightAlign
      ? {
        display: 'flex',
        maxWidth: '480px',
      }
      : {};
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
    return { ...rightAlignStyles, ...collapseStyles, ...growStyles };
  },
);

const inputHeight = spacing.l
const SearchSubmit = styled(IconButton)({
  width: inputHeight,
  height: inputHeight,
  position: `absolute`,
  margin: `${spacing.xxxs} ${spacing.xxs}`,
  bottom: `${spacing.zero}`,
  zIndex: 1,
});

const iconButtonType = (shouldInverse: boolean) => (
  shouldInverse ? IconButton.Variant.Inverse : IconButton.Variant.Plain
);

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    headerHeight: HeaderHeight.Small,
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

  clearButtonType = iconButtonType(
    !!this.state.searchQuery && !this.state.isFocused && this.props.themeColor !== HeaderTheme.White
  );

  render() {
    const {
      grow,
      themeColor,
      rightAlign,
      isCollapsed,
      onSubmit,
      onInputChange,
      autocompleteItems,
      accessibleId,
      accessibleLabel,
      ...elemProps
    } = this.props;

    const inputColors = getInputColors(themeColor);

    return (
      <SearchContainer
        role="search"
        rightAlign={rightAlign}
        isCollapsed={isCollapsed}
        onSubmit={this.handleSubmit}
        innerRef={this.formRef}
        {...elemProps}
      >
        <SearchSubmit
          aria-label={this.props.accessibleLabel}
          icon={searchIcon}
          variant={iconButtonType(!this.state.isFocused && themeColor !== HeaderTheme.White)}
          type="submit"
          toggled={undefined}
        />
        <FormField
          grow={grow}
          label={this.props.accessibleLabel}
          hiddenLabel={true}
          inputId={accessibleId}
          className={css({marginBottom: spacingNumbers.zero})}
        >
          <Combobox
            clearButtonType={this.clearButtonType}
            autocompleteItems={this.props.autocompleteItems}
            onChange={this.handleSearchInputChange}
            showClearButton={this.props.showClearButton}
            clearButtonLabel={this.props.clearButtonLabel}
          >
            <TextInput
              inputRef={this.inputRef}
              value={this.state.searchQuery}
              placeholder={this.props.placeholder}
              className={css({
                paddingLeft: spacingNumbers.xl + spacingNumbers.xxs,
                paddingRight: spacing.xl,
                border: 'none',
                background: inputColors.background,
                color: inputColors.color,
                '&::placeholder': {
                  color: inputColors.placeholderColor,
                },
              })}
            />
          </Combobox>
        </FormField>
      </SearchContainer>
    );
  }
}

function getInputColors(themeColor: HeaderTheme) {
  if (themeColor === HeaderTheme.White) {
    return {
      background: colors.soap200,
      color: colors.blackPepper300,
      placeholderColor: colors.licorice300,
      focusBackground: colors.soap200,
      focusBoxShadow: focusRing().boxShadow,
    };
  } else {
    return {
      background: 'rgba(0,0,0,0.2)',
      color: colors.frenchVanilla100,
      placeholderColor: colors.frenchVanilla100,
      focusBackground: colors.frenchVanilla100,
    };
  }
}
