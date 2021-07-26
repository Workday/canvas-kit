import React from 'react';

import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Flex, Stack, StackProps} from '@workday/canvas-kit-labs-react/layout';
import {ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Layout/Stack',
  component: Stack,
});

export const StackLTRStates = () => {
  return (
    <>
      <h2>Stack LTR States</h2>
      <StaticStates theme={{canvas: {direction: ContentDirection.LTR}}}>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'Row',
              props: {
                spacing: 'xxs',
                flexDirection: 'row',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Row Reverse',
              props: {
                spacing: 'xxs',
                flexDirection: 'row-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column',
              props: {
                spacing: 'xxs',
                flexDirection: 'column',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column Reverse',
              props: {
                spacing: 'xxs',
                flexDirection: 'column-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
          ]}
        >
          {(props: StackProps) => {
            return (
              <Stack {...props}>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  1
                </Flex>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  2
                </Flex>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  3
                </Flex>
              </Stack>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};

export const StackRTLStates = () => {
  return (
    <>
      <h2>Stack RTL States</h2>
      <StaticStates theme={{canvas: {direction: ContentDirection.RTL}}}>
        <ComponentStatesTable
          columnProps={[{label: 'Default', props: {}}]}
          rowProps={[
            {
              label: 'Row',
              props: {
                spacing: 'xxs',
                flexDirection: 'row',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Row-Reverse',
              props: {
                spacing: 'xxs',
                flexDirection: 'row-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column',
              props: {
                spacing: 'xxs',
                flexDirection: 'column',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
            {
              label: 'Column-Reverse',
              props: {
                spacing: 'xxs',
                flexDirection: 'column-reverse',
                border: 'solid 2px',
                borderColor: 'blackPepper500',
              },
            },
          ]}
        >
          {(props: StackProps) => {
            return (
              <Stack {...props}>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  1
                </Flex>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  2
                </Flex>
                <Flex
                  flex="1 1 auto"
                  border="solid 2px"
                  alignItems="center"
                  justifyContent="center"
                  borderColor="cinnamon500"
                  padding="xxs"
                >
                  3
                </Flex>
              </Stack>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};
