const {GITHUB_REF} = process.env;

const branch = GITHUB_REF.replace('refs/heads/', '');

function getForwardMergeBranch(branch) {
  const forwardMergeBranches = {
    support: 'master',
    master: 'prerelease/minor',
    'prerelease/minor': 'prerelease/major',
  };

  return forwardMergeBranches[branch] || '';
}

module.exports = getForwardMergeBranch;

console.log(getForwardMergeBranch(branch));
