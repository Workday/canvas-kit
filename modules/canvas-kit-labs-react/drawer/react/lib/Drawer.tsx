import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, CanvasSpacingValue} from '@workday/canvas-kit-react-core';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The padding of the Drawer contents.
   * @default spacing.s
   */
  padding?: CanvasSpacingValue;
  /**
   * The direction from which the Drawer opens. Accepts `Left` or `Right`.
   * @default DrawerDirection.Right
   */
  openDirection?: DrawerDirection;
  /**
   * The width of the Drawer in `px`.
   * @default 360
   */
  width?: number;
  /**
   * If true, render the Drawer with a drop shadow.
   * @default false
   */
  showDropShadow?: boolean;
  /**
   * The optional DrawerHeader component of the Drawer. Shows an optional string and close button.
   */
  header?: React.ReactElement;
  /**
   * The `aria-labelledby` of the Drawer. Set this when there is a `header` for accessibility. The `role` attribute should also be used when this attribute is present. This value should be the same as the `id` attribute of the `header` element.
   */
  'aria-labelledby'?: string;
  /**
   * The `aria-label` for the Drawer. Set this when there is NO `header` for accessibility.
   */
  'aria-label'?: string;
  /**
   * The role of the Drawer. If `role` is provided, you must also set `aria-labelledby` to link `header` to the `role`.
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
    wordWrap: 'break-word', // Needed for IE11
    position: 'relative',
  },
  ({padding}) => ({
    padding: padding,
  })
);

export default class Drawer extends React.Component<DrawerProps, {}> {
  static OpenDirection = DrawerDirection;

  public render() {
    const {
      padding = spacing.s,
      width = 360,
      openDirection = DrawerDirection.Right,
      showDropShadow = false,
      children,
      header,
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
