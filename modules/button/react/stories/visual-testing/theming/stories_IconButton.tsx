/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {IconButton} from '../../../';
import {IconButtonStates} from '../stories_IconButton';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Icon Button/Theming',
  component: IconButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const IconButtonThemedStates = IconButtonStates;
