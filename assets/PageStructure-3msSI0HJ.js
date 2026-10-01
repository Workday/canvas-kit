import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as S}from"./index-3YbjYt95.js";import{ae as A}from"./index-Ce1Wcj17.js";import{E as x}from"./union-DYG_1Dhz.js";import{e as w}from"./index-IfJi-UCQ.js";import{G}from"./GlobalHeader-BAJbNUef.js";import{S as T}from"./SidePanelWithNavigation-DKkWwyfC.js";import{B as o}from"./Breadcrumbs-B6Ll38U3.js";import{c as n,a as j}from"./cs-CmRirKzJ.js";import{p as h,s as u,c as y,g as p}from"./index-jCBjnmNg.js";import{p as s}from"./px2rem-C0KbprIx.js";import{G as i}from"./Grid-Dd6Ikia_.js";import{F as g}from"./Flex-49n7B--O.js";import{S as L}from"./SecondaryButton-BshSgfsU.js";import{T as R}from"./TertiaryButton-DO37jVwm.js";import{H as a}from"./TypeLevelComponents-BsU4u7Uu.js";import"./iframe-DgE1WNGV.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CTUsj8TD.js";import"./Svg-DvDsbIKv.js";import"./components-dzPj21Gy.js";import"./StatusIndicator-HuVj55QL.js";import"./Text-BZ18Rj60.js";import"./mergeStyles-GqD3_A5P.js";import"./Box-DsxcKhHC.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-BKEnktnP.js";import"./grid-B0yCnV-C.js";import"./cornerShape-JvYjpjdp.js";import"./Card-CIlF8weM.js";import"./ExternalHyperlink-B_3urMIC.js";import"./Hyperlink-BnhZ1iqR.js";import"./external-link-ChL2h1Cn.js";import"./lerna-BuNPLYrH.js";import"./CanvasProvider-BziuWf85.js";import"./index-kj8ZfNNN.js";import"./Tooltip-08h0EB5u.js";import"./useTooltip-D7ZZfUuA.js";import"./getTransformFromPlacement-D0JsQZex.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useCloseOnEscape-TVPAhJIC.js";import"./Popper-BG2qD-j2.js";import"./ColorPicker-Df_cFdIM.js";import"./ColorInput-CJnfkSTl.js";import"./check-small-BqSDQIle.js";import"./TextInput-CeruIY1A.js";import"./types-DXdjelYI.js";import"./FormField-Dek4O1p1.js";import"./check-Ds6vsrAM.js";import"./Expandable-BT4mmXjj.js";import"./Avatar-CuzFtv7p.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DqeJmrP8.js";import"./Popup-4CjerSEi.js";import"./x-B1faap_l.js";import"./usePopupTarget-BDnM4W41.js";import"./useInitialFocus-uIdhUuvF.js";import"./useReturnFocus-DnOTNNs9.js";import"./useFocusRedirect-CeQbwPD5.js";import"./Table-BAvZydaq.js";import"./inbox-CU_FvG8D.js";import"./useComboboxLoader-BwVUKkBI.js";import"./useListLoader-DR-o4XEV.js";import"./Combobox-CNbTMGUH.js";import"./Menu-DQBNaCd9.js";import"./useListItemRegister-C0ytVt37.js";import"./useMount-CAK2BN3_.js";import"./OverflowTooltip-7JBYHmIQ.js";import"./useListItemSelect-jQIl0zkF.js";import"./chevron-right-small-Ng-H0z5q.js";import"./InputGroup-DuvOoLt2.js";import"./x-small-Cfgu7dLY.js";import"./search-DlWaqbP4.js";import"./notifications-DjQnQviY.js";import"./CountBadge-C-QYkHCR.js";import"./AriaLiveRegion-CZgcN7jE.js";import"./AccessibleHide-PyNrP5qA.js";import"./SidePanel-CAzxcNBE.js";import"./extend-BphcO0BU.js";import"./ribbon-BnhZWvQ1.js";import"./useOverflowListTarget-D8NNk0Fq.js";import"./bundle.esm-C4XAbbi1.js";import"./related-actions-BBat1SFr.js";import"./BaseButton-B8gT3S4k.js";import"./Button--R7xcJ39.js";const z=n({border:`${s(1)} solid ${y.border.contrast.default}`,borderRadius:u.md,paddingInlineStart:h.md}),B=()=>e.jsx(o,{className:z,"aria-label":"Breadcrumbs",children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Link,{href:"#",children:"Home"})}),e.jsx(o.Item,{children:e.jsx(o.Link,{href:"#",children:"Menus"})}),e.jsx(o.CurrentItem,{children:"Dinner"})]})});B.__RAW__=`import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const regionStyles = createStyles({
  border: \`\${px2rem(1)} solid \${system.color.border.contrast.default}\`,
  borderRadius: system.shape.md,
  paddingInlineStart: system.padding.md,
});

export const BreadcrumbNavRegion = () => {
  return (
    <Breadcrumbs className={regionStyles} aria-label="Breadcrumbs">
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Menus</Breadcrumbs.Link>
        </Breadcrumbs.Item>

        <Breadcrumbs.CurrentItem>Dinner</Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};
`;const $=n({gridTemplateAreas:`'Header Header Header Header'
    'SideBar BodyContent BodyContent BodyContent'
    'Footer Footer Footer Footer'`,gridGap:p.md,gridTemplateColumns:"1fr 9fr",gridTemplateRows:`auto ${s(800)} auto`}),d=j({vars:{gridArea:""},base:({gridArea:t})=>({border:`${s(1)} solid ${y.border.contrast.default}`,borderRadius:u.md,padding:h.md,gridArea:t})}),f=n({flexDirection:"column",gap:p.md}),l=n({margin:"0"}),k=()=>{const[t,r]=w.useState(0);function H(){r(C=>C+1)}function F(){r(0)}return e.jsxs(i,{cs:$,children:[e.jsx(i,{as:"header",cs:d({gridArea:"Header"}),children:e.jsx(G,{notifications:t})}),e.jsx(i,{as:"nav",cs:d({gridArea:"SideBar"}),children:e.jsx(g,{cs:f,children:e.jsx(T,{})})}),e.jsx(i,{as:"main",cs:d({gridArea:"BodyContent"}),children:e.jsxs(g,{cs:f,children:[e.jsx(B,{}),e.jsxs(g,{cs:{gap:p.md},children:[e.jsx(L,{onClick:H,children:"Add notification"}),e.jsx(R,{onClick:F,children:"Clear"})]}),e.jsx(a,{as:"h1",size:"large",cs:l,children:"Heading Level 1"}),e.jsx(a,{size:"medium",cs:l,children:"Heading Level 2"}),e.jsx(a,{as:"h3",size:"small",cs:l,children:"Heading Level 3"})]})}),e.jsx(i,{as:"footer",cs:d({gridArea:"Footer"}),children:e.jsx(a,{size:"small",cs:l,children:"Page Footer"})})]})};k.__RAW__=`import React from 'react';

import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {GlobalHeader} from '../GlobalHeader';
import {SideBarContent} from '../SidePanelWithNavigation';
import {BreadcrumbNavRegion} from './BreadcrumbNavRegion';

const gridLayoutStyles = createStyles({
  gridTemplateAreas: \`'Header Header Header Header'
    'SideBar BodyContent BodyContent BodyContent'
    'Footer Footer Footer Footer'\`,
  gridGap: system.gap.md,
  gridTemplateColumns: '1fr 9fr',
  gridTemplateRows: \`auto \${px2rem(800)} auto\`,
});

const regionStencil = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    border: \`\${px2rem(1)} solid \${system.color.border.contrast.default}\`,
    borderRadius: system.shape.md,
    padding: system.padding.md,
    gridArea,
  }),
});

const verticalFlexStyles = createStyles({
  flexDirection: 'column',
  gap: system.gap.md,
});

const headingStyles = createStyles({
  margin: '0',
});

export const FullPageDemo = () => {
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" cs={regionStencil({gridArea: 'Header'})}>
        <GlobalHeader notifications={notifications} />
      </Grid>
      <Grid as="nav" cs={regionStencil({gridArea: 'SideBar'})}>
        <Flex cs={verticalFlexStyles}>
          <SideBarContent />
        </Flex>
      </Grid>
      <Grid as="main" cs={regionStencil({gridArea: 'BodyContent'})}>
        <Flex cs={verticalFlexStyles}>
          <BreadcrumbNavRegion />
          <Flex cs={{gap: system.gap.md}}>
            <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
            <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
          </Flex>
          <Heading as="h1" size="large" cs={headingStyles}>
            Heading Level 1
          </Heading>
          <Heading size="medium" cs={headingStyles}>
            Heading Level 2
          </Heading>
          <Heading as="h3" size="small" cs={headingStyles}>
            Heading Level 3
          </Heading>
        </Flex>
      </Grid>
      <Grid as="footer" cs={regionStencil({gridArea: 'Footer'})}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
`;const I=n({gridTemplateAreas:"'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",gridGap:p.md,gridTemplateColumns:"3fr 9fr",gridTemplateRows:`auto ${s(300)} auto`}),c=j({vars:{gridArea:""},base:({gridArea:t})=>({border:`${s(1)} solid ${y.border.contrast.default}`,borderRadius:u.md,padding:h.md,gridArea:t})}),m=n({margin:"0"}),v=()=>e.jsxs(i,{cs:I,children:[e.jsx(i,{as:"header",cs:c({gridArea:"Header"}),children:e.jsx(a,{size:"small",cs:m,children:"Page Header"})}),e.jsx(i,{as:"nav",cs:c({gridArea:"SideBar"}),children:e.jsx(a,{size:"small",cs:m,children:"Navigation"})}),e.jsx(i,{as:"main",cs:c({gridArea:"BodyContent"}),children:e.jsx(a,{size:"small",cs:m,children:"Main Content"})}),e.jsx(i,{as:"footer",cs:c({gridArea:"Footer"}),children:e.jsx(a,{size:"small",cs:m,children:"Page Footer"})})]});v.__RAW__=`import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridLayoutStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.gap.md,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: \`auto \${px2rem(300)} auto\`,
});

const regionStencil = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    border: \`\${px2rem(1)} solid \${system.color.border.contrast.default}\`,
    borderRadius: system.shape.md,
    padding: system.padding.md,
    gridArea,
  }),
});

const headingStyles = createStyles({
  margin: '0',
});

export const LandmarkRegions = () => {
  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" cs={regionStencil({gridArea: 'Header'})}>
        <Heading size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" cs={regionStencil({gridArea: 'SideBar'})}>
        <Heading size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" cs={regionStencil({gridArea: 'BodyContent'})}>
        <Heading size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" cs={regionStencil({gridArea: 'Footer'})}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
`;function b(t){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...S(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Guides/Accessibility/Page Structure"}),`
`,e.jsx(r.h2,{id:"making-webpages-easy-to-use-for-everyone",children:"Making Webpages Easy to Use for Everyone"}),`
`,e.jsx(r.p,{children:`Making a webpage easy to understand is important for everyone, especially for people with
disabilities. We do this by giving the page a clear and meaningful structure. This guide explains
how to use landmark regions, headings, lists, and tables to organize a page.`}),`
`,e.jsx(r.h3,{id:"organizing-your-page-with-landmark-regions",children:"Organizing Your Page with Landmark Regions"}),`
`,e.jsx(r.p,{children:`Imagine a webpage is like a house. It has different rooms for different purposes; a kitchen, a
bedroom, a living room, and so on. A good webpage is set up the same way. It has different sections,
like a header at the top, a main content area, and a footer at the bottom.`}),`
`,e.jsx(r.p,{children:`These sections are called landmark regions. They act like signs that tell a screen reader user where
they are on the page.`}),`
`,e.jsx(r.p,{children:`A screen reader user can quickly jump to a specific section, like the main content, without having
to listen to the whole page.`}),`
`,e.jsx(r.p,{children:"The most common landmark regions are:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"<header>"}),": The top of the page."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"<nav>"}),": The main navigation menu."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"<main>"}),": The most important content on the page."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"<footer>"}),": The bottom of the page."]}),`
`]}),`
`,e.jsx(r.p,{children:`All the content on the page should be inside one of these landmark regions. If you have two
navigation sections, make sure to give them different names so a screen reader can tell them apart.
For example, a global navigation region should be distinguishable from a bread crumb navigation
region.`}),`
`,e.jsx(x,{code:v}),`
`,e.jsx(r.h3,{id:"using-headings-to-outline-your-content",children:"Using Headings to Outline Your Content"}),`
`,e.jsx(r.p,{children:`Headings are like the chapters and subheadings in a book. They create a clear outline for the page.
Just like you can scan a book's table of contents to see what it's about, a screen reader user can
get a list of all the headings on a page to understand its structure.`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Start your page's main content with a single ",e.jsx(r.code,{children:"<h1>"}),` heading. This is the most important title on
the page.`]}),`
`,e.jsxs(r.li,{children:["Use other headings (",e.jsx(r.code,{children:"<h2>"}),", ",e.jsx(r.code,{children:"<h3>"}),`, etc.) to create a clear order. Don't skip levels if possible.
For example, don't jump straight from an `,e.jsx(r.code,{children:"<h1>"})," to an ",e.jsx(r.code,{children:"<h4>"}),` heading unless the content design
hierarchy leaves no other options.`]}),`
`,e.jsxs(r.li,{children:[`The heading levels should match how important the text looks on the page. The biggest, boldest
titles should be `,e.jsx(r.code,{children:"<h1>"}),", and so on."]}),`
`]}),`
`,e.jsx(r.h2,{id:"full-page-demo",children:"Full Page Demo"}),`
`,e.jsxs(r.p,{children:[`Further reading:
`,e.jsx(r.a,{href:"?path=/docs/guides-accessibility-examples-page-header--docs",children:"Examples > Page Header"}),` and
`,e.jsx(r.a,{href:"?path=/docs/guides-accessibility-examples-side-panel-navigation--docs",children:"Examples > Side Panel Navigation"})]}),`
`,e.jsx(x,{code:k})]})}function vr(t={}){const{wrapper:r}={...S(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(b,{...t})}):b(t)}export{vr as default};
