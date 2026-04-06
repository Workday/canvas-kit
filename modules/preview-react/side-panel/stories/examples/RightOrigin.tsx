import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    marginLeft: 'auto',
  }),
  panel: createStyles({
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

const RightPanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel {...panelProps} origin="right" className={stylesOverride.panelContainer}>
      <SidePanel.ToggleButton {...controlProps} />
      <Flex cs={stylesOverride.panel}>
        <Heading size="small" hidden={!expanded ? true : undefined} {...labelProps}>
          Tasks Panel
        </Heading>
      </Flex>
    </SidePanel>
  );
};

export const RightOrigin = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <Flex as="main" cs={stylesOverride.main}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>

        <RightPanel />
      </Flex>
    </CanvasProvider>
  );
};
