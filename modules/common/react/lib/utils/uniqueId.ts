import * as React from 'react';
import uuid from 'uuid/v4';

export const uniqueId = () => {
  // https://codesandbox.io/s/react-functional-component-ids-p2ndq
  const [id] = React.useState(() => uuid().replace(/^[0-9]*/gi, ''));
  return id;
};
