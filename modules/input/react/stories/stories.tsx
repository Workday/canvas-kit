/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Input from '../index';
import README from '../README.md';
import {controlComponent} from '../../../../utils/storybook';

storiesOf('Input', module)
  .addDecorator(withReadme(README))
  .add('Default', () => <div className="story">{controlComponent(<Input />)}</div>)
  .add('With placeholder', () => (
    <div className="story">{controlComponent(<Input placeholder="Placeholder" />)}</div>
  ))
  .add('Disabled', () => <div className="story">{controlComponent(<Input disabled={true} />)}</div>)
  .add('Disabled with placeholder', () => (
    <div className="story">
      {controlComponent(<Input placeholder="Placeholder" disabled={true} />)}
    </div>
  ))
  .add('Grow', () => (
    <div className="story">{controlComponent(<Input placeholder="Placeholder" grow={true} />)}</div>
  ));
