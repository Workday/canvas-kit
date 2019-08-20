import * as React from 'react';
import styled from 'react-emotion';
import throttle from 'lodash/throttle';

import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, ButtonSizes} from '@workday/canvas-kit-react-button';
import {chevronLeftIcon, chevronRightIcon} from '@workday/canvas-system-icons-web';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onToggleClick?: () => void;
  header?: string | React.ReactNode;
  openDirection?: SidePanelOpenDirection;
  onBreakpointChange?: (open: boolean) => void;
  padding?: CanvasSpacingValue;
  breakpoint?: number;
  openWidth?: number;
  sidePanelBackgroundColor?: SidePanelBackgroundColor;
}

export interface SidePanelState {
  screenSize: number;
}

export enum SidePanelOpenDirection {
  Left,
  Right,
}

export enum SidePanelBackgroundColor {
  White,
  Transparent,
  Gray,
}

const closedWidth = spacing.xxl;

const Header = styled('h2')({
  ...type.h2,
  marginTop: spacing.zero,
});

const SidePanelContainer = styled('div')<SidePanelProps>(
  {
    overflow: 'hidden',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 200ms ease',
    position: 'absolute',
  },
  ({open}) => ({
    alignItems: open ? '' : 'center',
    boxShadow: !open ? '0 8px 16px -8px rgba(0, 0, 0, 0.16)' : '',
  }),
  ({open, sidePanelBackgroundColor}) => {
    let openBackgroundColor;

    switch (sidePanelBackgroundColor) {
      case SidePanelBackgroundColor.Transparent:
        openBackgroundColor = 'transparent';
        break;
      case SidePanelBackgroundColor.Gray:
        openBackgroundColor = colors.soap100;
        break;
      case SidePanelBackgroundColor.White:
      default:
        openBackgroundColor = colors.frenchVanilla100;
        break;
    }

    return {
      backgroundColor: open ? openBackgroundColor : colors.frenchVanilla100,
    };
  },
  ({open, openWidth}) => ({
    width: open ? openWidth : closedWidth,
  }),
  ({open, padding}) => ({
    padding: open ? padding || spacing.m : `${spacing.s} 0`,
  }),
  ({openDirection}) => ({
    right: openDirection === SidePanelOpenDirection.Right ? spacing.zero : '',
    left: openDirection === SidePanelOpenDirection.Left ? spacing.zero : '',
  })
);

const ChildrenContainer = styled('div')<Pick<SidePanelProps, 'openWidth'>>(
  {
    transition: 'none',
    zIndex: 1, // show above SidePanelFooter when screen is small vertically
  },
  ({openWidth}) => ({
    width: openWidth,
  })
);

const ToggleButton = styled(IconButton)<Pick<SidePanelProps, 'openDirection'>>(
  {
    position: 'absolute',
    bottom: spacing.s,
  },
  ({openDirection}) => ({
    right: openDirection === SidePanelOpenDirection.Left ? spacing.s : '',
    left: openDirection === SidePanelOpenDirection.Right ? spacing.s : '',
  })
);

const SidePanelFooter = styled('div')<Pick<SidePanelProps, 'open' | 'openWidth'>>(
  {
    position: 'absolute',
    bottom: '0',
    height: 120,
    left: 0,
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
  },
  ({open, openWidth}) => ({
    width: open ? openWidth : spacing.xxl,
  })
);

export default class SidePanel extends React.Component<SidePanelProps, SidePanelState> {
  static OpenDirection = SidePanelOpenDirection;
  static BackgroundColor = SidePanelBackgroundColor;

  static defaultProps = {
    breakpoint: 768,
    openWidth: 300,
    openDirection: SidePanelOpenDirection.Left,
    sidePanelBackgroundColor: SidePanelBackgroundColor.White,
  };

  constructor(props: SidePanelProps) {
    super(props);
    this.handleResize = throttle(this.handleResize.bind(this), 150);
  }

  state = {
    screenSize: window.innerWidth,
  };

  public componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  public render() {
    const {
      header,
      onToggleClick,
      open,
      openDirection,
      padding,
      onBreakpointChange,
      openWidth,
      sidePanelBackgroundColor,
      ...otherProps
    } = this.props;

    return (
      <SidePanelContainer
        role="region"
        aria-orientation="vertical"
        padding={padding}
        onBreakpointChange={this.handleResize}
        openDirection={openDirection}
        openWidth={openWidth}
        sidePanelBackgroundColor={sidePanelBackgroundColor}
        open={open}
        {...otherProps}
      >
        <ChildrenContainer openWidth={openWidth}>
          {header && open ? <Header>{header}</Header> : null}
          {this.props.children}
        </ChildrenContainer>
        <SidePanelFooter openWidth={openWidth} open={open}>
          {onToggleClick && (
            <ToggleButton
              openDirection={openDirection}
              aria-label={`${open ? 'hide navigation' : 'show navigation'}`}
              toggled={false}
              buttonSize={ButtonSizes.Small}
              onClick={this.onToggleClick}
              icon={this.toggleButtonDirection()}
              buttonType={IconButton.Types.CircleFilled}
            />
          )}
        </SidePanelFooter>
      </SidePanelContainer>
    );
  }

  private handleResize = () => {
    if (!this.props.onBreakpointChange || !this.props.breakpoint) {
      return;
    }

    if (window.innerWidth > this.props.breakpoint && !this.props.open) {
      this.props.onBreakpointChange(true);
    }
    if (window.innerWidth <= this.props.breakpoint && this.props.open) {
      this.props.onBreakpointChange(false);
    }
  };

  private onToggleClick = () => {
    if (this.props.onToggleClick) {
      this.props.onToggleClick();
    }
  };

  private toggleButtonDirection = (): CanvasSystemIcon => {
    if (this.props.openDirection !== SidePanelOpenDirection.Right) {
      return this.props.open ? chevronLeftIcon : chevronRightIcon;
    } else {
      return this.props.open ? chevronRightIcon : chevronLeftIcon;
    }
  };
}
