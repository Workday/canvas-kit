import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Button', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <button className="wdc-btn wdc-btn-primary">Primary Button</button>
      <button className="wdc-btn wdc-btn-primary wdc-btn-disabled">Primary Button</button>
      <h3>Medium Primary</h3>
      <button className="wdc-btn wdc-btn-primary wdc-btn-medium">Primary Button</button>
      <button className="wdc-btn wdc-btn-primary wdc-btn-medium wdc-btn-disabled">
        Primary Button
      </button>
      <h3>Small Primary</h3>
      <button className="wdc-btn wdc-btn-primary wdc-btn-small">Primary Button</button>
      <button className="wdc-btn wdc-btn-primary wdc-btn-small wdc-btn-disabled">
        Primary Button
      </button>
      <h3>Growing Primary</h3>
      <button className="wdc-btn wdc-btn-primary wdc-btn-grow">Growing Primary Button</button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn wdc-btn-primary" role="button">
        Primary
      </a>
      <a href="#" className="wdc-btn wdc-btn-primary wdc-btn-medium" role="button">
        Primary
      </a>
      <a href="#" className="wdc-btn wdc-btn-primary wdc-btn-small" role="button">
        Primary
      </a>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <button className="wdc-btn">Secondary Button</button>
      <button className="wdc-btn wdc-btn-disabled">Secondary Button</button>
      <h3>Medium Secondary</h3>
      <button className="wdc-btn wdc-btn-medium">Secondary Button</button>
      <button className="wdc-btn wdc-btn-medium wdc-btn-disabled">Secondary Button</button>
      <h3>Small Secondary</h3>
      <button className="wdc-btn wdc-btn-small">Secondary Button</button>
      <button className="wdc-btn wdc-btn-small wdc-btn-disabled">Secondary Button</button>
      <h3>Growing Secondary</h3>
      <button className="wdc-btn wdc-btn-grow">Growing Secondary Button</button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn" role="button">
        Secondary
      </a>

      <a href="#" className="wdc-btn wdc-btn-medium" role="button">
        Secondary
      </a>

      <a href="#" className="wdc-btn wdc-btn-small" role="button">
        Secondary
      </a>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <button className="wdc-btn wdc-btn-delete">Delete Button</button>
      <button className="wdc-btn wdc-btn-delete wdc-btn-disabled">Delete Button</button>
      <h3>Medium Delete</h3>
      <button className="wdc-btn wdc-btn-delete wdc-btn-medium">Delete Button</button>
      <button className="wdc-btn wdc-btn-delete wdc-btn-medium wdc-btn-disabled">
        Delete Button
      </button>
      <h3>Small Delete</h3>
      <button className="wdc-btn wdc-btn-delete wdc-btn-small">Delete Button</button>
      <button className="wdc-btn wdc-btn-delete wdc-btn-small wdc-btn-disabled">
        Delete Button
      </button>
      <h3>Growing Delete</h3>
      <button className="wdc-btn wdc-btn-delete wdc-btn-grow">Growing Delete Button</button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn wdc-btn-delete" role="button">
        Delete
      </a>

      <a href="#" className="wdc-btn wdc-btn-delete wdc-btn-medium" role="button">
        Delete
      </a>

      <a href="#" className="wdc-btn wdc-btn-delete wdc-btn wdc-btn-small" role="button">
        Delete
      </a>
    </div>
  ));

storiesOf('CSS/Button/Icon Button', module)
  .addDecorator(withReadme(README))
  .add('Square', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-square">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-square wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Square</h3>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-square">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-square wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Square Filled', () => (
    <div className="story">
      <h3>Medium Filled Square</h3>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-square-filled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-square-filled wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Filled Square</h3>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-square-filled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-square-filled wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Circle', () => (
    <div className="story">
      <h3>Medium Circle</h3>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-circle">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-circle wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Circle</h3>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-circle">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-circle wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Circle Filled', () => (
    <div className="story">
      <h3>Medium Filled Circle</h3>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-circle-filled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-medium wdc-btn-icon-circle-filled wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Filled Circle</h3>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-circle-filled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button className="wdc-btn wdc-btn-small wdc-btn-icon-circle-filled wdc-btn-disabled">
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ));

storiesOf('CSS/Button/Rounded', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>
    </div>
  ));

storiesOf('CSS/Button/Dropdown', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section>
        <button className="wdc-btn wdc-btn-dropdown">Dropdown</button>
      </section>
    </div>
  ));

storiesOf('CSS/Button/Split', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section>
        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-primary wdc-btn-split-text">Split Button</button>
          <button className="wdc-btn wdc-btn-primary wdc-btn-split-icon" />
        </div>

        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-split-text">Split Button</button>
          <button className="wdc-btn wdc-btn-split-icon" />
        </div>
      </section>
    </div>
  ));
