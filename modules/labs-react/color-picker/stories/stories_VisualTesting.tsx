import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Color Picker',
  component: ColorPicker,
});

export const ColorPickerStates = () => {
  const model = useColorPickerModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Color',
            props: {color: 'red'},
          },
        ]}
      >
        {props => {
          const state = {color: props.color, customColor: 'orange'};

          return (
            <ColorPicker model={{...model, state}}>
              {/* <ColorPicker.Target>Toggle</ColorPicker.Target> */}
              <ColorPicker.Swatch color={state.color} />
            </ColorPicker>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
