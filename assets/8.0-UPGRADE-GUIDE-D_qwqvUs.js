import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as s}from"./index-ZDSBk99o.js";import"./index-IfJi-UCQ.js";import"./iframe-DJNB-Vr3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Upgrade Guides/v8.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-80-upgrade-guide",children:"Canvas Kit 8.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains an overview of the changes in Canvas Kit v8. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#general-updates",children:"General Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#ie11-no-longer-supported",children:"IE11 No Longer Supported"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#react-18-upgrade",children:"React 18 Upgrade"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#removal-of-default-exports",children:"Removal of Default Exports"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#reorganized-style-props",children:"Reorganized Style Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#responsive-styles",children:"Responsive Styles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing",children:"Testing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#utility-deprecations",children:"Utility Deprecations"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#new-components",children:"New Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#grid",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text",children:"Text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control-preview",children:"Segmented Control (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator-preview",children:"Status Indicator (Preview)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-deprecations",children:"Component Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#drawer",children:"Drawer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu-preview",children:"Menu (Preview)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#layout-and-column",children:"Layout and Column"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-updates",children:"Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-bar",children:"Action Bar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#box",children:"Box"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#breadcrumbs",children:"Breadcrumbs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-states-table",children:"Component States Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu-main",children:"Menu (Main)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modal",children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popups",children:"Popups"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#loading-animation",children:"Loading Animation"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["Please use our ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod package"}),`
to automatically update your code to work with most of the breaking changes in v8.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> npx @workday/canvas-kit-codemod v8 [path]
`})}),`
`,e.jsxs(n.p,{children:["Alternatively, if you're unable to run the codemod successfully using ",e.jsx(n.code,{children:"npx"}),`, you can install the
codemod package as a dev dependency, run it with `,e.jsx(n.code,{children:"yarn"}),`, and then remove the package after you're
finished.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> yarn add @workday/canvas-kit-codemod --dev
> yarn canvas-kit-codemod v8 [path]
> yarn remove @workday/canvas-kit-codemod
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` files. You'll need to manually edit
other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),`, etc.). You may need to run your linter after executing
the codemod, as its resulting formatting (spacing, quotes, etc.) may not match your project
conventions.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The codemod will handle ",e.jsx(n.em,{children:"most"})," but ",e.jsx(n.em,{children:"not all"})," of the breaking changes in v8. ",e.jsx(n.strong,{children:`Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.`})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Please verify all changes made by the codemod."}),` As a safety precaution, we recommend committing
the changes from the codemod as a single isolated commit (separate from other changes) so you can
roll back more easily if necessary.`]}),`
`,e.jsx(n.h2,{id:"general-updates",children:"General Updates"}),`
`,e.jsx(n.h3,{id:"ie11-no-longer-supported",children:"IE11 No Longer Supported"}),`
`,e.jsx(n.p,{children:"Starting with v8, Canvas Kit will no longer support IE11."}),`
`,e.jsx(n.p,{children:`We've removed all IE11-specific code including polyfills. Applications built using Canvas Kit v8 and
above will no longer run in IE11 and will fail to bootstrap with an error and/or a white screen.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Do not upgrade to v8 if your application needs to support IE11."})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"react-18-upgrade",children:"React 18 Upgrade"}),`
`,e.jsxs(n.p,{children:["We've upgraded Canvas Kit to ",e.jsx(n.a,{href:"https://reactjs.org/blog/2022/03/29/react-v18.html",rel:"nofollow",children:"React 18"}),`. This
change will not impact users who are already on v7 and are looking to upgrade to v8 as v8 will
support the same React versions as v7 (React 16.14 and 17.X) while still giving them the ability to
upgrade to React 18 as needed. Although we didn't use any new features from React 18 in v8, `,e.jsx(n.em,{children:"future"}),`
updates to Canvas Kit may require upgrading to React 18 to support them.`]}),`
`,e.jsxs(n.p,{children:[`React 18 introduces several new features, but the most impactful change is the new
`,e.jsx(n.a,{href:"https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react",rel:"nofollow",children:"concurrent render API"}),`.
The new `,e.jsx(n.code,{children:"createRoot"})," method replaces ",e.jsx(n.code,{children:"render"}),` and gives you access to the improvements in React 18
including the concurrent features. Without it, React behaves as it did in previous versions.`]}),`
`,e.jsxs(n.p,{children:["See our ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/1545",rel:"nofollow",children:"React 18 discussion"}),` for more
information.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"removal-of-default-exports",children:"Removal of Default Exports"}),`
`,e.jsx(n.p,{children:`We've removed all remaining default exports from our packages to maintain consistency with our newer
(and recently updated) components and systems which favor named exports. The following components
have been updated to provide named exports instead of default exports (in cases where the component
provided both default and named exports, the default export has been removed).`}),`
`,e.jsx(n.h4,{id:"main-canvas-kit-react",children:"Main (canvas-kit-react)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"AccentIcon"}),`
`,e.jsx(n.li,{children:"AppletIcon"}),`
`,e.jsx(n.li,{children:"Avatar"}),`
`,e.jsx(n.li,{children:"Breadcrumbs (formerly in Preview)"}),`
`,e.jsx(n.li,{children:"Canvas"}),`
`,e.jsx(n.li,{children:"Checkbox"}),`
`,e.jsx(n.li,{children:"CountBadge"}),`
`,e.jsx(n.li,{children:"FormField"}),`
`,e.jsx(n.li,{children:"Graphic"}),`
`,e.jsx(n.li,{children:"Icon"}),`
`,e.jsx(n.li,{children:"LoadingDots"}),`
`,e.jsx(n.li,{children:"Radio"}),`
`,e.jsx(n.li,{children:"SegmentedControl"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"SidePanel"}),`
`,e.jsx(n.li,{children:"StatusIndicator"}),`
`,e.jsx(n.li,{children:"Switch"}),`
`,e.jsx(n.li,{children:"Svg"}),`
`,e.jsx(n.li,{children:"SystemIcon"}),`
`,e.jsx(n.li,{children:"SystemIconCircle"}),`
`,e.jsx(n.li,{children:"Table"}),`
`,e.jsx(n.li,{children:"TextArea"}),`
`,e.jsx(n.li,{children:"TextInput"}),`
`,e.jsx(n.li,{children:"Toast"}),`
`,e.jsx(n.li,{children:"Tooltip"}),`
`]}),`
`,e.jsx(n.h4,{id:"labs-canvas-kit-labs-react",children:"Labs (canvas-kit-labs-react)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Combobox"}),`
`,e.jsx(n.li,{children:"Drawer"}),`
`]}),`
`,e.jsx(n.h4,{id:"preview-canvas-kit-preview-react",children:"Preview (canvas-kit-preview-react)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ColorPicker"}),`
`,e.jsx(n.li,{children:"Menu"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"SidePanel"}),`
`]}),`
`,e.jsx(n.h4,{id:"fonts-canvas-kit-react-fonts",children:"Fonts (canvas-kit-react-fonts)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"fonts"}),`
`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will rewrite your default imports to named imports."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"reorganized-style-props",children:"Reorganized Style Props"}),`
`,e.jsxs(n.p,{children:[`We've reorganized some style props and refactored the implementation, but the functionality remains
the same. This improves the style prop documentation and allows us to extend style props further in
the future. We've moved the `,e.jsx(n.code,{children:"background"})," and ",e.jsx(n.code,{children:"backgroundImage"})," style props from the ",e.jsx(n.code,{children:"color"}),` style
prop function to a new `,e.jsx(n.code,{children:"background"})," style prop function."]}),`
`,e.jsxs(n.p,{children:[`These functions are only intended to be used by Canvas Kit internally. However, if you're importing
the `,e.jsx(n.code,{children:"color"}),` style prop function to apply these two style props, you'll need to update your import
statements to import the `,e.jsx(n.code,{children:"background"})," style prop function as well."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["We recommend using ",e.jsx(n.code,{children:"Box"}),` and style props directly instead of these style prop functions to reduce
the cost of upgrading in the future.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
import {color} from '@workday/canvas-kit-react/layout';

const Example = styled('div')(
  {
    boxSizing: 'border-box',
  },
  color
);

// v8
import {background, color} from '@workday/canvas-kit-react/layout';

const Example = styled('div')(
  {
    boxSizing: 'border-box',
  },
  background,
  color
);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"responsive-styles",children:"Responsive Styles"}),`
`,e.jsxs(n.p,{children:[`We've added a set of
`,e.jsx(n.a,{href:"?path=/docs/features-responsive-styling--responsive-container",children:"responsive utilities"}),` to facilitate
container-based and viewport-based responsive styling:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useResponsiveContainerStyles"}),`: A hook that allows developers to create container-based
responsive styles using style objects.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {useResizeObserver, useResponsiveContainerStyles} from '@workday/canvas-kit-react/common';
const ref = React.useRef(null);
const [width, setWidth] = React.useState(0);
useResizeObserver({
  ref: ref,
  onResize: data => {
    setWidth(data.width || 0);
  },
});
const containerResponsiveStyles = useResponsiveContainerStyles(
  {
    flex: {
      flexDirection: 'column',
      padding: 'm',
      depth: 1,
      borderRadius: 'l',
      zero: {
        backgroundColor: 'Red',
      },
      s: {
        backgroundColor: 'Orange',
      },
      m: {
        backgroundColor: 'Yellow',
      },
      l: {
        backgroundColor: 'Green',
      },
      xl: {
        backgroundColor: 'Blue',
      },
    },
    box: {
      padding: 's',
    },
  },
  width
);
return (
  <Box ref={ref}>
    <Flex {...containerResponsiveStyles.flex}>
      <Box {...containerResponsiveStyles.box}>Hello World</Box>
    </Flex>
  </Box>
);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsxs(n.p,{children:["We've added a new ",e.jsx(n.code,{children:"@workday/canvas-kit-react/testing"}),` slash import to house our testing utilities
and components. You may find them useful for testing the different visual states of your components.`]}),`
`,e.jsxs(n.p,{children:["View the ",e.jsx(n.a,{href:"/get-started/for-developers/documentation/testing#visual-tests",children:"Testing"}),` documentation for more information. The example below
creates a visual states table of our `,e.jsx(n.code,{children:"DeleteButton"}),`. Each row renders a different size of
`,e.jsx(n.code,{children:"DeleteButton"})," with each column representing different combinations of the ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"hover"}),`, and
`,e.jsx(n.code,{children:"active"})," states."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

import {DeleteButton} from '@workday/canvas-kit-react/button';

// Creates a columns for different states of a button
export const stateTableColumnProps = [
  {label: 'Default ', props: {className: '', disabled: false}},
  {label: 'Default Disabled', props: {className: '', disabled: true}},
  {label: 'Hover ', props: {className: 'hover', disabled: false}},
  {label: 'Hover Disabled', props: {className: 'hover', disabled: true}},
  {label: 'Focus ', props: {className: 'focus', disabled: false}},
  {label: 'Focus Hover ', props: {className: 'focus hover', disabled: false}},
  {label: 'Active ', props: {className: 'active', disabled: false}},
  {label: 'Active Hover ', props: {className: 'active hover', disabled: false}},
];

export const Basic = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        // creates rows with values that get passed to the button
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => <DeleteButton {...props}>Test</DeleteButton>}
    </ComponentStatesTable>
  </StaticStates>
);
`})}),`
`,e.jsx(n.p,{children:`For users who are currently using our testing utilities and components, the following code-moddable
changes have been made:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ComponentStatesTable"}),", ",e.jsx(n.code,{children:"permutateProps"}),", ",e.jsx(n.code,{children:"StaticStates"})," and ",e.jsx(n.code,{children:"propTypes"}),` have been moved to
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/testing"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"StaticStates"})," and ",e.jsx(n.code,{children:"convertToStaticStates"})," have been moved from ",e.jsx(n.code,{children:"@workday/canvas-kit-react/common"}),`
to `,e.jsx(n.code,{children:"@workday/canvas-kit-react/testing"})]}),`
`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all of the changes above for you automatically."}),`
`,e.jsx(n.h3,{id:"utility-deprecations",children:"Utility Deprecations"}),`
`,e.jsx(n.p,{children:`The following utility functions are being deprecated and will be removed in a later version of
Canvas Kit.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Types:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Model"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ToModelConfig"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Functions:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"createEventMap"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useEventMap"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["All these utility types and functions have been replaced by ",e.jsx(n.code,{children:"createModelHook"}),`. Typescript 4.1
introduced
`,e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",rel:"nofollow",children:"Template Literal Types"}),`,
so event maps are no longer needed. `,e.jsx(n.code,{children:"createModelHook"}),` infers all types based on the input of the
function.`]}),`
`,e.jsx(n.h2,{id:"new-components",children:"New Components"}),`
`,e.jsx(n.h3,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:["We've introduced a new ",e.jsx(n.a,{href:"?path=/docs/components-layout-grid--docs",children:e.jsx(n.code,{children:"Grid"})})," component to the Main package. ",e.jsx(n.code,{children:"Grid"}),` is a
low-level layout component that provides a common, ergonomic API for building two-dimensional
layouts (rows and columns) with
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",rel:"nofollow",children:"CSS Grid"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsxs(n.p,{children:["We've introduced a group of Text components to the Main package: ",e.jsx(n.a,{href:"?path=/docs/components-text-text--docs",children:e.jsx(n.code,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/components-text-label-text--docs",children:e.jsx(n.code,{children:"LabelText"})}),", ",e.jsx(n.a,{href:"?path=/docs/components-text-title--docs",children:e.jsx(n.code,{children:"Title"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/components-text-heading--docs",children:e.jsx(n.code,{children:"Heading"})}),", ",e.jsx(n.a,{href:"?path=/docs/components-text-body-text--docs",children:e.jsx(n.code,{children:"BodyText"})}),`, and
`,e.jsx(n.a,{href:"?path=/docs/components-text-subtext--docs",children:e.jsx(n.code,{children:"Subtext"})}),`. Together they provide a common, ergonomic API for rendering
text with built-in support for our Canvas type tokens.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
<h2 css={{...type.levels.title.medium}}>Medium Title Text</h2>
<p css={{...type.levels.body.medium}}>Medium body text</p>
<p css={{...type.levels.subtext.small}}>Small subtext text</p>

// v8
<Title as="h2" size="medium">Medium Title Text</Title>
<BodyText size="medium">Medium body text</BodyText>
<Subtext size="small">Small subtext text</Subtext>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"segmented-control-preview",children:"Segmented Control (Preview)"}),`
`,e.jsxs(n.p,{children:[`We've added a new version of
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control-react--basic",rel:"nofollow",children:e.jsx(n.code,{children:"SegmentedControl"})}),`
which has been redesigned as a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),` to the Preview
package. `,e.jsx(n.code,{children:"SegmentedControl"}),` represents a linear group of multiple buttons allowing the selection of
a specific value and is best used for switching between different views of the same content.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SegmentedControl"}),` in Preview has the following major differences compared to the
`,e.jsx(n.code,{children:"SegmentedControl"})," in Main:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Visually redesigned to better align with the Canvas Design System"}),`
`,e.jsx(n.li,{children:'Uses title casing (e.g., "In Progress") instead of full caps ("IN PROGRESS")'}),`
`,e.jsx(n.li,{children:"Supports a text-only variation"}),`
`,e.jsx(n.li,{children:"Includes built-in support for tooltips to improve accessibility of the icon-only variation"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// SegmentedControl (Main)
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {listViewIcon, deviceTabletIcon} from '@workday/canvas-system-icons-web';

<SegmentedControl value={value} onChange={handleToggle}>
  <SegmentedControl.Button icon={listViewIcon} value="list-view" aria-label="List View" />
  <SegmentedControl.Button icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
</SegmentedControl>;

// SegmentedControl (Preview)
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {listViewIcon, deviceTabletIcon} from '@workday/canvas-system-icons-web';

<SegmentedControl>
  <SegmentedControl.List aria-label="View type">
    <SegmentedControl.Item
      data-id="list-view"
      icon={listViewIcon}
      tooltipProps={{title: 'List view'}}
    />
    <SegmentedControl.Item
      data-id="device-view"
      icon={deviceTabletIcon}
      tooltipProps={{title: 'Device view'}}
    />
  </SegmentedControl.List>
</SegmentedControl>;
`})}),`
`,e.jsxs(n.p,{children:["You may still use ",e.jsx(n.code,{children:"SegmentedControl"}),` in the Main package, but note that it will be replaced by
`,e.jsx(n.code,{children:"SegmentedControl"})," in the Preview package in the future."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"status-indicator-preview",children:"Status Indicator (Preview)"}),`
`,e.jsxs(n.p,{children:[`We've added a new version of
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator-react--basic",rel:"nofollow",children:e.jsx(n.code,{children:"StatusIndicator"})}),`
which has been redesigned as a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),` to the Preview
package. `,e.jsx(n.code,{children:"StatusIndicator"}),` is best used for helping the user quickly identify the status of a task,
action, or page element.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// StatusIndicator (Main)
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

<StatusIndicator
  emphasis={StatusIndicator.Emphasis.Low}
  label="Published"
  type={StatusIndicator.Type.Green}
  icon={uploadCloudIcon}
/>;

// StatusIndicator (Preview)
import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

<StatusIndicator emphasis="low" variant="green">
  <StatusIndicator.Label>Published</StatusIndicator.Label>
  <StatusIndicator.Icon icon={uploadCloudIcon} />
</StatusIndicator>;
`})}),`
`,e.jsxs(n.p,{children:["You may still use ",e.jsx(n.code,{children:"StatusIndicator"}),` in the Main package, but note that it will be replaced by
`,e.jsx(n.code,{children:"StatusIndicator"})," in the Preview package in the future."]}),`
`,e.jsx(n.h2,{id:"component-deprecations",children:"Component Deprecations"}),`
`,e.jsx(n.h3,{id:"deprecation-types",children:"Deprecation Types"}),`
`,e.jsx(n.h4,{id:"soft-deprecation",children:"Soft Deprecation"}),`
`,e.jsx(n.p,{children:`A soft-deprecated component is still available with its full functionality, but it will have been
renamed with a prefix to indicate its soft-deprecated status. It will also include a console warning
announcing its deprecation. This warning will only be triggered on the component's initial render.`}),`
`,e.jsx(n.p,{children:`Soft-deprecated types and utilities will also have been renamed but generally will not trigger a
console warning.`}),`
`,e.jsx(n.h4,{id:"hard-deprecation",children:"Hard Deprecation"}),`
`,e.jsxs(n.p,{children:[`A hard-deprecated component or package is no longer available. You will need to follow the method
prescribed in our Upgrade Guide to update your application. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` to our team
directly if you need additional help.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"drawer",children:"Drawer"}),`
`,e.jsxs(n.p,{children:["We've ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft-deprecated"})," ",e.jsx(n.code,{children:"Drawer"})," and renamed the following items:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Drawer"})," to ",e.jsx(n.code,{children:"DeprecatedDrawer"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DrawerProps"})," to ",e.jsx(n.code,{children:"DeprecatedDrawerProps"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DrawerHeader"})," to ",e.jsx(n.code,{children:"DeprecatedDrawerHeader"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DrawerHeaderProps"})," to ",e.jsx(n.code,{children:"DeprecatedDrawerHeaderProps"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
import {Drawer, DrawerHeader} from '@workday/canvas-kit-labs-react/drawer';

<Drawer
  header={
    <DrawerHeader
      closeIconAriaLabel="Close"
      onClose={() => console.log('onClose callback')}
      title="Deprecated Drawer Header"
    />
  }
/>;

// v8
import {DeprecatedDrawer, DeprecatedDrawerHeader} from '@workday/canvas-kit-labs-react/drawer';

<DeprecatedDrawer
  header={
    <DeprecatedDrawerHeader
      closeIconAriaLabel="Close"
      onClose={() => console.log('onClose callback')}
      title="Deprecated Drawer Header"
    />
  }
/>;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rename ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"DrawerProps"}),", ",e.jsx(n.code,{children:"DrawerHeader"})," and ",e.jsx(n.code,{children:"DrawerHeaderProps"}),` to their
deprecated names.`]}),`
`,e.jsxs(n.p,{children:[`You may continue to use this component, but please note that we plan to
`,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"}),` it in v9. Consider using the
`,e.jsx(n.a,{href:"?path=/docs/preview-side-panel--docs",children:"Side Panel"})," in the Preview package instead."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"menu-preview",children:"Menu (Preview)"}),`
`,e.jsxs(n.p,{children:["We've ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft-deprecated"})," the ",e.jsx(n.code,{children:"Menu"})," in Preview and renamed the following items:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu"})," to ",e.jsx(n.code,{children:"DeprecatedMenu"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MenuProps"})," to ",e.jsx(n.code,{children:"DeprecatedMenuProps"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MenuState"})," to ",e.jsx(n.code,{children:"DeprecatedMenuState"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MenuItem"})," to ",e.jsx(n.code,{children:"DeprecatedMenuItem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MenuItemProps"})," to ",e.jsx(n.code,{children:"DeprecatedMenuItemProps"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
import {Menu, MenuItem, MenuProps, MenuItemProps} from '@workday/canvas-kit-preview-react/menu';

interface AnotherMenuProps extends MenuProps {
  specialProp?: boolean;
}
type CustomMenuItemProps = MenuItemProps;

const CustomMenu = () => {
  return (
    <Menu>
      <MenuItem>First Item</MenuItem>
    </Menu>
  );
};

// v8
import {
  DeprecatedMenu,
  DeprecatedMenuItem,
  DeprecatedMenuProps,
  DeprecatedMenuItemProps,
} from '@workday/canvas-kit-preview-react/menu';

interface AnotherMenuProps extends DeprecatedMenuProps {
  specialProp?: boolean;
}

type CustomMenuItemProps = DeprecatedMenuItemProps;

const CustomMenu = () => {
  return (
    <DeprecatedMenu>
      <DeprecatedMenuItem>First Item</DeprecatedMenuItem>
    </DeprecatedMenu>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rename ",e.jsx(n.code,{children:"Menu"}),", ",e.jsx(n.code,{children:"MenuProps"}),", ",e.jsx(n.code,{children:"MenuState"}),", ",e.jsx(n.code,{children:"MenuItem"})," and ",e.jsx(n.code,{children:"MenuItemProps"}),` to their
deprecated names.`]}),`
`,e.jsxs(n.p,{children:[`You may continue to use this component, but please note that we plan to
`,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"})," it in v9. Consider using the ",e.jsx(n.a,{href:"?path=/docs/components-popups-menu--docs",children:"Menu"}),` in
the Main package instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"layout-and-column",children:"Layout and Column"}),`
`,e.jsxs(n.p,{children:["We've ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft-deprecated"})," ",e.jsx(n.code,{children:"Layout"})," and ",e.jsx(n.code,{children:"Column"})," and renamed the following items:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Layout"})," to ",e.jsx(n.code,{children:"DeprecatedLayout"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LayoutProps"})," to ",e.jsx(n.code,{children:"DeprecatedLayoutProps"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Column"})," to ",e.jsx(n.code,{children:"DeprecatedColumn"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ColumnProps"})," to ",e.jsx(n.code,{children:"DeprecatedColumnProps"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
import {Layout, Column} from '@workday/canvas-kit-react/layout';

<Layout gutter={0}>
  <Layout.Column spacing={0}>
    <Card />
  </Layout.Column>
</Layout>;

// v8
import {DeprecatedLayout, DeprecatedColumn} from '@workday/canvas-kit-react/layout';

<DeprecatedLayout gutter={0}>
  <DeprecatedLayout.Column spacing={0}>
    <Card />
  </DeprecatedLayout.Column>
</DeprecatedLayout>;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rename ",e.jsx(n.code,{children:"Layout"}),", ",e.jsx(n.code,{children:"LayoutProps"}),", ",e.jsx(n.code,{children:"Column"})," and ",e.jsx(n.code,{children:"ColumnProps"}),` to their deprecated
names.`]}),`
`,e.jsxs(n.p,{children:[`You may continue to use these components, but please note that we plan to
`,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"})," them in v9. Consider using the newly-released ",e.jsx(n.a,{href:"#grid",children:"Grid"}),`
component instead.`]}),`
`,e.jsx(n.h2,{id:"component-updates",children:"Component Updates"}),`
`,e.jsx(n.h3,{id:"action-bar",children:"Action Bar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar.List"}),` with overflow behavior now requires to pass a overflow button component as a value
of `,e.jsx(n.code,{children:"overflowButton"})," prop, the same way we did for ",e.jsx(n.code,{children:"Tabs"})," and ",e.jsx(n.code,{children:"Breadcrumbs"}),` components. In Canvas Kit
v7 the component for overflow button was placed directly inside `,e.jsx(n.code,{children:"ActionBar.List"}),` without passing any
prop. We found limitation of this approach because it was not possible to modify an overflow button
or pass any prop into it. To remove this limitation, `,e.jsx(n.code,{children:"ActionBar.OverflowButton"}),` inside
`,e.jsx(n.code,{children:"ActionBar.List"})," is replaced with an ",e.jsx(n.code,{children:"overflowButton"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7, an overflow button is inside ActionBar.List
<ActionBar.List position="relative">{/* items */}</ActionBar.List>

// inside ActionBar.List
<Stack>
  {items}
  <ActionBar.OverflowButton /> // OverflowButton is a hard-coded component
</Stack>


// v8, an overflow button should be passed as a prop
<ActionBar.List
  position="relative"
  overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
>
  {/* items */}
</ActionBar.List>

// inside ActionBar.List
<Stack>
  {items}
  {overflowButton} // overflowButton prop is a passed component
</Stack>
`})}),`
`,e.jsx(n.h3,{id:"box",children:"Box"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Box"})," now supports the following props to set font and text styles: ",e.jsx(n.code,{children:"fontFamily"}),", ",e.jsx(n.code,{children:"fontSize"}),`,
`,e.jsx(n.code,{children:"fontStyle"}),", ",e.jsx(n.code,{children:"fontWeight"}),", ",e.jsx(n.code,{children:"lineHeight"}),", ",e.jsx(n.code,{children:"letterSpacing"}),", ",e.jsx(n.code,{children:"textAlign"}),", ",e.jsx(n.code,{children:"textDecoration"}),`,
`,e.jsx(n.code,{children:"textTransform"}),", ",e.jsx(n.code,{children:"textShadow"}),", ",e.jsx(n.code,{children:"whiteSpace"}),", and ",e.jsx(n.code,{children:"wordBreak"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
const StyledBox = styled(Box)({
  fontFamily: 'monospace',
  fontSize: type.properties.fontSizes[16],
  fontWeight: type.properties.fontWeights.medium
})

<StyledBox />

// v8
<Box fontFamily="monospace" fontSize={16} fontWeight="medium" />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Breadcrumbs"}),` has been promoted to the Main package. It now uses the list system from our
`,e.jsx(n.a,{href:"?path=/docs/features-collections--docs",children:"Collection API"}),` which provides new
overflow behavior based on container width.`]}),`
`,e.jsxs(n.p,{children:["The following code-moddable changes have been made to the ",e.jsx(n.code,{children:"Breadcrumbs"}),` API (see below for
additional changes requiring manual work):`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Breadcrumbs"})," has been promoted from Preview (",e.jsx(n.code,{children:"@workday/canvas-kit-preview-react"}),`) to Main
(`,e.jsx(n.code,{children:"@workday/canvas-kit-react"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Breadcrumbs.Nav"})," has been replaced with ",e.jsx(n.code,{children:"Breadcrumbs"}),". Any ",e.jsx(n.code,{children:"aria-label"}),` previously applied to
`,e.jsx(n.code,{children:"Breadcrumbs.Nav"})," should now be applied to ",e.jsx(n.code,{children:"Breadcrumbs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Breadcrumbs.CollapsibleList"})," has been renamed to ",e.jsx(n.code,{children:"Breadcrumbs.List"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Breadcrumbs.ListItem"})," has been renamed to ",e.jsx(n.code,{children:"Breadcrumbs.Item"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all of the changes above for you automatically."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
<Breadcrumbs.Nav aria-label="Breadcrumbs">
  <Breadcrumbs.List>
    <Breadcrumbs.ListItem>
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
    </Breadcrumbs.ListItem>
    <Breadcrumbs.ListItem>
      <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
    </Breadcrumbs.ListItem>
    <Breadcrumbs.CurrentItem>Dinner</Breadcrumbs.CurrentItem>
  </Breadcrumbs.List>
</Breadcrumbs.Nav>

// v8
<Breadcrumbs aria-label="Breadcrumbs">
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.CurrentItem>Dinner</Breadcrumbs.CurrentItem>
  </Breadcrumbs.List>
</Breadcrumbs>
`})}),`
`,e.jsxs(n.p,{children:["Additionally, there are a handful of changes to the ",e.jsx(n.code,{children:"Breadcrumbs"}),` API which will require manual
updates on your part:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Changes to Redirects"}),`
`,e.jsx(n.li,{children:"Updated Overflow Behavior"}),`
`]}),`
`,e.jsx(n.p,{children:"We've outlined these changes in more detail below."}),`
`,e.jsx(n.h4,{id:"changes-to-redirects",children:"Changes to Redirects"}),`
`,e.jsxs(n.p,{children:["We've removed ",e.jsx(n.code,{children:"onAction"})," from ",e.jsx(n.code,{children:"Breadcrumbs.Item"})," and ",e.jsx(n.code,{children:"Breadcrumbs.Link"}),". ",e.jsx(n.code,{children:"Breadcrumbs.Link"}),` now
defaults to redirecting with an `,e.jsx(n.code,{children:"href"}),`, which means the page will hard-redirect when the link is
clicked.`]}),`
`,e.jsxs(n.p,{children:[`If you're in a single-page application (SPA) environment, you may want to use the internal SPA
router instead. You can override the hard-redirect with a custom `,e.jsx(n.code,{children:"onClick"}),` handler that blocks the
default behavior of the event and passes the link path along to your SPA router. Most of our
consumers use `,e.jsx(n.code,{children:"react-router-dom"})," for managing SPA routing; here are examples of how to use ",e.jsx(n.code,{children:"onClick"}),`
with v5 and v6 of `,e.jsx(n.code,{children:"react-router-dom"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// React Router DOM v5 API
import {useHistory} from 'react-router-dom';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
...
const history = useHistory();
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link?: string) => {
      event.preventDefault();
    // if no link is provided, default to the current path
    history.push(link || window.location.pathname);
}
return (
  <Breadcrumbs.Link href="/account" onClick={handleClick}>
    Account
  </Breadcrumbs.Link>
);

// React Router DOM v6 API
import {useNavigate} from 'react-router-dom';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
...
const navigate = useNavigate();
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link?: string) => {
      event.preventDefault();
    // if no link is provided, default to the current path
    navigate(link || window.location.pathname);
}
return (
  <Breadcrumbs.Link href="/account" onClick={handleClick}>
    Account
  </Breadcrumbs.Link>
);
`})}),`
`,e.jsx(n.h4,{id:"updated-overflow-behavior",children:"Updated Overflow Behavior"}),`
`,e.jsxs(n.p,{children:["We've removed the component-specific overflow functionality from ",e.jsx(n.code,{children:"Breadcrumbs"}),` now that it uses the
overflow behavior provided by the Collection API. In order to enable the new overflow behavior,
you'll need to use the dynamic API by passing an array of items to `,e.jsx(n.code,{children:"Breadcrumbs"}),` (rather than
passing the items as statically defined `,e.jsx(n.code,{children:"children"}),` via JSX). The items can be passed to
`,e.jsx(n.code,{children:"Breadcrumbs"})," via its ",e.jsx(n.code,{children:"items"})," prop or via an ",e.jsx(n.code,{children:"items"})," key within a provided ",e.jsx(n.code,{children:"model"}),"."]}),`
`,e.jsxs(n.p,{children:["Here's an example of how to convert a v7 instance of overflow ",e.jsx(n.code,{children:"Breadcrumbs"}),` using the static API to
the v8 equivalent using the dynamic API with the `,e.jsx(n.code,{children:"items"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// v7
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';

export const OldCollapsibleList = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumbs">
      <Breadcrumbs.CollapsibleList buttonAriaLabel="More links" maxWidth={300}>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/lunch">Lunch</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/small-plates-and-appetizers">
            Small Plates & Appetizers
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem>Focaccia Genovese</Breadcrumbs.CurrentItem>
      </Breadcrumbs.CollapsibleList>
    </Breadcrumbs.Nav>
  );
};

// v8
const NewOverflowList = () => {
  const [items] = React.useState([
    {id: '1', text: 'Home', link: '/'},
    {id: '2', text: 'Menus', link: '/menus'},
    {id: '3', text: 'Lunch', link: '/lunch'},
    {id: '4', text: 'Small Plates & Appetizers', link: '/small-plates-and-appetizers'},
    {id: '5', text: 'Focaccia Genovese'},
  ]);

  return (
    <Breadcrumbs items={items} aria-label="Breadcrumbs">
      <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
        {item =>
          item.link ? (
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          ) : (
            <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
          )
        }
      </Breadcrumbs.List>
      <Breadcrumbs.Menu.Popper>
        <Breadcrumbs.Menu.Card>
          <Breadcrumbs.Menu.List>
            {(item: Breadcrumb) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
          </Breadcrumbs.Menu.List>
        </Breadcrumbs.Menu.Card>
      </Breadcrumbs.Menu.Popper>
    </Breadcrumbs>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"component-states-table",children:"Component States Table"}),`
`,e.jsxs(n.p,{children:["We've promoted ",e.jsx(n.code,{children:"ComponentStatesTable"})," from Labs (",e.jsx(n.code,{children:"@workday/canvas-kit-labs/common"}),`) to Main
(`,e.jsx(n.code,{children:"@workday/canvas-kit-react/testing"}),")."]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle this change for you automatically."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"menu-main",children:"Menu (Main)"}),`
`,e.jsxs(n.p,{children:["We've updated the depth value of ",e.jsx(n.code,{children:"Menu.Card"})," from ",e.jsx(n.code,{children:"1"})," to ",e.jsx(n.code,{children:"3"}),". This is a visually breaking change."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:["We've updated the ",e.jsx(n.code,{children:"Modal"}),` component to include new touch and responsive behaviors. The responsive
`,e.jsx(n.code,{children:"Modal"})," will be displayed when users are browsing on screen sizes between ",e.jsx(n.code,{children:"320px"})," and ",e.jsx(n.code,{children:"768px"}),` and
will have the following visual differences compared to the standard `,e.jsx(n.code,{children:"Modal"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Padding between the edge of ",e.jsx(n.code,{children:"Modal.Card"})," and its contents reduced to ",e.jsx(n.code,{children:"16px"})," (standard: ",e.jsx(n.code,{children:"32px"}),")"]}),`
`,e.jsxs(n.li,{children:["Border radius of ",e.jsx(n.code,{children:"Modal.Card"})," increased to ",e.jsx(n.code,{children:"24px"})," (standard: ",e.jsx(n.code,{children:"8px"}),")"]}),`
`,e.jsxs(n.li,{children:["Vertical space between ",e.jsx(n.code,{children:"Modal.Heading"})," and ",e.jsx(n.code,{children:"Modal.Body"})," reduced to ",e.jsx(n.code,{children:"16px"})," (standard: ",e.jsx(n.code,{children:"24px"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"})," animates from the ",e.jsx(n.code,{children:"bottom center"})," and is aligned near the bottom of the viewport"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Additionally, users interacting with ",e.jsx(n.code,{children:"Modal"}),` on touch will not be able to exit out of the modal by
tapping on the overlay.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popups",children:"Popups"}),`
`,e.jsxs(n.p,{children:["We've updated all popup ",e.jsx(n.code,{children:"CloseIcon"})," and ",e.jsx(n.code,{children:"CloseButton"})," to default to ",e.jsx(n.code,{children:"type=button"}),`. We did this so
these close buttons did not submit when a form element is present. Without this change, you have to
manually add `,e.jsx(n.code,{children:'type="button"'})," to these components if you wrap popup contents in a ",e.jsx(n.code,{children:"form"}),` element.
While this is a very unlikely that a `,e.jsx(n.code,{children:"CloseButton"}),` was intentionally used as an implicit submit
button, it is still a breaking change. This change effects the following components:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Popup.CloseIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Dialog.CloseIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Modal.CloseIcon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Popup.CloseButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Dialog.CloseButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Modal.CloseButton"})}),`
`]}),`
`,e.jsx(n.h3,{id:"loading-animation",children:"Loading Animation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"LoadingAnimation"})," is being renamed to ",e.jsx(n.code,{children:"LoadingDots"}),` and is moving from of
`,e.jsx(n.code,{children:"@workday/canvas-kit-react/loading-animation"})," to ",e.jsx(n.code,{children:"@workday/canvas-kit-react/loading-dots"}),`. The
component has not been modified and you may continue to use this component exactly as you did in v7.`]}),`
`,e.jsx(n.p,{children:"The CSS package has been similarly updated for consistency, but is still in maintenance mode."}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all these changes automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rename import sources",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@workday/canvas-kit-react/loading-animation"})," becomes ",e.jsx(n.code,{children:"@workday/canvas-kit-react/loading-dots"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename import specifiers and identifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"LoadingAnimation"})," becomes ",e.jsx(n.code,{children:"LoadingDots"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename JSX identifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<LoadingAnimation />"})," becomes ",e.jsx(n.code,{children:"<LoadingDots />"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v7
import {LoadingAnimation} from '@workday/canvas-kit-react/loading-animation';

const MyComponent = (props: MyComponentProps) => {
  return <LoadingAnimation />;
};

const StyledLoadingAnimation = styled(LoadingAnimation)({});

// v8
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

const MyComponent = (props: MyComponentProps) => {
  return <LoadingDots />;
};

const StyledLoadingAnimation = styled(LoadingDots)({});
`})})]})}function j(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{j as default};
