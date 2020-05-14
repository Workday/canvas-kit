/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Breadcrumbs from '../index';
import README from '../README.md';

const exampleBreadcrumbs = [
  {
    name: 'Root',
    onAction: () => {
      window.alert(`Root`);
    },
  },
  {
    name: 'Folder1',
    onAction: () => {
      window.alert(`Folder1`);
    },
  },
  {
    name: 'Folder2',
    onAction: () => {
      window.alert(`Folder2`);
    },
  },
  {
    name: 'Folder3',
    onAction: () => {
      window.alert(`Folder3`);
    },
  },
  {
    name: 'Folder4',
    onAction: () => {
      window.alert(`Folder4`);
    },
  },
  {
    name: 'Folder5',
    onAction: () => {
      window.alert(`Folder5`);
    },
  },
];

storiesOf('Labs/Breadcrumbs', module)
  .addParameters({component: Breadcrumbs})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={600} />
    </div>
  ))
  .add('Truncated', () => (
    <div className="story">
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={300} />
    </div>
  ))
  .add('Extra Truncated', () => (
    <div className="story">
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={80} />
    </div>
  ));
