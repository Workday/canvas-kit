const getPascalCaseName = require('../../nameUtils').getPascalCaseName;
const getTitleCaseName = require('../../nameUtils').getTitleCaseName;

module.exports = (name, description, unstable) => {
  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);

  return `# Canvas Kit React ${titleCaseName}
${
  unstable
    ? `
<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.
`
    : ''
}
${description}

## Installation
${
  !unstable
    ? `
\`\`\`sh
yarn add @workday/canvas-kit-react
\`\`\`

or
`
    : ''
}
\`\`\`sh
yarn add @workday/canvas-kit${unstable ? '-labs' : ''}-react-${name}
\`\`\`

## Usage

\`\`\`tsx
import * as React from 'react';
import ${pascalCaseName} from '@workday/canvas-kit${unstable ? '-labs' : ''}-react-${name}';

<${pascalCaseName} />;
\`\`\`

## Static Properties

> None

## Component Props

### Required

> None

### Optional

> None
`;
};
