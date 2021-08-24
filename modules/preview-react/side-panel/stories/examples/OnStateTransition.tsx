import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';

export const OnStateTransition = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();
  const [transitionState, setTransitionState] = React.useState<SidePanelTransitionStates>(
    'expanded'
  );

  const handleStateTransition = (transition: SidePanelTransitionStates) => {
    setTransitionState(transition);
  };

  return (
    <Flex height={320}>
      <SidePanel {...panelProps} onStateTransition={handleStateTransition}>
        <SidePanel.ToggleButton {...controlProps} />
        <span hidden {...labelProps}>
          custom side panel
        </span>
      </SidePanel>
      <Flex as="main" alignItems="center" justifyContent="center" flex={1} flexBasis="auto">
        <p>Side panel is {transitionState}.</p>
      </Flex>
    </Flex>
  );
};
