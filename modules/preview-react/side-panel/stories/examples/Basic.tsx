import * as React from 'react';

import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useDirection} from './useDirection';

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
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewPortContainer}>
        <SidePanel {...panelProps}>
          <SidePanel.ToggleButton {...controlProps} />
          <Flex cs={stylesOverride.panel}>
            {expanded && (
              <Flex cs={stylesOverride.accentIcon}>
                <AccentIcon icon={rocketIcon} />
              </Flex>
            )}
            <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
              Tasks Panel
            </Heading>
          </Flex>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.mainContent}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>
      </Flex>
    </CanvasProvider>
  );
};
