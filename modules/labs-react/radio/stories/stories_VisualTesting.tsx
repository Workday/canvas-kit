import React from 'react';

import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../utils/storybook';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export default withSnapshotsEnabled({
  title: 'Testing/Labs/Radio',
  component: RadioGroup,
});

const testGroup = (
  <RadioGroup name="contact" value={'email'}>
    <RadioGroup.Button id="1">
      <RadioGroup.Input value="email" />
      <RadioGroup.Label>Email</RadioGroup.Label>
    </RadioGroup.Button>
    <RadioGroup.Button id="2">
      <RadioGroup.Input value="phone" />
      <RadioGroup.Label>Phone</RadioGroup.Label>
    </RadioGroup.Button>
    <RadioGroup.Button id="3" disabled={true}>
      <RadioGroup.Input value="fax" />
      <RadioGroup.Label>Fax (disabled)</RadioGroup.Label>
    </RadioGroup.Button>
    <RadioGroup.Button id="4">
      <RadioGroup.Input value="mail" />
      <RadioGroup.Label>
        "Mail (US Postal Service aka USPS), a longer than normal label"
      </RadioGroup.Label>
    </RadioGroup.Button>
  </RadioGroup>
);

export const RadioStates = () => {
  return (
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
            <RadioGroup>
              <RadioGroup.Button disabled={props.disabled}>
                <RadioGroup.Input {...props} />
                <RadioGroup.Label>Email</RadioGroup.Label>
              </RadioGroup.Button>
              <RadioGroup.Button disabled={props.disabled}>
                <RadioGroup.Input {...props} />
                <RadioGroup.Label>Phone</RadioGroup.Label>
              </RadioGroup.Button>
            </RadioGroup>
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
};
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
        {({disabled, ...props}) => (
          <div style={{backgroundColor: '#0875e1', padding: '12px', borderRadius: '4px'}}>
            <RadioGroup>
              <RadioGroup.Button disabled={disabled} variant="inverse">
                <RadioGroup.Input {...props} />
                <RadioGroup.Label>Email</RadioGroup.Label>
              </RadioGroup.Button>
              <RadioGroup.Button disabled={disabled} variant="inverse">
                <RadioGroup.Input {...props} />
                <RadioGroup.Label>Phone</RadioGroup.Label>
              </RadioGroup.Button>
            </RadioGroup>
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
