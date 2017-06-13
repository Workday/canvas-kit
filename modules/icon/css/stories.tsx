import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
// @ts-ignore
import initializeIcons from './lib/canvas-kit-css-icon';

class IconDemo extends Component {
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

storiesOf('CSS/Icon', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <IconDemo />
    </div>
  ));
