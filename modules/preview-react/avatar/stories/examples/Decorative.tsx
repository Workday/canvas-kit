import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
// @ts-ignore
import nicholasAvatar from './nicholas-avatar.png';
import {createStyles} from '@workday/canvas-kit-styling';
import {Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
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
