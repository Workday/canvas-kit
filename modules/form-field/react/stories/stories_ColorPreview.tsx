/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../../utils/storybook';

import {ColorPreview} from '../../../color-picker/react/index';
import FormField from '../index';
import README from '../../../color-picker/react/README.md';

storiesOf('Form Field/Color Picker/Color Preview/Top Label', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));

storiesOf('Form Field/Color Picker/Color Preview/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));
