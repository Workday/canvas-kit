import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Button = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" variant="dark" onClick={handleAvatarButtonClick} />
    <Avatar altText="Avatar" onClick={handleAvatarButtonClick} />
    <Avatar altText="Avatar" url={testAvatar} onClick={handleAvatarButtonClick} />
  </div>
);
