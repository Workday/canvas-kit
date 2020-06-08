// React stories template

module.exports = (storyPath, pascalCaseName, rootPath) => `
/// <reference path="${rootPath}/../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import ${pascalCaseName} from '../index';
import README from '../README.md';

export default {
  title: '${storyPath}',
  decorators: [withReadme(README)],
  component: ${pascalCaseName},
};

export const Default = () => <${pascalCaseName} />
`;
