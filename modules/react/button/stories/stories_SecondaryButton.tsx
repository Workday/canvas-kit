/// <reference path="../../../../typings.d.ts" />

import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React/Standard', module)
  .addParameters({component: SecondaryButton})
  .addDecorator(withReadme(README))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <SecondaryButton size="large">Secondary</SecondaryButton>
      <SecondaryButton size="large" icon={activityStreamIcon}>
        Secondary
      </SecondaryButton>
      <SecondaryButton size="large" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </SecondaryButton>
      <SecondaryButton disabled={true} size="large" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </SecondaryButton>

      <h3>Medium Secondary</h3>
      <SecondaryButton size="medium">Secondary</SecondaryButton>
      <SecondaryButton size="medium" icon={editIcon}>
        Secondary
      </SecondaryButton>
      <SecondaryButton size="medium" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </SecondaryButton>
      <SecondaryButton disabled={true} size="medium" icon={playCircleIcon} dataLabel="1:00">
        Secondary
      </SecondaryButton>

      <h3>Small Secondary</h3>
      <SecondaryButton size="small">Secondary</SecondaryButton>
      <SecondaryButton disabled={true} size="small">
        Secondary
      </SecondaryButton>

      <h3>Growing Secondary</h3>
      <SecondaryButton size="large" grow={true}>
        Growing Secondary
      </SecondaryButton>
    </div>
  ));
