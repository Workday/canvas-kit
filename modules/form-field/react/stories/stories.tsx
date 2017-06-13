/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Label, Hint} from '../index';
import README from '../README.md';

storiesOf('Form Field', module)
  .addDecorator(withReadme(README))
  .add('Label', () => (
    <div className="story">
      <Label>Label</Label>
    </div>
  ))
  .add('Hint', () => (
    <div className="story">
      <Hint>Hint</Hint>
      <Hint error={Hint.ErrorType.Error}>Hint</Hint>
      <Hint error={Hint.ErrorType.Alert}>Hint</Hint>
    </div>
  ));
