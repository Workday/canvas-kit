import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewPortContainer: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    padding: system.space.x4,
  }),
  accentIcon: createStyles({
    marginInlineEnd: system.space.x4,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const Basic = () => {
  const model = useSidePanelModel();

  return (
    <Flex cs={stylesOverride.viewPortContainer}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton
          tooltipTextCollapse="Collapsing View"
          tooltipTextExpand="Expand View"
        />
        <Flex cs={stylesOverride.panel}>
          {model.state.transitionState === 'expanded' && (
            <Flex cs={stylesOverride.accentIcon}>
              <AccentIcon icon={rocketIcon} />
            </Flex>
          )}
          <SidePanel.Heading>Tasks Panel</SidePanel.Heading>
        </Flex>
      </SidePanel>
    </Flex>
  );
};
