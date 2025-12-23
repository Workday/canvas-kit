import * as React from 'react';

import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';

import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewPortContainer: createStyles({
    height: px2rem(320),
  }),
};

export const Basic = () => {
  const model = useSidePanelModel();

  return (
    <Flex cs={stylesOverride.viewPortContainer}>
      <SidePanel model={model}>
        <SidePanel.Heading size="small">Tasks Panel</SidePanel.Heading>
        <SidePanel.ToggleButton />
      </SidePanel>
    </Flex>
  );
};
