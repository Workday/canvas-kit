import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as l}from"./index-BwQDiYtp.js";import{E as d}from"./union-DvKeCgka.js";import"./index-IfJi-UCQ.js";import{s as e,t as u,c as x,a as f}from"./index-C5MVqyzH.js";import{s as m}from"./styled-BsZD6Etj.js";import{j as C}from"./Box-DFceh3YA.js";import{c as p}from"./components-1G01j-He.js";import{T as y}from"./TertiaryButton-jo8ThkBe.js";import{P as g}from"./PrimaryButton-Cnd4N9Ks.js";import"./iframe-DdCB4fu1.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-BIh9noB6.js";import"./Text-DRUbleCp.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./index-CYsyLHR7.js";import"./Card-CEyROzcv.js";import"./ExternalHyperlink-DnFL28k4.js";import"./Hyperlink-x6e3UOri.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./Button-BQ1TZXwZ.js";import"./lerna-Dg0W5Fbg.js";import"./CanvasProvider-BJ-OMKNq.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Tooltip-Btv9iUgu.js";import"./useTooltip-C6jxCkQj.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bw_WRa4H.js";import"./ColorPicker-C8FThZKW.js";import"./ColorInput-Bkpr30Lr.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-CdyX2CFM.js";import"./types-DXdjelYI.js";import"./FormField-Bjws_Dzr.js";import"./check-BG7HONvH.js";import"./Expandable-70Ub1HQc.js";import"./Avatar-tCwg6Ua1.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DSu3fjoQ.js";import"./Popup-CfPbpWF4.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-C0UKjDnR.js";import"./useInitialFocus-DXIqVwzr.js";import"./useReturnFocus-BsryDfnL.js";import"./useFocusRedirect-Beo767rE.js";import"./Breadcrumbs-_0m6ah8y.js";import"./useOverflowListTarget-CtqJJeXl.js";import"./useListItemSelect-DuQmMHZs.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CIvTapno.js";import"./OverflowTooltip-hamrGFdg.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BB_s4g0f.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Table-Cx_ITbAR.js";const h=p("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...o},i)=>n.jsx(w,{ref:i,isRow:t,...o})}),r=p("div")({displayName:"CookieBanner",Component:(t,o,i)=>n.jsx(k,{ref:o,as:i,...t}),subComponents:{Item:h}}),c=()=>n.jsx(B,{children:n.jsxs(r,{isClosed:!1,children:[n.jsx(r.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.`}),n.jsxs(r.Item,{isRow:!0,children:[n.jsx(y,{children:"Settings"}),n.jsx(g,{children:"Continue"})]})]})}),B=m("div")({minHeight:84,margin:e.xs,position:"relative"}),k=m("div")(u.levels.subtext.medium,{backgroundColor:f.background,borderTop:`1px solid ${x.soap400}`,display:"flex",...C[1],padding:e.m,alignItems:"center",justifyContent:"space-between",position:"absolute",bottom:0,left:0,right:0,zIndex:99,transition:"transform 0.2s ease-out","@media (max-width: 450px)":{flexDirection:"column",alignItems:"stretch",textAlign:"center",padding:`${e.s} 0`}},({isClosed:t})=>t&&{transform:"translateY(100%)"}),w=m("div")({marginLeft:e.s,marginRight:e.s,"@media (max-width: 450px)":{"&:not(:first-of-type)":{marginTop:e.s,"> *":{flex:1}}}},({isRow:t})=>t&&{display:"flex","> *":{marginLeft:e.s}});c.__RAW__=`import * as React from 'react';

import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {StyledType, createComponent, styled} from '@workday/canvas-kit-react/common';
import {colors, commonColors, depth, space, type} from '@workday/canvas-kit-react/tokens';

const CookieBannerItem = createComponent('div')({
  displayName: 'CookieBanner.Item',
  Component: ({isRow, ...elProps}: ItemProps, ref) => (
    <BannerItem ref={ref} isRow={isRow} {...elProps} />
  ),
});

const CookieBanner = createComponent('div')({
  displayName: 'CookieBanner',
  Component: (props: BannerProps, ref, Element) => <Banner ref={ref} as={Element} {...props} />,
  subComponents: {Item: CookieBannerItem},
});

export const BasicExample = () => {
  const DefaultNotice = \`We use cookies to ensure that we give you the best experience on our website. 
    If you continue without changing your settings, we'll assume that you are willing to receive cookies.\`;

  return (
    <ExampleContainer>
      <CookieBanner isClosed={false}>
        <CookieBanner.Item>{DefaultNotice}</CookieBanner.Item>
        <CookieBanner.Item isRow>
          <TertiaryButton>Settings</TertiaryButton>
          <PrimaryButton>Continue</PrimaryButton>
        </CookieBanner.Item>
      </CookieBanner>
    </ExampleContainer>
  );
};

interface BannerProps {
  isClosed?: boolean;
}

interface ItemProps {
  isRow?: boolean;
}

const ExampleContainer = styled('div')({
  minHeight: 84,
  margin: space.xs,
  position: 'relative',
});

const Banner = styled('div')<BannerProps & StyledType>(
  type.levels.subtext.medium,
  {
    backgroundColor: commonColors.background,
    borderTop: \`1px solid \${colors.soap400}\`,
    display: 'flex',
    ...depth[1],
    padding: space.m,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    transition: 'transform 0.2s ease-out',
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      padding: \`\${space.s} 0\`,
    },
  },
  ({isClosed}) => isClosed && {transform: 'translateY(100%)'}
);

const BannerItem = styled('div')<ItemProps & StyledType>(
  {
    marginLeft: space.s,
    marginRight: space.s,
    '@media (max-width: 450px)': {
      '&:not(:first-of-type)': {
        marginTop: space.s,
        '> *': {
          flex: 1,
        },
      },
    },
  },
  ({isRow}) =>
    isRow && {
      display: 'flex',
      '> *': {
        marginLeft: space.s,
      },
    }
);
`;function s(t){const o={h1:"h1",h2:"h2",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Examples/Cookie Banner"}),`
`,n.jsx(o.h1,{id:"canvas-kit-examples",children:"Canvas Kit Examples"}),`
`,n.jsx(o.h2,{id:"cookiebanner",children:"CookieBanner"}),`
`,n.jsx(d,{code:c})]})}function Un(t={}){const{wrapper:o}={...a(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(s,{...t})}):s(t)}export{Un as default};
