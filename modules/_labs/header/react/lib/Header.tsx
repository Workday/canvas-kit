import * as React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import {type, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {DubLogoTitle, Search, WorkdayLogoTitle} from './parts';
import {themes} from './shared/themes';
import {HeaderTheme, HeaderVariant, HeaderHeight} from './shared/types';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react-icon';
import {justifyIcon} from '@workday/canvas-system-icons-web';
import throttle from 'lodash/throttle';
import {makeMq} from '@workday/canvas-kit-react-common';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * A React node that will replace the menuToggle if provided.
   */
  menuToggle?: React.ReactNode;
  /**
   * A HeaderTheme enum indicating which theme to use (White, Blue or Transparent)
   */
  themeColor: HeaderTheme;
  /**
   * A HeaderVariant enum indicating whether to use the Dub (small) or Full (large) version
   */
  variant: HeaderVariant;
  /**
   * The title to display in the header. Not used if `brand` is provided
   */
  title?: string;
  /**
   * A React node that will replace the dub logo and title if provided.
   */
  brand?: React.ReactNode;
  /**
   * The URL href of the logo link
   */
  brandUrl?: string;
  /**
   * True if the nav should be centered. False if it should be aligned right
   */
  centeredNav?: boolean;
  /**
   * An event handler function that gets called when the responsive menu icon is clicked
   */
  onMenuClick?: (e: React.SyntheticEvent) => void;
  /**
   * An event handler function that gets called when the search field is submitted
   */
  onSearchSubmit?: (query: string) => void;
  /**
   * An object that allows for custom specified breakpoints (sm, md, lg)
   */
  breakpoints: {
    [key: string]: number;
    sm: number;
    md: number;
    lg: number;
  };
  /**
   * An event handler function that gets called when the screen size changes to a different breakpoint key
   */
  onBreakpointChange?: (key: string | number) => void;
}

export interface HeaderState {
  screenSize: keyof HeaderProps['breakpoints'];
}

const childrenSpacing = spacing.s;

const HeaderShell = styled('div')<Pick<HeaderProps, 'variant' | 'themeColor'>>(
  {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    ...type.body,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    position: 'relative',
  },
  ({variant, themeColor}) => ({
    // Only the variant Full has a large header, all the other one (Dub, Global) have a small header height
    height: variant === HeaderVariant.Full ? HeaderHeight.Large : HeaderHeight.Small,
    background: themes[themeColor].background,
    ...themes[themeColor].depth,
    color: themes[themeColor].color,
  })
);

const BrandSlot = styled('div')(
  {
    height: '100%',
  },
  (props: {grow?: boolean}) => ({
    flexGrow: props.grow ? 1 : 'unset',
  })
);

const BrandLink = styled('a')({
  ...type.link,

  '&:hover': {
    textDecoration: 'none',
  },

  '&:focus': {
    textDecoration: 'none',
  },
});

const navStyle = ({themeColor}: Pick<HeaderProps, 'themeColor'>) => {
  const theme = themes[themeColor];

  return css({
    nav: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      height: 'inherit',
      marginLeft: spacing.xl,

      '& ul': {
        color: theme.linkColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        height: 'inherit',
        '&:hover': {
          // De-emphasizes all color on hover, this allows us to create an illusion that hovering over a specific element
          // fades out the rest
          color: theme.linkFadeOutColor,
        },
        '& li': {
          boxSizing: 'border-box',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          fontSize: '14px',
          fontWeight: 700,
          height: 'inherit',
          transition: `color 150ms ease-out 0s`,
          cursor: 'pointer',
          '&:first-child > *': {
            marginLeft: 0,
          },
          '&:last-child > *': {
            marginRight: 0,
          },
          '& > *': {
            color: 'inherit',
            textDecoration: 'none',
            padding: `0px ${spacing.s}`,
            margin: `0 ${spacing.xxxs}`,
            display: 'flex',
            alignItems: 'center',
            height: 'inherit',
            '&:visited': {
              color: 'inherit', // Keeps visited links from becoming default purple
            },
          },
          '&:hover, &:active': {
            color: theme.linkColor, // Completes the illusion of sibling elements fading into the background on hover
          },
          '&.current': {
            color: theme.currentLinkColor,
            '& a': {
              cursor: 'default',
            },
            '&:hover, &:active': {
              color: theme.currentLinkColor,
            },
            '&:after': {
              position: 'absolute',
              bottom: 0,
              left: 0,
              content: `''`,
              height: 4,
              width: '100%',
              backgroundColor: theme.chipColor,
              borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
            },
          },
        },
      },
    },
  });
};

const ChildrenSlot = styled('div')<Pick<HeaderProps, 'breakpoints' | 'centeredNav' | 'themeColor'>>(
  ({centeredNav = false, breakpoints}) => {
    const mq = makeMq(breakpoints);

    return {
      marginRight: spacing.m,

      // TODO: remove this when we get real icon buttons
      '> .canvas-header--menu-icon': {
        cursor: 'pointer',
      },
      [mq.sm]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        marginRight: spacing.m,

        '> *': {
          marginLeft: childrenSpacing,
        },
        '> *:not(.canvas-header--menu-icon)': {
          display: 'none',
        },
      },
      [mq.md]: {
        '> *:last-child': {
          marginRight: 0,
        },

        '> *:not(.canvas-header--menu-icon)': {
          display: 'flex',
        },
      },
      [mq.lg]: {
        flexGrow: centeredNav ? 1 : 'unset',
      },
    };
  },
  navStyle
);

class Brand extends React.Component<
  Pick<HeaderProps, 'variant' | 'brand' | 'title' | 'themeColor'>
> {
  render() {
    const {variant, brand, themeColor, title} = this.props;

    switch (variant) {
      case HeaderVariant.Global: {
        return <span>{brand}</span>;
      }
      case HeaderVariant.Full: {
        return (
          <span>
            {brand || <WorkdayLogoTitle title={title ? title : ''} themeColor={themeColor} />}
          </span>
        );
      }
      // HeaderVariant.Dub is default
      default: {
        return (
          <span>
            {brand || <DubLogoTitle title={title ? title : ''} themeColor={themeColor} />}
          </span>
        );
      }
    }
  }
}

class MenuIconButton extends React.Component<
  Pick<HeaderProps, 'themeColor' | 'menuToggle' | 'onMenuClick'>
> {
  render() {
    const {themeColor, menuToggle, onMenuClick} = this.props;
    const menuIconButtonProps = {
      variant:
        themeColor === HeaderTheme.White ? IconButton.Variant.Circle : IconButton.Variant.Inverse,
      icon: justifyIcon,
      onClick: onMenuClick,
    };

    const menuSlot =
      menuToggle &&
      React.cloneElement(menuToggle as React.ReactElement<any>, {
        onClick: onMenuClick,
      });

    return menuToggle ? (
      menuSlot
    ) : (
      <IconButton
        {...menuIconButtonProps}
        className="canvas-header--menu-icon"
        aria-label="Open Menu"
      />
    );
  }
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  static Theme = HeaderTheme;
  static Variant = HeaderVariant;
  static defaultProps = {
    themeColor: HeaderTheme.White,
    variant: HeaderVariant.Dub,
    breakpoints: {
      sm: 320,
      md: 768,
      lg: 1120,
    },
  };

  constructor(props: HeaderProps) {
    super(props);

    const screenSize =
      typeof window !== 'undefined' && window.innerWidth
        ? this.getScreenSize(window.innerWidth, props.breakpoints)
        : 'md';

    this.state = {
      screenSize: screenSize,
    };
    this.updateScreenSize = throttle(this.updateScreenSize.bind(this), 150);
  }

  /**
   * Returns which breakpoint size to use (sm, md, lg)
   * @param {number} width Current screen width
   * @param {Object} breakpoints Specification of breakpoint pixel values for sm, md, lg screens
   * @returns {string}
   */
  getScreenSize(width: number, breakpoints: HeaderProps['breakpoints']): string {
    const sizes = Object.keys(breakpoints);
    let screenSize = sizes[0];

    sizes.forEach(k => {
      if (width >= breakpoints[k]) {
        screenSize = k;
      }
    });

    return screenSize;
  }

  /**
   * Updates the state screen size/width if it has changed (syncs w/ browser paints using RAF)
   */
  updateScreenSize(): void {
    requestAnimationFrame(() => {
      const currentScreenSize = this.getScreenSize(window.innerWidth, this.props.breakpoints);

      if (currentScreenSize !== this.state.screenSize) {
        this.setState({
          screenSize: currentScreenSize,
        });

        if (this.props.onBreakpointChange) {
          this.props.onBreakpointChange(currentScreenSize);
        }
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScreenSize);
    if (this.props.onBreakpointChange) {
      this.props.onBreakpointChange(this.state.screenSize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  /**
   * Helper that recursively maps ReactNodes to their theme-based equivalent.
   * Any children that are included in a Header may need to undergo transformation
   * before stamped out in render().
   *
   * E.g. <SystemIcon> components need to have the appropriate `color` and `colorHover`
   * props set based on the theme.
   *
   * @param children From props.children of a React component
   *
   * @returns {React.ReactNode} The child/children to be rendered
   */
  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // child is now guaranteed to be a valid ReactElement from the check above

      type Props = {children: React.ReactNode};
      const propsChildren = (child as React.ReactElement<Props>).props.children;
      const singleChild =
        React.Children.count(propsChildren) === 1 && (propsChildren as React.ReactElement<any>);
      const iconButtonVariant =
        this.props.themeColor === HeaderTheme.White
          ? IconButton.Variant.Circle
          : IconButton.Variant.Inverse;

      // Convert old method of SystemIcon into IconButton. If SystemIcon is within a link, make sure it's passed through
      if (child.type === 'a' && singleChild && singleChild.type === SystemIcon) {
        const href = (child.props as React.AnchorHTMLAttributes<HTMLAnchorElement>).href;
        const iconButtonProps = {
          onClick: () => {
            if (href) {
              window.location.href = href;
            }
          },
          variant: iconButtonVariant,
          icon: (singleChild.props as SystemIconProps).icon,
        };

        return <IconButton {...iconButtonProps} aria-label="" />;
      }

      // If child has children, render them
      if (React.Children.count(propsChildren)) {
        return React.cloneElement(child as React.ReactElement<Props>, {
          children: this.renderChildren(propsChildren),
        });
      }

      // Convert old method of SystemIcon into IconButton
      if (child.type === SystemIcon) {
        const icon = (child.props as SystemIconProps).icon;

        return <IconButton variant={iconButtonVariant} icon={icon} aria-label={icon.name} />;
      }

      // Plain icon buttons have negative margin that we need to negate.
      if (
        child.type === IconButton &&
        (child.props as IconButtonProps).variant === IconButton.Variant.Plain
      ) {
        return React.cloneElement(child as React.ReactElement<IconButtonProps>, {
          style: {margin: `0 0 0 ${childrenSpacing}`},
        });
      }

      return child;
    });
  }

  render() {
    const {
      menuToggle,
      themeColor,
      variant,
      centeredNav,
      title,
      brand,
      brandUrl,
      onMenuClick,
      onSearchSubmit,
      breakpoints,
      onBreakpointChange,
      children,
      ...elemProps
    } = this.props;

    /* Push everything to the right if:
       - on tablet and mobile screens
       - Search isn't enabled and the nav shouldn't be centered
       - Search is enabled, and there aren't any children
    */
    const growBrand =
      this.state.screenSize !== 'lg' ||
      (!onSearchSubmit && !centeredNav) ||
      (onSearchSubmit && !children);

    // Ignore centeredNav if search is enabled
    const shouldCenteredNav = onSearchSubmit ? false : centeredNav;

    // Collapse search at sm breakpoint if no children, at md breakpoint if children
    const collapseSearch = Boolean(
      (!children && this.state.screenSize === 'sm') || (children && this.state.screenSize !== 'lg')
    );

    // Screen size is smaller than our largest breakpoint so turn nav into a hamburger
    // TODO: This needs to get changed to IconButton when we get it restyled for headers
    const collapseMenu = children && this.state.screenSize !== 'lg';

    return (
      <HeaderShell variant={variant} themeColor={themeColor} {...elemProps}>
        <BrandSlot grow={growBrand}>
          {brandUrl ? (
            <BrandLink href={brandUrl}>
              <Brand variant={variant} brand={brand} title={title} themeColor={themeColor} />
            </BrandLink>
          ) : (
            <Brand variant={variant} brand={brand} title={title} themeColor={themeColor} />
          )}
        </BrandSlot>
        {onSearchSubmit && (
          <Search
            onSearchSubmit={onSearchSubmit}
            rightAlign={!children}
            themeColor={themeColor}
            collapse={collapseSearch}
            placeholder="Search"
          />
        )}
        <ChildrenSlot
          breakpoints={breakpoints}
          themeColor={themeColor}
          centeredNav={shouldCenteredNav}
        >
          {collapseMenu ? (
            <MenuIconButton
              themeColor={themeColor}
              menuToggle={menuToggle}
              onMenuClick={onMenuClick}
            />
          ) : (
            this.renderChildren(children)
          )}
        </ChildrenSlot>
      </HeaderShell>
    );
  }
}
