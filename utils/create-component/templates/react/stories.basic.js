module.exports = (modulePath, pascalCaseName) => `
import React from 'react';

import {${pascalCaseName}} from '${modulePath}';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  return (
    <${pascalCaseName}>
      <${pascalCaseName}.Target as={SecondaryButton}>Toggle</${pascalCaseName}.Target>
      <${pascalCaseName}.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </${pascalCaseName}.Content>
    </${pascalCaseName}>
  );
};
`;
