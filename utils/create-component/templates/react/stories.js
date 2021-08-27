// React stories template

module.exports = (
  modulePath,
  storyPath,
  pascalCaseName,
  rootPath
) => `/// <reference path="${rootPath}/../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {${pascalCaseName}} from '${modulePath}';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

export default {
  title: '${storyPath}',
  decorators: [withReadme(README)],
  component: ${pascalCaseName},
};

export const Default = () => (
  <${pascalCaseName}>
    <${pascalCaseName}.Target as={SecondaryButton}>Toggle</${pascalCaseName}.Target>
    <${pascalCaseName}.Content>Content</${pascalCaseName}.Content>
  </${pascalCaseName}>
);`;
