import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as l}from"./index-DHWTzE-b.js";import{E as d}from"./union-D2wJ6UB9.js";import"./index-IfJi-UCQ.js";import{s as e,t as u,c as x,a as f}from"./index-CdbxS-xI.js";import{s as m}from"./styled-BsZD6Etj.js";import{j as C}from"./Box-DFWPfIf0.js";import{c as p}from"./components-XIe_upcR.js";import{T as y}from"./TertiaryButton-DaDaXMfE.js";import{P as g}from"./PrimaryButton-_EBa_erW.js";import"./iframe-DW6TaI9H.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-vcmfDllK.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./index-CYsyLHR7.js";import"./Card-ywil38vv.js";import"./ExternalHyperlink-D7iOffGf.js";import"./Hyperlink-Cmi71RJg.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./Button-Cp7fe3Zs.js";import"./lerna-j6nxiWIt.js";import"./CanvasProvider-CbBD4ERB.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Tooltip-De1KsO5U.js";import"./useTooltip-p8F4NfJ4.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./ColorPicker-DLb8Wvti.js";import"./ColorInput-CnFM3Rd0.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-nG1V2_dd.js";import"./types-DXdjelYI.js";import"./FormField-U6jJIaHC.js";import"./check-BG7HONvH.js";import"./Expandable-BA5P8o_t.js";import"./Avatar-GkuXop0D.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-XwlCiuK9.js";import"./Popup-FGUZYXID.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-B7GfDsu7.js";import"./useInitialFocus-CouubvfO.js";import"./useReturnFocus-BgzhEoBI.js";import"./useFocusRedirect-ETf1Gakg.js";import"./Breadcrumbs-CIeTVgOV.js";import"./useOverflowListTarget-Esi-iaKN.js";import"./useListItemSelect-D10U8d3g.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Blawm5fT.js";import"./OverflowTooltip-B7jd-TXK.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BKzcw9XF.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Table-ZC-rbz82.js";const h=p("div")({displayName:"CookieBanner.Item",Component:({isRow:t,...o},i)=>n.jsx(w,{ref:i,isRow:t,...o})}),r=p("div")({displayName:"CookieBanner",Component:(t,o,i)=>n.jsx(k,{ref:o,as:i,...t}),subComponents:{Item:h}}),c=()=>n.jsx(B,{children:n.jsxs(r,{isClosed:!1,children:[n.jsx(r.Item,{children:`We use cookies to ensure that we give you the best experience on our website. 
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
