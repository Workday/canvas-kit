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

export interface MenuItemProps {
  onClick?: (event: React.SyntheticEvent) => void;
  children?: React.ReactNode;
  id?: string;
  icon?: CanvasSystemIcon;
  secondaryIcon?: CanvasSystemIcon;
  label?: string;
  hasDivider?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
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
    if (isFocused) {
      return {
        '[role="menu"]:focus > &': {
          backgroundColor: isDisabled ? colors.blueberry200 : commonColors.focusBackground,
          color: typeColors.inverse,
          'span .wd-icon-fill': {
            fill: iconColors.inverse,
          },
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
    } else if (isDisabled) {
      return {
        color: colors.licorice100,
        cursor: 'default',
        '&:hover .wd-icon-fill, & .wd-icon-fill': {
          fill: iconColors.disabled,
        },
      };
    } else {
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

export default class MenuItem extends React.Component<MenuItemProps> {
  static defaultProps = {
    shouldClose: true,
  };

  render(): React.ReactNode {
    const {
      onClick,
      children,
      icon,
      secondaryIcon,
      isDisabled,
      isFocused,
      label,
      hasDivider,
      ...otherProps
    } = this.props;
    const iconProp: SystemIconProps = {
      icon: this.props.icon!,
      size: iconSize,
    };
    const secondaryIconProp: SystemIconProps = {
      icon: this.props.secondaryIcon!,
      size: iconSize,
    };
    return (
      <>
        {hasDivider && <Divider />}
        <Item
          role="menuItem"
          tabIndex={-1}
          aria-label={label}
          onClick={event => this.handleClick(event)}
          aria-disabled={!!isDisabled}
          isDisabled={!!isDisabled}
          isFocused={!!isFocused}
          {...otherProps}
        >
          {icon && <StyledSystemIcon {...iconProp} />}
          <LabelContainer>{children}</LabelContainer>
          {secondaryIcon && <SecondaryStyledSystemIcon {...secondaryIconProp} />}
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
