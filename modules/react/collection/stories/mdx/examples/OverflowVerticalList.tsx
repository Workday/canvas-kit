import React from 'react';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

const actionBarListStencil = createStencil({
  base: {
    flexDirection: 'column',
    height: '100%',
    '> *': {
      flex: '0 0 auto',
    },
  },
});

const containerStyles = createStyles({
  marginBottom: system.space.x8,
  height: '50vh',
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
      <Box cs={containerStyles}>
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            as="section"
            aria-label="Overflow example actions"
            cs={actionBarListStencil()}
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
            <ActionBar.Menu.Card cs={{maxWidth: 300, maxHeight: 200}}>
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
