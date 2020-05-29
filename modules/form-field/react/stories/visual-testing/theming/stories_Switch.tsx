/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Switch} from '../../../../../switch/react';
import {States} from '../stories_Switch';

export default {
  title: 'Components|Inputs/Switch/React/Visual Testing',
  component: Switch,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
