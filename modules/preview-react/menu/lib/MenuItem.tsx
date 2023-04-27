import * as React from 'react';
import styled from '@emotion/styled';
import {
  colors,
  commonColors,
  iconColors,
  typeColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';

/**
 * ### Deprecated Menu Item Props
 *
 * As of Canvas Kit v8, Menu is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */
export interface DeprecatedMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * The function called when the DeprecatedMenuItem is clicked. If the item is a child of the DeprecatedMenu component, this callback will be decorated with the onSelect and onClose DeprecatedMenu callbacks. This callback will not fire if the item is disabled (see below).
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The unique id for the DeprecatedMenuItem used for ARIA attributes. If the item is a child of the `DeprecatedMenu` component, this property will be generated and overridden.
   */
  id?: string;
  /**
   * The icon of the DeprecatedMenuItem. This icon is displayed before what you supplied for the children.
   */
  icon?: CanvasSystemIcon;
  /**
   * The secondary icon of the DeprecatedMenuItem. This icon is displayed after what you supplied for the children.
   */
  secondaryIcon?: CanvasSystemIcon;
  /**
   * If true, render a top border on the DeprecatedMenuItem.
   * @default false
   */
  hasDivider?: boolean;
  /**
   * If true, render a header to group data, this menu item will not be intractable.
   * @default false
   */
  isHeader?: boolean;
  /**
   * If true, set the DeprecatedMenuItem to the disabled state so it is not clickable.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If true, set the DeprecatedMenuItem to be the currently selected item. If the item is a child of the DeprecatedMenu component, this property will be generated and overridden.
   * @default false
   */
  isFocused?: boolean;
  /**
   * The role of the DeprecatedMenuItem. Use this to override the role of the item (e.g. you can use this element as an option in a Combobox).
   * @default menuItem
   */
  role?: string;
  /**
   * If true, allow the onClose DeprecatedMenu callback to be fired after the DeprecatedMenuItem has been clicked.
   * @default true
   */
  shouldClose?: boolean;
}

const Item = styled('li')<Pick<DeprecatedMenuItemProps, 'isDisabled' | 'isFocused' | 'isHeader'>>(
  {
    ...type.levels.subtext.large,
    padding: `${space.xxs} ${space.s}`,
    height: space.xl,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.blackPepper300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: 'background-color 80ms, color 80ms',
    '&:focus': {
      outline: 'none',
    },
  },
  ({isHeader}) => {
    return {pointerEvents: isHeader ? 'none' : 'all'};
  },
  ({isFocused, isDisabled}) => {
    if (!isFocused && !isDisabled) {
      return {
        backgroundColor: 'inherit',
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
          color: colors.blackPepper300,
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
      };
    } else if (isDisabled && !isFocused) {
      return {
        color: colors.licorice100,
        cursor: 'default',
      };
    } else {
      // Is focused or focused and disabled
      return {
        backgroundColor: isDisabled ? colors.blueberry200 : commonColors.focusBackground,
        color: typeColors.inverse,
        'span .wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: isDisabled ? iconColors.disabled : iconColors.active,
        },
        '&:hover': {
          'span .wd-icon-fill, span .wd-icon-accent, span .wd-icon-accent2': {
            fill: iconColors.inverse,
          },
          'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
            fill: isDisabled ? iconColors.disabled : iconColors.active,
          },
          'span .wd-icon-background': {
            fill: iconColors.inverse,
          },
        },
        [`[data-whatinput='mouse'] &,
          [data-whatinput='touch'] &,
          [data-whatinput='pointer'] &`]: {
          backgroundColor: 'inherit',
          color: colors.blackPepper300,
          'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.standard,
          },
          '&:hover': {
            backgroundColor: commonColors.hoverBackground,
            'span .wd-icon-fill, span .wd-icon-accent, span .wd-icon-accent2': {
              fill: iconColors.hover,
            },
          },
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.standard,
          },
        },
      };
    }
  }
);

const LabelContainer = styled('span')({
  flex: '1 1 auto',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const Divider = styled('hr')({
  display: 'block',
  height: 1,
  border: 0,
  borderTop: `1px solid ${colors.soap400}`,
  margin: `${space.xxs} 0`,
});

const iconSize = 24;
const iconPadding = 16;
const StyledSystemIcon = styled(SystemIcon)({
  minWidth: iconSize + iconPadding, // gives padding between LabelContainer, no matter the direction
});

const SecondaryStyledSystemIcon = styled(SystemIcon)({
  display: `flex`,
  minWidth: iconSize + iconPadding, // gives padding between LabelContainer, no matter the direction
  justifyContent: `flex-end`,
});

let iconProps: SystemIconProps | null = null;
let secondaryIconProps: SystemIconProps | null = null;
const setIconProps = (
  icon?: CanvasSystemIcon,
  isDisabled?: boolean,
  isFocused?: boolean
): SystemIconProps | null => {
  if (!icon) {
    return null;
  }
  let props: SystemIconProps = {
    icon: icon,
    size: iconSize,
  };
  if (isDisabled) {
    props = {
      ...props,
      fill: iconColors.disabled,
      fillHover: iconColors.disabled,
      accent: iconColors.disabled,
      accentHover: iconColors.disabled,
    };
  }
  if (isFocused) {
    props = {
      ...props,
      fill: iconColors.inverse,
      fillHover: iconColors.inverse,
      accent: iconColors.inverse,
      accentHover: iconColors.inverse,
      background: iconColors.inverse,
    };
  }
  return props;
};

const scrollIntoViewIfNeeded = (elem: HTMLElement, centerIfNeeded = true): void => {
  const parent: HTMLElement | null = elem.parentElement;

  if (elem && parent) {
    const parentComputedStyle = window.getComputedStyle(parent, null),
      parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'), 10),
      parentBorderLeftWidth = parseInt(
        parentComputedStyle.getPropertyValue('border-left-width'),
        10
      ),
      overTop = elem.offsetTop - parent.offsetTop < parent.scrollTop,
      overBottom =
        elem.offsetTop - parent.offsetTop + elem.clientHeight - parentBorderTopWidth >
        parent.scrollTop + parent.clientHeight,
      overLeft = elem.offsetLeft - parent.offsetLeft < parent.scrollLeft,
      overRight =
        elem.offsetLeft - parent.offsetLeft + elem.clientWidth - parentBorderLeftWidth >
        parent.scrollLeft + parent.clientWidth,
      alignWithTop = overTop && !overBottom;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop =
        elem.offsetTop -
        parent.offsetTop -
        parent.clientHeight / 2 -
        parentBorderTopWidth +
        elem.clientHeight / 2;
    }

    if ((overLeft || overRight) && centerIfNeeded) {
      parent.scrollLeft =
        elem.offsetLeft -
        parent.offsetLeft -
        parent.clientWidth / 2 -
        parentBorderLeftWidth +
        elem.clientWidth / 2;
    }

    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
      elem.scrollIntoView(alignWithTop);
    }
  }
};

/**
 * `DeprecatedMenuItem` renders an `<li>` element with the correct attributes to ensure it is
 * accessible. If you choose to implement your own custom menu items, be sure to use semantic `<li>`
 * elements with the following attributes:
 *
 * - `role="menuitem"`
 * - `tabindex={-1}`
 * - `id`s following this pattern: `${MenuId}-${index}`
 *
 * As of Canvas Kit v8, Menu is being soft-deprecated. It will be hard-deprecated (completely
 * removed) in v9. Please see the [upgrade
 * guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page) for
 * more information.
 *
 * Undocumented props are spread to the underlying `<li>` element.
 *
 * @deprecated
 */
export class DeprecatedMenuItem extends React.Component<DeprecatedMenuItemProps> {
  ref = React.createRef<HTMLLIElement>();

  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );
  }

  componentDidUpdate = (prevProps: DeprecatedMenuItemProps) => {
    if (!prevProps.isFocused && this.props.isFocused) {
      if (this.ref.current) {
        scrollIntoViewIfNeeded(this.ref.current);
      }
    }
  };

  render() {
    const {
      onClick,
      children,
      id,
      icon,
      secondaryIcon,
      hasDivider,
      isDisabled,
      isFocused,
      isHeader,
      role,
      ...elemProps
    } = this.props;

    iconProps = setIconProps(icon, isDisabled, isFocused);
    secondaryIconProps = setIconProps(secondaryIcon, isDisabled, isFocused);

    return (
      <>
        {hasDivider && <Divider aria-hidden="true" />}
        <Item
          ref={this.ref}
          tabIndex={-1}
          id={id}
          role={isHeader ? 'presentation' : role}
          aria-hidden={isHeader ? true : undefined}
          onClick={this.handleClick}
          aria-disabled={isDisabled ? true : undefined}
          isDisabled={!!isDisabled}
          isFocused={!!isFocused}
          isHeader={!!isHeader}
          {...elemProps}
        >
          {icon && iconProps && <StyledSystemIcon {...iconProps} />}
          <LabelContainer>{children}</LabelContainer>
          {secondaryIcon && secondaryIconProps && (
            <SecondaryStyledSystemIcon {...secondaryIconProps} />
          )}
        </Item>
      </>
    );
  }

  private handleClick = (event: React.MouseEvent): void => {
    if (this.props.isDisabled) {
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };
}

/**
 * If we destructure props, shouldClose will be undefined because the value is only applied for the render method only.
 * We have to use defaultProps so that the value of shouldClose is applied for every method and therefore references in the Menu component.
 * For reference: https://github.com/Workday/canvas-kit/blob/f6d4d29e9bb2eb2af0b204e6f4ce2e5ed5a98e57/modules/_labs/menu/react/lib/Menu.tsx#L259,
 */
// TODO: Remove this ts-ignore when we convert to a functional component
// @ts-ignore
DeprecatedMenuItem.defaultProps = {
  shouldClose: true,
  role: 'menuitem',
};
