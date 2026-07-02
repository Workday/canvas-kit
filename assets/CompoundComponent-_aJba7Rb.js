import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as B}from"./index-BRnk6Jss.js";import{E as v}from"./union-DfCGpEFz.js";import{e as r}from"./index-IfJi-UCQ.js";import{c as H}from"./models-CHTjB2ql.js";import{g as b,a as g,b as P}from"./components-UDFgQUGn.js";import{B as M}from"./Box-D2ASsm4c.js";import{c as l,d as j}from"./index-5dfzm_kn.js";import{C as s}from"./Card-B6jDfvcM.js";import{h as w}from"./cs-rfTTo7Bg.js";import{P as C}from"./PrimaryButton-DizpLlxP.js";import"./iframe-gI3eSQDE.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cxi23k1b.js";import"./Svg-DS7moGFZ.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-RZaiHZ60.js";import"./Text-D9iXBli-.js";import"./mergeStyles-BLLTUXpb.js";import"./flex-d9jeEQhv.js";import"./grid-CaHUkY18.js";import"./ExternalHyperlink-BBljqwb4.js";import"./Hyperlink-DbeQmjqN.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-DOwBoZnC.js";import"./BaseButton-ClShVIas.js";import"./Button-DtJ1XWk0.js";import"./lerna-Qtw8JKy9.js";import"./CanvasProvider-BwkooHMX.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-olZLRGZ7.js";import"./useTooltip-DCKGRPrh.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-DE0UiqOX.js";import"./Popper-BYIOr7u1.js";import"./TertiaryButton-BcURmXxb.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DcAkg225.js";import"./ColorPicker-DKuNOvTg.js";import"./ColorInput-CetBghZ-.js";import"./check-small-C7Z-gSGs.js";import"./index-B6mB83wl.js";import"./TextInput-BK6B-Wxq.js";import"./types-DXdjelYI.js";import"./FormField-DcqhBVZh.js";import"./check-Bvurkvei.js";import"./Expandable-Dc7Z2sHf.js";import"./Avatar-C7usGa_C.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-QvwuEgxo.js";import"./Popup-BLw4miPR.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DeThqX_B.js";import"./useInitialFocus-BFcJI2rN.js";import"./useReturnFocus-D9ZarZyH.js";import"./useFocusRedirect-JYT-Qve9.js";import"./Breadcrumbs-B_8iHPzE.js";import"./useOverflowListTarget-cN2_WrKs.js";import"./useListItemSelect-CaL1I8iy.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu--fWFXVsR.js";import"./OverflowTooltip-DLvQsqRq.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-BlHl8shq.js";import"./Table-GdjgjwHm.js";const c=H({defaultConfig:{theme:"dark"}})(o=>{const t=l.fg.inverse,n=l.fg.default,m=d=>d===n?t:n,[p,i]=r.useState(o.theme),[f,x]=r.useState(o.theme==="dark"?n:t),[y,T]=r.useState(o.theme==="dark"?t:n);return{state:{theme:p,mainColor:f,contrastColor:y},events:{toggleTheme:()=>{i(d=>d==="dark"?"light":"dark"),x(m),T(m)}}}}),R=g()(({state:o,events:t})=>({colors:{default:{background:o.contrastColor,label:o.mainColor},hover:{},active:{},focus:{},disabled:{}},onClick:()=>t.toggleTheme()})),S=P(C)({displayName:"CustomCard.Button",modelHook:c,elemPropsHook:R})(({children:o,...t})=>e.jsx(C,{...t,children:o})),E=g()(({state:o})=>({backgroundColor:o.mainColor})),a=b(s)({displayName:"CustomCard",subComponents:{Heading:s.Heading,Body:s.Body,Button:S},modelHook:c,elemPropsHook:E})(({theme:o,children:t,...n})=>e.jsx(s,{...w(n,[{boxShadow:j[2]}]),children:t})),k=()=>{const[o,t]=r.useState("🌝"),n=c({onToggleTheme:(p,{theme:i})=>t(i==="dark"?"🌚":"🌝")}),m=r.useRef(null);return r.useEffect(()=>m.current?.focus(),[]),e.jsxs(a,{model:n,children:[e.jsx(a.Heading,{children:e.jsxs(M,{cs:{color:n.state.contrastColor},children:["Change your theme ",o]})}),e.jsx(a.Body,{children:e.jsx(a.Button,{ref:m,children:"Toggle"})})]})};k.__RAW__=`import React from 'react';

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
`,e.jsx(v,{code:k})]})}function st(o={}){const{wrapper:t}={...h(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(u,{...o})}):u(o)}export{st as default};
