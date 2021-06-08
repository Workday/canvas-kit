import * as React from 'react';
import styled from '@emotion/styled';
import {colors, type} from '@workday/canvas-kit-react/tokens';

export const borderWidth = 1;
export const borderColor = colors.soap400;
export const cellBorder = `${borderWidth}px solid ${borderColor}`;

const TableComponent = styled('table')(type.levels.subtext.large, {
  width: '100%',
  border: cellBorder,
  borderSpacing: 0,
  textAlign: 'left',
  thead: {
    borderSpacing: 0,
  },
});

export default class Table extends React.Component<React.TableHTMLAttributes<HTMLTableElement>> {
  public render() {
    const {children, ...elemProps} = this.props;

    return <TableComponent {...elemProps}>{children}</TableComponent>;
  }
}
