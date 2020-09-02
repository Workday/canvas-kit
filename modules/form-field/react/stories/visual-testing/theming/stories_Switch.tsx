/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {Switch} from '../../../../../switch/react';
import {SwitchStates} from '../stories_Switch';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Switch',
  component: Switch,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const SwitchThemedStates = SwitchStates;
