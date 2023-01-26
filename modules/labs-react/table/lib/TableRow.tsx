import * as React from 'react';

import {createContainer, styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {TableHeading} from './TableHeading';
import {TableData} from './TableData';
import {useTableModel} from './useTableModel';

export interface TableRowProps extends BoxProps {
  /**
   * Children of the Table. Should contain one or more `<TableRow.Th>` or `<TableRow.Td>`
   */
  children?: React.ReactNode;
}

const StyledTableRow = styled(Box)<StyledType>({
  '&:hover': {backgroundColor: colors.soap300},
});

export const TableRow = createContainer('tr')({
  displayName: 'TableRow',
  subComponents: {
    Td: TableData,
    Th: TableHeading,
  },
  modelHook: useTableModel,
})<TableRowProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTableRow as={Element} {...elemProps}>
      {children}
    </StyledTableRow>
  );
});
