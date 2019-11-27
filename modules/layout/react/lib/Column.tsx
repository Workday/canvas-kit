import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

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

const ColumnContainer = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'spacing',
})<ColumnProps>(
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

    return {padding: `0 ${spacing}px`};
  },
  ({columns, width, spacing}) => {
    if (width) {
      return {width};
    }

    if (columns) {
      if (columns === 12) {
        return {width: `100%`};
      } else {
        const compensation = ((12 - columns) / 12) * ((spacing || 0) * 2);
        return {width: `calc(${(columns / 12) * 100}% - ${compensation}px)`};
      }
    }

    return {flex: 1};
  }
);

export default class Column extends React.Component<ColumnProps> {
  public render() {
    const {children, spacing, columns, width, ...elemProps} = this.props;

    return (
      <ColumnContainer spacing={spacing} columns={columns} width={width} {...elemProps}>
        {children}
      </ColumnContainer>
    );
  }
}
