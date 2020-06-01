/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Switch} from '../../../../../switch/react';
import {SwitchStates} from '../stories_Switch';

export default {
  title: 'Testing|React/Inputs/Switch',
  component: Switch,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const SwitchThemedStates = SwitchStates;
