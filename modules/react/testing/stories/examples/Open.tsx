import React from 'react';

import {Testing} from '@workday/canvas-kit-react/testing';

export const Open = () => {
  const [active, setActive] = React.useState(true);

  return (
    <Testing initialOpen={true} onOpen={() => setActive(true)} onClose={() => setActive(false)}>
      <Testing.Target variant={active ? 'inverse' : null}>Toggle</Testing.Target>
      <Testing.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Testing.Content>
    </Testing>
  );
};
