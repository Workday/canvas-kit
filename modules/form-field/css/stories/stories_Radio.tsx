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
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioGroup" className="wdc-form-label">
          Label
        </label>

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
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioAlert" className="wdc-form-label">
          Label
        </label>

        <div className="wdc-form-group-fields wdc-form-field-alert">
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

        <div className="wdc-form-hint-message">
          <strong>Alert:</strong> Helpful text goes here.
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioError" className="wdc-form-label">
          Label
        </label>

        <div className="wdc-form-group-fields wdc-form-field-error">
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
        <div className="wdc-form-hint-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Left Label/Radio Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioGroup" className="wdc-form-label">
          Label
        </label>

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
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioAlert" className="wdc-form-label">
          Label
        </label>

        <div className="wdc-form-group-fields wdc-form-field-alert">
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

        <div className="wdc-form-hint-message">
          <strong>Alert:</strong> Helpful text goes here.
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-group">
        <label htmlFor="radioError" className="wdc-form-label">
          Label
        </label>

        <div className="wdc-form-group-fields wdc-form-field-error">
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
        <div className="wdc-form-hint-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </div>
    </div>
  ));
