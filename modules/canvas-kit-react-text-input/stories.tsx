/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator, controlComponent} from '../../utils/storybook';

import {TextInput} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Text Input', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Input'))
  .addDecorator(withReadme(README))
  .add('Plain', () => controlComponent(<TextInput id="input-plain" />))
  .add('With placeholder', () =>
    controlComponent(<TextInput id="input-placeholder" placeholder="Placeholder" />)
  )
  .add('Disabled', () => controlComponent(<TextInput id="input-disabled" disabled={true} />))
  .add('Disabled with placeholder', () =>
    controlComponent(
      <TextInput id="input-disabled-placeholder" disabled={true} placeholder="Placeholder" />
    )
  )
  .add('Alert', () =>
    controlComponent(<TextInput id="input-alert" error={TextInput.ErrorType.Alert} value="Alert" />)
  )
  .add('Error', () =>
    controlComponent(<TextInput id="input-error" error={TextInput.ErrorType.Error} value="Error" />)
  )
  .add('Grow', () =>
    controlComponent(<TextInput id="input-grow" placeholder="Placeholder" grow={true} />)
  )
  .add('Grow - Error', () =>
    controlComponent(
      <TextInput
        id="input-grow-error"
        placeholder="Placeholder"
        grow={true}
        error={TextInput.ErrorType.Error}
      />
    )
  );
