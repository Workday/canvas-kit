import {Meta} from '@storybook/react';

import {TextInputWithReactHookForm as TextInputWithReactHookFormExample} from './examples/TextInputWithReactHookForm';

export default {
  title: 'Examples/Forms',
  parameters: {},
} as Meta;

export const TextInputWithReactHookForm = {
  render: TextInputWithReactHookFormExample,
};
