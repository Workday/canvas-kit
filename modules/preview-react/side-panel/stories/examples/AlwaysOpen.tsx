import * as React from 'react';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {base, system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const stylesOverride = {
  accentIcon: createStyles({
    marginRight: system.space.x4,
  }),
  panelContainer: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  panelHeading: createStyles({
    color: base.licorice500,
  }),
};

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <Flex gap="s" height={320}>
      <SidePanel {...panelProps}>
        <Flex cs={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <Heading size="large" cs={stylesOverride.panelHeading} {...labelProps}>
            Tasks Panel
          </Heading>
        </Flex>
      </SidePanel>
    </Flex>
  );
};
