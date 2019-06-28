/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {IconButton} from '@workday/canvas-kit-react-button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

import PageHeader from '../index';
import README from '../README.md';

storiesOf('Page Header', module)
  .addDecorator(withReadme(README))
  .add('Product Page Header', () => (
    <div className="story">
      <PageHeader title="Product Context">
        <IconButton icon={exportIcon} />
        <IconButton icon={fullscreenIcon} />
      </PageHeader>
    </div>
  ))
  .add('Marketing Page Header', () => (
    <div className="story">
      <PageHeader title="Marketing Context" marketing={true}>
        <IconButton icon={exportIcon} />
        <IconButton icon={fullscreenIcon} />
      </PageHeader>
    </div>
  ));
