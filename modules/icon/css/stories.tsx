/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {Component} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {colors} from '../../core/react';
// @ts-ignore
import initializeIcons from './lib/canvas-kit-css-icon';
import './index.scss';

const containerStyle = css({
  margin: '0 !important',

  '> *': {
    margin: '12px',
  },
});

class IconDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return <div css={containerStyle}>{this.props.children}</div>;
  }
}

storiesOf('Tokens/Icon/CSS', module)
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
          data-color="blueberry500"
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
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-hover-color="cinnamon300"
        />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-color="blueberry500"
          data-hover-fill-color="chiliMango200"
          data-hover-accent-color="chiliMango400"
        />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-fill-color="blueberry500"
          data-accent-color="frenchVanilla100"
          data-background-color="blueberry500"
          data-hover-fill-color="cantaloupe500"
          data-hover-accent-color="frenchVanilla100"
          data-hover-background-color="cantaloupe500"
        />
        <br />
        <i className="wdc-icon" data-icon="activityStream" data-category="system" data-size="48" />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-circle-background="true"
        />
        <i
          className="wdc-icon"
          data-icon="activityStream"
          data-category="system"
          data-circle-background="blueberry400"
        />
      </IconDemo>
    </div>
  ));
