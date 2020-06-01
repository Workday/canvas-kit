/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {TextInput} from '../../../../../text-input/react';
import {TextInputStates} from '../stories_TextInput';

export default {
  title: 'Testing|React/Inputs/TextInput',
  component: TextInput,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const TextInputThemedStates = () => TextInputStates;
