import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  accentIcon: createStyles({
    marginRight: system.space.x4,
  }),
  pageContainer: createStyles({
    gap: system.space.x4,
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    alignItems: 'center',
    padding: system.space.x4,
  }),
  panelHeading: createStyles({
    color: system.color.fg.default,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    flex: 1,
  }),
};

export const AlwaysOpen = () => {
  const model = useSidePanelModel();

  return (
    <Flex cs={stylesOverride.pageContainer}>
      <SidePanel model={model}>
        <Flex cs={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <SidePanel.Heading cs={stylesOverride.panelHeading}>Tasks Panel</SidePanel.Heading>
        </Flex>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.mainContent}>
        <Text as="p" typeLevel="body.large">
          This is the main content section.
        </Text>
      </Flex>
    </Flex>
  );
};
