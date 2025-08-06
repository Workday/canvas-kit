import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
// @ts-ignore
import avatarImage from './nicholas-avatar.png';

export const Image = () => {
  return <Avatar name="Saint Nicholas" url={avatarImage} objectFit="contain" size="large" />;
};
