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
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Button',
  component: Button,
});

export const ButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: Button.Variant.Primary, label: 'Primary'},
            {value: Button.Variant.Secondary, label: 'Secondary'},
            {value: Button.Variant.Highlight, label: 'Highlight'},
            {value: Button.Variant.OutlinePrimary, label: 'Outline Primary'},
            {value: Button.Variant.OutlineSecondary, label: 'Outline Secondary'},
            {value: Button.Variant.OutlineInverse, label: 'Outline Inverse'},
            {value: Button.Variant.Delete, label: 'Delete'},
          ],
          size: [
            {value: Button.Size.Small, label: 'Small'},
            {value: Button.Size.Medium, label: 'Medium'},
            {value: Button.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
          dataLabel: [{value: undefined, label: ''}, {value: '1:23', label: 'w/ Data Label'}],
        },
        props => {
          if (props.size === Button.Size.Small && (props.icon || props.dataLabel)) {
            return false;
          }
          if (props.variant === Button.Variant.Highlight && !props.icon) {
            return false;
          }
          if (props.variant === Button.Variant.Delete && (props.icon || props.dataLabel)) {
            return false;
          }
          return true;
        }
      )}
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
        <Container blue={props.variant === Button.Variant.OutlineInverse}>
          <Button {...props}>Test</Button>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
