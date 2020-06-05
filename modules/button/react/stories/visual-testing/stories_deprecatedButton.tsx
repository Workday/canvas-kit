/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {deprecated_Button as DeprecatedButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Deprecated Button',
  component: DeprecatedButton,
});

export const DeprecatedButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {value: DeprecatedButton.Variant.Primary, label: 'Primary'},
          {value: DeprecatedButton.Variant.Secondary, label: 'Secondary'},
          {value: DeprecatedButton.Variant.Delete, label: 'Deprecated'},
        ],
        size: [
          {value: DeprecatedButton.Size.Small, label: 'Small'},
          {value: DeprecatedButton.Size.Medium, label: 'Medium'},
          {value: DeprecatedButton.Size.Large, label: 'Large'},
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
);
