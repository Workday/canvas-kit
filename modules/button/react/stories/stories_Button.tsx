/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {Button} from '../index';
import README from '../README.md';

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Components/Buttons/Button/React/Standard', module)
  .addParameters({component: Button})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button size="large" variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button size="large" variant={Button.Variant.Primary} icon={activityStreamIcon}>
        Primary
      </Button>
      <Button
        size="large"
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        size="large"
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>

      <h3>Medium Primary</h3>
      <Button size="medium" variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button size="medium" variant={Button.Variant.Primary} icon={editIcon}>
        Primary
      </Button>
      <Button
        size="medium"
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        size="medium"
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>

      <h3>Small Primary</h3>
      <Button size="small" variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button disabled={true} size="small" variant={Button.Variant.Primary}>
        Primary
      </Button>

      <h3>Growing Primary</h3>
      <div css={buttonContainer}>
        <Button size="large" variant={Button.Variant.Primary} grow={true}>
          Primary
        </Button>
      </div>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button size="large" variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button size="large" variant={Button.Variant.Secondary} icon={activityStreamIcon}>
        Secondary
      </Button>
      <Button
        size="large"
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        size="large"
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>

      <h3>Medium Secondary</h3>
      <Button size="medium" variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button size="medium" variant={Button.Variant.Secondary} icon={editIcon}>
        Secondary
      </Button>
      <Button
        size="medium"
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        size="medium"
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>

      <h3>Small Secondary</h3>
      <Button size="small" variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button disabled={true} size="small" variant={Button.Variant.Secondary}>
        Secondary
      </Button>

      <h3>Growing Secondary</h3>
      <Button size="large" variant={Button.Variant.Secondary} grow={true}>
        Growing Secondary
      </Button>
    </div>
  ));
