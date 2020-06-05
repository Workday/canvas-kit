/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {TextArea} from '../../../../../text-area/react';
import {TextAreaStates} from '../stories_TextArea';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/TextArea',
  component: TextArea,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const TextAreaThemedStates = TextAreaStates;
