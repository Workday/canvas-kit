import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {TableRow} from './TableRow';
import {useTableModel} from './useTableModel';

export interface TableBodyProps extends BoxProps {
  /**
   * Children of the Table. Should contain one or more `<TableBody.Tr>`
   */
  children?: React.ReactNode;
}

export const TableBody = createContainer('tbody')({
  displayName: 'TableBody',
  subComponents: {
    Tr: TableRow,
  },
  modelHook: useTableModel,
})<TableBodyProps>(({children, ...elemProps}, Element) => {
  return (
    <Box as={Element} {...elemProps}>
      {children}
    </Box>
  );
});
