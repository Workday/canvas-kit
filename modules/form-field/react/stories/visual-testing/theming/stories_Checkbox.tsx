/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Checkbox} from '../../../../../checkbox/react';
import {CheckboxStates} from '../stories_Checkbox';

export default {
  title: 'Testing|React/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const CheckboxThemedStates = () => CheckboxStates;
