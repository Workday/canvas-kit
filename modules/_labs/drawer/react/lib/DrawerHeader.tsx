import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, H4, CanvasColor, typeColors} from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonVariant, IconButtonProps} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';

export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The text of the DrawerHeader. This text will also be applied as the `title` attribute of the header element.
   */
  title?: string;
  /**
   * The function called when the DrawerHeader close button is clicked.
   */
  onClose?: IconButtonProps['onClick'];
  /**
   * The `aria-label` for the DrawHeader close button. Useful for i18n.
   * @default Close
   */
  closeIconAriaLabel?: string;
  /**
   * The background color of the DrawerHeader.
   */
  headerColor?: CanvasColor | string;
  /**
   * The border color of the DrawerHeader. This should match something close to `headerColor`.
   */
  borderColor?: CanvasColor | string;
  /**
   * If true, render the icon and header in white. Useful for preserving contrast with a dark `headerColor`.
   * @default false
   */
  inverse?: boolean;
  /**
   * The unique id of the DrawerHeader for accessibility.
   */
  id?: string;
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
  public render() {
    const {
      closeIconAriaLabel = 'Close',
      headerColor = colors.soap100,
      borderColor = colors.soap500,
      inverse = false,
      onClose,
      title,
      id,
      ...elemProps
    } = this.props;

    return (
      <HeaderContainer borderColor={borderColor} {...elemProps} headerColor={headerColor}>
        <HeaderTitle id={id} inverse={inverse} title={title}>
          {title}
        </HeaderTitle>
        {onClose && closeIconAriaLabel && (
          <CloseButton
            variant={inverse ? IconButtonVariant.Inverse : IconButtonVariant.Plain}
            onClick={onClose}
            aria-label={closeIconAriaLabel}
            icon={xIcon}
          />
        )}
      </HeaderContainer>
    );
  }
}
