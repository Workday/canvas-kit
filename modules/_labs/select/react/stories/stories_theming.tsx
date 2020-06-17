/// <reference path="../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../utils/storybook';
import Select from '../lib/Select';
import {SelectStates, SelectStatesMenuOn, SelectStatesOption} from './stories_visualTesting';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Select',
  component: Select,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const SelectThemedStates = SelectStates;
export const SelectThemedStatesMenuOn = SelectStatesMenuOn;
export const SelectThemedStatesOption = SelectStatesOption;
