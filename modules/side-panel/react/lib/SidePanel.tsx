import * as React from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, spacing, type, CanvasSpacingValue} from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {chevronLeftIcon, chevronRightIcon} from '@workday/canvas-system-icons-web';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, set the SidePanel to the open state.
   * @default false;
   */
  open: boolean;
  /**
   * The function called when the toggle button is clicked. The toggle button is only shown if this prop is defined.
   */
  onToggleClick?: () => void;
  /**
   * The text or element to display as the SidePanel header.
   */
  header?: string | React.ReactNode;
  /**
   * The side from which the SidePanel opens. Accepts `Left` or `Right`.
   * @default SidePanelOpenDirection.Left
   */
  openDirection?: SidePanelOpenDirection;
  /**
   * The function called when the window width changes and reaches a width equivalent to `breakpoint`. For example, if the window is resized from a width of `1000px`, this will be called when the window reaches a width equivalent to `breakpoint`. The `aboveBreakpoint` argument passed to the callback function indicates whether the current window width is above or below `breakpoint` so you can control `open` based on the change.
   */
  onBreakpointChange?: (aboveBreakpoint: boolean) => void;
  /**
   * The padding of the SidePanel when it's open.
   */
  padding?: CanvasSpacingValue;
  /**
   * The window width at which the SidePanel triggers `onBreakPointChange`.
   * @default 768px
   */
  breakpoint?: number;
  /**
   * The width of the SidePanel when it's open.
   * @default 300px
   */
  openWidth?: number;
  /**
   * The background color of the SidePanel when it's open.
   * @default SidePanelBackgroundColor.White
   */
  backgroundColor?: SidePanelBackgroundColor;
  /**
   * The `aria-label` that describes closing the navigation.
   * @default 'close navigation'
   */
  closeNavigationLabel?: string;
  /**
   * The `aria-label` that describes opening the navigation.
   * @default 'open navigation'
   */
  openNavigationLabel?: string;
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

const SidePanelContainer = styled('div')<
  Pick<SidePanelProps, 'open' | 'backgroundColor' | 'padding' | 'openWidth' | 'openDirection'>
>(
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
    alignItems: open ? undefined : 'center',
    boxShadow: open ? undefined : '0 8px 16px -8px rgba(0, 0, 0, 0.16)',
  }),
  ({open, backgroundColor}) => {
    let openBackgroundColor;

    switch (backgroundColor) {
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
    right: openDirection === SidePanelOpenDirection.Right ? spacing.zero : undefined,
    left: openDirection === SidePanelOpenDirection.Left ? spacing.zero : undefined,
  })
);

const ChildrenContainer = styled('div')<Pick<SidePanelProps, 'openWidth' | 'open'>>(
  {
    transition: 'none',
    zIndex: 1, // show above SidePanelFooter when screen is small vertically
  },
  ({open, openWidth}) => ({
    width: open ? openWidth : closedWidth,
  })
);

const ToggleButton = styled(IconButton)<IconButtonProps & Pick<SidePanelProps, 'openDirection'>>(
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
      backgroundColor = SidePanelBackgroundColor.White,
      openNavigationLabel = 'open navigation',
      closeNavigationLabel = 'close navigation',
      openDirection = SidePanelOpenDirection.Left,
      breakpoint = 768,
      openWidth = 300,
      header,
      onToggleClick,
      open,
      padding,
      onBreakpointChange,
      ...elemProps
    } = this.props;

    return (
      <SidePanelContainer
        role="region"
        padding={padding}
        openDirection={openDirection}
        openWidth={openWidth}
        backgroundColor={backgroundColor}
        open={open}
        {...elemProps}
      >
        <ChildrenContainer open={open} openWidth={openWidth}>
          {header && open ? <Header>{header}</Header> : null}
          {this.props.children}
        </ChildrenContainer>
        <SidePanelFooter openWidth={openWidth} open={open}>
          {onToggleClick && (
            <ToggleButton
              openDirection={openDirection}
              aria-label={open ? closeNavigationLabel : openNavigationLabel}
              toggled={false}
              size={IconButton.Size.Small}
              onClick={this.onToggleClick}
              icon={this.toggleButtonDirection()}
              variant={IconButton.Variant.CircleFilled}
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
