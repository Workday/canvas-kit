/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {editIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

import {TextButton} from '../index';
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

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Components|Buttons/Button/React/Text', module)
  .addParameters({component: TextButton})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Medium Large</h3>
      <TextButton size="medium" variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <TextButton disabled={true} size="medium" variant={TextButton.Variant.Default}>
        Text
      </TextButton>

      <h3>Small</h3>
      <TextButton size="small" variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <TextButton disabled={true} size="small" variant={TextButton.Variant.Default}>
        Text
      </TextButton>

      <h3>All Caps</h3>
      <TextButton allCaps={true}>All Caps</TextButton>

      <h3>Icons</h3>
      <div css={buttonContainer}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          variant={TextButton.Variant.Default}
        >
          Left Icon
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          variant={TextButton.Variant.Default}
        >
          Right Icon
        </TextButton>
      </div>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <TextButton size="medium" variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
        <TextButton disabled={true} size="medium" variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <TextButton size="small" variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
        <TextButton disabled={true} size="small" variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
      </div>

      <h3>All Caps Inverse</h3>
      <div css={blueBackground}>
        <TextButton variant={TextButton.Variant.Inverse} allCaps={true}>
          All Caps
        </TextButton>
      </div>

      <h3>Icons Inverse</h3>
      <div css={{...buttonContainer, ...blueBackground}}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          variant={TextButton.Variant.Inverse}
        >
          Left Icon
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          variant={TextButton.Variant.Inverse}
        >
          Right Icon
        </TextButton>
      </div>
    </div>
  ));
