/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '../../utils/storybook';

import Radio, {RadioGroup} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <ControlledComponentWrapper>
          <RadioGroup name="contact">
            <Radio id="1" value="email" label="E-mail" />
            <Radio id="2" value="phone" label="Phone" />
            <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
            <Radio id="4" value="mail" label="Mail" />
          </RadioGroup>
        </ControlledComponentWrapper>
      </div>
    </div>
  ));
