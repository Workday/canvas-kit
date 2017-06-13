import * as React from 'react';
import styled from 'react-emotion';
import {CSSObject} from 'create-emotion';
import {CSSTransition} from 'react-transition-group';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import {colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {IconButton} from '@workday/canvas-kit-react-button';
import {searchIcon, xIcon, xSmallIcon} from '@workday/canvas-system-icons-web';

export type SearchProps = {
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
};

export interface SearchState {
  mobileToggle: boolean;
  value: string;
  focused: boolean;
  hovered: boolean;
}

const mobileTransitionDuration = 250;

const SearchContainer = styled('form')<SearchProps>(
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

const SearchInput = styled('input')<SearchProps>(
  type.body,
  {
    padding: spacing.xs,
    paddingLeft: spacing.xl,
    maxWidth: '480px',
    minWidth: spacingNumbers.xs * 10,
    width: '100%',
    height: '40px',
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

const SearchReset = styled('span')<Pick<SearchState, 'value'>>(
  {
    borderRadius: 24,
    height: 24,
    marginLeft: -(24 + 8),
    marginRight: 8,
    width: 24,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ({value}) => ({
    display: value ? 'block' : 'none',
  })
);

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
    if (this.props.onSearchSubmit) {
      this.props.onSearchSubmit(this.inputRef.current!.value);
    }
  }

  openMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: true});
  }

  closeMobileSearch(e: React.SyntheticEvent) {
    this.setState({mobileToggle: false});
  }

  focusInput() {
    this.inputRef.current!.focus();
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
    const iconButtonType =
      this.props.themeColor === HeaderTheme.White
        ? IconButton.Types.Circle
        : IconButton.Types.Inverse;

    const collapsedIconStyle = {
      marginLeft: spacing.s,
      cursor: 'pointer',
    };

    const closeIconStyle = {
      left: 'unset',
      right: spacing.m,
      cursor: 'pointer',
    };

    const {onSearchSubmit, ...props} = this.props;

    return (
      <React.Fragment>
        <IconButton
          icon={searchIcon}
          buttonType={iconButtonType}
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
          <SearchContainer onSubmit={this.onSearchSubmit} {...props}>
            <SearchInput
              {...props}
              type="search"
              innerRef={this.inputRef}
              onFocus={this.setFocused.bind(this, true)}
              onBlur={this.setFocused.bind(this, false)}
              onChange={this.handleSearchInputChange}
              value={this.state.value}
            />
            <IconButton
              icon={xIcon}
              type="button"
              buttonType={IconButton.Types.Circle}
              style={{...iconStyle, ...closeIconStyle}}
              onClick={this.closeMobileSearch}
            />
          </SearchContainer>
        </CSSTransition>
      </React.Fragment>
    );
  }

  render() {
    const {onSearchSubmit, ...props} = this.props;

    if (props.collapse) {
      return this._renderCollapsed();
    }

    const iconColor =
      this.state.hovered && this.state.focused && props.themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.hovered && this.state.focused
        ? colors.licorice500
        : this.state.focused && props.themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.focused
        ? colors.licorice500
        : this.state.hovered && props.themeColor === HeaderTheme.White
        ? colors.licorice500
        : this.state.hovered
        ? colors.frenchVanilla100
        : props.themeColor === HeaderTheme.White
        ? colors.licorice200
        : colors.frenchVanilla100;

    return (
      <SearchContainer onSubmit={this.onSearchSubmit} {...props}>
        <SystemIcon
          icon={searchIcon}
          style={{...iconStyle, pointerEvents: 'none'}}
          color={iconColor}
          colorHover={iconColor}
        />
        <SearchInput
          {...props}
          type="search"
          value={this.state.value}
          innerRef={this.inputRef}
          onMouseEnter={() => this.handleHover(true)}
          onMouseLeave={() => this.handleHover(false)}
          onChange={this.handleSearchInputChange}
          onFocus={this.setFocused.bind(this, true)}
          onBlur={this.setFocused.bind(this, false)}
        />
        <SearchReset
          aria-label="Reset Search Input"
          className="reset-input"
          value={this.state.value}
          onClick={this.resetSearchInput}
        >
          <SystemIcon
            icon={xSmallIcon}
            color={colors.licorice200}
            colorHover={colors.licorice500}
          />
        </SearchReset>
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
