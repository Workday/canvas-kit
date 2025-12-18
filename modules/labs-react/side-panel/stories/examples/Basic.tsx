import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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
    paddingY: system.space.x4,
    paddingX: system.space.x4,
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
        <SidePanel.ToggleButton />
        <Flex cs={stylesOverride.panel}>
          {model.state.transitionState === 'expanded' && (
            <Flex cs={stylesOverride.accentIcon}>
              <AccentIcon icon={rocketIcon} />
            </Flex>
          )}
          <Heading
            size="small"
            id={model.state.labelId}
            hidden={model.state.transitionState === 'collapsed' ? true : undefined}
          >
            Tasks Panel
          </Heading>
        </Flex>
      </SidePanel>
    </Flex>
  );
};
