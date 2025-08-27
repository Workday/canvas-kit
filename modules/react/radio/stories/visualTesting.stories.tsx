import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';

import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {FormField} from '@workday/canvas-kit-react/form-field';

export default {
  title: 'Testing/Inputs/Radio',
  component: RadioGroup,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const testGroup = (
  <FormField.Input as={RadioGroup} name="contact" value={'email'}>
    <Radio id="1" value="email" label="E-mail" />
    <Radio id="2" value="phone" label="Phone" />
    <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
    <Radio
      id="4"
      value="mail"
      label="Mail (US Postal Service aka USPS), a longer than normal label"
    />
  </FormField.Input>
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
            {value: 'caution', label: 'Caution'},
            {value: 'error', label: 'Error'},
          ],
        })}
        columnProps={[
          {
            label: 'Left Label',
            props: {label: 'Contact', orientation: 'horizontalStart'},
          },
          {
            label: 'Top Label',
            props: {label: 'Contact'},
          },
        ]}
      >
        {props => (
          <FormField as="fieldset" {...props}>
            <FormField.Label>{props.label}</FormField.Label>
            {props.orientation === 'horizontalStart' ? (
              <FormField.Field>
                {testGroup}
                {props.error && <FormField.Hint>hintText</FormField.Hint>}
              </FormField.Field>
            ) : (
              <>
                <FormField.Field>
                  {testGroup}
                  {props.error && <FormField.Hint>hintText</FormField.Hint>}
                </FormField.Field>
              </>
            )}
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
            {value: 'caution', label: 'Caution'},
            {value: 'error', label: 'Error'},
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
          <FormField as="fieldset" {...props} cs={{width: props.grow ? '100%' : undefined}}>
            <FormField.Label>{props.label}</FormField.Label>
            {testGroup}
            {props.orientation === 'horizontal' && (
              <FormField.Container>
                {testGroup} {props.error && <FormField.Hint>hintText</FormField.Hint>}
              </FormField.Container>
            )}
            {props.error && <FormField.Hint>hintText</FormField.Hint>}
          </FormField>
        )}
      </ComponentStatesTable>
    </StaticStates>

    <h3>RadioGroup (wrapping)</h3>
    <div style={{maxWidth: 480}}>
      <FormField orientation="horizontalStart" as="fieldset">
        <FormField.Label as="legend">
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label.
        </FormField.Label>
        {testGroup}
      </FormField>
      <FormField as="fieldset">
        <FormField.Label as="legend">
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label. Really long label. Really long label. Really long label. Really
          long label. Really long label. Really long label. Really long label. Really long label.
          Really long label. Really long label. Really long label. Really long label. Really long
          label. Really long label. Really long label. Really long label. Really long label. Really
          long label. Really long label. Really long label.
        </FormField.Label>
        {testGroup}
      </FormField>
    </div>
  </div>
);

export const InverseRadioStates = () => (
  <div>
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
          <div style={{backgroundColor: '#0875e1', padding: '12px', borderRadius: '4px'}}>
            <Radio
              {...props}
              variant="inverse"
              onChange={() => {}} // eslint-disable-line no-empty-function
              label="Radio"
            />
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  </div>
);

export const RadioThemedStates = () => <RadioStates />;
RadioThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};

export const RadioInverseThemedStates = () => <InverseRadioStates />;
RadioInverseThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
