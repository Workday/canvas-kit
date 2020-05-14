/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import {withKnobs, number, select} from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import {CountBadge} from '../index';
import README from '../README.md';

export default {
  title: 'Components|Indicators/Badge/CountBadge/React',
  decorators: [withKnobs, withReadme(README)],
};

export const Default = () => (
  <div className="story">
    <CountBadge
      count={number('Count', 1)}
      variant={select('Variant', ['default', 'inverse'], 'default')}
    />
  </div>
);

export const Inverse = () => (
  <div className="story">
    <CountBadge
      count={number('Count', 1)}
      variant={select('Variant', ['default', 'inverse'], 'inverse')}
    />
  </div>
);
