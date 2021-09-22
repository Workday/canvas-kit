/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {IconButton} from '@workday/canvas-kit-react/button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

import DeprecatedPageHeader from '../index';
import README from '../README.md';

storiesOf('Components/Navigation/Page Header/React', module)
  .addParameters({component: DeprecatedPageHeader})
  .addDecorator(withReadme(README))
  .add('Product Page Header', () => (
    <div className="story">
      <DeprecatedPageHeader title="Product Context">
        <IconButton icon={exportIcon} aria-label="Export" />
        <IconButton icon={fullscreenIcon} aria-label="Fullscreen" />
      </DeprecatedPageHeader>
    </div>
  ))
  .add('With Cap Width', () => (
    <div className="story">
      <DeprecatedPageHeader title="With Cap Width" capWidth={true}>
        <IconButton icon={exportIcon} aria-label="Export" />
        <IconButton icon={fullscreenIcon} aria-label="Fullscreen" />
      </DeprecatedPageHeader>
    </div>
  ));
