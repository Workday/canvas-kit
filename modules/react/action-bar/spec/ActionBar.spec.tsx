import {render} from '@testing-library/react';
import * as React from 'react';

import {trashIcon} from '@workday/canvas-system-icons-web';

import {ActionBar} from '../lib/ActionBar';
import {useActionBarModel} from '../lib/useActionBarModel';

describe('ActionBar.Item', () => {
  verifyComponent(ActionBar.Item, {modelFn: useActionBarModel});

  it('should render an icon-only item named by its aria-label', () => {
    const screen = render(
      <ActionBar>
        <ActionBar.List>
          <ActionBar.Item icon={trashIcon} aria-label="Delete" />
        </ActionBar.List>
      </ActionBar>
    );

    expect(screen.getByRole('button', {name: 'Delete'})).toBeInTheDocument();
  });
});
