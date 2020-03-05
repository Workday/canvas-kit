/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {Button} from '../index';
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
  .addParameters({component: Button})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button size="large" variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button size="large" variant={Button.Variant.OutlinePrimary} icon={activityStreamIcon}>
        Outline Primary
      </Button>
      <Button
        size="large"
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        size="large"
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>

      <h3>Medium Primary</h3>
      <Button size="medium" variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button size="medium" variant={Button.Variant.OutlinePrimary} icon={editIcon}>
        Outline Primary
      </Button>
      <Button
        size="medium"
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        size="medium"
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>

      <h3>Small Primary</h3>
      <Button size="small" variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button size="small" disabled={true} variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>

      <h3>Growing Primary</h3>
      <Button size="large" variant={Button.Variant.OutlinePrimary} grow={true}>
        Growing Primary Outline
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button size="large" variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button size="large" variant={Button.Variant.OutlineSecondary} icon={activityStreamIcon}>
        Outline Secondary
      </Button>
      <Button
        size="large"
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        size="large"
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>

      <h3>Medium Secondary</h3>
      <Button size="medium" variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button size="medium" variant={Button.Variant.OutlineSecondary} icon={editIcon}>
        Outline Secondary
      </Button>
      <Button
        size="medium"
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        size="medium"
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>

      <h3>Small Secondary</h3>
      <Button size="small" variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button size="small" disabled={true} variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>

      <h3>Growing Secondary</h3>
      <Button size="large" variant={Button.Variant.OutlineSecondary} grow={true}>
        Growing Secondary Outline
      </Button>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div css={blueBackground}>
        <Button size="large" variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button size="large" variant={Button.Variant.OutlineInverse} icon={activityStreamIcon}>
          Outline Inverse
        </Button>
        <Button
          size="large"
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          size="large"
          disabled={true}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>

      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <Button size="medium" variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button size="medium" variant={Button.Variant.OutlineInverse} icon={editIcon}>
          Outline Inverse
        </Button>
        <Button
          size="medium"
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          size="medium"
          disabled={true}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <Button size="small" variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button size="small" disabled={true} variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
      </div>

      <h3>Growing Inverse</h3>
      <div css={blueBackground} style={{maxWidth: 'initial'}}>
        <Button size="large" variant={Button.Variant.OutlineInverse} grow={true}>
          Growing Inverse Outline
        </Button>
      </div>
    </div>
  ));
