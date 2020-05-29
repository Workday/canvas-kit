/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Radio} from '../../../../../radio/react';
import {RadioStates} from '../stories_Radio';

export default {
  title: 'Testing|React/Inputs/Radio',
  component: Radio,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const RadioThemedStates = () => RadioStates;
