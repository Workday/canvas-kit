/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Button, ButtonTypes} from '@workday/canvas-kit-react-button';

import {FloatingActionToolbar} from './index';
import README from './README.md';

storiesOf('Canvas Kit/Floating Action Toolbar', module)
  .addDecorator(withReadme(README))
  .add('Two Button', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar</h1>
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('Three Button', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar</h1>
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('Two Button - Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar - Fixed</h1>
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('Three Button - Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar - Fixed</h1>
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ));
