import {rocketIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexHeadingStyles = createStyles({
  alignItems: 'center',
  gap: system.gap.sm,
});

const viewPortStyles = createStyles({
  height: px2rem(320),
});

export const Basic = () => {
  return (
    <Flex cs={viewPortStyles}>
      <SidePanel>
        <SidePanel.Heading size="small">
          <Flex cs={flexHeadingStyles}>
            <ExpressiveIcon icon={rocketIcon} />
            Tasks Panel
          </Flex>
        </SidePanel.Heading>
        <SidePanel.ToggleButton aria-label="Collapse View" />
      </SidePanel>
    </Flex>
  );
};
