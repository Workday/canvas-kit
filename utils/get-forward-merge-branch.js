const {assert} = require('console');

const {GITHUB_REF} = process.env;

const branch = GITHUB_REF.replace('refs/heads/', '');

const forwardMergeBranches = {
  support: 'master',
  master: 'prerelease/minor',
  'prerelease/minor': 'prerelease/major',
};

function getForwardMergeBranch(/** @type string */ branch) {
  const nextBranch = forwardMergeBranches[branch];

  assert(
    nextBranch,
    `Could not determine a forward merge branch for "${branch}". Supported branch inputs are ${Object.keys(
      forwardMergeBranches
    ).join(', ')}`
  );

  return nextBranch;
}

module.exports = getForwardMergeBranch;

// This console log for forward-merge.yml workflow and for workflows that need access to the next branch
console.log(getForwardMergeBranch(branch));
