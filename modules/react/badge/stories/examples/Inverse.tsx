import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';
const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
  backgroundColor: system.color.static.blue.default,
  flexDirection: 'column',
});

const textStyles = createStyles({
  paddingInlineEnd: system.space.x2,
});

export const Inverse = () => {
  return (
    <div className={containerStyles}>
      <div>
        <Text as="strong" variant="inverse" className={textStyles}>
          Low Emphasis:
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="low" />
      </div>
      <div>
        <Text as="strong" variant="inverse" className={textStyles}>
          High Emphasis
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="high" />
      </div>
    </div>
  );
};
