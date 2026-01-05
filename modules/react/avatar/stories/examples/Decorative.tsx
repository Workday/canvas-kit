import {Avatar} from '@workday/canvas-kit-react/avatar';

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
