import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as l}from"./index-DR-D6EjG.js";import{E as d}from"./union-CT45YaQX.js";import"./index-IfJi-UCQ.js";import{s as e,t as u,c as x,a as f}from"./index-C5MVqyzH.js";import{s as m}from"./styled-BsZD6Etj.js";import{j as C}from"./Box-CfIP0C5s.js";import{c as p}from"./components-DlilqqSw.js";import{T as y}from"./TertiaryButton-a9_U68ho.js";import{P as g}from"./PrimaryButton-C2w1b3vR.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-BBevkT_x.js";import"./Text-Tayi47N3.js";import"./mergeStyles-DCTLot6K.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./index-CYsyLHR7.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./Button-Cg4j9RPw.js";import"./lerna-CYqneavZ.js";import"./CanvasProvider-0Y3auRRO.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C7vP30km.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./Popup-B-4w8IgE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-ahHEmhSv.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Table-C_Pr0zfe.js";const h=p("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...o},i)=>n.jsx(w,{ref:i,isRow:t,...o})}),r=p("div")({displayName:"CookieBanner",Component:(t,o,i)=>n.jsx(k,{ref:o,as:i,...t}),subComponents:{Item:h}}),c=()=>n.jsx(B,{children:n.jsxs(r,{isClosed:!1,children:[n.jsx(r.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
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
