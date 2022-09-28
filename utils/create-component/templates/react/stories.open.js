module.exports = (modulePath, pascalCaseName) => `
import React from 'react';

import {${pascalCaseName}} from '${modulePath}';

export const Open = () => {
  const [active, setActive] = React.useState(true);

  return (
    <${pascalCaseName}
      initialOpen={true}
      onOpen={() => setActive(true)}
      onClose={() => setActive(false)}
    >
      <${pascalCaseName}.Target variant={active ? 'inverse' : null}>Toggle</${pascalCaseName}.Target>
      <${pascalCaseName}.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </${pascalCaseName}.Content>
    </${pascalCaseName}>
  );
};
`;
