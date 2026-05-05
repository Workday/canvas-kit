import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as B}from"./index-3YbjYt95.js";import{ae as P}from"./index-BSRpa7hw.js";import{E as j}from"./union-Bq_fV67W.js";import{r as m}from"./index-IfJi-UCQ.js";import{G as t}from"./Grid-Cyii32mJ.js";import{c as A,a as F}from"./cs-DvbI9OYs.js";import{H as h}from"./TypeLevelComponents-A6AqS-F4.js";import{p as T}from"./px2rem-C0KbprIx.js";import{g as H,p as L,d as z,s as E,c as M,t as N}from"./index-CYsyLHR7.js";import{B as U}from"./Box-CWkwzNZI.js";import{a as D,b as W,c as $,d as O}from"./arrow-up-A_gCb8P_.js";import{P as I}from"./PrimaryButton-Df7swaDK.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CQzQ4gRr.js";import"./Svg-CFKxmZXN.js";import"./components-BLZqCckY.js";import"./StatusIndicator-U7ucHK-B.js";import"./Text-7hsxTSvc.js";import"./mergeStyles-CkJ8NvhI.js";import"./flex-BpVYzPsg.js";import"./grid-COFwODL4.js";import"./Card-CYT1E1UX.js";import"./ExternalHyperlink-BSF-vMXy.js";import"./Hyperlink-p5yKhX3z.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-Bx4f9n21.js";import"./BaseButton-CGvKmIsu.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-C6qfAYgQ.js";import"./lerna-BUmYmoMg.js";import"./CanvasProvider-D16Zuzp0.js";import"./Tooltip-BudaSkJa.js";import"./useTooltip-C8VhxzUk.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-CMzgaKMd.js";import"./Popper-C7XE30xe.js";import"./TertiaryButton-OzUplWoq.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-Cj3xwnjd.js";import"./ColorInput-BG1qZf2V.js";import"./check-small-CEmhQ7AS.js";import"./index-dYq3mHEV.js";import"./TextInput-m8J5Siyi.js";import"./types-DXdjelYI.js";import"./FormField-BfuouWYS.js";import"./check-BG7HONvH.js";import"./Expandable-D9HGP5Kq.js";import"./Avatar-Czgyc0aL.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-E1OLV4AN.js";import"./Popup-og1nacMu.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-Dr3aQv5b.js";import"./useInitialFocus-Div5K5su.js";import"./useReturnFocus-aYhb8KiC.js";import"./useFocusRedirect-C0Fm-5_Z.js";import"./Breadcrumbs-DopxVY5N.js";import"./useOverflowListTarget-B6jukdWw.js";import"./useListItemSelect-Byv0QwGY.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CJ_9ofNm.js";import"./OverflowTooltip-fVEU-mtQ.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BkMcjleh.js";import"./Table-BLIPrW4Z.js";const q=Object.freeze(Object.defineProperty({__proto__:null,get Basic(){return l},get GridLayout(){return c},get GridLayoutInteractive(){return p},get __namedExportsOrder(){return Q},get default(){return J}},Symbol.toStringTag,{value:"Module"})),V=A({gridTemplateAreas:"'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",gridGap:H.md,gridTemplateColumns:"3fr 9fr",gridTemplateRows:`auto ${T(300)} auto`}),u=F({vars:{gridArea:""},base:({gridArea:o})=>({backgroundColor:M.brand.accent.primary,borderRadius:E.sm,boxShadow:z[1],padding:L.md,gridArea:o})}),x=A({...N.heading.sm,margin:"0"}),C=()=>e.jsxs(t,{cs:V,children:[e.jsx(t,{as:"header",cs:u({gridArea:"Header"}),children:e.jsx(h,{variant:"inverse",size:"small",cs:x,children:"Page Header"})}),e.jsx(t,{as:"nav",cs:u({gridArea:"SideBar"}),children:e.jsx(h,{variant:"inverse",size:"small",cs:x,children:"Navigation"})}),e.jsx(t,{as:"main",cs:u({gridArea:"BodyContent"}),children:e.jsx(h,{variant:"inverse",size:"small",cs:x,children:"Main Content"})}),e.jsx(t,{as:"footer",cs:u({gridArea:"Footer"}),children:e.jsx(h,{variant:"inverse",size:"small",cs:x,children:"Page Footer"})})]});C.__RAW__=`import {Grid} from '@workday/canvas-kit-react/layout';
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
`;const R=o=>e.jsx(t,{alignContent:"center",padding:"xs",justifyContent:"center",backgroundColor:"soap500",color:"blackPepper500",borderRadius:"m",children:o.children}),a=o=>e.jsx(t,{alignContent:"center",gridAutoColumns:"max-content",height:"100%",gridAutoFlow:"column",padding:"xs",justifyContent:"center",backgroundColor:"peach300",color:"blackPepper500",borderRadius:"m",children:o.children}),y=()=>e.jsx(U,{padding:"xs",children:e.jsxs(t,{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",padding:"xxs",border:"5px solid #c860d1",gridGap:"xs",children:[e.jsx(t.Item,{gridRowStart:"2",children:e.jsxs(t,{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:"xxs",children:[e.jsx(R,{children:"1"}),e.jsx(R,{children:"2"})]})}),e.jsx(t.Item,{gridRowStart:"1",children:e.jsxs(t,{gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",gridGap:"xxs",children:[e.jsx(a,{children:"3"}),e.jsx(a,{children:"4"}),e.jsx(a,{children:"5"}),e.jsx(a,{children:"6"}),e.jsx(a,{children:"7"})]})})]})});y.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      gridAutoColumns="max-content"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => {
  return (
    <Box padding="xs">
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        padding="xxs"
        border="5px solid #c860d1"
        gridGap="xs"
      >
        <Grid.Item gridRowStart="2">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gridGap="xxs">
            <Cell>1</Cell>
            <Cell>2</Cell>
          </Grid>
        </Grid.Item>
        <Grid.Item gridRowStart="1">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))" gridGap="xxs">
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
`;const i=o=>e.jsx(t,{alignContent:"center",padding:"xs",justifyContent:"center",backgroundColor:"soap500",color:"blackPepper500",borderRadius:"m",children:o.children}),X=o=>e.jsx(t,{alignContent:"center",gridAutoColumns:"max-content",gridGap:"xs",height:"100%",gridAutoFlow:"column",padding:"xs",justifyContent:"center",backgroundColor:"peach300",color:"frenchVanilla100",borderRadius:"m",children:o.children}),f=()=>{const[o,r]=m.useState(1),[d,_]=m.useState(1),G=n=>{const s=m.useRef();return m.useEffect(()=>{s.current=n},[n]),s.current},w=G(o),S=G(d),g=(n,s)=>{if(n<=2&&(!s||s<=2))return!0},v=(n,s,b)=>{g(n,s)?b(n+1):b(n-1)};return e.jsx(t,{gridAutoFlow:"row",padding:"xs",children:e.jsxs(t,{gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridGap:"xs",padding:"xs",border:"5px solid #c860d1",children:[e.jsx(t.Item,{gridRowStart:o,gridColumnStart:d,children:e.jsxs(X,{children:[e.jsxs(I,{size:"extraSmall",icon:g(o,w)?D:W,onClick:()=>{v(o,w,r)},children:["Row: ",o]}),e.jsxs(I,{size:"extraSmall",icon:g(d,S)?$:O,onClick:()=>{v(d,S,_)},children:["Col: ",d]})]})}),e.jsx(i,{children:"2"}),e.jsx(i,{children:"3"}),e.jsx(i,{children:"4"}),e.jsx(i,{children:"5"}),e.jsx(i,{children:"6"}),e.jsx(i,{children:"7"}),e.jsx(i,{children:"8"}),e.jsx(i,{children:"9"})]})})};f.__RAW__=`import React, {useEffect, useRef, useState} from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
} from '@workday/canvas-system-icons-web';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      gridAutoColumns="max-content"
      gridGap="xs"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
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
    <Grid gridAutoFlow="row" padding="xs">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gridGap="xs"
        padding="xs"
        border="5px solid #c860d1"
      >
        <Grid.Item gridRowStart={rowCount} gridColumnStart={colCount}>
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
`;function k(o){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...B(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{of:q}),`
`,e.jsx(r.h1,{id:"canvas-kit-grid",children:"Canvas Kit Grid"}),`
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
`,e.jsx(j,{code:C}),`
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
`,e.jsx(j,{code:f}),`
`,e.jsxs(r.p,{children:["Let's look at another ",e.jsx(r.code,{children:"Grid.Item"})," example. Below, we have a ",e.jsx(r.code,{children:"Grid"}),` container with two rows: one with
seven elements and another with two elements. Each row is a `,e.jsx(r.code,{children:"Grid.Item"})," that wraps a nested ",e.jsx(r.code,{children:"Grid"}),`.
This allows you to use `,e.jsx(r.code,{children:"Grid.Item"})," to place a layout where needed. Here, we use ",e.jsx(r.code,{children:"gridRowStart"}),` to
place the row with elements 3 through 7 before the row with elements 1 and 2.`]}),`
`,e.jsx(j,{code:y}),`
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
style props.`]})]})}function K(o={}){const{wrapper:r}={...B(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(k,{...o})}):k(o)}const J={title:"Components/Layout/Grid",component:t,tags:["autodocs"],parameters:{docs:{page:K}}},l={render:C},c={render:y},p={render:f};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: GridLayoutExample
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: GridLayoutInteractiveExample
}`,...p.parameters?.docs?.source}}};const Q=["Basic","GridLayout","GridLayoutInteractive"];export{l as Basic,c as GridLayout,p as GridLayoutInteractive,Q as __namedExportsOrder,J as default};
