import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';

import {customColorTheme} from '../../../../utils/storybook';

export default {
  title: 'Testing/Preview/Switch',
  component: Switch,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SwitchStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          checked: [
            {value: true, label: 'Checked'},
            {value: false, label: 'Unchecked'},
          ],
          error: [
            {value: undefined, label: ''},
            {value: Switch.ErrorType.Caution, label: 'Caution'},
            {value: Switch.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          return !(props.indeterminate && !props.checked);
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
          return !(props.disabled && !['', 'hover'].includes(props.className));
        }
      )}
    >
      {props => (
        <Switch
          {...props}
          onChange={() => {}} // eslint-disable-line no-empty-function
        />
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SwitchThemedStates = () => <SwitchStates />;
SwitchThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};

export const SwitchStatesRTL = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps(
        {
          checked: [
            {value: true, label: 'Checked'},
            {value: false, label: 'Unchecked'},
          ],
          error: [
            {value: undefined, label: ''},
            {value: Switch.ErrorType.Caution, label: 'Caution'},
            {value: Switch.ErrorType.Error, label: 'Error'},
          ],
        },
        props => {
          return !(props.indeterminate && !props.checked);
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
          return !(props.disabled && !['', 'hover'].includes(props.className));
        }
      )}
    >
      {props => (
        <CanvasProvider dir="rtl">
          <Switch
            {...props}
            onChange={() => {}} // eslint-disable-line no-empty-function
          />
        </CanvasProvider>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SwitchThemedStatesRTL = () => <SwitchStatesRTL />;
SwitchThemedStatesRTL.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
