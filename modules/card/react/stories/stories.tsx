/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {spacing} from '../../../core/react/index';
import Card from '../index';
import README from '../README.md';

export default {
  title: 'Card',
  component: Card,
};

export const defaultStory = () => (
  <div className="story">
    <Card heading="Title">Card contents</Card>
  </div>
);

export const withNoPadding = () => (
  <div className="story">
    <Card heading="Title" padding={spacing.zero}>
      No padding
    </Card>
  </div>
);

// storiesOf('Card', module)
//   .addDecorator(withReadme(README))
//   .add('Default', () => (
//     <div className="story">
//       <Card heading="Title">Card contents</Card>
//     </div>
//   ))
//   .add('With No Padding', () => (
//     <div className="story">
//       <Card heading="Title" padding={spacing.zero}>
//         No padding
//       </Card>
//     </div>
//   ));
