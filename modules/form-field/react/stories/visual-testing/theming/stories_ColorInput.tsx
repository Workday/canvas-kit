/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {ColorInput} from '../../../../../color-picker/react';
import {States} from '../stories_ColorInput';

export default {
  title: 'Components|Inputs/Color Picker/Color Input/React/Visual Testing',
  component: ColorInput,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
