import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, H4, CanvasColor} from '@workday/canvas-kit-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {xIcon} from '@workday/canvas-system-icons-web';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle?: string;
  handleClose?: () => void;
  iconLabel: string;
  icon: CanvasSystemIcon;
  headerColor: CanvasColor | string;
}

const headerHeight = 56;

const HeaderContainer = styled('div')<Pick<PanelProps, 'headerColor'>>(
  {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${spacing.s}`,
    justifyContent: 'space-between',
    borderBottom: `1px solid ${colors.soap500}`,
  },
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

export default class PanelHeader extends React.Component<PanelProps, {}> {
  static defaultProps = {
    iconLabel: 'Close',
    headerColor: colors.soap100,
    icon: xIcon,
  };

  public render() {
    const {handleClose, headerTitle, iconLabel, icon, headerColor, ...elemProps} = this.props;

    return (
      <HeaderContainer {...elemProps} headerColor={headerColor}>
        <HeaderTitle aria-labelby={headerTitle} title={headerTitle}>
          {headerTitle}
        </HeaderTitle>
        <IconButton onClick={handleClose} aria-label={iconLabel} icon={icon}></IconButton>
      </HeaderContainer>
    );
  }
}
