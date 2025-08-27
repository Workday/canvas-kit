import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {customColorTheme} from '../../../../utils/storybook';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export default {
  title: 'Testing/Inputs/Text Input',
  component: TextInput,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const TextInputStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          value: [
            {value: 'Input value', label: 'With Value'},
            {value: '', label: 'No Value'},
          ],
          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],
          error: [
            {value: undefined, label: ''},
            {value: TextInput.ErrorType.Caution, label: 'Caution'},
            {value: TextInput.ErrorType.Error, label: 'Error'},
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
        <TextInput
          {...props}
          style={{minWidth: 60, width: 100}}
          onChange={() => {}} // eslint-disable-line no-empty-function
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const TextInputThemedStates = () => <TextInputStates />;
TextInputThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};

export const InputGroupStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'Start',
          props: {
            start: [
              <InputGroup.InnerStart>
                <SystemIcon icon={searchIcon} size="small" />
              </InputGroup.InnerStart>,
            ],
          },
        },
        {
          label: 'End',
          props: {
            end: [
              <InputGroup.InnerEnd>
                <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
              </InputGroup.InnerEnd>,
            ],
          },
        },
        {
          label: 'Both',
          props: {
            start: [
              <InputGroup.InnerStart>
                <SystemIcon icon={searchIcon} size="small" />
              </InputGroup.InnerStart>,
            ],
            end: [
              <InputGroup.InnerEnd>
                <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
              </InputGroup.InnerEnd>,
            ],
          },
        },
        {
          label: 'Multiple',
          props: {
            start: [
              <InputGroup.InnerStart>
                <span>1</span>
              </InputGroup.InnerStart>,
              <InputGroup.InnerStart>
                <span>2</span>
              </InputGroup.InnerStart>,
              <InputGroup.InnerStart>
                <span>3</span>
              </InputGroup.InnerStart>,
            ],
            end: [
              <InputGroup.InnerEnd>
                <span>4</span>
              </InputGroup.InnerEnd>,
              <InputGroup.InnerEnd>
                <span>5</span>
              </InputGroup.InnerEnd>,
              <InputGroup.InnerEnd>
                <span>6</span>
              </InputGroup.InnerEnd>,
            ],
          },
        },
        {
          label: 'ClearButton w/ value',
          props: {
            placeholder: 'Placeholder',
            value: 'Some Value',
            start: [],
            end: [
              <InputGroup.InnerEnd>
                <InputGroup.ClearButton />
              </InputGroup.InnerEnd>,
            ],
          },
        },
        {
          label: 'ClearButton w/o value',
          props: {
            placeholder: '',
            value: '',
            start: [],
            end: [
              <InputGroup.InnerEnd>
                <InputGroup.ClearButton />
              </InputGroup.InnerEnd>,
            ],
          },
        },
        {
          label: 'Variable Width',
          props: {
            end: [
              <InputGroup.InnerEnd width="10px" backgroundColor="blueberry200">
                <span>1</span>
              </InputGroup.InnerEnd>,
              <InputGroup.InnerEnd width="20px" backgroundColor="cantaloupe200">
                <span>2</span>
              </InputGroup.InnerEnd>,
              <InputGroup.InnerEnd width="30px" backgroundColor="greenApple200">
                <span>3</span>
              </InputGroup.InnerEnd>,
            ],
          },
        },
      ]}
      columnProps={[
        {label: 'LTR', props: {dir: 'ltr'}},
        {label: 'RTL', props: {dir: 'rtl'}},
      ]}
    >
      {({value, placeholder, ...props}) => (
        <CanvasProvider theme={{canvas: {direction: props.dir}}}>
          <InputGroup width={300}>
            {props.start}
            <InputGroup.Input
              placeholder={placeholder}
              value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'}
            />
            {props.end}
          </InputGroup>
        </CanvasProvider>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
