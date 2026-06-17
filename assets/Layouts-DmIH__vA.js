import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as R}from"./index-3YbjYt95.js";import{ae as Q}from"./index-PFj4iSNn.js";import{E as c}from"./union-F_TYZUZz.js";import{r as M}from"./index-IfJi-UCQ.js";import{H as x,B as a}from"./TypeLevelComponents-DmEJltuv.js";import{G as l}from"./Grid-eheGg1JR.js";import{c as d,a as h}from"./cs-rfTTo7Bg.js";import{B as r}from"./Box-DEOrcYtQ.js";import{v as C,U as S,T as w,S as P,Y as V,a3 as D,a4 as X}from"./index-5mrAZJYD.js";import{g as s,f,c as n,a as g,p as m}from"./index-5dfzm_kn.js";import{p as i}from"./px2rem-C0KbprIx.js";import{S as p}from"./SegmentedControl-DiHR8XlR.js";import"./iframe-D2NFHvK2.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./components-DitCssni.js";import"./StatusIndicator-Q6MR5HMZ.js";import"./Text-BDAVcU1f.js";import"./mergeStyles-CxEFJuxU.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./Card-CaPe9j_I.js";import"./ExternalHyperlink-Bjnq9lRa.js";import"./Hyperlink-Bxwna6fP.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BpQ17X7-.js";import"./BaseButton-MNe7k-Ow.js";import"./Button-Dptie1iu.js";import"./lerna-DoVx6CT6.js";import"./CanvasProvider-BlMVDzJE.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-Dht4-tQx.js";import"./useTooltip-CMv2Kew9.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-RijVekFd.js";import"./Popper-CfI3sZZj.js";import"./TertiaryButton-B_PXBCfh.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-jYr8j44j.js";import"./ColorInput-BFzKHuzz.js";import"./check-small-C7Z-gSGs.js";import"./index-DmIRx617.js";import"./TextInput-DVgi3nRK.js";import"./types-DXdjelYI.js";import"./FormField-C3WtjF-e.js";import"./check-Bvurkvei.js";import"./Expandable-DU8m2Z7u.js";import"./Avatar-D7pjJDyI.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BwQrEPB9.js";import"./Popup-o70LrEa3.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-X7rx-n4X.js";import"./useInitialFocus-CjutxpXk.js";import"./useReturnFocus-DSLnfxPR.js";import"./useFocusRedirect-aoA_KUZq.js";import"./Breadcrumbs-BuH71-m1.js";import"./useOverflowListTarget-Cp5p7X3i.js";import"./useListItemSelect-DoDsyqU1.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C5PsiTxH.js";import"./OverflowTooltip-BAwBmgsm.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DGNU9JGJ.js";import"./Table-QThawpr-.js";const F=h({vars:{gridArea:"",backgroundColor:""},base:({backgroundColor:o,gridArea:t})=>({height:i(120),backgroundColor:o,gridArea:t,p:{color:n.fg.inverse,fontWeight:f.bold,textAlign:"center"}})}),K=d({gridTemplateColumns:"4fr 8fr",gridTemplateAreas:"'header header' 'side main'",gridGap:s.md}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"medium",children:"Area Column Positioning"}),e.jsxs(l,{cs:K,children:[e.jsx(r,{cs:F({backgroundColor:C,gridArea:"header"}),children:e.jsx(a,{size:"small",children:'"header" area'})}),e.jsx(r,{cs:F({backgroundColor:S,gridArea:"side"}),children:e.jsx(a,{size:"small",children:'"side" area'})}),e.jsx(r,{cs:F({backgroundColor:w,gridArea:"main"}),children:e.jsx(a,{size:"small",children:'"main" area'})})]})]});G.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    gridArea: '',
    backgroundColor: '',
  },
  base: ({backgroundColor, gridArea}) => ({
    height: px2rem(120),
    backgroundColor,
    gridArea,
    p: {
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
      textAlign: 'center',
    },
  }),
});

const headingStyles = createStyles({
  gridTemplateColumns: '4fr 8fr',
  gridTemplateAreas: "'header header' 'side main'",
  gridGap: system.gap.md,
});

export const AreaColumnPositioning = () => (
  <>
    <Heading size="medium">Area Column Positioning</Heading>
    <Grid cs={headingStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500, gridArea: 'header'})}>
        <BodyText size="small">"header" area</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600, gridArea: 'side'})}>
        <BodyText size="small">"side" area</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700, gridArea: 'main'})}>
        <BodyText size="small">"main" area</BodyText>
      </Box>
    </Grid>
  </>
);
`;const u=h({vars:{gridColumn:"",backgroundColor:""},base:({backgroundColor:o,gridColumn:t})=>({height:g.xxl,backgroundColor:o,gridColumn:t,p:{textAlign:"center",color:n.fg.inverse,fontWeight:f.bold}})}),U=d({gridTemplateColumns:"repeat(12, 1fr)",gridGap:s.md}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"medium",children:"Custom Column Positioning"}),e.jsxs(l,{cs:U,children:[e.jsx(r,{cs:u({backgroundColor:C,gridColumn:"span 4"}),children:e.jsx(a,{size:"small",children:"4 column width"})}),e.jsx(r,{cs:u({backgroundColor:S,gridColumn:"span 3"}),children:e.jsx(a,{size:"small",children:"3 column width"})}),e.jsx(r,{cs:u({backgroundColor:w,gridColumn:"span 5"}),children:e.jsx(a,{size:"small",children:"5 column width"})}),e.jsx(r,{cs:u({backgroundColor:P,gridColumn:"1 / 6"}),children:e.jsx(a,{size:"small",children:"from 1st to 5th column position"})}),e.jsx(r,{cs:u({backgroundColor:V,gridColumn:"7 / 12"}),children:e.jsx(a,{size:"small",children:"from 7th to 11th column position"})}),e.jsx(r,{cs:u({backgroundColor:D,gridColumn:"2 / span 10"}),children:e.jsx(a,{size:"small",children:"10 column width starting from 2nd column"})})]})]});A.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    gridColumn: '',
    backgroundColor: '',
  },
  base: ({backgroundColor, gridColumn}) => ({
    height: system.size.xxl,
    backgroundColor,
    gridColumn,
    p: {
      textAlign: 'center',
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const gridStyles = createStyles({
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: system.gap.md,
});

export const CustomColumnPositioning = () => (
  <>
    <Heading size="medium">Custom Column Positioning</Heading>
    <Grid cs={gridStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500, gridColumn: 'span 4'})}>
        <BodyText size="small">4 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600, gridColumn: 'span 3'})}>
        <BodyText size="small">3 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700, gridColumn: 'span 5'})}>
        <BodyText size="small">5 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue800, gridColumn: '1 / 6'})}>
        <BodyText size="small">from 1st to 5th column position</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue900, gridColumn: '7 / 12'})}>
        <BodyText size="small">from 7th to 11th column position</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue950, gridColumn: '2 / span 10'})}>
        <BodyText size="small">10 column width starting from 2nd column</BodyText>
      </Box>
    </Grid>
  </>
);
`;const j=h({vars:{backgroundColor:""},base:({backgroundColor:o})=>({height:i(120),backgroundColor:o,p:{textAlign:"center",color:n.fg.inverse,fontWeight:f.bold}})}),Y=d({gridTemplateColumns:"4fr 2fr 6fr",gridGap:s.md}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"medium",children:"Custom Column Width"}),e.jsxs(l,{cs:Y,children:[e.jsx(r,{cs:j({backgroundColor:C}),children:e.jsx(a,{size:"small",children:"4 column width"})}),e.jsx(r,{cs:j({backgroundColor:S}),children:e.jsx(a,{size:"small",children:"2 column width"})}),e.jsx(r,{cs:j({backgroundColor:w}),children:e.jsx(a,{size:"small",children:"6 column width"})})]})]});$.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const boxStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    height: px2rem(120),
    backgroundColor,
    p: {
      textAlign: 'center',
      color: system.color.fg.inverse,
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const gridStyles = createStyles({
  gridTemplateColumns: '4fr 2fr 6fr',
  gridGap: system.gap.md,
});

export const CustomColumnWidth = () => (
  <>
    <Heading size="medium">Custom Column Width</Heading>
    <Grid cs={gridStyles}>
      <Box cs={boxStencil({backgroundColor: base.blue500})}>
        <BodyText size="small">4 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue600})}>
        <BodyText size="small">2 column width</BodyText>
      </Box>
      <Box cs={boxStencil({backgroundColor: base.blue700})}>
        <BodyText size="small">6 column width</BodyText>
      </Box>
    </Grid>
  </>
);
`;const q=d({gridTemplateAreas:"'Heading Heading Heading' 'FormLeft FormCenter FormRight'",gridAutoRows:"min-content",gridRowGap:s.sm,gridColumnGap:s.xxl}),J=h({vars:{gridArea:""},base:({gridArea:o})=>({paddingInline:m.sm,border:`${i(1)} solid ${n.brand.border.primary}`,gridArea:o})}),N=h({vars:{gridArea:""},base:({gridArea:o})=>({paddingInline:m.md,border:`${i(1)} dashed ${n.brand.border.primary}`,gridArea:o})}),v=()=>e.jsxs(l,{cs:q,children:[e.jsx(r,{cs:J({gridArea:"Heading"}),children:e.jsx(x,{size:"medium",children:"Full Width With 3 Columns"})}),e.jsx(B,{area:"FormLeft",text:"Form - Left Third"}),e.jsx(B,{area:"FormCenter",text:"Form - Center Third"}),e.jsx(B,{area:"FormRight",text:"Form - Right Third"})]}),B=({area:o,text:t})=>e.jsxs(r,{cs:N({gridArea:o}),children:[e.jsx(a,{size:"small",fontWeight:"bold",children:t}),Array.from({length:5}).map(()=>e.jsxs(l,{cs:{gridGap:s.sm,marginBlockEnd:i(20)},children:[e.jsx(r,{cs:{backgroundColor:n.surface.default,width:i(120),height:i(12)}}),e.jsx(r,{cs:{border:`${i(1)} solid ${n.brand.border.primary}`,width:"100%",height:i(20)}})]}))]});v.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: "'Heading Heading Heading' 'FormLeft FormCenter FormRight'",
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
});

const boxHeadingStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    paddingInline: system.padding.sm,
    border: \`\${px2rem(1)} solid \${system.color.brand.border.primary}\`,
    gridArea,
  }),
});

const boxStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    paddingInline: system.padding.md,
    border: \`\${px2rem(1)} dashed \${system.color.brand.border.primary}\`,
    gridArea,
  }),
});

export const FullWidthWith3Columns = () => (
  <Grid cs={gridStyles}>
    <Box cs={boxHeadingStyles({gridArea: 'Heading'})}>
      <Heading size="medium">Full Width With 3 Columns</Heading>
    </Box>
    <FormSkeleton area="FormLeft" text="Form - Left Third" />
    <FormSkeleton area="FormCenter" text="Form - Center Third" />
    <FormSkeleton area="FormRight" text="Form - Right Third" />
  </Grid>
);

const FormSkeleton = ({area, text}) => (
  <Box cs={boxStyles({gridArea: area})}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 5}).map(() => (
      <Grid cs={{gridGap: system.gap.sm, marginBlockEnd: px2rem(20)}}>
        <Box
          cs={{
            backgroundColor: system.color.surface.default,
            width: px2rem(120),
            height: px2rem(12),
          }}
        />
        <Box
          cs={{
            border: \`\${px2rem(1)} solid \${system.color.brand.border.primary}\`,
            width: '100%',
            height: px2rem(20),
          }}
        />
      </Grid>
    ))}
  </Box>
);
`;const O=d({gridTemplateAreas:"'Heading Heading Heading'",gridTemplateColumns:"repeat(3, 1fr)",gridAutoRows:"min-content",gridRowGap:s.sm,gridColumnGap:s.xl}),Z=d({gridArea:"Heading",paddingInline:m.sm,border:`${i(1)} solid ${n.brand.border.primary}`}),z=()=>e.jsxs(l,{cs:O,children:[e.jsx(r,{cs:Z,children:e.jsx(x,{size:"medium",children:"Full Width With 3 Columns and 2 Rows"})}),e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{}),e.jsx(y,{})]}),ee=d({border:`${i(1)} dashed ${n.brand.border.primary}`,paddingInline:m.md}),re=d({gridGap:s.md,marginBlockEnd:s.lg,"> *:first-child":{width:i(120),height:g.xxs,backgroundColor:n.surface.alt.default},"> *:last-child":{border:`${i(1)} solid ${n.border.default}`,width:"100%",height:g.xxs}}),y=o=>e.jsxs(r,{cs:ee,...o,children:[e.jsx(a,{size:"small",cs:{fontWeight:f.bold},children:"Form Block"}),Array.from({length:3}).map(()=>e.jsxs(l,{cs:re,children:[e.jsx(r,{}),e.jsx(r,{})]}))]});z.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: "'Heading Heading Heading'",
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xl,
});

const headingStyles = createStyles({
  gridArea: 'Heading',
  paddingInline: system.padding.sm,
  border: \`\${px2rem(1)} solid \${system.color.brand.border.primary}\`,
});

export const FullWidthWith3Columns2Rows = () => (
  <Grid cs={gridStyles}>
    <Box cs={headingStyles}>
      <Heading size="medium">Full Width With 3 Columns and 2 Rows</Heading>
    </Box>
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
  </Grid>
);

const boxStyles = createStyles({
  border: \`\${px2rem(1)} dashed \${system.color.brand.border.primary}\`,
  paddingInline: system.padding.md,
});

const itemStyles = createStyles({
  gridGap: system.gap.md,
  marginBlockEnd: system.gap.lg,
  '> *:first-child': {
    width: px2rem(120),
    height: system.size.xxs,
    backgroundColor: system.color.surface.alt.default,
  },
  '> *:last-child': {
    border: \`\${px2rem(1)} solid \${system.color.border.default}\`,
    width: '100%',
    height: system.size.xxs,
  },
});

const FormSkeleton = props => (
  <Box cs={boxStyles} {...props}>
    <BodyText size="small" cs={{fontWeight: system.fontWeight.bold}}>
      Form Block
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={itemStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
`;const oe=d({columnCount:3,columnGap:s.md}),te=d({breakInside:"avoid",border:`${i(2)} dashed ${n.brand.border.primary}`,marginBlockEnd:s.sm,padding:m.md}),H=d({gridGap:s.md,marginBlockEnd:s.xl,"> *:first-child":{width:i(120),height:g.xxs,backgroundColor:n.surface.alt.default},"> *:last-child":{border:`${i(1)} solid ${n.border.default}`,width:"100%",height:g.xxs}}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"medium",children:"Masonry Layout"}),e.jsx(r,{cs:oe,children:Array.from({length:8}).map((o,t)=>e.jsxs(r,{cs:te,children:[e.jsxs(l,{cs:H,children:[e.jsx(r,{}),e.jsx(r,{})]}),t%2===0&&e.jsxs(l,{cs:H,children:[e.jsx(r,{}),e.jsx(r,{})]})]},t))})]});W.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  columnCount: 3,
  columnGap: system.gap.md,
});

const cardStyles = createStyles({
  breakInside: 'avoid',
  border: \`\${px2rem(2)} dashed \${system.color.brand.border.primary}\`,
  marginBlockEnd: system.gap.sm,
  padding: system.padding.md,
});

const gridStyles = createStyles({
  gridGap: system.gap.md,
  marginBlockEnd: system.gap.xl,
  '> *:first-child': {
    width: px2rem(120),
    height: system.size.xxs,
    backgroundColor: system.color.surface.alt.default,
  },
  '> *:last-child': {
    border: \`\${px2rem(1)} solid \${system.color.border.default}\`,
    width: '100%',
    height: system.size.xxs,
  },
});

export const Masonry = () => (
  <>
    <Heading size="medium">Masonry Layout</Heading>
    <Box cs={containerStyles}>
      {Array.from({length: 8}).map((_, ind) => (
        <Box key={ind} cs={cardStyles}>
          <Grid cs={gridStyles}>
            <Box />
            <Box />
          </Grid>
          {ind % 2 === 0 && (
            <Grid cs={gridStyles}>
              <Box />
              <Box />
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  </>
);
`;const L=()=>{const[o,t]=M.useState("100%");return e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"medium",children:"Responsive Columns"}),e.jsx(a,{size:"small",children:"Choose screen size to see changes"}),e.jsx(p,{initialValue:o,onSelect:E=>t(E.id),children:e.jsxs(p.List,{"aria-label":"screen-size",cs:{marginBlockEnd:s.lg},children:[e.jsx(p.Item,{"data-id":"100%",children:"100%"}),e.jsx(p.Item,{"data-id":"75%",children:"75%"}),e.jsx(p.Item,{"data-id":"50%",children:"50%"}),e.jsx(p.Item,{"data-id":"25%",children:"25%"})]})}),e.jsx(r,{cs:{maxWidth:o,padding:m.md,border:`${i(2)} solid ${n.border.default}`},children:e.jsxs(l,{cs:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:s.md},children:[e.jsx(r,{cs:{height:i(120),backgroundColor:X}}),e.jsx(r,{cs:{height:i(120),backgroundColor:C}}),e.jsx(r,{cs:{height:i(120),backgroundColor:S}})]})})]})};L.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const ResponsiveColumns = () => {
  const [screen, setScreen] = React.useState('100%');

  return (
    <>
      <Heading size="medium">Responsive Columns</Heading>
      <BodyText size="small">Choose screen size to see changes</BodyText>
      <SegmentedControl initialValue={screen} onSelect={data => setScreen(data.id)}>
        <SegmentedControl.List aria-label="screen-size" cs={{marginBlockEnd: system.gap.lg}}>
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="75%">75%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="50%">50%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="25%">25%</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <Box
        cs={{
          maxWidth: screen,
          padding: system.padding.md,
          border: \`\${px2rem(2)} solid \${system.color.border.default}\`,
        }}
      >
        <Grid
          cs={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: system.gap.md}}
        >
          <Box cs={{height: px2rem(120), backgroundColor: base.blue400}} />
          <Box cs={{height: px2rem(120), backgroundColor: base.blue500}} />
          <Box cs={{height: px2rem(120), backgroundColor: base.blue600}} />
        </Grid>
      </Box>
    </>
  );
};
`;const ie=d({gridTemplateAreas:`
    'Heading Heading Heading Heading Heading Heading' 
    'FormThirdLeft FormThirdLeft FormThirdCenter FormThirdCenter FormThirdRight FormThirdRight'
    'FormHalfRight FormHalfRight FormHalfRight FormHalfLeft FormHalfLeft FormHalfLeft'
  `,gridAutoRows:"min-content",gridRowGap:s.sm,gridColumnGap:s.xxl,"> *:first-child":{paddingInline:m.sm,border:`${i(1)} solid ${n.brand.border.primary}`,gridArea:"Heading"}}),_=()=>e.jsxs(l,{cs:ie,children:[e.jsx(r,{children:e.jsx(x,{size:"medium",children:"3 and 2 Column Tiled View"})}),e.jsx(b,{area:"FormThirdLeft",text:"Form - Left Third"}),e.jsx(b,{area:"FormThirdCenter",text:"Form - Center Third"}),e.jsx(b,{area:"FormThirdRight",text:"Form - Right Third"}),e.jsx(b,{area:"FormHalfRight",text:"Form - Left Half"}),e.jsx(b,{area:"FormHalfLeft",text:"Form - Right Half"})]}),se=h({vars:{area:""},base:({area:o})=>({paddingInline:m.md,border:`${i(1)} dashed ${n.brand.border.primary}`,gridArea:o,p:{fontWeight:f.bold}})}),ne=d({gridGap:s.sm,marginBlockEnd:s.xl,"> *:first-child":{width:i(120),height:g.xxs,backgroundColor:n.surface.alt.default},"> *:last-child":{border:`${i(1)} solid ${n.border.default}`,width:"100%",height:g.xxs}}),b=({area:o,text:t})=>e.jsxs(r,{cs:se({area:o}),children:[e.jsx(a,{size:"small",children:t}),Array.from({length:3}).map(()=>e.jsxs(l,{cs:ne,children:[e.jsx(r,{}),e.jsx(r,{})]}))]});_.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: \`
    'Heading Heading Heading Heading Heading Heading' 
    'FormThirdLeft FormThirdLeft FormThirdCenter FormThirdCenter FormThirdRight FormThirdRight'
    'FormHalfRight FormHalfRight FormHalfRight FormHalfLeft FormHalfLeft FormHalfLeft'
  \`,
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
  '> *:first-child': {
    paddingInline: system.padding.sm,
    border: \`\${px2rem(1)} solid \${system.color.brand.border.primary}\`,
    gridArea: 'Heading',
  },
});

export const Tiled2and3Columns = () => (
  <Grid cs={gridStyles}>
    <Box>
      <Heading size="medium">3 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton area="FormThirdLeft" text="Form - Left Third" />
    <FormSkeleton area="FormThirdCenter" text="Form - Center Third" />
    <FormSkeleton area="FormThirdRight" text="Form - Right Third" />
    <FormSkeleton area="FormHalfRight" text="Form - Left Half" />
    <FormSkeleton area="FormHalfLeft" text="Form - Right Half" />
  </Grid>
);

const boxStencil = createStencil({
  vars: {
    area: '',
  },
  base: ({area}) => ({
    paddingInline: system.padding.md,
    border: \`\${px2rem(1)} dashed \${system.color.brand.border.primary}\`,
    gridArea: area,
    p: {
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const innerGridStyles = createStyles({
  gridGap: system.gap.sm,
  marginBlockEnd: system.gap.xl,
  '> *:first-child': {
    width: px2rem(120),
    height: system.size.xxs,
    backgroundColor: system.color.surface.alt.default,
  },
  '> *:last-child': {
    border: \`\${px2rem(1)} solid \${system.color.border.default}\`,
    width: '100%',
    height: system.size.xxs,
  },
});

const FormSkeleton = ({area, text}) => (
  <Box cs={boxStencil({area})}>
    <BodyText size="small">{text}</BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={innerGridStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
`;const ae=d({gridTemplateAreas:`
    'Heading Heading Heading Heading' 
    'FormTopHalfLeft FormTopHalfLeft FormQuarterLeft FormQuarterRight'
    'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight '
  `,gridTemplateColumns:"repeat(4, 1fr)",gridAutoRows:"min-content",gridRowGap:s.sm,gridColumnGap:s.xxl,"> *:first-child":{paddingInline:m.sm,border:`${i(1)} solid ${n.brand.border.primary}`,gridArea:"Heading"}}),I=()=>e.jsxs(l,{cs:ae,children:[e.jsx(r,{children:e.jsx(x,{size:"medium",children:"4 and 2 Column Tiled View"})}),e.jsx(k,{area:"FormTopHalfLeft",text:"Form - Top Left Half"}),e.jsx(k,{area:"FormQuarterLeft",text:"Form - Left Quarter"}),e.jsx(k,{area:"FormQuarterRight",text:"Form - Right Quarter"}),e.jsx(k,{area:"FormHalfLeft",text:"Form - Left Half"}),e.jsx(k,{area:"FormHalfRight",text:"Form - Right Half"})]}),de=h({vars:{area:""},base:({area:o})=>({paddingInline:m.md,border:`${i(1)} dashed ${n.brand.border.primary}`,gridArea:o,p:{fontWeight:f.bold}})}),le=d({gridGap:s.sm,marginBlockEnd:s.xl,"> *:first-child":{width:i(120),height:g.xxs,backgroundColor:n.surface.alt.default},"> *:last-child":{border:`${i(1)} solid ${n.border.default}`,width:"100%",height:g.xxs}}),k=({area:o,text:t})=>e.jsxs(r,{cs:de({area:o}),children:[e.jsx(a,{size:"small",fontWeight:"bold",children:t}),Array.from({length:3}).map(()=>e.jsxs(l,{cs:le,children:[e.jsx(r,{}),e.jsx(r,{})]}))]});I.__RAW__=`import * as React from 'react';

import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: \`
    'Heading Heading Heading Heading' 
    'FormTopHalfLeft FormTopHalfLeft FormQuarterLeft FormQuarterRight'
    'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight '
  \`,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
  '> *:first-child': {
    paddingInline: system.padding.sm,
    border: \`\${px2rem(1)} solid \${system.color.brand.border.primary}\`,
    gridArea: 'Heading',
  },
});

export const Tiled4and2Columns = () => (
  <Grid cs={gridStyles}>
    <Box>
      <Heading size="medium">4 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton area="FormTopHalfLeft" text="Form - Top Left Half" />
    <FormSkeleton area="FormQuarterLeft" text="Form - Left Quarter" />
    <FormSkeleton area="FormQuarterRight" text="Form - Right Quarter" />
    <FormSkeleton area="FormHalfLeft" text="Form - Left Half" />
    <FormSkeleton area="FormHalfRight" text="Form - Right Half" />
  </Grid>
);

const boxStencil = createStencil({
  vars: {
    area: '',
  },
  base: ({area}) => ({
    paddingInline: system.padding.md,
    border: \`\${px2rem(1)} dashed \${system.color.brand.border.primary}\`,
    gridArea: area,
    p: {
      fontWeight: system.fontWeight.bold,
    },
  }),
});

const innerGridStyles = createStyles({
  gridGap: system.gap.sm,
  marginBlockEnd: system.gap.xl,
  '> *:first-child': {
    width: px2rem(120),
    height: system.size.xxs,
    backgroundColor: system.color.surface.alt.default,
  },
  '> *:last-child': {
    border: \`\${px2rem(1)} solid \${system.color.border.default}\`,
    width: '100%',
    height: system.size.xxs,
  },
});

const FormSkeleton = ({area, text}) => (
  <Box cs={boxStencil({area})}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid cs={innerGridStyles}>
        <Box />
        <Box />
      </Grid>
    ))}
  </Box>
);
`;function T(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...R(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{title:"Examples/Layouts"}),`
`,e.jsx(t.h1,{id:"canvas-kit-examples",children:"Canvas Kit Examples"}),`
`,e.jsxs(t.p,{children:[`Below are layout examples to reference as you build your own. For more in-depth information on our
`,e.jsx(t.code,{children:"Grid"}),` component, please reference our
`,e.jsxs(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-layout-grid--docs",rel:"nofollow",children:[e.jsx(t.code,{children:"Grid"})," documentation"]}),"."]}),`
`,e.jsx(t.h2,{id:"area-column-positioning",children:"Area Column Positioning"}),`
`,e.jsx(c,{code:G}),`
`,e.jsx(t.h2,{id:"custom-column-positioning",children:"Custom Column Positioning"}),`
`,e.jsx(c,{code:A}),`
`,e.jsx(t.h2,{id:"custom-column-width",children:"Custom Column Width"}),`
`,e.jsx(c,{code:$}),`
`,e.jsx(t.h2,{id:"full-width-with-3-columns",children:"Full Width With 3 Columns"}),`
`,e.jsx(c,{code:v}),`
`,e.jsx(t.h2,{id:"full-width-with-3-columns-and-2-rows",children:"Full Width With 3 Columns and 2 Rows"}),`
`,e.jsx(c,{code:z}),`
`,e.jsx(t.h2,{id:"masonry",children:"Masonry"}),`
`,e.jsx(c,{code:W}),`
`,e.jsx(t.h2,{id:"responsive-columns",children:"Responsive Columns"}),`
`,e.jsx(c,{code:L}),`
`,e.jsx(t.h2,{id:"3-and-2-column-tiled-view",children:"3 and 2 Column Tiled View"}),`
`,e.jsx(c,{code:_}),`
`,e.jsx(t.h2,{id:"4-and-2-column-tiled-view",children:"4 and 2 Column Tiled View"}),`
`,e.jsx(c,{code:I})]})}function Wr(o={}){const{wrapper:t}={...R(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(T,{...o})}):T(o)}export{Wr as default};
