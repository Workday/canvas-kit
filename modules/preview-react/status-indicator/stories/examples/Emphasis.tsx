import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
});

export const Emphasis = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator emphasis="high">
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>High Emphasis</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Icon icon={cloudArrowUpIcon} />
        <StatusIndicator.Label>Low Emphasis</StatusIndicator.Label>
      </StatusIndicator>
    </Flex>
  );
};
