import * as React from 'react';
import {BoxProps, Box} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableDivider = createComponent('hr')({
  displayName: 'Table.Divider',
  Component({...elemProps}: BoxProps, ref, Element) {
    return (
      <Box
        as={Element}
        ref={ref}
        border={0}
        borderTop={`1px solid ${colors.soap400}`}
        display="block"
        height={1}
        margin="0 auto"
        width={`calc(100% - 24px)`}
        {...elemProps}
      />
    );
  },
});
