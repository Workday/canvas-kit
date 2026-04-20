import styled from '@emotion/styled';
import React from 'react';

import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {StyledType} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

const StyledActionbarList = styled(ActionBar.List)<StyledType>({
  '> *': {
    flex: '0 0 auto',
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
      <Box marginBottom="xl" height="50vh">
        <ActionBar model={model}>
          <StyledActionbarList
            position="relative"
            as="section"
            aria-label="Overflow example actions"
            flexDirection="column"
            height="100%"
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
          </StyledActionbarList>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
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
