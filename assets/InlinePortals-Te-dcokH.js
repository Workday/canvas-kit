import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as x}from"./index-3YbjYt95.js";import{ae as k}from"./index-ESmbJpvJ.js";import{E as P}from"./union-C7oNDQNC.js";import{r as p}from"./index-IfJi-UCQ.js";import{P as d}from"./Popper-DYfGvA07.js";import{D as h}from"./DeleteButton-C4DcqQO8.js";import{u as j}from"./useUniqueId-BoA5684E.js";import{u as R}from"./getTransformFromPlacement-C8S8FYK9.js";import{u as b}from"./useInitialFocus-70_5kNba.js";import{u as S}from"./useCloseOnEscape-Dxv9jUxq.js";import{u as w,c as C}from"./useReturnFocus-CNQf_iaV.js";import{F as c}from"./Flex-DOA8e2vA.js";import{c as a}from"./cs-rfTTo7Bg.js";import{P as s}from"./Popup-CdIMi-8Z.js";import{B as v}from"./Box-5BC0dNqB.js";import{g as y,p as F}from"./index-DE-upP0k.js";import{p as I}from"./px2rem-C0KbprIx.js";import"./iframe-DtS5-yNa.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./components-eQ_txa-f.js";import"./StatusIndicator-CbQX6SBJ.js";import"./Text-BLaZcOr9.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./cornerShape-B7b4ymMc.js";import"./Card-BsFqe5CX.js";import"./ExternalHyperlink-BB6WUMYJ.js";import"./Hyperlink-C1HZBOiW.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-CMbqORtK.js";import"./BaseButton-CivL5PJl.js";import"./Button-wmECgaEK.js";import"./lerna-DP3jw_1V.js";import"./CanvasProvider-CFtqHR-b.js";import"./index-pMzza0x6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-B8mUJnbM.js";import"./useTooltip-CS5bngwT.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-gK2o1_HT.js";import"./ColorPicker-BXGUHqxL.js";import"./ColorInput-CiSvL7NF.js";import"./check-small-BqSDQIle.js";import"./index-Dusw0zrf.js";import"./TextInput-ChkYUV9e.js";import"./types-DXdjelYI.js";import"./FormField-CC8jg04Q.js";import"./models-CHTjB2ql.js";import"./check-Ds6vsrAM.js";import"./Expandable-BSiDPhTP.js";import"./Avatar-DBO0rhtW.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-DMvuxPp6.js";import"./useFocusRedirect-2jfUi4it.js";import"./usePopupTarget-wbqfrIA1.js";import"./Breadcrumbs-BYAN7ccz.js";import"./useOverflowListTarget-BMAUIgft.js";import"./useListItemRegister-tmhAPbAN.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D_vEOnvj.js";import"./OverflowTooltip-BAg5tNv1.js";import"./useListItemSelect-C0k6gewm.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-Bvawp_fh.js";import"./useConstant-B_SD0x5s.js";import"./x-B1faap_l.js";const B=a({width:I(320)}),D=a({gap:y.md,padding:F.xs}),E=a({gap:y.md,alignItems:"flex-start",flexDirection:"column"}),M=a({marginBlock:"0"}),g=()=>{const o=j(),t=p.useRef(null),l=p.useRef(null),i=R({initialFocusRef:l}),n=i.state.visibility!=="hidden",[r,m]=p.useState(!1);return b(i),S(i),w(i),p.useEffect(()=>{if(!n||!r)return;const u=l.current;u&&requestAnimationFrame(()=>{C(u)})},[n,r]),p.useLayoutEffect(()=>{n&&t.current&&!r&&(d.pushStackContext(t.current),m(!0)),!n&&r&&(d.popStackContext(t.current),m(!1))},[n,r]),e.jsxs(c,{cs:E,children:[e.jsx(c,{children:e.jsxs(s,{model:i,children:[e.jsx(s.Target,{as:h,children:"Delete Item"}),e.jsx("div",{ref:t}),n&&r?e.jsx(s.Popper,{placement:"top",children:e.jsxs(s.Card,{cs:B,"aria-describedby":o,children:[e.jsx(s.Heading,{children:"Delete Item"}),e.jsx(s.Body,{children:e.jsx(v,{as:"p",id:o,cs:M,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(c,{cs:D,children:[e.jsx(s.CloseButton,{ref:l,children:"Cancel"}),e.jsx(s.CloseButton,{as:h,children:"Delete"})]})]})}):null]})}),e.jsx("p",{children:"This content should come after the popup in the reading order. When someone uses a screen reader or moves through the page with tabbing, they will read or reach this content only after the popup content is shown. This helps keep the page easy to follow and makes sure that the popup is announced before any information that comes next."})]})};g.__RAW__=`import * as React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {changeFocus, useUniqueId} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(320),
});

const flexStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.xs,
});

const layoutStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

/**
 * Portals popup content into a sentinel div after the trigger (via PopupStack.pushStackContext)
 * so DOM reading order matches page context. Uses a two-phase open so pushStackContext runs
 * before Popper mounts and registers with the stack.
 */
export const InlinePortalPopup = () => {
  const messageId = useUniqueId();
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({initialFocusRef});
  const visible = model.state.visibility !== 'hidden';
  const [portalReady, setPortalReady] = React.useState(false);

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useReturnFocus(model);

  // Defer initial focus until Popper content is mounted. useInitialFocus runs when visible while
  // stackRef can still point at an empty sentinel (second open) and throws.
  React.useEffect(() => {
    if (!visible || !portalReady) {
      return;
    }
    const el = initialFocusRef.current;
    if (!el) {
      return;
    }
    requestAnimationFrame(() => {
      changeFocus(el);
    });
  }, [visible, portalReady]);

  React.useLayoutEffect(() => {
    if (visible && sentinelRef.current && !portalReady) {
      PopupStack.pushStackContext(sentinelRef.current);
      setPortalReady(true);
    }
    if (!visible && portalReady) {
      PopupStack.popStackContext(sentinelRef.current!);
      setPortalReady(false);
    }
  }, [visible, portalReady]);

  return (
    <Flex cs={layoutStyles}>
      <Flex>
        <Popup model={model}>
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <div ref={sentinelRef} />
          {visible && portalReady ? (
            <Popup.Popper placement="top">
              <Popup.Card cs={cardStyles} aria-describedby={messageId}>
                <Popup.Heading>Delete Item</Popup.Heading>
                <Popup.Body>
                  <Box as="p" id={messageId} cs={bodyStyles}>
                    Are you sure you'd like to delete the item titled &apos;My Item&apos;?
                  </Box>
                </Popup.Body>
                <Flex cs={flexStyles}>
                  <Popup.CloseButton ref={initialFocusRef}>Cancel</Popup.CloseButton>
                  <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
                </Flex>
              </Popup.Card>
            </Popup.Popper>
          ) : null}
        </Popup>
      </Flex>
      <p>
        This content should come after the popup in the reading order. When someone uses a screen
        reader or moves through the page with tabbing, they will read or reach this content only
        after the popup content is shown. This helps keep the page easy to follow and makes sure
        that the popup is announced before any information that comes next.
      </p>
    </Flex>
  );
};
`;function f(o){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Guides/Accessibility/Testing/Inline Portals"}),`
`,e.jsxs(t.h2,{id:"inline-portal-with-popupstack",children:["Inline portal with ",e.jsx(t.code,{children:"PopupStack"})]}),`
`,e.jsxs(t.p,{children:[`This example builds on the patterns described in
`,e.jsx(t.a,{href:"?path=/docs/guides-accessibility-inline-popups--docs",children:"Guides > Accessibility > Inline Popups"}),`. It
does `,e.jsx(t.strong,{children:"not"}),` use a focus trap. For modal dialogs with overlay and focus trap, use the
`,e.jsx(t.a,{href:"?path=/docs/components-popups-modal--docs",children:e.jsx(t.strong,{children:"Modal"})})," component instead."]}),`
`,e.jsxs(t.p,{children:["Keep using a portal (default stacking and positioning) but mount the portal ",e.jsx(t.strong,{children:`into a sentinel
element`})," placed right after the trigger. Call ",e.jsx(t.code,{children:"PopupStack.pushStackContext(sentinelElement)"}),` while
the popup is open so new stack items append to that sentinel instead of `,e.jsx(t.code,{children:"body"}),". ",e.jsx(t.strong,{children:"Tradeoff:"}),` You
still get `,e.jsx(t.strong,{children:"ancestor overflow"}),` clipping—the portaled content is a descendant of the sentinel, not
`,e.jsx(t.code,{children:"document.body"}),". You must also handle ",e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"PopupStack"})," context"]}),` (push/pop on open/close), which is
more moving parts than `,e.jsx(t.code,{children:"portal={false}"})," alone. Use ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"useInitialFocus"})}),` so opening the popup is
announced when focus enters the dialog.`]}),`
`,e.jsx(P,{code:g})]})}function pt(o={}){const{wrapper:t}={...x(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(f,{...o})}):f(o)}export{pt as default};
