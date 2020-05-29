/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Checkbox} from '../../../../../checkbox/react';
import {States} from '../stories_Checkbox';

export default {
  title: 'Components|Inputs/Checkbox/React/Visual Testing',
  component: Checkbox,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
