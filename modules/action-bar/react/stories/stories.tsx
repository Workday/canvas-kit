/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {beta_Button as Button} from '../../../button/react/index';
import {ActionBar} from '../index';
import README from '../README.md';

storiesOf('Action Bar', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <ActionBar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Three Buttons', () => (
    <div className="story">
      <ActionBar>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <ActionBar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ))
  .add('With Three Buttons Fixed', () => (
    <div className="story">
      <ActionBar fixed={true}>
        <Button buttonType={Button.Types.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ActionBar>
    </div>
  ));
