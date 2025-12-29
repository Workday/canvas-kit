import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// @ts-ignore
import nicholasAvatar from './nicholas-avatar.jpg';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
  alignItems: 'center',
});
export const Decorative = () => {
  return (
    <div className={containerStyles}>
      <Avatar
        name="Nicholas Smith"
        isDecorative
        url={nicholasAvatar}
        objectFit="cover"
        size="small"
      />
      <Text>Nicholas Smith</Text>
    </div>
  );
};
