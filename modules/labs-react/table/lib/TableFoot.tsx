import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {TableRow} from './TableRow';
import {useTableModel} from './useTableModel';

export interface TableFootProps extends BoxProps {
  /**
   * Children of the Table. Should contain one or more `<TableFoot.Tr>`
   */
  children?: React.ReactNode;
}

export const TableFoot = createContainer('tfoot')({
  displayName: 'TableFoot',
  subComponents: {
    Tr: TableRow,
  },
  modelHook: useTableModel,
})<TableFootProps>(({children, ...elemProps}, Element) => {
  return (
    <Box as={Element} {...elemProps}>
      {children}
    </Box>
  );
});
