import * as React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import {deprecated_Button as Button} from '@workday/canvas-kit-react/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Deprecated',
  component: Button,
  parameters: {
    ReadmePath: 'react/button',
  },
};

export default meta;

export const Primary: StoryObj = {
  name: 'Primary',
  render: () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button variant="primary">Primary Button</Button>
      <Button variant="primary" disabled={true}>
        Primary Button
      </Button>

      <h3>Medium Primary</h3>
      <Button variant="primary" size="medium">
        Primary Button
      </Button>
      <Button variant="primary" size="medium" disabled={true}>
        Primary Button
      </Button>

      <h3>Small Primary</h3>
      <Button variant="primary" size="small">
        Primary Button
      </Button>
      <Button variant="primary" size="small" disabled={true}>
        Primary Button
      </Button>

      <h3>Growing Primary</h3>
      <Button variant="primary" grow={true}>
        Growing Primary Button
      </Button>
    </div>
  ),
};

export const Secondary: StoryObj = {
  name: 'Secondary',
  render: () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" disabled={true}>
        Secondary Button
      </Button>

      <h3>Medium Secondary</h3>
      <Button variant="secondary" size="medium">
        Secondary Button
      </Button>
      <Button variant="secondary" size="medium" disabled={true}>
        Secondary Button
      </Button>

      <h3>Small Secondary</h3>
      <Button variant="secondary" size="small">
        Secondary Button
      </Button>
      <Button variant="secondary" size="small" disabled={true}>
        Secondary Button
      </Button>

      <h3>Growing Secondary</h3>
      <Button variant="secondary" grow={true}>
        Growing Secondary Button
      </Button>
    </div>
  ),
};

export const Delete: StoryObj = {
  name: 'Delete',
  render: () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button variant="delete">Delete Button</Button>
      <Button variant="delete" disabled={true}>
        Delete Button
      </Button>

      <h3>Medium Delete</h3>
      <Button variant="delete" size="medium">
        Delete Button
      </Button>
      <Button variant="delete" size="medium" disabled={true}>
        Delete Button
      </Button>

      <h3>Small Delete</h3>
      <Button variant="delete" size="small">
        Delete Button
      </Button>
      <Button variant="delete" size="small" disabled={true}>
        Delete Button
      </Button>

      <h3>Growing Delete</h3>
      <Button variant="delete" grow={true}>
        Growing Delete Button
      </Button>
    </div>
  ),
};
