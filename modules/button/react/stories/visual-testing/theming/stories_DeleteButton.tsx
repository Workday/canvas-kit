/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {DeleteButton} from '../../../';
import {DeleteButtonStates} from '../stories_DeleteButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Delete Button',
  component: DeleteButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const DeleteButtonThemedStates = DeleteButtonStates;
