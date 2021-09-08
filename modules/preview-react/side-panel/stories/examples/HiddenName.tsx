import * as React from 'react';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

export const HiddenName = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();
  return (
    <Flex height={320}>
      <SidePanel
        as="aside"
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={state => {
          console.log(`Side Panel is ${state}`);
        }}
      >
        <SidePanel.ToggleButton {...controlProps} />
        <span hidden {...labelProps}>
          Side Panel with a hidden label
        </span>
      </SidePanel>
    </Flex>
  );
};
