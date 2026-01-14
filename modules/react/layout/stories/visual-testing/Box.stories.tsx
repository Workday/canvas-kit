import React from 'react';

import {Box} from '@workday/canvas-kit-react/layout';
import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export default {
  title: 'Testing/Layout/Box',
  component: Box,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const cellDefaultProps = {
  backgroundColor: 'soap400',
  depth: 2,
  display: 'inline-block',
  paddingY: 'xxs',
  position: 'relative',
};

export const BoxStates = {
  render: () => {
    return (
      <>
        <p>Note: Standard Props have no bidirectional support</p>
        <ComponentStatesTable
          columnProps={[
            {
              label: 'Standard Props',
              props: {
                ...cellDefaultProps,
                borderLeft: 'solid 4px',
                borderLeftColor: 'cinnamon500',
                borderRight: 'solid 8px',
                borderRightColor: 'sourLemon500',
                left: '8px',
                marginLeft: 'm',
                paddingLeft: 's',
                paddingRight: 'l',
              },
            },
            {
              label: 'Logical Props',
              props: {
                ...cellDefaultProps,
                borderInlineStart: 'solid 4px',
                borderInlineStartColor: 'cinnamon500',
                borderInlineEnd: 'solid 8px',
                borderInlineEndColor: 'sourLemon500',
                insetInlineStart: '8px',
                marginInlineStart: 'm',
                paddingInlineStart: 's',
                paddingInlineEnd: 'l',
              },
            },
          ]}
          rowProps={[
            {label: 'LTR', props: {dir: 'ltr'}},
            {label: 'RTL', props: {dir: 'rtl'}},
          ]}
        >
          {props => {
            return (
              <CanvasProvider dir={props.dir}>
                <Box {...props}>Box</Box>
              </CanvasProvider>
            );
          }}
        </ComponentStatesTable>
      </>
    );
  },
};
