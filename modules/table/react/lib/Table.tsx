import * as React from 'react';
import styled from 'react-emotion';
import {colors, type} from '@workday/canvas-kit-react-core';

export const borderWidth = 1;
export const borderColor = colors.soap400;
export const cellBorder = `${borderWidth}px solid ${borderColor}`;

const TableComponent = styled('table')(type.body, {
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
