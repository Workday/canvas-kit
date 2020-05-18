import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../../../select/css/README.md';
import '../index.scss';
import '@workday/canvas-kit-css-select/index.scss';

storiesOf('Components|Inputs/Select/CSS/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select">
            <select id="select">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-disabled">
            <select id="select" disabled={true}>
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-alert">
            <select id="select" aria-describedby="alert-message">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
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
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-error">
            <select id="select" aria-describedby="error-message" aria-invalid="true">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('Components|Inputs/Select/CSS/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select">
            <select id="select">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-disabled">
            <select id="select" disabled={true}>
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-alert">
            <select id="select" aria-describedby="alert-message">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
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
        <label htmlFor="select" className="wdc-form-label">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-select wdc-form-error">
            <select id="select" aria-describedby="error-message" aria-invalid="true">
              <option label="E-mail">E-mail</option>
              <option label="Phone">Phone</option>
              <option label="Fax (disabled)" disabled={true}>
                Fax (disabled)
              </option>
              <option label="Mail">Mail</option>
            </select>
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));
