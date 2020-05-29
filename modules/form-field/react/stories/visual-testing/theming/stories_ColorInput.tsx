/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {ColorInput} from '../../../../../color-picker/react';
import {ColorInputStates} from '../stories_ColorInput';

export default {
  title: 'Testing|React/Inputs/Color Picker/Color Input',
  component: ColorInput,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const ColorInputThemedStates = () => ColorInputStates;
