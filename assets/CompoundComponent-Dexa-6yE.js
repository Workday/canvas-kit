import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as B}from"./index-CyGZXPEz.js";import{E as v}from"./union-BUCG8cdu.js";import{e as r}from"./index-IfJi-UCQ.js";import{c as H}from"./models-CHTjB2ql.js";import{g as b,a as g,b as P}from"./components-B5QHr9xs.js";import{B as M}from"./Box-CyjvvVBh.js";import{c as l,d as j}from"./index-C_4iH04t.js";import{C as s}from"./Card-TTTo4zHB.js";import{h as w}from"./cs-CmRirKzJ.js";import{P as C}from"./PrimaryButton-CyIy4kuw.js";import"./iframe-Dine_4aU.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-CvCkjYNC.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DgkB3O3q.js";import"./Svg-CXKlNM9V.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-BRiOfW_b.js";import"./Text-56KUGy0I.js";import"./mergeStyles-Bfd74k5F.js";import"./flex-BhWEOOmD.js";import"./grid-Bo2FCXCg.js";import"./cornerShape-B1y71wLF.js";import"./document-Bmp3YBI-.js";import"./ExternalHyperlink-CMouN1zW.js";import"./Hyperlink-CiXICWo2.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-F9hk8ScV.js";import"./BaseButton-B7Cdo6oA.js";import"./Button-uPfdKrkI.js";import"./lerna-DSxFu7Tr.js";import"./CanvasProvider-CmQuC1n5.js";import"./index-CFEs8r9D.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-CHIJ5lTV.js";import"./useTooltip-CDZrIDIK.js";import"./getTransformFromPlacement-CeI32Hr4.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-BNAhz6K3.js";import"./Popper-BKWt9U5M.js";import"./isElementRTL-lizwOp5U.js";import"./TertiaryButton-BL6wVU0w.js";import"./TypeLevelComponents-BkRTrtYq.js";import"./ColorPicker-YR0REnsY.js";import"./ColorInput-CgQJxHhX.js";import"./check-small-BqSDQIle.js";import"./index-DWHOiqdi.js";import"./TextInput-COM6UplY.js";import"./types-DXdjelYI.js";import"./FormField-BT_PZm_j.js";import"./check-Ds6vsrAM.js";import"./Expandable-DpOIWmb-.js";import"./Avatar-Bsyc2LpW.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DQuIuKWH.js";import"./Popup-COb6F4Ts.js";import"./x-B1faap_l.js";import"./usePopupTarget-Cco7peXe.js";import"./useInitialFocus-DcT3-Ce6.js";import"./useReturnFocus-DWZj3b3a.js";import"./useFocusRedirect-Xc3xIpjr.js";import"./Breadcrumbs-DxCbAS4P.js";import"./useOverflowListItemMeasure-ynDmS6wO.js";import"./useListItemRegister-BqQBHrTO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BetwLbDT.js";import"./OverflowTooltip-BPWo0foa.js";import"./useListItemRovingFocus-BdbIpBLB.js";import"./useListItemSelect-CjGaW9lx.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-CTkziXOc.js";import"./Flex-DzCPbc6Q.js";import"./Table-BYK6-5dH.js";const c=H({defaultConfig:{theme:"dark"}})(o=>{const t=l.fg.inverse,n=l.fg.default,m=d=>d===n?t:n,[p,i]=r.useState(o.theme),[f,x]=r.useState(o.theme==="dark"?n:t),[y,T]=r.useState(o.theme==="dark"?t:n);return{state:{theme:p,mainColor:f,contrastColor:y},events:{toggleTheme:()=>{i(d=>d==="dark"?"light":"dark"),x(m),T(m)}}}}),R=g()(({state:o,events:t})=>({colors:{default:{background:o.contrastColor,label:o.mainColor},hover:{},active:{},focus:{},disabled:{}},onClick:()=>t.toggleTheme()})),S=P(C)({displayName:"CustomCard.Button",modelHook:c,elemPropsHook:R})(({children:o,...t})=>e.jsx(C,{...t,children:o})),E=g()(({state:o})=>({backgroundColor:o.mainColor})),a=b(s)({displayName:"CustomCard",subComponents:{Heading:s.Heading,Body:s.Body,Button:S},modelHook:c,elemPropsHook:E})(({theme:o,children:t,...n})=>e.jsx(s,{...w(n,[{boxShadow:j[2]}]),children:t})),k=()=>{const[o,t]=r.useState("🌝"),n=c({onToggleTheme:(p,{theme:i})=>t(i==="dark"?"🌚":"🌝")}),m=r.useRef(null);return r.useEffect(()=>m.current?.focus(),[]),e.jsxs(a,{model:n,children:[e.jsx(a.Heading,{children:e.jsxs(M,{cs:{color:n.state.contrastColor},children:["Change your theme ",o]})}),e.jsx(a.Body,{children:e.jsx(a.Button,{ref:m,children:"Toggle"})})]})};k.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {
  ExtractProps,
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export type Theme = 'dark' | 'light';
interface CustomCardProps extends ExtractProps<typeof Card> {
  theme?: Theme;
}

/**
 * Compound Component Model Hook
 */
const useCustomCardModel = createModelHook({
  defaultConfig: {theme: 'dark' as Theme},
})(config => {
  const lightThemeColor = system.color.fg.inverse;
  const darkThemeColor = system.color.fg.default;
  const inverseColor = color => (color === darkThemeColor ? lightThemeColor : darkThemeColor);

  const [theme, setTheme] = React.useState(config.theme);
  const [mainColor, setMainColor] = React.useState(
    config.theme === 'dark' ? darkThemeColor : lightThemeColor
  );
  const [contrastColor, setContrastColor] = React.useState(
    config.theme === 'dark' ? lightThemeColor : darkThemeColor
  );
  const state = {theme, mainColor, contrastColor};

  const events = {
    toggleTheme: () => {
      setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
      setMainColor(inverseColor);
      setContrastColor(inverseColor);
    },
  };

  return {state, events};
});

/**
 * Subcomponent Hook
 */
const useCustomCardButton = createElemPropsHook(useCustomCardModel)(({state, events}) => ({
  colors: {
    default: {
      background: state.contrastColor,
      label: state.mainColor,
    },
    hover: {},
    active: {},
    focus: {},
    disabled: {},
  },
  onClick: () => events.toggleTheme(),
}));

/**
 * Subcomponent Component
 */
const CustomCardButton = createSubcomponent(PrimaryButton)({
  displayName: 'CustomCard.Button',
  modelHook: useCustomCardModel,
  elemPropsHook: useCustomCardButton,
})(({children, ...elemProps}) => {
  return <PrimaryButton {...elemProps}>{children}</PrimaryButton>;
});

/**
 * Main Component Hook
 */
const useCustomCard = createElemPropsHook(useCustomCardModel)(({state}) => ({
  backgroundColor: state.mainColor,
}));

/**
 * Main Component
 */
const CustomCard = createContainer(Card)({
  displayName: 'CustomCard',
  subComponents: {
    Heading: Card.Heading,
    Body: Card.Body,
    Button: CustomCardButton,
  },
  modelHook: useCustomCardModel,
  elemPropsHook: useCustomCard,
})<CustomCardProps>(({theme, children, ...elemProps}) => {
  return <Card {...handleCsProp(elemProps, [{boxShadow: system.depth[2]}])}>{children}</Card>;
});

/**
 * Usage
 */
export const Template = () => {
  const [icon, setIcon] = React.useState('🌝');
  const model = useCustomCardModel({
    onToggleTheme: (_, {theme: previousTheme}) => setIcon(previousTheme === 'dark' ? '🌚' : '🌝'),
  });
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => buttonRef.current?.focus(), []);

  return (
    <CustomCard model={model}>
      <CustomCard.Heading>
        <Box cs={{color: model.state.contrastColor}}>Change your theme {icon}</Box>
      </CustomCard.Heading>
      <CustomCard.Body>
        <CustomCard.Button ref={buttonRef}>Toggle</CustomCard.Button>
      </CustomCard.Body>
    </CustomCard>
  );
};
`;function u(o){const t={a:"a",h1:"h1",h2:"h2",p:"p",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Examples/Compound Component"}),`
`,e.jsx(t.h1,{id:"canvas-kit-examples",children:"Canvas Kit Examples"}),`
`,e.jsx(t.h2,{id:"compound-component",children:"Compound Component"}),`
`,e.jsx(t.p,{children:`Component component utilites are a great way to wrap and extend exisitng Canvas Kit Components. This
can dramatically simplify state handling and gives you easy access to things like ref forwarding.`}),`
`,e.jsxs(t.p,{children:[`For more complex examples,
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-creating-compound-components--docs",rel:"nofollow",children:"see the creating-compound-components guide"}),"."]}),`
`,e.jsx(v,{code:k})]})}function pt(o={}){const{wrapper:t}={...h(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(u,{...o})}):u(o)}export{pt as default};
