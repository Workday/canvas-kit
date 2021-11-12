import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel, TabsModel} from '@workday/canvas-kit-react/tabs';

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
  console.log('items', model.state.items);

  /**
   * TODO fix weirdness around delete key
   * Helper function that should be called when an item is programmatically removed. When called
   * with an id of the
   * @param id The id of the item that will be removed
   */
  const removeItem = (id: string, model: TabsModel) => {
    const index = model.state.items.findIndex(item => model.getId(item) === model.state.cursorId);
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.getId(model.state.items[nextIndex]);
    if (model.state.selectedKeys[0] === id) {
      // We're deleting the currently active item
      // get the next item
      model.events.select({id: nextId});
    }
    if (model.state.cursorId === id) {
      model.events.goTo({id: nextId});
      document.querySelector<HTMLElement>(`#${model.state.id}-${nextId}`)?.focus();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, id: string) => {
    console.log('key', e.key);
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
