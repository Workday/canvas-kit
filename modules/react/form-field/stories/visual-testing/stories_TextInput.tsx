import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export default withSnapshotsEnabled({
  title: 'Testing/Inputs/Text Input',
  component: TextInput,
});

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
            {value: TextInput.ErrorType.Alert, label: 'Alert'},
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
        {label: 'Start', props: {start: <SystemIcon icon={searchIcon} size="small" />}},
        {
          label: 'End',
          props: {
            end: (
              <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
            ),
          },
        },
        {
          label: 'Both',
          props: {
            start: <SystemIcon icon={searchIcon} size="small" />,
            end: (
              <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
            ),
          },
        },
      ]}
      columnProps={[
        {label: 'LTR', props: {dir: 'ltr'}},
        {label: 'RTL', props: {dir: 'rtl'}},
      ]}
    >
      {props => (
        <CanvasProvider theme={{canvas: {direction: props.dir}}}>
          <InputGroup width={280}>
            {props.start && <InputGroup.Start>{props.start}</InputGroup.Start>}
            <InputGroup.Input value="Very Long Text. Very Long Text. Very Long Text." />
            {props.end && <InputGroup.End>{props.end}</InputGroup.End>}
          </InputGroup>
        </CanvasProvider>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
