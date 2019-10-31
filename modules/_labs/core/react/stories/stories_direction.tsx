/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Banner} from '@workday/canvas-kit-react-banner';

import README from '../lib/theming/README.md';

import {
  CanvasProvider,
  createCanvasTheme,
  ContentDirection,
} from '@workday/canvas-kit-labs-react-core';

const handleBannerClick = (e: React.SyntheticEvent) => {
  alert(`onClick triggered`);
};

storiesOf('Labs/Core/React', module)
  .addDecorator(withReadme(README))
  .add('Direction', () => (
    <div className="story">
      <section>
        <CanvasProvider theme={createCanvasTheme({direction: ContentDirection.RTL})}>
          <Banner
            onClick={handleBannerClick}
            label="3 Alerts"
            actionText="View All"
            error={Banner.ErrorType.Alert}
            variant={Banner.Variant.Full}
          />
        </CanvasProvider>
      </section>
    </div>
  ));
