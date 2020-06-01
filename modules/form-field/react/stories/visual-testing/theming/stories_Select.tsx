/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {Select} from '../../../../../select/react';
import {SelectStates} from '../stories_Select';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Select',
  component: Select,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const SelectThemedStates = SelectStates;
