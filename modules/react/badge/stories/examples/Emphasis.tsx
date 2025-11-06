import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
  flexDirection: 'column',
});

const textStyles = createStyles({
  paddingInlineEnd: system.space.x2,
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
