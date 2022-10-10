import * as React from 'react';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

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
          <Flex alignItems="center" paddingY="s" paddingX="s">
            <Text
              as="h3"
              typeLevel="body.large"
              color="licorice500"
              fontWeight="bold"
              {...labelProps}
            >
              Tasks Panel
            </Text>
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
