/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Radio} from '../../../../../radio/react';
import {States} from '../stories_Radio';

export default {
  title: 'Components|Inputs/Radio/React/Visual Testing',
  component: Radio,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
