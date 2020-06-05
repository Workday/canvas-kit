/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import {Radio} from '../../../../../radio/react';
import {RadioStates} from '../stories_Radio';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Radio',
  component: Radio,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const RadioThemedStates = RadioStates;
