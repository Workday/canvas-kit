import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';
import '@workday/canvas-kit-css-text-area/index.scss';

storiesOf('CSS/Form Field/TextArea/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
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
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea
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
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-field-alert">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea wdc-form-alert" />
            <div className="wdc-form-alert-message">
              <strong>Alert:</strong> Alert message
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-field-error">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea wdc-form-error" />
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/TextArea/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
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
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea
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
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-field-alert">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea wdc-form-alert" />
            <div className="wdc-form-alert-message">
              <strong>Alert:</strong> Alert message
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-field-error">
          <label htmlFor="textarea" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <textarea id="textarea" className="wdc-form-textarea wdc-form-error" />
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
