/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {TextArea} from '../../../../../text-area/react';
import {TextAreaStates} from '../stories_TextArea';

export default {
  title: 'Testing|React/Inputs/TextArea',
  component: TextArea,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const TextAreaThemedStates = () => TextAreaStates;
