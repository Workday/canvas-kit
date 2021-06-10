const getPascalCaseName = require('../../nameUtils').getPascalCaseName;
const getTitleCaseName = require('../../nameUtils').getTitleCaseName;

module.exports = (name, description, prerelease) => {
  const pascalCaseName = getPascalCaseName(name);
  const titleCaseName = getTitleCaseName(name);

  let prereleaseMsg = '';

  if (prerelease === 'labs') {
    prereleaseMsg = `
<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in prerelease.
`;
  } else if (prerelease === 'preview') {
    prereleaseMsg = `
<a href="https://github.com/Workday/canvas-kit/tree/master/modules/preview-react/README.md">
  <img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />
</a>  This component is work in progress and currently in prerelease.
`;
  }

  return `# Canvas Kit React ${titleCaseName}
${prereleaseMsg}
${description}

## Installation

\`\`\`sh
yarn add @workday/canvas-kit-${prerelease && prerelease + '-'}react
\`\`\`

## Usage

\`\`\`tsx
import * as React from 'react';
import {${pascalCaseName}} from '@workday/canvas-kit-${prerelease &&
    prerelease + '-'}react/${name}';

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
