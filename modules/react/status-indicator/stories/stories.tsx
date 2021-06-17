/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

import StatusIndicator from '../index';
import README from '../README.md';

storiesOf('Components/Indicators/Status Indicator/React', module)
  .addParameters({component: StatusIndicator})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <StatusIndicator type={StatusIndicator.Type.Gray} label={'unpublished unpublished'} />
      <StatusIndicator
        type={StatusIndicator.Type.Gray}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'unpublished'}
      />
      <StatusIndicator type={StatusIndicator.Type.Orange} label={'submitted'} />
      <StatusIndicator
        type={StatusIndicator.Type.Orange}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'submitted'}
      />
      <StatusIndicator type={StatusIndicator.Type.Blue} label={'in progress'} />
      <StatusIndicator
        type={StatusIndicator.Type.Blue}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'in progress'}
      />
      <StatusIndicator type={StatusIndicator.Type.Green} label={'published'} />
      <StatusIndicator
        type={StatusIndicator.Type.Green}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'published'}
      />
      <StatusIndicator type={StatusIndicator.Type.Red} label={'failed'} />
      <StatusIndicator
        type={StatusIndicator.Type.Red}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'failed'}
      />
      <StatusIndicator type={StatusIndicator.Type.Transparent} label={'transparent'} />
    </div>
  ))
  .add('With Icon', () => (
    <div className="story">
      <StatusIndicator
        type={StatusIndicator.Type.Gray}
        label={'unpublished unpublished'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Gray}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'unpublished'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Orange}
        label={'submitted'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Orange}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'submitted'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Blue}
        label={'in progress'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Blue}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'in progress'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Green}
        label={'published'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Green}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'published'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator type={StatusIndicator.Type.Red} label={'failed'} icon={uploadCloudIcon} />
      <StatusIndicator
        type={StatusIndicator.Type.Red}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'failed'}
        icon={uploadCloudIcon}
      />
      <StatusIndicator
        type={StatusIndicator.Type.Transparent}
        label={'transparent'}
        icon={uploadCloudIcon}
      />
    </div>
  ));
