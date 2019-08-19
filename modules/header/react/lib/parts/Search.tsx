import * as React from 'react';
import styled from 'react-emotion';
import {CSSObject} from 'create-emotion';
import {CSSTransition} from 'react-transition-group';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {IconButton} from '@workday/canvas-kit-react-button';
import {searchIcon, xIcon, xSmallIcon} from '@workday/canvas-system-icons-web';

export interface SearchProps extends React.HtmlHTMLAttributes<HTMLFormElement> {
  /**
   * The theme of the header the search input is being rendered in
   */
  themeColor: HeaderTheme;
  /**
   * The placeholder text in the input
   */
  placeholder: string;
  /**
   * The current value of the text input if a search has already been performed
   */
  value?: string;
  /**
   * False if the search input should grow to left align it. True if it should right align.
   */
  rightAlign?: boolean;
  /**
   * True if the search input should be collapsed into a toggle icon (for responsive).
   */
  collapse?: boolean;
  /**
   * An function that gets called and passed the current input value when the search form is submitted
   */
  onSearchSubmit?: (query: string) => void;
}

export interface SearchState {
  mobileToggle: boolean;
  value: string;
  focused: boolean;
  hovered: boolean;
}

const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<Pick<SearchProps, 'rightAlign' | 'collapse'>>(
  {
    position: 'relative',
    marginLeft: spacing.m,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  ({rightAlign, collapse}) => {
    const rightAlignStyles: CSSObject = rightAlign
      ? {
          display: 'flex',
          maxWidth: '480px',
        }
      : {};
    const collapseStyles: CSSObject = collapse
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
    return {...rightAlignStyles, ...collapseStyles};
  }
);

const SearchInput = styled('input')<Pick<SearchProps, 'themeColor' | 'collapse'>>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacingNumbers.xl + spacingNumbers.xxs,
    paddingRight: spacing.xl,
    maxWidth: '480px',
    minWidth: spacingNumbers.xs * 10,
    width: '100%',
    height: spacingNumbers.xl + spacingNumbers.xxxs,
    borderRadius: '4px',
    boxSizing: 'border-box',
    border: 'none',
    WebkitAppearance: 'none',
    transition: 'background 150ms',
    '&::-webkit-search-cancel-button': {
      display: 'none',
    },
  },
  ({themeColor, collapse}) => {
    const inputColors = getInputColors(themeColor, collapse!);

    const focusStyles = {
      '&:not([disabled])': {
        '&:focus, &:active': {
          outline: 'none',
          boxShadow: inputColors.focusBoxShadow,
          background: inputColors.focusBackground,
          color: colors.blackPepper300,
          '&::placeholder': {
            color: colors.licorice300,
          },
        },
        '&:hover': {
          background: themeColor === HeaderTheme.White && !collapse ? colors.soap300 : undefined,
        },
      },
    };

    const collapseStyles = collapse
      ? {
          ...type.h3,
          fontWeight: 400,
          background: 'transparent',
          padding: `${spacing.xs} 0`,
          margin: `${spacing.xs} ${spacing.s}`,
          maxWidth: 'unset',
          width: `calc(100% - ${spacing.l} - ${spacing.xl})`,
          '&::-webkit-search-cancel-button': {
            display: 'none',
          },
        }
      : {};

    return {
      background: inputColors.background,
      color: inputColors.color,
      '&::placeholder': {
        color: inputColors.placeholderColor,
      },
      ...focusStyles,
      ...collapseStyles,
    };
  }
);

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: spacing.xxs,
};

const SearchReset = styled(IconButton)<Pick<SearchState, 'value'>>(
  {
    width: spacing.l,
    height: spacing.l,
    marginLeft: -spacingNumbers.xl,
    padding: 0,
  },
  ({value}) => ({
    display: value ? 'block' : 'none',
  })
);

const SearchSubmit = styled(IconButton)({
  width: spacing.l,
  height: spacing.l,
  left: spacing.xxs,
  marginRight: -spacingNumbers.l,
  marginLeft: 0,
  padding: 0,
});

const iconButtonVariant = (inverse: boolean) =>
  inverse ? IconButton.Variant.Inverse : IconButton.Variant.Plain;

export class Search extends React.Component<SearchProps, SearchState> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    headerHeight: HeaderHeight.Small,
    placeholder: 'Search',
  };

  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: SearchProps) {
    super(props);
    this.inputRef = React.createRef();
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.openMobileSearch = this.openMobileSearch.bind(this);
    this.closeMobileSearch = this.closeMobileSearch.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.state = {
      mobileToggle: false,
      focused: false,
      hovered: false,
      value: this.props.value ? this.props.value : '',
    };
  }

  onSearchSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (this.inputRef.current) {
      if (this.props.onSearchSubmit && this.inputRef.current.value) {
        this.props.onSearchSubmit(this.inputRef.current.value);
      } else {
        this.focusInput();
      }
    }
  }

  openMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: true});
  }

  closeMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: false});
  }

  focusInput() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  setFocused(focus: boolean) {
    this.setState({focused: focus});
  }

  handleHover(hover: boolean) {
    this.setState({hovered: hover});
  }

  handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({value: e.target.value});
  };

  resetSearchInput = (): void => {
    this.setState({value: ''});
  };

  _renderCollapsed() {
    const collapsedIconStyle = {
      marginLeft: spacing.s,
      cursor: 'pointer',
    };

    const closeIconStyle = {
      left: 'unset',
      right: spacing.m,
      cursor: 'pointer',
    };

    const {
      themeColor,
      placeholder,
      value,
      rightAlign,
      collapse,
      onSearchSubmit,
      ...elemProps
    } = this.props;

    return (
      <React.Fragment>
        <IconButton
          aria-label="Search"
          type="submit"
          icon={searchIcon}
          variant={iconButtonVariant(themeColor !== HeaderTheme.White)}
          style={collapsedIconStyle}
          onClick={this.openMobileSearch}
        />
        <CSSTransition
          in={this.state.mobileToggle}
          classNames="search"
          timeout={mobileTransitionDuration}
          onEntering={this.focusInput}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <SearchContainer
            role="search"
            rightAlign={rightAlign}
            collapse={collapse}
            onSubmit={this.onSearchSubmit}
            {...elemProps}
          >
            <SearchInput
              placeholder={placeholder}
              themeColor={themeColor}
              collapse={collapse}
              innerRef={this.inputRef}
              onFocus={this.setFocused.bind(this, true)}
              onBlur={this.setFocused.bind(this, false)}
              onChange={this.handleSearchInputChange}
              value={this.state.value}
            />
            <IconButton
              aria-label="Reset Search Input"
              icon={xIcon}
              type="reset"
              variant={IconButton.Variant.Circle}
              style={{...iconStyle, ...closeIconStyle}}
              onClick={this.closeMobileSearch}
            />
          </SearchContainer>
        </CSSTransition>
      </React.Fragment>
    );
  }

  render() {
    const {
      themeColor,
      placeholder,
      value,
      rightAlign,
      collapse,
      onSearchSubmit,
      ...elemProps
    } = this.props;

    if (collapse) {
      return this._renderCollapsed();
    }

    return (
      <SearchContainer
        role="search"
        rightAlign={rightAlign}
        collapse={collapse}
        onSubmit={this.onSearchSubmit}
        {...elemProps}
      >
        <SearchSubmit
          aria-label="Search"
          icon={searchIcon}
          variant={iconButtonVariant(!this.state.focused && themeColor !== HeaderTheme.White)}
          onClick={this.onSearchSubmit}
          type="submit"
          toggled={false}
        />
        <SearchInput
          placeholder={placeholder}
          themeColor={themeColor}
          collapse={collapse}
          value={this.state.value}
          innerRef={this.inputRef}
          onMouseEnter={() => this.handleHover(true)}
          onMouseLeave={() => this.handleHover(false)}
          onChange={this.handleSearchInputChange}
          onFocus={this.setFocused.bind(this, true)}
          onBlur={this.setFocused.bind(this, false)}
        />
        <SearchReset
          value={this.state.value}
          aria-label="Reset Search Input"
          icon={xSmallIcon}
          variant={iconButtonVariant(
            !!this.state.value && !this.state.focused && themeColor !== HeaderTheme.White
          )}
          onClick={this.resetSearchInput}
          type="reset"
          toggled={false}
        />
      </SearchContainer>
    );
  }
}

function getInputColors(themeColor: HeaderTheme, collapsed: boolean) {
  if (collapsed) {
    return {
      background: 'transparent',
      color: colors.blackPepper300,
      placeholderColor: colors.licorice300,
    };
  } else if (themeColor === HeaderTheme.White) {
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
