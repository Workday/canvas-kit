import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
// @ts-ignore
import avatarImage from './nicholas-avatar.png';

export const Image = () => {
  return (
    <Avatar
      name="Saint Nicholas"
      url="https://picsum.photos/id/237/300/200"
      objectFit="contain"
      size="large"
    />
  );
};
