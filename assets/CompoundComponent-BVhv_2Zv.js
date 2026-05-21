import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as h}from"./index-3YbjYt95.js";import{ae as B}from"./index-C88wW2Ex.js";import{E as v}from"./union-BPMFUjOj.js";import{e as r}from"./index-IfJi-UCQ.js";import{c as H}from"./models-CHTjB2ql.js";import{g as b,a as g,b as P}from"./components-hLI4Y7BG.js";import{B as M}from"./Box-CZFE0ixi.js";import{c as l,d as j}from"./index-5dfzm_kn.js";import{C as s}from"./Card-Diisw6Wk.js";import{h as w}from"./cs-rfTTo7Bg.js";import{P as C}from"./PrimaryButton-BLeyIayx.js";import"./iframe-CQKXz9-x.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B8HVQN6j.js";import"./Svg-Q2G_Ux-O.js";import"./px2rem-C0KbprIx.js";import"./StatusIndicator-CiQOcTf5.js";import"./Text-D8fnnBwI.js";import"./mergeStyles-dbpHOiQg.js";import"./flex-DNq8_MY_.js";import"./grid-2x3NJxAi.js";import"./ExternalHyperlink-CWp7Pbv_.js";import"./Hyperlink-RaMBe4Xz.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-CLjQTZHV.js";import"./BaseButton-CYxOiuNN.js";import"./Button-4v0JWwSY.js";import"./lerna-DL0LCqJw.js";import"./CanvasProvider-mU4xaRYK.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-C_9jsdWz.js";import"./useTooltip-BYoICOX9.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-Laal62t5.js";import"./Popper-GB9vaNct.js";import"./TertiaryButton-BPITVf5W.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-D0CjS5x_.js";import"./ColorPicker-DgREOIhz.js";import"./ColorInput-D7oUbfnw.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-D51etMr3.js";import"./types-DXdjelYI.js";import"./FormField-DN--zoVG.js";import"./check-Bvurkvei.js";import"./Expandable-BWvaEvQ6.js";import"./Avatar-CzGiOulD.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DdDlie6x.js";import"./Popup-N9bHb6Ji.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DboaFZ0b.js";import"./useInitialFocus-FRuZ2Meg.js";import"./useReturnFocus-C7p7cNR7.js";import"./useFocusRedirect-CKcH6oXb.js";import"./Breadcrumbs-C2gx7qIi.js";import"./useOverflowListTarget-DvTTlNIT.js";import"./useListItemSelect-1rs22A26.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIRa1Olo.js";import"./OverflowTooltip-C8xnDywt.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-C9RVCMPo.js";import"./Table-gkxgxQ_f.js";const c=H({defaultConfig:{theme:"dark"}})(o=>{const t=l.fg.inverse,n=l.fg.default,m=d=>d===n?t:n,[p,i]=r.useState(o.theme),[f,x]=r.useState(o.theme==="dark"?n:t),[y,T]=r.useState(o.theme==="dark"?t:n);return{state:{theme:p,mainColor:f,contrastColor:y},events:{toggleTheme:()=>{i(d=>d==="dark"?"light":"dark"),x(m),T(m)}}}}),R=g()(({state:o,events:t})=>({colors:{default:{background:o.contrastColor,label:o.mainColor},hover:{},active:{},focus:{},disabled:{}},onClick:()=>t.toggleTheme()})),S=P(C)({displayName:"CustomCard.Button",modelHook:c,elemPropsHook:R})(({children:o,...t})=>e.jsx(C,{...t,children:o})),E=g()(({state:o})=>({backgroundColor:o.mainColor})),a=b(s)({displayName:"CustomCard",subComponents:{Heading:s.Heading,Body:s.Body,Button:S},modelHook:c,elemPropsHook:E})(({theme:o,children:t,...n})=>e.jsx(s,{...w(n,[{boxShadow:j[2]}]),children:t})),k=()=>{const[o,t]=r.useState("🌝"),n=c({onToggleTheme:(p,{theme:i})=>t(i==="dark"?"🌚":"🌝")}),m=r.useRef(null);return r.useEffect(()=>m.current?.focus(),[]),e.jsxs(a,{model:n,children:[e.jsx(a.Heading,{children:e.jsxs(M,{cs:{color:n.state.contrastColor},children:["Change your theme ",o]})}),e.jsx(a.Body,{children:e.jsx(a.Button,{ref:m,children:"Toggle"})})]})};k.__RAW__=`import React from 'react';

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
