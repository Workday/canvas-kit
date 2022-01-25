import * as React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {borderRadius, space, type} from '@workday/canvas-kit-react/tokens';
import {DeprecatedDubLogoTitle, DeprecatedWorkdayLogoTitle} from './parts';
import {deprecatedHeaderThemes} from './shared/themes';
import {
  DeprecatedHeaderHeight,
  DeprecatedHeaderTheme,
  DeprecatedHeaderVariant,
} from './shared/types';
import {Hyperlink, IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {justifyIcon} from '@workday/canvas-system-icons-web';
import {PickRequired} from '@workday/canvas-kit-react/common';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The custom menu toggle node of the Header. This React node replaces the default menu toggle.
   */
  menuToggle?: React.ReactNode;
  /**
   * The theme of the Header. Accepts `White`, `Blue`, or `Transparent`.
   * @default DeprecatedHeaderTheme.White
   */
  themeColor?: DeprecatedHeaderTheme;
  /**
   * The variant of the Header. Accepts `Dub` (small) or `Full` (large).
   * @default DeprecatedHeaderVariant.Dub
   */
  variant?: DeprecatedHeaderVariant;
  /**
   * The text of the Header title. Not used if `brand` is provided.
   */
  title?: string;
  /**
   * The custom brand node of the Header. This React node replaces the dub logo and title.
   */
  brand?: React.ReactNode;
  /**
   * The url of the Header logo link.
   */
  brandUrl?: string;
  /**
   * If true, center the Header navigation. If false, right-align the Header navigation.
   * @default false
   */
  centeredNav?: boolean;
  /**
   * The function called when the responsive menu icon is clicked.
   */
  onMenuClick?: (e: React.MouseEvent) => void;
  /**
   * The React element to render in the left slot of the Header. This is typically a SearchForm component.
   */
  leftSlot?: React.ReactElement;
  /**
   * If true, render the Header in collapsed mode.
   * @default false
   */
  isCollapsed?: boolean;
}

const childrenSpacing = space.s;

const HeaderShell = styled('div')<PickRequired<HeaderProps, 'themeColor', 'variant'>>(
  {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    ...type.levels.subtext.large,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    position: 'relative',
  },
  ({variant, themeColor}) => ({
    // Only the variant Full has a large header, all the other one (Dub, Global) have a small header height
    height:
      variant === DeprecatedHeaderVariant.Full
        ? DeprecatedHeaderHeight.Large
        : DeprecatedHeaderHeight.Small,
    background: deprecatedHeaderThemes[themeColor].background,
    ...deprecatedHeaderThemes[themeColor].depth,
    color: deprecatedHeaderThemes[themeColor].color,
  })
);

const BrandSlot = styled('div')(
  {
    height: '100%',
  },
  (props: {grow?: boolean}) => ({
    flex: props.grow ? `1 0 auto` : 'unset',
  })
);

const BrandLink = styled(Hyperlink)({
  '&:hover': {
    textDecoration: 'none',
  },

  '&:focus': {
    textDecoration: 'none',
  },
});

const navStyle = ({themeColor}: PickRequired<HeaderProps, 'themeColor', 'css'>) => {
  const theme = deprecatedHeaderThemes[themeColor];

  return css({
    nav: {
      display: 'flex',
      flex: `1 0 auto`, // Instead of just flex-grow: 1 for IE11, see https://github.com/philipwalton/flexbugs#flexbug-1
      justifyContent: 'center',
      height: 'inherit',
      marginLeft: space.xl,

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
          '&:first-of-type > *': {
            marginLeft: 0,
          },
          '&:last-child > *': {
            marginRight: 0,
          },
          '& > *': {
            color: 'inherit',
            textDecoration: 'none',
            padding: `0px ${space.s}`,
            margin: `0 ${space.xxxs}`,
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

const ChildrenSlot = styled('div')<
  PickRequired<HeaderProps, 'themeColor', 'isCollapsed' | 'centeredNav'>
>(
  {
    marginRight: space.m,
    // TODO: remove this when we get real icon buttons
    '> .canvas-header--menu-icon': {
      cursor: 'pointer',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    '> *': {
      marginLeft: childrenSpacing,
    },
  },
  ({centeredNav, isCollapsed}) => ({
    '> *:not(.canvas-header--menu-icon)': {
      display: isCollapsed ? 'none' : 'flex',
    },
    '> *:last-child': {
      marginRight: isCollapsed ? '' : 0,
    },
    flex: !isCollapsed && centeredNav ? `1 0 auto` : 'unset',
  }),
  navStyle
);

class Brand extends React.Component<
  Pick<HeaderProps, 'variant' | 'brand' | 'title' | 'themeColor'>
> {
  render() {
    const {
      variant = DeprecatedHeaderVariant.Dub,
      brand,
      themeColor = DeprecatedHeaderTheme.White,
      title,
    } = this.props;

    switch (variant) {
      case DeprecatedHeaderVariant.Global: {
        return <span>{brand}</span>;
      }
      case DeprecatedHeaderVariant.Full: {
        return (
          <span>
            {brand || (
              <DeprecatedWorkdayLogoTitle title={title ? title : ''} themeColor={themeColor} />
            )}
          </span>
        );
      }
      // DeprecatedHeaderVariant.Dub is default
      default: {
        return (
          <span>
            {brand || <DeprecatedDubLogoTitle title={title ? title : ''} themeColor={themeColor} />}
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
    const {themeColor = DeprecatedHeaderTheme.White, menuToggle, onMenuClick} = this.props;
    if (menuToggle) {
      const menuToggleElement = menuToggle as React.ReactElement<any>;
      const onClick = menuToggleElement.props.onClick
        ? menuToggleElement.props.onClick
        : onMenuClick;

      return React.cloneElement(menuToggleElement, {
        onClick,
        className: 'canvas-header--menu-icon',
      });
    }

    return (
      <IconButton
        variant={themeColor === DeprecatedHeaderTheme.White ? 'circle' : 'inverse'}
        icon={justifyIcon}
        className={'canvas-header--menu-icon'}
        aria-label="Open Menu"
        onClick={onMenuClick}
      />
    );
  }
}

/**
 * ### Deprecated Header
 *
 * As of Canvas Kit v6, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export default class Header extends React.Component<HeaderProps, {}> {
  static Theme = DeprecatedHeaderTheme;
  static Variant = DeprecatedHeaderVariant;

  componentDidMount() {
    console.warn(
      `Header is being deprecated and will be removed in Canvas Kit V7.\n
      For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page
      `
    );
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
        this.props.themeColor === DeprecatedHeaderTheme.White ? 'circle' : 'inverse';

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
        } as const;

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
      if (child.type === IconButton && (child.props as IconButtonProps).variant === 'plain') {
        return React.cloneElement(child as React.ReactElement, {
          style: {margin: `0 0 0 ${childrenSpacing}`},
        });
      }

      return child;
    });
  }

  render() {
    const {
      menuToggle,
      themeColor = DeprecatedHeaderTheme.White,
      variant = DeprecatedHeaderVariant.Dub,
      centeredNav,
      title,
      brand,
      brandUrl,
      onMenuClick,
      leftSlot,
      isCollapsed,
      children,
      ...elemProps
    } = this.props;

    /* Push everything to the right if:
       - on tablet and mobile screens
       - Search isn't enabled and the nav shouldn't be centered
       - Search is enabled, and there aren't any children
    */
    const growBrand = isCollapsed || (!leftSlot && !centeredNav) || (leftSlot && !children);

    // Ignore centeredNav if search is enabled
    const shouldCenteredNav = leftSlot ? false : centeredNav;

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
        {leftSlot}
        <ChildrenSlot
          themeColor={themeColor}
          centeredNav={shouldCenteredNav}
          isCollapsed={isCollapsed}
        >
          {isCollapsed ? (
            // Screen size is smaller than our largest breakpoint so turn nav into a hamburger
            // TODO: This needs to get changed to IconButton when we get it restyled for headers
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
