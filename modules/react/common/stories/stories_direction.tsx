/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import README from '../lib/theming/README.md';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {rewind30Icon, fastForward15Icon, mediaPauseIcon} from '@workday/canvas-system-icons-web';
import {IconButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';

storiesOf('Tokens/Common/Theming', module)
  .addDecorator(withReadme(README))
  .add('Direction', () => (
    <div className="story">
      <section className="story">
        <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
          <Card heading="مشغل وسائط" style={{width: '186px'}}>
            <CanvasProvider theme={{canvas: {direction: ContentDirection.LTR}}}>
              <IconButton aria-label="Activity Stream" size="medium" icon={rewind30Icon} />
              <IconButton aria-label="Activity Stream" size="medium" icon={mediaPauseIcon} />
              <IconButton aria-label="Activity Stream" size="medium" icon={fastForward15Icon} />
            </CanvasProvider>
          </Card>
        </CanvasProvider>
      </section>
    </div>
  ));
