import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as r}from"./index-3YbjYt95.js";import{ae as o}from"./index-Ca_ueJdC.js";import"./index-IfJi-UCQ.js";import"./iframe-Df90AzKP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Upgrade Guides/v4.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-40-upgrade-guide",children:"Canvas Kit 4.0 Upgrade Guide"}),`
`,e.jsx(n.p,{children:`Below are the breaking changes made in Canvas Kit v4. Please reach out if you have any questions
about the update.`}),`
`,e.jsx(n.p,{children:`CSS users rejoice! :tada: No breaking changes in this release. The following changes all relate to
our React infrastructure and components.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#infrastructure-upgrades",children:"Infrastructure Upgrades"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#theming-changes",children:"Theming Changes"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#breaking-component-changes",children:"Breaking Component Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#general",children:"General"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#core",children:"Core"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#avatar",children:"Avatar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#iconbuttontogglegroup",children:"IconButtonToggleGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#inputprovider",children:"InputProvider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modal",children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#drawerheader",children:"DrawerHeader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#searchbar",children:"SearchBar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu",children:"Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popup",children:"Popup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sidepanel",children:"SidePanel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#skeleton",children:"Skeleton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popper",children:"Popper"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooltip",children:"Tooltip"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"infrastructure-upgrades",children:"Infrastructure Upgrades"}),`
`,e.jsx(n.p,{children:"Breaking:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["React & ReactDOM upgraded to 16.12 (",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/533",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/533"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We are now fully adopting hooks, so version 16.7 and below are no longer supported"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Non-breaking:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Typescript upgraded to v3.8 (",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/533",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/533"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/sandersn/downlevel-dts",rel:"nofollow",children:"downlevel-dts"}),` was used to resolve breaking changes
in `,e.jsx(n.code,{children:"typescript@3.7"}),`, so older versions of typescript are still supported. However, it is
recommended to use v3.8.`]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`Many of our dependencies have been updated to address a low level vulnerability. This shouldn't
affect your day to day usage of Canvas Kit.`}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-changes",children:"Theming Changes"}),`
`,e.jsxs(n.p,{children:[`We have promoted all of the theming functionality out of Canvas Kit Labs.
`,e.jsxs(n.a,{href:"https://github.com/Workday/canvas-kit/tree/v4.0.0/modules/common/react/lib/theming",rel:"nofollow",children:["It now lives in ",e.jsx(n.code,{children:"@workday/canvas-kit-react-common"})]}),`.
This includes the `,e.jsx(n.code,{children:"CanvasProvider"}),` component. We've also made some stability improvements (see
below).`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/558",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/558"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/594",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/594"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/593",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/593"})}),`
`]}),`
`,e.jsx(n.h4,{id:"changes",children:"Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We now call ",e.jsx(n.code,{children:"createCanvasTheme"})," as part of our internal ",e.jsx(n.code,{children:"useTheme"}),` hook to ensure we are always
accessing defined theme fields. It is no longer required to wrap your partial theme with
`,e.jsx(n.code,{children:"createCanvasTheme"})," before passing it into ",e.jsx(n.code,{children:"CanvasProvider"}),"/",e.jsx(n.code,{children:"ThemeProvider"}),". ",e.jsx(n.code,{children:"CanvasProvider"}),` now
accepts a theme of the type `,e.jsx(n.code,{children:"PartialEmotionCanvasTheme"}),"."]}),`
`,e.jsxs(n.li,{children:[`Because of this change, if you're using the Canvas theme passed from emotion within your
components, you now need to wrap the theme (e.g. `,e.jsx(n.code,{children:"useTheme(theme)"}),`) to ensure all fields are
defined.`]}),`
`,e.jsxs(n.li,{children:["In order to better support non-Canvas themes, the ",e.jsx(n.code,{children:"CanvasTheme"}),` object now needs to be namespaced
under `,e.jsx(n.code,{children:"canvas"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  theme: {
    canvas: {
      palette: {
        // ...
      },
      breakpoints: {
        // ...
      },
      direction: ContentDirection.LTR
    }
  }
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"This means several type references have changed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CanvasTheme"})," > ",e.jsx(n.code,{children:"EmotionCanvasTheme"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PartialCanvasTheme"})," > ",e.jsx(n.code,{children:"PartialEmotionCanvasTheme"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"breaking-component-changes",children:"Breaking Component Changes"}),`
`,e.jsx(n.h3,{id:"general",children:"General"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We've moved away from using ",e.jsx(n.code,{children:"SyntheticEvent"}),` typing in favor of using more accurate types
(`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/499",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/499"}),")"]}),`
`,e.jsx(n.li,{children:`Popper dependency has been upgraded to v2 and now all popups use React Portals (potential z-index
breaking change)`}),`
`,e.jsxs(n.li,{children:[`Several ARIA label props have been renamed for clarity
(`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"}),`). These changes are broken down by component
below.`]}),`
`,e.jsxs(n.li,{children:["Our ",e.jsx(n.code,{children:"focusRing"}),` utility has been updated with a new API to support theming and improve legibility.
(`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/558",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/558"})," & ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/726",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/726"}),`).
Example:`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`focusRing(2, 2, true, false, buttonColors.focusRingInner, buttonColors.focusRingOuter);
`})}),`
`,"becomes",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`focusRing({
  separation: 2,
  innerColor: buttonColors.focusRingInner,
  outerColor: buttonColors.focusRingOuter,
});
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"core",children:"Core"}),`
`,e.jsxs(n.p,{children:[`We've made minor changes to our link variant text styles based on feedback from accessibility. As
part of this change, we've also added a new `,e.jsx(n.code,{children:"Hyperlink"}),` component to
`,e.jsx(n.code,{children:"@workday/canvas-kit-react-button"})," to make applying these styles easier."]}),`
`,e.jsxs(n.p,{children:["We've updated to ",e.jsx(n.code,{children:"@workday/canvas-colors-web@2.0.0"}),", which comes with a few breaking changes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canvas.colors.primary"})," & ",e.jsx(n.code,{children:"colors.primary"}),` were previously deprecated and are no longer available
under this namespace. All of these semantic colors are still accessible via the semantic colors
exports (`,e.jsx(n.code,{children:"buttonColors"}),", ",e.jsx(n.code,{children:"inputColors"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canvas.colors.gradients"})," & ",e.jsx(n.code,{children:"colors.gradients"})," exports have been moved to ",e.jsx(n.code,{children:"canvas.gradients"}),` or
`,e.jsx(n.code,{children:"gradients"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canvas.inputColors.warning"})," & ",e.jsx(n.code,{children:"inputColors.warning"}),` exports have been changed to
`,e.jsx(n.code,{children:"*inputColors.alert"})," to match other conventions"]}),`
`,e.jsxs(n.li,{children:["Narrow incorrect ",e.jsx(n.code,{children:"CanvasColor"})," type from ",e.jsx(n.code,{children:"string | undefined"})," to a list of all canvas colors"]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/541",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/541"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/706",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/706"})}),`
`]}),`
`,e.jsx(n.h3,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarButton"})," has been removed. By default ",e.jsx(n.code,{children:"Avatar"}),` will now be a button. If you need the old
plain div version you can pass the prop `,e.jsx(n.code,{children:'as="div"'}),"."]}),`
`,e.jsxs(n.li,{children:[`The component is now a functional component instead of a class. If you are using ref on the class
version it will not be pointing to the same thing. `,e.jsx(n.code,{children:"buttonRef"})," has changed to ",e.jsx(n.code,{children:"ref"}),` since it could
now reference a button or a div`]}),`
`,e.jsx(n.li,{children:`Visual change: Avatar images appear once they are load. While loading or if they fail to load the
default icon will be shown. So you may want to check which variant you are using even in the image
case.`}),`
`]}),`
`,e.jsx(n.p,{children:"PR:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/614",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/614"})}),`
`]}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(n.p,{children:"We've refactored our Button components to simplify logic and add support for theming."}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/471",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/471"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/509",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/509"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/527",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/527"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/540",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/540"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/541",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/541"})}),`
`]}),`
`,e.jsx(n.h4,{id:"changes-1",children:"Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Some of the button variants have been split into different components to prevent invalid API
combinations. `,e.jsx(n.code,{children:"DeleteButton"}),", ",e.jsx(n.code,{children:"HighlightButton"}),", and ",e.jsx(n.code,{children:"OutlineButton"}),` are now separate components
with their own interface. Here are some of the invalid prop combinations that are no longer
possible:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Delete button with a data label or icon"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Dropdown button with a data label or icon"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Highlight button with a data label"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Highlight button without an icon"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Dropdown with variants other than primary and secondary"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Small buttons with an icon or data label"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Small Highlight button"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Small Dropdown button"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"etc."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Required changes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Button variant={Button.Variant.Delete}>"})," > ",e.jsx(n.code,{children:"<DeleteButton>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Button variant={Button.Variant.Highlight}>"})," > ",e.jsx(n.code,{children:"<HighlightButton>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Button variant={Button.Variant.OutlineSecondary}>"})," > ",e.jsx(n.code,{children:"<OutlineButton>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Button variant={Button.Variant.OutlinePrimary}>"}),` >
`,e.jsx(n.code,{children:"<OutlineButton variant={OutlineButton.Variant.Primary}>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Button variant={Button.Variant.OutlineInverse}>"}),` >
`,e.jsx(n.code,{children:"<OutlineButton variant={OutlineButton.Variant.Inverse}>"})]}),`
`,e.jsx(n.li,{children:"All invalid prop combinations (noted above) will need to be remedied"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The majority of the button variant types have changed. ",e.jsx(n.code,{children:"BaseButtonProps"}),` is no longer available as
each button variant has their own interface.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"React >= 16.8 required for hooks"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Spacing within buttons has been corrected to match the specs. This may cause horizontal flow
changes`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TextButton"})," now only allows ",e.jsx(n.code,{children:"TextButtonSize.Small"})," and ",e.jsx(n.code,{children:"TextButtonSize.Medium"}),". ",e.jsx(n.strong,{children:`Required
changes:`})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TextButtonSize.Medium"})," > ",e.jsx(n.code,{children:'"small"'})," or ",e.jsx(n.code,{children:"TextButtonSize.Small"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TextButtonSize.Large"})," > ",e.jsx(n.code,{children:'"medium"'})," or ",e.jsx(n.code,{children:"TextButtonSize.Medium"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"All caps variants for TextButton have been turned into a prop"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Required changes:"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<TextButton variant={TextButton.Variant.AllCaps}>"})," > ",e.jsx(n.code,{children:"<TextButton allCaps={true}>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<TextButton variant={TextButton.Variant.InverseAllCaps}>"}),` >
`,e.jsx(n.code,{children:"<TextButton variant={TextButton.Variant.Inverse} allCaps={true}>"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"All caps large/medium text buttons now correctly use 16px font (up from 14)"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Text button has some minor visual changes for various interaction states"}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"quality-of-life-changes",children:"Quality of Life changes:"}),`
`,e.jsx(n.p,{children:`With the new components for variants and the simpler types for sizes, the code for complex buttons
is much more concise.`}),`
`,e.jsx(n.p,{children:"Before:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Button variant={Button.Variant.OutlineSecondary} size={Button.Size.Large}>
  Label
</Button>
`})}),`
`,e.jsx(n.p,{children:"After:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<OutlineButton size="large">Label</OutlineButton>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"iconbuttontogglegroup",children:"IconButtonToggleGroup"}),`
`,e.jsxs(n.p,{children:["This component has been renamed to ",e.jsx(n.code,{children:"SegmentedControl"}),` and has been converted into it's own component
(`,e.jsx(n.code,{children:"@workday/canvas-kit-react-segmented-control"}),"). ",e.jsx(n.code,{children:"IconButtonToggleGroup"}),` is no longer exported from
`,e.jsx(n.code,{children:"@workday/canvas-kit-react-button"}),"."]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/505",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/505"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/524",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/524"})}),`
`]}),`
`,e.jsx(n.p,{children:"Before:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {IconButtonToggleGroup} from '@workday/canvas-kit-react-button';

<IconButtonToggleGroup>
  <IconButton icon={listViewIcon} title="List View" aria-label="List View" />
  <IconButton icon={worksheetsIcon} title="Worksheets" aria-label="Worksheets" />
</IconButtonToggleGroup>;
`})}),`
`,e.jsx(n.p,{children:"After:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {SegmentedControl} from '@workday/canvas-kit-react-segmented-control';

<SegmentedControl>
  <IconButton icon={listViewIcon} title="List View" aria-label="List View" />
  <IconButton icon={worksheetsIcon} title="Worksheets" aria-label="Worksheets" />
</SegmentedControl>;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"inputprovider",children:"InputProvider"}),`
`,e.jsxs(n.p,{children:["Our ",e.jsx(n.code,{children:"InputProvider"}),` did not work with React Portals (since the popups get placed outside of the
`,e.jsx(n.code,{children:"InputProvider"})," container ",e.jsx(n.code,{children:"div"}),". ",e.jsx(n.code,{children:"InputProvider"})," provider has been updated to use ",e.jsx(n.code,{children:"document.body"}),`
(configurable with the `,e.jsx(n.code,{children:"containerElement"})," prop)."]}),`
`,e.jsxs(n.p,{children:["PR: ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/546",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/546"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:[`Modal now uses React Portals which could cause a visual breaking change related to z-indexing.
Modals now use a popup stack manager that controls z-indexing. Adding your own zIndex will no longer
have any effect. Modals accurately handle escape key, so `,e.jsx(n.code,{children:"closeOnEscape"}),` has been removed. If you
used this feature, you may want to look into the PopupStack.`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/419",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/419"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/670",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/670"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"drawerheader",children:"DrawerHeader"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"closeIconLabel"})," -> ",e.jsx(n.code,{children:"closeIconAriaLabel"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"searchbar",children:"SearchBar"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"submitLabel"})," -> ",e.jsx(n.code,{children:"submitAriaLabel"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"openButtonLabel"})," -> ",e.jsx(n.code,{children:"openButtonAriaLabel"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"closeButtonLabel"})," -> ",e.jsx(n.code,{children:"closeButtonAriaLabel"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"labeledBy"})," -> ",e.jsx(n.code,{children:"'aria-labelledby'"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popup",children:"Popup"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"closeLabel"})," -> ",e.jsx(n.code,{children:"closeButtonAriaLabel"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"sidepanel",children:"SidePanel"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"closeNavigationLabel"})," -> ",e.jsx(n.code,{children:"closeNavigationAriaLabel"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"openNavigationLabel"})," -> ",e.jsx(n.code,{children:"openNavigationAriaLabel"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:"The following props where renamed for appropriate aria naming and clarity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loadingLabel"})," -> ",e.jsx(n.code,{children:"'aria-label"})]}),`
`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/551",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/551"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popper",children:"Popper"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popper"})," was changed to a Functional Component with a forwarded ref. If you passed a ",e.jsx(n.code,{children:"ref"}),` object to
`,e.jsx(n.code,{children:"Popper"})," before, it will now point to the element rather than the ",e.jsx(n.code,{children:"Popper"}),` instance. Popper was
moved to the `,e.jsx(n.code,{children:"@workday/canvas-kit-react-popup"}),` module. This change aligns with the concept that
Popup is a type of UI behavior. Popups can be built on top of the popup system in the Popup module.`]}),`
`,e.jsx(n.p,{children:"PRs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/528",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/528"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/670",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/670"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(n.p,{children:`Tooltip now uses React Portals and has been completely updated to make attaching tooltips much
easier.`}),`
`,e.jsx(n.p,{children:"PR:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/528",rel:"nofollow",children:"https://github.com/Workday/canvas-kit/pull/528"})}),`
`]}),`
`,e.jsxs(n.p,{children:["The original ",e.jsx(n.code,{children:"Tooltip"})," did little more than add a ",e.jsx(n.code,{children:'role="tooltip"'}),` to a styled component. The
original tooltip is now exported as `,e.jsx(n.code,{children:"TooltipContainer"}),` to make it easier to migrate without
rewriting all tooltips. The new experience is much better and will remove the need for wrapping
components, but if you'd like to keep using the old tooltip as is, your imports will have to be
updated to use the old API: `,e.jsx(n.strong,{children:"Before:"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {Tooltip} from '@workday/canvas-kit-react-tooltip';
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"After:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {TooltipContainer as Tooltip} from '@workday/canvas-kit-react-tooltip';
`})}),`
`,e.jsxs(n.p,{children:["Also with this change, the tooltip no longer gets the role ",e.jsx(n.code,{children:"tooltip"})," and must be added manually."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["More to come! Check out ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/483",rel:"nofollow",children:"our 4.0 tracking issue"}),`
for all planned changes.`]})})]})}function g(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{g as default};
