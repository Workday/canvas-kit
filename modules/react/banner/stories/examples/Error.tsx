import {Banner} from '@workday/canvas-kit-react/banner';

export const Error = () => {
  return (
    <Banner hasError={true}>
      <Banner.Icon />
      <Banner.Label>3 Errors</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};
