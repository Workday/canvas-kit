import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as l}from"./index-3YbjYt95.js";import{ae as u}from"./index-B9ymSqEQ.js";import{E as d}from"./union-Bl5K5Dnq.js";import"./index-IfJi-UCQ.js";import{C as m}from"./CanvasProvider-DNBEbcF4.js";import{m as x}from"./index-kj8ZfNNN.js";import{C as o}from"./Card-CYKNWwWd.js";import{P as i}from"./PrimaryButton-aum5gdB5.js";import{M as r}from"./Menu-kcfqlzjO.js";import{s as j}from"./sanaTheme-DcGPk8VY.js";import{u as v}from"./getTransformFromPlacement-BLUVWzCJ.js";import{u as y}from"./useInitialFocus-BrnRXErF.js";import{P as t}from"./Popup-BkAaHxKC.js";import{F as s}from"./FormField-BYGgJeBh.js";import{T as b}from"./TextInput-B08tbWWW.js";import"./iframe-Ck61GRTQ.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CkftECn1.js";import"./Svg-C00Tmbol.js";import"./px2rem-C0KbprIx.js";import"./components-BduoFc0l.js";import"./cs-CmRirKzJ.js";import"./StatusIndicator-BwxRjdFx.js";import"./Text-BafGAOu0.js";import"./mergeStyles-BqEZTk84.js";import"./Box-DVE1QV2w.js";import"./index-DZtdzgZp.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-CkgKa82T.js";import"./grid-snaFRi1S.js";import"./cornerShape-BWVxTIwC.js";import"./index-udXzHylk.js";import"./ExternalHyperlink-DJmm2Dtm.js";import"./Hyperlink-DmvJhv_F.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-BEEfNfsC.js";import"./BaseButton-44-j6NiF.js";import"./Button-CqKi3FI5.js";import"./lerna-BNXKUBRi.js";import"./Tooltip-DuMKY5lE.js";import"./useTooltip-Be2IlHUD.js";import"./useCloseOnEscape-D68v2Xn6.js";import"./Popper-xGJeroz5.js";import"./useUniqueId-BoA5684E.js";import"./TertiaryButton-CWVeGnd9.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DVM1BeSA.js";import"./ColorPicker-BU_IyJqu.js";import"./ColorInput-r8MyRxxI.js";import"./check-small-BqSDQIle.js";import"./check-Ds6vsrAM.js";import"./Expandable-BY2EcRhU.js";import"./Avatar-CrbYWV51.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DrkxiIBB.js";import"./useReturnFocus-CctAy0WF.js";import"./useFocusRedirect-BLL9rjzj.js";import"./usePopupTarget-Cpbf1SBk.js";import"./Breadcrumbs-Dlz2I1L8.js";import"./useOverflowListTarget-1Iqk5Xbo.js";import"./useListItemRegister-D7GXdvJ4.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-fccb4IcO.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-CFOa3i8g.js";import"./Table-DAJEro48.js";import"./useListItemSelect-CmjbAwcN.js";import"./x-B1faap_l.js";import"./types-DXdjelYI.js";const p=()=>e.jsx(m,{theme:{brand:{primary:{600:x}}},children:e.jsxs(o,{children:[e.jsx(o.Heading,{children:"Brand scope"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Only primary is set — buttons and selected menu items update. Focus rings stay default."}),e.jsx(i,{children:"Primary"}),e.jsx(r,{initialSelectedIds:["selected"],children:e.jsx(r.Card,{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{id:"other",children:"Other item"}),e.jsx(r.Item,{id:"selected","aria-selected":"true",children:"Selected item"})]})})})]})]})});p.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {base} from '@workday/canvas-tokens-web';

export const ThemingBrandScope = () => (
  <CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}}>
    <Card>
      <Card.Heading>Brand scope</Card.Heading>
      <Card.Body>
        <p>
          Only primary is set — buttons and selected menu items update. Focus rings stay default.
        </p>
        <PrimaryButton>Primary</PrimaryButton>
        <Menu initialSelectedIds={['selected']}>
          <Menu.Card>
            <Menu.List>
              <Menu.Item id="other">Other item</Menu.Item>
              <Menu.Item id="selected" aria-selected="true">
                Selected item
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu>
      </Card.Body>
    </Card>
  </CanvasProvider>
);
`;const h=()=>{const a=v();return y(a),e.jsx(m,{theme:j,"data-theme":"sana-canvas",children:e.jsxs(t,{model:a,children:[e.jsx(t.Target,{as:i,children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{children:[e.jsxs(t.Body,{children:[e.jsx(r,{initialSelectedIds:["selected"],children:e.jsxs(r.List,{role:"listbox",children:[e.jsx(r.Option,{"data-id":"selected",children:"Option 1"}),e.jsx(r.Option,{children:"Option 2"}),e.jsx(r.Option,{children:"Option 3"})]})}),e.jsx(i,{children:"Hello World"})]}),e.jsxs(s,{children:[e.jsx(s.Label,{children:"Example text input"}),e.jsx(s.Field,{children:e.jsx(s.Input,{as:b})})]})]})})]})})};h.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';

/**
 * Scoped Sana setup for popup parity: \`data-theme\` themes the in-tree UI, and
 * \`sanaCanvasProviderTheme\` forwards brand CSS variables onto portaled popups
 * (menus, selects, modals) that render under \`document.body\`.
 */
export const SimplifiedSetup = () => {
  const myModel = usePopupModel();
  useCloseOnOutsideClick(myModel);
  return (
    <CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
      <Popup model={myModel}>
        <Popup.Target as={PrimaryButton}>Open Menu</Popup.Target>
        <Popup.Popper>
          <Popup.Card>
            <Popup.Body>
              <Menu initialSelectedIds={['selected']}>
                <Menu.List role="listbox">
                  <Menu.Option data-id="selected">Option 1</Menu.Option>
                  <Menu.Option>Option 2</Menu.Option>
                  <Menu.Option>Option 3</Menu.Option>
                </Menu.List>
              </Menu>
              <PrimaryButton>Hello World</PrimaryButton>
            </Popup.Body>
            <FormField>
              <FormField.Label>Example text input</FormField.Label>
              <FormField.Field>
                <FormField.Input as={TextInput} />
              </FormField.Field>
            </FormField>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
};
`;function c(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Features/Theming/Overview"}),`
`,e.jsx(n.h1,{id:"canvas-kit-theming-guide",children:"Canvas Kit Theming Guide"}),`
`,e.jsxs(n.p,{children:["Canvas Kit v16 components are Sana-aligned out of the box. The Sana Canvas ",e.jsx(n.strong,{children:"theme"}),` is a separate,
opt-in step that updates brand colors, neutrals, surfaces, and shapes at the application
level.`]}),`
`,e.jsxs(n.p,{children:[`For a full list of what changes when you opt in, see the
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v-16-0-overview--docs#sana-canvas-theme",rel:"nofollow",children:"v16 Upgrade Guide"}),"."]}),`
`,e.jsx(n.h2,{id:"sana-canvas-theme",children:"Sana Canvas Theme"}),`
`,e.jsxs(n.p,{children:["Import the Sana variables ",e.jsx(n.strong,{children:"last"})," in your root CSS and set ",e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on ",e.jsx(n.code,{children:"<html>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* index.css — order matters */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
@import '@workday/canvas-tokens-web/css/component/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/sana/_variables.css';

:root {
  /* Optional — override only if you have a custom brand color */
  --cnvs-brand-primary-600: var(--cnvs-base-palette-magenta-600);
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="en" data-theme="sana-canvas"></html>
`})}),`
`,e.jsx(n.h2,{id:"classic-canvas-without-sana-theme",children:"Classic Canvas (without Sana theme)"}),`
`,e.jsxs(n.p,{children:["If you are not opting into the Sana Canvas theme, omit ",e.jsx(n.code,{children:"data-theme"})," from ",e.jsx(n.code,{children:"<html>"}),". The ",e.jsx(n.code,{children:":root"}),`
tokens apply as-is — no `,e.jsx(n.code,{children:"theme"})," prop on ",e.jsx(n.code,{children:"CanvasProvider"})," is required."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="en"></html>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:["The sana stylesheet only defines ",e.jsx(n.code,{children:'[data-theme="sana-canvas"]'}),` overrides. Without that attribute,
those rules do not apply.`]}),`
`,e.jsxs(n.p,{children:["If your application ",e.jsx(n.strong,{children:"has"}),` opted into Sana globally but one subsection needs classic Canvas branding,
use `,e.jsx(n.code,{children:"defaultBranding"})," on a scoped ",e.jsx(n.code,{children:"CanvasProvider"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, defaultBranding} from '@workday/canvas-kit-react/common';

<CanvasProvider className={defaultBranding}>
  <ClassicCanvasSection />
</CanvasProvider>
`})}),`
`,e.jsx(n.h2,{id:"scoped-theming",children:"Scoped Theming"}),`
`,e.jsxs(n.p,{children:["Most application teams should use the Sana Canvas theme globally and not pass a ",e.jsx(n.code,{children:"theme"}),` prop to
`,e.jsx(n.code,{children:"CanvasProvider"}),`. Use scoped theming only when a section of your app needs a different brand — for
example, embedding Canvas in a third-party application, multi-tenant branding, or popup parity.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"theme"})," prop accepts a numerical ",e.jsx(n.code,{children:"brand"})," object. Each key maps 1:1 to a ",e.jsx(n.code,{children:"--cnvs-brand-*"}),` CSS
variable.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"You set"}),e.jsx(n.th,{children:"Components affected"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"brand.primary['600']"})," alone"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"PrimaryButton"}),", selected ",e.jsx(n.code,{children:"Menu.Item"})," (text + background)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"focus.primary"})}),e.jsx(n.td,{children:"Focus rings, border primary (independent of primary brand)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.action.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"PrimaryButton"})," (read before ",e.jsx(n.code,{children:"brand.primary"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.critical.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TextInput"})," error, critical accents"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.caution.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TextInput"})," caution, caution focus"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.positive.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"})," checked states"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.neutral.*"})}),e.jsx(n.td,{children:"Neutral brand text/surfaces"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"selected.fg"})," / ",e.jsx(n.code,{children:"selected.surface"})]}),e.jsx(n.td,{children:"Selected list/menu states directly"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Focus does not follow primary."})," Setting only ",e.jsx(n.code,{children:"brand.primary['600']"}),` leaves focus rings at the
default blue unless you also set `,e.jsx(n.code,{children:"focus.primary"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

<CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}}>
  <ScopedSection />
</CanvasProvider>
`})}),`
`,e.jsx(d,{code:p}),`
`,e.jsxs(n.p,{children:["Popups (including menus, selects, modals, and toasts) portal to ",e.jsx(n.code,{children:"document.body"}),` — outside the
parent component's DOM hierarchy. How theming reaches them:`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Preferred — you control the document root:"})," set ",e.jsx(n.code,{children:'data-theme="sana-canvas"'})," on the ",e.jsx(n.code,{children:"<html>"}),`
element. Popups inherit Sana CSS variables automatically; no `,e.jsx(n.code,{children:"theme"})," prop needed:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

// <html data-theme="sana-canvas">
<CanvasProvider>
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scoped / no document-root control:"})," if you cannot set ",e.jsx(n.code,{children:"data-theme"})," on ",e.jsx(n.code,{children:"<html>"}),` (embedded apps,
microfrontends, third-party shells), pass both `,e.jsx(n.code,{children:'data-theme="sana-canvas"'}),` and
`,e.jsx(n.code,{children:"sanaCanvasProviderTheme"})," to ",e.jsx(n.code,{children:"CanvasProvider"}),`. The preset supplies Sana's brand variables, and
Canvas Kit forwards the `,e.jsx(n.code,{children:"data-theme"}),` attribute onto the popup stack container — so portaled
menus, modals, and dialogs match the same `,e.jsx(n.code,{children:'[data-theme="sana-canvas"]'}),` selector and pick up the
rest of the theme (shape, depth, type, non-brand system colors) through normal cascade:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';

<CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sanaCanvasProviderTheme"}),` is also useful in tests without global Sana CSS or with custom popup
hosts outside the normal document flow.`]}),`
`,e.jsx(d,{code:h}),`
`,e.jsxs(n.p,{children:[`See the
`,e.jsx(n.a,{href:"?path=/story/features-theming--sana-canvas",children:"Sana Canvas"}),` Storybook story for a side-by-side
comparison of global and scoped branding.`]}),`
`,e.jsxs(n.p,{children:[`View token documentation
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"here"}),"."]})]})}function Ve(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}export{Ve as default};
