/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {OutlineButton} from '../index';
import README from '../README.md';

const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '12px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '12px',
  },
};

storiesOf('Components|Buttons/Button/React/Outline', module)
  .addParameters({component: OutlineButton})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <OutlineButton size="large" variant={OutlineButton.Variant.Primary}>
        Outline Primary
      </OutlineButton>
      <OutlineButton size="large" variant={OutlineButton.Variant.Primary} icon={activityStreamIcon}>
        Outline Primary
      </OutlineButton>
      <OutlineButton
        size="large"
        dataLabel={'1:00'}
        variant={OutlineButton.Variant.Primary}
        icon={playCircleIcon}
      >
        Outline Primary
      </OutlineButton>
      <OutlineButton
        size="large"
        disabled={true}
        dataLabel={'1:00'}
        variant={OutlineButton.Variant.Primary}
        icon={playCircleIcon}
      >
        Outline Primary
      </OutlineButton>

      <h3>Medium Primary</h3>
      <OutlineButton size="medium" variant={OutlineButton.Variant.Primary}>
        Outline Primary
      </OutlineButton>
      <OutlineButton size="medium" variant={OutlineButton.Variant.Primary} icon={editIcon}>
        Outline Primary
      </OutlineButton>
      <OutlineButton
        size="medium"
        dataLabel={'1:00'}
        variant={OutlineButton.Variant.Primary}
        icon={playCircleIcon}
      >
        Outline Primary
      </OutlineButton>
      <OutlineButton
        size="medium"
        disabled={true}
        dataLabel={'1:00'}
        variant={OutlineButton.Variant.Primary}
        icon={playCircleIcon}
      >
        Outline Primary
      </OutlineButton>

      <h3>Small Primary</h3>
      <OutlineButton size="small" variant={OutlineButton.Variant.Primary}>
        Outline Primary
      </OutlineButton>
      <OutlineButton size="small" disabled={true} variant={OutlineButton.Variant.Primary}>
        Outline Primary
      </OutlineButton>

      <h3>Growing Primary</h3>
      <OutlineButton size="large" variant={OutlineButton.Variant.Primary} grow={true}>
        Growing Primary Outline
      </OutlineButton>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <OutlineButton size="large">Outline Secondary</OutlineButton>
      <OutlineButton size="large" icon={activityStreamIcon}>
        Outline Secondary
      </OutlineButton>
      <OutlineButton size="large" dataLabel={'1:00'} icon={playCircleIcon}>
        Outline Secondary
      </OutlineButton>
      <OutlineButton size="large" disabled={true} dataLabel={'1:00'} icon={playCircleIcon}>
        Outline Secondary
      </OutlineButton>

      <h3>Medium Secondary</h3>
      <OutlineButton size="medium">Outline Secondary</OutlineButton>
      <OutlineButton size="medium" icon={editIcon}>
        Outline Secondary
      </OutlineButton>
      <OutlineButton size="medium" dataLabel={'1:00'} icon={playCircleIcon}>
        Outline Secondary
      </OutlineButton>
      <OutlineButton size="medium" disabled={true} dataLabel={'1:00'} icon={playCircleIcon}>
        Outline Secondary
      </OutlineButton>

      <h3>Small Secondary</h3>
      <OutlineButton size="small">Outline Secondary</OutlineButton>
      <OutlineButton size="small" disabled={true}>
        Outline Secondary
      </OutlineButton>

      <h3>Growing Secondary</h3>
      <OutlineButton size="large" grow={true}>
        Growing Secondary Outline
      </OutlineButton>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div css={blueBackground}>
        <OutlineButton size="large" variant={OutlineButton.Variant.Inverse}>
          Outline Inverse
        </OutlineButton>
        <OutlineButton
          size="large"
          variant={OutlineButton.Variant.Inverse}
          icon={activityStreamIcon}
        >
          Outline Inverse
        </OutlineButton>
        <OutlineButton
          size="large"
          dataLabel={'1:00'}
          variant={OutlineButton.Variant.Inverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </OutlineButton>
        <OutlineButton
          size="large"
          disabled={true}
          dataLabel={'1:00'}
          variant={OutlineButton.Variant.Inverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </OutlineButton>
      </div>

      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <OutlineButton size="medium" variant={OutlineButton.Variant.Inverse}>
          Outline Inverse
        </OutlineButton>
        <OutlineButton size="medium" variant={OutlineButton.Variant.Inverse} icon={editIcon}>
          Outline Inverse
        </OutlineButton>
        <OutlineButton
          size="medium"
          dataLabel={'1:00'}
          variant={OutlineButton.Variant.Inverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </OutlineButton>
        <OutlineButton
          size="medium"
          disabled={true}
          dataLabel={'1:00'}
          variant={OutlineButton.Variant.Inverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </OutlineButton>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <OutlineButton size="small" variant={OutlineButton.Variant.Inverse}>
          Outline Inverse
        </OutlineButton>
        <OutlineButton size="small" disabled={true} variant={OutlineButton.Variant.Inverse}>
          Outline Inverse
        </OutlineButton>
      </div>

      <h3>Growing Inverse</h3>
      <div css={blueBackground} style={{maxWidth: 'initial'}}>
        <OutlineButton size="large" variant={OutlineButton.Variant.Inverse} grow={true}>
          Growing Inverse Outline
        </OutlineButton>
      </div>
    </div>
  ));
