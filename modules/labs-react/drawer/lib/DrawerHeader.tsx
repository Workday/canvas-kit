import * as React from 'react';
import styled from '@emotion/styled';
import {colors, space, CanvasColor, typeColors} from '@workday/canvas-kit-react/tokens';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {TypeBodyLevel, TypeLevelProps} from '@workday/canvas-kit-preview-react/text';
import {xIcon} from '@workday/canvas-system-icons-web';

export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The text of the DrawerHeader. This text will also be applied as the `title` attribute of the header element.
   */
  title?: string;
  /**
   * The function called when the DrawerHeader close button is clicked.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
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
    padding: `0 ${space.s}`,
    justifyContent: 'space-between',
  },
  ({borderColor}) => ({
    borderBottom: `1px solid ${borderColor}`,
  }),
  ({headerColor}) => ({
    backgroundColor: headerColor,
  })
);

const Heading = styled(TypeBodyLevel.as('h4'))<TypeLevelProps>({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const CloseButton = styled(TertiaryButton)({
  margin: '-8px', // for inverse and plain button, we always want this margin
});

export class DrawerHeader extends React.Component<DrawerHeaderProps, {}> {
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
        <Heading
          size="small"
          title={title}
          fontWeight="bold"
          color={inverse ? 'inverse' : typeColors.heading}
          paddingRight="xxxs"
        >
          {title}
        </Heading>
        {onClose && closeIconAriaLabel && (
          <CloseButton
            variant={inverse ? 'inverse' : undefined}
            onClick={onClose}
            aria-label={closeIconAriaLabel}
            icon={xIcon}
          />
        )}
      </HeaderContainer>
    );
  }
}
