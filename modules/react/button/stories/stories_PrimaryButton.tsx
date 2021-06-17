/// <reference path="../../../../typings.d.ts" />

import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React', module)
  .addParameters({component: PrimaryButton})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <PrimaryButton size="large">Primary</PrimaryButton>
      <PrimaryButton size="large" icon={activityStreamIcon}>
        Primary
      </PrimaryButton>
      <PrimaryButton size="large" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </PrimaryButton>
      <PrimaryButton disabled={true} size="large" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </PrimaryButton>

      <h3>Medium Primary</h3>
      <PrimaryButton size="medium">Primary</PrimaryButton>
      <PrimaryButton size="medium" icon={editIcon}>
        Primary
      </PrimaryButton>
      <PrimaryButton size="medium" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </PrimaryButton>
      <PrimaryButton disabled={true} size="medium" icon={playCircleIcon} dataLabel="1:00">
        Primary
      </PrimaryButton>

      <h3>Small Primary</h3>
      <PrimaryButton size="small">Primary</PrimaryButton>
      <PrimaryButton disabled={true} size="small">
        Primary
      </PrimaryButton>

      <h3>Growing Primary</h3>
      <PrimaryButton size="large" grow={true}>
        Primary
      </PrimaryButton>
    </div>
  ));
