#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const contents = fs.readFileSync(path.resolve(__dirname, '../yarn.lock')).toString();

if (/resolved\s".*(artifactory).*\n/.test(contents)) {
  console.error(
    `This 'yarn.lock' file contains resolved urls that are not allowed. This usually happens if you're trying to install npm packages through a proxy like Artifactory. Make sure your npm registry is set to one that is publicly available and try running 'yarn install' again.`
  );
  process.exit(1);
}

if (/@workday\/canvas-kit/.test(contents)) {
  console.error(
    `This 'yarn.lock' file contains references to Canvas Kit. If the monorepo versions are set correctly, this should never happen. Find the version listed in yarn.lock within the repo and adjust this dependency to the correct version.`
  );
  process.exit(1);
}
