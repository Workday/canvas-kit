import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {relatedActionsIcon, editIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <section>
        <h3>Large Primary</h3>
        <button className="wdc-btn wdc-btn-primary wdc-btn-large">Primary</button>
        <button disabled={true} className="wdc-btn wdc-btn-primary wdc-btn-large">
          Primary Disbaled
        </button>
      </section>

      <section>
        <h3>Medium Primary</h3>
        <button className="wdc-btn wdc-btn-primary">Primary</button>
        <button disabled={true} className="wdc-btn wdc-btn-primary">
          Primary Disabled
        </button>
      </section>

      <section>
        <h3>Small Primary</h3>
        <button className="wdc-btn wdc-btn-primary wdc-btn-small">Primary</button>
        <button disabled={true} className="wdc-btn wdc-btn-primary wdc-btn-small">
          Primary Disabled
        </button>
      </section>

      <section>
        <h3>Large Secondary</h3>
        <button className="wdc-btn wdc-btn-large">Secondary</button>
        <button disabled={true} className="wdc-btn wdc-btn-large">
          Secondary Disabled
        </button>
      </section>

      <section>
        <h3>Medium Secondary</h3>
        <button className="wdc-btn">Secondary</button>
        <button disabled={true} className="wdc-btn">
          Secondary Disabled
        </button>
      </section>

      <section>
        <h3>Small Secondary</h3>
        <button className="wdc-btn wdc-btn-small">Secondary</button>
        <button disabled={true} className="wdc-btn wdc-btn-small">
          Secondary Disabled
        </button>
      </section>

      <section>
        <h3>Large Delete</h3>
        <button className="wdc-btn wdc-btn-delete wdc-btn-large">Delete</button>
        <button disabled={true} className="wdc-btn wdc-btn-delete wdc-btn-large">
          Delete Disabled
        </button>
      </section>

      <section>
        <h3>Medium Delete</h3>
        <button className="wdc-btn wdc-btn-delete">Delete</button>
        <button disabled={true} className="wdc-btn wdc-btn-delete">
          Delete Disabled
        </button>
      </section>

      <section>
        <h3>Small Delete</h3>
        <button className="wdc-btn wdc-btn-delete wdc-btn-small">Delete</button>
        <button disabled={true} className="wdc-btn wdc-btn-delete wdc-btn-small">
          Delete Disabled
        </button>
      </section>
    </div>
  ))
  .add('Deprecated', () => (
    <div className="story">
      <section>
        <button className="wdc-btn-deprecated wdc-btn-primary">Primary</button>
        <button className="wdc-btn-deprecated">Secondary</button>
        <button className="wdc-btn-deprecated wdc-btn-delete">Delete</button>
      </section>

      <section>
        <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-medium">Primary</button>
        <button className="wdc-btn-deprecated wdc-btn-medium">Secondary</button>
        <button className="wdc-btn-deprecated wdc-btn-delete wdc-btn-medium">Delete</button>
      </section>

      <section>
        <button className="wdc-btn-deprecated wdc-btn-small">Small Button</button>
      </section>

      <section>
        <button className="wdc-btn-deprecated wdc-btn-icon">
          <SystemIcon icon={editIcon} />
        </button>
      </section>

      <section>
        <button className="wdc-btn-deprecated wdc-btn-dropdown">Dropdown</button>
      </section>

      <a href="#" className="wdc-btn wdc-btn-delete wdc-btn wdc-btn-size-s" role="button">
        Delete
      </a>
    </div>
  ))
  .add('Split', () => (
    <div className="story">
      <section>
        <div className="wdc-btn-split">
          <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-split-text">
            Split Button
          </button>
          <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-split-icon" />
        </div>

        <div className="wdc-btn-split">
          <button className="wdc-btn-deprecated wdc-btn-split-text">Split Button</button>
          <button className="wdc-btn-deprecated wdc-btn-split-icon" />
        </div>
      </section>

      <section>
        <button className="wdc-btn-deprecated wdc-btn-icon-rounded">
          <SystemIcon icon={relatedActionsIcon} />
        </button>
      </section>

      <h2>Links</h2>
      <section>
        <a href="#" className="wdc-btn-deprecated wdc-btn-primary" role="button">
          Primary
        </a>
        <a href="#" className="wdc-btn-deprecated" role="button">
          Secondary
        </a>
        <a href="#" className="wdc-btn-deprecated wdc-btn-delete" role="button">
          Delete
        </a>
      </section>

      <section>
        <a href="#" className="wdc-btn-deprecated wdc-btn-primary wdc-btn-medium" role="button">
          Primary
        </a>
        <a href="#" className="wdc-btn-deprecated wdc-btn-medium" role="button">
          Secondary
        </a>
        <a href="#" className="wdc-btn-deprecated wdc-btn-delete wdc-btn-medium" role="button">
          Delete
        </a>
      </section>
    </div>
  ));

storiesOf('CSS/Button/Dropdown', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section>
        <button className="wdc-btn wdc-btn-dropdown" aria-haspopup="true">
          Dropdown
        </button>
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
          <button className="wdc-btn wdc-btn-primary wdc-btn-split-icon" aria-haspopup="true" />
        </div>

        <div className="wdc-btn-split">
          <button className="wdc-btn wdc-btn-split-text">Split Button</button>
          <button className="wdc-btn wdc-btn-split-icon" aria-haspopup="true" />
        </div>
      </section>
    </div>
  ));
