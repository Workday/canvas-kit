import * as React from 'react';
import styled from '@emotion/styled';
import {
  colors,
  commonColors,
  iconColors,
  typeColors,
  spacing,
} from '@workday/canvas-kit-react-core';
import type from '@workday/canvas-kit-labs-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react-icon';

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * The function called when the MenuItem is clicked. If the item is a child of the Menu component, this callback will be decorated with the onSelect and onClose Menu callbacks. This callback will not fire if the item is disabled (see below).
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The unique id for the MenuItem used for ARIA attributes. If the item is a child of the `Menu` component, this property will be generated and overridden.
   */
  id?: string;
  /**
   * The icon of the MenuItem. This icon is displayed before what you supplied for the children.
   */
  icon?: CanvasSystemIcon;
  /**
   * The secondary icon of the MenuItem. This icon is displayed after what you supplied for the children.
   */
  secondaryIcon?: CanvasSystemIcon;
  /**
   * If true, render a top border on the MenuItem.
   * @default false
   */
  hasDivider?: boolean;
  /**
   * If true, set the MenuItem to the disabled state so it is not clickable.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If true, set the MenuItem to be the currently selected item. If the item is a child of the Menu component, this property will be generated and overridden.
   * @default false
   */
  isFocused?: boolean;
  /**
   * The role of the MenuItem. Use this to override the role of the item (e.g. you can use this element as an option in a Combobox).
   * @default menuItem
   */
  role: string;
  /**
   * If true, allow the onClose Menu callback to be fired after the MenuItem has been clicked.
   * @default true
   */
  shouldClose?: boolean;
}

const Item = styled('li')<Pick<MenuItemProps, 'isDisabled' | 'isFocused'>>(
  {
    ...type.body2,
    padding: `${spacing.xxs} ${spacing.s}`,
    height: spacing.xl,
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
  ({isFocused, isDisabled}) => {
    if (!isFocused && !isDisabled) {
      return {
        backgroundColor: 'inherit',
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
          color: colors.blackPepper300,
          '.wd-icon-fill': {
            fill: iconColors.hover,
          },
        },
      };
    } else if (isDisabled && !isFocused) {
      return {
        color: colors.licorice100,
        cursor: 'default',
        '&:hover .wd-icon-fill': {
          fill: iconColors.disabled,
        },
      };
    } else {
      // Is focused or focused and disabled
      return {
        backgroundColor: isDisabled ? colors.blueberry200 : commonColors.focusBackground,
        color: typeColors.inverse,
        'span .wd-icon-fill': {
          fill: iconColors.inverse,
        },
        [`[data-whatinput='mouse'] &,
          [data-whatinput='touch'] &,
          [data-whatinput='pointer'] &`]: {
          backgroundColor: 'inherit',
          color: colors.blackPepper300,
          '&:hover': {
            backgroundColor: commonColors.hoverBackground,
            '.wd-icon-fill': {
              fill: iconColors.hover,
            },
          },
          '.wd-icon-fill': {
            fill: iconColors.standard,
          },
        },
      };
    }
  }
);

const LabelContainer = styled('span')({
  flex: '1',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const Divider = styled('hr')({
  display: 'block',
  height: 1,
  border: 0,
  borderTop: `1px solid ${colors.soap400}`,
  margin: `${spacing.xxs} 0`,
});

const iconSize = 24;
const iconPadding = 16;
const StyledSystemIcon = styled(SystemIcon)({
  flex: `${iconSize + iconPadding}px 0`, // gives padding between LabelContainer, no matter the direction
});

const SecondaryStyledSystemIcon = styled(StyledSystemIcon)({
  display: `flex`,
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
      fillHover: iconColors.disabled,
      fill: iconColors.disabled,
    };
  }
  if (isFocused) {
    props = {
      ...props,
      fillHover: iconColors.inverse,
    };
  }
  return props;
};

export default class MenuItem extends React.Component<MenuItemProps> {
  static defaultProps = {
    shouldClose: true,
    role: 'menuitem',
  };

  render(): React.ReactNode {
    const {
      onClick,
      children,
      id,
      icon,
      secondaryIcon,
      hasDivider,
      isDisabled,
      isFocused,
      role,
      ...elemProps
    } = this.props;

    iconProps = setIconProps(icon, isDisabled, isFocused);
    secondaryIconProps = setIconProps(secondaryIcon, isDisabled, isFocused);

    return (
      <>
        {hasDivider && <Divider />}
        <Item
          tabIndex={-1}
          id={id}
          role={role}
          onClick={this.handleClick}
          aria-disabled={!!isDisabled}
          isDisabled={!!isDisabled}
          isFocused={!!isFocused}
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
