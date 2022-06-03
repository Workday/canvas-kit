import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-preview-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
// local helper hook for setting content direction;
import {useDirection} from './useDirection';

export const AlternatePanel = () => {
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <Flex height={320} backgroundColor="soap100">
        <SidePanel {...panelProps} onStateTransition={setPanelState} variant="alternate">
          <SidePanel.ToggleButton {...controlProps} />
          {panelState === 'expanded' && (
            <Flex alignItems="center" paddingY="s" paddingX="s">
              <BodyText as="h3" size="large" color="licorice500" fontWeight="bold" {...labelProps}>
                Alternate Panel
              </BodyText>
            </Flex>
          )}
        </SidePanel>
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
      </Flex>
    </CanvasProvider>
  );
};
