import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

const actionBarStencil = createStencil({
  base: {
    flexDirection: 'column',
    height: '100%',
    '> *': {
      flex: '0 0 auto',
    },
  },
});

export const OverflowVerticalList = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
    {id: 'sixth', text: 'Sixth Action'},
    {id: 'seventh', text: 'Seventh Action'},
  ]);

  const model = useActionBarModel({items, orientation: 'vertical', maximumVisible: 4});

  return (
    <>
      <Box cs={{marginBottom: system.gap.xxl, height: '50vh'}}>
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            as="section"
            aria-label="Overflow example actions"
            cs={actionBarStencil()}
            overflowButton={
              <ActionBar.OverflowButton
                cs={{overflow: 'visible', flex: 0}}
                aria-label="More actions"
              />
            }
          >
            {(item: MyActionItem, index) => (
              <ActionBar.Item
                as={index === 0 ? PrimaryButton : undefined}
                onClick={() => console.log(item.id)}
              >
                {item.text}
              </ActionBar.Item>
            )}
          </ActionBar.List>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card cs={{maxWidth: px2rem(300), maxHeight: px2rem(200)}}>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => (
                  <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
                    {item.text}
                  </ActionBar.Menu.Item>
                )}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      </Box>
    </>
  );
};
