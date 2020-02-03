/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {ColorPreview} from '../../../color-picker/react';
import FormField from '../index';
import README from '../../../color-picker/react/README.md';

storiesOf('Components|Inputs/Color Picker/Color Preview/React/Top Label', module)
  .addParameters({component: ColorPreview})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));

storiesOf('Components|Inputs/Color Picker/Color Preview/React/Left Label', module)
  .addParameters({component: ColorPreview})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));
