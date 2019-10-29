/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Panel, PanelDirection, PanelHeader} from '../index';
import README from '../README.md';
import {spacing} from '@workday/canvas-kit-react-core';

// Panel Open Direction Knob
const label = 'Open Direction';
const options = {
  left: PanelDirection.Left,
  right: PanelDirection.Right,
};
const defaultValue = PanelDirection.Left;

// Panel show inverse icon Knob
const showInverselabel = 'Show Inverse Icon';
const showInverseIconDefaultValue = false;

// Panel header color
const headerColor = 'Header Background Color';
const headerColorDefaultValue = '#f6f7f8';

const headerTitle = 'Title';
const title = 'Panel Header';

const showDropShadowLabel = 'Show Drop Shadow';
const showDropShadow = true;

storiesOf('Labs/Panel/React', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel openDirection={PanelDirection.Left} padding={spacing.s}>
          <div style={{fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </div>
        </Panel>
      </div>
    </div>
  ))
  .add('With Header', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel
          header={<PanelHeader onClose={action('onClose callback')} title={'Panel Header'} />}
          openDirection={PanelDirection.Left}
          padding={spacing.l}
          showDropShadow={true}
        ></Panel>
      </div>
    </div>
  ))
  .add('Configurable', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel
          header={
            <PanelHeader
              headerColor={text(headerColor, headerColorDefaultValue)}
              showInverseButton={boolean(showInverselabel, showInverseIconDefaultValue)}
              onClose={action('onClose callback')}
              title={text(headerTitle, title)}
            />
          }
          openDirection={select(label, options, defaultValue)}
          padding={spacing.l}
          showDropShadow={boolean(showDropShadowLabel, showDropShadow)}
        ></Panel>
      </div>
    </div>
  ));
