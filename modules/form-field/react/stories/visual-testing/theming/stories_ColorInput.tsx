/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {ColorInput} from '../../../../../color-picker/react';
import {ColorInputStates} from '../stories_ColorInput';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Color Picker/Color Input',
  component: ColorInput,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const ColorInputThemedStates = ColorInputStates;
