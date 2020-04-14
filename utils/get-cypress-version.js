// gets all the versions of a given dependency by pattern matching the yarn.lock file. Lists out versions as a comma-delimited string

const fs = require('fs');
const path = require('path');

const dependency = 'cypress';

const lockContents = fs.readFileSync(path.join(process.cwd(), 'yarn.lock')).toString();

const regex = new RegExp(`\\n"?${dependency}@[^:]+"?:\\n\\s+version:? "?([0-9.]+)"?`);

console.log(
  lockContents
    .match(new RegExp(regex.source, 'g')) // add global flag to find all matches
    .map(match => match.match(regex)[1]) // extract out only the version
    .join(', ') // will output something like 1.0.0, 1.0.1
);
