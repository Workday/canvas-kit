import React from 'react';
import {storiesOf} from '@storybook/react';
import '../index.scss';

storiesOf('CSS/Form Field', module)
  .addParameters({ReadmePath: 'css/form-field'})
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
      <div className="wdc-form-hint-message">Hint</div>
      <div className="wdc-form-hint-message">
        <strong>Error:</strong> Hint
      </div>
      <div className="wdc-form-hint-message">
        <strong>Alert:</strong> Hint
      </div>
    </div>
  ));
