import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';

const formFields = (
  <div>
    <div className="wdc-form-field-wrapper">
      <label htmlFor="text" className="wdc-form-label wdc-form-label-required">
        Text Label
      </label>
      <div className="wdc-form-field">
        <span className="wdc-form-text" id="text">
          Here is some text
        </span>
      </div>
    </div>

    <div className="wdc-form-field-wrapper">
      <label htmlFor="textinput" className="wdc-form-label wdc-form-label-required">
        Input Label
      </label>
      <div className="wdc-form-field">
        <input
          type="text"
          className="wdc-form-textinput"
          placeholder="Here's a placeholder"
          id="textinput"
        />
      </div>
    </div>

    <div className="wdc-form-field-wrapper">
      <label htmlFor="textarea" className="wdc-form-label">
        Textarea Label
      </label>
      <div className="wdc-form-field">
        <textarea className="wdc-form-textarea" placeholder="Here's a placeholder" id="textarea" />
      </div>
    </div>

    <div className="wdc-form-field-wrapper">
      <label htmlFor="select" className="wdc-form-label">
        Select Label
      </label>
      <div className="wdc-form-field">
        <select className="wdc-form-select" id="select" defaultValue="">
          <option disabled={true} value="">
            Select an option
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>

    <div className="wdc-form-field-wrapper">
      <label className="wdc-form-label">Checkbox With Label</label>
      <div className="wdc-form-field">
        <input type="checkbox" className="wdc-form-checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="wdc-form-label">
          Checkbox Label
        </label>
      </div>
    </div>

    <div className="wdc-form-field-wrapper">
      <div className="wdc-form-field">
        <input
          type="checkbox"
          className="wdc-form-checkbox"
          id="checkbox-checked"
          defaultChecked={true}
          readOnly={true}
        />
        <label htmlFor="checkbox-checked" className="wdc-form-label">
          Checked Checkbox Label
        </label>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label className="wdc-form-label">Checkbox Group Label</label>

      <div className="wdc-form-group-fields">
        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-1" />
          <label htmlFor="checkbox-1" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-2" />
          <label htmlFor="checkbox-2" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-3" />
          <label htmlFor="checkbox-3" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label htmlFor="radio" className="wdc-form-label">
        Radio Select Label
      </label>

      <div className="wdc-form-group-fields">
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
    </div>
  </div>
);

const errorFields = (
  <div>
    <h2>Text Inputs</h2>

    <div className="wdc-form-field-wrapper wdc-form-field-error">
      <label htmlFor="textinput-error" className="wdc-form-label wdc-form-label-required">
        Input Label - Error
      </label>
      <div className="wdc-form-field">
        <input
          type="text"
          className="wdc-form-textinput wdc-form-error"
          placeholder="Here's a placeholder"
          id="textinput-error"
        />
        <div className="wdc-form-error-message">
          <strong>Error:</strong> Error message
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-field-alert">
      <label htmlFor="textinput-alert" className="wdc-form-label wdc-form-label-required">
        Input Label - Alert
      </label>
      <div className="wdc-form-field">
        <input
          type="text"
          className="wdc-form-textinput wdc-form-alert"
          placeholder="Here's a placeholder"
          id="textinput-alert"
        />
        <div className="wdc-form-alert-message">
          <strong>Alert:</strong> Alert message
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-field-error">
      <label htmlFor="textarea" className="wdc-form-label">
        Textarea Label - Error
      </label>
      <div className="wdc-form-field">
        <textarea
          className="wdc-form-textarea wdc-form-error"
          placeholder="Here's a placeholder"
          id="textarea-error"
        />
        <div className="wdc-form-error-message">
          <strong>Error:</strong> Error message
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-field-alert">
      <label htmlFor="textarea" className="wdc-form-label">
        Textarea Label - Alert
      </label>
      <div className="wdc-form-field">
        <textarea
          className="wdc-form-textarea wdc-form-alert"
          placeholder="Here's a placeholder"
          id="textarea-alert"
        />
        <div className="wdc-form-alert-message">
          <strong>Alert:</strong> Alert message
        </div>
      </div>
    </div>

    <h2>Selects</h2>

    <div className="wdc-form-field-wrapper wdc-form-field-error">
      <label htmlFor="select-error" className="wdc-form-label">
        Select Label - Error
      </label>
      <div className="wdc-form-field">
        <select className="wdc-form-select wdc-form-error" id="select-error" defaultValue="">
          <option disabled={true} value="">
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

    <div className="wdc-form-field-wrapper wdc-form-field-alert">
      <label htmlFor="select-alert" className="wdc-form-label">
        Select Label - Alert
      </label>
      <div className="wdc-form-field">
        <select className="wdc-form-select wdc-form-alert" id="select-alert" defaultValue="">
          <option disabled={true} value="">
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

    <h2>Checkboxes</h2>

    <div className="wdc-form-field-wrapper wdc-form-field-error wdc-form-field-error-inline">
      <div className="wdc-form-field">
        <input type="checkbox" className="wdc-form-checkbox wdc-form-error" id="checkbox-error" />
        <label htmlFor="checkbox-error" className="wdc-form-label">
          Checkbox Label - Error
        </label>
        <div className="wdc-form-error-message">
          <strong>Error:</strong> Error message
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-field-alert wdc-form-field-error-inline">
      <div className="wdc-form-field">
        <input type="checkbox" className="wdc-form-checkbox wdc-form-alert" id="checkbox-alert" />
        <label htmlFor="checkbox-alert" className="wdc-form-label">
          Checkbox Label - Alert
        </label>
        <div className="wdc-form-alert-message">
          <strong>Alert:</strong> Alert message
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label htmlFor="radio" className="wdc-form-label">
        Checkbox Group - Error
      </label>

      <div className="wdc-form-group-fields wdc-form-field-error">
        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-error1" />
          <label htmlFor="checkbox-error1" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-error2" />
          <label htmlFor="checkbox-error2" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-error3" />
          <label htmlFor="checkbox-error3" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>
      </div>
    </div>

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label htmlFor="radio" className="wdc-form-label">
        Checkbox Group - Alert
      </label>

      <div className="wdc-form-group-fields wdc-form-field-alert">
        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-alert1" />
          <label htmlFor="checkbox-alert1" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-alert2" />
          <label htmlFor="checkbox-alert2" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>

        <div className="wdc-form-field">
          <input type="checkbox" className="wdc-form-checkbox" id="checkbox-alert3" />
          <label htmlFor="checkbox-alert3" className="wdc-form-label">
            Checkbox Label
          </label>
        </div>
      </div>

      <div className="wdc-form-alert-message">
        <strong>Alert:</strong> Alert message
      </div>
    </div>

    <h2>Radio Selects</h2>

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label htmlFor="radioError" className="wdc-form-label">
        Radio Select Label - Error
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

    <div className="wdc-form-field-wrapper wdc-form-group">
      <label htmlFor="radioAlert" className="wdc-form-label">
        Radio Select Label - Alert
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
);

storiesOf('CSS/Form', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div className="wdc-form">{formFields}</div>
    </div>
  ))
  .add('Inline Labels', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">{formFields}</div>
    </div>
  ))
  .add('States', () => (
    <div className="story">
      <h2>Hover</h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textinput-hover" className="wdc-form-label wdc-form-label-required">
            Hover Input Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput wdc-form-hover"
              placeholder="Here's a placeholder"
              id="textinput-hover"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea-hover" className="wdc-form-label">
            Hover Textarea Label
          </label>
          <div className="wdc-form-field">
            <textarea
              className="wdc-form-textarea wdc-form-hover"
              placeholder="Here's a placeholder"
              id="textarea-hover"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="select-hover" className="wdc-form-label">
            Hover Select Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select wdc-form-hover" id="select-hover" defaultValue="">
              <option disabled={true} value="">
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-hover"
              id="checkbox-hover"
            />
            <label htmlFor="checkbox-hover" className="wdc-form-label">
              Hover Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-hover"
              id="checkbox-checked-hover"
              defaultChecked={true}
              readOnly={true}
            />
            <label htmlFor="checkbox-checked-hover" className="wdc-form-label">
              Hover Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio wdc-form-hover"
              name="radio"
              id="radio-hover"
            />
            <label htmlFor="radio-hover" className="wdc-form-label">
              Option - Hover
            </label>
          </div>
        </div>
      </div>

      <h2>Focus</h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label htmlFor="textinput-focus" className="wdc-form-label wdc-form-label-required">
            Focus Input Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput wdc-form-focus"
              placeholder="Here's a placeholder"
              id="textinput-focus"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea-focus" className="wdc-form-label">
            Focus Textarea Label
          </label>
          <div className="wdc-form-field">
            <textarea
              className="wdc-form-textarea wdc-form-focus"
              placeholder="Here's a placeholder"
              id="textarea-focus"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="select-focus" className="wdc-form-label">
            Focus Select Label
          </label>
          <div className="wdc-form-field">
            <select className="wdc-form-select wdc-form-focus" id="select-focus" defaultValue="">
              <option disabled={true} value="">
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-focus"
              id="checkbox-focus"
            />
            <label htmlFor="checkbox-focus" className="wdc-form-label">
              Focus Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-focus"
              id="checkbox-checked-focus"
              defaultChecked={true}
              readOnly={true}
            />
            <label htmlFor="checkbox-checked-focus" className="wdc-form-label">
              Focus Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio wdc-form-focus"
              name="radio"
              id="radio-focus"
            />
            <label htmlFor="radio-focus" className="wdc-form-label">
              Option - Focus
            </label>
          </div>
        </div>
      </div>

      <h2>
        disabled=
        {true}
      </h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label
            htmlFor="textinput-disabled={true}"
            className="wdc-form-label wdc-form-label-required"
          >
            disabled=
            {true} Input Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput"
              placeholder="Here's a placeholder"
              id="textinput-disabled={true}"
              disabled={true}
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea-disabled={true}" className="wdc-form-label">
            disabled=
            {true} Textarea Label
          </label>
          <div className="wdc-form-field">
            <textarea
              className="wdc-form-textarea"
              placeholder="Here's a placeholder"
              id="textarea-disabled={true}"
              disabled={true}
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="select-disabled={true}" className="wdc-form-label">
            disabled=
            {true} Select Label
          </label>
          <div className="wdc-form-field">
            <select
              className="wdc-form-select"
              id="select-disabled={true}"
              defaultValue=""
              disabled={true}
            >
              <option disabled={true} value="">
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox"
              id="checkbox-disabled={true}"
              disabled={true}
            />
            <label htmlFor="checkbox-disabled={true}" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox"
              id="checkbox-disabled={true}-checked"
              defaultChecked={true}
              readOnly={true}
              disabled={true}
            />
            <label htmlFor="checkbox-checked-disabled={true}-checked" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio"
              name="radio"
              id="radio-disabled={true}"
              disabled={true}
            />
            <label htmlFor="radio-disabled={true}" className="wdc-form-label">
              Option - disabled=
              {true}
            </label>
          </div>
        </div>
      </div>

      <h2>
        disabled=
        {true} with class
      </h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <label
            htmlFor="textinput-disabled={true}-class"
            className="wdc-form-label wdc-form-label-required"
          >
            disabled=
            {true} Input Label
          </label>
          <div className="wdc-form-field">
            <input
              type="text"
              className="wdc-form-textinput wdc-form-disabled={true}"
              placeholder="Here's a placeholder"
              id="textinput-disabled={true}-class"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="textarea-disabled={true}-class" className="wdc-form-label">
            disabled=
            {true} Textarea Label
          </label>
          <div className="wdc-form-field">
            <textarea
              className="wdc-form-textarea wdc-form-disabled={true}"
              placeholder="Here's a placeholder"
              id="textarea-disabled={true}-class"
            />
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <label htmlFor="select-disabled={true}-class" className="wdc-form-label">
            disabled=
            {true} Select Label
          </label>
          <div className="wdc-form-field">
            <select
              className="wdc-form-select wdc-form-disabled={true}"
              id="select-disabled={true}-class"
              defaultValue=""
            >
              <option disabled={true} value="">
                Select an option
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-disabled={true}"
              id="checkbox-disabled={true}-class"
            />
            <label htmlFor="checkbox-disabled={true}-class" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-disabled={true}"
              id="checkbox-checked-disabled={true}-class"
              defaultChecked={true}
              readOnly={true}
            />
            <label htmlFor="checkbox-checked-disabled={true}-class" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio wdc-form-disabled={true}"
              name="radio"
              id="radio-disabled={true}-class"
            />
            <label htmlFor="radio-disabled={true}-class" className="wdc-form-label">
              Option - disabled=
              {true}
            </label>
          </div>
        </div>
      </div>

      <h2>Checked</h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox"
              id="checkbox-checked"
              defaultChecked={true}
            />
            <label htmlFor="checkbox-checked" className="wdc-form-label">
              Checked Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox"
              id="checkbox-checked-disabled={true}"
              defaultChecked={true}
              readOnly={true}
              disabled={true}
            />
            <label htmlFor="checkbox-checked-disabled={true}" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio"
              name="radio"
              id="radio-checked"
              defaultChecked={true}
            />
            <label htmlFor="radio-checked" className="wdc-form-label">
              Option - disabled=
              {true}
            </label>
          </div>
        </div>
      </div>

      <h2>Checked with class</h2>
      <div className="wdc-form wdc-form-inline-labels">
        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-checked"
              id="checkbox-checked-class"
            />
            <label htmlFor="checkbox-checked-class" className="wdc-form-label">
              Checked Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper">
          <div className="wdc-form-field">
            <input
              type="checkbox"
              className="wdc-form-checkbox wdc-form-checked"
              id="checkbox-checked-class-disabled={true}"
              readOnly={true}
              disabled={true}
            />
            <label htmlFor="checkbox-checked-class-disabled={true}" className="wdc-form-label">
              disabled=
              {true} Checkbox Label
            </label>
          </div>
        </div>

        <div className="wdc-form-field-wrapper wdc-form-group">
          <label htmlFor="radio" className="wdc-form-label">
            Radio Select Label
          </label>
          <div className="wdc-form-field">
            <input
              type="radio"
              className="wdc-form-radio wdc-form-checked"
              name="radio"
              id="radio-checked-class"
            />
            <label htmlFor="radio-checked-class" className="wdc-form-label">
              Option - Checked
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Errors', () => (
    <div className="story">
      <div className="wdc-form">{errorFields}</div>
    </div>
  ))
  .add('Errors w/ Inline Labels', () => (
    <div className="story">
      <div className="wdc-form wdc-form-inline-labels">{errorFields}</div>
    </div>
  ));
