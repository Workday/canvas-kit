import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {colors, space, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {useTableModel} from './useTableModel';

export interface TableDataProps extends BoxProps {}

export const TableData = createSubcomponent('td')({
  displayName: 'TanTable.Data',
  modelHook: useTableModel,
})<TableDataProps>(({children, ...elemProps}, Element) => {
  return (
    <Box
      as={Element}
      {...type.levels.subtext.large}
      height={spaceNumbers.xl + spaceNumbers.xxs}
      padding={`${space.xs} ${space.xxs}`}
      border={`1px solid ${colors.soap400}`}
      {...elemProps}
    >
      {children}
    </Box>
  );
});
