import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

storiesOf('CSS/Form Field', module)
  .addDecorator(withReadme(README))
  .add('Label', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="text" className="wdc-form-label">
            Label
          </label>
        </div>
      </div>
    </div>
  ))
  .add('Hint', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field">
          <span className="wdc-form-text" id="text">
            Hint
          </span>
        </div>
        <div className="wdc-form-error-message">
          <strong>Error:</strong> Hint
        </div>
        <div className="wdc-form-alert-message">
          <strong>Alert:</strong> Hint
        </div>
      </div>
    </div>
  ));
