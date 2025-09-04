import React from 'react';

import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

const hintText = 'Helpful text goes here.';
const hintId = 'error-desc-id';

export default {
  title: 'Testing/Preview/Radio',
  component: RadioGroup,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const testGroup = (
  <FormFieldGroup.List as={RadioGroup} name="contact" value={'email'}>
    <FormFieldGroup.Input as={RadioGroup.RadioButton} id="1" value="email">
      Email
    </FormFieldGroup.Input>
    <FormFieldGroup.Input as={RadioGroup.RadioButton} id="2" value="phone">
      Phone
    </FormFieldGroup.Input>
    <FormFieldGroup.Input as={RadioGroup.RadioButton} id="3" disabled={true} value="fax">
      Fax (disabled)
    </FormFieldGroup.Input>
    <FormFieldGroup.Input as={RadioGroup.RadioButton} id="4" value="mail">
      "Mail (US Postal Service aka USPS), a longer than normal label"
    </FormFieldGroup.Input>
  </FormFieldGroup.List>
);

export const RadioStates = {
  render: () => {
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
                <RadioGroup.RadioButton disabled={props.disabled} {...props}>
                  Email
                </RadioGroup.RadioButton>
                <RadioGroup.RadioButton disabled={props.disabled} {...props}>
                  Phone
                </RadioGroup.RadioButton>
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
                {value: 'caution', label: 'Caution'},
                {value: 'error', label: 'Error'},
              ],
            })}
            columnProps={[
              {
                label: 'Horizontal Start',
                props: {label: 'Contact', labelPosition: 'horizontalStart'},
              },
              {
                label: 'Top Label',
                props: {label: 'Contact', labelPosition: 'vertical'},
              },
              {
                label: 'Horizontal End',
                props: {label: 'Contact', labelPosition: 'horizontalEnd'},
              },
            ]}
          >
            {props => (
              <FormFieldGroup id={hintId} orientation={props.labelPosition} error={props.error}>
                <FormFieldGroup.Label>{props.label}</FormFieldGroup.Label>
                <FormFieldGroup.Field>
                  {testGroup}
                  <FormFieldGroup.Hint>
                    {typeof props.error !== 'undefined' ? hintText : undefined}
                  </FormFieldGroup.Hint>
                </FormFieldGroup.Field>
              </FormFieldGroup>
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
              <FormFieldGroup id={hintId} orientation={'vertical'} error={props.error}>
                <FormFieldGroup.Label>{props.label}</FormFieldGroup.Label>
                <FormFieldGroup.Field>
                  {testGroup}
                  <FormFieldGroup.Hint>
                    {typeof props.error !== 'undefined' ? hintText : undefined}
                  </FormFieldGroup.Hint>
                </FormFieldGroup.Field>
              </FormFieldGroup>
            )}
          </ComponentStatesTable>
        </StaticStates>
        <h3>RadioGroup (wrapping)</h3>
        <div style={{maxWidth: 480}}>
          <FormFieldGroup orientation="horizontalStart">
            <FormFieldGroup.Label>
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label.
            </FormFieldGroup.Label>
            <FormFieldGroup.Field>{testGroup}</FormFieldGroup.Field>
          </FormFieldGroup>
          <FormFieldGroup>
            <FormFieldGroup.Label>
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label. Really long label. Really long label. Really long
              label. Really long label. Really long label. Really long label. Really long label.
              Really long label. Really long label. Really long label. Really long label. Really
              long label. Really long label. Really long label. Really long label. Really long
              label. Really long label. Really long label. Really long label. Really long label.
            </FormFieldGroup.Label>
            <FormFieldGroup.Field>{testGroup}</FormFieldGroup.Field>
          </FormFieldGroup>
        </div>
      </div>
    );
  },
};
export const InverseRadioStates = {
  render: () => (
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
                <RadioGroup.Label disabled={disabled} variant="inverse">
                  <RadioGroup.Label.Input {...props} />
                  <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
                </RadioGroup.Label>
                <RadioGroup.Label disabled={disabled} variant="inverse">
                  <RadioGroup.Label.Input {...props} />
                  <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
                </RadioGroup.Label>
              </RadioGroup>
            </div>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </div>
  ),
};

export const RadioThemedStates = {
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
  render: RadioStates.render,
};

export const RadioInverseThemedStates = {
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
  render: InverseRadioStates.render,
};
