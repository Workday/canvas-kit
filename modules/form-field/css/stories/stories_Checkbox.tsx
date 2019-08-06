import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';
import '@workday/canvas-kit-css-checkbox/index.scss';

storiesOf('CSS/Form Field/Checkbox/Top Label/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="checkbox" className="wdc-form-checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="wdc-form-label">
              Checkbox option
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
            <input type="checkbox" className="wdc-form-checkbox" id="checkbox" disabled={true} />
            <label htmlFor="checkbox" className="wdc-form-label">
              Checkbox option
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
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-alert"
              id="checkbox-alert"
            />
            <label htmlFor="checkbox-alert" className="wdc-form-label">
              Checkbox option
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
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-error"
              id="checkbox-error"
            />
            <label htmlFor="checkbox-error" className="wdc-form-label">
              Checkbox option
            </label>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Checkbox/Left Label/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <input type="checkbox" className="wdc-form-checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="wdc-form-label">
              Checkbox option
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
            <input type="checkbox" className="wdc-form-checkbox" id="checkbox" disabled={true} />
            <label htmlFor="checkbox" className="wdc-form-label">
              Checkbox option
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
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-alert"
              id="checkbox-alert"
            />
            <label htmlFor="checkbox-alert" className="wdc-form-label">
              Checkbox option
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
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-error"
              id="checkbox-error"
            />
            <label htmlFor="checkbox-error" className="wdc-form-label">
              Checkbox option
            </label>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Checkbox/Top Label/Checkbox Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label className="wdc-form-label">Label</label>

          <div className="wdc-form-group-fields">
            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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
          <label htmlFor="checkboxError" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-error">
            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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

storiesOf('CSS/Form Field/Checkbox/Left Label/Checkbox Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper wdc-form-group">
          <label className="wdc-form-label">Label</label>

          <div className="wdc-form-group-fields">
            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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
          <label htmlFor="checkboxAlert" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-alert">
            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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
          <label htmlFor="checkboxError" className="wdc-form-label">
            Label
          </label>

          <div className="wdc-form-group-fields wdc-form-field-error">
            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2" className="wdc-form-label">
                Checkbox
              </label>
            </div>

            <div className="wdc-form-field">
              <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3" className="wdc-form-label">
                Checkbox
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
