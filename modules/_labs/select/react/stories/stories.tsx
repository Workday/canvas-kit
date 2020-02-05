/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import FormField from '../../../../form-field/react/index';
import {Select, SelectOption} from '../index';
import README from '../README.md';

storiesOf('Labs|Select/React/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <div className="story">
      <FormField label="Label" inputId="select-plain">
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      </FormField>
      <FormField label="Label (copy)" inputId="select-plain-copy">
        <Select name="contact">
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
          <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
          <SelectOption value="mail" label="Mail" />
        </Select>
      </FormField>
    </div>
  ));
