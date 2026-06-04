import {CountBadge} from '@workday/canvas-kit-react/badge';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
  padding: system.padding.md,
  flexDirection: 'column',
});

const textStyles = createStyles({
  paddingInlineEnd: system.padding.xs,
});

export const Emphasis = () => {
  return (
    <div className={containerStyles}>
      <div>
        <Text as="strong" className={textStyles}>
          Low Emphasis:
        </Text>
        <CountBadge count={427} emphasis="low" />
      </div>
      <div>
        <Text as="strong" className={textStyles}>
          High Emphasis:
        </Text>
        <CountBadge count={427} emphasis="high" />
      </div>
    </div>
  );
};
