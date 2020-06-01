/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {DropdownButton} from '../../index';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Dropdown',
  component: DropdownButton,
});

export const DropdownStates = () => (
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
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [{label: '', value: false}, {label: 'Disabled', value: true}],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <Container>
          <DropdownButton {...props}>Test</DropdownButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
