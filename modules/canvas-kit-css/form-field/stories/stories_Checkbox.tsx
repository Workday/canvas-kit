import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../../../checkbox/css/README.md';
import '../index.scss';
import '@workday/canvas-kit-css-checkbox/index.scss';

storiesOf('Components/Inputs/Checkbox/CSS/Top Label/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Checkbox option</label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox">
            <input type="checkbox" id="checkbox" disabled={true} />
            <label htmlFor="checkbox">Checkbox option</label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form">
      <div className="wdc-form-field-wrapper wdc-form-field-alert wdc-form-field-error-inline">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox wdc-form-alert">
            <input type="checkbox" id="checkbox-alert" aria-describedby="alert-message" />
            <label htmlFor="checkbox-alert">Checkbox option</label>
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
      <div className="wdc-form-field-wrapper wdc-form-field-error wdc-form-field-error-inline">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox wdc-form-error">
            <input
              type="checkbox"
              id="checkbox-error"
              aria-describedby="error-message"
              aria-invalid="true"
            />
            <label htmlFor="checkbox-error">Checkbox option</label>
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('Components/Inputs/Checkbox/CSS/Left Label/Checkbox', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Checkbox option</label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox">
            <input type="checkbox" id="checkbox" disabled={true} />
            <label htmlFor="checkbox">Checkbox option</label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <div className="wdc-form-field-wrapper wdc-form-field-alert">
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox wdc-form-alert">
            <input type="checkbox" id="checkbox-alert" aria-describedby="alert-message" />
            <label htmlFor="checkbox-alert">Checkbox option</label>
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
        <label className="wdc-form-label" htmlFor="checkbox">
          Label
        </label>
        <div className="wdc-form-field">
          <div className="wdc-form-checkbox wdc-form-error">
            <input
              type="checkbox"
              id="checkbox-error"
              aria-describedby="error-message"
              aria-invalid="true"
            />
            <label htmlFor="checkbox-error">Checkbox option</label>
          </div>
          <div className="wdc-form-hint-message" id="error-message">
            <strong>Error:</strong> Helpful text goes here.
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('Components/Inputs/Checkbox/CSS/Top Label/Checkbox Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields">
          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3">Checkbox</label>
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
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-1" aria-describedby="alert-message" />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-2" aria-describedby="alert-message" />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-3" aria-describedby="alert-message" />
              <label htmlFor="checkbox-3">Checkbox</label>
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
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-1"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-2"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-3"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-3">Checkbox</label>
            </div>
          </div>
        </div>

        <div className="wdc-form-hint-message" id="error-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ));

storiesOf('Components/Inputs/Checkbox/CSS/Left Label/Checkbox Group', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="wdc-form wdc-form-label-position-left">
      <fieldset className="wdc-form-field-wrapper wdc-form-group">
        <legend className="wdc-form-label">Label</legend>

        <div className="wdc-form-group-fields">
          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-3" />
              <label htmlFor="checkbox-3">Checkbox</label>
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
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-1" aria-describedby="alert-message" />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-2" aria-describedby="alert-message" />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input type="checkbox" id="checkbox-3" aria-describedby="alert-message" />
              <label htmlFor="checkbox-3">Checkbox</label>
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
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-1"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-1">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-2"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-2">Checkbox</label>
            </div>
          </div>

          <div className="wdc-form-field">
            <div className="wdc-form-checkbox">
              <input
                type="checkbox"
                id="checkbox-3"
                aria-describedby="error-message"
                aria-invalid="true"
              />
              <label htmlFor="checkbox-3">Checkbox</label>
            </div>
          </div>
        </div>

        <div className="wdc-form-hint-message" id="error-message">
          <strong>Error:</strong> Helpful text goes here.
        </div>
      </fieldset>
    </div>
  ));
