import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, H4, CanvasSpacingValue, CanvasColor} from '@workday/canvas-kit-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle?: string;
  handleClose?: () => void;
  padding?: CanvasSpacingValue;
  iconLabel: string;
  showHeader?: boolean;
  openDirection?: PanelDirection;
  icon?: CanvasSystemIcon;
  width?: number;
  headerColor: CanvasColor | string;
  showDropShadow?: boolean;
  headerActionEl?: React.ReactElement;
}

export enum PanelDirection {
  Left,
  Right,
}

const headerHeight = 56;

const PanelContainer = styled('div')<
  Pick<PanelProps, 'width' | 'showDropShadow' | 'openDirection'>
>(
  {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
  },
  ({width}) => ({
    width: width,
  }),
  ({showDropShadow, openDirection}) => ({
    boxShadow:
      openDirection === PanelDirection.Right && showDropShadow
        ? '-8px 0px 16px 0 rgba(0,0,0,0.12)'
        : openDirection === PanelDirection.Left && showDropShadow
        ? '8px 0px 16px 0 rgba(0,0,0,0.12)'
        : undefined,
  }),
  ({openDirection}) => ({
    borderLeft: openDirection === PanelDirection.Right ? `1px solid ${colors.soap400}` : undefined,
    borderRight: openDirection === PanelDirection.Left ? `1px solid ${colors.soap400}` : undefined,
    right: openDirection === PanelDirection.Right ? spacing.zero : undefined,
    left: openDirection === PanelDirection.Left ? spacing.zero : undefined,
  })
);

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

const ChildrenContainer = styled('div')<Pick<PanelProps, 'padding'>>(
  {
    height: '100%',
    overflowY: 'auto',
    wordBreak: 'break-word',
  },
  ({padding}) => ({
    padding: padding,
  })
);

const HeaderTitle = styled(H4)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingRight: spacing.xxxs,
});

export default class Panel extends React.Component<PanelProps, {}> {
  static OpenDirection = PanelDirection;
  static defaultProps = {
    iconLabel: 'Close',
    showHeader: true,
    openDirection: PanelDirection.Right,
    padding: spacing.s,
    width: 360,
    headerColor: colors.soap100,
    showDropShadow: false,
  };

  public render() {
    const {
      handleClose,
      headerTitle,
      children,
      iconLabel,
      icon,
      showHeader,
      padding,
      width,
      openDirection,
      headerColor,
      showDropShadow,
      headerActionEl,
    } = this.props;

    return (
      <PanelContainer showDropShadow={showDropShadow} width={width} openDirection={openDirection}>
        {showHeader && (
          <HeaderContainer headerColor={headerColor}>
            <HeaderTitle aria-labelby={headerTitle} title={headerTitle}>
              {headerTitle}
            </HeaderTitle>
            {icon ? (
              <IconButton onClick={handleClose} aria-label={iconLabel} icon={icon}></IconButton>
            ) : (
              headerActionEl
            )}
          </HeaderContainer>
        )}
        <ChildrenContainer padding={padding}>{children}</ChildrenContainer>
      </PanelContainer>
    );
  }
}
