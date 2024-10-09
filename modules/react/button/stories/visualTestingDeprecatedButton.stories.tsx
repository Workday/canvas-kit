import React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {deprecated_Button as DeprecatedButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';

export default {
  title: 'Testing/Buttons/Button/Deprecated Button',
  component: DeprecatedButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const DeprecatedButtonStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          variant: [
            {value: 'primary', label: 'Primary'},
            {value: 'secondary', label: 'Secondary'},
            {value: 'delete', label: 'Deprecated'},
          ],
          size: [
            {value: 'small', label: 'Small'},
            {value: 'medium', label: 'Medium'},
            {value: 'large', label: 'Large'},
          ],
        })}
        columnProps={stateTableColumnProps}
      >
        {props => (
          <Container>
            <DeprecatedButton {...props}>Test</DeprecatedButton>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
