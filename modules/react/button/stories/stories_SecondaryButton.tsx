/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '@workday/canvas-kit-react/tokens';
import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  backgroundColor: colors.blueberry400,
  margin: '0 10px',
  padding: '12px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '12px',
  },
};

storiesOf('Components/Buttons/Button/React/Secondary', module)
  .addParameters({component: SecondaryButton})
  .addDecorator(withReadme(README))
  .add('Default', () => (
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
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Secondary Inverse</h3>

      <div css={blueBackground}>
        <SecondaryButton variant="inverse" size="large">
          Secondary
        </SecondaryButton>
        <SecondaryButton variant="inverse" size="large" icon={activityStreamIcon}>
          Secondary
        </SecondaryButton>
        <SecondaryButton variant="inverse" size="large" icon={playCircleIcon} dataLabel="1:00">
          Secondary
        </SecondaryButton>
        <SecondaryButton
          variant="inverse"
          disabled={true}
          size="large"
          icon={playCircleIcon}
          dataLabel="1:00"
        >
          Secondary
        </SecondaryButton>
      </div>

      <h3>Medium Secondary Inverse</h3>
      <div css={blueBackground}>
        <SecondaryButton variant="inverse" size="medium">
          Secondary
        </SecondaryButton>
        <SecondaryButton variant="inverse" size="medium" icon={editIcon}>
          Secondary
        </SecondaryButton>
        <SecondaryButton variant="inverse" size="medium" icon={playCircleIcon} dataLabel="1:00">
          Secondary
        </SecondaryButton>
        <SecondaryButton
          variant="inverse"
          disabled={true}
          size="medium"
          icon={playCircleIcon}
          dataLabel="1:00"
        >
          Secondary
        </SecondaryButton>
      </div>

      <h3>Small Secondary Inverse</h3>
      <div css={blueBackground}>
        <SecondaryButton variant="inverse" size="small">
          Secondary
        </SecondaryButton>
        <SecondaryButton variant="inverse" disabled={true} size="small">
          Secondary
        </SecondaryButton>
      </div>
    </div>
  ));
