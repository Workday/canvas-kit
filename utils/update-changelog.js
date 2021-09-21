const path = require('path');
const fs = require('fs');

const header = `# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
`;

const {CHANGESET_TITLE, CHANGESET_BODY} = process.env;

let changelogContents = fs
  .readFileSync(path.join(__dirname, '../CHANGELOG.md'), 'utf8')
  .toString()
  .replace(header, ''); // seems weird to do this, but this is how Lerna does it. https://github.com/lerna/lerna/blob/a47fc294393a3e9507a8207a5a2f07648a524722/core/conventional-commits/lib/read-existing-changelog.js

changelogContents = `${header}\n${CHANGESET_TITLE}\n\n${CHANGESET_BODY}\n${changelogContents}`;

fs.writeFileSync(path.join(__dirname, '../CHANGELOG.md'), changelogContents, 'utf8');
