import * as React from 'react';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    padding: system.space.x4,
  }),
  panelHeading: createStyles({
    color: system.color.fg.muted.stronger,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const ExternalControl = () => {
  const model = useSidePanelModel({
    initialTransitionState: 'collapsed',
    labelId: 'tasks-panel-label',
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton />
        <SidePanel.Heading size="small" cs={stylesOverride.panelHeading}>
          Task Panel
        </SidePanel.Heading>
        {model.state.transitionState === 'expanded' && (
          <Flex cs={stylesOverride.panel}>Contents</Flex>
        )}
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Control the panel externally
        </Text>
        <SecondaryButton
          onClick={
            model.state.transitionState === 'expanded' ? model.events.collapse : model.events.expand
          }
          aria-pressed={model.state.transitionState === 'expanded'}
        >
          {model.state.transitionState === 'expanded' ? 'Hide Side Panel' : 'Show Side Panel'}
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
