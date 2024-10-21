import React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {ContentDirection} from '@workday/canvas-kit-react/common';
import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Layout/Flex',
  component: Flex,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const FlexLTRStates = {
  render: () => {
    return (
      <>
        <h2>Flex LTR States</h2>
        <StaticStates theme={{canvas: {direction: ContentDirection.LTR}}}>
          <ComponentStatesTable
            columnProps={[{label: 'Default', props: {}}]}
            rowProps={[
              {
                label: 'Row',
                props: {flexDirection: 'row', border: 'solid 2px', borderColor: 'blackPepper500'},
              },
              {
                label: 'Row Reverse',
                props: {
                  flexDirection: 'row-reverse',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
              {
                label: 'Column',
                props: {
                  flexDirection: 'column',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
              {
                label: 'Column Reverse',
                props: {
                  flexDirection: 'column-reverse',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
            ]}
          >
            {props => {
              return (
                <Flex {...props}>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    1
                  </Flex>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    2
                  </Flex>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    3
                  </Flex>
                </Flex>
              );
            }}
          </ComponentStatesTable>
        </StaticStates>
      </>
    );
  },
};

export const FlexRTLStates = {
  render: () => {
    return (
      <>
        <h2>Flex RTL States</h2>
        <StaticStates theme={{canvas: {direction: ContentDirection.RTL}}}>
          <ComponentStatesTable
            columnProps={[{label: 'Default', props: {}}]}
            rowProps={[
              {
                label: 'Row',
                props: {flexDirection: 'row', border: 'solid 2px', borderColor: 'blackPepper500'},
              },
              {
                label: 'Row-Reverse',
                props: {
                  flexDirection: 'row-reverse',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
              {
                label: 'Column',
                props: {
                  flexDirection: 'column',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
              {
                label: 'Column-Reverse',
                props: {
                  flexDirection: 'column-reverse',
                  border: 'solid 2px',
                  borderColor: 'blackPepper500',
                },
              },
            ]}
          >
            {props => {
              return (
                <Flex {...props}>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    1
                  </Flex>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    2
                  </Flex>
                  <Flex
                    flex="1 1 auto"
                    border="solid 2px"
                    alignItems="center"
                    justifyContent="center"
                    borderColor="cinnamon500"
                    margin="xxs"
                    paddingY="xxs"
                    paddingX="s"
                  >
                    3
                  </Flex>
                </Flex>
              );
            }}
          </ComponentStatesTable>
        </StaticStates>
      </>
    );
  },
};
