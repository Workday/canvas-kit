import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {TableHead} from './TableHead';
import {TableBody} from './TableBody';
import {TableFoot} from './TableFoot';
import {useTableModel} from './useTableModel';

export interface TableProps extends BoxProps {
  /**
   * Children of the Table. Should contain a `<Table.Body>` and optional `<Table.Header>` and `<Table.Footer>`
   */
  children?: React.ReactNode;
}

export const Table = createContainer('table')({
  displayName: 'Table',
  subComponents: {
    Head: TableHead,
    Body: TableBody,
    Foot: TableFoot,
  },
  modelHook: useTableModel,
})<TableProps>(({children, ...elemProps}, Element) => {
  return (
    <Box
      width="100%"
      border={`1px solid ${colors.soap400}`}
      borderCollapse="collapse"
      borderSpacing={0}
      as={Element}
      {...elemProps}
    >
      {children}
    </Box>
  );
});
