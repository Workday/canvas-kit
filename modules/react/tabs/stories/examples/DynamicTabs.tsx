import React from 'react';

import {slugify} from '@workday/canvas-kit-react/common';
import {isCursor} from '@workday/canvas-kit-react/collection';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

type Tab = {
  tab: string;
  id: string;
};

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState<Tab[]>([
    {tab: 'Tab 1', id: 'tab-1'},
    {tab: 'Tab 2', id: 'tab-2'},
    {tab: 'Tab 3', id: 'tab-3'},
    {tab: 'Add Tab', id: 'add'},
  ]);
  const addedRef = React.useRef(tabs.length - 1);
  const model = useTabsModel({
    items: tabs,
    shouldSelect: data => data.id !== 'add',
  });

  // A ref of the model for the render functions to work around the caching done to lists
  const modelRef = React.useRef(model);
  modelRef.current = model;

  /**
   * Helper function that should be called when an item is programmatically removed. The following
   * side effects depend on state of the model:
   * * **Item is focused**: Focus will be moved to next item in the list
   * * **Item is selected**: Selection will be moved to the next item in the list
   * @param id The id of the item that will be removed
   */
  const removeItem = <T extends unknown>(id: string, model: ReturnType<typeof useTabsModel>) => {
    const index = model.state.items.findIndex(item => isCursor(model.state, item.id));
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.state.items[nextIndex].id;
    if (model.state.selectedIds[0] === id) {
      // We're removing the currently selected item. Select next item
      model.events.select({id: nextId});
    }
    if (isCursor(model.state, id)) {
      // We're removing the currently focused item. Focus next item
      model.events.goTo({id: nextId});

      // wait for stabilization of state
      requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>(`[id="${slugify(`${model.state.id}-${nextId}`)}"]`)
          ?.focus();
      });
    }
  };

  const onKeyDown = (id: string) => (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === 'Delete' || e.key === 'Backspace') && id !== 'add') {
      setTabs(tabs.filter(item => item.id !== id));
      const model = modelRef.current;
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
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: Tab) => (
          <Tabs.Item onKeyDown={onKeyDown(item.id)} onClick={onClick(item.id)}>
            {item.tab}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
          <Tabs.Menu.List>
            {(item: Tab) => <Tabs.Menu.Item>{item.tab}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: Tab) => <Tabs.Panel marginTop="m">Contents of {item.tab}</Tabs.Panel>}
      </Tabs.Panels>
    </Tabs>
  );
};
