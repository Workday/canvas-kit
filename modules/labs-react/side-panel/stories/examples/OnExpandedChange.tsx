import * as React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  SidePanel,
  useSidePanelModel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-labs-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
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

/**
 * Helper to derive expanded boolean from transition state.
 * Useful when migrating from preview-react's onExpandedChange callback.
 */
const isExpanded = (state: SidePanelTransitionStates) =>
  state === 'expanded' || state === 'expanding';

export const OnExpandedChange = () => {
  const [expanded, setExpanded] = React.useState(true);

  const model = useSidePanelModel({
    onStateTransition: state => {
      const newExpanded = isExpanded(state);
      if (newExpanded !== expanded) {
        setExpanded(newExpanded);
        console.log('Expanded changed to:', newExpanded);
      }
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
          Side panel is {expanded ? 'expanded' : 'collapsed'}.
        </Text>
      </Flex>
    </Flex>
  );
};
