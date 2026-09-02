import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as a}from"./index-Bt0ZT3SD.js";import"./index-IfJi-UCQ.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Icon Migration/Codemod"}),`
`,e.jsx(n.h1,{id:"migration-codemod",children:"Migration Codemod"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon-migration"})}),` codemod reads deprecation metadata shipped with
`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` and updates imports and usages in your source files
automatically. For what changed in v5 and package installation, see the
`,e.jsx(n.a,{href:"/docs/guides-icon-migration-sana-canvas-assets-overview--docs",children:"Sana Canvas Assets overview"}),"."]}),`
`,e.jsxs(n.p,{children:[`For general advice on running Canvas Kit codemods (review process, formatting, file types), see
`,e.jsx(n.a,{href:"/docs/guides-codemods--docs",children:"Codemods"}),"."]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#running-the-codemod",children:"Running the Codemod"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-the-codemod-does",children:"What the Codemod Does"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#all-icon-transforms",children:"All Icon Transforms"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v4-naming-convention-migrations",children:"v4 Naming Convention Migrations"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#v5-sana-canvas-assets-changes",children:"v5 Sana Canvas Assets Changes"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#example-transformations",children:"Example Transformations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#named-import",children:"Named Import"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#import-alias-preserved",children:"Import Alias Preserved"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fallback-already-imported",children:"Fallback Already Imported"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#what-the-codemod-does-not-do",children:"What the Codemod Does Not Do"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#after-migration",children:"After Migration"})}),`
`]}),`
`,e.jsx(n.h2,{id:"running-the-codemod",children:"Running the Codemod"}),`
`,e.jsxs(n.p,{children:["Upgrade ",e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),` to v5 before you run the codemod so deprecation and
fallback mappings match what the transform expects.`]}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"npx"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npx @workday/canvas-kit-codemod icon-migration [path]
`})}),`
`,e.jsx(n.p,{children:"Or install temporarily as a dev dependency:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-codemod --dev
yarn canvas-kit-codemod icon-migration [path]
yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.p,{children:["Provide ",e.jsx(n.code,{children:"[path]"})," to the folders that contain your application source (for example ",e.jsx(n.code,{children:"src/"}),` or specific
packages in a monorepo). Limiting scope speeds up the run and reduces unrelated diffs.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The codemod only transforms ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. Update other file
types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, Storybook stories in non-TS formats, etc.) manually. You may need
to run your linter after the codemod. Output formatting may not match your project style.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tips before migrating:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Run in batches."})," Prefer a focused directory (for example ",e.jsx(n.code,{children:"src/components"}),`) instead of the
entire monorepo. Smaller diffs are easier to review and revert.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review every change."}),` Codemods are not bulletproof. Verify icons in the UI, especially where
semantics matter (status, navigation, or custom branding).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expressive, accent, and applet icons."})," The ",e.jsx(n.code,{children:"icon-migration"}),` codemod only touches
`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),". Use the ",e.jsx(n.code,{children:"v15-icons"}),` transform for accent, applet, and
expressive icons, covered in the
`,e.jsx(n.a,{href:"/docs/guides-upgrade-guides-v15-0-overview--docs#codemod-transformations-for-icons",children:"v15 upgrade guide"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"what-the-codemod-does",children:"What the Codemod Does"}),`
`,e.jsxs(n.p,{children:["The transform runs only on files that import from ",e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),`. For each
deprecated icon export listed in `,e.jsx(n.code,{children:"system.deprecated.metadata.json"}),`, it replaces usages with the
icon's `,e.jsx(n.strong,{children:"fallback"}),` from package metadata. That file includes every deprecated system icon in the
package, not only the v5 Sana Canvas Assets changes summarized in the overview guide.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Named imports."}),` The codemod updates the import specifier and renames references. For example,
it changes `,e.jsx(n.code,{children:"uploadIcon"})," to ",e.jsx(n.code,{children:"arrowUpToLineIcon"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Import aliases."})," If you import a deprecated icon ",e.jsx(n.code,{children:"as"}),` a local name, the codemod keeps your
alias and points it at the fallback export.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Namespace imports."}),` The codemod updates member access. For example, it changes
`,e.jsx(n.code,{children:"systemIcons.uploadIcon"})," to ",e.jsx(n.code,{children:"systemIcons.arrowUpToLineIcon"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chained fallbacks."}),` If a fallback icon is also deprecated, the codemod resolves through the
chain until it reaches a non-deprecated icon.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Duplicate imports."}),` If the fallback is already imported in the same declaration, the codemod
removes the deprecated import and redirects usages to the existing local name. This applies even
when that name is an alias.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Icons that are not deprecated are left unchanged. The codemod also leaves deprecated entries whose
fallback is the same export name unchanged.`}),`
`,e.jsx(n.h2,{id:"all-icon-transforms",children:"All Icon Transforms"}),`
`,e.jsxs(n.p,{children:[`The codemod covers two sets of changes in a single pass. Both are driven by
`,e.jsx(n.code,{children:"system.deprecated.metadata.json"}),", so you do not need separate runs for them."]}),`
`,e.jsx(n.h3,{id:"v4-naming-convention-migrations",children:"v4 Naming Convention Migrations"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@workday/canvas-system-icons-web"})," ",e.jsx(n.strong,{children:"v4"}),` aligned the library with a systematic naming convention.
Many legacy export names were deprecated and mapped to clearer replacements (for example,
`,e.jsx(n.code,{children:"academicAppointmentTitleIcon"})," to ",e.jsx(n.code,{children:"clipboardUserIcon"}),`). Those deprecations remain in the metadata
file shipped with v5.`]}),`
`,e.jsxs(n.p,{children:[`To review the changes introduced in v4, see the
`,e.jsx(n.a,{href:"https://canvas.workday.com/styles/assets/system-icons#tab=upgrade-guide-for-developers",rel:"nofollow",children:"system icons upgrade guide for developers"}),`
on Canvas.`]}),`
`,e.jsxs(n.p,{children:["If your codebase still imports icons from before that alignment, the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon-migration"})}),` codemod
updates those usages in the same pass as the v5 changes. You do not need to run the older
`,e.jsx(n.code,{children:"v15-icons"})," codemod for system icons if you migrate with ",e.jsx(n.code,{children:"icon-migration"})," on a current v5 package."]}),`
`,e.jsx(n.h3,{id:"v5-sana-canvas-assets-changes",children:"v5 Sana Canvas Assets Changes"}),`
`,e.jsxs(n.p,{children:[`The v5 release adds Sana-aligned artwork and the renames, deprecations, and layer simplifications
documented in
`,e.jsx(n.a,{href:"/docs/guides-icon-migration-sana-canvas-assets-overview--docs#what-changed-in-v5",children:"What Changed in v5"}),`.
The codemod picks up those mappings from the same metadata file when you install
`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"})," v5."]}),`
`,e.jsx(n.h2,{id:"example-transformations",children:"Example Transformations"}),`
`,e.jsx(n.h3,{id:"named-import",children:"Named Import"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {uploadIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={uploadIcon} />;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {arrowUpToLineIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={arrowUpToLineIcon} />;
`})}),`
`,e.jsx(n.h3,{id:"import-alias-preserved",children:"Import Alias Preserved"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {uploadIcon as myIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={myIcon} />;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {arrowUpToLineIcon as myIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={myIcon} />;
`})}),`
`,e.jsx(n.h3,{id:"fallback-already-imported",children:"Fallback Already Imported"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Before"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {arrowUpToLineIcon, uploadIcon} from '@workday/canvas-system-icons-web';

<>
  <SystemIcon icon={uploadIcon} />
  <SystemIcon icon={arrowUpToLineIcon} />
</>;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {arrowUpToLineIcon} from '@workday/canvas-system-icons-web';

<>
  <SystemIcon icon={arrowUpToLineIcon} />
  <SystemIcon icon={arrowUpToLineIcon} />
</>;
`})}),`
`,e.jsx(n.h2,{id:"what-the-codemod-does-not-do",children:"What the Codemod Does Not Do"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Other packages."}),` The codemod does not change icons imported from libraries other than
`,e.jsx(n.code,{children:"@workday/canvas-system-icons-web"}),", even if the symbol name matches a deprecated Canvas icon."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic icon selection."}),` The codemod does not update icons chosen at runtime. This includes
variables built from strings and configuration files without static imports.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Non-code assets."}),` You must update SVG paths, Figma references, or documentation that mention
old icon names manually.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component API changes."})," The codemod does not migrate ",e.jsx(n.code,{children:"<AccentIcon>"}),", ",e.jsx(n.code,{children:"<AppletIcon>"}),`, or related
v15 expressive icon APIs. Use the `,e.jsx(n.code,{children:"v15-icons"})," codemod for that work."]}),`
`]}),`
`,e.jsx(n.h2,{id:"after-migration",children:"After Migration"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Run your test suite and spot-check high-traffic screens."}),`
`,e.jsx(n.li,{children:`Search the repo for remaining deprecated export names or old SVG filenames if you maintain custom
icon lists.`}),`
`,e.jsx(n.li,{children:`Commit codemod changes in an isolated commit when possible. That makes it easier to revert or
bisect if you need to.`}),`
`]})]})}function g(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{g as default};
