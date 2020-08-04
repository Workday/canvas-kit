/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {TextButton} from '../../../';
import {TextButtonStates} from '../stories_TextButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Text Button',
  component: TextButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const TextButtonThemedStates = TextButtonStates;
