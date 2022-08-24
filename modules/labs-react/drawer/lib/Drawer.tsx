import * as React from 'react';
import styled from '@emotion/styled';
import {colors, space, CanvasSpaceValues} from '@workday/canvas-kit-react/tokens';

/**
 * ### Deprecated Drawer Props
 *
 * As of Canvas Kit v8, Drawer is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export interface DeprecatedDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The padding of the DeprecatedDrawer contents.
   * @default space.s
   */
  padding?: CanvasSpaceValues;
  /**
   * The direction from which the DeprecatedDrawer opens. Accepts `Left` or `Right`.
   * @default DeprecatedDrawerDirection.Right
   */
  openDirection?: DeprecatedDrawerDirection;
  /**
   * The width of the DeprecatedDrawer in `px`.
   * @default 360
   */
  width?: number;
  /**
   * If true, render the DeprecatedDrawer with a drop shadow.
   * @default false
   */
  showDropShadow?: boolean;
  /**
   * The optional DeprecatedDrawerHeader component of the DeprecatedDrawer. Shows an optional string and close button.
   */
  header?: React.ReactElement;
  /**
   * The `aria-labelledby` of the DeprecatedDrawer. Set this when there is a `header` for accessibility. The `role` attribute should also be used when this attribute is present. This value should be the same as the `id` attribute of the `header` element.
   */
  'aria-labelledby'?: string;
  /**
   * The `aria-label` for the DeprecatedDrawer. Set this when there is NO `header` for accessibility.
   */
  'aria-label'?: string;
  /**
   * The role of the DeprecatedDrawer. If `role` is provided, you must also set `aria-labelledby` to link `header` to the `role`.
   */
  role?: string;
}

export enum DeprecatedDrawerDirection {
  Left,
  Right,
}

const DeprecatedDrawerContainer = styled('div')<
  Pick<DeprecatedDrawerProps, 'width' | 'showDropShadow' | 'openDirection'>
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
      openDirection === DeprecatedDrawerDirection.Right && showDropShadow
        ? '-8px 0px 16px 0 rgba(0,0,0,0.12)'
        : openDirection === DeprecatedDrawerDirection.Left && showDropShadow
        ? '8px 0px 16px 0 rgba(0,0,0,0.12)'
        : undefined,
  }),
  ({openDirection}) => ({
    borderLeft:
      openDirection === DeprecatedDrawerDirection.Right ? `1px solid ${colors.soap400}` : undefined,
    borderRight:
      openDirection === DeprecatedDrawerDirection.Left ? `1px solid ${colors.soap400}` : undefined,
    right: openDirection === DeprecatedDrawerDirection.Right ? space.zero : undefined,
    left: openDirection === DeprecatedDrawerDirection.Left ? space.zero : undefined,
  })
);

const ChildrenContainer = styled('div')<Pick<DeprecatedDrawerProps, 'padding'>>(
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

/**
 * ### Deprecated Drawer
 *
 * As of Canvas Kit v8, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export class DeprecatedDrawer extends React.Component<DeprecatedDrawerProps, {}> {
  static OpenDirection = DeprecatedDrawerDirection;

  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );
  }

  public render() {
    const {
      padding = space.s,
      width = 360,
      openDirection = DeprecatedDrawerDirection.Right,
      showDropShadow = false,
      children,
      header,
      role,
      ...elemProps
    } = this.props;

    return (
      <DeprecatedDrawerContainer
        role={role}
        {...elemProps}
        showDropShadow={showDropShadow}
        width={width}
        openDirection={openDirection}
      >
        {header}
        <ChildrenContainer padding={padding}>{children}</ChildrenContainer>
      </DeprecatedDrawerContainer>
    );
  }
}
