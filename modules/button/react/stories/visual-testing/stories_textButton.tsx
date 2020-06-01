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
import {TextButton} from '../../index';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Text Button',
  component: TextButton,
});

export const TextButtonStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          variant: [
            {value: TextButton.Variant.Default, label: 'Default'},
            {value: TextButton.Variant.AllCaps, label: 'All Caps'},
            {value: TextButton.Variant.Inverse, label: 'Inverse'},
            {value: TextButton.Variant.InverseAllCaps, label: 'Inverse All Caps'},
          ],
          size: [
            {value: TextButton.Size.Small, label: 'Small'},
            {value: TextButton.Size.Large, label: 'Large'},
          ],
          icon: [{value: undefined, label: ''}, {value: playCircleIcon, label: 'w/ Icon'}],
        },
        props => {
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
        <Container
          blue={[TextButton.Variant.Inverse, TextButton.Variant.InverseAllCaps].includes(
            props.variant
          )}
        >
          <TextButton {...props}>Test</TextButton>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
