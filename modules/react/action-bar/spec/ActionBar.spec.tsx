import React from 'react';
import {getAllByRole, render} from '@testing-library/react';
import {ActionBar} from '../lib/ActionBar';
import {useActionBarModel} from '../lib/useActionBarModel';

describe('ActionBar.Item', () => {
  verifyComponent(ActionBar.Item, {modelFn: useActionBarModel});
});

describe('Action Bar', () => {
  const cb = jest.fn();
  const items = [
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
  ];
  type MyActionItem = {
    id: string;
    text: React.ReactNode;
  };
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render 4 buttons by default', () => {
      const label = 'test label';
      const {getAllByRole} = render(
        <ActionBar items={items}>
          <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label={label} />}>
            {(item: MyActionItem) => <ActionBar.Item>{item.text}</ActionBar.Item>}
          </ActionBar.List>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      );
      expect(getAllByRole('button')).toHaveLength(4);
    });

    it('should render a minimum of 1 button', () => {
      const label = 'test label';
      const {getAllByRole} = render(
        <ActionBar items={items} maximumVisible={-10000}>
          <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label={label} />}>
            {(item: MyActionItem) => <ActionBar.Item>{item.text}</ActionBar.Item>}
          </ActionBar.List>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      );
      expect(getAllByRole('button')).toHaveLength(2);
    });

    it('should render a minimum of items.length', () => {
      const label = 'test label';
      const {getAllByRole} = render(
        <ActionBar items={items} maximumVisible={10000}>
          <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label={label} />}>
            {(item: MyActionItem) => <ActionBar.Item>{item.text}</ActionBar.Item>}
          </ActionBar.List>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => <ActionBar.Menu.Item>{item.text}</ActionBar.Menu.Item>}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      );
      expect(getAllByRole('button')).toHaveLength(items.length);
    });
  });
});
