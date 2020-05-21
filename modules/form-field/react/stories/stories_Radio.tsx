/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ControlledComponentWrapper,
  ComponentStatesTable,
  permutateProps,
  customColorTheme,
} from '../../../../utils/storybook';

import {Radio, RadioGroup} from '../../../radio/react';
import FormField from '../index';
import README from '../../../radio/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

storiesOf('Components|Inputs/Radio/React/Top Label/Radio Group', module)
  .addParameters({component: RadioGroup})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" useFieldset={true}>
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      useFieldset={true}
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
    >
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Error with Grow', () => (
    <FormField
      label="Label"
      useFieldset={true}
      error={FormField.ErrorType.Error}
      grow={true}
      hintText={hintText}
      hintId={hintId}
    >
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ));

storiesOf('Components|Inputs/Radio/React/Top Label/Radio', module)
  .addParameters({component: Radio})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label">
      <ControlledComponentWrapper
        controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
      >
        <Radio value="email" label="E-mail" />
      </ControlledComponentWrapper>
    </FormField>
  ));

storiesOf('Components|Inputs/Radio/React/Left Label/Radio Group', module)
  .addParameters({component: RadioGroup})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" useFieldset={true} labelPosition={FormField.LabelPosition.Left}>
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Alert', () => (
    <FormField
      label="Label"
      useFieldset={true}
      error={FormField.ErrorType.Alert}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Error with Grow', () => (
    <FormField
      label="Label"
      useFieldset={true}
      error={FormField.ErrorType.Error}
      grow={true}
      hintText={hintText}
      hintId={hintId}
      labelPosition={FormField.LabelPosition.Left}
    >
      <ControlledComponentWrapper>
        <RadioGroup name="contact">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
          <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
          <Radio id="4" value="mail" label="Mail" />
        </RadioGroup>
      </ControlledComponentWrapper>
    </FormField>
  ));

storiesOf('Components|Inputs/Radio/React/Left Label/Radio', module)
  .addParameters({component: Radio})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
      <ControlledComponentWrapper
        controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
      >
        <Radio value="email" label="E-mail" />
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
      <ControlledComponentWrapper
        controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
      >
        <Radio disabled={true} value="email" label="E-mail" />
      </ControlledComponentWrapper>
    </FormField>
  ));

const RadioStates = () => (
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

storiesOf('Components|Inputs/Radio/React/Visual Testing', module)
  .addParameters({
    component: Radio,
    chromatic: {
      disable: false,
    },
  })
  .addDecorator(withReadme(README))
  .add('States', () => <RadioStates />)
  .addParameters({
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  })
  .add('Theming', () => <RadioStates />);
