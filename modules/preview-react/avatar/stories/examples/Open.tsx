import React from 'react';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

export const Open = () => {
  const [active, setActive] = React.useState(true);

  return (
    <Avatar initialOpen={true} onOpen={() => setActive(true)} onClose={() => setActive(false)}>
      <Avatar.Target variant={active ? 'inverse' : null}>Toggle</Avatar.Target>
      <Avatar.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Avatar.Content>
    </Avatar>
  );
};
