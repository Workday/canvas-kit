import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as P}from"./index-3YbjYt95.js";import{ae as $}from"./index-CSvw2ERc.js";import{E as G}from"./union-B2oVtxQj.js";import{r as u}from"./index-IfJi-UCQ.js";import{G as t}from"./Grid-C4pSOk3S.js";import{c as l,a as N}from"./cs-rfTTo7Bg.js";import{H as g}from"./TypeLevelComponents-9vqCSdj5.js";import{p as S}from"./px2rem-C0KbprIx.js";import{g as p,p as o,d as E,s as h,c as s,t as M}from"./index-5dfzm_kn.js";import{B as U}from"./Box-CsR_RSm3.js";import{c as L}from"./index-B2vXpe_3.js";import{a as D,b as W,c as q,d as O}from"./arrow-up-D2H_pH5-.js";import{P as T}from"./PrimaryButton-DFjCNuV2.js";import"./iframe-DdBxMp3v.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cl7xWrYQ.js";import"./Svg-C5I5ANGp.js";import"./components-DpSuslmU.js";import"./StatusIndicator--GoNMKts.js";import"./Text-ChJY5-bw.js";import"./mergeStyles-C_QAuicJ.js";import"./flex-jx6OknuD.js";import"./grid-CcdDoURF.js";import"./Card-XTiXx2KK.js";import"./ExternalHyperlink-Boscsj5x.js";import"./Hyperlink-BdNi6F1F.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-B2U_-e8k.js";import"./BaseButton-Cxong-p3.js";import"./Button-nWZozxrK.js";import"./lerna-DQp-x30A.js";import"./CanvasProvider-DpLmysIw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-Bl36ujuq.js";import"./useTooltip-C2YBnwHS.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-Cypl0byB.js";import"./Popper-C7B_3yZW.js";import"./TertiaryButton-ByhN6lyv.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CXARiljT.js";import"./ColorInput-Byz8Zax5.js";import"./check-small-C7Z-gSGs.js";import"./index-COdRIEp6.js";import"./TextInput-BqzMEWjb.js";import"./types-DXdjelYI.js";import"./FormField-CuMN0F-G.js";import"./check-Bvurkvei.js";import"./Expandable-Cr4FzK8l.js";import"./Avatar-CprVxumJ.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Dw25Pzb0.js";import"./Popup-CDwSIdQW.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DQCsp6uf.js";import"./useInitialFocus-ciFwhbKv.js";import"./useReturnFocus-BuTlku1f.js";import"./useFocusRedirect-BCC-7TkN.js";import"./Breadcrumbs-DEpoDjrK.js";import"./useOverflowListTarget-C9VCjOPk.js";import"./useListItemSelect-Ci7QLXCM.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DbO2UTSI.js";import"./OverflowTooltip-MH-FLdNq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BtxoTnIe.js";import"./Table-CPnsNSsD.js";const X=l({gridTemplateAreas:"'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",gridGap:p.md,gridTemplateColumns:"3fr 9fr",gridTemplateRows:`auto ${S(300)} auto`}),x=N({vars:{gridArea:""},base:({gridArea:n})=>({backgroundColor:s.brand.accent.primary,borderRadius:h.sm,boxShadow:E[1],padding:o.md,gridArea:n})}),y=l({...M.heading.sm,margin:"0"}),v=()=>e.jsxs(t,{cs:X,children:[e.jsx(t,{as:"header",cs:x({gridArea:"Header"}),children:e.jsx(g,{variant:"inverse",size:"small",cs:y,children:"Page Header"})}),e.jsx(t,{as:"nav",cs:x({gridArea:"SideBar"}),children:e.jsx(g,{variant:"inverse",size:"small",cs:y,children:"Navigation"})}),e.jsx(t,{as:"main",cs:x({gridArea:"BodyContent"}),children:e.jsx(g,{variant:"inverse",size:"small",cs:y,children:"Main Content"})}),e.jsx(t,{as:"footer",cs:x({gridArea:"Footer"}),children:e.jsx(g,{variant:"inverse",size:"small",cs:y,children:"Page Footer"})})]});v.__RAW__=`import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.gap.md,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: \`auto \${px2rem(300)} auto\`,
});

const gridStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    backgroundColor: system.color.brand.accent.primary,
    borderRadius: system.shape.sm,
    boxShadow: system.depth[1],
    padding: system.padding.md,
    gridArea,
  }),
});

const headingStyles = createStyles({
  ...system.type.heading.sm,
  margin: '0',
});

export const Basic = () => {
  return (
    <Grid cs={containerStyles}>
      <Grid as="header" cs={gridStyles({gridArea: 'Header'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" cs={gridStyles({gridArea: 'SideBar'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" cs={gridStyles({gridArea: 'BodyContent'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" cs={gridStyles({gridArea: 'Footer'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
`;const K=l({alignContent:"center",padding:o.sm,justifyContent:"center",backgroundColor:s.surface.alt.default,color:s.fg.default,borderRadius:h.md}),H=n=>e.jsx(t,{cs:K,children:n.children}),V=l({alignContent:"center",gridAutoColumns:"max-content",height:"100%",gridAutoFlow:"column",padding:o.sm,justifyContent:"center",backgroundColor:s.surface.alt.default,color:s.fg.default,borderRadius:h.md}),m=n=>e.jsx(t,{cs:V,children:n.children}),b=()=>e.jsx(U,{cs:{padding:o.sm},children:e.jsxs(t,{cs:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:p.sm,border:`${S(5)} solid ${L}`,padding:o.sm},children:[e.jsx(t.Item,{cs:{gridRowStart:"2"},children:e.jsxs(t,{cs:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:p.sm},children:[e.jsx(H,{children:"1"}),e.jsx(H,{children:"2"})]})}),e.jsx(t.Item,{cs:{gridRowStart:"1"},children:e.jsxs(t,{cs:{gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",gridGap:p.sm},children:[e.jsx(m,{children:"3"}),e.jsx(m,{children:"4"}),e.jsx(m,{children:"5"}),e.jsx(m,{children:"6"}),e.jsx(m,{children:"7"})]})})]})});b.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const baseStyles = createStyles({
  alignContent: 'center',
  padding: system.padding.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const Cell = (props: {children: React.ReactNode}) => {
  return <Grid cs={baseStyles}>{props.children}</Grid>;
};

const cellItemStyles = createStyles({
  alignContent: 'center',
  gridAutoColumns: 'max-content',
  height: '100%',
  gridAutoFlow: 'column',
  padding: system.padding.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const CellItem = (props: {children: React.ReactNode}) => {
  return <Grid cs={cellItemStyles}>{props.children}</Grid>;
};

export const GridLayout = () => {
  return (
    <Box cs={{padding: system.padding.sm}}>
      <Grid
        cs={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: system.gap.sm,
          border: \`\${px2rem(5)} solid \${base.magenta600}\`,
          padding: system.padding.sm,
        }}
      >
        <Grid.Item cs={{gridRowStart: '2'}}>
          <Grid
            cs={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gridGap: system.gap.sm,
            }}
          >
            <Cell>1</Cell>
            <Cell>2</Cell>
          </Grid>
        </Grid.Item>
        <Grid.Item cs={{gridRowStart: '1'}}>
          <Grid
            cs={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gridGap: system.gap.sm,
            }}
          >
            <CellItem>3</CellItem>
            <CellItem>4</CellItem>
            <CellItem>5</CellItem>
            <CellItem>6</CellItem>
            <CellItem>7</CellItem>
          </Grid>
        </Grid.Item>
      </Grid>
    </Box>
  );
};
`;const J=l({padding:o.sm,backgroundColor:s.surface.alt.default,color:s.fg.default,borderRadius:h.md,alignContent:"center",justifyContent:"center"}),d=n=>e.jsx(t,{cs:J,children:n.children}),Q=l({alignContent:"center",gridAutoColumns:"max-content",height:"100%",gridAutoFlow:"column",padding:o.sm,justifyContent:"center",backgroundColor:s.surface.alt.default,color:s.fg.default,borderRadius:h.md}),Y=n=>e.jsx(t,{cs:Q,children:n.children}),I=()=>{const[n,r]=u.useState(1),[c,z]=u.useState(1),R=i=>{const a=u.useRef();return u.useEffect(()=>{a.current=i},[i]),a.current},k=R(n),B=R(c),w=(i,a)=>{if(i<=2&&(!a||a<=2))return!0},A=(i,a,F)=>{w(i,a)?F(i+1):F(i-1)};return e.jsx(t,{cs:{gridAutoFlow:"row",padding:o.sm},children:e.jsxs(t,{cs:{gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:p.sm,padding:o.sm,border:`${S(5)} solid ${L}`},children:[e.jsx(t.Item,{cs:{gridRowStart:n,gridColumnStart:c},children:e.jsxs(Y,{children:[e.jsxs(T,{size:"extraSmall",icon:w(n,k)?D:W,onClick:()=>{A(n,k,r)},children:["Row: ",n]}),e.jsxs(T,{size:"extraSmall",icon:w(c,B)?q:O,onClick:()=>{A(c,B,z)},children:["Col: ",c]})]})}),e.jsx(d,{children:"2"}),e.jsx(d,{children:"3"}),e.jsx(d,{children:"4"}),e.jsx(d,{children:"5"}),e.jsx(d,{children:"6"}),e.jsx(d,{children:"7"}),e.jsx(d,{children:"8"}),e.jsx(d,{children:"9"})]})})};I.__RAW__=`import React, {useEffect, useRef, useState} from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const baseStyles = createStyles({
  padding: system.padding.sm,
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
  alignContent: 'center',
  justifyContent: 'center',
});

const Cell = (props: {children: React.ReactNode}) => {
  return <Grid cs={baseStyles}>{props.children}</Grid>;
};

const cellItemStyles = createStyles({
  alignContent: 'center',
  gridAutoColumns: 'max-content',
  height: '100%',
  gridAutoFlow: 'column',
  padding: system.padding.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const CellItem = (props: {children: React.ReactNode}) => {
  return <Grid cs={cellItemStyles}>{props.children}</Grid>;
};

export const GridLayoutInteractive = () => {
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);

  const Prev = val => {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    }, [val]);
    return ref.current;
  };

  const prevRowCount = Prev(rowCount);
  const prevColCount = Prev(colCount);

  const plusMinus = (curr, prev) => {
    if (curr <= 2 && (!prev || prev <= 2)) {
      return true;
    }
  };

  const incDec = (curr, prev, func) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    plusMinus(curr, prev) ? func(curr + 1) : func(curr - 1);
  };

  return (
    <Grid cs={{gridAutoFlow: 'row', padding: system.padding.sm}}>
      <Grid
        cs={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gridGap: system.gap.sm,
          padding: system.padding.sm,
          border: \`\${px2rem(5)} solid \${base.magenta600}\`,
        }}
      >
        <Grid.Item cs={{gridRowStart: rowCount, gridColumnStart: colCount}}>
          <CellItem>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(rowCount, prevRowCount) ? arrowDownIcon : arrowUpIcon}
              onClick={() => {
                incDec(rowCount, prevRowCount, setRowCount);
              }}
            >
              Row: {rowCount}
            </PrimaryButton>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(colCount, prevColCount) ? arrowRightIcon : arrowLeftIcon}
              onClick={() => {
                incDec(colCount, prevColCount, setColCount);
              }}
            >
              Col: {colCount}
            </PrimaryButton>
          </CellItem>
        </Grid.Item>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
      </Grid>
    </Grid>
  );
};
`;function _(n){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...P(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx($,{of:ee}),`
`,e.jsx(r.h1,{id:"canvas-kit-grid",children:"Canvas Kit Grid"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note"}),`: Some of the content on this page may be outdated and may not follow the latest CK style
guidance. Please use care when making updates and carefully review any changes. Prefer using the
`,e.jsx(r.code,{children:"createStyles"})," or ",e.jsx(r.code,{children:"createStencil"}),` utilities along with the latest design tokens to set styles.
This page will be updated soon.`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid"}),` is a low-level layout component that provides a common, ergonomic API for building
two-dimensional layouts (rows and columns) with
`,e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",rel:"nofollow",children:"CSS Grid"}),"."]}),`
`,e.jsxs(r.p,{children:["Please refer to our ",e.jsx(r.a,{href:"/examples-layouts--docs",children:"layout examples"}),` for more examples of how to implement
different layouts using `,e.jsx(r.code,{children:"Grid"}),"."]}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note"}),`: We recommend you familiarize yourself with CSS Grid
(`,e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",rel:"nofollow",children:"MDN"}),`,
`,e.jsx(r.a,{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",rel:"nofollow",children:"CSS-Tricks"}),`) before diving into our
`,e.jsx(r.code,{children:"Grid"}),` component. This example makes use of
`,e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas",rel:"nofollow",children:"Grid Areas"}),"."]}),`
`]}),`
`,e.jsxs(r.p,{children:["In this example, we set up a basic layout built with ",e.jsx(r.code,{children:"Grid"})," using four child components: ",e.jsx(r.code,{children:"Header"}),`,
`,e.jsx(r.code,{children:"SideBar"}),", ",e.jsx(r.code,{children:"BodyContent"})," and ",e.jsx(r.code,{children:"Footer"}),". By assigning the same names to each child's ",e.jsx(r.code,{children:"gridArea"}),` prop,
we're able to arrange them by referencing their names in the parent `,e.jsx(r.code,{children:"Grid"}),` container. Our example
uses a 12-column grid with `,e.jsx(r.code,{children:"SideBar"})," occupying three columns and ",e.jsx(r.code,{children:"BodyContent"}),` occupying the
remaining nine.`]}),`
`,e.jsx(G,{code:v}),`
`,e.jsx(r.h3,{id:"using-grid-items",children:"Using Grid Items"}),`
`,e.jsxs(r.p,{children:["In the example above we nested ",e.jsx(r.code,{children:"Grid"}),` components to create our layout, and we controlled the layout
structure from the top-level `,e.jsx(r.code,{children:"Grid"})," container. We can also use ",e.jsx(r.code,{children:"Grid.Item"}),` components to allow child
cells to have more control. While any direct child of a `,e.jsx(r.code,{children:"Grid"}),` component is implicitly a grid item,
`,e.jsx(r.code,{children:"Grid.Item"}),` provides special CSS Grid Item style props that allow you to have more control over how
and where each item renders.`]}),`
`,e.jsxs(r.p,{children:["To demonstrate this behavior, the example below has a ",e.jsx(r.code,{children:"Grid"}),` container with nine cells. The eight
`,e.jsx(r.code,{children:"soap500"})," cells are ",e.jsx(r.code,{children:"Grid"})," components, and the ",e.jsx(r.code,{children:"peach300"})," cell is a ",e.jsx(r.code,{children:"Grid.Item"}),`. We can use the
`,e.jsx(r.code,{children:"Grid.Item"})," style props ",e.jsx(r.code,{children:"gridRowStart"})," and ",e.jsx(r.code,{children:"gridColumnStart"}),` to manipulate where the cell renders.
Use the `,e.jsx(r.code,{children:"Row"})," and ",e.jsx(r.code,{children:"Column"})," buttons to manipulate these props and see the ",e.jsx(r.code,{children:"Grid.Item"}),`'s position
adjust accordingly.`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Note"}),": This example is solely intended to demonstrate ",e.jsx(r.code,{children:"Grid.Item"}),`'s functionality and is
`,e.jsx(r.strong,{children:"not"}),` considered an accessibility best practice. Visually reordering content does not change the
tab order or the order it is read in by a screen reader. Learn more about
`,e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility",rel:"nofollow",children:"CSS Grid layout and accessibility"}),"."]}),`
`]}),`
`,e.jsx(G,{code:I}),`
`,e.jsxs(r.p,{children:["Let's look at another ",e.jsx(r.code,{children:"Grid.Item"})," example. Below, we have a ",e.jsx(r.code,{children:"Grid"}),` container with two rows: one with
seven elements and another with two elements. Each row is a `,e.jsx(r.code,{children:"Grid.Item"})," that wraps a nested ",e.jsx(r.code,{children:"Grid"}),`.
This allows you to use `,e.jsx(r.code,{children:"Grid.Item"})," to place a layout where needed. Here, we use ",e.jsx(r.code,{children:"gridRowStart"}),` to
place the row with elements 3 through 7 before the row with elements 1 and 2.`]}),`
`,e.jsx(G,{code:b}),`
`,e.jsx(r.h3,{id:"grid-vs-flex-vs-box",children:"Grid vs. Flex vs. Box"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid"})," and ",e.jsx(r.code,{children:"Flex"})," are built on top of ",e.jsx(r.code,{children:"Box"}),", so they have access to all ",e.jsx(r.code,{children:"BoxProps"}),`. Additionally,
`,e.jsx(r.code,{children:"Grid"})," and ",e.jsx(r.code,{children:"Flex"}),` have their own specific style props that map to CSS Grid and Flexbox properties,
respectively. When using these components to build layouts, it is not a matter of choosing `,e.jsx(r.code,{children:"Grid"}),`
`,e.jsx(r.em,{children:"or"})," ",e.jsx(r.code,{children:"Flex"})," ",e.jsx(r.em,{children:"or"})," ",e.jsx(r.code,{children:"Box"}),`, but rather deciding how to
`,e.jsx(r.a,{href:"https://css-tricks.com/css-grid-replace-flexbox/",rel:"nofollow",children:"use them together"}),`. They are intended to be
complementary not exclusionary. With that said, here are general guidelines for when to use which:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:"Grid"})," for ",e.jsx(r.strong,{children:"two-dimensional"})," layouts (rows AND columns)."]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:"Flex"})," for ",e.jsx(r.strong,{children:"one-dimensional"})," layouts (a row OR a column)."]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:"Box"})," for generic containers that don't need CSS Flexbox or Grid."]}),`
`]}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(r.h3,{id:"grid",children:"Grid"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid"}),` is a container component for creating two-dimensional layouts with CSS Grid. It has special
style props that map to CSS Grid style properties to provide a common, ergonomic API for building
layouts.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Grid gridTemplateColumns="1fr 2fr 1fr" gridGap={space.s}>
  <div>Implicit grid item 1</div>
  <div>Implicit grid item 2</div>
  <div>Implicit grid item 3</div>
</Grid>
`})}),`
`,e.jsx(r.h4,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid"}),` exposes
`,e.jsx(r.a,{href:"?path=/docs/features-style-props--docs#grid",children:"grid container style props"})," and ",e.jsx(r.code,{children:"Box"}),`
style props.`]}),`
`,e.jsx(r.h3,{id:"griditem",children:"Grid.Item"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid.Item"})," is a subcomponent of ",e.jsx(r.code,{children:"Grid"}),". It is a ",e.jsx(r.code,{children:"Box"}),` component under the hood and exposes
`,e.jsx(r.a,{href:"?path=/docs/features-style-props--docs#grid",children:"grid item style props"}),` that map to CSS
Grid Item properties. This provides greater control over how child components render in your layout.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Grid gridGap={space.s}>
  <Grid.Item gridColumn="1 / span 2">First item</Grid.Item>
  <Grid.Item gridRow="1 / span 2">Second item</Grid.Item>
  <Grid.Item gridColumn="1 / span 2" gridRow="2">
    Third item
  </Grid.Item>
</Grid>
`})}),`
`,e.jsx(r.h4,{id:"props-1",children:"Props"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Grid.Item"})," exposes ",e.jsx(r.a,{href:"/docs/features-style-props--grid-item-example",children:"grid item style props"})," and ",e.jsx(r.code,{children:"Box"}),`
style props.`]})]})}function Z(n={}){const{wrapper:r}={...P(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(_,{...n})}):_(n)}const ee={title:"Components/Layout/Grid",component:t,tags:["autodocs"],parameters:{docs:{page:Z}}},j={render:v},f={render:b},C={render:I};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: GridLayoutExample
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: GridLayoutInteractiveExample
}`,...C.parameters?.docs?.source}}};const Rr=["Basic","GridLayout","GridLayoutInteractive"];export{j as Basic,f as GridLayout,C as GridLayoutInteractive,Rr as __namedExportsOrder,ee as default};
