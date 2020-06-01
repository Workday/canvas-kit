/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {HighlightButton} from '../../../';
import {HighlightButtonStates} from '../stories_HighlightButton';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Highlight Button',
  component: HighlightButton,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const HighlightButtonThemedStates = HighlightButtonStates;
