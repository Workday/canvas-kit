import * as React from 'react';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react-core';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the state the side panel is in (collapsed or expanded) as well as its width. If true, width is set to the `collapsedWidth` prop. Otherwise, it is set to the `width` prop
   *
   * @defualt false
   */
  collapsed?: boolean;
  /**
   * The width of the component (in `px` if it's a `number`) when it is collapsed.
   *
   * @default 64
   */
  collapsedWidth?: number | string;
  /**
   * The height of the component (in `px` if it's a `number`).
   *
   * @default 400
   */
  height?: number | string;
  /**
   * The width of the component (in `px if it's a `number`) when it is expanded.
   */
  width?: number | string;
}

const Container = styled('div')<SidePanelProps>(
  {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: colors.soap100,
    boxSizing: 'border-box',
    transition: 'min-width 0.2s, max-width 0.2s, width 0.2s ease-out 0s',
  },
  ({collapsed, collapsedWidth, width, height}) => ({
    width: collapsed ? collapsedWidth : width,
    maxWidth: collapsed ? collapsedWidth : width,
    minWidth: collapsed ? collapsedWidth : width,
    height: height,
    maxHeight: height,
    minHeight: height,
  })
);

const SidePanel: React.FC<SidePanelProps> = props => {
  const {width = 320, collapsedWidth = 64, height = 400, collapsed = false, ...elemProps} = props;

  return (
    <Container
      role="region"
      collapsed={collapsed}
      width={width}
      collapsedWidth={collapsedWidth}
      height={height}
      {...elemProps}
    />
  );
};

export default SidePanel;
