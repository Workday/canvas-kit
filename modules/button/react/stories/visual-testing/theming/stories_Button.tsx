/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {Button} from '../../../';
import {ButtonStates} from '../stories_Button';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Button',
  component: Button,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const ButtonThemedStates = ButtonStates;
