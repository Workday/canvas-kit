/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import README from '../lib/theming/README.md';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';
import {rewind30Icon, fastForward15Icon, mediaPauseIcon} from '@workday/canvas-system-icons-web';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {Card} from '@workday/canvas-kit-react-card';

const commonIconButtonProps: Pick<IconButtonProps, 'aria-label' | 'title' | 'icon'> = {
  'aria-label': 'Activity Stream',
  title: 'Activity Stream',
};

storiesOf('Tokens|Common/Theming', module)
  .addDecorator(withReadme(README))
  .add('Direction', () => (
    <div className="story">
      <section className="story">
        <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
          <Card heading="مشغل وسائط" style={{width: '186px'}}>
            <CanvasProvider theme={{canvas: {direction: ContentDirection.LTR}}}>
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={rewind30Icon}
              />
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={mediaPauseIcon}
              />
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={fastForward15Icon}
              />
            </CanvasProvider>
          </Card>
        </CanvasProvider>
      </section>
    </div>
  ));
