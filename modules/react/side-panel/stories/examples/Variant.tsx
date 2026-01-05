import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
    backgroundColor: system.color.bg.alt.default,
  }),
  panel: createStyles({
    alignItems: 'center',
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

export const AlternatePanel = () => {
  const {direction, toggleDirection} = useDirection();
  const model = useSidePanelModel({});

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <SidePanel model={model} variant="alternate">
          <SidePanel.ToggleButton
            tooltipTextCollapse="Collapsing View"
            tooltipTextExpand="Expand View"
            tooltipText="Control Side Panel"
          />
          <Flex cs={stylesOverride.panel}>
            <SidePanel.Heading>Alternate Panel</SidePanel.Heading>
          </Flex>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.main}>
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
