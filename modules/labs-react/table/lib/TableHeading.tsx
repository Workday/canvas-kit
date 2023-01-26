import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

import {useTableModel} from './useTableModel';

export interface TableHeadingProps extends BoxProps {}

export const TableHeading = createSubcomponent('th')({
  displayName: 'Table.Heading',
  modelHook: useTableModel,
})<TableHeadingProps>(({children, ...elemProps}, Element) => {
  return (
    <Box
      as={Element}
      {...type.levels.subtext.large}
      height={space.xxl}
      padding={`${space.xs} ${space.xxs}`}
      fontWeight={type.properties.fontWeights.bold}
      textAlign="start"
      verticalAlign="middle"
      border={`1px solid ${colors.soap400}`}
      {...elemProps}
    >
      {children}
    </Box>
  );
});
