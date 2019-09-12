/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import MyComponent from '../index';
import README from '../README.md';

storiesOf('Canvas Kit/Input', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <MyComponent />
    </div>
  ));
