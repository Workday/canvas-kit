/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {Checkbox} from '../../../../../checkbox/react';
import {CheckboxStates} from '../stories_Checkbox';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const CheckboxThemedStates = CheckboxStates;
