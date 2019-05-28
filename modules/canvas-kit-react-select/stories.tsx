/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, controlComponent} from '../../utils/storybook';

import Select, {SelectOption} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Select', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('All', () =>
    controlComponent(
      <Select name="contact">
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
        <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
        <SelectOption value="mail" label="Mail" />
      </Select>
    )
  );
