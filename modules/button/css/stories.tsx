/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {Component} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

// @ts-ignore
import initializeIcons from '../../icon/css/lib/canvas-kit-css-icon';

const blueBackground = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '12px',
  maxWidth: 'max-content',
  borderRadius: '4px',
  button: {
    margin: '12px',
  },
});

const spaceButton = css({
  button: {
    marginRight: '12px',
  },
});

class IconDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return <div css={spaceButton}>{this.props.children}</div>;
  }
}

storiesOf('Components|Buttons/Button/CSS', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <section>
        <h3>Large Primary</h3>
        <IconDemo>
          <button className="wdc-btn wdc-btn-primary wdc-btn-size-l">Primary</button>
          <button className="wdc-btn wdc-btn-primary wdc-btn-size-l">
            <i className="wdc-icon" data-icon="activityStream" data-category="system" />
            Primary
          </button>
        </IconDemo>
        <button disabled={true} className="wdc-btn wdc-btn-primary wdc-btn-size-l">
          Primary Disabled
        </button>
        <button className="wdc-btn wdc-btn-primary wdc-btn-size-l wdc-btn-grow">
          Primary Grow
        </button>
      </section>

      <section>
        <h3>Medium Primary</h3>
        <IconDemo>
          <button className="wdc-btn wdc-btn-primary">Primary</button>
          <button className="wdc-btn wdc-btn-primary">
            <i className="wdc-icon" data-icon="edit" data-category="system" />
            Primary
          </button>
        </IconDemo>
        <button disabled={true} className="wdc-btn wdc-btn-primary">
          Primary Disabled
        </button>
      </section>

      <section>
        <h3>Small Primary</h3>
        <button className="wdc-btn wdc-btn-primary wdc-btn-size-s">Primary</button>
        <button disabled={true} className="wdc-btn wdc-btn-primary wdc-btn-size-s">
          Primary Disabled
        </button>
      </section>
    </div>
  ))
  .add('Secondary', () => (
    <div>
      <section>
        <h3>Large Secondary</h3>
        <IconDemo>
          <button className="wdc-btn wdc-btn-size-l">Secondary</button>
          <button className="wdc-btn wdc-btn-size-l">
            <i className="wdc-icon" data-icon="activityStream" data-category="system" />
            Secondary
          </button>
        </IconDemo>
        <button disabled={true} className="wdc-btn wdc-btn-size-l">
          Secondary Disabled
        </button>
      </section>

      <section>
        <h3>Medium Secondary</h3>
        <IconDemo>
          <button className="wdc-btn">Secondary</button>
          <button className="wdc-btn">
            <i className="wdc-icon" data-icon="edit" data-category="system" />
            Secondary
          </button>
        </IconDemo>
        <button disabled={true} className="wdc-btn">
          Secondary Disabled
        </button>
      </section>

      <section>
        <h3>Small Secondary</h3>
        <button className="wdc-btn wdc-btn-size-s">Secondary</button>
        <button disabled={true} className="wdc-btn wdc-btn-size-s">
          Secondary Disabled
        </button>
      </section>
    </div>
  ))
  .add('Delete', () => (
    <div>
      <section>
        <h3>Large Delete</h3>
        <button className="wdc-btn wdc-btn-delete wdc-btn-size-l">Delete</button>
        <button disabled={true} className="wdc-btn wdc-btn-delete wdc-btn-size-l">
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
        <button className="wdc-btn wdc-btn-delete wdc-btn-size-s">Delete</button>
        <button disabled={true} className="wdc-btn wdc-btn-delete wdc-btn-size-s">
          Delete Disabled
        </button>
      </section>
    </div>
  ));

storiesOf('Components|Buttons/Button/CSS/Dropdown', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <section>
        <h3>Primary Large</h3>
        <button
          className="wdc-btn wdc-btn-primary wdc-btn-size-l wdc-btn-dropdown"
          aria-haspopup="true"
        >
          Dropdown
        </button>
        <h3>Secondary Medium</h3>
        <button className="wdc-btn  wdc-btn-dropdown" aria-haspopup="true">
          Dropdown Secondary
        </button>
      </section>
    </div>
  ));

storiesOf('Components|Buttons/Button/CSS/Text', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Large</h3>
      <a href="#" className="wdc-btn-text">
        Text
      </a>
      <a className="wdc-btn-text wdc-btn-disabled">Text</a>
      <h3>Small</h3>
      <button className="wdc-btn-text wdc-btn-text-size-s">Text</button>
      <button disabled={true} className="wdc-btn-text wdc-btn-text-size-s">
        Text
      </button>
      <h3>All Caps</h3>
      <button className="wdc-btn-text wdc-btn-text-all-caps">All caps</button>
      <button disabled={true} className="wdc-btn-text wdc-btn-text-all-caps">
        All caps
      </button>
      <h3>Icons</h3>
      <IconDemo>
        <a href="#" className="wdc-btn-text">
          <i className="wdc-icon wdc-icon-position-left" data-icon="edit" data-category="system" />
          Left Icon Large
        </a>
        <a href="#" className="wdc-btn-text">
          Left Icon Large
          <i
            className="wdc-icon wdc-icon-position-right"
            data-icon="arrowRight"
            data-category="system"
          />
        </a>
      </IconDemo>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-text wdc-btn-text-inverse">Text</button>
        <button disabled={true} className="wdc-btn-text wdc-btn-text-inverse">
          Text
        </button>
      </div>

      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-text wdc-btn-text-inverse wdc-btn-text-size-s">Text</button>
        <button disabled={true} className="wdc-btn-text wdc-btn-text-inverse wdc-btn-text-size-s">
          Text
        </button>
      </div>
      <h3>All Caps Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-text wdc-btn-text-inverse wdc-btn-text-all-caps">
          All caps
        </button>
      </div>

      <h3>Icons Inverse</h3>
      <div css={blueBackground}>
        <IconDemo>
          <a href="#" className="wdc-btn-text wdc-btn-text-inverse">
            <i
              className="wdc-icon wdc-icon-position-left"
              data-icon="edit"
              data-category="system"
            />
            Left Icon Large
          </a>
          <a href="#" className="wdc-btn-text wdc-btn-text-inverse">
            Left Icon Large
            <i
              className="wdc-icon wdc-icon-position-right"
              data-icon="arrowRight"
              data-category="system"
            />
          </a>
        </IconDemo>
      </div>
    </div>
  ));

storiesOf('Components|Buttons/Button/CSS/Deprecated', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <button className="wdc-btn-deprecated wdc-btn-primary">Primary Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-primary">
        Primary Button
      </button>
      <h3>Medium Primary</h3>
      <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-m">Primary Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-m">
        Primary Button
      </button>
      <h3>Small Primary</h3>
      <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-s">Primary Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-s">
        Primary Button
      </button>
      <h3>Growing Primary</h3>
      <button className="wdc-btn-deprecated wdc-btn-primary wdc-btn-grow">
        Growing Primary Button
      </button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn-deprecated wdc-btn-primary" role="button">
        Primary
      </a>
      <a href="#" className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-m" role="button">
        Primary
      </a>
      <a href="#" className="wdc-btn-deprecated wdc-btn-primary wdc-btn-size-s" role="button">
        Primary
      </a>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <button className="wdc-btn-deprecated">Secondary Button</button>
      <button disabled={true} className="wdc-btn-deprecated">
        Secondary Button
      </button>
      <h3>Medium Secondary</h3>
      <button className="wdc-btn-deprecated wdc-btn-size-m">Secondary Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-size-m">
        Secondary Button
      </button>
      <h3>Small Secondary</h3>
      <button className="wdc-btn-deprecated wdc-btn-size-s">Secondary Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-size-s">
        Secondary Button
      </button>
      <h3>Growing Secondary</h3>
      <button className="wdc-btn-deprecated wdc-btn-grow">Growing Secondary Button</button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn-deprecated" role="button">
        Secondary
      </a>

      <a href="#" className="wdc-btn-deprecated wdc-btn-size-m" role="button">
        Secondary
      </a>

      <a href="#" className="wdc-btn-deprecated wdc-btn-size-s" role="button">
        Secondary
      </a>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <button className="wdc-btn-deprecated wdc-btn-delete">Delete Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-delete">
        Delete Button
      </button>
      <h3>Medium Delete</h3>
      <button className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-m">Delete Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-m">
        Delete Button
      </button>
      <h3>Small Delete</h3>
      <button className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-s">Delete Button</button>
      <button disabled={true} className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-s">
        Delete Button
      </button>
      <h3>Growing Delete</h3>
      <button className="wdc-btn-deprecated wdc-btn-delete wdc-btn-grow">
        Growing Delete Button
      </button>
      <h3>Links</h3>
      <a href="#" className="wdc-btn-deprecated wdc-btn-delete" role="button">
        Delete
      </a>

      <a href="#" className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-m" role="button">
        Delete
      </a>

      <a href="#" className="wdc-btn-deprecated wdc-btn-delete wdc-btn-size-s" role="button">
        Delete
      </a>
    </div>
  ))
  .add('Dropdown', () => (
    <div className="story">
      <section>
        <button className="wdc-btn-deprecated wdc-btn-dropdown">Dropdown</button>
      </section>
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
    </div>
  ));

storiesOf('Components|Buttons/Button/CSS/Icon Button', module)
  .addDecorator(withReadme(README))
  .add('Square', () => (
    <div className="story">
      <h3>Medium Square</h3>
      <button className="wdc-btn-icon-square" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button disabled={true} className="wdc-btn-icon-square" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Square</h3>
      <button className="wdc-btn-size-s wdc-btn-icon-square" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button
        disabled={true}
        className="wdc-btn-size-s wdc-btn-icon-square"
        aria-label="Activity Stream"
      >
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Square Filled', () => (
    <div className="story">
      <h3>Medium Filled Square</h3>
      <button className="wdc-btn-icon-square-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button disabled={true} className="wdc-btn-icon-square-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Filled Square</h3>
      <button className="wdc-btn-size-s wdc-btn-icon-square-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button
        disabled={true}
        className="wdc-btn-size-s wdc-btn-icon-square-filled"
        aria-label="Activity Stream"
      >
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Plain', () => (
    <div className="story">
      <h3>Medium Plain</h3>

      <button className="wdc-btn-icon-plain" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button disabled={true} className="wdc-btn-icon-plain" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>

      <h3>Small Plain</h3>

      <button className="wdc-btn-size-s wdc-btn-icon-plain" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button
        disabled={true}
        className="wdc-btn-size-s wdc-btn-icon-plain"
        aria-label="Activity Stream"
      >
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Circle', () => (
    <div className="story">
      <h3>Medium Circle</h3>
      <button className="wdc-btn-icon-circle" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button disabled={true} className="wdc-btn-icon-circle" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Circle</h3>
      <button className="wdc-btn-size-s wdc-btn-icon-circle" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button
        disabled={true}
        className="wdc-btn-size-s wdc-btn-icon-circle"
        aria-label="Activity Stream"
      >
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Circle Filled', () => (
    <div className="story">
      <h3>Medium Filled Circle</h3>
      <button className="wdc-btn-icon-circle-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button disabled={true} className="wdc-btn-icon-circle-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <h3>Small Filled Circle</h3>
      <button className="wdc-btn-size-s wdc-btn-icon-circle-filled" aria-label="Activity Stream">
        <SystemIcon icon={activityStreamIcon} />
      </button>
      <button
        disabled={true}
        className="wdc-btn-size-s wdc-btn-icon-circle-filled"
        aria-label="Activity Stream"
      >
        <SystemIcon icon={activityStreamIcon} />
      </button>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-icon-inverse" aria-label="Activity Stream">
          <SystemIcon icon={activityStreamIcon} />
        </button>
        <button disabled={true} className="wdc-btn-icon-inverse" aria-label="Activity Stream">
          <SystemIcon icon={activityStreamIcon} />
        </button>
      </div>
      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-size-s wdc-btn-icon-inverse" aria-label="Activity Stream">
          <SystemIcon icon={activityStreamIcon} />
        </button>
        <button
          disabled={true}
          className="wdc-btn-size-s wdc-btn-icon-inverse"
          aria-label="Activity Stream"
        >
          <SystemIcon icon={activityStreamIcon} />
        </button>
      </div>
    </div>
  ))
  .add('Inverse Filled', () => (
    <div className="story">
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <button className="wdc-btn-icon-inverse-filled" aria-label="Activity Stream">
          <SystemIcon icon={activityStreamIcon} />
        </button>
        <button
          disabled={true}
          className="wdc-btn-icon-circle wdc-btn-icon-inverse-filled"
          aria-label="Activity Stream"
        >
          <SystemIcon icon={activityStreamIcon} />
        </button>
      </div>
      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <button
          className="wdc-btn-size-s wdc-btn-icon-circle wdc-btn-icon-inverse-filled"
          aria-label="Activity Stream"
        >
          <SystemIcon icon={activityStreamIcon} />
        </button>
        <button
          disabled={true}
          className="wdc-btn-size-s wdc-btn-icon-circle wdc-btn-icon-inverse-filled"
          aria-label="Activity Stream"
        >
          <SystemIcon icon={activityStreamIcon} />
        </button>
      </div>
    </div>
  ));
