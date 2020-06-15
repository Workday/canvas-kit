/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {playCircleIcon, activityStreamIcon} from '@workday/canvas-system-icons-web';

import {HighlightButton} from '../index';
import README from '../README.md';

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Components|Buttons/Button/React', module)
  .addParameters({component: HighlightButton})
  .addDecorator(withReadme(README))
  .add('Highlight', () => (
    <div className="story">
      <h3>Large Highlight</h3>
      <HighlightButton icon={activityStreamIcon}>Highlight</HighlightButton>
      <HighlightButton disabled={true} icon={playCircleIcon}>
        Highlight
      </HighlightButton>

      <h3>Medium Highlight</h3>
      <HighlightButton size="medium" icon={activityStreamIcon}>
        Highlight
      </HighlightButton>
      <HighlightButton size="medium" icon={playCircleIcon}>
        Highlight
      </HighlightButton>

      <h3>Growing</h3>
      <div css={buttonContainer}>
        <HighlightButton icon={activityStreamIcon} grow={true}>
          Highlight
        </HighlightButton>
        <HighlightButton icon={playCircleIcon} grow={true}>
          Highlight
        </HighlightButton>
      </div>
    </div>
  ));
