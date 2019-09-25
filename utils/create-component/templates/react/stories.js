// React stories template

module.exports = (storyPath, pascalCaseName, rootPath) => `
/// <reference path="${rootPath}/typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import ${pascalCaseName} from '../index';
import README from '../README.md';

storiesOf('${storyPath}', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <${pascalCaseName} />
    </div>
  ));
`;
