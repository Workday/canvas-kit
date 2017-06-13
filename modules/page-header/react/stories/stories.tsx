/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

import {SystemIcon} from '../../../icon/react/index';
import PageHeader from '../index';
import README from '../README.md';

storiesOf('Page Header', module)
  .addDecorator(withReadme(README))
  .add('Product Page Header', () => (
    <div className="story">
      <PageHeader title="Product Context">
        <a href="#">
          <SystemIcon icon={exportIcon} />
        </a>
        <a href="#">
          <SystemIcon icon={fullscreenIcon} />
        </a>
      </PageHeader>
    </div>
  ))
  .add('Marketing Page Header', () => (
    <div className="story">
      <PageHeader title="Marketing Context" marketing={true}>
        <a href="#">
          <SystemIcon icon={exportIcon} />
        </a>
        <a href="#">
          <SystemIcon icon={fullscreenIcon} />
        </a>
      </PageHeader>
    </div>
  ));
