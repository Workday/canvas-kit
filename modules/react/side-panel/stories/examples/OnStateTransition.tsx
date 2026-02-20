import * as React from 'react';

import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanelModel,
} from '@workday/canvas-kit-react/side-panel';
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

export const OnStateTransition = () => {
  const [transitionState, setTransitionState] =
    React.useState<SidePanelTransitionStates>('expanded');

  const model = useSidePanelModel({
    onStateTransition: state => {
      setTransitionState(state);
      console.log('Expanded changed to:', state);
    },
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton aria-label="Collapse View" />
        <SidePanel.Heading hidden size="small">
          Hidden Title
        </SidePanel.Heading>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {transitionState}.
        </Text>
      </Flex>
    </Flex>
  );
};
