import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as d}from"./index-3YbjYt95.js";import{ae as h}from"./index-ESmbJpvJ.js";import{E as o}from"./union-C7oNDQNC.js";import"./index-IfJi-UCQ.js";import{C as c}from"./CanvasProvider-CFtqHR-b.js";import{m as u}from"./index-pMzza0x6.js";import{C as s}from"./Card-BsFqe5CX.js";import{P as m}from"./PrimaryButton-C5mhTCq5.js";import{M as a}from"./Menu-D_vEOnvj.js";import{s as x}from"./sanaTheme-QcIDiHtn.js";import{u as j}from"./getTransformFromPlacement-C8S8FYK9.js";import{u as v}from"./useInitialFocus-70_5kNba.js";import{P as t}from"./Popup-CdIMi-8Z.js";import{S as y}from"./SecondaryButton-CMbqORtK.js";import"./iframe-DtS5-yNa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./px2rem-C0KbprIx.js";import"./components-eQ_txa-f.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-CbQX6SBJ.js";import"./Text-BLaZcOr9.js";import"./mergeStyles-C5CqGCLQ.js";import"./Box-5BC0dNqB.js";import"./index-Dusw0zrf.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-B_SD0x5s.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./cornerShape-B7b4ymMc.js";import"./index-DE-upP0k.js";import"./ExternalHyperlink-BB6WUMYJ.js";import"./Hyperlink-C1HZBOiW.js";import"./external-link-ChL2h1Cn.js";import"./lerna-DP3jw_1V.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./useCloseOnEscape-Dxv9jUxq.js";import"./Popper-DYfGvA07.js";import"./useUniqueId-BoA5684E.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-gK2o1_HT.js";import"./ColorPicker-BXGUHqxL.js";import"./ColorInput-CiSvL7NF.js";import"./check-small-BqSDQIle.js";import"./TextInput-ChkYUV9e.js";import"./types-DXdjelYI.js";import"./FormField-CC8jg04Q.js";import"./models-CHTjB2ql.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSiDPhTP.js";import"./Avatar-DBO0rhtW.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DMvuxPp6.js";import"./useReturnFocus-CNQf_iaV.js";import"./useFocusRedirect-2jfUi4it.js";import"./usePopupTarget-wbqfrIA1.js";import"./Breadcrumbs-BYAN7ccz.js";import"./useOverflowListTarget-BMAUIgft.js";import"./useListItemRegister-tmhAPbAN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-BAg5tNv1.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DOA8e2vA.js";import"./Table-Bvawp_fh.js";import"./useListItemSelect-C0k6gewm.js";import"./chevron-right-Bg_6xPk9.js";import"./x-B1faap_l.js";const l=()=>e.jsx(c,{theme:{brand:{primary:{600:u}}},children:e.jsxs(s,{children:[e.jsx(s.Heading,{children:"Brand scope"}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Only primary is set — buttons and selected menu items update. Focus rings stay default."}),e.jsx(m,{children:"Primary"}),e.jsx(a,{initialSelectedIds:["selected"],children:e.jsx(a.Card,{children:e.jsxs(a.List,{children:[e.jsx(a.Item,{id:"other",children:"Other item"}),e.jsx(a.Item,{id:"selected","aria-selected":"true",children:"Selected item"})]})})})]})]})});l.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
`;const p=()=>{const r=j();return v(r),e.jsx(c,{theme:x,"data-theme":"sana-canvas",children:e.jsxs(t,{model:r,children:[e.jsx(t.Target,{as:y,children:"Open Menu"}),e.jsx(t.Popper,{children:e.jsx(t.Card,{children:e.jsxs(t.Body,{children:[e.jsxs(a,{children:[e.jsx(a.Item,{children:"Option 1"}),e.jsx(a.Item,{children:"Option 2"}),e.jsx(a.Item,{children:"Option 3"})]}),e.jsx(m,{children:"Hello World"})]})})})]})})};p.__RAW__=`import React from 'react';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';

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
        <Popup.Target as={SecondaryButton}>Open Menu</Popup.Target>
        <Popup.Popper>
          <Popup.Card>
            <Popup.Body>
              <Menu>
                <Menu.Item>Option 1</Menu.Item>
                <Menu.Item>Option 2</Menu.Item>
                <Menu.Item>Option 3</Menu.Item>
              </Menu>
              <PrimaryButton>Hello World</PrimaryButton>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
};
`;function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Features/Theming/Overview"}),`
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"You set"}),e.jsx(n.th,{children:"Components affected"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"brand.primary['600']"})," alone"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"PrimaryButton"}),", selected ",e.jsx(n.code,{children:"Menu.Item"})," (text + background)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.primary['500']"})}),e.jsxs(n.td,{children:["Focus rings, border primary (independent of ",e.jsx(n.code,{children:"600"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.action.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"PrimaryButton"})," (read before ",e.jsx(n.code,{children:"brand.primary"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.critical.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TextInput"})," error, critical accents"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.caution.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TextInput"})," caution, caution focus"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.positive.*"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"})," checked states"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"brand.neutral.*"})}),e.jsx(n.td,{children:"Neutral brand text/surfaces"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"selected.fg"})," / ",e.jsx(n.code,{children:"selected.surface"})]}),e.jsx(n.td,{children:"Selected list/menu states directly"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Focus does not follow primary."})," Setting only ",e.jsx(n.code,{children:"brand.primary['600']"}),` leaves focus rings at the
default blue unless you also set `,e.jsx(n.code,{children:"brand.primary['500']"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

<CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}}>
  <ScopedSection />
</CanvasProvider>
`})}),`
`,e.jsx(o,{code:l}),`
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
microfrontends, third-party shells), a nested `,e.jsx(n.code,{children:"data-theme"})," alone does ",e.jsx(n.strong,{children:"not"}),` reach portaled
popups. Pass both `,e.jsx(n.code,{children:'data-theme="sana-canvas"'})," (for in-tree UI) and ",e.jsx(n.code,{children:"sanaCanvasProviderTheme"}),` (so
Canvas Kit forwards Sana brand variables onto the popup stack container):`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';

<CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
  <App />
</CanvasProvider>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sanaCanvasProviderTheme"}),` is also useful in tests without global Sana CSS or with custom popup
hosts outside the normal document flow.`]}),`
`,e.jsx(o,{code:p}),`
`,e.jsxs(n.p,{children:[`See the
`,e.jsx(n.a,{href:"?path=/story/features-theming--sana-canvas",children:"Sana Canvas"}),` Storybook story for a side-by-side
comparison of global and scoped branding.`]}),`
`,e.jsxs(n.p,{children:[`View token documentation
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",rel:"nofollow",children:"here"}),"."]})]})}function Ve(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{Ve as default};
