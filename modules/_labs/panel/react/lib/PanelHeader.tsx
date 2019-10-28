import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, H4, CanvasColor} from '@workday/canvas-kit-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';

export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * String to add to a Panel
   */
  headerTitle?: string;
  /**
   * Callback to handle closing the Panel
   */
  handleClose?: () => void;
  /**
   * String to add aria-label to the icon button
   */
  iconLabel: string;
  /**
   * The background color in which the Panel header will be
   */
  headerColor: CanvasColor | string;
  /**
   * Changes the border color to match something close to the header background color
   */
  borderColor: CanvasColor | string;
}

const headerHeight = 56;

const HeaderContainer = styled('div')<Pick<PanelHeaderProps, 'headerColor' | 'borderColor'>>(
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

const HeaderTitle = styled(H4)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingRight: spacing.xxxs,
});

export default class PanelHeader extends React.Component<PanelHeaderProps, {}> {
  static defaultProps = {
    iconLabel: 'Close',
    headerColor: colors.soap100,
    borderColor: colors.soap500,
  };

  public render() {
    const {
      handleClose,
      headerTitle,
      iconLabel,
      headerColor,
      borderColor,
      ...elemProps
    } = this.props;

    return (
      <HeaderContainer borderColor={borderColor} {...elemProps} headerColor={headerColor}>
        <HeaderTitle title={headerTitle}>{headerTitle}</HeaderTitle>
        <IconButton onClick={handleClose} aria-label={iconLabel} icon={xIcon}></IconButton>
      </HeaderContainer>
    );
  }
}
