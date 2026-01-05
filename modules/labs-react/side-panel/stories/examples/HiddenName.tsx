import * as React from 'react';

import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const HiddenName = () => {
  const model = useSidePanelModel({
    onStateTransition: state => {
      console.log(`state is: ${state}`);
    },
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton />
        <AccessibleHide id={model.state.labelId}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side Panel with a hidden title text.
        </Text>
      </Flex>
    </Flex>
  );
};
