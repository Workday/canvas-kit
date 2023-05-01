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
        {label: 'Start', props: {start: [<SystemIcon icon={searchIcon} size="small" />]}},
        {
          label: 'End',
          props: {
            end: [
              <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />,
            ],
          },
        },
        {
          label: 'Both',
          props: {
            start: [<SystemIcon icon={searchIcon} size="small" />],
            end: [
              <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />,
            ],
          },
        },
        {
          label: 'Multiple',
          props: {
            start: [<span>1</span>, <span>2</span>, <span>3</span>],
            end: [<span>4</span>, <span>5</span>, <span>6</span>],
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
          <InputGroup width={300}>
            {props.start &&
              props.start.map((start, index) => (
                <InputGroup.Start key={index}>{start}</InputGroup.Start>
              ))}
            <InputGroup.Input value="Very Long Text. Very Long Text. Very Long Text." />
            {props.end &&
              props.end.map((end, index) => <InputGroup.End key={index}>{end}</InputGroup.End>)}
          </InputGroup>
        </CanvasProvider>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
