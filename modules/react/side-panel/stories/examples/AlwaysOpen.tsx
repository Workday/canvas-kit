import {rocketIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  accentIcon: createStyles({
    marginInlineEnd: system.gap.md,
  }),
  pageContainer: createStyles({
    gap: system.gap.md,
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    alignItems: 'center',
    padding: system.padding.md,
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
  return (
    <Flex cs={stylesOverride.pageContainer}>
      <SidePanel initialTransitionState="expanded">
        <Flex cs={stylesOverride.panelContainer}>
          <ExpressiveIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <SidePanel.Heading size="small" cs={stylesOverride.panelHeading}>
            Tasks Panel
          </SidePanel.Heading>
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
