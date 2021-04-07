/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {colors} from '@workday/canvas-kit-react/core';
import {type} from '@workday/canvas-kit-labs-react/core';
import {editIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

import {TextButton, Hyperlink} from '@workday/canvas-kit-react/button';
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

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Components/Buttons/Button/React/Text', module)
  .addParameters({component: TextButton})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Medium Large</h3>
      <TextButton size="medium" variant="text">
        Text
      </TextButton>
      <TextButton disabled={true} size="medium" variant="text">
        Text
      </TextButton>

      <h3>Small</h3>
      <TextButton size="small" variant="text">
        Text
      </TextButton>
      <TextButton disabled={true} size="small" variant="text">
        Text
      </TextButton>

      <h3>All Caps</h3>
      <TextButton allCaps={true}>All Caps</TextButton>

      <h3>Icons</h3>
      <div css={buttonContainer}>
        <TextButton icon={editIcon} iconPosition="left" variant="text">
          Left Icon
        </TextButton>
        <TextButton icon={arrowRightIcon} iconPosition="right" variant="text">
          Right Icon
        </TextButton>
      </div>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <TextButton size="medium" variant="inverse">
          Text
        </TextButton>
        <TextButton disabled={true} size="medium" variant="inverse">
          Text
        </TextButton>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <TextButton size="small" variant="inverse">
          Text
        </TextButton>
        <TextButton disabled={true} size="small" variant="inverse">
          Text
        </TextButton>
      </div>

      <h3>All Caps Inverse</h3>
      <div css={blueBackground}>
        <TextButton variant="inverse" allCaps={true}>
          All Caps
        </TextButton>
      </div>

      <h3>Icons Inverse</h3>
      <div css={{...buttonContainer, ...blueBackground}}>
        <TextButton icon={editIcon} iconPosition="left" variant="inverse">
          Left Icon
        </TextButton>
        <TextButton icon={arrowRightIcon} iconPosition="right" variant="inverse">
          Right Icon
        </TextButton>
      </div>
    </div>
  ))
  .add('Hyperlink', () => (
    <div className="story">
      <h3>Default</h3>
      <div css={type.body}>
        Here is a <Hyperlink>Link</Hyperlink> to something
      </div>
      <h3>Inverse</h3>
      <div
        css={{...blueBackground, ...type.body, display: 'block', color: colors.frenchVanilla100}}
      >
        Here is a <Hyperlink variant="inverse">Link</Hyperlink> to something
      </div>
    </div>
  ));
