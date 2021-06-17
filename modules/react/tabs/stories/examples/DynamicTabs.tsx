import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState([
    {tab: 'Tab 1', name: 'tab-1'},
    {tab: 'Tab 2', name: 'tab-2'},
    {tab: 'Tab 3', name: 'tab-3'},
  ]);
  const addedRef = React.useRef(tabs.length);
  const model = useTabsModel({
    shouldActivate: ({data}) => data.tab !== 'last',
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, name: string) => {
    if (e.key === 'Backspace') {
      setTabs(tabs.filter(item => item.name !== name));
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List>
        {tabs.map((item, index) => (
          <Tabs.Item
            key={item.name}
            name={item.name}
            index={index}
            onKeyDown={e => onKeyDown(e, item.name)}
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
              tabs.concat({tab: `Tab ${addedRef.current}`, name: `tab-${addedRef.current}`})
            );
            model.events.goTo({id: 'last'});
          }}
        >
          Add Tab
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        {tabs.map((item, index) => (
          <Tabs.Panel key={item.name} name={item.name}>
            Contents of {item.tab}
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  );
};
