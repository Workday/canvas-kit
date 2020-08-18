/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors} from '@workday/canvas-kit-react-core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {action} from '@storybook/addon-actions';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import ColorPicker from '../lib/ColorPicker';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Color Picker',
  component: ColorPicker,
});

export const ColorPickerStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'with Hex Input', props: {showCustomHexInput: true}},
        {
          label: 'With Reset',
          props: {
            resetColor: colors.blueberry400,
            resetLabel: 'Reset',
            onColorReset: action('Reset Clicked'),
          },
        },
        {
          label: 'With Reset and Hex Input',
          props: {
            showCustomHexInput: true,
            resetColor: colors.blueberry400,
            resetLabel: 'Reset',
            onColorReset: action('Reset Clicked'),
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <ColorPicker {...props} transformOrigin={null} onColorChange={action('Color Changed')} />
      )}
    </ComponentStatesTable>
  </StaticStates>
);
