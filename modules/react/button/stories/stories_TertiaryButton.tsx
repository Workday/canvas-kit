/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {colors} from '@workday/canvas-kit-react/tokens';
import {type} from '@workday/canvas-kit-labs-react/tokens';
import {editIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
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

storiesOf('Components/Buttons/Button/React/Tertiary', module)
  .addParameters({component: TertiaryButton})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Medium Large</h3>
      <TertiaryButton size="medium">Text</TertiaryButton>
      <TertiaryButton disabled={true} size="medium">
        Text
      </TertiaryButton>

      <h3>Small</h3>
      <TertiaryButton size="small">Text</TertiaryButton>
      <TertiaryButton disabled={true} size="small">
        Text
      </TertiaryButton>

      <h3>All Caps</h3>
      <TertiaryButton allCaps={true}>All Caps</TertiaryButton>

      <h3>Icons</h3>
      <div css={buttonContainer}>
        <TertiaryButton icon={editIcon} iconPosition="left">
          Left Icon
        </TertiaryButton>
        <TertiaryButton icon={arrowRightIcon} iconPosition="right">
          Right Icon
        </TertiaryButton>
      </div>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <TertiaryButton size="medium" variant="inverse">
          Text
        </TertiaryButton>
        <TertiaryButton disabled={true} size="medium" variant="inverse">
          Text
        </TertiaryButton>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <TertiaryButton size="small" variant="inverse">
          Text
        </TertiaryButton>
        <TertiaryButton disabled={true} size="small" variant="inverse">
          Text
        </TertiaryButton>
      </div>

      <h3>All Caps Inverse</h3>
      <div css={blueBackground}>
        <TertiaryButton variant="inverse" allCaps={true}>
          All Caps
        </TertiaryButton>
      </div>

      <h3>Icons Inverse</h3>
      <div css={{...buttonContainer, ...blueBackground}}>
        <TertiaryButton icon={editIcon} iconPosition="left" variant="inverse">
          Left Icon
        </TertiaryButton>
        <TertiaryButton icon={arrowRightIcon} iconPosition="right" variant="inverse">
          Right Icon
        </TertiaryButton>
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
