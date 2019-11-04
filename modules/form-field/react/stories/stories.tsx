/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Label, Hint} from '../index';
import README from '../README.md';

storiesOf('Form Field/Label', module)
  .addParameters({component: Label})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Label>Label</Label>
    </div>
  ))
  .add('Required', () => (
    <div className="story">
      <Label required={true}>Label</Label>
    </div>
  ));
storiesOf('Form Field', module)
  .addParameters({component: Hint})
  .addDecorator(withReadme(README))
  .add('Hint', () => (
    <div className="story">
      <Hint>Hint</Hint>
      <Hint error={Hint.ErrorType.Error}>Hint</Hint>
      <Hint error={Hint.ErrorType.Alert}>Hint</Hint>
    </div>
  ));
