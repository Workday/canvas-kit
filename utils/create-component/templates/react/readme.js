const getTitleCaseName = require('../../nameUtils').getTitleCaseName;

module.exports = (name, description, prerelease) => {
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

  return `
# Canvas Kit ${titleCaseName}
${prereleaseMsg}
${description}

View the [documentation for ${titleCaseName}](https://workday.github.io/canvas-kit/?path=/docs/${prerelease ? prerelease + '-' : ''}${name}-react)
on Storybook.

[> Workday Design Reference: ${titleCaseName}](https://design.workday.com/components/)
`;

};
