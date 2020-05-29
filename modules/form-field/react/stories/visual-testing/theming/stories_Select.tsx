/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {Select} from '../../../../../select/react';
import {States} from '../stories_Select';

export default {
  title: 'Components|Inputs/Select/React/Visual Testing',
  component: Select,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
