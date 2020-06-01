/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {TextInput} from '../../../../../text-input/react';
import {TextInputStates} from '../stories_TextInput';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/TextInput',
  component: TextInput,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const TextInputThemedStates = TextInputStates;
