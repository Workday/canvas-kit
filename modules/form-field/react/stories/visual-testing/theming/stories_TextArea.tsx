/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {TextArea} from '../../../../../text-area/react';
import {States} from '../stories_TextArea';

export default {
  title: 'Components|Inputs/TextArea/React/Visual Testing',
  component: TextArea,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
