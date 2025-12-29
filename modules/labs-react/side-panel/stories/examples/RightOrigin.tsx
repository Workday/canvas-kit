import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    marginInlineStart: 'auto',
  }),
  panel: createStyles({
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: system.space.x4,
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
  const model = useSidePanelModel({
    origin: 'end',
  });

  return (
    <SidePanel model={model} className={stylesOverride.panelContainer}>
      <SidePanel.ToggleButton />
      <Flex cs={stylesOverride.panel}>
        <Heading
          size="small"
          hidden={model.state.transitionState === 'collapsed' ? true : undefined}
          id={model.state.labelId}
        >
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
