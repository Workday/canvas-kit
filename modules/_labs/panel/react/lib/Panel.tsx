import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, CanvasSpacingValue} from '@workday/canvas-kit-react-core';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Adjust padding for the contents of the Panel. Default: `spacing.s`
   */
  padding?: CanvasSpacingValue;
  /**
   * Determines the side in which the Panel can open from. Default: `PanelDirection.Right`
   */
  openDirection?: PanelDirection;
  /**
   * Sets the width of the Panel. Default: `360px`
   */
  width?: number;
  /**
   * Allows to either show or hide a drop shadow on the Panel. Default: `false`
   */
  showDropShadow?: boolean;
  /**
   * Optional to pass a PanelHeader component shows an optional string and close button
   */
  header?: React.ReactElement;
}

export enum PanelDirection {
  Left,
  Right,
}

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

const ChildrenContainer = styled('div')<Pick<PanelProps, 'padding'>>(
  {
    height: '100%',
    overflowY: 'auto',
    wordBreak: 'break-word',
    position: 'relative',
  },
  ({padding}) => ({
    padding: padding,
  })
);

export default class Panel extends React.Component<PanelProps, {}> {
  static OpenDirection = PanelDirection;
  static defaultProps = {
    openDirection: PanelDirection.Right,
    padding: spacing.s,
    width: 360,
    showDropShadow: false,
  };

  public render() {
    const {
      children,
      padding,
      width,
      openDirection,
      header,
      showDropShadow,
      ...elemProps
    } = this.props;

    return (
      <PanelContainer
        {...elemProps}
        showDropShadow={showDropShadow}
        width={width}
        openDirection={openDirection}
      >
        {header && header}
        <ChildrenContainer padding={padding}>{children}</ChildrenContainer>
      </PanelContainer>
    );
  }
}
