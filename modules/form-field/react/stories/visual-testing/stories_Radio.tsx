/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ControlledComponentWrapper,
  ComponentStatesTable,
  permutateProps,
  enableSnapshots,
} from '../../../../../utils/storybook';

import {Radio, RadioGroup} from '../../../../radio/react';
import FormField from '../../index';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export default {
  title: 'Components|Inputs/Radio/React/Visual Testing',
  component: FormField,
  parameters: {
    ...enableSnapshots(),
  },
};

export const States = () => (
  <div>
    <h3>Radio</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          checked: [{value: true, label: 'Checked'}, {value: false, label: 'Unchecked'}],
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
          <Radio
            {...props}
            onChange={() => {}} // eslint-disable-line no-empty-function
            label="Radio"
          />
        )}
      </ComponentStatesTable>
    </StaticStates>
    <h3>Radio Group</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          error: [
            {value: undefined, label: 'No Error'},
            {value: FormField.ErrorType.Alert, label: 'Alert'},
            {value: FormField.ErrorType.Error, label: 'Error'},
          ],
        })}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => (
          <FormField
            useFieldset={true}
            hintText={props.error ? hintText : undefined}
            hintId={hintId}
            labelPosition={FormField.LabelPosition.Left}
            {...props}
          >
            <ControlledComponentWrapper>
              <RadioGroup name="contact">
                <Radio id="1" value="email" label="E-mail" />
                <Radio id="2" value="fax" label="Fax (disabled)" disabled={true} />
              </RadioGroup>
            </ControlledComponentWrapper>
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>
  </div>
);
