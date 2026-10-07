import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const viewportStyles = createStyles({
  height: px2rem(320),
});

export const AlternativePanel = () => {
  return (
    <Flex cs={viewportStyles}>
      <SidePanel variant="alternative">
        <SidePanel.ToggleButton aria-label="Collapse View" />
        <SidePanel.Heading size="small">Alternative Panel</SidePanel.Heading>
      </SidePanel>
    </Flex>
  );
};
