/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {deprecated_Button as Button} from '../index';
import README from '../README.md';

storiesOf('Button/Deprecated', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button variant={Button.Variant.Primary}>Primary Button</Button>
      <Button variant={Button.Variant.Primary} disabled={true}>
        Primary Button
      </Button>
      <h3>Medium Primary</h3>
      <Button variant={Button.Variant.Primary} size={Button.Size.Medium}>
        Primary Button
      </Button>
      <Button variant={Button.Variant.Primary} size={Button.Size.Medium} disabled={true}>
        Primary Button
      </Button>
      <h3>Small Primary</h3>
      <Button variant={Button.Variant.Primary} size={Button.Size.Small}>
        Primary Button
      </Button>
      <Button variant={Button.Variant.Primary} size={Button.Size.Small} disabled={true}>
        Primary Button
      </Button>
      <h3>Growing Primary</h3>
      <Button variant={Button.Variant.Primary} grow={true}>
        Growing Primary Button
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button variant={Button.Variant.Secondary}>Secondary Button</Button>
      <Button variant={Button.Variant.Secondary} disabled={true}>
        Secondary Button
      </Button>
      <h3>Medium Secondary</h3>
      <Button variant={Button.Variant.Secondary} size={Button.Size.Medium}>
        Secondary Button
      </Button>
      <Button variant={Button.Variant.Secondary} size={Button.Size.Medium} disabled={true}>
        Secondary Button
      </Button>
      <h3>Small Secondary</h3>
      <Button variant={Button.Variant.Secondary} size={Button.Size.Small}>
        Secondary Button
      </Button>
      <Button variant={Button.Variant.Secondary} size={Button.Size.Small} disabled={true}>
        Secondary Button
      </Button>
      <h3>Growing Secondary</h3>
      <Button variant={Button.Variant.Secondary} grow={true}>
        Growing Secondary Button
      </Button>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button variant={Button.Variant.Delete}>Delete Button</Button>
      <Button variant={Button.Variant.Delete} disabled={true}>
        Delete Button
      </Button>
      <h3>Medium Delete</h3>
      <Button variant={Button.Variant.Delete} size={Button.Size.Medium}>
        Delete Button
      </Button>
      <Button variant={Button.Variant.Delete} size={Button.Size.Medium} disabled={true}>
        Delete Button
      </Button>
      <h3>Small Delete</h3>
      <Button variant={Button.Variant.Delete} size={Button.Size.Small}>
        Delete Button
      </Button>
      <Button variant={Button.Variant.Delete} size={Button.Size.Small} disabled={true}>
        Delete Button
      </Button>
      <h3>Growing Delete</h3>
      <Button variant={Button.Variant.Delete} grow={true}>
        Growing Delete Button
      </Button>
    </div>
  ));
