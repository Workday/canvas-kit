/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Panel, PanelDirection, PanelHeader} from '../index';
import README from '../README.md';
import {spacing} from '@workday/canvas-kit-react-core';

storiesOf('Labs/Panel', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel openDirection={PanelDirection.Left} padding={spacing.s}></Panel>
      </div>
    </div>
  ))
  .add('With Header', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel
          header={
            <PanelHeader
              onClose={() => console.warn('close clicked')}
              headerTitle={'Panel Header'}
            />
          }
          openDirection={PanelDirection.Left}
          padding={spacing.l}
          showDropShadow={true}
        ></Panel>
      </div>
    </div>
  ));
