/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, ControlledComponentWrapper} from '../../utils/storybook';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

const control = (child: React.ReactNode) => (
  <ControlledComponentWrapper controlledProp={ControlledComponentWrapper.ControlledProp.Checked}>
    {child}
  </ControlledComponentWrapper>
);

storiesOf('Canvas Kit/Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        {control(<Checkbox id="1" label="Checkbox option" />)}
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        {control(<Checkbox disabled={true} id="1" label="Checkbox option" />)}
      </div>
    </div>
  ));
