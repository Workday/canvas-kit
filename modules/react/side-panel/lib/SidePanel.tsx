import * as React from 'react';
import styled from '@emotion/styled';

import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors, space, CanvasSpaceValues} from '@workday/canvas-kit-react/tokens';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {chevronLeftIcon, chevronRightIcon} from '@workday/canvas-system-icons-web';
import {Heading} from '@workday/canvas-kit-react/text';

/**
 * @deprecated ⚠️ `SidePanelProps` in Main has been deprecated and will be removed in a future major version. Please use [`SidePanel` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-side-panel--docs) instead.
 */
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
  padding?: CanvasSpaceValues;
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
  closeNavigationAriaLabel?: string;
  /**
   * The `aria-label` that describes opening the navigation.
   * @default 'open navigation'
   */
  openNavigationAriaLabel?: string;
}

/**
 * @deprecated ⚠️ `SidePanelState` in Main has been deprecated and will be removed in a future major version.
 */
export interface SidePanelState {
  screenSize: number;
}

/**
 * @deprecated ⚠️ `SidePanelOpenDirection` in Main has been deprecated and will be removed in a future major version.
 */
export enum SidePanelOpenDirection {
  Left,
  Right,
}

/**
 * @deprecated ⚠️ `SidePanelBackgroundColor` in Main has been deprecated and will be removed in a future major version.
 */
export enum SidePanelBackgroundColor {
  White,
  Transparent,
  Gray,
}

const closedWidth = space.xxl;

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
    padding: open ? padding || space.m : `${space.s} 0`,
  }),
  ({openDirection}) => ({
    right: openDirection === SidePanelOpenDirection.Right ? space.zero : undefined,
    left: openDirection === SidePanelOpenDirection.Left ? space.zero : undefined,
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

const ToggleButton = styled(TertiaryButton, {shouldForwardProp: prop => prop !== 'openDirection'})<
  TertiaryButtonProps & Pick<SidePanelProps, 'openDirection'>
>(
  {
    position: 'absolute',
    bottom: space.s,
  },
  ({openDirection}) => ({
    right: openDirection === SidePanelOpenDirection.Left ? space.s : '',
    left: openDirection === SidePanelOpenDirection.Right ? space.s : '',
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
    width: open ? openWidth : space.xxl,
  })
);

/**
 * @deprecated ⚠️ `SidePanel` in Main has been deprecated and will be removed in a future major version. Please use [`SidePanel` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-side-panel--docs) instead.
 */
export class SidePanel extends React.Component<SidePanelProps, SidePanelState> {
  static OpenDirection = SidePanelOpenDirection;
  static BackgroundColor = SidePanelBackgroundColor;

  constructor(props: SidePanelProps) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    screenSize: typeof window !== 'undefined' ? window.innerWidth : 0,
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
      openNavigationAriaLabel = 'open navigation',
      closeNavigationAriaLabel = 'close navigation',
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
          {header && open ? (
            <Heading as="h2" size="small" marginTop="zero">
              {header}
            </Heading>
          ) : null}
          {this.props.children}
        </ChildrenContainer>
        <SidePanelFooter openWidth={openWidth} open={open}>
          {onToggleClick && (
            <ToggleButton
              openDirection={openDirection}
              aria-label={open ? closeNavigationAriaLabel : openNavigationAriaLabel}
              onClick={this.onToggleClick}
              icon={this.toggleButtonDirection(open, openDirection)}
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

  private toggleButtonDirection = (
    open: boolean,
    openDirection: SidePanelOpenDirection
  ): CanvasSystemIcon => {
    if (openDirection !== SidePanelOpenDirection.Right) {
      return open ? chevronLeftIcon : chevronRightIcon;
    } else {
      return open ? chevronRightIcon : chevronLeftIcon;
    }
  };
}
