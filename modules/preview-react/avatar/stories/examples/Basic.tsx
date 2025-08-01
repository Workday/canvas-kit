import {BaseAvatar, Avatar} from '@workday/canvas-kit-preview-react/avatar';

export const Basic = () => {
  return (
    <div style={{display: 'inline-flex', gap: '10px'}}>
      <Avatar
        name="JohFOO"
        variant="blue"
        size="large"
        url="https://picsum.photos/id/237/300/200"
      />
      <BaseAvatar variant="blue" size="extraExtraSmall">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="extraSmall">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="small">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="medium">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="large">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="extraLarge">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
      <BaseAvatar variant="blue" size="extraExtraLarge">
        {/* <BaseAvatar.Image alt="Avatar" src="https://picsum.photos/id/237/300/200" /> */}
        <BaseAvatar.Name name="JohFOO" />
      </BaseAvatar>
    </div>
  );
};
