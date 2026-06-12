import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as i}from"./index-B2C7rmFn.js";import"./index-IfJi-UCQ.js";import"./iframe-D4Efgt29.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Upgrade Guides/v9.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-90-upgrade-guide",children:"Canvas Kit 9.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v9. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-components",children:"New Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#table",children:"Table"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#updated-terms",children:"Updated Terms"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#removals",children:"Removals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#drawer",children:"Drawer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#layout-and-column",children:"Layout and Column"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#composemodelhook",children:"composeModelHooks"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#stack-hstack-and-vstack",children:"Stack, HStack, and VStack"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focusring",children:"focusRing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usecanvastheme-and-getcanvastheme",children:"useCanvasTheme and getCanvasTheme"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#deprecations",children:"Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usethemertl",children:"useThemeRTL"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#token-updates",children:"Token Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#depth",children:"Depth"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#toast",children:"Toast"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#collection",children:"Collection"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#utility-updates",children:"Utility Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usetheme-and-gettheme",children:"useTheme and getTheme"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usethemedring",children:"useThemedRing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#composehooks",children:"composeHooks"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#glossary",children:"Glossary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#main",children:"Main"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#preview",children:"Preview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#labs",children:"Labs"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["We've provided a ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod"}),` to
automatically update your code to work with most of the breaking changes in v9. `,e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[`A codemod is a script that makes programmatic transformations on your codebase by traversing the
`,e.jsx(n.a,{href:"https://www.hypermod.io/docs/guides/understanding-asts",rel:"nofollow",children:"AST"}),`, identifying patterns, and making
prescribed changes. This greatly decreases opportunities for error and reduces the number of manual
updates, which allows you to focus on changes that need your attention. `,e.jsx(n.strong,{children:`We highly recommend you
use the codemod for these reasons.`})]}),`
`,e.jsx(n.p,{children:`If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Our codemods are meant to be run sequentially. For example, if you're using v7 of Canvas Kit,
you'll need to run the v8 codemod before you run v9.`}),`
`,e.jsxs(n.li,{children:["The codemod will update your code to be compatible with the specified version, but it will ",e.jsx(n.strong,{children:"not"}),`
remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
dependencies on your own.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We recommend upgrading dependencies before running the codemod."}),`
`,e.jsxs(n.li,{children:["Always review your ",e.jsx(n.code,{children:"package.json"})," files to make sure your dependency versions look correct."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`The codemod will not handle every breaking change in v9. You will likely need to make some manual
changes to be compatible. Use our Upgrade Guide as a checklist.`}),`
`,e.jsxs(n.li,{children:["Codemods are not bulletproof.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Conduct a thorough PR and QA review of all changes to ensure no regressions were introduced."}),`
`,e.jsx(n.li,{children:`As a safety precaution, we recommend committing the changes from the codemod as a single
isolated commit (separate from other changes) so you can roll back more easily if necessary.`}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:`We're here to help! Automatic changes to your codebase can feel scary. You can always reach out to
our team. We'd be very happy to walk you through the process to set you up for success.`}),`
`,e.jsx(n.h3,{id:"instructions",children:"Instructions"}),`
`,e.jsxs(n.p,{children:["The easiest way to run our codemod is to use ",e.jsx(n.code,{children:"npx"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> npx @workday/canvas-kit-codemod v9 [path]
`})}),`
`,e.jsxs(n.p,{children:["Be sure to provide specific directories that need to be updated via the ",e.jsx(n.code,{children:"[path]"}),` argument. This
decreases the amount of AST the codemod needs to traverse and reduces the chances of the script
having an error. For example, if your source code lives in `,e.jsx(n.code,{children:"src/"}),", use ",e.jsx(n.code,{children:"src/"})," as your ",e.jsx(n.code,{children:"[path]"}),`. Or,
if you have a monorepo with three packages using Canvas Kit, provide those specific packages as your
`,e.jsx(n.code,{children:"[path]"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively, if you're unable to run the codemod successfully using ",e.jsx(n.code,{children:"npx"}),`, you can install the
codemod package as a dev dependency, run it with `,e.jsx(n.code,{children:"yarn"}),`, and then remove the package after you're
finished.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> yarn add @workday/canvas-kit-codemod --dev
> yarn canvas-kit-codemod v9 [path]
> yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to manually edit
other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter after executing
the codemod, as its resulting formatting (spacing, quotes, etc.) may not match your project
conventions.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"new-components",children:"New Components"}),`
`,e.jsx(n.h3,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:["We've introduced a new ",e.jsx(n.code,{children:"Table"}),`
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),` to the Preview
package. `,e.jsx(n.code,{children:"Table"}),` is a compound component that is used to present information in a two-dimensional
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` comprised of rows and
columns of cells containing data.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Table} from '@workday/canvas-kit-preview-react/table';

export default function App() {
  return (
    <Table>
      <Table.Caption>Table Caption</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Header>Table Header</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Header>Table Header</Table.Header>
        </Table.Row>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"updated-terms",children:"Updated Terms"}),`
`,e.jsx(n.p,{children:`We have updated two terms that were used in previous versions of Canvas Kit to better reflect their
meaning and intentions.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:'"Soft-Deprecation"'})," is now ",e.jsx(n.strong,{children:'"Deprecate/Deprecation"'})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.em,{children:["Deprecate/Deprecation: We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated tag"}),`
from JSDoc to code that we plan to deprecate in the near future. Although you can still consume
this code, we want consumers to move to a utility or component that is more stable.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.em,{children:['Previously, we also added "Deprecated" to a component name. For example, from ',e.jsx(n.code,{children:"ComponentName"}),`
to `,e.jsx(n.code,{children:"DeprecatedComponenntName"}),". As of 9.0, we longer do this."]})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:'"Hard-Deprecation"'})," is now ",e.jsx(n.strong,{children:'"Remove/Removal"'})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.em,{children:`Remove/Removals: Removals are deletions from our codebase and you can no longer consume this
component. We've either promoted or replaced a component or utility. You will need to follow the
method prescribed in our upgrade guide to update your application. Please reach out to our team
directly if you need additional help.`})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"removals",children:"Removals"}),`
`,e.jsx(n.p,{children:`Removals are deletions from our codebase and you can no longer consume this component. We've either
promoted or replaced a component or utility.`}),`
`,e.jsx(n.h3,{id:"drawer",children:"Drawer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/1970",rel:"nofollow",children:"#1970"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"Drawer"}),` component (for reference, see the
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/labs-drawer--basic",rel:"nofollow",children:e.jsx(n.code,{children:"Drawer"})}),` from v8). Please
use the `,e.jsx(n.a,{href:"?path=/docs/preview-side-panel--docs",children:e.jsx(n.code,{children:"SidePanel"})})," in ",e.jsx(n.a,{href:"#preview",children:"Preview"})," instead."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The ",e.jsx(n.code,{children:"SidePanel"})," in Main will eventually be replaced with the ",e.jsx(n.code,{children:"SidePanel"}),` in Preview. We
recommend you use the `,e.jsx(n.code,{children:"SidePanel"})," in Preview until then."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"layout-and-column",children:"Layout and Column"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2018",rel:"nofollow",children:"#2018"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"Layout"})," and ",e.jsx(n.code,{children:"Column"}),` components (for reference, see
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-containers-column-and-layout--12-column-layout",rel:"nofollow",children:e.jsx(n.code,{children:"Column and Layout"})}),`
from v8). Please use `,e.jsx(n.a,{href:"?path=/docs/components-layout-grid--docs",children:e.jsx(n.code,{children:"Grid"})})," instead. While ",e.jsx(n.code,{children:"Grid"}),` is not a 1:1
replacement for `,e.jsx(n.code,{children:"Layout"})," and ",e.jsx(n.code,{children:"Column"}),`, it can be used to generate the same types of layouts and
offers a more robust and flexible layout solution.`]}),`
`,e.jsxs(n.p,{children:["Please refer to our ",e.jsx(n.a,{href:"/examples/layout/",children:"Layout examples"}),` for examples of how to implement common
layouts using `,e.jsx(n.code,{children:"Grid"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"composemodelhooks",children:"composeModelHooks"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2180",rel:"nofollow",children:"#2180"})]}),`
`,e.jsxs(n.p,{children:["We're removing this hook. It is a duplicate of ",e.jsx(n.code,{children:"componseHooks"}),` that was never used by anything. This
should have no impact on your code. We couldn't find any references to this function in any code
bases we have access to.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"stack-hstack-and-vstack",children:"Stack, HStack and VStack"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2012",rel:"nofollow",children:"#2012"})]}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"Stack"}),", ",e.jsx(n.code,{children:"HStack"}),", and ",e.jsx(n.code,{children:"VStack"}),` components (for reference, see
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-layout-stack--basic-stack",rel:"nofollow",children:e.jsx(n.code,{children:"Stack"})}),`
from v8). Please use `,e.jsx(n.a,{href:"?path=/docs/components-layout-flex--docs",children:e.jsx(n.code,{children:"Flex"})})," instead. ",e.jsx(n.code,{children:"Flex"}),` supports the same consistent
spacing between its elements via the `,e.jsx(n.code,{children:"gap"})," prop (analogous to the ",e.jsx(n.code,{children:"spacing"})," prop from ",e.jsx(n.code,{children:"Stack"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v8
<Stack spacing="s">
  ...
</Stack>

// v9
<Flex gap="s">
  ...
</Flex>
`})}),`
`,e.jsxs(n.p,{children:["The orientation of ",e.jsx(n.code,{children:"VStack"})," elements can be replicated with ",e.jsx(n.code,{children:"Flex"})," using ",e.jsx(n.code,{children:"flexDirection"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v8
<VStack>
  ...
</VStack>

// v9
<Flex flexDirection="column">
  ...
</Flex>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StackProps"}),", ",e.jsx(n.code,{children:"HStackProps"}),", ",e.jsx(n.code,{children:"VStackProps"}),", and ",e.jsx(n.code,{children:"StackStyleProps"}),` types have been removed as
well. All references to these types in your custom components will need to be replaced with
`,e.jsx(n.code,{children:"FlexProps"}),"."]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all of the changes above for you automatically."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you were consuming ",e.jsx(n.code,{children:"StackProps"}),` previously for a custom component, be sure to change
all references to the old `,e.jsx(n.code,{children:"spacing"})," prop from ",e.jsx(n.code,{children:"StackProps"})," to the ",e.jsx(n.code,{children:"gap"})," prop from ",e.jsx(n.code,{children:"FlexProps"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"focusring",children:"focusRing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2034",rel:"nofollow",children:"#2034"})]}),`
`,e.jsxs(n.p,{children:["We've removed memoization from ",e.jsx(n.code,{children:"focusRing"}),". The ",e.jsx(n.code,{children:"memoize"})," argument passed to ",e.jsx(n.code,{children:"focusRing"}),` is no
longer valid, and we've removed `,e.jsx(n.code,{children:"memoizedFocusRing"}),`. We were unable to find any examples of
`,e.jsx(n.code,{children:"memoize"})," or ",e.jsx(n.code,{children:"memoizedFocusRing"})," in use by our consumers."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usecanvastheme-and-getcanvastheme",children:"useCanvasTheme and getCanvasTheme"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2120",rel:"nofollow",children:"#2120"})]}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"useCanvasTheme"})," and ",e.jsx(n.code,{children:"getCanvasTheme"}),". Please use ",e.jsx(n.code,{children:"useTheme"})," and ",e.jsx(n.code,{children:"getTheme"})," instead."]}),`
`,e.jsx(n.h2,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(n.p,{children:["We add the ",e.jsx(n.a,{href:"https://jsdoc.app/tags-deprecated.html",rel:"nofollow",children:"@deprecated"}),` from JSDoc to code that we plan to
deprecate in the near future. Al though you can still consume this code, we want consumers to move
to a utility or component that is more stable.`]}),`
`,e.jsx(n.h3,{id:"usethemertl",children:"useThemeRTL"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2119",rel:"nofollow",children:"#2119"})]}),`
`,e.jsxs(n.p,{children:["We've deprecated ",e.jsx(n.code,{children:"useThemeRTL"})," from ",e.jsx(n.a,{href:"#labs",children:"Labs"}),`. Although you may still use this utility, we
recommend using
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties",rel:"nofollow",children:"CSS logical properties"}),`
instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"composehooks",children:"composeHooks"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"composeHooks"})," types are now accurate. Before the types were incorrectly merged to equal ",e.jsx(n.code,{children:"{}"}),`.
This also affects components created using `,e.jsx(n.code,{children:"createContainer"})," or ",e.jsx(n.code,{children:"createSubcomponent"}),`. The
`,e.jsx(n.code,{children:"elemProps"}),` type interface will now reflect all the incoming props from the hook properly. If you
get an error when passing `,e.jsx(n.code,{children:"elemProps"})," from a hook using ",e.jsx(n.code,{children:"composeHooks"}),`, you may get a Typescript
error. Sometimes returning a generic object widens types and style or JSX attributes are more
strict. This can cause problems with JSX attributes like `,e.jsx(n.code,{children:"position"}),` which expects values like
`,e.jsx(n.code,{children:"'relative' | 'absolute'"})," and doesn't accept a string."]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`return {
  position: 'relative',
}; // { 'position': string }
`})}),`
`,e.jsxs(n.p,{children:[`TypeScript doesn't know that this object interface cannot be mutated, so it will widen the
`,e.jsx(n.code,{children:"position"})," type to a ",e.jsx(n.code,{children:"string"}),` which is now allowed when you pass the prop list to a JSX element.
You'll have to add an `,e.jsx(n.code,{children:"as const"}),` to either the property or the whole object to force Typescript to
narrow the type.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"return {\n  position: 'relative' as const, // forces the type to be `'relative'` instead of `string`\n} as const; // OR add `as const` here to narrow the whole object.\n"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"as const"})," instructs Typescript the type is ",e.jsx(n.code,{children:"readonly"}),`. Typescript knows readonly values or objects
cannot be changed and will therefore narrow the type for you.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"token-updates",children:"Token Updates"}),`
`,e.jsx(n.h3,{id:"depth",children:"Depth"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2091",rel:"nofollow",children:"#2091"})]}),`
`,e.jsxs(n.p,{children:[`In v7, we released an update to our depth tokens that was too bold and harsh for web applications.
We've modified the depth token styles to be more subtle and improve visual design. This change
affects all components which use depth tokens including `,e.jsx(n.code,{children:"Card"}),", ",e.jsx(n.code,{children:"Toast"}),", ",e.jsx(n.code,{children:"Dialog"}),", ",e.jsx(n.code,{children:"Popup"}),", ",e.jsx(n.code,{children:"Modal"}),`,
and `,e.jsx(n.code,{children:"Menu"}),". We have not changed which depth values each component references (i.e., ",e.jsx(n.code,{children:"Card"}),` remains
at `,e.jsx(n.code,{children:"depth[1]"}),")."]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/1978",rel:"nofollow",children:"#1978"})]}),`
`,e.jsxs(n.p,{children:["We've changed the default ",e.jsx(n.code,{children:"type"})," attribute for all buttons to ",e.jsx(n.code,{children:'type="button"'}),`. Previously, the
`,e.jsx(n.code,{children:"type"}),` attribute was not being set which resulted in the buttons
`,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes",rel:"nofollow",children:["defaulting to ",e.jsx(n.code,{children:'type="submit"'})]}),"."]}),`
`,e.jsxs(n.p,{children:["This affects all buttons which extend ",e.jsx(n.code,{children:"BaseButton"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"PrimaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SecondaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TertiaryButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"DeleteButton"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ToolbarDropdownButton"})," and ",e.jsx(n.code,{children:"ToolbarIconButton"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Pill"})," and ",e.jsx(n.code,{children:"Pill.IconButton"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SegmentedControl.Button"})," (Main)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SegmentedControl.Item"})," (Preview)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Pagination.PageButton"})}),`
`]}),`
`,e.jsx(n.p,{children:"Any buttons which extend any of the above are affected as well."}),`
`,e.jsxs(n.p,{children:["This resolves an ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/1938",rel:"nofollow",children:"issue"}),` where clicking certain
buttons within a `,e.jsx(n.code,{children:"form"}),` element would unexpectedly submit the form. Additionally, the default action
of many form controls such as `,e.jsx(n.code,{children:"input"})," and ",e.jsx(n.code,{children:"textarea"}),` is to click the first submit button; this led
to issues if the first submit button in the form was not intended to be a submit button (a common
mistake when buttons default to `,e.jsx(n.code,{children:'type="submit"'}),")."]}),`
`,e.jsxs(n.p,{children:[`This is a breaking change if you expected a button to submit by default, though we do not anticipate
this to be the case for most developers. If you `,e.jsx(n.em,{children:"do"}),` intend for a button to act as a submit button
within a form, add `,e.jsx(n.code,{children:'type="submit"'})," to the button."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2044",rel:"nofollow",children:"#2044"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"Toast"})," from ",e.jsx(n.a,{href:"#labs",children:"Labs"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),". It replaces the ",e.jsx(n.code,{children:"Toast"}),` that was
previously in `,e.jsx(n.a,{href:"#main",children:"Main"}),` (for reference, see
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-popups-toast--error",rel:"nofollow",children:e.jsx(n.code,{children:"Toast"})}),` in
`,e.jsx(n.a,{href:"#main",children:"Main"})," from v8)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Toast"})," is a ",e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
which provides a flexible API and access to its internals via its subcomponents. It supports a new
`,e.jsx(n.code,{children:"mode"}),` prop which applies the proper accessibility features to the component based on the desired
mode: `,e.jsx(n.code,{children:"status"}),", ",e.jsx(n.code,{children:"alert"}),", or ",e.jsx(n.code,{children:"dialog"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v8
<Toast actionText="View more details" onActionClick={handleActionClick} onClose={handleClose}>
  Your workbook was successfully processed.
</Toast>

// v9
<Toast mode="dialog">
  <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
  <Toast.Body>
    <Toast.Message>Your workbook was successfully processed.</Toast.Message>
    <Toast.Link onClick={handleActionClick}>View more details</Toast.Link>
  </Toast.Body>
	<Toast.CloseIcon aria-label="Close" onClick={handleClose} />
</Toast>
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rewrite your usages of the previous ",e.jsx(n.code,{children:"Toast"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),` to use the compound
component API of the new `,e.jsx(n.code,{children:"Toast"})," in ",e.jsx(n.a,{href:"#main",children:"Main"}),". ",e.jsx(n.code,{children:"mode"})," will be set to ",e.jsx(n.code,{children:"dialog"})," if the ",e.jsx(n.code,{children:"Toast"}),`
previously used `,e.jsx(n.code,{children:"actionText"})," or ",e.jsx(n.code,{children:"onActionClick"}),`. The codemod will also update imports from the
`,e.jsx(n.a,{href:"#labs",children:"Labs"})," ",e.jsx(n.code,{children:"Toast"})," to instead import from ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," You will manually need to set ",e.jsx(n.code,{children:"mode"})," to ",e.jsx(n.code,{children:"alert"})," if your ",e.jsx(n.code,{children:"Toast"}),` conveys urgent and
important information such as an error.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"collection",children:"Collection"}),`
`,e.jsxs(n.p,{children:[`Navigation was updated to use numerical indexes instead of string identifiers. The
`,e.jsx(n.code,{children:"model.state.cursorId"}),` is left unchanged. The change is to support virtual lists where navigation
knows where it needs to go, but the identifier may not be loaded yet. The mechanism for navigating
is private and should not breaking anything. If you created a custom navigation manager, the
signature has been changed.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useListModel"})," modelHook no longers sets the initial ",e.jsx(n.code,{children:"cursorId"}),` to the first item if no
`,e.jsx(n.code,{children:"initialCursorId"}),` config option is set. This functionality has been moved to the
`,e.jsx(n.code,{children:"useListItemRovingFocus"})," elemProps hook. If you use ",e.jsx(n.code,{children:"useListItemRovingFocus"}),`, the behavior is
unchanged. If you need the first item to be set as the `,e.jsx(n.code,{children:"cursorId"}),` and you do not use
`,e.jsx(n.code,{children:"useListItemRovingFocus"}),", you will have to add this functionality back to your collection logic."]}),`
`,e.jsxs(n.p,{children:["The logic to set the ",e.jsx(n.code,{children:"cursorId"}),` to the first item should go into an item elemProps hook that
contains the following:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`React.useEffect(() => {
  if (!model.state.cursorId && model.state.items.length) {
    model.events.goTo({id: model.state.items[0].id});
  }
}, [model.state.cursorId, model.state.items, model.events]);
`})}),`
`,e.jsx(n.h2,{id:"utility-updates",children:"Utility Updates"}),`
`,e.jsx(n.h3,{id:"usetheme-and-gettheme",children:"useTheme and getTheme"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2120",rel:"nofollow",children:"#2120"})]}),`
`,e.jsxs(n.p,{children:["We've added error handling to ",e.jsx(n.code,{children:"useTheme"}),` if it's been used outside a functional component. We've
also added `,e.jsx(n.code,{children:"getTheme"})," to provide access to a theme from ",e.jsx(n.code,{children:"styled"}),` or class components instead of
`,e.jsx(n.code,{children:"useTheme"}),"."]}),`
`,e.jsx(n.h3,{id:"usethemedring",children:"useThemedRing"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"PR:"})," ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/2119",rel:"nofollow",children:"#2119"})]}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"useThemedRing"})," from ",e.jsx(n.a,{href:"#labs",children:"Labs"})," to ",e.jsx(n.a,{href:"#main",children:"Main"}),". ",e.jsx(n.code,{children:"useThemedRing"}),` allows you to
theme focus rings.`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will update the import for this utility."}),`
`,e.jsx(n.h2,{id:"glossary",children:"Glossary"}),`
`,e.jsx(n.h3,{id:"main",children:"Main"}),`
`,e.jsxs(n.p,{children:["Our Main package of Canvas Kit tokens, components, and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-react"}),` has
undergone a full design and a11y review and is approved for use in product.`]}),`
`,e.jsx(n.p,{children:`Breaking changes to code in Main will only occur during major version updates and will always be
communicated in advance and accompanied by migration strategies.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"preview",children:"Preview"}),`
`,e.jsxs(n.p,{children:[`Our Preview package of Canvas Kit tokens, components, and utilities at
`,e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),` has undergone a full design and a11y review and is approved for
use in product, but may not be up to the high code standards upheld in the `,e.jsx(n.a,{href:"#main",children:"Main"}),` package.
Preview is analagous to code in beta.`]}),`
`,e.jsx(n.p,{children:`Breaking changes are unlikely, but possible, and can be deployed to Preview at any time without
triggering a major version update, though such changes will be communicated in advance and
accompanied by migration strategies.`}),`
`,e.jsxs(n.p,{children:["Generally speaking, our goal is to eventually promote code from Preview to ",e.jsx(n.a,{href:"#main",children:"Main"}),`.
Occasionally, a component with the same name will exist in both `,e.jsx(n.a,{href:"#main",children:"Main"}),` and Preview (for
example, see Segmented Control in `,e.jsx(n.a,{href:"?path=/docs/preview-segmented-control--docs",children:"Preview"}),` and
`,e.jsx(n.a,{href:"https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/components-buttons-segmented-control--basic",rel:"nofollow",children:"Main"}),`).
In these cases, Preview serves as a staging ground for an improved version of the component with a
different API. The component in `,e.jsx(n.a,{href:"#main",children:"Main"})," will eventually be replaced with the one in Preview."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"labs",children:"Labs"}),`
`,e.jsxs(n.p,{children:["Our Labs package of Canvas Kit tokens, components, and utilities at ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react"}),`
has `,e.jsx(n.strong,{children:"not"}),` undergone a full design and a11y review. Labs serves as an incubator space for new and
experimental code and is analagous to code in alpha.`]}),`
`,e.jsxs(n.p,{children:[`Breaking changes can be deployed to Labs at any time without triggering a major version update and
may not be subject to the same rigor in communcation and migration strategies reserved for breaking
changes in `,e.jsx(n.a,{href:"#preview",children:"Preview"})," and ",e.jsx(n.a,{href:"#main",children:"Main"}),"."]})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
