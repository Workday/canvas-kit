import {BaseAvatar} from '@workday/canvas-kit-preview-react/avatar';

export const Basic = () => {
  return (
    <BaseAvatar variant="blue">
      {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
      <BaseAvatar.Name name="JohFOO" />
    </BaseAvatar>
  );
};
