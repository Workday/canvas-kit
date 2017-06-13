/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {LoadingDots, LoadingSpinner} from '../index';
import README from '../README.md';

storiesOf('Loading Animation', module)
  .addDecorator(withReadme(README))
  .add('Loading Dots', () => (
    <div className="story">
      <LoadingDots />
    </div>
  ))
  .add('Loading Spinner', () => (
    <div className="story">
      <LoadingSpinner />
    </div>
  ));
