import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {css} from 'emotion';
import {colors} from '../../core/react/index';
// @ts-ignore
import initializeIcons from './lib/canvas-kit-css-icon';

const containerStyle = css({
  margin: '0 !important',

  '> *': {
    margin: '12px',
  },
});

class OldIconDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return (
      <div>
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-fill-color="blueberry"
          data-accent-color="blueberry"
          data-background-color="transparent"
        />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-fill-color="cinnamon300"
          data-accent-color="cinnamon300"
          data-background-color="transparent"
        />
        <i className="wdc-icon" data-icon="activityStream" data-category="system" />
        <i className="wdc-icon" data-icon="apple" data-category="accent" data-color="chiliMango" />
        <i className="wdc-icon" data-icon="rocket" data-category="applet" data-hue="cinnamon" />
      </div>
    );
  }
}

class IconDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return <div className={containerStyle}>{this.props.children}</div>;
  }
}

storiesOf('CSS/Icon', module)
  .addDecorator(withReadme(README))
  .add('Accent Icon', () => (
    <div className="story">
      <IconDemo>
        <i className="wdc-icon" data-icon="shield" data-category="accent" />
        <i
          className="wdc-icon"
          data-icon="shield"
          data-category="accent"
          data-color="pomegranate500"
        />
        <span
          style={{
            backgroundColor: colors.blueberry500,
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          <i
            className="wdc-icon"
            data-icon="shield"
            data-category="accent"
            data-color="frenchVanilla100"
            data-transparent="true"
          />
        </span>
        <br />
        <i className="wdc-icon" data-icon="shield" data-category="accent" data-size="80" />
      </IconDemo>
    </div>
  ))
  .add('Applet Icon', () => (
    <div className="story">
      <IconDemo>
        <i className="wdc-icon" data-icon="benefits" data-category="applet" />
        <i
          className="wdc-icon"
          data-icon="benefits"
          data-category="applet"
          data-color="pomegranate"
        />
        <br />
        <i className="wdc-icon" data-icon="benefits" data-category="applet" data-size="60" />
      </IconDemo>
    </div>
  ))
  .add('System Icon', () => (
    <div className="story">
      <IconDemo>
        <i className="wdc-icon" data-icon="activityStream" data-category="system" />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-fill-color="blueberry500"
          data-accent-color="blueberry500"
        />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-fill-color="blueberry500"
          data-accent-color="frenchVanilla100"
          data-background-color="blueberry500"
        />
        <br />
        <i className="wdc-icon" data-icon="activityStream" data-category="system" data-size="48" />
      </IconDemo>
    </div>
  ))
  .add('All', () => (
    <div className="story">
      <OldIconDemo />
    </div>
  ));
