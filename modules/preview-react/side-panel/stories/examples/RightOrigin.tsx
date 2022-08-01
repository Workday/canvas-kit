import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-preview-react/text';
import {CanvasProvider, styled} from '@workday/canvas-kit-react/common';
// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const StyledSidePanel = styled(SidePanel)({
  marginLeft: 'auto',
});

const RightPanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <StyledSidePanel {...panelProps} onStateTransition={setPanelState} origin="right">
      <SidePanel.ToggleButton {...controlProps} />
      {panelState === 'expanded' && (
        <Flex alignItems="center" justifyContent="flex-end" paddingY="s" paddingX="s">
          <Heading as="h3" size="large" color="licorice500" fontWeight="bold" {...labelProps}>
            Tasks Panel
          </Heading>
        </Flex>
      )}
    </StyledSidePanel>
  );
};

export const RightOrigin = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <Flex height={320}>
        <Flex
          as="main"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          flex={1}
          flexBasis="auto"
        >
          <p>Toggle the content direction</p>
          <SecondaryButton onClick={toggleDirection} role="button">
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>

        <RightPanel />
      </Flex>
    </CanvasProvider>
  );
};
