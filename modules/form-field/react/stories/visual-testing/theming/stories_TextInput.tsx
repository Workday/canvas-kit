/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, enableSnapshots} from '../../../../../../utils/storybook';
import {TextInput} from '@workday/canvas-kit-react-text-input';
import {States} from '../stories_TextInput';

export default {
  title: 'Components|Inputs/TextInput/React/Visual Testing',
  component: TextInput,
  parameters: {
    ...enableSnapshots(),
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
};
export const Theming = () => States;
