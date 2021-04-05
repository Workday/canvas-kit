/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from '@workday/canvas-kit-react/button';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import README from '../README.md';

storiesOf('Components/Buttons/Action Bar/React', module)
  .addDecorator(withReadme(README))
  .addParameters({component: ActionBar})
  .add('Default', () => (
    <div className="story">
      <ActionBar>
        <Button variant="primary">Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Three Buttons', () => (
    <div className="story">
      <ActionBar>
        <Button variant="primary">Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <ActionBar fixed={true}>
        <Button variant="primary">Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Three Buttons Fixed', () => (
    <div className="story">
      <ActionBar fixed={true}>
        <Button variant="primary">Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ));
