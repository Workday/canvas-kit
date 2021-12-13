import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {IconButton} from '@workday/canvas-kit-react/button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

import DeprecatedPageHeader from '../index';

storiesOf('Components/Navigation/Page Header/React', module)
  .addParameters({component: DeprecatedPageHeader})
  .addParameters({ReadmePath: 'react/page-header'})
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
