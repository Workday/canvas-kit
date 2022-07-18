import * as React from 'react';
import {colors, type} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {CanvasProvider, styled} from '@workday/canvas-kit-react/common';
// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const StyledHeader = styled('h3')({
  ...type.levels.body.large,
  color: colors.licorice500,
  fontWeight: type.properties.fontWeights.bold,
});

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
          <StyledHeader {...labelProps}>Tasks Panel</StyledHeader>
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
