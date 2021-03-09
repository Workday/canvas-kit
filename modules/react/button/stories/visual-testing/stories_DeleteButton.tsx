/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react/core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
  customColorTheme,
} from '../../../../../utils/storybook';
import {DeleteButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Delete Button',
  component: DeleteButton,
});

export const DeleteButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: DeleteButton.Size.Small, label: 'Small'},
          {value: DeleteButton.Size.Medium, label: 'Medium'},
          {value: DeleteButton.Size.Large, label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <DeleteButton {...props}>Test</DeleteButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const DeleteButtonThemedStates = () => <DeleteButtonStates />;
DeleteButtonThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
