import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as pe}from"./index-3YbjYt95.js";import{ae as fe}from"./index-PFj4iSNn.js";import{E as f,c as l}from"./union-F_TYZUZz.js";import{S as xe}from"./Specifications-h8RONBCd.js";import{u as p}from"./getTransformFromPlacement-BtpPb64q.js";import{u as x,a as h}from"./useInitialFocus-CjutxpXk.js";import{u as m}from"./useCloseOnEscape-RijVekFd.js";import{u as y}from"./useReturnFocus-DSLnfxPR.js";import{u as j}from"./useFocusRedirect-aoA_KUZq.js";import{P as t,b as oe}from"./Popup-o70LrEa3.js";import{D as k}from"./DeleteButton-rkbpDV03.js";import{c}from"./cs-rfTTo7Bg.js";import{B as M}from"./Box-DEOrcYtQ.js";import{F as i}from"./Flex-DGNU9JGJ.js";import{p as g}from"./px2rem-C0KbprIx.js";import{p as P,g as u,c as Pe}from"./index-5dfzm_kn.js";import{e as d,r as H}from"./index-IfJi-UCQ.js";import{R as be}from"./index-BDZ5T_cP.js";import{i as ge}from"./info-CEjWPFpM.js";import{a as we}from"./useMount-CAK2BN3_.js";import{u as ke,C as A,h as je}from"./CanvasProvider-BlMVDzJE.js";import{T as te}from"./Tooltip-Dht4-tQx.js";import{a as ce,b as Ce}from"./components-DitCssni.js";import{S as b}from"./SecondaryButton-BpQ17X7-.js";import{u as N}from"./useUniqueId-DC-hMIDg.js";import{u as L}from"./useFocusTrap-BFs5bmws.js";import{s as a,P as de}from"./Popper-CfI3sZZj.js";import{b as Fe}from"./useTooltip-CMv2Kew9.js";import{T as ue}from"./Text-BDAVcU1f.js";import{P as q}from"./PrimaryButton-BadDvs2U.js";import{F as _}from"./FormField-C3WtjF-e.js";import{T as ve}from"./TextInput-DVgi3nRK.js";import{u as Te}from"./Dialog-BwQrEPB9.js";import{u as Be}from"./useModalModel-3WbzoEu3.js";import"./iframe-D2NFHvK2.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./StatusIndicator-Q6MR5HMZ.js";import"./mergeStyles-CxEFJuxU.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./Card-CaPe9j_I.js";import"./ExternalHyperlink-Bjnq9lRa.js";import"./Hyperlink-Bxwna6fP.js";import"./external-link-BZdacz1K.js";import"./lerna-DoVx6CT6.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./TertiaryButton-B_PXBCfh.js";import"./BaseButton-MNe7k-Ow.js";import"./Button-Dptie1iu.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DmEJltuv.js";import"./ColorPicker-jYr8j44j.js";import"./ColorInput-BFzKHuzz.js";import"./check-small-C7Z-gSGs.js";import"./index-DmIRx617.js";import"./check-Bvurkvei.js";import"./Expandable-DU8m2Z7u.js";import"./Avatar-D7pjJDyI.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-a5nE6ygN.js";import"./chevron-up-BKywTRZX.js";import"./Breadcrumbs-BuH71-m1.js";import"./useOverflowListTarget-Cp5p7X3i.js";import"./useListItemSelect-DoDsyqU1.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C5PsiTxH.js";import"./OverflowTooltip-BAwBmgsm.js";import"./usePopupTarget-X7rx-n4X.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-QThawpr-.js";import"./x-D9WWWeCM.js";import"./useConstant-CUZppmaV.js";import"./index-CDT9hUPM.js";import"./types-DXdjelYI.js";import"./useModalityType-vKGNJOLb.js";const Ie=()=>{const[n,o]=d.useState(!1),s=d.useCallback(()=>{o(a.isFullscreen)},[]);return d.useEffect(()=>(a.on("change",s),()=>{a.off("change",s)}),[s]),n},ne=[{name:"useIsFullscreen",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useIsFullscreen.ts",description:"",declarations:[{name:"useIsFullscreen",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useIsFullscreen.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"boolean"}}}];window.__updateDocs?window.__updateDocs?.(ne):window.__docs=(window.__docs||[]).concat(ne);const Se=ce()(n=>{const o=d.useCallback(r=>{a.isFullscreen&&n.state.stackRef.current&&de.transferToCurrentContext({element:n.state.stackRef.current,owner:n.state.targetRef.current})},[n.state.stackRef,n.state.targetRef]),s=n.state.visibility!=="hidden";return d.useEffect(()=>{if(s&&a.isEnabled)return a.on("change",o),()=>{a.off("change",o)}},[o,s]),{}}),se=[{name:"useTransferOnFullscreenEnter",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenEnter.ts",description:`Makes the popup transfer to the fullscreen element when fullscreen is entered. Without this, the
popup would seem to disappear because the popup container element is not a child of the
fullscreen element.

Don't use this in conjunction with a hook that will close the popup when entering fullscreen.
Doing so would open the popup when the intention was to close it.`,declarations:[{name:"useTransferOnFullscreenEnter",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenEnter.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(se):window.__docs=(window.__docs||[]).concat(se);const Re=ce()(n=>{const o=d.useCallback(r=>{!a.isFullscreen&&n.state.stackRef.current&&de.transferToCurrentContext({element:n.state.stackRef.current,owner:n.state.targetRef.current})},[n.state.stackRef,n.state.targetRef]),s=n.state.visibility!=="hidden";return d.useEffect(()=>{if(s&&a.isEnabled)return a.on("change",o),()=>{a.off("change",o)}},[o,s]),{}}),re=[{name:"useTransferOnFullscreenExit",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenExit.ts",description:`Makes the popup transfer to fullscreen when fullscreen is exited. Without this hook, the popup
would not operate correctly with other popups on the screen.

Don't use this in conjunction with a hook that will close the popup when exiting fullscreen.
Doing so would open the popup when the intention was to close it.`,declarations:[{name:"useTransferOnFullscreenExit",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenExit.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(re):window.__docs=(window.__docs||[]).concat(re);const Oe=c({width:g(400)}),Ee=c({marginBlock:"0"}),De=c({gap:u.md,padding:P.xs}),$=()=>{const n=p();x(n),m(n),h(n),y(n),j(n);const o=()=>{console.log("Delete Item")};return e.jsxs(t,{model:n,children:[e.jsx(t.Target,{as:k,children:"Delete Item"}),e.jsx(t.Popper,{placement:"top",children:e.jsxs(t.Card,{cs:Oe,children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Delete Item"}),e.jsx(t.Body,{children:e.jsx(M,{as:"p",cs:Ee,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(i,{cs:De,children:[e.jsx(t.CloseButton,{as:k,onClick:o,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]})};$.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

const flexStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.xs,
});

export const Basic = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper placement="top">
        <Popup.Card cs={cardStyles}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <Box as="p" cs={bodyStyles}>
              Are you sure you'd like to delete the item titled 'My Item'?
            </Box>
          </Popup.Body>
          <Flex cs={flexStyles}>
            <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const Me=d.forwardRef(({label:n,...o},s)=>e.jsx("button",{...o,ref:s,children:n})),U=()=>{const n=p();return x(n),m(n),h(n),y(n),e.jsxs(t,{model:n,children:[e.jsx(t.Target,{as:Me,label:"Open"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:{minWidth:g(320)},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Popup"}),e.jsx(t.Body,{children:"Contents"})]})})]})};U.__RAW__=`import React from 'react';

import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = React.forwardRef<HTMLButtonElement, MyTargetProps>(({label, ...props}, ref) => {
  return (
    <button {...props} ref={ref}>
      {label}
    </button>
  );
});

export const CustomTarget = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target as={MyTarget} label="Open" />
      <Popup.Popper>
        <Popup.Card cs={{minWidth: px2rem(320)}}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup</Popup.Heading>
          <Popup.Body>Contents</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const We=c({padding:P.md});async function _e(n,o){for(const s of n.fonts.values())o.fonts.add(s),s.load();await o.fonts.ready;for(const s of n.styleSheets)if(s.cssRules){const r=o.createElement("style");for(const C of s.cssRules)r.appendChild(o.createTextNode(C.cssText));o.head.appendChild(r)}else if(s.href){const r=o.createElement("link");r.rel="stylesheet",r.href=s.href,o.head.appendChild(r)}}const He=({children:n,width:o=300,height:s=500,target:r="",onWindowClose:C})=>{const[ee,ye]=d.useState(null);return we(()=>{const w=window.open("",r,`width=${o},height=${s},left=100,top=100,popup=true`);if(w){_e(document,w.document);const W=w.document.createElement("div");w.document.body.appendChild(W),ye(W)}else C();const F=W=>{C()};return window.addEventListener("unload",F),w?.addEventListener("unload",F),()=>{window.removeEventListener("unload",F),w?.removeEventListener("unload",F),w?.close()}}),ee?be.createPortal(e.jsx(A,{children:n}),ee):null},Ae=Ce()({displayName:"Popup.ExternalWindow",modelHook:p})(({children:n,...o},s,r)=>r.state.visibility==="visible"?e.jsx(He,{onWindowClose:r.events.hide,...o,children:n}):null),he=()=>{const n=ke({canvas:{direction:je.LTR}}),o=p();return e.jsx(A,{theme:n,children:e.jsxs("main",{className:We,children:[e.jsx("p",{children:"Popup that opens a new Operating System Window"}),e.jsxs(t,{model:o,children:[e.jsx(te,{title:"Open External Window Tooltip",children:e.jsx(t.Target,{children:"Open External Window"})}),e.jsxs(Ae,{children:[e.jsx("p",{children:"External Window Contents! Mouse over the info icon to get a tooltip"}),e.jsxs(i,{cs:{gap:u.sm},children:[e.jsx(te,{title:"More information",children:e.jsx(b,{icon:ge})}),e.jsx(t.CloseButton,{children:"Close Window"})]})]})]}),e.jsxs("p",{children:["Popup visibility: ",o.state.visibility]})]})})};he.__RAW__=`import React from 'react';
import ReactDOM from 'react-dom';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  createSubcomponent,
  useMount,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const mainContentStyles = createStyles({
  padding: system.padding.md,
});

export interface ExternalWindowPortalProps {
  /**
   * Child components of WindowPortal
   */
  children: React.ReactNode;
  /**
   * Callback to close the popup
   */
  onWindowClose?: () => void;
  /**
   * Width of the popup window
   */
  width?: number;
  /**
   * Height of the popup window
   */
  height?: number;
  /**
   * The name of the popup window. If another popup opens with the same name, that instance will
   * be reused. Use caution with setting this value
   */
  target?: string;
}

async function copyAssets(sourceDoc: Document, targetDoc: Document) {
  for (const font of (sourceDoc as any).fonts.values()) {
    (targetDoc as any).fonts.add(font);

    font.load();
  }

  await (targetDoc as any).fonts.ready;

  // The current ES lib version doesn't include iterable interfaces, so we cast as an iterable
  for (const styleSheet of sourceDoc.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
    if (styleSheet.cssRules) {
      // text based styles
      const styleEl = targetDoc.createElement('style');
      for (const cssRule of styleSheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
        styleEl.appendChild(targetDoc.createTextNode(cssRule.cssText));
      }
      targetDoc.head.appendChild(styleEl);
    } else if (styleSheet.href) {
      // link based styles
      const linkEl = targetDoc.createElement('link');

      linkEl.rel = 'stylesheet';
      linkEl.href = styleSheet.href;
      targetDoc.head.appendChild(linkEl);
    }
  }
}

const ExternalWindowPortal = ({
  children,
  width = 300,
  height = 500,
  target = '',
  onWindowClose,
}: ExternalWindowPortalProps) => {
  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);

  useMount(() => {
    const newWindow = window.open(
      '', // url
      target,
      \`width=\${width},height=\${height},left=100,top=100,popup=true\`
    );

    if (newWindow) {
      // copy fonts and styles
      copyAssets(document, newWindow.document);

      const element = newWindow.document.createElement('div');
      newWindow.document.body.appendChild(element);
      setPortalElement(element);
    } else {
      onWindowClose();
    }

    const closeWindow = event => {
      onWindowClose();
    };

    window.addEventListener('unload', closeWindow);
    newWindow?.addEventListener('unload', closeWindow);

    return () => {
      window.removeEventListener('unload', closeWindow);
      newWindow?.removeEventListener('unload', closeWindow);
      newWindow?.close();
    };
  });

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(<CanvasProvider>{children}</CanvasProvider>, portalElement);
};

const PopupExternalWindow = createSubcomponent()({
  displayName: 'Popup.ExternalWindow',
  modelHook: usePopupModel,
})<ExternalWindowPortalProps>(({children, ...elemProps}, Element, model) => {
  if (model.state.visibility === 'visible') {
    return (
      <ExternalWindowPortal onWindowClose={model.events.hide} {...elemProps}>
        {children}
      </ExternalWindowPortal>
    );
  }

  return null;
});

export const ExternalWindow = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to \`ContentDirection.RTL\` to change direction
      direction: ContentDirection.LTR,
    },
  });

  const model = usePopupModel();

  return (
    <CanvasProvider theme={canvasTheme}>
      <main className={mainContentStyles}>
        <p>Popup that opens a new Operating System Window</p>
        <Popup model={model}>
          <Tooltip title="Open External Window Tooltip">
            <Popup.Target>Open External Window</Popup.Target>
          </Tooltip>
          <PopupExternalWindow>
            <p>External Window Contents! Mouse over the info icon to get a tooltip</p>
            <Flex cs={{gap: system.gap.sm}}>
              <Tooltip title="More information">
                <SecondaryButton icon={infoIcon} />
              </Tooltip>
              <Popup.CloseButton>Close Window</Popup.CloseButton>
            </Flex>
          </PopupExternalWindow>
        </Popup>
        <p>Popup visibility: {model.state.visibility}</p>
      </main>
    </CanvasProvider>
  );
};
`;const Ne=c({width:g(400)}),Le=c({marginBlock:"0"}),ie=c({gap:u.md,padding:P.xs}),K=()=>{const n=p();x(n),m(n),h(n),y(n),j(n);const o=()=>{console.log("Delete Item")},s=N(),r=n.state.visibility!=="hidden";return H.useLayoutEffect(()=>{r&&n.state.stackRef.current&&n.state.stackRef.current.setAttribute("id",s)},[n.state.stackRef,r,s]),e.jsx(t,{model:n,children:e.jsxs(i,{cs:ie,children:[e.jsx(t.Target,{as:k,children:"Delete Item"}),e.jsx("div",{"aria-owns":s,style:{position:"absolute"}}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:Ne,children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Delete Item"}),e.jsx(t.Body,{children:e.jsx(M,{as:"p",cs:Le,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(i,{cs:ie,children:[e.jsx(t.CloseButton,{as:k,onClick:o,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})}),e.jsx(b,{children:"Next Focusable Button"}),e.jsx(b,{children:"Focusable Button After Popup"})]})})};K.__RAW__=`import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

const flexStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.xs,
});

export const FocusRedirect = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = useUniqueId();
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible, popupId]);

  return (
    <Popup model={model}>
      <Flex cs={flexStyles}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}}></div>
        <Popup.Popper>
          <Popup.Card cs={cardStyles}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" cs={bodyStyles}>
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex cs={flexStyles}>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
`;const z=()=>{const n=p();x(n),m(n),h(n),y(n),L(n);const o=()=>{console.log("Delete Item")},s="popup-test-id",r=n.state.visibility!=="hidden";return H.useLayoutEffect(()=>{r&&n.state.stackRef.current&&n.state.stackRef.current.setAttribute("id",s)},[n.state.stackRef,r]),e.jsx(t,{model:n,children:e.jsxs(i,{cs:{gap:u.sm},children:[e.jsx(t.Target,{as:k,children:"Delete Item"}),e.jsx("div",{"aria-owns":s,style:{position:"absolute"}}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:{width:g(400)},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Delete Item"}),e.jsx(t.Body,{children:e.jsx(M,{as:"p",cs:{marginBlock:"0"},children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(i,{cs:{gap:u.sm,paddingBlock:P.xxs},children:[e.jsx(t.CloseButton,{as:k,onClick:o,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})}),e.jsx(b,{children:"Next Focusable Button"}),e.jsx(b,{children:"Focusable Button After Popup"})]})})};z.__RAW__=`import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const FocusTrap = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = 'popup-test-id';
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible]);

  return (
    <Popup model={model}>
      <Flex cs={{gap: system.gap.sm}}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card cs={{width: px2rem(400)}}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" cs={{marginBlock: '0'}}>
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex cs={{gap: system.gap.sm, paddingBlock: system.padding.xxs}}>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
`;const qe=()=>{const n=p();return x(n),m(n),h(n),y(n),L(n),Fe(n),e.jsxs(t,{model:n,children:[e.jsx(t.Target,{children:"Open Self-close Popup"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:{width:g(400),padding:P.md},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Self-close Popup"}),e.jsx(t.Body,{children:e.jsxs("p",{children:["When in fullscreen, the escape key will be highjacked by the browser to exit fullscreen and ",e.jsx("code",{children:"useCloseOnEscape"})," hook will not receive the escape key. To close when fullscreen is exited, use the ",e.jsx("code",{children:"useCloseOnFullscreenExit"})," hook."]})}),e.jsx(t.CloseButton,{children:"Close"})]})})]})},$e=()=>{const n=p();return m(n),h(n),y(n),L(n),Se(n),Re(n),e.jsxs(t,{model:n,children:[e.jsx(t.Target,{children:"Open Transfer Popup"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:{width:g(400),padding:P.md},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Transfer Popup"}),e.jsx(t.Body,{children:e.jsxs("p",{children:["When in fullscreen, the escape key will be highjacked by the browser to exit fullscreen and ",e.jsx("code",{children:"useCloseOnEscape"})," hook will not receive the escape key. To close when fullscreen is exited, use the ",e.jsx("code",{children:"useTransferOnFullscreenExit"})," ","hook."]})}),e.jsx(t.CloseButton,{children:"Close"})]})})]})},Y=()=>{const n=H.useRef(),o=Ie(),s=()=>{a.request(n.current)},r=()=>{a.exit()};return e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:s,children:"Open Fullscreen"}),e.jsx(i,{ref:n,cs:{alignItems:"center",justifyContent:"center",background:Pe.bg.default},children:e.jsxs(i,{cs:{gap:u.md},children:[e.jsx(qe,{}),e.jsx($e,{}),o?e.jsx(b,{onClick:r,children:"Exit fullscreen"}):null]})})]})};Y.__RAW__=`import * as React from 'react';
import screenfull from 'screenfull';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {useIsFullscreen} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnFullscreenExit,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
  useTransferOnFullscreenEnter,
  useTransferOnFullscreenExit,
} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const SelfClosePopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useCloseOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Self-close Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card cs={{width: px2rem(400), padding: system.padding.md}}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Self-close Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useCloseOnFullscreenExit</code> hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const TransferClosePopup = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useTransferOnFullscreenEnter(model);
  useTransferOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Transfer Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card cs={{width: px2rem(400), padding: system.padding.md}}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Transfer Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useTransferOnFullscreenExit</code>{' '}
              hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

export const FullScreen = () => {
  // you could make this a hook depending on which fullscreen library your application uses
  const fullscreenElementRef = React.useRef<HTMLDivElement>();
  const isFullscreen = useIsFullscreen();

  const enterFullScreen = () => {
    screenfull.request(fullscreenElementRef.current);
  };

  const exitFullscreen = () => {
    screenfull.exit();
  };

  return (
    <>
      <SecondaryButton onClick={enterFullScreen}>Open Fullscreen</SecondaryButton>
      <Flex
        ref={fullscreenElementRef}
        cs={{alignItems: 'center', justifyContent: 'center', background: system.color.bg.default}}
      >
        <Flex cs={{gap: system.gap.md}}>
          <SelfClosePopup />
          <TransferClosePopup />
          {isFullscreen ? (
            <SecondaryButton onClick={exitFullscreen}>Exit fullscreen</SecondaryButton>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};
`;const X=c({width:g(400)}),me=c({marginBlock:"0"}),Q=c({gap:u.md,padding:P.xs}),Ue=c({gap:u.md,alignItems:"flex-start"}),Ke=()=>{const n=N(),o=d.useRef(null),s=p({initialFocusRef:o});return x(s),m(s),h(s),y(s),j(s),e.jsxs(t,{model:s,children:[e.jsx(t.Target,{children:"Initial focus: OK button"}),e.jsx(t.Popper,{placement:"bottom",children:e.jsxs(t.Card,{cs:X,"aria-describedby":n,children:[e.jsx(t.Heading,{children:"Confirmation"}),e.jsx(t.Body,{children:e.jsx(ue,{cs:me,id:n,children:"Your message has been sent!"})}),e.jsx(i,{cs:Q,children:e.jsx(t.CloseButton,{as:q,ref:o,children:"OK"})})]})})]})},ze=()=>{const n=N(),o=d.useRef(null),s=p({initialFocusRef:o});return x(s),m(s),h(s),y(s),j(s),e.jsxs(t,{model:s,children:[e.jsx(t.Target,{children:"Initial focus: text input"}),e.jsx(t.Popper,{placement:"bottom",children:e.jsxs(t.Card,{cs:X,"aria-describedby":n,children:[e.jsx(t.Heading,{children:"Quick reply"}),e.jsx(t.Body,{children:e.jsxs(_,{children:[e.jsx(_.Label,{children:"Message"}),e.jsx(_.Input,{as:ve,ref:o})]})}),e.jsxs(i,{cs:Q,children:[e.jsx(t.CloseButton,{as:q,children:"Send"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]})},Ye=()=>{const n=d.useRef(null),o=p({initialFocusRef:n});return x(o),m(o),h(o),y(o),j(o),e.jsxs(t,{model:o,children:[e.jsx(t.Target,{children:"Initial focus: heading"}),e.jsx(t.Popper,{placement:"bottom",children:e.jsxs(t.Card,{cs:X,children:[e.jsx(t.Heading,{ref:n,tabIndex:-1,children:"Important notice"}),e.jsx(t.Body,{children:e.jsx(ue,{cs:me,children:"Review the summary below before continuing."})}),e.jsx(i,{cs:Q,children:e.jsx(t.CloseButton,{as:q,children:"Continue"})})]})})]})},G=()=>e.jsxs(i,{cs:Ue,children:[e.jsx(Ke,{}),e.jsx(ze,{}),e.jsx(Ye,{})]});G.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

const flexStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.xs,
});

const columnStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'flex-start',
});

const InitialFocusOnButton = () => {
  const messageId = useUniqueId();
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: OK button</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles} aria-describedby={messageId}>
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <Text cs={bodyStyles} id={messageId}>
              Your message has been sent!
            </Text>
          </Popup.Body>
          <Flex cs={flexStyles}>
            <Popup.CloseButton as={PrimaryButton} ref={initialFocusRef}>
              OK
            </Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const InitialFocusOnTextInput = () => {
  const descriptionId = useUniqueId();
  const initialFocusRef = React.useRef<HTMLInputElement>(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: text input</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles} aria-describedby={descriptionId}>
          <Popup.Heading>Quick reply</Popup.Heading>
          <Popup.Body>
            <FormField>
              <FormField.Label>Message</FormField.Label>
              <FormField.Input as={TextInput} ref={initialFocusRef} />
            </FormField>
          </Popup.Body>
          <Flex cs={flexStyles}>
            <Popup.CloseButton as={PrimaryButton}>Send</Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const InitialFocusOnHeading = () => {
  const headingFocusRef = React.useRef<HTMLHeadingElement>(null);
  const model = usePopupModel({
    initialFocusRef: headingFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: heading</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles}>
          <Popup.Heading ref={headingFocusRef} tabIndex={-1}>
            Important notice
          </Popup.Heading>
          <Popup.Body>
            <Text cs={bodyStyles}>Review the summary below before continuing.</Text>
          </Popup.Body>
          <Flex cs={flexStyles}>
            <Popup.CloseButton as={PrimaryButton}>Continue</Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

export const InitialFocus = () => {
  return (
    <Flex cs={columnStyles}>
      <InitialFocusOnButton />
      <InitialFocusOnTextInput />
      <InitialFocusOnHeading />
    </Flex>
  );
};
`;const Xe=c({gap:u.md}),le=c({width:g(400)}),J=()=>{const n=Te(),o=Be();return e.jsxs(i,{cs:Xe,children:[e.jsxs(t,{model:n,children:[e.jsx(t.Target,{children:"Focus Redirect Popup"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:le,children:[e.jsx(t.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(t.Heading,{children:"Focus Redirect Popup"}),e.jsx(t.Body,{children:e.jsx("p",{children:"This popup uses the dialog model and will allow keyboard focus to escape when users press Tab or Shift + Tab."})})]})})]}),e.jsxs(t,{model:o,children:[e.jsx(t.Target,{children:"Focus Trap Popup"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{cs:le,children:[e.jsx(t.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(t.Heading,{children:"Focus Trap Popup"}),e.jsx(t.Body,{children:e.jsx("p",{children:"This popup uses the modal model and will trap keyboard focus when users press Tab or Shift + Tab."})}),e.jsx(i,{children:e.jsx(t.CloseButton,{children:"OK"})})]})})]})]})};J.__RAW__=`import {useDialogModel} from '@workday/canvas-kit-react/dialog';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useModalModel} from '@workday/canvas-kit-react/modal';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  gap: system.gap.md,
});

const popupStyles = createStyles({
  width: px2rem(400),
});

export const MultiplePopups = () => {
  const dialogModel = useDialogModel();
  const modalModel = useModalModel();

  return (
    <Flex cs={flexStyles}>
      <Popup model={dialogModel}>
        <Popup.Target>Focus Redirect Popup</Popup.Target>
        <Popup.Popper>
          <Popup.Card cs={popupStyles}>
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Heading>Focus Redirect Popup</Popup.Heading>
            <Popup.Body>
              <p>
                This popup uses the dialog model and will allow keyboard focus to escape when users
                press Tab or Shift + Tab.
              </p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={modalModel}>
        <Popup.Target>Focus Trap Popup</Popup.Target>
        <Popup.Popper>
          <Popup.Card cs={popupStyles}>
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Heading>Focus Trap Popup</Popup.Heading>
            <Popup.Body>
              <p>
                This popup uses the modal model and will trap keyboard focus when users press Tab or
                Shift + Tab.
              </p>
            </Popup.Body>
            <Flex>
              <Popup.CloseButton>OK</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Flex>
  );
};
`;const V=()=>{const n=p(),o=p();x(n),m(n),h(n),y(n),x(o),m(o),h(o),y(o);const s=oe(n,oe(o));return e.jsx(e.Fragment,{children:e.jsxs(t,{model:n,children:[e.jsx(t.Target,{children:"Open Popup 1"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{"aria-label":"Popup 1",children:[e.jsx(t.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(t.Body,{children:e.jsx("p",{style:{marginBlockStart:0,marginBlockEnd:0},children:"Contents of Popup 1"})}),e.jsx(i,{cs:{gap:u.md,padding:P.xs},children:e.jsxs(t,{model:o,children:[e.jsx(t.Target,{children:"Open Popup 2"}),e.jsx(t.Popper,{children:e.jsxs(t.Card,{"aria-label":"Popup 2",children:[e.jsx(t.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(t.Body,{children:e.jsx("p",{style:{marginBlockStart:0,marginBlockEnd:0},children:"Contents of Popup 2"})}),e.jsxs(i,{cs:{gap:u.md,padding:P.xs},children:[e.jsx(t.CloseButton,{as:t.CloseButton,model:n,children:"Close Both (as)"}),e.jsx(b,{...s,children:"Close Both (props)"})]})]})})]})})]})})]})})};V.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupCloseButton,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

export const NestedPopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);
  useInitialFocus(popup1);
  useReturnFocus(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);
  useInitialFocus(popup2);
  useReturnFocus(popup2);

  const closeBothProps = usePopupCloseButton(popup1, usePopupCloseButton(popup2));

  return (
    <>
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Contents of Popup 1</p>
            </Popup.Body>
            <Flex cs={{gap: system.gap.md, padding: system.padding.xs}}>
              <Popup model={popup2}>
                <Popup.Target>Open Popup 2</Popup.Target>
                <Popup.Popper>
                  <Popup.Card aria-label="Popup 2">
                    <Popup.CloseIcon aria-label="Close" size="small" />
                    <Popup.Body>
                      <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Contents of Popup 2</p>
                    </Popup.Body>
                    <Flex cs={{gap: system.gap.md, padding: system.padding.xs}}>
                      <Popup.CloseButton as={Popup.CloseButton} model={popup1}>
                        Close Both (as)
                      </Popup.CloseButton>
                      <SecondaryButton {...closeBothProps}>Close Both (props)</SecondaryButton>
                    </Flex>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
`;const Z=()=>e.jsx(A,{dir:"rtl",children:e.jsxs(t.Card,{cs:{width:g(400)},children:[e.jsx(t.CloseIcon,{"aria-label":"סגור"}),e.jsx(t.Heading,{children:"למחוק פריט"}),e.jsx(t.Body,{children:e.jsx(M,{as:"p",cs:{marginBlock:"0"},children:"האם ברצונך למחוק פריט זה"})}),e.jsxs(i,{cs:{gap:u.sm,paddingBlock:P.xxs},children:[e.jsx(k,{children:"לִמְחוֹק"}),e.jsx(b,{children:"לְבַטֵל"})]})]})});Z.__RAW__=`import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Popup.Card cs={{width: px2rem(400)}}>
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <Box as="p" cs={{marginBlock: '0'}}>
            האם ברצונך למחוק פריט זה
          </Box>
        </Popup.Body>
        <Flex cs={{gap: system.gap.sm, paddingBlock: system.padding.xxs}}>
          <DeleteButton>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Flex>
      </Popup.Card>
    </CanvasProvider>
  );
};
`;function ae(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...pe(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(fe,{of:Ge}),`
`,e.jsx(o.h1,{id:"canvas-kit-popups",children:"Canvas Kit Popups"}),`
`,e.jsxs(o.p,{children:[`A "popup" is a classification for a type of stacked UI element that appears "on top" of statically
positioned content. Tooltips, Modals, Dropdown menus, etc are all examples of "popups". Canvas Kit
has a "stack manager" system for managing these popups. Different types of popups have different
requirements of behavior for UX and accessibility - we can call them behaviors, capabilities, or
traits. Canvas Kit comes with a number of `,e.jsx(o.a,{href:"#hooks",children:"behavioral hooks"})," in the form of React Hooks."]}),`
`,e.jsxs(o.p,{children:["You should use the most semantic component for your use-case before using ",e.jsx(o.code,{children:"Popup"}),` directly, like
`,e.jsx(o.code,{children:"Modal"}),`, which already has the correct behaviors built-in. If no component already exists that
matches your use case, you can use `,e.jsx(o.code,{children:"Popup"})," and use our ",e.jsx(o.a,{href:"#hooks",children:"hooks"}),". The ",e.jsx(o.code,{children:"Popup"}),` component comes
with a `,e.jsx(o.code,{children:"Popup.Popper"})," subcomponent that positions a popup using ",e.jsx(o.a,{href:"https://popper.js.org/",rel:"nofollow",children:"PopperJS"}),`
that registers a popup with the `,e.jsx(o.code,{children:"PopupStack"})," automatically and sets the popup model's ",e.jsx(o.code,{children:"placement"}),`
property. `,e.jsx(o.code,{children:"Popup.Popper"}),` component and hooks work with the stack management system for correct
rendering and accessibility behavior. If you cannot use `,e.jsx(o.code,{children:"Popup.Popper"}),`, use the
`,e.jsx(o.a,{href:"#usepoupstack",children:"usePopupStack"}),` hook to properly register and deregister the popup at the correct
time. If you cannot use our hooks, consider upgrading your component to use Hooks. If you cannot do
that, you'll have to look up the `,e.jsx(o.code,{children:"PopupStack"}),` package for the direct API and have a look at the
source code for our hooks into the `,e.jsx(o.code,{children:"PopupStack"})," API."]}),`
`,e.jsx(o.p,{children:"This package comes with everything you need to build Popup UIs."}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"/components/buttons/button",children:"Buttons"})}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Popup"}),` component is a generic
`,e.jsx(o.a,{href:"?path=/docs/guides-compound-components--docs",children:"Compound Component"}),` that is used to
build popup UIs that are not already covered by Canvas Kit.`]}),`
`,e.jsx(o.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(o.p,{children:["The Popup has no pre-defined behaviors built in, therefore the ",e.jsx(o.code,{children:"usePopupModel"}),` must always be used
to create a new `,e.jsx(o.code,{children:"model"}),". This ",e.jsx(o.code,{children:"model"}),` is then used by all behavior hooks to apply additional popup
behaviors to the compound component group. The following example creates a typical popup around a
target element and adds `,e.jsx(o.code,{children:"useCloseOnOutsideClick"}),", ",e.jsx(o.code,{children:"useCloseOnEscape"}),", ",e.jsx(o.code,{children:"useInitialFocus"}),`, and
`,e.jsx(o.code,{children:"useReturnFocus"})," behaviors. You can read through the ",e.jsx(o.a,{href:"#hooks",children:"hooks"}),` section to learn about all the
popup behaviors. For accessibility, these behaviors should be included most of the time.`]}),`
`,e.jsx(f,{code:$}),`
`,e.jsx(o.h3,{id:"initial-focus",children:"Initial Focus"}),`
`,e.jsxs(o.p,{children:["If you want focus to move to a specific element when the popup is opened, set the ",e.jsx(o.code,{children:"initialFocusRef"}),`
of the model. This is useful for popups that don't have a Close icon button near the top right of
the popup. In general, we recommend setting focus to the first interactive component inside the
popup that is the least destructive action.`]}),`
`,e.jsx(f,{code:G}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),": When initial focus lands on a control ",e.jsx(o.strong,{children:"below"}),` the title (such as the OK
button in the example above), assign a unique `,e.jsx(o.code,{children:"id"}),` to supplementary text and pass
`,e.jsx(o.code,{children:"aria-describedby"})," on ",e.jsx(o.code,{children:"Popup.Card"}),". This augments the included ",e.jsx(o.code,{children:"aria-labelledby"}),` reference to
`,e.jsx(o.code,{children:"Popup.Heading"}),` so screen readers can announce both the heading and any supplementary text
automatically. When initial focus is on the heading itself, add `,e.jsx(o.code,{children:"tabIndex={-1}"})," to ",e.jsx(o.code,{children:"Popup.Heading"}),`
so the title can receive programmatic focus. Choose where focus goes based on your product and
accessibility requirements.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"focus-redirect",children:"Focus Redirect"}),`
`,e.jsxs(o.p,{children:[`Focus management is important to accessibility of popup contents. The following example shows
`,e.jsx(o.code,{children:"useFocusRedirect"}),` being used to manage focus in and out of a Popup. This is very useful for
non-modal popups. Focus redirection tries to treat the Popup as if it were inline to the document.
Tabbing out of the Popup will close the Popup and move focus to an adjacent focusable element.`]}),`
`,e.jsx(f,{code:K}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),": The ",e.jsx(o.code,{children:"useFocusRedirect"})," hook ",e.jsx(o.strong,{children:"will not"}),` have any effect on the reading
order of a screen reader. Screen reader users may get confused or disoriented when popups are
portalled to the bottom of the document body. In this example, we're testing the use of
`,e.jsx(o.code,{children:"aria-owns"})," on a sibling ",e.jsx(o.code,{children:"<div>"})," element pointing to the ",e.jsx(o.code,{children:"Popup.Card"}),` component. This remaps the
hierarchy of the accessibility tree (in supported browsers) to address the reading order problem.
For more information, see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),"."]}),`
`]}),`
`,e.jsx(o.h3,{id:"focus-trapping",children:"Focus Trapping"}),`
`,e.jsxs(o.p,{children:["Focus trapping is similar to the ",e.jsx(o.a,{href:"#focus-redirect",children:"Focus Redirect"}),` example, but will trap focus
inside the popup instead of redirecting focus to adjacent focusable elements. This is necessary for
modal dialogs where users must focus on the contents of the dialog before proceeding.`]}),`
`,e.jsx(f,{code:z}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),`: Focus trapping will not prevent mouse users from breaking out of a focus
trap, nor will it prevent screen reader users from using virtual reading cursors from breaking
out. Consider using `,e.jsx(o.a,{href:"?path=/docs/components-popups-modal--docs",children:"Modal"}),` instead when you need to focus users'
attention on a specific task inside of a popup..`]}),`
`]}),`
`,e.jsx(o.h3,{id:"multiple-popups",children:"Multiple Popups"}),`
`,e.jsxs(o.p,{children:["You can render more than one ",e.jsx(o.code,{children:"Popup"}),` in the same view by giving each its own model. This example
pairs `,e.jsx(o.code,{children:"Popup"})," with ",e.jsx(o.code,{children:"useDialogModel"})," and ",e.jsx(o.code,{children:"useModalModel"})," so you can compare ",e.jsx(o.strong,{children:"focus redirection"}),`
(Tab / Shift + Tab can move focus out of the first popup) and `,e.jsx(o.strong,{children:"focus trapping"}),` (focus stays inside
the second popup until it closes). Opening one does not close the other.`]}),`
`,e.jsx(f,{code:J}),`
`,e.jsx(o.h3,{id:"nested-popups",children:"Nested Popups"}),`
`,e.jsxs(o.p,{children:[`If you need nested Popups within the same component, you can create multiple models and pass a
unique model to each Popup. Popup comes with a `,e.jsx(o.code,{children:"Popup.CloseButton"})," that uses a ",e.jsx(o.code,{children:"Button"}),` and adds
props via the `,e.jsx(o.code,{children:"usePopupCloseButton"})," hook to ensure the popups hides and focus is returned. The ",e.jsx(o.code,{children:"as"}),`
can be used in a powerful way to do this by using `,e.jsx(o.code,{children:"<Popup.CloseButton as={Popup.CloseButton}>"}),` which
will mix in click handlers from both popups. This is not very intuitive, however. You can create
props that merge a click handler for both Popups by using `,e.jsx(o.code,{children:"usePopupCloseButton"}),` directly. The second
parameter is props to be merged which will effectively hide both popups. Focus management is
preserved.`]}),`
`,e.jsx(f,{code:V}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),`: In this example, observe how users can traverse both opened popups using
the keyboard. This is likely to be a confusing experience for users and may necessitate focus
trapping inside each popup with careful consideration for setting initial focus and returning
focus.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"custom-target",children:"Custom Target"}),`
`,e.jsxs(o.p,{children:["It is common to have a custom target for your popup. Use the ",e.jsx(o.code,{children:"as"}),` prop to use your custom component.
The `,e.jsx(o.code,{children:"Popup.Target"})," element will add ",e.jsx(o.code,{children:"onClick"})," and ",e.jsx(o.code,{children:"ref"}),` to the provided component. Your provided
target component must forward the `,e.jsx(o.code,{children:"onClick"})," to an element for the Popup to open. The ",e.jsx(o.code,{children:"as"}),` will cause
`,e.jsx(o.code,{children:"Popup.Target"}),` to inherit the interface of your custom target component. This means any props your
target requires, `,e.jsx(o.code,{children:"Popup.Target"})," now also requires. The example below has a ",e.jsx(o.code,{children:"MyTarget"}),` component that
requires a `,e.jsx(o.code,{children:"label"})," prop."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note"}),`: If your application needs to programmatically open a Popup without the user interacting
with the target button first, you'll also need to use `,e.jsx(o.code,{children:"React.forwardRef"}),` in your target component.
Without this, the Popup will open at the top-left of the window instead of around the target.`]}),`
`]}),`
`,e.jsx(f,{code:U}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Accessibility Note"}),`: Custom targets must be keyboard focusable, otherwise users will not be
able to access the popup. Bear in mind that click handlers only work with the keyboard when
applied to HTML `,e.jsx(o.code,{children:"<button>"})," elements and it is ",e.jsx(o.strong,{children:"strongly recommended"}),` to base your custom target
on a `,e.jsx(o.code,{children:"<button>"}),` element. Otherwise, you will be required to build in your own custom keyboard
event handlers for invoking the popup.`]}),`
`]}),`
`,e.jsx(o.h3,{id:"full-screen-api",children:"Full Screen API"}),`
`,e.jsxs(o.p,{children:["By default, popups are created as children of the ",e.jsx(o.code,{children:"document.body"})," element, but the ",e.jsx(o.code,{children:"PopupStack"}),`
supports the `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",rel:"nofollow",children:"Fullscreen API"}),`. When
fullscreen is entered, the `,e.jsx(o.code,{children:"PopupStack"}),` will automatically create a new stacking context for all
future popups. Any existing popups will disappear, but not be removed. They disappear because the
fullscreen API is only showing content within the fullscreen element. There are instances where a
popup may not close when fullscreen is exited:`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"The escape key is used to exit fullscreen"}),`
`,e.jsxs(o.li,{children:["There is a button to exit fullscreen, but the popup doesn't use ",e.jsx(o.code,{children:"useCloseOnOutsideClick"})]}),`
`]}),`
`,e.jsx(o.p,{children:`If fullscreen is exited, popups within the fullscreen stacking context are not removed or
transferred automatically. If you do not handle this case, the popup may not render correctly. This
example shows a popup that closes when fullscreen is entered/exited and another popup that transfers
the popup's stack context when entering/exiting fullscreen.`}),`
`,e.jsx(f,{code:Y}),`
`,e.jsx(o.h3,{id:"opening-an-external-window",children:"Opening an External Window"}),`
`,e.jsxs(o.p,{children:["A popup can open an external window. This isn't supported directly. The ",e.jsx(o.code,{children:"Popup.Popper"}),` subcomponent
is replaced with a custom subcomponent that connects to the Popup model and controls the lifecycle
of the extenal window. Be sure to connect the `,e.jsx(o.code,{children:"unload"})," event of both the parent ",e.jsx(o.code,{children:"window"}),` and the
external child `,e.jsx(o.code,{children:"window"}),` to the lifecycle of the Popup model to prevent memory leaks or zombie
windows.`]}),`
`,e.jsx(f,{code:he}),`
`,e.jsx(o.h3,{id:"rtl",children:"RTL"}),`
`,e.jsx(o.p,{children:"The Popup component automatically handles right-to-left rendering."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," This example shows an inaccessible open card for demonstration purposes."]}),`
`]}),`
`,e.jsx(f,{code:Z}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.p,{children:["Popup content is usually portaled to the bottom of the ",e.jsx(o.code,{children:"document.body"}),", which can affect ",e.jsx(o.strong,{children:`reading
order for screen readers`})," and ",e.jsx(o.strong,{children:"keyboard focus order"}),`. For more information about Popup
accessibility, check out our documentation at
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),"."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For non-modal dialogs with ",e.jsx(o.code,{children:"aria-owns"}),` built-in to improve reading order for screen readers (that
support it), check out the `,e.jsx(o.a,{href:"?path=/docs/components-popups-dialog--docs",children:e.jsx(o.strong,{children:"Dialog"})})," component."]}),`
`,e.jsxs(o.li,{children:[`For modal dialogs with built-in overlays and focus traps, check out the
`,e.jsx(o.a,{href:"?path=/docs/components-popups-modal--docs",children:e.jsx(o.strong,{children:"Modal"})})," component."]}),`
`]}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"Popper",fileName:"/react/"}),e.jsx(l,{name:"Popup",fileName:"/react/"})]}),`
`,e.jsx(o.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"usePopupStack",fileName:"/react/"})," ",e.jsx(l,{name:"useAssistiveHideSiblings",fileName:"/react/"})," ",e.jsx(l,{name:"useBringToTopOnClick",fileName:"/react/"})," ",e.jsx(l,{name:"useCloseOnEscape",fileName:"/react/"})," ",e.jsx(l,{name:"useCloseOnOutsideClick",fileName:"/react/"})," ",e.jsx(l,{name:"useAlwaysCloseOnOutsideClick",fileName:"/react/"})," ",e.jsx(l,{name:"useCloseOnTargetHidden",fileName:"/react/"})," ",e.jsx(l,{name:"useDisableBodyScroll",fileName:"/react/"})," ",e.jsx(l,{name:"useFocusRedirect",fileName:"/react/"})," ",e.jsx(l,{name:"useFocusTrap",fileName:"/react/"})," ",e.jsx(l,{name:"useInitialFocus",fileName:"/react/"})," ",e.jsx(l,{name:"useReturnFocus",fileName:"/react/"})," ",e.jsx(l,{name:"useTransferOnFullscreenEnter",fileName:"/react/"}),e.jsx(l,{name:"useTransferOnFullscreenExit",fileName:"/react/"})]}),`
`,e.jsx(o.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(xe,{file:"./cypress/component/Popup.spec.tsx",initialSpecs:{type:"file",name:"Popup",children:[{type:"describe",name:"Popup",children:[{type:"describe",name:"given the Basic example is rendered",children:[{type:"describe",name:'when the "Delete Item" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"it",name:"should not have any axe errors"},{type:"describe",name:"popup",children:[{type:"it",name:"should have a role of dialog"},{type:"it",name:"should have an aria-labelledby attribute when a heading is provided"},{type:"it",name:"should be labelled by the heading"}]},{type:"describe",name:"when the close button is clicked",children:[{type:"it",name:"should hide the popup"}]},{type:"describe",name:"when the escape key is pressed",children:[{type:"it",name:"should hide the popup"}]},{type:"describe",name:"when outside the popup is clicked",children:[{type:"it",name:"should close the popup"}]}]}]},{type:"describe",name:"given the MultiplePopups example is rendered",children:[{type:"it",name:"should open the Focus Redirect Popup dialog"},{type:"it",name:"should open the Focus Trap Popup dialog"}]},{type:"describe",name:"given the InitialFocus example is rendered",children:[{type:"describe",name:'when the "Initial focus: OK button" target is clicked',children:[{type:"it",name:"should show the Confirmation dialog"},{type:"it",name:"should move initial focus to the OK button"},{type:"it",name:"should set aria-describedby on the dialog for supplementary text"}]},{type:"describe",name:'when the "Initial focus: text input" target is clicked',children:[{type:"it",name:"should show the Quick reply dialog"},{type:"it",name:"should move initial focus to the Message field"},{type:"it",name:"should set aria-describedby on the dialog"}]},{type:"describe",name:'when the "Initial focus: heading" target is clicked',children:[{type:"it",name:"should show the Important notice dialog"},{type:"it",name:"should move initial focus to the heading"}]}]},{type:"describe",name:"given the CustomTarget example is rendered",children:[{type:"describe",name:'when the "Open" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Close" button is clicked',children:[{type:"it",name:"should hide the popup"},{type:"it",name:'should move focus back to the "Open" button'}]}]}]},{type:"describe",name:"given the FocusRedirect example is rendered",children:[{type:"describe",name:'when the "Delete Item" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Cancel" button has focus and the tab key is pressed',children:[{type:"it",name:"should hide the popup"},{type:"it",name:'should redirect focus to the "Next Focusable Button" button'}]}]}]},{type:"describe",name:"given the PopupWithNonHidablePopup example is rendered",children:[{type:"describe",name:"when Open Popup 1 button is clicked",children:[{type:"it",name:"should open Popup 1"},{type:"describe",name:"then Open Popup 2 button is clicked",children:[{type:"it",name:"should open Popup 2 in front of Popup 1"},{type:"describe",name:"then the close button in Popup 2 is clicked",children:[{type:"it",name:"should close Popup 2"},{type:"it",name:"should not close Popup 1"}]}]}]}]},{type:"describe",name:"given the MixedPopupTypes story is rendered",children:[{type:"it",name:"should start with Window 3 stacked on top of 3 Windows"},{type:"describe",name:"when Window 2 is clicked",children:[{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:'when "Contents of Window 1" text is hovered',children:[{type:"it",name:"should place Window 1 Tooltip above all other stacked UI elements"}]},{type:"describe",name:'when "Delete Item" button is clicked',children:[{type:"it",name:'should open "Delete Item" popup'},{type:"describe",name:"when Window 2 is clicked",children:[{type:"it",name:'should close "Delete Item" popup'},{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:"when Window 2 Tooltip is hovered",children:[{type:"describe",name:'when "Contents of Window 2" text is clicked',children:[{type:"it",name:'should close "Delete Item" popup'},{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:"when the Escape key is pressed",children:[{type:"it",name:"should close the Tooltip"},{type:"it",name:'should not close the "Delete Item" popup'},{type:"describe",name:"when the Escape key is pressed again",children:[{type:"it",name:'should close the "Delete Item" popup'}]}]}]},{type:"describe",name:"when an area outside popups is clicked",children:[{type:"it",name:'should close "Delete Item" popup'}]},{type:"describe",name:"when the Escape key is pressed",children:[{type:"it",name:'should close "Delete Item" popup'}]},{type:"describe",name:'when the "Delete" button is clicked',children:[{type:"it",name:'should open the "Really Delete Item" popup'},{type:"describe",name:'when "Contents of Window 2" text is focused',children:[{type:"it",name:"should open the tooltip"},{type:"describe",name:"when an area outside popups is clicked",children:[{type:"it",name:"should close the tooltip"},{type:"it",name:'should close the "Really Delete Item" popup'},{type:"it",name:'should NOT close the "Delete Item" popup'}]}]}]}]}]},{type:"describe",name:"given the ReturnFocusTest story is rendered",children:[{type:"describe",name:'when the "Open Popup" is clicked',children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should focus the "Open Popup" button'}]},{type:"describe",name:"when the user clicks the input",children:[{type:"it",name:'should not focus the "Open Popup" button'}]},{type:"describe",name:"when the user clicks on the tabindex button",children:[{type:"it",name:'should not focus the "Open Popup" button'}]},{type:"describe",name:"when the user scrolls to the top",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the bottom",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the left",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the left",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user closes the popup using the link",children:[{type:"it",name:'should focus the "Name" input'}]}]}]},{type:"describe",name:"given the CloseOnTargetHiddenTest story is rendered",children:[{type:"describe",name:'when the "Open Popup" is clicked',children:[{type:"it",name:"should open the popup"},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 100",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 450",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 400",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 150",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 65",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 480",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 65",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 480",children:[{type:"it",name:"should close the popup"}]}]}]},{type:"describe",name:"given the TooltipReturnFocus example is rendered",children:[{type:"describe",name:"when the icon button is clicked",children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Close" icon button is clicked',children:[{type:"it",name:"should focus on the icon button"},{type:"it",name:"should show the tooltip"}]}]}]},{type:"describe",name:"given the ComboboxWithinPopup example is rendered",children:[{type:"describe",name:"when the button is clicked",children:[{type:"it",name:"should show the popup"},{type:"describe",name:"when is open and the first item is clicked",children:[{type:"it",name:"should not close the popup on select"}]}]}]},{type:"describe",name:"given the [Testing/Popups/Popup, PopupWithFallbackPlacements] example is rendered",children:[{type:"describe",name:"check the fallback placements",children:[{type:"describe",name:"when the preferred placement is set to top",children:[{type:"it",name:"should show the fallback placement: bottom"}]},{type:"describe",name:"when the preferred placement is set to left",children:[{type:"it",name:"should show the fallback placement: right"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: left"}]},{type:"describe",name:"when the preferred placement is set to bottom",children:[{type:"it",name:"should show the fallback placement: top"}]}]}]}]}]},name:"Popup"})]})}function Qe(n={}){const{wrapper:o}={...pe(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(ae,{...n})}):ae(n)}const Ge={title:"Components/Popups/Popup",component:t,tags:["autodocs"],parameters:{docs:{page:Qe}}},v={render:$},T={render:G},B={render:J},I={render:V},S={render:K},R={render:z},O={render:Z},E={render:U},D={render:Y};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: InitialFocusExample
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: MultiplePopupsExample
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: NestedPopupsExample
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: FocusRedirectExample
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: FocusTrapExample
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: CustomTargetExample
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: FullScreenExample
}`,...D.parameters?.docs?.source}}};const Bt=["Basic","InitialFocus","MultiplePopups","NestedPopups","FocusRedirect","FocusTrap","RTL","CustomTarget","FullScreen"];export{v as Basic,E as CustomTarget,S as FocusRedirect,R as FocusTrap,D as FullScreen,T as InitialFocus,B as MultiplePopups,I as NestedPopups,O as RTL,Bt as __namedExportsOrder,Ge as default};
