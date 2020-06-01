/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {DropdownButton} from '../../../';
import {DropdownButtonStates} from '../stories_DropdownButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Dropdown Button',
  component: DropdownButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const DropdownButtonThemedStates = DropdownButtonStates;
