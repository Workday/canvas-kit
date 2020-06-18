/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {Button} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Button',
  component: Button,
});

export const ButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: Button.Variant.Primary, label: 'Primary'},
          {value: Button.Variant.Secondary, label: 'Secondary'},
        ],
        size: [
          {value: Button.Size.Small, label: 'Small'},
          {value: Button.Size.Medium, label: 'Medium'},
          {value: Button.Size.Large, label: 'Large'},
        ],
        icon: [
          {value: undefined, label: ''},
          {value: playCircleIcon, label: 'w/ Icon'},
        ],
        dataLabel: [
          {value: undefined, label: ''},
          {value: '1:23', label: 'w/ Data Label'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => (
        <Container>
          <Button {...props}>Test</Button>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
