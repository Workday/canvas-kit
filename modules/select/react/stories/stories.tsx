/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, controlComponent} from '../../../../utils/storybook';

import Select, {SelectOption} from '..'; // tslint:disable-line:import-name
import README from '../README.md';
import {ErrorType} from '@workday/canvas-kit-react-common';

storiesOf('Select', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () =>
    controlComponent(
      <Select name="contact">
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
        <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
        <SelectOption value="mail" label="Mail" />
      </Select>
    )
  )
  .add('Disabled', () =>
    controlComponent(
      <Select name="contact" disabled={true}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
        <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
        <SelectOption value="mail" label="Mail" />
      </Select>
    )
  )
  .add('Error - Alert', () =>
    controlComponent(
      <Select name="contact" error={ErrorType.Alert}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
        <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
        <SelectOption value="mail" label="Mail" />
      </Select>
    )
  )
  .add('Error - Error', () =>
    controlComponent(
      <Select name="contact" error={ErrorType.Error}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
        <SelectOption value="fax" label="Fax (disabled)" disabled={true} />
        <SelectOption value="mail" label="Mail" />
      </Select>
    )
  );
