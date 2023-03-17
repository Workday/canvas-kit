import React from 'react';

import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {Box} from '@workday/canvas-kit-react/layout';
import {ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/Layout/Box',
  component: Box,
});

const cellDefaultProps = {
  backgroundColor: 'soap400',
  depth: 2,
  display: 'inline-block',
  paddingY: 'xxs',
  position: 'relative',
};

export const BoxStates = () => {
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
          {label: 'LTR', props: {theme: {canvas: {direction: ContentDirection.LTR}}}},
          {label: 'RTL', props: {theme: {canvas: {direction: ContentDirection.RTL}}}},
        ]}
      >
        {props => {
          return (
            <CanvasProvider theme={props.theme}>
              <Box {...props}>Box</Box>
            </CanvasProvider>
          );
        }}
      </ComponentStatesTable>
    </>
  );
};
