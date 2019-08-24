import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
// @ts-ignore
import initializeIcons from '../../icon/css/lib/canvas-kit-css-icon';

class WithIconsDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return (
      <div className="wdc-type">
        <div className="wdc-menu" style={{width: '250px'}}>
          <ul>
            <li className="wdc-menu-item-focused">
              <i className="wdc-icon" data-icon="uploadCloud" data-category="system" />
              <span className="wdc-menu-item-label">First Item</span>
            </li>
            <li>
              <i className="wdc-icon" data-icon="setup" data-category="system" />
              <span className="wdc-menu-item-label">
                Second Item with really really really long label
              </span>
            </li>
            <li className="wdc-menu-item-disabled">
              <i className="wdc-icon" data-icon="uploadCloud" data-category="system" />
              <span className="wdc-menu-item-label">Third Item (disabled)</span>
              <i className="wdc-icon" data-icon="extLink" data-category="system" />
            </li>
            <li>
              <i className="wdc-icon" data-icon="user" data-category="system" />
            </li>
            <hr />
            <li>
              <i className="wdc-icon" data-icon="user" data-category="system" />
              <span className="wdc-menu-item-label">Fifth Item (with divider)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

storiesOf('CSS/Menu', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div className="wdc-type">
        <div className="wdc-menu wdc-menu-grow">
          <ul>
            <li className="wdc-menu-item-focused">
              <a href="#">First Item</a>
            </li>
            <li>Second Item with really really really long label</li>
            <li className="wdc-menu-item-disabled">Third Item (disabled)</li>
            <li>
              <em>
                Fourth Item (<b>with markup</b>)
              </em>
            </li>
            <hr />
            <li>Fifth Item (with divider)</li>
          </ul>
        </div>
      </div>
    </div>
  ))
  .add('With Icons', () => (
    <div className="story">
      <WithIconsDemo />
    </div>
  ));
