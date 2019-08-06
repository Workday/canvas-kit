import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';
import '@workday/canvas-kit-css-radio/index.scss';

storiesOf('CSS/Form Field/Radio/Top Label/Radio', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio" id="radio" />
            <label htmlFor="radio" className="wdc-form-label">
              Radio option
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio" id="radio" disabled={true} />
            <label htmlFor="radio" className="wdc-form-label">
              Radio option
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-field-alert wdc-form-field-error-inline">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio wdc-form-alert" id="radio-alert" />
            <label htmlFor="radio-alert" className="wdc-form-label">
              Radio option
            </label>
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
        <div className="wdc-form-field-wrapper wdc-form-field-error wdc-form-field-error-inline">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio wdc-form-error" id="radio-error" />
            <label htmlFor="radio-error" className="wdc-form-label">
              Radio option
            </label>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Left Label/Radio', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio" id="radio" />
            <label htmlFor="radio" className="wdc-form-label">
              Radio option
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio" id="radio" disabled={true} />
            <label htmlFor="radio" className="wdc-form-label">
              Radio option
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-field-alert">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio wdc-form-alert" id="radio-alert" />
            <label htmlFor="radio-alert" className="wdc-form-label">
              Radio option
            </label>
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
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="radio" className="wdc-form-radio wdc-form-error" id="radio-error" />
            <label htmlFor="radio-error" className="wdc-form-label">
              Radio option
            </label>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Top Label/Radio Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioGroup" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioGroup"
                id="radio-option1"
                defaultChecked={true}
              />
              <label htmlFor="radio-option1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioGroup" id="radio-option2" />
              <label htmlFor="radio-option2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioGroup" id="radio-option3" />
              <label htmlFor="radio-option3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioAlert" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-alert">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioAlert"
                id="radio-alert1"
                defaultChecked={true}
              />
              <label htmlFor="radio-alert1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioAlert" id="radio-alert2" />
              <label htmlFor="radio-alert2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioAlert" id="radio-alert3" />
              <label htmlFor="radio-alert3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>

          <div className="wdc-form-alert-message">
            <strong>Alert:</strong> Alert message
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioError" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-error">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioError"
                id="radio-error1"
                defaultChecked={true}
              />
              <label htmlFor="radio-error1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioError" id="radio-error2" />
              <label htmlFor="radio-error2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioError" id="radio-error3" />
              <label htmlFor="radio-error3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>

          <div className="wdc-form-error-message">
            <strong>Error:</strong> Error message
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Radio/Left Label/Radio Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioGroup" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioGroup"
                id="radio-option1"
                defaultChecked={true}
              />
              <label htmlFor="radio-option1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioGroup" id="radio-option2" />
              <label htmlFor="radio-option2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioGroup" id="radio-option3" />
              <label htmlFor="radio-option3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioAlert" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-alert">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioAlert"
                id="radio-alert1"
                defaultChecked={true}
              />
              <label htmlFor="radio-alert1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioAlert" id="radio-alert2" />
              <label htmlFor="radio-alert2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioAlert" id="radio-alert3" />
              <label htmlFor="radio-alert3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>

          <div className="wdc-form-alert-message">
            <strong>Alert:</strong> Alert message
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Error', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radioError" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-error">
            <div className="wdc-form-field">
              <input
                type="radio"
                className="wdc-form-radio"
                name="radioError"
                id="radio-error1"
                defaultChecked={true}
              />
              <label htmlFor="radio-error1" className="wdc-form-label">
                Option 1
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioError" id="radio-error2" />
              <label htmlFor="radio-error2" className="wdc-form-label">
                Option 2
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="radio" className="wdc-form-radio" name="radioError" id="radio-error3" />
              <label htmlFor="radio-error3" className="wdc-form-label">
                Option 3
              </label>
            </div>
          </div>

          <div className="wdc-form-error-message">
            <strong>Error:</strong> Error message
          </div>
        </div>
      </div>
    </div>
  ));
