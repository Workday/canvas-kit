import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../../../text-input/css/README.md';
import '../index.scss';
import '@workday/canvas-kit-css-text-input/index.scss';

storiesOf('CSS/Form Field/Text Input/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput">
            <input id="input" type="text" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput wdc-form-disabled">
            <input id="input" type="text" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput wdc-form-disabled">
            <input id="input" type="text" placeholder="Placeholder" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field  wdc-form-alert">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
          <div className="wdc-form-hint-message">
            <strong>Alert:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-error">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field  wdc-form-error">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
          <div className="wdc-form-hint-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Text Input/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('With placeholder', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput">
            <input id="input" type="text" placeholder="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput wdc-form-disabled">
            <input id="input" type="text" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled with placeholder', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-textinput wdc-form-disabled">
            <input id="input" type="text" placeholder="Placeholder" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field wdc-form-alert">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
          <div className="wdc-form-hint-message">
            <strong>Alert:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-error">
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field wdc-form-error">
          <div className="wdc-form-textinput">
            <input id="input" type="text" />
          </div>
          <div className="wdc-form-hint-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));
