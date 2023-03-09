module.exports = (
  modulePath,
  storyPath,
  pascalCaseName,
  titleCaseName,
  prerelease,
  description
) => `
import {SymbolDoc, Specifications} from '@workday/canvas-kit-docs';

import {${pascalCaseName}} from '${modulePath}';
import {Basic} from './examples/Basic';
import {Open} from './examples/Open';

<Meta title="${storyPath}" component={${pascalCaseName}} />

# ${titleCaseName}

${description}

## Installation

\`\`\`sh
yarn add @workday/canvas-kit-${prerelease && prerelease + '-'}react
\`\`\`


## Usage

### Basic Example

Show and hide using a button.

<ExampleCodeBlock code={Basic} />

### Start Open

You can open your component by default using the \`initialOpen\` prop.

<ExampleCodeBlock code={Open} />

## Component API

<SymbolDoc name="${pascalCaseName}" hideDescription />
`;
