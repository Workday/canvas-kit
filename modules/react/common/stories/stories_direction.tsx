import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {rewind30Icon, fastForward15Icon, mediaPauseIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';

storiesOf('Tokens/Common/Theming', module)
  .addParameters({ReadmePath: 'react/common'})
  .add('Direction', () => (
    <div className="story">
      <section className="story">
        <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
          <Card style={{width: '186px'}}>
            <Card.Heading>مشغل وسائط</Card.Heading>
            <Card.Body>
              <CanvasProvider theme={{canvas: {direction: ContentDirection.LTR}}}>
                <TertiaryButton aria-label="Activity Stream" size="medium" icon={rewind30Icon} />
                <TertiaryButton aria-label="Activity Stream" size="medium" icon={mediaPauseIcon} />
                <TertiaryButton
                  aria-label="Activity Stream"
                  size="medium"
                  icon={fastForward15Icon}
                />
              </CanvasProvider>
            </Card.Body>
          </Card>
        </CanvasProvider>
      </section>
    </div>
  ));
