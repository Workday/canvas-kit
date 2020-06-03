/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {ToolbarIconButton} from '../../../';
import {ToolbarIconButtonStates} from '../stories_ToolbarIconButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button',
  component: ToolbarIconButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const ToolbarIconButtonThemedStates = ToolbarIconButtonStates;
