import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Open = () => {
  const [active, setActive] = React.useState(true);

  return <InformationHighlight></InformationHighlight>;
};
