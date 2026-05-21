import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as g}from"./index-3YbjYt95.js";import{ae as P}from"./index-C88wW2Ex.js";import{E as S,c as m}from"./union-BPMFUjOj.js";import{e as F}from"./index-IfJi-UCQ.js";import{d as T,I as a}from"./InputGroup-BV-5Wj3X.js";import{L as M}from"./LoadingDots-CVSYz87M.js";import{a as k,u as _,b as E,d as R}from"./components-hLI4Y7BG.js";import{u as D}from"./useComboboxLoader-BwVUKkBI.js";import{F as d}from"./FormField-DN--zoVG.js";import{C as i,u as j,a as G}from"./Combobox-DtAjhpSw.js";import{S as H}from"./Menu-DIRa1Olo.js";import{p as C}from"./px2rem-C0KbprIx.js";import{T as z}from"./TextInput-D51etMr3.js";import{a as q}from"./cs-rfTTo7Bg.js";import{o as b}from"./index-5dfzm_kn.js";import"./iframe-CQKXz9-x.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B8HVQN6j.js";import"./Svg-Q2G_Ux-O.js";import"./StatusIndicator-CiQOcTf5.js";import"./Text-D8fnnBwI.js";import"./mergeStyles-dbpHOiQg.js";import"./Box-CZFE0ixi.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-DNq8_MY_.js";import"./grid-2x3NJxAi.js";import"./Card-Diisw6Wk.js";import"./ExternalHyperlink-CWp7Pbv_.js";import"./Hyperlink-RaMBe4Xz.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-CLjQTZHV.js";import"./BaseButton-CYxOiuNN.js";import"./Button-4v0JWwSY.js";import"./lerna-DL0LCqJw.js";import"./CanvasProvider-mU4xaRYK.js";import"./index-5mrAZJYD.js";import"./Tooltip-C_9jsdWz.js";import"./useTooltip-BYoICOX9.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-Laal62t5.js";import"./Popper-GB9vaNct.js";import"./TertiaryButton-BPITVf5W.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-D0CjS5x_.js";import"./ColorPicker-DgREOIhz.js";import"./ColorInput-D7oUbfnw.js";import"./check-small-C7Z-gSGs.js";import"./check-Bvurkvei.js";import"./Expandable-BWvaEvQ6.js";import"./Avatar-CzGiOulD.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-DdDlie6x.js";import"./Popup-N9bHb6Ji.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-DboaFZ0b.js";import"./useInitialFocus-FRuZ2Meg.js";import"./useReturnFocus-C7p7cNR7.js";import"./useFocusRedirect-CKcH6oXb.js";import"./Breadcrumbs-C2gx7qIi.js";import"./useOverflowListTarget-DvTTlNIT.js";import"./useListItemSelect-1rs22A26.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-C8xnDywt.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-C9RVCMPo.js";import"./Table-gkxgxQ_f.js";import"./x-small-DK7gM0f7.js";import"./useListLoader-DR-o4XEV.js";import"./types-DXdjelYI.js";const N=Object.freeze(Object.defineProperty({__proto__:null,get Autocomplete(){return l},get __namedExportsOrder(){return V},get default(){return Y}},Symbol.toStringTag,{value:"Module"})),B=k()((n,o)=>{const{elementRef:t,localRef:s}=_(o);return F.useLayoutEffect(()=>{if(s.current){const r=(n.state.selectedIds==="all"?[]:n.state.selectedIds).join(", ");r!==s.current.value&&T(s.current,r)}},[n.state.selectedIds,s]),{ref:t,onChange:r=>{n.onChange?.(r),n.onFilterChange?.(r)}}}),h=[{name:"useComboboxInputArbitrary",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/combobox/lib/hooks/useComboboxInputArbitrary.ts",description:`An arbitrary combobox can have any value. The list of options are suggestions to aid the user in
entering values. A Typeahead or Autocomplete are examples are arbitrary value comboboxes.`,declarations:[{name:"useComboboxInputArbitrary",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/combobox/lib/hooks/useComboboxInputArbitrary.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"ComboboxModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[{kind:"property",name:"ref",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"instance",type:{kind:"union",value:[{kind:"symbol",name:"T",value:"T"},{kind:"primitive",value:"null"}]},required:!0,rest:!1,description:"",declarations:[{name:"instance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/@types/react/ts5.0/index.d.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"void"}},description:"",tags:{},declarations:[]},{kind:"property",name:"onChange",required:!0,type:{kind:"function",parameters:[{kind:"parameter",name:"event",type:{kind:"symbol",name:"React.ChangeEvent",typeParameters:[{kind:"symbol",name:"HTMLInputElement",value:"HTMLInputElement"}],value:"ChangeEvent<T>"},required:!0,rest:!1,description:"",declarations:[{name:"event",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/combobox/lib/hooks/useComboboxInputArbitrary.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"void"}},description:"",tags:{},declarations:[]}]}}}];window.__updateDocs?window.__updateDocs?.(h):window.__docs=(window.__docs||[]).concat(h);const x=["Red","Blue","Purple","Green","Pink"],f=["Apple","Orange","Banana","Grape","Lemon","Lime"],W=Array(1e3).fill("").map((n,o)=>`${x[o%x.length]} ${f[o%f.length]} ${o+1}`),$=window.Cypress?5:300,O=R(k()(n=>({onKeyPress(o){n.events.show(o)}})),B,G),K=q({base:{transition:"opacity 100ms ease",'& [data-part="loading-dots"]':{display:"flex",transform:"scale(0.3)"}},modifiers:{isLoading:{true:{opacity:b.full},false:{opacity:b.zero}}}}),U=E(z)({modelHook:j,elemPropsHook:O})(({isLoading:n,...o},t)=>e.jsxs(a,{children:[e.jsx(a.Input,{as:t,...o}),e.jsx(a.InnerEnd,{cs:K({isLoading:n}),width:C(20),"data-loading":n,children:e.jsx(M,{"data-part":"loading-dots"})}),e.jsx(a.InnerEnd,{children:e.jsx(a.ClearButton,{"data-testid":"clear"})})]})),c=()=>{const{model:n,loader:o}=D({total:0,pageSize:20,async load({pageNumber:t,pageSize:s,filter:r}){return new Promise(v=>{setTimeout(()=>{const p=(t-1)*s,I=p+s,u=W.filter(L=>r===""||typeof r!="string"?!0:L.toLowerCase().includes(r.toLowerCase())),w=u.length,A=u.slice(p,I);v({items:A,total:w})},$)})},onShow(){o.load()}},j);return e.jsxs(d,{orientation:"horizontalStart",isRequired:!0,children:[e.jsx(d.Label,{children:"Fruit"}),e.jsx(d.Field,{children:e.jsxs(i,{model:n,onChange:t=>console.log("input",t.currentTarget.value),children:[e.jsx(d.Input,{as:U,isLoading:o.isLoading}),e.jsx(i.Menu.Popper,{children:e.jsx(i.Menu.Card,{children:n.state.items.length<1?e.jsx(H,{as:"span",children:"No Results Found"}):e.jsx(i.Menu.List,{cs:{maxHeight:C(200)},children:t=>e.jsx(i.Menu.Item,{children:t})})})})]})})]})};c.__RAW__=`import React from 'react';

import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxInput,
  useComboboxInputArbitrary,
  useComboboxLoader,
  useComboboxModel,
} from '@workday/canvas-kit-react/combobox';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const colors = ['Red', 'Blue', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return \`\${colors[index % colors.length]} \${fruits[index % fruits.length]} \${index + 1}\`;
  });

const simulatedDelay = (window as any).Cypress ? 5 : 300;

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInputArbitrary,
  useComboboxInput
);

const loadingDotsStencil = createStencil({
  base: {
    transition: 'opacity 100ms ease',
    '& [data-part="loading-dots"]': {
      display: 'flex',
      transform: 'scale(0.3)',
    },
  },
  modifiers: {
    isLoading: {
      true: {
        opacity: system.opacity.full,
      },
      false: {
        opacity: system.opacity.zero,
      },
    },
  },
});

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<{isLoading?: boolean}>(({isLoading, ...elemProps}, Element) => {
  return (
    <InputGroup>
      <InputGroup.Input as={Element} {...elemProps} />
      <InputGroup.InnerEnd
        cs={loadingDotsStencil({isLoading})}
        width={px2rem(20)}
        data-loading={isLoading}
      >
        <LoadingDots data-part="loading-dots" />
      </InputGroup.InnerEnd>
      <InputGroup.InnerEnd>
        <InputGroup.ClearButton data-testid="clear" />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
});

export const Autocomplete = () => {
  const {model, loader} = useComboboxLoader(
    {
      // You can start with any number that makes sense.
      total: 0,

      // Pick whatever number makes sense for your API
      pageSize: 20,

      // A load function that will be called by the loader. You must return a promise that returns
      // an object like \`{items: [], total: 0}\`. The \`items\` will be merged into the loader's cache
      async load({pageNumber, pageSize, filter}) {
        return new Promise<LoadReturn<string>>(resolve => {
          // simulate a server response by resolving after a period of time
          setTimeout(() => {
            // simulate paging and filtering based on pre-computed items
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;
            const filteredItems = options.filter(item => {
              if (filter === '' || typeof filter !== 'string') {
                return true;
              }
              return item.toLowerCase().includes(filter.toLowerCase());
            });

            const total = filteredItems.length;
            const items = filteredItems.slice(start, end);

            resolve({
              items,
              total,
            });
          }, simulatedDelay);
        });
      },
      onShow() {
        // The \`shouldLoad\` cancels while the combobox menu is hidden, so let's load when it is
        // visible
        loader.load();
      },
    },
    useComboboxModel
  );

  return (
    <FormField orientation="horizontalStart" isRequired>
      <FormField.Label>Fruit</FormField.Label>
      <FormField.Field>
        <Combobox model={model} onChange={event => console.log('input', event.currentTarget.value)}>
          <FormField.Input as={AutoCompleteInput} isLoading={loader.isLoading} />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              {model.state.items.length < 1 ? (
                <StyledMenuItem as="span">No Results Found</StyledMenuItem>
              ) : (
                <Combobox.Menu.List cs={{maxHeight: px2rem(200)}}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )}
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
        </Combobox>
      </FormField.Field>
    </FormField>
  );
};
`;function y(n){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...g(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{of:N}),`
`,e.jsx(o.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsxs(o.p,{children:["Combobox is an ",e.jsx(o.em,{children:"abstract"}),` compound component - it should not be used on its own, but used as a base
to create combobox components. The Combobox system provides components, models, loaders, and
elemProps hooks.`]}),`
`,e.jsxs(o.p,{children:[`The term "Combobox" is based on the
`,e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"Combobox Pattern"}),` as defined in the ARIA
Authoring Practices Guide (APG):`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.a,{href:"https://w3c.github.io/aria/#combobox",rel:"nofollow",children:"combobox"}),` is an input widget with an associated popup
that enables users to select a value for the combobox from a collection of possible values.`]}),`
`]}),`
`,e.jsx(o.p,{children:'Examples of a "combobox" would be date pickers, autocomplete, and select components.'}),`
`,e.jsx(o.h2,{id:"combobox-value-restriction",children:"Combobox value restriction"}),`
`,e.jsx(o.p,{children:'A Combobox can either be either "constrained" or "arbitrary".'}),`
`,e.jsx(o.h3,{id:"constrained",children:"Constrained"}),`
`,e.jsxs(o.p,{children:[`A constrained combobox can only have a value from a set of values presented as options. The user can
pick from these values, but cannot input a value outside the options provided. Constrained
comboboxes use the `,e.jsx(o.a,{href:"#usecomboboxinputconstrained",children:"useComboboxInputConstrained"}),` hook and often have
two separate `,e.jsx(o.code,{children:"input"})," elements."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:[`user input - This is the visible input and it should contain user-friendly values. Calls to
`,e.jsx(o.code,{children:".focus()"})," or ",e.jsx(o.code,{children:".blur()"})," are redirected to this input. Any prop passed to the ",e.jsx(o.code,{children:"*.Input"}),` component
that is not directly related to forms will be passed here (i.e. `,e.jsx(o.code,{children:"data-testid"}),", ",e.jsx(o.code,{children:"aria-*"}),", etc)."]}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:["form input - This input is only visible to forms and the ",e.jsx(o.code,{children:"value"}),` will usually be server IDs. If
the combobox options don't have an ID and only use user values, the value of this input will be
the same as the user input. Any prop related to the function of forms will be passed here. For
example, the `,e.jsx(o.code,{children:"name"})," attribute will be passed here. The ",e.jsx(o.code,{children:"ref"})," will be pointed to this element."]}),`
`]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Select"})," and ",e.jsx(o.code,{children:"MultiSelect"})," are examples of constrained comboboxes."]}),`
`,e.jsx(o.h3,{id:"arbitrary",children:"Arbitrary"}),`
`,e.jsxs(o.p,{children:[`An arbitrary combobox allows the user to enter any value. The list of options are presented as
suggestions and selecting an option will prefill the combobox with the value of the option. The user
is still allowed to modify the combobox even after an option is entered. With arbitrary comboboxes,
there is only one `,e.jsx(o.code,{children:"input"}),` element. Arbitrary combobox inputs should use the
`,e.jsx(o.a,{href:"#usecomboboxinputarbirary",children:"useComboboxInputArbitrary"})," hook. Typeahead or ",e.jsx(o.code,{children:"Autocomplete"}),` are
examples are arbitrary value comboboxes.`]}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h3,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsxs(o.p,{children:["This example shows an Autocomplete example using ",e.jsx(o.code,{children:"FormField"}),", ",e.jsx(o.code,{children:"InputGroup"}),", and the ",e.jsx(o.code,{children:"Combobox"}),`
components to make an autocomplete form field. It uses `,e.jsx(o.a,{href:"#usecomboboxloader",children:"useComboboxLoader"}),` to
make mock API calls using `,e.jsx(o.code,{children:"setTimeout"}),`. Your application may use
`,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",rel:"nofollow",children:"fetch"}),`,
`,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",rel:"nofollow",children:"WebSockets"}),`, or other means of
communicating with a server.`]}),`
`,e.jsx(o.p,{children:"An Autocomplete is an example of an arbitrary combobox."}),`
`,e.jsx(S,{code:c}),`
`,e.jsx(o.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(o.p,{children:["Combobox and its subcomponents support custom styling via the ",e.jsx(o.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(m,{name:"Combobox",fileName:"/react/",hideDescription:!0}),`
`,e.jsx(o.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(m,{name:"useComboboxLoader",fileName:"/react/"}),`
`,e.jsx(m,{name:"useComboboxInputConstrained",fileName:"/react/"}),`
`,e.jsx(m,{name:"useComboboxInputArbitrary",fileName:"/react/"})]})}function X(n={}){const{wrapper:o}={...g(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(y,{...n})}):y(n)}const Y={title:"Features/Combobox",component:i,tags:["autodocs"],parameters:{docs:{page:X}}},l={render:c};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: AutocompleteExample
}`,...l.parameters?.docs?.source}}};const V=["Autocomplete"];export{l as Autocomplete,V as __namedExportsOrder,Y as default};
