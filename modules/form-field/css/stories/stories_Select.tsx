import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

storiesOf('CSS/Form Field/Select/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <select className="wdc-form-select" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
            <select className="wdc-form-select wdc-form-disabled" id="select" disabled={true}>
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper wdc-form-field-alert">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-alert" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-error" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Form Field/Select/Left Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label className="wdc-form-label">Label</label>
          <div className="wdc-form-field">
            <select className="wdc-form-select" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
            <select className="wdc-form-select wdc-form-disabled" id="select" disabled={true}>
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
            <select className="wdc-form-select  wdc-form-alert" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
            <select className="wdc-form-select  wdc-form-error" id="select">
              <option disabled={true} selected={true}>
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
