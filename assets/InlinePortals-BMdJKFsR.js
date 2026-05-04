import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as x}from"./index-3YbjYt95.js";import{E as k}from"./union-CT45YaQX.js";import{r as a}from"./index-IfJi-UCQ.js";import{P as d}from"./Popper-DTfQE2mh.js";import{D as h}from"./DeleteButton-BPr-O50v.js";import{u as P}from"./useUniqueId-DC-hMIDg.js";import{u as j}from"./getTransformFromPlacement-Dk4LTPXM.js";import{u as R}from"./useInitialFocus-BKfmV5gZ.js";import{u as b}from"./useCloseOnEscape-BL74-I4Y.js";import{u as S,c as w}from"./useReturnFocus-Xz-_vB17.js";import{F as c}from"./Flex-ahHEmhSv.js";import{c as l}from"./cs-DvbI9OYs.js";import{P as s}from"./Popup-B-4w8IgE.js";import{B as C}from"./Box-CfIP0C5s.js";import{g as y,p as v}from"./index-CYsyLHR7.js";import{p as F}from"./px2rem-C0KbprIx.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./components-DlilqqSw.js";import"./StatusIndicator-BBevkT_x.js";import"./Text-Tayi47N3.js";import"./mergeStyles-DCTLot6K.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-BfP_SOlX.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-Cg4j9RPw.js";import"./lerna-CYqneavZ.js";import"./CanvasProvider-0Y3auRRO.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./TertiaryButton-a9_U68ho.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-C7vP30km.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./index-C5MVqyzH.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./FormField-BYE5lD9z.js";import"./models-CHTjB2ql.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./useFocusRedirect-DOtUfDeI.js";import"./usePopupTarget-BtGg5hr7.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Table-C_Pr0zfe.js";import"./useConstant-CUZppmaV.js";import"./x-BnLC6lG-.js";const I=l({width:F(320)}),B=l({gap:y.md,padding:v.xs}),D=l({gap:y.md,alignItems:"flex-start",flexDirection:"column"}),E=l({marginBlock:"0"}),g=()=>{const o=P(),t=a.useRef(null),n=a.useRef(null),p=j({initialFocusRef:n}),r=p.state.visibility!=="hidden",[i,u]=a.useState(!1);return R(p),b(p),S(p),a.useEffect(()=>{if(!r||!i)return;const m=n.current;m&&requestAnimationFrame(()=>{w(m)})},[r,i]),a.useLayoutEffect(()=>{r&&t.current&&!i&&(d.pushStackContext(t.current),u(!0)),!r&&i&&(d.popStackContext(t.current),u(!1))},[r,i]),e.jsxs(c,{cs:D,children:[e.jsx(c,{children:e.jsxs(s,{model:p,children:[e.jsx(s.Target,{as:h,children:"Delete Item"}),e.jsx("div",{ref:t}),r&&i?e.jsx(s.Popper,{placement:"top",children:e.jsxs(s.Card,{cs:I,"aria-describedby":o,children:[e.jsx(s.Heading,{children:"Delete Item"}),e.jsx(s.Body,{children:e.jsx(C,{as:"p",id:o,cs:E,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(c,{cs:B,children:[e.jsx(s.CloseButton,{ref:n,children:"Cancel"}),e.jsx(s.CloseButton,{as:h,children:"Delete"})]})]})}):null]})}),e.jsx("p",{children:"This content should come after the popup in the reading order. When someone uses a screen reader or moves through the page with tabbing, they will read or reach this content only after the popup content is shown. This helps keep the page easy to follow and makes sure that the popup is announced before any information that comes next."})]})};g.__RAW__=`import * as React from 'react';

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
`;function f(o){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...x(),...o.components},{Meta:n}=t;return n||M("Meta"),e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Guides/Accessibility/Testing/Inline Portals"}),`
`,e.jsxs(t.h2,{id:"inline-portal-with-popupstack",children:["Inline portal with ",e.jsx(t.code,{children:"PopupStack"})]}),`
`,e.jsxs(t.p,{children:[`This example builds on the patterns described in
`,e.jsx(t.a,{href:"?path=/docs/guides-accessibility-inline-popups--docs",children:"Guides > Accessibility > Inline Popups"}),`.
It does `,e.jsx(t.strong,{children:"not"}),` use a focus trap. For modal dialogs with overlay and focus trap, use the
`,e.jsx(t.a,{href:"?path=/docs/components-popups-modal--docs",children:e.jsx(t.strong,{children:"Modal"})})," component instead."]}),`
`,e.jsxs(t.p,{children:["Keep using a portal (default stacking and positioning) but mount the portal ",e.jsx(t.strong,{children:`into a sentinel
element`})," placed right after the trigger. Call ",e.jsx(t.code,{children:"PopupStack.pushStackContext(sentinelElement)"}),` while
the popup is open so new stack items append to that sentinel instead of `,e.jsx(t.code,{children:"body"}),". ",e.jsx(t.strong,{children:"Tradeoff:"}),` You
still get `,e.jsx(t.strong,{children:"ancestor overflow"}),` clipping—the portaled content is a descendant of the sentinel, not
`,e.jsx(t.code,{children:"document.body"}),". You must also handle ",e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"PopupStack"})," context"]}),` (push/pop on open/close), which is
more moving parts than `,e.jsx(t.code,{children:"portal={false}"})," alone. Use ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"useInitialFocus"})}),` so opening the popup is
announced when focus enters the dialog.`]}),`
`,e.jsx(k,{code:g})]})}function ot(o={}){const{wrapper:t}={...x(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(f,{...o})}):f(o)}function M(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ot as default};
