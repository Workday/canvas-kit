import * as React from 'react';

import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexHeadingStyles = createStyles({
  alignItems: 'center',
  gap: system.gap.sm,
});

const viewPortStyles = createStyles({
  height: px2rem(320),
});

export const Basic = () => {
  // const model = useSidePanelModel();

  return (
    <Flex cs={viewPortStyles}>
      <SidePanel>
        <SidePanel.Heading size="small">
          <Flex cs={flexHeadingStyles}>
            <AccentIcon icon={rocketIcon} />
            Tasks Panel
          </Flex>
        </SidePanel.Heading>
        <SidePanel.ToggleButton aria-label="Collapse View" />
      </SidePanel>
    </Flex>
  );
};
