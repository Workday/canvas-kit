import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../../../text-area/css/README.md';
import '../index.scss';
import '@workday/canvas-kit-css-text-area/index.scss';

storiesOf('Components/Inputs/TextArea/CSS/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea id="textarea" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea id="textarea" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea
              id="textarea"
              className="wdc-form-textarea wdc-form-disabled"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea wdc-form-disabled">
            <textarea id="textarea" placeholder="Placeholder" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea wdc-form-alert">
            <textarea id="textarea" aria-describedby="alert-message" />
          </div>
          <div className="wdc-form-hint-message" id="alert-message">
            <strong>Alert:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-error">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea wdc-form-error">
            <textarea id="textarea" aria-describedby="error-message" aria-invalid="true" />
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('Components/Inputs/TextArea/CSS/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea id="textarea" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea id="textarea" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea
              id="textarea"
              className="wdc-form-textarea wdc-form-disabled"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea">
            <textarea
              id="textarea"
              className="wdc-form-textarea wdc-form-disabled"
              placeholder="Placeholder"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea wdc-form-alert">
            <textarea id="textarea" aria-describedby="alert-message" />
          </div>
          <div className="wdc-form-hint-message" id="alert-message">
            <strong>Alert:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-error">
        <label htmlFor="textarea" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textarea wdc-form-error">
            <textarea id="textarea" aria-describedby="error-message" aria-invalid="true" />
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));
