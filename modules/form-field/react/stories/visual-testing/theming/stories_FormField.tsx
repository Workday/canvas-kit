/// <reference path="../../../../../../typings.d.ts" />
import {customColorTheme, withSnapshotsEnabled} from '../../../../../../utils/storybook';
import FormField from '../../../lib/FormField';
import {FormFieldStates} from '../stories_FormField';

export default withSnapshotsEnabled({
  title: 'Testing|React/Inputs/Form Field',
  component: FormField,
  parameters: {
    canvasProviderDecorator: {
      theme: customColorTheme,
    },
  },
});
export const FormFieldThemedStates = FormFieldStates;
