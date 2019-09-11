import * as React from 'react';
import styled from 'react-emotion';
import {
  colors,
  commonColors,
  iconColors,
  typeColors,
  spacing,
  beta_type as type,
} from '@workday/canvas-kit-react-core';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react-icon';

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  onClick?: (event: React.SyntheticEvent) => void;
  children?: React.ReactNode;
  id?: string;
  icon?: CanvasSystemIcon;
  secondaryIcon?: CanvasSystemIcon;
  hasDivider?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  role: string;
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
    transition: 'background-color 80ms',
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
    role: 'menuItem',
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
          onClick={event => this.handleClick(event)}
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

  private handleClick = (event: React.SyntheticEvent): void => {
    if (this.props.isDisabled) {
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };
}
