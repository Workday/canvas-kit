import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

storiesOf('CSS/Form Field', module)
  .addDecorator(withReadme(README))
  .add('Test', () => (
    <div>
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
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="input" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <div className="wdc-form-textinput">
              <input id="input" type="text" disabled={true} />
            </div>
          </div>
        </div>
      </div>
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
    </div>
  ));
