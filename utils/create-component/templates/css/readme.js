module.exports = (name, titleCaseName, description, unstable) => `# Canvas Kit CSS ${titleCaseName}
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

\`\`\`sh
yarn add @workday/canvas-kit-css
\`\`\`

or

\`\`\`sh
yarn add @workday/canvas-kit-css-${name}
\`\`\`

Add your \`node_modules\` directory to your SASS \`includePaths\`. You will then be able to import
\`index.scss\`.

\`\`\`scss
@import '~@workday/canvas-kit-css-${name}/index.scss';
\`\`\`

## Usage

\`\`\`html
<div class="wdc-${name}"></div>
\`\`\`
`;
