/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, permutateProps} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';

import {Radio, RadioGroup} from '../../../radio';
import FormField from '../../index';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export default withSnapshotsEnabled({
  title: 'Testing/React/Inputs/Radio',
  component: FormField,
});

const testGroup = (
  <RadioGroup name="contact" value={'email'}>
    <Radio id="1" value="email" label="E-mail" />
    <Radio id="2" value="phone" label="Phone" />
    <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
    <Radio
      id="4"
      value="mail"
      label="Mail (US Postal Service aka USPS), a longer than normal label"
    />
  </RadioGroup>
);

export const RadioStates = () => (
  <div>
    <h3>Radio</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          checked: [
            {value: true, label: 'Checked'},
            {value: false, label: 'Unchecked'},
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
            disabled: [
              {label: '', value: false},
              {label: 'Disabled', value: true},
            ],
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
        columnProps={[
          {
            label: 'Left Label',
            props: {label: 'Contact', labelPosition: FormField.LabelPosition.Left},
          },
          {
            label: 'Top Label',
            props: {label: 'Contact'},
          },
        ]}
      >
        {props => (
          <FormField
            useFieldset={true}
            hintText={typeof props.error !== 'undefined' ? hintText : undefined}
            hintId={hintId}
            {...props}
          >
            {testGroup}
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>
    <h3>Radio Group (grow)</h3>
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          error: [
            {value: undefined, label: 'No Error'},
            {value: FormField.ErrorType.Alert, label: 'Alert'},
            {value: FormField.ErrorType.Error, label: 'Error'},
          ],
        })}
        columnProps={[
          {
            label: 'Grow',
            props: {label: 'Contact', grow: true},
          },
        ]}
      >
        {props => (
          <FormField
            useFieldset={true}
            hintText={typeof props.error !== 'undefined' ? hintText : undefined}
            hintId={hintId}
            {...props}
          >
            {testGroup}
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>

    <h3>RadioGroup (wrapping)</h3>
    <div style={{maxWidth: 480}}>
      <FormField
        label="Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."
        labelPosition={FormField.LabelPosition.Left}
        useFieldset={true}
      >
        {testGroup}
      </FormField>
      <FormField
        label="Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label. Really long label."
        useFieldset={true}
      >
        {testGroup}
      </FormField>
    </div>
  </div>
);

export const RadioThemedStates = () => <RadioStates />;
RadioThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
