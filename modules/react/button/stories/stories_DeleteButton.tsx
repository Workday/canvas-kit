/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React', module)
  .addParameters({component: DeleteButton})
  .addDecorator(withReadme(README))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <DeleteButton size="large">Delete</DeleteButton>
      <DeleteButton disabled={true} size="large">
        Delete
      </DeleteButton>

      <h3>Medium Delete</h3>
      <DeleteButton size="medium">Delete</DeleteButton>
      <DeleteButton disabled={true} size="medium">
        Delete
      </DeleteButton>

      <h3>Small Delete</h3>
      <DeleteButton size="small">Delete</DeleteButton>
      <DeleteButton disabled={true} size="small">
        Delete
      </DeleteButton>
    </div>
  ));
