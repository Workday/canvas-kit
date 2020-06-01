/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Select} from '../../../../../select/react';
import {SelectStates} from '../stories_Select';

export default {
  title: 'Testing|React/Inputs/Select',
  component: Select,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const SelectThemedStates = SelectStates;
