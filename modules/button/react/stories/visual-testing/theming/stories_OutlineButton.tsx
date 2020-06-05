/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {OutlineButton} from '../../../';
import {OutlineButtonStates} from '../stories_OutlineButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Outline Button',
  component: OutlineButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const OutlineButtonThemedStates = OutlineButtonStates;
