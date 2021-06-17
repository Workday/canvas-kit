/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';
import ColorPicker from '../lib/ColorPicker';

export default {
  title: 'Testing/React/Preview/Color Picker',
  component: ColorPicker,
};

export const InputInteraction = () => {
  const textAreaRef = React.useRef(null);
  const [color, setColor] = React.useState('');
  const handleColorChange = (c: string) => {
    setColor(c);
    textAreaRef.current?.focus();
  };
  return (
    <div className="App">
      <ColorPicker showCustomHexInput onColorChange={handleColorChange} />
      <label htmlFor="test">Text Area</label>
      <textarea id="test" style={{color: color}} ref={textAreaRef} />
    </div>
  );
};

// eslint-disable-next-line no-empty-function
const noop = () => {};

export const ColorPickerStates = withSnapshotsEnabled(() => (
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
            onColorReset: noop,
          },
        },
        {
          label: 'With Reset and Hex Input',
          props: {
            showCustomHexInput: true,
            resetColor: colors.blueberry400,
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
));

ColorPickerStates.parameters = {
  chromatic: {
    pauseAnimationAtEnd: true,
  },
};
