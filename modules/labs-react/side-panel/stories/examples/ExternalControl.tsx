import * as React from 'react';

import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
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

/*
 * NOTE TO DEV:
 * Spreading the `controlProps` onto an external control creates serious accessibility issues.
 * - `aria-labelledby` id reference is invalid when the SidePanel is collapsed
 * - `aria-labelledby` will change the name of "Toggle Side Panel" button to "Tasks Panel"
 * - `aria-expanded` won't make sense to screen reader users when the expanded SidePanel content isn't following the control
 * - `aria-controls` is unsupported by screen readers and will not allow users to navigate to the controlled content
 *
 * SOLUTION:
 * - Pass the `controlProps` click handler function down to the external control component.
 * - Add a toggle state to Button components with `aria-pressed` for screen readers,
 * - OR use a similar toggle input like Checkbox or Switch.
 */
export const ExternalControl = () => {
  const model = useSidePanelModel({
    initialTransitionState: 'collapsed',
    labelId: 'tasks-panel-label',
  });

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel model={model}>
        <SidePanel.ToggleButton />
        {model.state.transitionState === 'expanded' && (
          <Flex cs={stylesOverride.panel}>
            <Heading size="small" cs={stylesOverride.panelHeading} id={model.state.labelId}>
              Tasks Panel
            </Heading>
          </Flex>
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
