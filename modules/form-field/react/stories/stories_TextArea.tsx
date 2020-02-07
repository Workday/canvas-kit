/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {controlComponent, ComponentStatesTable, permutateProps} from '../../../../utils/storybook';

import {TextArea} from '../../../text-area/react';
import FormField from '../index';
import README from '../../../text-area/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components|Inputs/TextArea/React/Top Label', module)
  .addParameters({component: TextArea})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="textarea-plain">
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField label="Label" inputId="textarea-placeholder">
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" inputId="textarea-disabled">
      {controlComponent(<TextArea disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField label="Label" inputId="textarea-disabled-placeholder">
      {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      inputId="textarea-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      label="Label"
      inputId="textarea-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField label="Label" inputId="textarea-grow" grow={true}>
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
    <FormField
      label="Label"
      inputId="textarea-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ));

storiesOf('Components|Inputs/TextArea/React/Left Label', module)
  .addParameters({component: TextArea})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="textarea-plain">
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('With placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-placeholder"
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-disabled"
    >
      {controlComponent(<TextArea disabled={true} />)}
    </FormField>
  ))
  .add('Disabled with placeholder', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-disabled-placeholder"
    >
      {controlComponent(<TextArea placeholder="Placeholder" disabled={true} />)}
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-alert"
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-error"
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea />)}
    </FormField>
  ))
  .add('Grow', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-grow"
      grow={true}
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ))
  .add('Grow with Error', () => (
    <FormField
      labelPosition={FormField.LabelPosition.Left}
      label="Label"
      inputId="textarea-grow-error"
      grow={true}
      error={FormField.ErrorType.Error}
      hintText={hintText}
      hintId={hintId}
    >
      {controlComponent(<TextArea placeholder="Placeholder" />)}
    </FormField>
  ));

storiesOf('Components|Inputs/TextArea/React/Visual Testing', module)
  .addParameters({component: TextArea})
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps(
          {
            value: [{value: 'Input value', label: 'With Value'}, {value: '', label: 'No Value'}],
            placeholder: [{value: 'Placeholder', label: 'Placeholder'}],
            error: [
              {value: undefined, label: ''},
              {value: TextArea.ErrorType.Alert, label: 'Alert'},
              {value: TextArea.ErrorType.Error, label: 'Error'},
            ],
          },
          props => {
            if (props.value === '' && !props.placeholder) {
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
          <TextArea
            {...props}
            style={{minWidth: 60, width: 100}}
            onChange={() => {}} // eslint-disable-line no-empty-function
          />
        )}
      </ComponentStatesTable>
    </StaticStates>
  ));
