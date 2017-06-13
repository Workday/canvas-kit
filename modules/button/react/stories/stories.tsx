/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from '../index';
import README from '../README.md';

storiesOf('Button', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button buttonType={Button.Types.Primary}>Primary Button</Button>
      <Button buttonType={Button.Types.Primary} disabled={true}>
        Primary Button
      </Button>
      <h3>Medium Primary</h3>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium}>
        Primary Button
      </Button>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium} disabled={true}>
        Primary Button
      </Button>
      <h3>Small Primary</h3>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Small}>
        Primary Button
      </Button>
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Small} disabled={true}>
        Primary Button
      </Button>
      <h3>Growing Primary</h3>
      <Button buttonType={Button.Types.Primary} grow={true}>
        Growing Primary Button
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button buttonType={Button.Types.Secondary}>Secondary Button</Button>
      <Button buttonType={Button.Types.Secondary} disabled={true}>
        Secondary Button
      </Button>
      <h3>Medium Secondary</h3>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Medium}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Medium} disabled={true}>
        Secondary Button
      </Button>
      <h3>Small Secondary</h3>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Small}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Types.Secondary} buttonSize={Button.Sizes.Small} disabled={true}>
        Secondary Button
      </Button>
      <h3>Growing Secondary</h3>
      <Button buttonType={Button.Types.Secondary} grow={true}>
        Growing Secondary Button
      </Button>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button buttonType={Button.Types.Delete}>Delete Button</Button>
      <Button buttonType={Button.Types.Delete} disabled={true}>
        Delete Button
      </Button>
      <h3>Medium Delete</h3>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium}>
        Delete Button
      </Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium} disabled={true}>
        Delete Button
      </Button>
      <h3>Small Delete</h3>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Small}>
        Delete Button
      </Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Small} disabled={true}>
        Delete Button
      </Button>
      <h3>Growing Delete</h3>
      <Button buttonType={Button.Types.Delete} grow={true}>
        Growing Delete Button
      </Button>
    </div>
  ));
