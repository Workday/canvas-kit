import React from 'react';
import {storiesOf} from '@storybook/react';
import '../index.scss';
import '@workday/canvas-kit-css-text-input/index.scss';

storiesOf('Components/Inputs/Text Input/CSS/Top Label', module)
  .addParameters({ReadmePath: 'css/text-input'})
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
            <input id="input" type="text" aria-describedby="alert-message" />
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
        <label htmlFor="input" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field  wdc-form-error">
          <div className="wdc-form-textinput">
            <input id="input" type="text" aria-describedby="error-message" aria-invalid="true" />
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('Components/Inputs/Text Input/CSS/Left Label', module)
  .addParameters({ReadmePath: 'css/text-input'})
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
            <input id="input" type="text" aria-describedby="error-message" aria-invalid="true" />
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));
