import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, CanvasSpacingValue} from '@workday/canvas-kit-react-core';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Adjust padding for the contents of the Drawer. Default: `spacing.s`
   */
  padding?: CanvasSpacingValue;
  /**
   * Determines the side in which the Drawer can open from. Default: `DrawerDirection.Right`
   */
  openDirection?: DrawerDirection;
  /**
   * Sets the width of the Drawer. Default: `360px`
   */
  width?: number;
  /**
   * Allows to either show or hide a drop shadow on the Drawer. Default: `false`
   */
  showDropShadow?: boolean;
  /**
   * Optional to pass a DrawerHeader component shows an optional string and close button
   */
  header?: React.ReactElement;
  /**
   * Usey when there's a header for accessibility. The `role` attribute should also be used when this attribute is present. This value should be the same as the `id` attribute of the `header` element
   */
  'aria-labelledby'?: string;
  /**
   * Use when there is NO `header` for accessibility
   */
  'aria-label'?: string;
  /**
   * Optional role for the drawer. If this attribute is used, also provide an `aria-labelledby` attribute to link the `header` element to this role
   */
  role?: string;
}

export enum DrawerDirection {
  Left,
  Right,
}

const DrawerContainer = styled('div')<
  Pick<DrawerProps, 'width' | 'showDropShadow' | 'openDirection'>
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
      openDirection === DrawerDirection.Right && showDropShadow
        ? '-8px 0px 16px 0 rgba(0,0,0,0.12)'
        : openDirection === DrawerDirection.Left && showDropShadow
        ? '8px 0px 16px 0 rgba(0,0,0,0.12)'
        : undefined,
  }),
  ({openDirection}) => ({
    borderLeft: openDirection === DrawerDirection.Right ? `1px solid ${colors.soap400}` : undefined,
    borderRight: openDirection === DrawerDirection.Left ? `1px solid ${colors.soap400}` : undefined,
    right: openDirection === DrawerDirection.Right ? spacing.zero : undefined,
    left: openDirection === DrawerDirection.Left ? spacing.zero : undefined,
  })
);

const ChildrenContainer = styled('div')<Pick<DrawerProps, 'padding'>>(
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

export default class Drawer extends React.Component<DrawerProps, {}> {
  static OpenDirection = DrawerDirection;
  static defaultProps = {
    openDirection: DrawerDirection.Right,
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
      role,
      ...elemProps
    } = this.props;

    return (
      <DrawerContainer
        role={role}
        {...elemProps}
        showDropShadow={showDropShadow}
        width={width}
        openDirection={openDirection}
      >
        {header}
        <ChildrenContainer padding={padding}>{children}</ChildrenContainer>
      </DrawerContainer>
    );
  }
}
