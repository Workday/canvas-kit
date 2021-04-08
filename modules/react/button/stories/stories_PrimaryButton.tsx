/// <reference path="../../../../typings.d.ts" />

import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {Button} from '@workday/canvas-kit-react/button';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React/Standard', module)
  .addParameters({component: Button})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button size="large" variant="primary">
        Primary
      </Button>
      <Button size="large" variant="primary" icon={activityStreamIcon}>
        Primary
      </Button>
      <Button size="large" variant="primary" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </Button>
      <Button disabled={true} size="large" variant="primary" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </Button>

      <h3>Medium Primary</h3>
      <Button size="medium" variant="primary">
        Primary
      </Button>
      <Button size="medium" variant="primary" icon={editIcon}>
        Primary
      </Button>
      <Button size="medium" variant="primary" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </Button>
      <Button
        disabled={true}
        size="medium"
        variant="primary"
        icon={playCircleIcon}
        dataLabel="1:00"
      >
        Primary
      </Button>

      <h3>Small Primary</h3>
      <Button size="small" variant="primary">
        Primary
      </Button>
      <Button disabled={true} size="small" variant="primary">
        Primary
      </Button>

      <h3>Growing Primary</h3>
      <Button size="large" variant="primary" grow={true}>
        Primary
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button size="large" variant="secondary">
        Secondary
      </Button>
      <Button size="large" variant="secondary" icon={activityStreamIcon}>
        Secondary
      </Button>
      <Button size="large" variant="secondary" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </Button>
      <Button
        disabled={true}
        size="large"
        variant="secondary"
        icon={playCircleIcon}
        dataLabel="1:00"
      >
        Secondary
      </Button>

      <h3>Medium Secondary</h3>
      <Button size="medium" variant="secondary">
        Secondary
      </Button>
      <Button size="medium" variant="secondary" icon={editIcon}>
        Secondary
      </Button>
      <Button size="medium" variant="secondary" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </Button>
      <Button
        disabled={true}
        size="medium"
        variant="secondary"
        icon={playCircleIcon}
        dataLabel="1:00"
      >
        Secondary
      </Button>

      <h3>Small Secondary</h3>
      <Button size="small" variant="secondary">
        Secondary
      </Button>
      <Button disabled={true} size="small" variant="secondary">
        Secondary
      </Button>

      <h3>Growing Secondary</h3>
      <Button size="large" variant="secondary" grow={true}>
        Growing Secondary
      </Button>
    </div>
  ));
