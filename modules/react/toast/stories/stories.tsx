/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '../../../core/react';
import Toast from '../index';
import README from '../README.md';

storiesOf('Components/Popups/Toast/React', module)
  .addParameters({component: Toast})
  .addDecorator(withReadme(README))
  .add('Success', () => (
    <div className="story">
      <Toast>Your workbook was successfully processed.</Toast>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <Toast iconColor={colors.cinnamon500} icon={exclamationCircleIcon}>
        There was an error with your workbook.
      </Toast>
    </div>
  ))
  .add('With close button', () => (
    <div className="story">
      <Toast onClose={action('close button clicked')}>
        Your workbook was successfully processed.
      </Toast>
    </div>
  ))

  .add('With action link', () => (
    <div className="story">
      <Toast actionText={'View more details'} onActionClick={action('action button clicked')}>
        Your workbook was successfully processed.
      </Toast>
    </div>
  ))

  .add('With action link and close icon', () => (
    <div className="story">
      <Toast
        onClose={action('close button clicked')}
        actionText={'View more details'}
        onActionClick={action('action button clicked')}
      >
        Your workbook was successfully processed.
      </Toast>
    </div>
  ));
