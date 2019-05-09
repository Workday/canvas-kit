/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {LoadingAnimation, LoadingSpinner} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Loading Animation', module)
  .addDecorator(withReadme(README))
  .add('LoadingDots', () => (
    <div className="story">
      <h1 className="section-label">Loading Dots</h1>
      <LoadingAnimation />
    </div>
  ))
  .add('LoadingSpinner', () => (
    <div className="story">
      <h1 className="section-label">Loading Spinner</h1>
      <LoadingSpinner />
    </div>
  ));
