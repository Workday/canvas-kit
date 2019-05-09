/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator, controlComponent} from '../../utils/storybook';

import {TextArea} from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Text Area', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Area'))
  .addDecorator(withReadme(README))
  .add('Plain', () => controlComponent(<TextArea id="input-plain" />))
  .add('With placeholder', () =>
    controlComponent(<TextArea id="input-placeholder" placeholder="Placeholder" />)
  )
  .add('Disabled', () => controlComponent(<TextArea id="input-disabled" disabled={true} />))
  .add('Disabled with placeholder', () =>
    controlComponent(
      <TextArea id="input-disabled-placeholder" disabled={true} placeholder="Placeholder" />
    )
  )
  .add('Alert', () =>
    controlComponent(<TextArea id="input-alert" error={TextArea.ErrorType.Alert} value="Alert" />)
  )
  .add('Error', () =>
    controlComponent(<TextArea id="input-error" error={TextArea.ErrorType.Error} value="Error" />)
  )
  .add('Grow', () =>
    controlComponent(<TextArea id="input-grow" placeholder="Placeholder" grow={true} />)
  )
  .add('Grow - Error', () =>
    controlComponent(
      <TextArea
        id="input-grow-error"
        placeholder="Placeholder"
        grow={true}
        error={TextArea.ErrorType.Error}
      />
    )
  )
  .add('Resizable Horizontally', () =>
    controlComponent(
      <TextArea
        placeholder="Resizable Horizontally"
        id="textarea-xresize"
        resize={TextArea.ResizeDirection.Horizontal}
      />
    )
  )
  .add('Resizable Vertically', () =>
    controlComponent(
      <TextArea
        placeholder="Resizable Vertically"
        id="textarea-yresize"
        resize={TextArea.ResizeDirection.Vertical}
      />
    )
  )
  .add('Not Resizable', () =>
    controlComponent(
      <TextArea
        placeholder="Not Resizable"
        id="textarea-no-resize"
        resize={TextArea.ResizeDirection.None}
      />
    )
  )
  .add('Resizable', () =>
    controlComponent(
      <TextArea
        placeholder="Resizable"
        id="textarea-resize"
        resize={TextArea.ResizeDirection.Both}
      />
    )
  );
