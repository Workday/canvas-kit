import * as React from 'react';
import styled from 'react-emotion';
import canvas from '@workday/canvas-kit-react-core';

export interface ColumnProps {
  /**
   * Column cannot be empty.
   */
  children?: React.ReactNode;
  /**
   * Spacing of columns.
   */
  spacing?: number;
  /**
   * Widths of columns.
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Fixed width of columns
   */
  width?: number | string;
}

const ColumnContainer = styled('div')<ColumnProps>(
  {
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
  ({spacing}) => {
    if (spacing === 0) {
      return;
    }

    if (!spacing) {
      return {padding: `0 ${canvas.spacing.xs}`};
    }

    return {padding: `0 ${spacing}px`};
  },
  ({columns, width}) => {
    if (width) {
      return {width};
    }

    if (columns) {
      return {width: `${(columns / 12) * 100}%`};
    }

    return {flex: 1};
  }
);

export default class Column extends React.Component<ColumnProps> {
  public render() {
    return <ColumnContainer {...this.props}>{this.props.children}</ColumnContainer>;
  }
}
