import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

import {defaultColorSet} from '../../lib/defaultColorSet';
import {InputInteraction as InputInteractionExample} from '../examples/InputInteraction';

export default {
  title: 'Testing/Preview/Color Picker',
  component: ColorPicker,
};

export const InputInteraction = {
  render: InputInteractionExample,
};

// eslint-disable-next-line no-empty-function
const noop = () => {};

export const ColorPickerStates = {
  parameters: {
    chromatic: {
      disable: false,
      pauseAnimationAtEnd: true,
    },
  },
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Default', props: {}},
          {label: 'with Hex Input', props: {showCustomHexInput: true}},
          {
            label: 'With Reset',
            props: {
              resetColor: defaultColorSet.blueberry400,
              resetLabel: 'Reset',
              onColorReset: noop,
            },
          },
          {
            label: 'With Reset and Hex Input',
            props: {
              showCustomHexInput: true,
              resetColor: defaultColorSet.blueberry400,
              resetLabel: 'Reset',
              onColorReset: noop,
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => <ColorPicker {...props} onColorChange={noop} />}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
