import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../../../radio/css/README.md';
import '../index.scss';
import '@workday/canvas-kit-css-radio/index.scss';

storiesOf('CSS/Form Field/Radio/Top Label/Radio', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label">Label</label>
        <div className="wdc-form-field">
          <div className="wdc-form-radio">
            <input type="radio" id="radio" />
            <label htmlFor="radio">E-mail</label>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Left Label/Radio', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label">Label</label>
        <div className="wdc-form-field">
          <div className="wdc-form-radio">
            <input type="radio" id="radio" />
            <label htmlFor="radio">E-mail</label>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Top Label/Radio Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-email" />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-phone" />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-fax" disabled={true} />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-mail" />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields wdc-form-field-alert">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-email"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-phone"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-fax"
                disabled={true}
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-mail"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>

        <div className="wdc-form-hint-message" id="alert-message">
          <strong>Alert:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields wdc-form-field-error">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-email"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-phone"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-fax"
                disabled={true}
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-mail"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>
        <div className="wdc-form-hint-message" id="error-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Left Label/Radio Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-email" />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-phone" />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-fax" disabled={true} />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input type="radio" name="radio-contact" id="radio-mail" />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields wdc-form-field-alert">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-email"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-phone"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-fax"
                disabled={true}
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-mail"
                aria-describedby="alert-message"
              />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>

        <div className="wdc-form-hint-message" id="alert-message">
          <strong>Alert:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields wdc-form-field-error">
          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-email"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-email">E-mail</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-phone"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-phone">Phone</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-fax"
                disabled={true}
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-fax">Fax (disabled)</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-radio">
              <input
                type="radio"
                name="radio-contact"
                id="radio-mail"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="radio-mail">Mail</label>
            </div>
          </div>
        </div>
        <div className="wdc-form-hint-message" id="error-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ));
