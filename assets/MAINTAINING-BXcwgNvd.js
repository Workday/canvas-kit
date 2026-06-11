import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as o}from"./index-3YbjYt95.js";import{ae as a}from"./index-D_439bJA.js";import"./index-IfJi-UCQ.js";import"./iframe-Bg3fn7F7.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Maintaining"}),`
`,e.jsx(r.h1,{id:"maintaining-canvas-kit",children:"Maintaining Canvas Kit"}),`
`,e.jsx(r.p,{children:`If you're a Canvas Kit core maintainer, this doc is for you! Consider this a field guide to help you
maintain Canvas Kit with confidence. If you see some information that's unclear, incomplete, or
incorrect, please update this doc to help your future self and others. Thanks for maintaining Canvas
Kit!`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#branches",children:"Branches"})}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"#github-actions",children:"GitHub Actions"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#forward-merge-workflow",children:"Forward Merge Workflow"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#release-minor-workflow",children:"Release Minor Workflow"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#release-workflow",children:"Release Workflow"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"#releases",children:"Releases"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#patch-releases",children:"Patch Releases"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#minor-releases",children:"Minor Releases"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#major-releases",children:"Major Releases"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#canary-releases",children:"Canary Releases"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"#codemods",children:"Codemods"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#add-a-new-codemod",children:"Add a New Codemod"})}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#deprecations",children:"Deprecations"})}),`
`]}),`
`,e.jsx(r.h2,{id:"branches",children:"Branches"}),`
`,e.jsx(r.p,{children:`We maintain three major versions of Canvas Kit at any given time: the previous major, the current
major, and the next major version. These versions live in four branches:`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"support"})," - the previous major version - patches only, no new features or breaking changes"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"master"})," - the current major version - patches and small updates only"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"prerelease/minor"})," - the current major version - new features are added here"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"prerelease/major"})," - the next major version - patches, new features, and major breaking changes"]}),`
`]}),`
`,e.jsx(r.h2,{id:"github-actions",children:"GitHub Actions"}),`
`,e.jsxs(r.p,{children:["We use ",e.jsx(r.a,{href:"https://docs.github.com/en/actions",rel:"nofollow",children:"GitHub Actions"}),` to automate our workflows and CI / CD
processes. You can view all our workflows `,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(r.h3,{id:"forward-merge-workflow",children:"Forward Merge Workflow"}),`
`,e.jsxs(r.p,{children:[`Forward merges ensure that changes made in lower-versioned branches are forwarded to
higher-versioned branches. So for example, if a bug is patched in the `,e.jsx(r.code,{children:"support"}),` branch, forward
merging propogates the fix so it's available in `,e.jsx(r.code,{children:"master"}),", ",e.jsx(r.code,{children:"prerelease/minor"})," and ",e.jsx(r.code,{children:"prerelease/major"}),`
branches. This workflow is fully automated, which reduces opportunities for error.`]}),`
`,e.jsxs(r.p,{children:[`The
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/forward-merge.yml",rel:"nofollow",children:"forward merge workflow"}),`
runs on `,e.jsx(r.code,{children:"support"}),", ",e.jsx(r.code,{children:"master"}),", and ",e.jsx(r.code,{children:"prerelease/minor"})," branches. Forward merges for ",e.jsx(r.code,{children:"support"}),` and
`,e.jsx(r.code,{children:"master"}),` run automatically when a release commit is merged to that branch. Every release commit
starts with `,e.jsx(r.code,{children:"chore: Release"}),`, and that's how the forward merge workflow identifies them. Forward
merges will run on every merge to `,e.jsx(r.code,{children:"prerelease/minor"})," regardless of the commit message."]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Run Forward Merge?"}),e.jsx(r.th,{children:"Branch"}),e.jsx(r.th,{children:"Commit Message"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"✅"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"support"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"chore: Release v6.8.14 [skip release]"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"⛔️"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"support"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"fix: Remove unused props"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"✅"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"master"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"chore: Release v7.3.0 [skip release]"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"⛔️"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"master"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"fix: Update Popup types"})})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:"✅"}),e.jsx(r.td,{children:e.jsx(r.code,{children:"prerelease/minor"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"feat: Add new Layout components"})})]})]})]}),`
`,e.jsxs(r.p,{children:[`If the forward merge workflow fails and cannot automatically merge the update to the next branch, it
will generate a PR with instructions on how to handle the forward merge manually. For a more
in-depth review,
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/forward-merge.yml",rel:"nofollow",children:"view the workflow source code"}),"."]}),`
`,e.jsx(r.h3,{id:"release-minor-workflow",children:"Release Minor Workflow"}),`
`,e.jsxs(r.p,{children:[`The
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release-minor.yml",rel:"nofollow",children:"release minor workflow"}),`
is initated manually and begins the process for `,e.jsx(r.a,{href:"#minor-releases",children:"minor releases"}),`. It checks out the
`,e.jsx(r.code,{children:"prerelease/minor"})," branch and pushes any commits not in ",e.jsx(r.code,{children:"master"}),` to the master branch. It does not
run any tests or validations as all the commits have been verified by the previous workflows. Once
`,e.jsx(r.code,{children:"prerelease/minor"})," is merged to ",e.jsx(r.code,{children:"master"}),", it will trigger the ",e.jsx(r.a,{href:"#release-workflow",children:"release workflow"}),`
which will publish a new version of Canvas Kit.`]}),`
`,e.jsxs(r.p,{children:["This workflow will only fail if there are commits in ",e.jsx(r.code,{children:"master"}),` that are not included in
`,e.jsx(r.code,{children:"prerelease/minor"}),`. You can verify that
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/prerelease/minor...master",rel:"nofollow",children:"here"}),`. In that case,
you'll need to `,e.jsx(r.a,{href:"#forward-merge-workflow",children:"foward merge"})," any commits in ",e.jsx(r.code,{children:"master"}),` to
`,e.jsx(r.code,{children:"prerelease/minor"}),`. For a more in-depth review of the workflow,
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release-minor.yml",rel:"nofollow",children:"view the source code"}),"."]}),`
`,e.jsx(r.h3,{id:"release-workflow",children:"Release Workflow"}),`
`,e.jsxs(r.p,{children:[`The
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release-minor.yml",rel:"nofollow",children:"release workflow"}),`
is initiated automatically and runs the release process for all Canvas Kit releases (major, minor,
and patch) on the `,e.jsx(r.code,{children:"master"})," and ",e.jsx(r.code,{children:"support"})," branches. This workflow will only run if:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The commit message does not contain ",e.jsx(r.code,{children:"[skip release]"})]}),`
`,e.jsxs(r.li,{children:["OR the workflow was manually triggered and has a ",e.jsx(r.code,{children:"version"})," string"]}),`
`]}),`
`,e.jsx(r.p,{children:"At a high-level, this workflow will:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"checkout the repository"}),`
`,e.jsx(r.li,{children:"install dependencies (if they are not already cached)"}),`
`,e.jsxs(r.li,{children:["run ",e.jsx(r.code,{children:"yarn bump"})," to craete a commit and a git tag"]}),`
`,e.jsx(r.li,{children:"bump package versions"}),`
`,e.jsx(r.li,{children:"generate a changeset"}),`
`,e.jsx(r.li,{children:"update the changelog"}),`
`,e.jsx(r.li,{children:"build Storybook"}),`
`,e.jsx(r.li,{children:"publish to npm"}),`
`,e.jsx(r.li,{children:"create a GitHub release"}),`
`,e.jsx(r.li,{children:"publish Storybook"}),`
`,e.jsx(r.li,{children:"update Chromatic baseline"}),`
`,e.jsx(r.li,{children:"notify Slack"}),`
`]}),`
`,e.jsxs(r.p,{children:[`For a more in-depth review of the workflow,
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release.yml",rel:"nofollow",children:"view the source code"})]}),`
`,e.jsx(r.h3,{id:"canary-workflow",children:"Canary Workflow"}),`
`,e.jsxs(r.p,{children:[`The
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release-minor.yml",rel:"nofollow",children:"canary workflow"}),`
are initiated automatically when a commit is merged to `,e.jsx(r.code,{children:"prerelease/minor"})," or ",e.jsx(r.code,{children:"prerelease/major"}),`. For
a more in-depth review of the workflow,
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/blob/master/.github/workflows/release-minor.yml",rel:"nofollow",children:"view the source code"}),"."]}),`
`,e.jsx(r.h2,{id:"releases",children:"Releases"}),`
`,e.jsx(r.h3,{id:"patch-releases",children:"Patch Releases"}),`
`,e.jsxs(r.p,{children:["Patch releases in the ",e.jsx(r.code,{children:"support"})," and ",e.jsx(r.code,{children:"master"}),` branches go out automatically once the pull request is
merged. These releases use the `,e.jsx(r.a,{href:"#release-workflow",children:"release workflow"}),` to publish updates
automatically.`]}),`
`,e.jsx(r.h3,{id:"minor-releases",children:"Minor Releases"}),`
`,e.jsxs(r.p,{children:[`Canvas Kit minor releases occur every three weeks. They are initiated manually by a maintainer with
the `,e.jsx(r.a,{href:"#release-minor-workflow",children:"release minor workflow"}),`. Before you initiate a minor release, all
branches up to `,e.jsx(r.code,{children:"prerelease/minor"})," need to be ",e.jsx(r.a,{href:"#forward-merge-workflow",children:"forward merged"}),`. Check all of
the following to make sure there are no commits listed:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/master...support",rel:"nofollow",children:"Compare"})," ",e.jsx(r.code,{children:"master"})," with ",e.jsx(r.code,{children:"support"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/prerelease/minor...master",rel:"nofollow",children:"Compare"}),`
`,e.jsx(r.code,{children:"prerelease/minor"})," with ",e.jsx(r.code,{children:"master"})]}),`
`]}),`
`,e.jsxs(r.p,{children:[`If there are any commits listed, run the
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/forward-merge.yml",rel:"nofollow",children:"forward merge"}),` for the
branch that isn't merged forward (`,e.jsx(r.code,{children:"support"}),", ",e.jsx(r.code,{children:"master"}),", or ",e.jsx(r.code,{children:"prerelease/minor"}),`). It is safe to run
this job even if there are no changes since the job will recognize no change and bail.`]}),`
`,e.jsx(r.h3,{id:"major-releases",children:"Major Releases"}),`
`,e.jsx(r.p,{children:`Canvas Kit major releases occur every six months. They are manual and performed by a maintainer. The
process is similar to minor releases, except the addition of the support branch. All branches have
to be forward merged. Check all of the following to make sure there are no commits listed:`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/master...support",rel:"nofollow",children:"Compare"})," ",e.jsx(r.code,{children:"master"})," with ",e.jsx(r.code,{children:"support"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/prerelease/minor...master",rel:"nofollow",children:"Compare"}),`
`,e.jsx(r.code,{children:"prerelease/minor"})," with ",e.jsx(r.code,{children:"master"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/compare/prerelease/major...prerelease/minor",rel:"nofollow",children:"Compare"}),`
`,e.jsx(r.code,{children:"prerelease/major"})," with ",e.jsx(r.code,{children:"prerelease/minor"})]}),`
`]}),`
`,e.jsxs(r.p,{children:[`If there are any commits listed, run the
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/forward-merge.yml",rel:"nofollow",children:"forward merge"}),` for the
branch that isn't merged forward (`,e.jsx(r.code,{children:"support"}),", ",e.jsx(r.code,{children:"master"}),", or ",e.jsx(r.code,{children:"prerelease/minor"}),`). It is safe to run
this job even if there are no changes since the job will recognize no change and bail.`]}),`
`,e.jsxs(r.p,{children:["We'll be using the terms ",e.jsx(r.code,{children:"previous major"}),", ",e.jsx(r.code,{children:"current major"}),", and ",e.jsx(r.code,{children:"next major"}),` in the context of
versions before the release process is complete. For example, if `,e.jsx(r.code,{children:"support"}),` is pointing to v4,
`,e.jsx(r.code,{children:"master"})," to v5 and ",e.jsx(r.code,{children:"prerelease/major"}),` to v6, we need to update these pointers. After these steps are
completed, the following will happen:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"support"}),": v4 -> v5"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"master"}),": v5 -> v6"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"prerelease/minor"}),": v5 -> v6"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"prerelease/major"}),": v6 -> v7"]}),`
`]}),`
`,e.jsxs(r.p,{children:[`Before starting the next steps, we need to disable some CI jobs
(`,e.jsx(r.a,{href:"https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow",rel:"nofollow",children:"Disabling Workflow Docs"}),")."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/canary.yml",rel:"nofollow",children:"Canary"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/forward-merge.yml",rel:"nofollow",children:"forward-merge"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/release.yml",rel:"nofollow",children:"Release"})}),`
`]}),`
`,e.jsx(r.p,{children:"These jobs will only cause problems during the release cycle. We will enable them when we're done."}),`
`,e.jsx(r.p,{children:"Locally, make sure to fetch upstream."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`git fetch upstream
`})}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Update ",e.jsx(r.code,{children:"support"})," to point to the current major version ",e.jsx(r.code,{children:"master"}),` is currently pointing to. This
effectively moves the `,e.jsx(r.code,{children:"HEAD"})," pointer of the ",e.jsx(r.code,{children:"support"})," branch to the same ",e.jsx(r.code,{children:"HEAD"})," of ",e.jsx(r.code,{children:"master"})]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`git checkout master
git pull upstream master
git push upstream master:support
`})}),`
`,e.jsx(r.p,{children:`Normally, this would trigger a release job, but we've disabled the job and there's nothing to
release anyway.`}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Re-enable the ",e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/release.yml",rel:"nofollow",children:"Release"}),` job
(`,e.jsx(r.a,{href:"https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#enabling-a-workflow",rel:"nofollow",children:"Enable Workflow Docs"}),")"]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Update ",e.jsx(r.code,{children:"master"})," to point to the next major release ",e.jsx(r.code,{children:"prerelease/major"}),` is currently pointing to.
This step produces the actual release, including a Slack message.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`git checkout prerelease/major
git pull upstream prerelease/major
git push upstream prerelease/major:master
`})}),`
`,e.jsxs(r.p,{children:[`This will trigger the
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/release.yml",rel:"nofollow",children:"release workflow"}),`. Up to
this point, `,e.jsx(r.code,{children:"prerelease/major"}),` has been creating canary jobs. This will trigger the actual
release. We must wait for this job to finish. The job will be running against `,e.jsx(r.code,{children:"master"}),`. The CI
job will run `,e.jsx(r.code,{children:"lerna bump"})," and push that commit back onto the ",e.jsx(r.code,{children:"master"}),` branch which will include
the update to `,e.jsx(r.code,{children:"lerna.json"})," that we need in the next step."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note:"}),` If something went wrong and a version is incorrect, you can cancel this release
workflow run and manually run it with a version override. For example, for the `,e.jsx(r.code,{children:"v8.0.0"}),` release,
a `,e.jsx(r.code,{children:"lerna bump"})," command chose ",e.jsx(r.code,{children:"v8.0.0"}),` for a release version on a patch update and we had to
remove this release from npm. According to npm's release policy, they take down the release from
npm, but the version string can never be used again, so we the actual v8 release was `,e.jsx(r.code,{children:"8.0.1"})]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[`We need to wait for the release workflow job to finish and the slack message be announced. Once
the previous step is completed, we need to update `,e.jsx(r.code,{children:"prerelease/minor"})," and ",e.jsx(r.code,{children:"prerelease/major"}),` to
point to the current `,e.jsx(r.code,{children:"HEAD"}),` of master (which should now contain the next major version release
commit).`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:` git checkout master
 git pull upstream master
 git push upstream master:prerelease/minor
 git push upstream master:prerelease/major
`})}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Re-enable the ",e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/canary.yml",rel:"nofollow",children:"Canary"}),` and
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/actions/workflows/forward-merge.yml",rel:"nofollow",children:"forward-merge"}),`
workflows
(`,e.jsx(r.a,{href:"https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#enabling-a-workflow",rel:"nofollow",children:"Enable Workflow Docs"}),")"]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"🎉"}),`
`]}),`
`]}),`
`,e.jsx(r.h3,{id:"canary-releases",children:"Canary Releases"}),`
`,e.jsxs(r.p,{children:["Canary releases use the ",e.jsx(r.a,{href:"#canary-workflow",children:"canary workflow"}),` to automatically publish test versions
of Canvas Kit. While these releases can be unstable, they are useful for external testing or
allowing teams to experiment with new features or fixes before a stable release is available. These
releases only run on `,e.jsx(r.code,{children:"prerelease/minor"})," and ",e.jsx(r.code,{children:"prerelease/major"})," branches."]}),`
`,e.jsx(r.h4,{id:"prerelease-minor-canaries",children:"Prerelease Minor Canaries"}),`
`,e.jsxs(r.p,{children:["Canary releases on the ",e.jsx(r.code,{children:"prerelease/minor"}),` branch go out automatically once the pull request is
merged. The major version will be appended with `,e.jsx(r.code,{children:"-next.{commit-count}"}),", where ",e.jsx(r.code,{children:"commit-count"}),` is the
number of commits since the last release tag. So for example, a V7 canary would look something like
this: `,e.jsx(r.code,{children:"7.3.0-next.3"}),"."]}),`
`,e.jsx(r.h4,{id:"prerelease-major-canaries",children:"Prerelease Major Canaries"}),`
`,e.jsxs(r.p,{children:["Canary releases on the ",e.jsx(r.code,{children:"prerelease/major"}),` branch go out automatically once the pull request is
merged. The major version will be appended with `,e.jsx(r.code,{children:"-alpha.{build-number}-next.{commit-count}"}),`, where
`,e.jsx(r.code,{children:"build-number"})," is the GitHub build identifier, and ",e.jsx(r.code,{children:"commit-count"}),` is the number of commits since the
last release tag. So for example, a V8 canary would look something like this:
`,e.jsx(r.code,{children:"8.0.0-alpha.127-next.4"}),"."]}),`
`,e.jsx(r.h2,{id:"codemods",children:"Codemods"}),`
`,e.jsx(r.p,{children:`We use codemods to reduce friction for consumers as they make changes and do upgrades. Codemods are
accompany major version releases since v5, and can also be released in minor releases if users want
to apply some changes sooner.`}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:`Note: In v12, we have done some infrastructure updates with moving to Webpack 5 and Storybook 7.
With these updates has come some formatting issues after running our codemods. We recommend
running a formatter to address the format issues that have been introduced in v12.`})}),`
`]}),`
`,e.jsx(r.h3,{id:"add-a-new-codemod",children:"Add a New Codemod"}),`
`,e.jsx(r.p,{children:`Adding a new codemod is pretty straightforward, but this guide will make sure you don't miss any
steps along the way.`}),`
`,e.jsx(r.p,{children:`First, you need to add a new command to the root CLI. For this example, we'll pretend you're adding
a new v10 codemod.`}),`
`,e.jsx(r.h4,{id:"initial-setup",children:"Initial Setup"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`// modules/codemod/lib/index.js
.command('v10 [path]', chalk.gray('Canvas Kit v9 > v10 upgrade transform'), yargs => {
  yargs.positional('path', {
    type: 'string',
    default: '.',
    describe: chalk.gray('The path to execute the transform in (recursively).'),
  });
})
`})}),`
`,e.jsx(r.p,{children:"Next, you'll want to add new v10 files and directories."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`# add code and spec directories
mkdir modules/codemod/v10 modules/codemod/spec
# add code files
touch modules/codemod/v10/index.ts modules/codemod/v10/__example__.ts
## add spec files
touch modules/codemod/v10/spec/__example__.spec.ts modules/codemod/v10/spec/expectTransformFactory.spec.ts
`})}),`
`,e.jsx(r.h4,{id:"add-the-codemod",children:"Add the Codemod"}),`
`,e.jsx(r.p,{children:"Now you can add your first (placeholder) codemod."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// modules/codemod/v10/__example__.ts
import {Transform} from 'jscodeshift';

// placeholder codemod
const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  return root.toSource();
};

export default transform;
`})}),`
`,e.jsx(r.p,{children:"And add a codemod runner:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// modules/codemod/v10/index.ts
import {Transform} from 'jscodeshift';

// TODO: Remove this
import placeholderCodemod from './__example__';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // TODO: Remove this
    placeholderCodemod,
    // add codemods here
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
`})}),`
`,e.jsx(r.h4,{id:"add-tests",children:"Add Tests"}),`
`,e.jsx(r.p,{children:`Now you're ready to add your tests. First, we'll add this test factory to make your tests easier to
write.`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// modules/codemod/v10/spec/expectTransformFactory.spec.ts
import {runInlineTest} from 'jscodeshift/dist/testUtils';

export const expectTransformFactory =
  (fn: Function) => (input: string, expected: string, options?: Record<string, any>) => {
    return runInlineTest(fn, options, {source: input}, expected, {parser: 'tsx'});
  };
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// modules/codemod/v10/spec/__example__.spec.ts
import {expectTransformFactory} from './expectTransformFactory';
import transform from '../__remove_this__';

const expectTransform = expectTransformFactory(transform);

describe('Example Codemod', () => {
  it('should not modify the code', () => {
    const input = "const foo = 'bar';";
    const expected = "const foo = 'bar';";
    expectTransform(input, expected);
  });
});
`})}),`
`,e.jsx(r.p,{children:"And that's it! You're done. Stage your changes, commit, and push up a PR."}),`
`,e.jsx(r.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(r.p,{children:["We add the ",e.jsx(r.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` JSDoc tag to code we plan to remove
in a future major release. This signals consumers to migrate to a more stable alternative before the
deprecated code is removed.`]}),`
`,e.jsxs(r.p,{children:["Add the ",e.jsx(r.code,{children:"@deprecated"}),` tag to the JSDoc comment directly above all exported declarations you wish to
deprecate. Create a new JSDoc comment if one doesn't already exist.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`/**
 * ...existing JSDoc comment, if present...
 *
 * @deprecated ⚠️ \${Deprecated Name} has been deprecated and will be removed in a future major release. \${Provide a migration strategy}
 */
export...
`})}),`
`,e.jsx(r.p,{children:`The provided migration strategy can take on any form as long as it gives the consumer a path forward
once the deprecated code is removed.`}),`
`,e.jsx(r.p,{children:`For example, we'll deprecate a component in our Main package before replacing it with an updated
version of the component in our Preview or Labs packages. Note the inclusion of package names
(Main/Preview/Labs) for disambiguation as well as the optional Storybook link to the updated
component.`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`/**
 * @deprecated ⚠️ Status Indicator in Main has been deprecated and will be removed in a future major release. Please use [Status Indicator in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs) instead.
 */
export class StatusIndicator...
`})}),`
`,e.jsx(r.p,{children:"Here's an example of a deprecated utility function."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:"/**\n * @deprecated ⚠️ `subModelHook` has been deprecated and will be removed in a future major release. Please use `createSubModelElemPropsHook` instead.\n */\nexport const subModelHook...\n"})}),`
`,e.jsxs(r.p,{children:["You may share the same ",e.jsx(r.code,{children:"@deprecation"})," note for multiple deprecations related to the same component."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`/**
 * @deprecated ⚠️ Status Indicator in Main has been deprecated and will be removed in a future major release. Please use [Status Indicator in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs) instead.
 */
export enum StatusIndicatorType...

/**
 * @deprecated ⚠️ Status Indicator in Main has been deprecated and will be removed in a future major release. Please use [Status Indicator in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs) instead.
 */
export interface StatusIndicatorProps...

/**
 * @deprecated ⚠️ Status Indicator in Main has been deprecated and will be removed in a future major release. Please use [Status Indicator in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs) instead.
 */
export class StatusIndicator...
`})}),`
`,e.jsxs(r.p,{children:[`Finally, be sure to notify users of the deprecation in the corresponding
`,e.jsx(r.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/docs/mdx",rel:"nofollow",children:"Upgrade Guide"})," MDX."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-md",children:`## Deprecations

...

### \${Deprecated Name}

**PR:** [#\${PR number where the deprecation took
place}](https://github.com/Workday/canvas-kit/pull/\${PR number})

We've deprecated \${Deprecated Name} \${Optional: Include package name to disambiguate (e.g., "from
Labs")} \${Provide a migration strategy}
`})})]})}function j(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
