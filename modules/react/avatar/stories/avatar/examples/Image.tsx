import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x2,
});

export const Image = () => (
  <div className={containerStyles}>
    <h3>Working Images</h3>
    <Avatar altText="Avatar" size="extraExtraLarge" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="extraLarge" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="large" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="medium" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="small" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="extraSmall" as="div" url={testAvatar} />
    <h3>Broken Image</h3>
    <Avatar altText="Avatar" url="/fake/path/to/image.png" as="div" />
  </div>
);
