import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel, TabsModel} from '@workday/canvas-kit-react/tabs';
import {SelectionModel} from '../../lib/selection';

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState([
    {tab: 'Tab 1', id: 'tab-1'},
    {tab: 'Tab 2', id: 'tab-2'},
    {tab: 'Tab 3', id: 'tab-3'},
  ]);
  const addedRef = React.useRef(tabs.length);
  const model = useTabsModel({
    shouldSelect: ({data}) => data.id !== 'last',
  });

  /**
   * Helper function that should be called when an item is programmatically removed. The following
   * side effects depend on state of the model:
   * * **Item is focused**: Focus will be moved to next item in the list
   * * **Item is selected**: Selection will be moved to the next item in the list
   * @param id The id of the item that will be removed
   */
  const removeItem = (id: string, model: SelectionModel) => {
    const index = model.state.items.findIndex(item => model.getId(item) === model.state.cursorId);
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.getId(model.state.items[nextIndex]);
    if (model.state.selectedIds[0] === id) {
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, id: string) => {
    if (e.key === 'Delete') {
      setTabs(tabs.filter(item => item.id !== id));
      removeItem(id, model);
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List>
        {tabs.map((item, index) => (
          <Tabs.Item
            key={item.id}
            name={item.id}
            index={index}
            onKeyDown={e => onKeyDown(e, item.id)}
          >
            {item.tab}
          </Tabs.Item>
        ))}
        <Tabs.Item
          key={'last'}
          index={tabs.length}
          name={'last'}
          onClick={() => {
            addedRef.current += 1;
            setTabs(tabs =>
              tabs.concat({tab: `Tab ${addedRef.current}`, id: `tab-${addedRef.current}`})
            );
            model.events.goTo({id: 'last'});
          }}
        >
          Add Tab
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        {tabs.map((item, index) => (
          <Tabs.Panel key={item.id} name={item.id}>
            Contents of {item.tab}
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  );
};
