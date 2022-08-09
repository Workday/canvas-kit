module.exports = (modulePath, storyPath, pascalCaseName) => `import React from 'react';

import {${pascalCaseName}} from '${modulePath}';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: '${storyPath}',
  component: ${pascalCaseName},
};

export const Default = () => (
  <${pascalCaseName}>
    <${pascalCaseName}.Target as={SecondaryButton}>Toggle</${pascalCaseName}.Target>
    <${pascalCaseName}.Content>Content</${pascalCaseName}.Content>
  </${pascalCaseName}>
);`;
