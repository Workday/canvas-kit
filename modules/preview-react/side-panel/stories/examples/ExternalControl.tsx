/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {colors, type} from '@workday/canvas-kit-react/tokens';

export const ExternalControl = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel({initialExpanded: false});
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <Flex height={320}>
      <SidePanel
        as="aside"
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={setPanelState}
      >
        {panelState === 'expanded' && (
          <Flex alignItems="center" paddingY="s" paddingX="xs">
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
      <Flex
        as="main"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        flex={1}
        flexBasis="auto"
      >
        <p>Control the panel externally</p>
        <SecondaryButton {...controlProps} role="button">
          Toggle Side Panel
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
