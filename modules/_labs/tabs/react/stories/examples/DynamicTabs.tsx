import React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';

import {Tabs, useTabsModel} from '@workday/canvas-kit-labs-react-tabs';

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState([{tab: 'Tab 1'}, {tab: 'Tab 2'}]);
  const model = useTabsModel({
    shouldActivate: ({data}) => data.tab !== 'last',
  });

  return (
    <Tabs model={model}>
      <Tabs.List>
        {tabs.map((item, index) => (
          <Tabs.Item key={item.tab} name={item.tab} index={index}>
            {item.tab}
          </Tabs.Item>
        ))}
        <Tabs.Item
          key={'last'}
          index={tabs.length}
          name={'last'}
          onClick={() => {
            setTabs(tabs => tabs.concat({tab: `Tab ${tabs.length + 1}`}));
            model.events.goTo({id: 'last'});
          }}
        >
          Add Tab
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: spacing.m}}>
        {tabs.map((item, index) => (
          <Tabs.Panel key={item.tab} name={item.tab}>
            Contents of {item.tab}
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  );
};
