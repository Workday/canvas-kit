import * as React from 'react';
import styled from '@emotion/styled';
import {typeColors} from '@workday/canvas-colors-web';
import {colors, spacing, H4, CanvasColor} from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';

export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * String to add a title to a Drawer
   */
  title?: string;
  /**
   * Callback to handle closing the Drawer
   */
  onClose: () => void;
  /**
   * String to add aria-label to the icon button
   */
  iconLabel: string;
  /**
   * The background color in which the Drawer header will be
   */
  headerColor: CanvasColor | string;
  /**
   * Changes the border color to match something close to the header background color
   */
  borderColor: CanvasColor | string;
  /**
   * Changes the icon and header to white for dark background colors on the header
   */
  inverse?: boolean;
}

const headerHeight = 56;

const HeaderContainer = styled('div')<Pick<DrawerHeaderProps, 'headerColor' | 'borderColor'>>(
  {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${spacing.s}`,
    justifyContent: 'space-between',
  },
  ({borderColor}) => ({
    borderBottom: `1px solid ${borderColor}`,
  }),
  ({headerColor}) => ({
    backgroundColor: headerColor,
  })
);

const HeaderTitle = styled(H4)<Pick<DrawerHeaderProps, 'inverse'>>(
  {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    paddingRight: spacing.xxxs,
  },
  ({inverse}) => ({
    color: inverse ? colors.frenchVanilla100 : typeColors.heading,
  })
);

const CloseButton = styled(IconButton)({
  margin: '-8px', // for inverse and plain button, we always want this margin
});

export default class DrawerHeader extends React.Component<DrawerHeaderProps, {}> {
  static defaultProps = {
    iconLabel: 'Close',
    headerColor: colors.soap100,
    borderColor: colors.soap500,
    showInverseButton: false,
    inverse: false,
  };

  public render() {
    const {onClose, title, iconLabel, headerColor, borderColor, inverse, ...elemProps} = this.props;

    return (
      <HeaderContainer borderColor={borderColor} {...elemProps} headerColor={headerColor}>
        <HeaderTitle inverse={inverse} title={title}>
          {title}
        </HeaderTitle>
        <CloseButton
          variant={inverse ? IconButtonVariant.Inverse : IconButtonVariant.Plain}
          onClick={onClose}
          aria-label={iconLabel}
          icon={xIcon}
        ></CloseButton>
      </HeaderContainer>
    );
  }
}
