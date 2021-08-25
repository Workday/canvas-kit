/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {colors, type} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {useThemeRTL} from '@workday/canvas-kit-labs-react/common';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const RightPanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const {themeRTL} = useThemeRTL();
  const panelStyles = themeRTL({
    position: 'absolute',
    right: 0,
  });

  return (
    <SidePanel {...panelProps} onStateTransition={setPanelState} origin="right" css={panelStyles}>
      <SidePanel.ToggleButton {...controlProps} />
      {panelState === 'expanded' && (
        <Flex alignItems="center" justifyContent="flex-end" paddingY="s" paddingX="xs">
          <h3
            css={{
              ...type.levels.body.large,
              color: colors.licorice500,
              fontWeight: type.properties.fontWeights.bold,
            }}
            {...labelProps}
          >
            Tasks Panel
          </h3>
        </Flex>
      )}
    </SidePanel>
  );
};

export const RightOrigin = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <Flex height={320}>
        <RightPanel />
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
