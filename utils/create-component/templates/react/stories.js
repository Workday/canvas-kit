module.exports = (modulePath, storyPath, pascalCaseName, prerelease) => `import React from 'react';

\`\`\`sh
yarn add @workday/canvas-kit-${prerelease && prerelease + '-'}react
\`\`\`


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
