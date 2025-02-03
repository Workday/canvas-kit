import {Meta} from '@storybook/react';
import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {fastForward15Icon, mediaPauseIcon, rewind30Icon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Features/Theming',
} satisfies Meta;

export const Direction = () => (
  <div className="story">
    <section className="story">
      <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
        <Card style={{width: '186px'}}>
          <Card.Heading>مشغل وسائط</Card.Heading>
          <Card.Body>
            <CanvasProvider theme={{canvas: {direction: ContentDirection.LTR}}}>
              <TertiaryButton aria-label="Activity Stream" size="medium" icon={rewind30Icon} />
              <TertiaryButton aria-label="Activity Stream" size="medium" icon={mediaPauseIcon} />
              <TertiaryButton aria-label="Activity Stream" size="medium" icon={fastForward15Icon} />
            </CanvasProvider>
          </Card.Body>
        </Card>
      </CanvasProvider>
    </section>
  </div>
);
