import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

type MyTabItem = {
  id: string;
  text: string;
  contents: string;
};

export const OverflowTabs = () => {
  const model = useTabsModel({
    items: [
      {id: 'first', text: 'First Tab', contents: 'Contents of First Tab'},
      {id: 'second', text: 'Second Tab Tab Tab Tab', contents: 'Contents of Second Tab'},
      {id: 'third', text: 'Third Tab', contents: 'Contents of Third Tab'},
      {id: 'fourth', text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
      {id: 'fifth', text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
      {id: 'sixth', text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
      {id: 'seventh', text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
    ],
    getId: item => item.id, // `item` type is known
  });
  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={() => <Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: MyTabItem) => <Tabs.Item name={item.id}>{item.text}</Tabs.Item>}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card>
          <Tabs.Menu.List>
            {(item: MyTabItem) => <Tabs.Menu.Item name={item.id}>{item.text}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel name="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel name="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel name="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel name="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel name="fifth">Contents of Fifth Tab</Tabs.Panel>
        <Tabs.Panel name="sixth">Contents of Sixth Tab</Tabs.Panel>
        <Tabs.Panel name="seventh">Contents of Seventh Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
