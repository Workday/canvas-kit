import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {TableRow} from './TableRow';
import {useTableModel} from './useTableModel';

export interface TableHeadProps extends BoxProps {
  /**
   * Children of the Table. Should contain one or more `<TableHead.Tr>`
   */
  children?: React.ReactNode;
}

export const TableHead = createContainer('thead')({
  displayName: 'TableHead',
  subComponents: {
    Tr: TableRow,
  },
  modelHook: useTableModel,
})<TableHeadProps>(({children, ...elemProps}, Element) => {
  return (
    <Box as={Element} borderSpacing={0} {...elemProps}>
      {children}
    </Box>
  );
});
