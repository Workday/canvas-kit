module.exports = (upperName, unstable) => {
  let readme = `# Canvas Kit CSS ${upperName}`;

  if (unstable) {
    readme += `\n
<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.
`;
  }

  return readme;
};
