import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import './index.scss';
// @ts-ignore
import initializeIcons from '../icon/lib/canvas-kit-css-icon';

class WithIconsDemo extends Component {
  componentDidMount() {
    initializeIcons();
  }

  render() {
    return (
      <div className="wdc-type">
        <div className="wdc-menu" style={{width: '250px'}} role="menu" aria-label="Menu">
          <ul>
            <li role="menuitem" className="wdc-menu-item-focused">
              <i className="wdc-icon" data-icon="uploadCloud" data-category="system" />
              <span className="wdc-menu-item-label">First Item</span>
            </li>
            <li role="menuitem">
              <i className="wdc-icon" data-icon="setup" data-category="system" />
              <span className="wdc-menu-item-label">
                Second Item (with a really really really long label)
              </span>
            </li>
            <li role="menuitem" className="wdc-menu-item-disabled" aria-disabled="true">
              <i className="wdc-icon" data-icon="uploadCloud" data-category="system" />
              <span className="wdc-menu-item-label">Third Item (disabled)</span>
              <i className="wdc-icon" data-icon="extLink" data-category="system" />
            </li>
            <li role="menuitem">
              <i className="wdc-icon" data-icon="user" data-category="system" />
            </li>
            <hr role="separator" />
            <li role="menuitem">
              <i className="wdc-icon" data-icon="user" data-category="system" />
              <span className="wdc-menu-item-label">Fifth Item (with divider)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

storiesOf('Components/Popups/Menu/CSS', module)
  .addParameters({ReadmePath: 'css/menu'})
  .add('Default', () => (
    <div className="story">
      <div className="wdc-type">
        <div className="wdc-menu wdc-menu-grow" role="menu" aria-label="Menu">
          <ul>
            <li role="menuitem" className="wdc-menu-item-focused">
              <a href="#">First Item</a>
            </li>
            <li role="menuitem">Second Item (with a really really really long label)</li>
            <li role="menuitem" className="wdc-menu-item-disabled" aria-disabled="true">
              Third Item (disabled)
            </li>
            <li role="menuitem">
              <em>
                Fourth Item (<b>with markup</b>)
              </em>
            </li>
            <hr role="separator" />
            <li role="menuitem">Fifth Item (with divider)</li>
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
