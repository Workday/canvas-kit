/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {ToolbarDropdownButton} from '../../../';
import {ToolbarDropdownButtonStates} from '../stories_ToolbarDropdownButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Toolbar Dropdown Button',
  component: ToolbarDropdownButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const ToolbarDropdownButtonThemedStates = ToolbarDropdownButtonStates;
