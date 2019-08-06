import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';
import '@workday/canvas-kit-css-select/index.scss';

storiesOf('CSS/Form Field/Select/Top Label', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-form">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select wdc-form-disabled" id="select" disabled={true}>
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-alert" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-error" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select wdc-form-disabled" id="select" disabled={true}>
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-alert" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
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
          <label htmlFor="select" className="wdc-form-label">
            Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select  wdc-form-error" id="select">
              <option label="Select an option" disabled={true} selected={true}>
                Select an option
              </option>
              <option label="Option 1">Option 1</option>
              <option label="Option 2">Option 2</option>
              <option label="Option 3">Option 3</option>
            </select>
            <div className="wdc-form-error-message">
              <strong>Error:</strong> Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
