import * as React from 'react';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';

export const OnExpandedChange = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  const handleExpandedChange = (expanded: boolean) => {
    console.log(`Side panel is ${expanded ? 'expanded' : 'collapsed'}`);
  };

  return (
    <Flex height={320}>
      <SidePanel {...panelProps} onExpandedChange={handleExpandedChange}>
        <SidePanel.ToggleButton {...controlProps} />
        <span hidden {...labelProps}>
          custom side panel
        </span>
      </SidePanel>
      <Flex as="main" alignItems="center" justifyContent="center" flex={1} flexBasis="auto">
        <p>Side panel is {expanded ? 'expanded' : 'collapsed'}.</p>
      </Flex>
    </Flex>
  );
};
