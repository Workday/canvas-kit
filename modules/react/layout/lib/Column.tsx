import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

/**
 * ### Deprecated Layout Column Props
 *
 * As of Canvas Kit v8, Layout is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */
export interface DeprecatedColumnProps {
  /**
   * The children of the DeprecatedColumn (cannot be empty).
   */
  children?: React.ReactNode;
  /**
   * The left and right padding of the DeprecatedColumn (inherits from Layout prop).
   * @default 12
   */
  spacing?: number;
  /**
   * The size of the 12-column grid.
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * The width of the columns. This will take precedence over `columns`.
   */
  width?: number | string;
}

const ColumnContainer = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'spacing',
})<DeprecatedColumnProps>(
  {
    '&:first-of-type': {
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

export class DeprecatedColumn extends React.Component<DeprecatedColumnProps> {
  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );
  }

  public render() {
    const {children, spacing, columns, width, ...elemProps} = this.props;

    return (
      <ColumnContainer spacing={spacing} columns={columns} width={width} {...elemProps}>
        {children}
      </ColumnContainer>
    );
  }
}
