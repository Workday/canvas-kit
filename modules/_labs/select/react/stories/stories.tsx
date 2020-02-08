/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {controlComponent} from '../../../../../utils/storybook';

import FormField from '../../../../form-field/react/index';
import {Select, SelectOption} from '../index';
import README from '../README.md';

storiesOf('Labs|Select/React/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <div className="story">
      <FormField label="Contact" inputId="select-contact">
        {controlComponent(
          <Select name="contact">
            <SelectOption value="email" label="E-mail" />
            <SelectOption value="phone" label="Phone" />
            <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
            <SelectOption value="mail" label="Mail" />
          </Select>
        )}
      </FormField>
      <FormField label="Location" inputId="select-location">
        {controlComponent(
          <Select name="location">
            <SelectOption value="pleasanton" label="Pleasanton" />
            <SelectOption value="san-francisco" label="San Francisco" />
            <SelectOption value="san-mateo" label="San Mateo" />
          </Select>
        )}
      </FormField>
    </div>
  ));
