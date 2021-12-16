import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel, TabsModel} from '@workday/canvas-kit-react/tabs';
import {SelectionModel} from '../../lib/selection';

type Tab = {
  tab: string;
  id: string;
};

export const DynamicTabs = () => {
  // save a ref of the currently selected tab. `Tabs.List` takes a render function an memoizes. We
  // need to get around this
  const activeTabRef = React.useRef('');

  const [tabs, setTabs] = React.useState<Tab[]>([
    {tab: 'Tab 1', id: 'tab-1'},
    {tab: 'Tab 2', id: 'tab-2'},
    {tab: 'Tab 3', id: 'tab-3'},
    {tab: 'Add New', id: 'add'},
  ]);
  const addedRef = React.useRef(tabs.length - 1);
  const model = useTabsModel({
    items: tabs,
    shouldSelect: ({data}) => data.id !== 'add',
  });
  activeTabRef.current = model.state.selectedIds[0];

  /**
   * Helper function that should be called when an item is programmatically removed. The following
   * side effects depend on state of the model:
   * * **Item is focused**: Focus will be moved to next item in the list
   * * **Item is selected**: Selection will be moved to the next item in the list
   * @param id The id of the item that will be removed
   */
  const removeItem = <T extends unknown>(id: string, model: SelectionModel<T>) => {
    const index = model.state.items.findIndex(item => model.getId(item) === model.state.cursorId);
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.getId(model.state.items[nextIndex]);
    if (activeTabRef.current === id) {
      // We're removing the currently selected item. Select next item
      model.events.select({id: nextId});
    }
    if (model.state.cursorId === id) {
      // We're removing the currently focused item. Focus next item
      model.events.goTo({id: nextId});

      // wait for stabilization of state
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(`#${model.state.id}-${nextId}`)?.focus();
      });
    }
  };

  const onKeyDown = (id: string) => (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Backspace' && id !== 'add') {
      setTabs(tabs.filter(item => item.id !== id));
      removeItem(id, model);
    }
  };

  const onClick = (id: string) => (e: React.MouseEvent) => {
    if (id === 'add') {
      addedRef.current += 1;
      setTabs(tabs => {
        const newTabs = tabs.slice(0, tabs.length - 1);
        const addTab = tabs.slice(-1);
        return newTabs.concat(
          {tab: `Tab ${addedRef.current}`, id: `tab-${addedRef.current}`},
          addTab
        );
      });
      model.events.goTo({id: 'add'});
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: Tab) => (
          <Tabs.Item name={item.id} onKeyDown={onKeyDown(item.id)} onClick={onClick(item.id)}>
            {item.tab}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
          <Tabs.Menu.List>
            {(item: Tab) => <Tabs.Menu.Item name={item.id}>{item.tab}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: Tab) => (
          <Tabs.Panel marginTop="m" name={item.id}>
            Contents of {item.tab}
          </Tabs.Panel>
        )}
      </Tabs.Panels>
    </Tabs>
  );
};
