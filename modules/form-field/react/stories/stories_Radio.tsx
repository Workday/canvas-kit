/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper} from '../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';
import styled from '@emotion/styled';

import {Radio, RadioGroup} from '../../../radio/react';
import FormField from '../index';
import README from '../../../radio/react/README.md';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

const Table = styled('table')({
  width: '100%',
  thead: {
    textAlign: 'left',
    paddingBottom: 16,
  },
  'td, th': {
    minWidth: 100,
    paddingBottom: 16,
    paddingRight: 16,
    textAlign: 'left',
  },
});

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
        <Radio id="1" value="email" label="E-mail" />
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
        <Radio id="1" value="email" label="E-mail" />
      </ControlledComponentWrapper>
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField label="Label" labelPosition={FormField.LabelPosition.Left}>
      <ControlledComponentWrapper
        controlledProp={ControlledComponentWrapper.ControlledProp.Checked}
      >
        <Radio disabled={true} id="1" value="email" label="E-mail" />
      </ControlledComponentWrapper>
    </FormField>
  ));

storiesOf('Components|Inputs/Radio/React/Visual', module)
  .addParameters({component: Radio})
  .addDecorator(withReadme(README))
  .add('States', () => (
    <StaticStates>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>No state</th>
            <th>Hover</th>
            <th>Focused</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {[false, true].map(checked => {
            const key = `${checked ? 'checked' : 'unchecked'}`;

            return (
              <tr key={key}>
                <td>{`${checked ? 'checked' : 'unchecked'}`}</td>

                {['', 'hover', 'focus', 'active'].map(className => (
                  <td key={`${key}-${className}`}>
                    <Radio
                      checked={checked}
                      className={className}
                      onChange={() => {}} // eslint-disable-line no-empty-function
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </StaticStates>
  ));
