/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Panel, PanelDirection} from '../index';
import README from '../README.md';
import {spacing} from '@workday/canvas-kit-react-core';
import {xIcon} from '@workday/canvas-system-icons-web';

storiesOf('Labs/Panel', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Panel
          openDirection={PanelDirection.Left}
          padding={spacing.l}
          showHeader={true}
          showDropShadow={true}
          headerActionEl={<div>hello</div>}
          icon={xIcon}
          headerTitle={'Panel Title'}
        ></Panel>
      </div>
    </div>
  ));
