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
      <Button buttonType={Button.Type.Primary}>Primary Button</Button>
      <Button buttonType={Button.Type.Primary} disabled={true}>
        Primary Button
      </Button>
      <h3>Medium Primary</h3>
      <Button buttonType={Button.Type.Primary} buttonSize={Button.Size.Medium}>
        Primary Button
      </Button>
      <Button buttonType={Button.Type.Primary} buttonSize={Button.Size.Medium} disabled={true}>
        Primary Button
      </Button>
      <h3>Small Primary</h3>
      <Button buttonType={Button.Type.Primary} buttonSize={Button.Size.Small}>
        Primary Button
      </Button>
      <Button buttonType={Button.Type.Primary} buttonSize={Button.Size.Small} disabled={true}>
        Primary Button
      </Button>
      <h3>Growing Primary</h3>
      <Button buttonType={Button.Type.Primary} grow={true}>
        Growing Primary Button
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button buttonType={Button.Type.Secondary}>Secondary Button</Button>
      <Button buttonType={Button.Type.Secondary} disabled={true}>
        Secondary Button
      </Button>
      <h3>Medium Secondary</h3>
      <Button buttonType={Button.Type.Secondary} buttonSize={Button.Size.Medium}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Type.Secondary} buttonSize={Button.Size.Medium} disabled={true}>
        Secondary Button
      </Button>
      <h3>Small Secondary</h3>
      <Button buttonType={Button.Type.Secondary} buttonSize={Button.Size.Small}>
        Secondary Button
      </Button>
      <Button buttonType={Button.Type.Secondary} buttonSize={Button.Size.Small} disabled={true}>
        Secondary Button
      </Button>
      <h3>Growing Secondary</h3>
      <Button buttonType={Button.Type.Secondary} grow={true}>
        Growing Secondary Button
      </Button>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button buttonType={Button.Type.Delete}>Delete Button</Button>
      <Button buttonType={Button.Type.Delete} disabled={true}>
        Delete Button
      </Button>
      <h3>Medium Delete</h3>
      <Button buttonType={Button.Type.Delete} buttonSize={Button.Size.Medium}>
        Delete Button
      </Button>
      <Button buttonType={Button.Type.Delete} buttonSize={Button.Size.Medium} disabled={true}>
        Delete Button
      </Button>
      <h3>Small Delete</h3>
      <Button buttonType={Button.Type.Delete} buttonSize={Button.Size.Small}>
        Delete Button
      </Button>
      <Button buttonType={Button.Type.Delete} buttonSize={Button.Size.Small} disabled={true}>
        Delete Button
      </Button>
      <h3>Growing Delete</h3>
      <Button buttonType={Button.Type.Delete} grow={true}>
        Growing Delete Button
      </Button>
    </div>
  ));
