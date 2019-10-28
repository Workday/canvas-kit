/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {spacing} from '../../../core/react/index';
import README from '../README.md';
import Card from '../index';

storiesOf('Card', module)
  .addParameters({component: Card})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Card heading="Title">Card contents</Card>
    </div>
  ))
  .add('With No Padding', () => (
    <div className="story">
      <Card heading="Title" padding={spacing.zero}>
        No padding
      </Card>
    </div>
  ));
