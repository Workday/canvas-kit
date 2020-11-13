/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
  Story,
} from '../../../../../utils/storybook';
import {DropdownButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Dropdown Button',
  component: DropdownButton,
});

export const DropdownButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: DropdownButton.Variant.Primary, label: 'Primary'},
          {value: DropdownButton.Variant.Secondary, label: 'Secondary'},
        ],
        size: [
          {value: DropdownButton.Size.Medium, label: 'Medium'},
          {value: DropdownButton.Size.Large, label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <DropdownButton {...props}>Test</DropdownButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const DropdownButtonThemedStates: Story = DropdownButtonStates;
DropdownButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
