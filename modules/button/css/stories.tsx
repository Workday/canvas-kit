import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {editIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <section>
        <button className="wdc-btn wdc-btn-primary">Primary</button>
        <button className="wdc-btn">Secondary</button>
        <button className="wdc-btn wdc-btn-delete">Delete</button>
      </section>

      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium">Primary</button>
        <button className="wdc-btn wdc-btn-medium">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium">Delete</button>
      </section>

      <section>
        <button className="wdc-btn wdc-btn-small">Small Button</button>
      </section>

      <section>
        <button className="wdc-btn wdc-btn-icon">
          <SystemIcon icon={editIcon} />
        </button>
      </section>

      <section>
        <button className="wdc-btn wdc-btn-dropdown">Dropdown</button>
      </section>

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

      <section>
        <button className="wdc-btn wdc-btn-icon-rounded">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Links</h2>
      <section>
        <a href="#" className="wdc-btn wdc-btn-primary" role="button">
          Primary
        </a>
        <a href="#" className="wdc-btn" role="button">
          Secondary
        </a>
        <a href="#" className="wdc-btn wdc-btn-delete" role="button">
          Delete
        </a>
      </section>

      <section>
        <a href="#" className="wdc-btn wdc-btn-primary wdc-btn-medium" role="button">
          Primary
        </a>
        <a href="#" className="wdc-btn wdc-btn-medium" role="button">
          Secondary
        </a>
        <a href="#" className="wdc-btn wdc-btn-delete wdc-btn-medium" role="button">
          Delete
        </a>
      </section>

      <section>
        <a href="#" className="wdc-btn wdc-btn-small" role="button">
          Small Button
        </a>
      </section>
    </div>
  ))
  .add('States', () => (
    <div className="story">
      <h2>Hover</h2>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-hover">Primary</button>
        <button className="wdc-btn wdc-btn-hover">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-hover">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium wdc-btn-hover">Primary</button>
        <button className="wdc-btn wdc-btn-medium wdc-btn-hover">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium wdc-btn-hover">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-small wdc-btn-hover">Small Button</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon wdc-btn-hover">
          <SystemIcon icon={editIcon} />
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-dropdown wdc-btn-hover">Dropdown</button>
      </section>
      <section>
        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-split-text wdc-btn-hover">Split Button</button>
          <button className="wdc-btn wdc-btn-split-icon" />
        </div>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded wdc-btn-hover">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Focus</h2>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-focus">Primary</button>
        <button className="wdc-btn wdc-btn-focus">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-focus">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium wdc-btn-focus">Primary</button>
        <button className="wdc-btn wdc-btn-medium wdc-btn-focus">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium wdc-btn-focus">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-small wdc-btn-focus">Small Button</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon wdc-btn-focus">
          <SystemIcon icon={editIcon} />
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-dropdown wdc-btn-focus">Dropdown</button>
      </section>
      <section>
        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-split-text wdc-btn-focus">Split Button</button>
          <button className="wdc-btn wdc-btn-split-icon" />
        </div>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded wdc-btn-focus">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Active</h2>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-active">Primary</button>
        <button className="wdc-btn wdc-btn-active">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-active">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium wdc-btn-active">Primary</button>
        <button className="wdc-btn wdc-btn-medium wdc-btn-active">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium wdc-btn-active">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-small wdc-btn-active">Small Button</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon wdc-btn-active">
          <SystemIcon icon={editIcon} />
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-dropdown wdc-btn-active">Dropdown</button>
      </section>
      <section>
        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-split-text wdc-btn-active">Split Button</button>
          <button className="wdc-btn wdc-btn-split-icon" />
        </div>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded wdc-btn-active">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Disabled</h2>
      <section>
        <button className="wdc-btn wdc-btn-primary" disabled={true}>
          Primary
        </button>
        <button className="wdc-btn" disabled={true}>
          Secondary
        </button>
        <button className="wdc-btn wdc-btn-delete" disabled={true}>
          Delete
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium" disabled={true}>
          Primary
        </button>
        <button className="wdc-btn wdc-btn-medium" disabled={true}>
          Secondary
        </button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium" disabled={true}>
          Delete
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon" disabled={true}>
          <SystemIcon icon={editIcon} />
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded" disabled={true}>
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Disabled using class</h2>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-disabled">Primary</button>
        <button className="wdc-btn wdc-btn-disabled">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-disabled">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-primary wdc-btn-medium wdc-btn-disabled">Primary</button>
        <button className="wdc-btn wdc-btn-medium wdc-btn-disabled">Secondary</button>
        <button className="wdc-btn wdc-btn-delete wdc-btn-medium wdc-btn-disabled">Delete</button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon wdc-btn-disabled">
          <SystemIcon icon={editIcon} />
        </button>
      </section>
      <section>
        <button className="wdc-btn wdc-btn-icon-rounded wdc-btn-disabled">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>
    </div>
  ));
