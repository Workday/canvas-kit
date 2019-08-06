import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';
import '@workday/canvas-kit-css-text-input/index.scss';

storiesOf('CSS/Form Field/Text Input/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              id="input"
              type="text"
              className="wdc-form-textinput"
              placeholder="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              id="input"
              type="text"
              className="wdc-form-textinput wdc-form-disabled"
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput wdc-form-disabled"
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput wdc-form-alert" />
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput wdc-form-error" />
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Text Input/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              id="input"
              type="text"
              className="wdc-form-textinput"
              placeholder="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              id="input"
              type="text"
              className="wdc-form-textinput wdc-form-disabled"
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput wdc-form-disabled"
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput wdc-form-alert" />
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
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <input id="input" type="text" className="wdc-form-textinput wdc-form-error" />
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
