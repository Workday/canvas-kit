import React from 'react';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {setupIcon} from '@workday/canvas-system-icons-web';

type MyTabItem = {
  id: string;
  hasIcon: boolean;
  text: React.ReactNode;
  contents: string;
  disabled?: boolean;
};

export const OverflowTabs = () => {
  const [items] = React.useState<MyTabItem[]>([
    {id: 'first', hasIcon: false, text: 'First Tab', contents: 'Contents of First Tab'},
    {
      id: 'second',
      hasIcon: true,
      text: (
        <>
          <Tabs.Item.Icon icon={setupIcon} />
          <Tabs.Item.Text>Second Tab Tab Tab Tab Tab Tab Tab Tab Tab Tab</Tabs.Item.Text>
        </>
      ),
      disabled: true,
      contents: 'Contents of Second Tab',
    },
    {
      id: 'third',
      hasIcon: false,
      text: 'Third Tab Tab Tab Tab Tab Tab Tab Tab Tab Tab Tab',
      contents: 'Contents of Third Tab',
    },
    {id: 'fourth', hasIcon: false, text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
    {id: 'fifth', hasIcon: false, text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
    {id: 'sixth', hasIcon: false, text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
    {id: 'seventh', hasIcon: false, text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
  ]);
  const model = useTabsModel({
    items,
    getId: item => item.id, // `item` type is known
  });
  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={() => <Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: MyTabItem) => (
          <Tabs.Item
            hasIcon={item.hasIcon}
            name={item.id}
            aria-disabled={item.disabled ? true : undefined}
          >
            {item.text}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300}>
          <Tabs.Menu.List>
            {(item: MyTabItem) => (
              <Tabs.Menu.Item
                hasIcon={item.hasIcon}
                name={item.id}
                aria-disabled={item.disabled ? true : undefined}
              >
                {item.text}
              </Tabs.Menu.Item>
            )}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: MyTabItem) => (
          <Tabs.Panel marginTop="m" name={item.id}>
            {item.contents}
          </Tabs.Panel>
        )}
      </Tabs.Panels>
    </Tabs>
  );
};
