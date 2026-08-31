import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as le}from"./index-3YbjYt95.js";import{ae as me}from"./index-t36il7ty.js";import{E as m,c as i}from"./union-C5L62j3T.js";import{S as xe}from"./Specifications-PACUsi4y.js";import{u as c}from"./getTransformFromPlacement-BTYKlY9d.js";import{u as x,a}from"./useInitialFocus-DC0Y9lls.js";import{u as p}from"./useCloseOnEscape-BBCCNOIp.js";import{u}from"./useReturnFocus-D6liLhXU.js";import{u as w}from"./useFocusRedirect-BHqtMCeJ.js";import{P as n,b as ee}from"./Popup-BbxEw1JE.js";import{D as b}from"./DeleteButton-DC9jO0O4.js";import{c as h}from"./cs-CmRirKzJ.js";import{B as M}from"./Box-61RYJS8A.js";import{p as f}from"./px2rem-C0KbprIx.js";import{e as d,r as A}from"./index-IfJi-UCQ.js";import{R as je}from"./index-BDZ5T_cP.js";import{i as fe}from"./info-DJgWrsaO.js";import{a as ge}from"./useMount-CAK2BN3_.js";import{u as ye,C as _,l as be}from"./CanvasProvider-DfFmsxWb.js";import{T as oe}from"./Tooltip-DObvPxfM.js";import{a as ce,b as Pe}from"./components-DdDgcAto.js";import{F as g}from"./Flex-CM_xc6uN.js";import{g as P,p as k,c as we}from"./index-DE-upP0k.js";import{S as j}from"./SecondaryButton-DG7QNEgp.js";import{u as N}from"./useUniqueId-BoA5684E.js";import{u as q}from"./useFocusTrap-BJiVCmZe.js";import{s as l,P as de}from"./Popper-BTfx4X3Y.js";import{b as ke}from"./useTooltip-BgRaP0ww.js";import{T as ae}from"./Text-DCxfoIId.js";import{P as L}from"./PrimaryButton-5gg2Fz1d.js";import{F as H}from"./FormField-8R4BRpYY.js";import{T as Ce}from"./TextInput-B58agKnt.js";import{u as ve}from"./Dialog-dFU9QdWt.js";import{u as Fe}from"./useModalModel-OeR-hVpa.js";import"./iframe-Ofr_6iYT.js";import"../sb-preview/runtime.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bo20moLE.js";import"./Svg-CJw9rXYh.js";import"./StatusIndicator-BQ48wm1y.js";import"./mergeStyles-BpMifWbI.js";import"./flex-c4dSep24.js";import"./grid-BACyZ-ln.js";import"./cornerShape-D6g3edD7.js";import"./Card-BSzbbTvN.js";import"./ExternalHyperlink-OV2BgddV.js";import"./Hyperlink-bFi3Gm86.js";import"./external-link-ChL2h1Cn.js";import"./lerna-CvJqgxr1.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./TertiaryButton-C_HeZ8Vk.js";import"./BaseButton-5Tzdsups.js";import"./Button-CQ42Z5L0.js";import"./index-kj8ZfNNN.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-DmbliJpw.js";import"./ColorPicker-ogt4uhU8.js";import"./ColorInput-D9-3XYg5.js";import"./check-small-BqSDQIle.js";import"./index-DX07rvw8.js";import"./check-Ds6vsrAM.js";import"./Expandable-DnHnmyV4.js";import"./Avatar-BQTCDUL3.js";import"./models-CHTjB2ql.js";import"./useDisclosureModel-ySjWLcPL.js";import"./chevron-up-CAo1sqci.js";import"./Breadcrumbs-CB4XTzIQ.js";import"./useOverflowListTarget-34ivCzNX.js";import"./useListItemRegister-CpJkOK8H.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DNCcAoir.js";import"./OverflowTooltip-DvDdKiVX.js";import"./useListItemSelect-BiKiaz0I.js";import"./usePopupTarget-B2V76KZ9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-Y2cstmAm.js";import"./x-B1faap_l.js";import"./useConstant-B_SD0x5s.js";import"./index-CDT9hUPM.js";import"./types-DXdjelYI.js";import"./useModalityType-vKGNJOLb.js";const Be=()=>{const[s,o]=d.useState(!1),t=d.useCallback(()=>{o(l.isFullscreen)},[]);return d.useEffect(()=>(l.on("change",t),()=>{l.off("change",t)}),[t]),s},ne=[{name:"useIsFullscreen",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useIsFullscreen.ts",description:"",declarations:[{name:"useIsFullscreen",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/utils/useIsFullscreen.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"boolean"}}}];window.__updateDocs?window.__updateDocs?.(ne):window.__docs=(window.__docs||[]).concat(ne);const Te=ce()(s=>{const o=d.useCallback(r=>{l.isFullscreen&&s.state.stackRef.current&&de.transferToCurrentContext({element:s.state.stackRef.current,owner:s.state.targetRef.current})},[s.state.stackRef,s.state.targetRef]),t=s.state.visibility!=="hidden";return d.useEffect(()=>{if(t&&l.isEnabled)return l.on("change",o),()=>{l.off("change",o)}},[o,t]),{}}),se=[{name:"useTransferOnFullscreenEnter",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenEnter.ts",description:`Makes the popup transfer to the fullscreen element when fullscreen is entered. Without this, the
popup would seem to disappear because the popup container element is not a child of the
fullscreen element.

Don't use this in conjunction with a hook that will close the popup when entering fullscreen.
Doing so would open the popup when the intention was to close it.`,declarations:[{name:"useTransferOnFullscreenEnter",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenEnter.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(se):window.__docs=(window.__docs||[]).concat(se);const Re=ce()(s=>{const o=d.useCallback(r=>{!l.isFullscreen&&s.state.stackRef.current&&de.transferToCurrentContext({element:s.state.stackRef.current,owner:s.state.targetRef.current})},[s.state.stackRef,s.state.targetRef]),t=s.state.visibility!=="hidden";return d.useEffect(()=>{if(t&&l.isEnabled)return l.on("change",o),()=>{l.off("change",o)}},[o,t]),{}}),te=[{name:"useTransferOnFullscreenExit",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenExit.ts",description:`Makes the popup transfer to fullscreen when fullscreen is exited. Without this hook, the popup
would not operate correctly with other popups on the screen.

Don't use this in conjunction with a hook that will close the popup when exiting fullscreen.
Doing so would open the popup when the intention was to close it.`,declarations:[{name:"useTransferOnFullscreenExit",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useTransferOnFullscreenExit.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(te):window.__docs=(window.__docs||[]).concat(te);const Ie=h({width:f(400)}),Oe=h({marginBlock:"0"}),G=()=>{const s=c();x(s),p(s),a(s),u(s),w(s);const o=()=>{console.log("Delete Item")};return e.jsxs(n,{model:s,children:[e.jsx(n.Target,{as:b,children:"Delete Item"}),e.jsx(n.Popper,{placement:"top",children:e.jsxs(n.Card,{cs:Ie,children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Delete Item"}),e.jsx(n.Body,{children:e.jsx(M,{as:"p",cs:Oe,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:b,onClick:o,children:"Delete"})]})]})})]})};G.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
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

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
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
          <Popup.ButtonGroup>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
            <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const Se=d.forwardRef(({label:s,...o},t)=>e.jsx("button",{...o,ref:t,children:s})),U=()=>{const s=c();return x(s),p(s),a(s),u(s),e.jsxs(n,{model:s,children:[e.jsx(n.Target,{as:Se,label:"Open"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:{minWidth:f(320)},children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Popup"}),e.jsx(n.Body,{children:"Contents"})]})})]})};U.__RAW__=`import React from 'react';

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
`;const Ee=h({padding:k.md});async function De(s,o){for(const t of s.fonts.values())o.fonts.add(t),t.load();await o.fonts.ready;for(const t of s.styleSheets)if(t.cssRules){const r=o.createElement("style");for(const C of t.cssRules)r.appendChild(o.createTextNode(C.cssText));o.head.appendChild(r)}else if(t.href){const r=o.createElement("link");r.rel="stylesheet",r.href=t.href,o.head.appendChild(r)}}const Me=({children:s,width:o=300,height:t=500,target:r="",onWindowClose:C})=>{const[Z,he]=d.useState(null);return ge(()=>{const y=window.open("",r,`width=${o},height=${t},left=100,top=100,popup=true`);if(y){De(document,y.document);const W=y.document.createElement("div");y.document.body.appendChild(W),he(W)}else C();const v=W=>{C()};return window.addEventListener("unload",v),y?.addEventListener("unload",v),()=>{window.removeEventListener("unload",v),y?.removeEventListener("unload",v),y?.close()}}),Z?je.createPortal(e.jsx(_,{children:s}),Z):null},We=Pe()({displayName:"Popup.ExternalWindow",modelHook:c})(({children:s,...o},t,r)=>r.state.visibility==="visible"?e.jsx(Me,{onWindowClose:r.events.hide,...o,children:s}):null),pe=()=>{const s=ye({canvas:{direction:be.LTR}}),o=c();return e.jsx(_,{theme:s,children:e.jsxs("main",{className:Ee,children:[e.jsx("p",{children:"Popup that opens a new Operating System Window"}),e.jsxs(n,{model:o,children:[e.jsx(oe,{title:"Open External Window Tooltip",children:e.jsx(n.Target,{children:"Open External Window"})}),e.jsxs(We,{children:[e.jsx("p",{children:"External Window Contents! Mouse over the info icon to get a tooltip"}),e.jsxs(g,{cs:{gap:P.sm},children:[e.jsx(oe,{title:"More information",children:e.jsx(j,{icon:fe})}),e.jsx(n.CloseButton,{children:"Close Window"})]})]})]}),e.jsxs("p",{children:["Popup visibility: ",o.state.visibility]})]})})};pe.__RAW__=`import React from 'react';
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
`;const He=h({width:f(400)}),Ae=h({marginBlock:"0"}),_e=h({gap:P.md,padding:k.xs}),K=()=>{const s=c();x(s),p(s),a(s),u(s),w(s);const o=()=>{console.log("Delete Item")},t=N(),r=s.state.visibility!=="hidden";return A.useLayoutEffect(()=>{r&&s.state.stackRef.current&&s.state.stackRef.current.setAttribute("id",t)},[s.state.stackRef,r,t]),e.jsx(n,{model:s,children:e.jsxs(g,{cs:_e,children:[e.jsx(n.Target,{as:b,children:"Delete Item"}),e.jsx("div",{"aria-owns":t,style:{position:"absolute"}}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:He,children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Delete Item"}),e.jsx(n.Body,{children:e.jsx(M,{as:"p",cs:Ae,children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:b,onClick:o,children:"Delete"})]})]})}),e.jsx(j,{children:"Next Focusable Button"}),e.jsx(j,{children:"Focusable Button After Popup"})]})})};K.__RAW__=`import * as React from 'react';

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
            <Popup.ButtonGroup>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
            </Popup.ButtonGroup>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
`;const $=()=>{const s=c();x(s),p(s),a(s),u(s),q(s);const o=()=>{console.log("Delete Item")},t="popup-test-id",r=s.state.visibility!=="hidden";return A.useLayoutEffect(()=>{r&&s.state.stackRef.current&&s.state.stackRef.current.setAttribute("id",t)},[s.state.stackRef,r]),e.jsx(n,{model:s,children:e.jsxs(g,{cs:{gap:P.sm},children:[e.jsx(n.Target,{as:b,children:"Delete Item"}),e.jsx("div",{"aria-owns":t,style:{position:"absolute"}}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:{width:f(400)},children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Delete Item"}),e.jsx(n.Body,{children:e.jsx(M,{as:"p",cs:{marginBlock:"0"},children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:b,onClick:o,children:"Delete"})]})]})}),e.jsx(j,{children:"Next Focusable Button"}),e.jsx(j,{children:"Focusable Button After Popup"})]})})};$.__RAW__=`import * as React from 'react';

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
            <Popup.ButtonGroup>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
            </Popup.ButtonGroup>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
`;const Ne=()=>{const s=c();return x(s),p(s),a(s),u(s),q(s),ke(s),e.jsxs(n,{model:s,children:[e.jsx(n.Target,{children:"Open Self-close Popup"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:{width:f(400),padding:k.md},children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Self-close Popup"}),e.jsx(n.Body,{children:e.jsxs("p",{children:["When in fullscreen, the escape key will be highjacked by the browser to exit fullscreen and ",e.jsx("code",{children:"useCloseOnEscape"})," hook will not receive the escape key. To close when fullscreen is exited, use the ",e.jsx("code",{children:"useCloseOnFullscreenExit"})," hook."]})}),e.jsx(n.CloseButton,{children:"Close"})]})})]})},qe=()=>{const s=c();return p(s),a(s),u(s),q(s),Te(s),Re(s),e.jsxs(n,{model:s,children:[e.jsx(n.Target,{children:"Open Transfer Popup"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:{width:f(400),padding:k.md},children:[e.jsx(n.CloseIcon,{"aria-label":"Close"}),e.jsx(n.Heading,{children:"Transfer Popup"}),e.jsx(n.Body,{children:e.jsxs("p",{children:["When in fullscreen, the escape key will be highjacked by the browser to exit fullscreen and ",e.jsx("code",{children:"useCloseOnEscape"})," hook will not receive the escape key. To close when fullscreen is exited, use the ",e.jsx("code",{children:"useTransferOnFullscreenExit"})," ","hook."]})}),e.jsx(n.CloseButton,{children:"Close"})]})})]})},z=()=>{const s=A.useRef(),o=Be(),t=()=>{l.request(s.current)},r=()=>{l.exit()};return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:t,children:"Open Fullscreen"}),e.jsx(g,{ref:s,cs:{alignItems:"center",justifyContent:"center",background:we.bg.default},children:e.jsxs(g,{cs:{gap:P.md},children:[e.jsx(Ne,{}),e.jsx(qe,{}),o?e.jsx(j,{onClick:r,children:"Exit fullscreen"}):null]})})]})};z.__RAW__=`import * as React from 'react';
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
`;const Y=h({width:f(400)}),ue=h({marginBlock:"0"}),Le=h({gap:P.md,alignItems:"flex-start"}),Ge=()=>{const s=N(),o=d.useRef(null),t=c({initialFocusRef:o});return x(t),p(t),a(t),u(t),w(t),e.jsxs(n,{model:t,children:[e.jsx(n.Target,{children:"Initial focus: OK button"}),e.jsx(n.Popper,{placement:"bottom",children:e.jsxs(n.Card,{cs:Y,"aria-describedby":s,children:[e.jsx(n.Heading,{children:"Confirmation"}),e.jsx(n.Body,{children:e.jsx(ae,{cs:ue,id:s,children:"Your message has been sent!"})}),e.jsx(n.ButtonGroup,{children:e.jsx(n.CloseButton,{as:L,ref:o,children:"OK"})})]})})]})},Ue=()=>{const s=N(),o=d.useRef(null),t=c({initialFocusRef:o});return x(t),p(t),a(t),u(t),w(t),e.jsxs(n,{model:t,children:[e.jsx(n.Target,{children:"Initial focus: text input"}),e.jsx(n.Popper,{placement:"bottom",children:e.jsxs(n.Card,{cs:Y,"aria-describedby":s,children:[e.jsx(n.Heading,{children:"Quick reply"}),e.jsx(n.Body,{children:e.jsxs(H,{children:[e.jsx(H.Label,{children:"Message"}),e.jsx(H.Input,{as:Ce,ref:o})]})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{children:"Cancel"}),e.jsx(n.CloseButton,{as:L,children:"Send"})]})]})})]})},Ke=()=>{const s=d.useRef(null),o=c({initialFocusRef:s});return x(o),p(o),a(o),u(o),w(o),e.jsxs(n,{model:o,children:[e.jsx(n.Target,{children:"Initial focus: heading"}),e.jsx(n.Popper,{placement:"bottom",children:e.jsxs(n.Card,{cs:Y,children:[e.jsx(n.Heading,{ref:s,tabIndex:-1,children:"Important notice"}),e.jsx(n.Body,{children:e.jsx(ae,{cs:ue,children:"Review the summary below before continuing."})}),e.jsx(n.ButtonGroup,{children:e.jsx(n.CloseButton,{as:L,children:"Continue"})})]})})]})},X=()=>e.jsxs(g,{cs:Le,children:[e.jsx(Ge,{}),e.jsx(Ue,{}),e.jsx(Ke,{})]});X.__RAW__=`import React from 'react';

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
          <Popup.ButtonGroup>
            <Popup.CloseButton as={PrimaryButton} ref={initialFocusRef}>
              OK
            </Popup.CloseButton>
          </Popup.ButtonGroup>
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
          <Popup.ButtonGroup>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
            <Popup.CloseButton as={PrimaryButton}>Send</Popup.CloseButton>
          </Popup.ButtonGroup>
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
          <Popup.ButtonGroup>
            <Popup.CloseButton as={PrimaryButton}>Continue</Popup.CloseButton>
          </Popup.ButtonGroup>
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
`;const $e=h({gap:P.md}),re=h({width:f(400)}),Q=()=>{const s=ve(),o=Fe();return e.jsxs(g,{cs:$e,children:[e.jsxs(n,{model:s,children:[e.jsx(n.Target,{children:"Focus Redirect Popup"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:re,children:[e.jsx(n.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(n.Heading,{children:"Focus Redirect Popup"}),e.jsx(n.Body,{children:e.jsx("p",{children:"This popup uses the dialog model and will allow keyboard focus to escape when users press Tab or Shift + Tab."})})]})})]}),e.jsxs(n,{model:o,children:[e.jsx(n.Target,{children:"Focus Trap Popup"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{cs:re,children:[e.jsx(n.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(n.Heading,{children:"Focus Trap Popup"}),e.jsx(n.Body,{children:e.jsx("p",{children:"This popup uses the modal model and will trap keyboard focus when users press Tab or Shift + Tab."})}),e.jsx(n.ButtonGroup,{children:e.jsx(n.CloseButton,{children:"OK"})})]})})]})]})};Q.__RAW__=`import {useDialogModel} from '@workday/canvas-kit-react/dialog';
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
            <Popup.ButtonGroup>
              <Popup.CloseButton>OK</Popup.CloseButton>
            </Popup.ButtonGroup>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Flex>
  );
};
`;const J=()=>{const s=c(),o=c();x(s),p(s),a(s),u(s),x(o),p(o),a(o),u(o);const t=ee(s,ee(o));return e.jsx(e.Fragment,{children:e.jsxs(n,{model:s,children:[e.jsx(n.Target,{children:"Open Popup 1"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{"aria-label":"Popup 1",children:[e.jsx(n.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(n.Body,{children:e.jsx("p",{style:{marginBlockStart:0,marginBlockEnd:0},children:"Contents of Popup 1"})}),e.jsx(g,{cs:{gap:P.md,padding:k.xs},children:e.jsxs(n,{model:o,children:[e.jsx(n.Target,{children:"Open Popup 2"}),e.jsx(n.Popper,{children:e.jsxs(n.Card,{"aria-label":"Popup 2",children:[e.jsx(n.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(n.Body,{children:e.jsx("p",{style:{marginBlockStart:0,marginBlockEnd:0},children:"Contents of Popup 2"})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(n.CloseButton,{as:n.CloseButton,model:s,children:"Close Both (as)"}),e.jsx(j,{...t,children:"Close Both (props)"})]})]})})]})})]})})]})})};J.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
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
                    <Popup.ButtonGroup>
                      <Popup.CloseButton as={Popup.CloseButton} model={popup1}>
                        Close Both (as)
                      </Popup.CloseButton>
                      <SecondaryButton {...closeBothProps}>Close Both (props)</SecondaryButton>
                    </Popup.ButtonGroup>
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
`;const V=()=>e.jsx(_,{dir:"rtl",children:e.jsxs(n.Card,{cs:{width:f(400)},children:[e.jsx(n.CloseIcon,{"aria-label":"סגור"}),e.jsx(n.Heading,{children:"למחוק פריט"}),e.jsx(n.Body,{children:e.jsx(M,{as:"p",cs:{marginBlock:"0"},children:"האם ברצונך למחוק פריט זה"})}),e.jsxs(n.ButtonGroup,{children:[e.jsx(j,{children:"לְבַטֵל"}),e.jsx(b,{children:"לִמְחוֹק"})]})]})});V.__RAW__=`import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
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
        <Popup.ButtonGroup>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
          <DeleteButton>לִמְחוֹק</DeleteButton>
        </Popup.ButtonGroup>
      </Popup.Card>
    </CanvasProvider>
  );
};
`;function ie(s){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...le(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(me,{of:Ye}),`
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
target element and adds `,e.jsx(o.code,{children:"useCloseOnOutsideClick"}),", ",e.jsx(o.code,{children:"useCloseOnEscape"}),", ",e.jsx(o.code,{children:"useInitialFocus"}),`,
`,e.jsx(o.code,{children:"useReturnFocus"}),", and ",e.jsx(o.code,{children:"useFocusRedirect"})," behaviors. You can read through the ",e.jsx(o.a,{href:"#hooks",children:"hooks"}),` section
to learn about all the popup behaviors. For accessibility, these behaviors should be included most
of the time.`]}),`
`,e.jsx(m,{code:G}),`
`,e.jsx(o.h3,{id:"initial-focus",children:"Initial Focus"}),`
`,e.jsxs(o.p,{children:["If you want focus to move to a specific element when the popup is opened, set the ",e.jsx(o.code,{children:"initialFocusRef"}),`
of the model. This is useful for popups that don't have a Close icon button near the top right of
the popup. In general, we recommend setting focus to the first interactive component inside the
popup that is the least destructive action.`]}),`
`,e.jsx(m,{code:X}),`
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
`,e.jsx(m,{code:K}),`
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
`,e.jsx(m,{code:$}),`
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
`,e.jsx(m,{code:Q}),`
`,e.jsx(o.h3,{id:"nested-popups",children:"Nested Popups"}),`
`,e.jsxs(o.p,{children:[`If you need nested Popups within the same component, you can create multiple models and pass a
unique model to each Popup. Popup comes with a `,e.jsx(o.code,{children:"Popup.CloseButton"})," that uses a ",e.jsx(o.code,{children:"Button"}),` and adds
props via the `,e.jsx(o.code,{children:"usePopupCloseButton"})," hook to ensure the popups hides and focus is returned. The ",e.jsx(o.code,{children:"as"}),`
can be used in a powerful way to do this by using `,e.jsx(o.code,{children:"<Popup.CloseButton as={Popup.CloseButton}>"}),` which
will mix in click handlers from both popups. This is not very intuitive, however. You can create
props that merge a click handler for both Popups by using `,e.jsx(o.code,{children:"usePopupCloseButton"}),` directly. The second
parameter is props to be merged which will effectively hide both popups. Focus management is
preserved.`]}),`
`,e.jsx(m,{code:J}),`
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
`,e.jsx(m,{code:U}),`
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
`,e.jsx(m,{code:z}),`
`,e.jsx(o.h3,{id:"opening-an-external-window",children:"Opening an External Window"}),`
`,e.jsxs(o.p,{children:["A popup can open an external window. This isn't supported directly. The ",e.jsx(o.code,{children:"Popup.Popper"}),` subcomponent
is replaced with a custom subcomponent that connects to the Popup model and controls the lifecycle
of the extenal window. Be sure to connect the `,e.jsx(o.code,{children:"unload"})," event of both the parent ",e.jsx(o.code,{children:"window"}),` and the
external child `,e.jsx(o.code,{children:"window"}),` to the lifecycle of the Popup model to prevent memory leaks or zombie
windows.`]}),`
`,e.jsx(m,{code:pe}),`
`,e.jsx(o.h3,{id:"rtl",children:"RTL"}),`
`,e.jsx(o.p,{children:"The Popup component automatically handles right-to-left rendering."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," This example shows an inaccessible open card for demonstration purposes."]}),`
`]}),`
`,e.jsx(m,{code:V}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(o.p,{children:[`Ensure users of assistive technology can discover, name, and operate a popup that is typically
portaled to the end of `,e.jsx(o.code,{children:"document.body"}),`: the popup has an accessible name that matches its visible
heading, keyboard users can open and dismiss it predictably, and focus and reading order remain
usable despite portal placement (see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-inline-popups--docs",rel:"nofollow",children:"Guides > Accessibility > Inline Popups"}),`).
Prefer a semantic component before composing `,e.jsx(o.strong,{children:"Popup"}),` directly:
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-dialog--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Dialog"})}),` for a
standard non-modal dialog (behaviors and `,e.jsx(o.code,{children:"aria-owns"}),` built in), or
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),` for
blocking tasks with focus trapping and assistive sibling hiding (see also the W3C
`,e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"Dialog (Modal) Pattern"}),"). Use ",e.jsx(o.strong,{children:"Popup"}),` with
composed hooks when you need a custom popup stack or behavior set that those components do not
provide.`]}),`
`,e.jsx(o.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(o.p,{children:["The following matches the ",e.jsx(o.a,{href:"#basic-example",children:"Basic Example"}),": hoist ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})}),`, compose the
non-modal behavior hooks on that model, place `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseIcon"})})," before ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Heading"})}),` so
default open focus lands on the dismiss control first, and use `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseButton"})}),` for actions
that should also close the popup.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

const Example = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
          </Popup.Body>
          <Popup.ButtonGroup>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
            <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`})}),`
`,e.jsxs(o.p,{children:["Include a dismiss control: ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseButton"})}),` with visible text (for example "Cancel" or
"Close"), and/or `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseIcon"})}),` when the design uses an icon-only dismiss (requires
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Tooltip"})}),"). Pass the same ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model"})})," instance to ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup"})}),` and every
behavior hook so focus and dismiss wiring share one stack.`]}),`
`,e.jsx(o.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(o.p,{children:[`Canvas Kit applies ARIA and DOM wiring automatically via Popup subcomponents when you compose them.
Behavioral hooks are `,e.jsx(o.strong,{children:"not"})," applied by ",e.jsx(o.code,{children:"usePopupModel"}),` alone—you must call them (as in the Basic
Example). Once applied, `,e.jsx(o.strong,{children:"do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Popup behaviors"})," (",e.jsx(o.em,{children:"compose on the model; recommended for non-modal dialogs"}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useInitialFocus"}),` — moves focus into the popup when it opens (default: first focusable element in
DOM order; optional override via `,e.jsx(o.code,{children:"initialFocusRef"})," on the model)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useReturnFocus"})," — returns focus to ",e.jsx(o.code,{children:"Popup.Target"})," (or configured return target) when it closes"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useCloseOnEscape"})," — ",e.jsx("kbd",{children:"Escape"})," closes the popup"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useCloseOnOutsideClick"})," — pointer interaction outside closes the popup"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"useFocusRedirect"})," — ",e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` at the first or last
focusable element inside the popup closes it and moves focus to the next or previous focusable
element on the page (non-modal; `,e.jsx(o.strong,{children:"not"})," a focus trap; does ",e.jsx(o.strong,{children:"not"}),` change screen reader reading
order; does `,e.jsx(o.strong,{children:"not"})," provide ",e.jsx(o.code,{children:"aria-owns"}),")"]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"ARIA and DOM"})," (",e.jsx(o.em,{children:"applied by hooks/subcomponents"}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popup.Card"}),": ",e.jsx(o.code,{children:'role="dialog"'}),", ",e.jsx(o.code,{children:"aria-labelledby"})," referencing the heading ",e.jsx(o.code,{children:"id"}),` (non-modal by
default; page content is not hidden with `,e.jsx(o.code,{children:"aria-hidden"}),` unless you compose
`,e.jsx(o.code,{children:"useAssistiveHideSiblings"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popup.Heading"}),": ",e.jsx(o.code,{children:"id"})," wired to ",e.jsx(o.code,{children:"Popup.Card"}),"'s ",e.jsx(o.code,{children:"aria-labelledby"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popup.Popper"}),`: positions and registers the popup with the stack; unlike
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-dialog--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Dialog.Popper"})}),`,
it does `,e.jsx(o.strong,{children:"not"})," set ",e.jsx(o.code,{children:"aria-owns"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popup.CloseIcon"})," / ",e.jsx(o.code,{children:"Popup.CloseButton"}),": ",e.jsx(o.code,{children:"onClick"})," that calls ",e.jsx(o.code,{children:"model.events.hide()"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popup.Target"}),": ",e.jsx(o.code,{children:"ref"})," and ",e.jsx(o.code,{children:"onClick"})," to open and to receive return focus"]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsxs(o.strong,{children:["Implementation note on ",e.jsx(o.code,{children:"aria-owns"}),":"]})," ",e.jsx(o.code,{children:"useFocusRedirect"})," does not provide ",e.jsx(o.code,{children:"aria-owns"}),`. When you
need remapped reading order for portaled content, add it yourself (see `,e.jsx(o.strong,{children:"Reading order"}),` in
Accessibility Requirements) or prefer `,e.jsx(o.strong,{children:"Dialog"}),", which wires ",e.jsx(o.code,{children:"aria-owns"}),` automatically. Support
varies by browser and screen reader.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Keyboard"})," (",e.jsxs(o.em,{children:["trigger is ",e.jsx(o.code,{children:"Popup.Target"}),", default ",e.jsx(o.code,{children:"SecondaryButton"})]}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," on the trigger opens the popup (standard button behavior)"]}),`
`,e.jsxs(o.li,{children:["On open and close, focus is managed by ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useReturnFocus"})}),` when those
hooks are composed (application overrides: see `,e.jsx(o.strong,{children:"Focus management"})," in Accessibility Requirements)"]}),`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` move focus forward and backward through
interactive elements inside the popup (standard sequential focus behavior)`]}),`
`,e.jsxs(o.li,{children:["With ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusRedirect"})}),`, tabbing past the last or before the first focusable element closes
the popup`]}),`
`,e.jsxs(o.li,{children:[e.jsx("kbd",{children:"Escape"})," closes the popup when ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useCloseOnEscape"})}),` is composed and returns focus per
`,e.jsx(o.code,{children:"useReturnFocus"})]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Screen reader expectations"})," (",e.jsx(o.em,{children:`when built-in behaviors and recommended hooks are used as
intended`}),"):"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`On open, assistive technology should announce the first focused control (often a dismiss control),
the popup name (`,e.jsx(o.code,{children:"Popup.Heading"}),"), and ",e.jsx(o.code,{children:"dialog"})," role"]}),`
`,e.jsxs(o.li,{children:[`Background page content remains available to assistive technology unless you compose
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useAssistiveHideSiblings"})}),` (prefer
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),` for
that pattern)`]}),`
`,e.jsxs(o.li,{children:["Reading order may still follow document order at the end of ",e.jsx(o.code,{children:"body"})," unless ",e.jsx(o.code,{children:"aria-owns"}),` remapping is
added and honored; support varies by browser and screen reader`]}),`
`]}),`
`,e.jsx(o.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(o.p,{children:["Required in application code for an accessible Popup. Always hoist ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})}),` and pass the
same instance to `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup"})})," and behavior hooks. Rows marked ",e.jsx(o.em,{children:"(conditional)"}),` apply only when the
situation matches—otherwise omit.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"If no design spec is provided:"})," compose the Basic Example hooks (",e.jsx(o.code,{children:"useCloseOnOutsideClick"}),`,
`,e.jsx(o.code,{children:"useCloseOnEscape"}),", ",e.jsx(o.code,{children:"useInitialFocus"}),", ",e.jsx(o.code,{children:"useReturnFocus"}),", ",e.jsx(o.code,{children:"useFocusRedirect"}),`); use default focus
behavior; omit `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),`,
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusTrap"})}),", and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useAssistiveHideSiblings"})}),`.
Prefer `,e.jsx(o.strong,{children:"Dialog"})," or ",e.jsx(o.strong,{children:"Modal"})," when those components already match the product need."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Focus management — defaults and developer prompts:"})," When ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})}),` /
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useReturnFocus"})})," are composed, Canvas Kit handles open and close focus automatically. ",e.jsx(o.strong,{children:`State
the default to the developer first.`})," Only set ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` after
the developer (or an explicit design spec) chooses a non-default target. `,e.jsx(o.strong,{children:`Do not generate focus
refs by default.`})]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"When"}),e.jsx(o.th,{children:"Default behavior"}),e.jsx(o.th,{children:"Ask the developer before overriding"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Popup ",e.jsx(o.strong,{children:"opens"})]}),e.jsxs(o.td,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"useInitialFocus"})})," moves focus to the ",e.jsx(o.strong,{children:"first focusable element"})," in DOM order inside the popup (often ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseIcon"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseButton"})}),"). Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),"."]}),e.jsxs(o.td,{children:[e.jsx(o.em,{children:"Which element should receive focus when the popup opens?"})," (Only when the default first focusable element is wrong for the design.) Attach ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," to that element on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})}),"."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Popup ",e.jsx(o.strong,{children:"closes"})]}),e.jsxs(o.td,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"useReturnFocus"})})," moves focus to ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})}),". Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),"."]}),e.jsxs(o.td,{children:[e.jsx(o.em,{children:"Which element should receive focus when the popup closes?"})," (Only when return focus should land somewhere other than ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})}),".)"]})]})]})]}),`
`,e.jsxs(o.p,{children:["If close ",e.jsx(o.strong,{children:"removes the trigger from the DOM"}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` alone is not enough—move focus
after the UI updates (for example with `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useLayoutEffect"})}),`). See
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs#return-focus",rel:"nofollow",children:"Modal > Return Focus"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Custom targets"})," ",e.jsx(o.em,{children:"(conditional)"}),": Apply when using a custom ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"as"})}),` component on
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})}),". ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})})," adds ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onClick"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"ref"})}),`. Custom targets must forward
both to a `,e.jsx(o.strong,{children:"keyboard-focusable"})," element (prefer a native ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"<button>"})}),` or
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"as={SecondaryButton}"})}),` / another Canvas Kit button). Wrap the component in
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"React.forwardRef"})}),` when it does not forward refs by default (required if the popup can open
programmatically before the user clicks the target).`]}),`
`,e.jsxs(o.p,{children:[e.jsxs(o.strong,{children:["Reading order (",e.jsx(o.code,{children:"aria-owns"}),")"]})," ",e.jsx(o.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(o.p,{children:["Popup content is portaled; ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusRedirect"})}),` alone does not fix screen reader reading order.
When a design needs remapped sequential reading order and you are not using `,e.jsx(o.strong,{children:"Dialog"}),", set an ",e.jsx(o.code,{children:"id"}),`
on the stack element and point a sibling element's `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})})," at that ",e.jsx(o.code,{children:"id"}),` (see the
`,e.jsx(o.a,{href:"#focus-redirect",children:"Focus Redirect"})," example). Prefer ",e.jsx(o.strong,{children:"Dialog"}),` when that pattern is the product
default—Dialog wires `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})})," for you."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Modal-like focus trapping"})," ",e.jsx(o.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(o.p,{children:["Prefer ",e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs",rel:"nofollow",children:e.jsx(o.strong,{children:"Modal"})}),`
for blocking tasks. If you must compose trapping on `,e.jsx(o.strong,{children:"Popup"}),", use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusTrap"})}),` with
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useAssistiveHideSiblings"})})," (and typically ",e.jsx(o.strong,{children:"omit"})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusRedirect"})}),`). Focus trapping does
not stop mouse or virtual-cursor escape by itself.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Open focus below the heading"})," ",e.jsx(o.em,{children:"(conditional; see supplementary copy row below)"}),":"]}),`
`,e.jsxs(o.p,{children:["Button-focus variant (matches ",e.jsx(o.a,{href:"#initial-focus",children:"Initial Focus"}),`): when open focus lands on a primary
action below the heading, wire `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),` to the supplementary copy. For the form-field
variant (focus an input), see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-dialog--docs#accessibility-requirements",rel:"nofollow",children:"Dialog"}),`
or
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs#accessibility-requirements",rel:"nofollow",children:"Modal"}),`
`,e.jsx(o.strong,{children:"Open focus below the heading"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

const Example = () => {
  const messageId = useUniqueId();
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({initialFocusRef});

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open</Popup.Target>
      <Popup.Popper>
        <Popup.Card aria-describedby={messageId}>
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <p id={messageId}>Your message has been sent!</p>
          </Popup.Body>
          <Popup.ButtonGroup>
            <Popup.CloseButton as={PrimaryButton} ref={initialFocusRef}>
              OK
            </Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`})}),`
`,e.jsxs(o.p,{children:["When open focus lands on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Heading"})})," itself, add ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"tabIndex={-1}"})}),` so the heading can
receive programmatic focus.`]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Requirement"}),e.jsx(o.th,{children:"How to satisfy"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Shared model + behavior hooks"}),e.jsxs(o.td,{children:["Hoist ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})}),", pass ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model={model}"})})," to ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup"})}),", and compose at least the Basic Example hooks for non-modal dialogs (",e.jsx(o.code,{children:"useCloseOnOutsideClick"}),", ",e.jsx(o.code,{children:"useCloseOnEscape"}),", ",e.jsx(o.code,{children:"useInitialFocus"}),", ",e.jsx(o.code,{children:"useReturnFocus"}),", ",e.jsx(o.code,{children:"useFocusRedirect"}),") unless a design deliberately omits one."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Accessible popup name"}),e.jsxs(o.td,{children:["Use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Heading"})})," so ",e.jsx(o.code,{children:"aria-labelledby"})," on ",e.jsx(o.code,{children:"Popup.Card"})," references a visible title. Do not omit the heading: ",e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"Popup.Card"})," always sets ",e.jsx(o.code,{children:"aria-labelledby"})]}),", and an ",e.jsx(o.code,{children:"aria-label"})," fallback is unreliable when that ID does not exist."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Dismiss control"}),e.jsxs(o.td,{children:["Provide a way to close the popup: ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseButton"})})," with visible text (no extra ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})})," needed), and/or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.CloseIcon"})})," for icon-only dismiss (requires ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Tooltip"})})," or translated ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-label"})}),")."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Keyboard-operable trigger"}),e.jsxs(o.td,{children:["See ",e.jsx(o.strong,{children:"Custom targets"})," above."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Supplementary copy when overriding open focus ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["When ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," places open focus ",e.jsx(o.strong,{children:"below"})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Heading"})}),", assign a unique ",e.jsx(o.code,{children:"id"})," to supplementary text and pass ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})})," on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Card"})}),". See ",e.jsx(o.strong,{children:"Open focus below the heading"})," above and ",e.jsx(o.a,{href:"#initial-focus",children:"Initial Focus"}),"."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Reading order remapping ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["See ",e.jsxs(o.strong,{children:["Reading order (",e.jsx(o.code,{children:"aria-owns"}),")"]})," above, or use ",e.jsx(o.strong,{children:"Dialog"}),"."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Focus trapping / hide siblings ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["Prefer ",e.jsx(o.strong,{children:"Modal"}),". If composing on ",e.jsx(o.strong,{children:"Popup"}),", see ",e.jsx(o.strong,{children:"Modal-like focus trapping"})," above."]})]}),e.jsxs(o.tr,{children:[e.jsxs(o.td,{children:["Open/closed state on the trigger ",e.jsx(o.em,{children:"(conditional)"})]}),e.jsxs(o.td,{children:["See ",e.jsx(o.strong,{children:"Wiring aria-expanded"})," below. ",e.jsx(o.strong,{children:"Default:"})," omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),"."]})]})]})]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"REQUIRED:"})," shared ",e.jsx(o.code,{children:"usePopupModel"}),`, non-modal behavior hooks (unless design omits), accessible
name, dismiss control, keyboard-operable trigger`]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"CONDITIONAL:"})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-describedby"})}),`,
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"tabIndex={-1}"})})," on heading focus, ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusTrap"})}),` /
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"useAssistiveHideSiblings"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),", ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"forwardRef"})}),` on
custom `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})})]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Wiring aria-expanded"})," ",e.jsx(o.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," pattern is ",e.jsx(o.strong,{children:"uncommon"})," for dialog-like Popups—omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})}),` and
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),` unless a review deliberately keeps open focus on the trigger (for example
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," on the trigger per design spec). When required, on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})}),` set
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded={model.state.visibility !== 'hidden'}"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:'aria-haspopup="dialog"'})}),`. See
`,e.jsx(o.strong,{children:"Focus management"})," and the open/closed-state row above."]}),`
`,e.jsx(o.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(o.p,{children:["Do ",e.jsx(o.strong,{children:"not"})," generate code that does the following (see ",e.jsx(o.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Manually set ",e.jsx(o.code,{children:'role="dialog"'}),", ",e.jsx(o.code,{children:"aria-labelledby"}),", or the heading ",e.jsx(o.code,{children:"id"})," on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Card"})}),` or
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Heading"})})," — Canvas Kit hooks wire these"]}),`
`,e.jsxs(o.li,{children:["Call behavior hooks on a ",e.jsx(o.strong,{children:"different"})," model instance than the one passed to ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup"})}),`, or omit
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"model={model}"})})," after composing hooks outside the container"]}),`
`,e.jsxs(o.li,{children:["Assume ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})}),` alone provides focus, escape, outside-click, or redirect behaviors —
compose the hooks (or use `,e.jsx(o.strong,{children:"Dialog"})," / ",e.jsx(o.strong,{children:"Modal"}),")"]}),`
`,e.jsxs(o.li,{children:["Omit ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Popper"})}),", render ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Card"})}),` outside it, or add a custom portal/restructure
instead of `,e.jsxs(o.strong,{children:[e.jsx(o.code,{children:"Popup"})," → ",e.jsx(o.code,{children:"Popup.Popper"})," → ",e.jsx(o.code,{children:"Popup.Card"})]})," without using ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupStack"})})]}),`
`,e.jsxs(o.li,{children:["Use ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"open"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"onClose"})})," props on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup"})}),` — Popup has no controlled visibility props;
use `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"usePopupModel"})})," and ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model.events.show()"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"model.events.hide()"})})]}),`
`,e.jsxs(o.li,{children:["Reach for ",e.jsx(o.strong,{children:"Popup"})," + ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusTrap"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useAssistiveHideSiblings"})})," when ",e.jsx(o.strong,{children:"Modal"}),` already
matches the product need, or for non-modal UX when `,e.jsx(o.strong,{children:"Dialog"})," already matches"]}),`
`,e.jsxs(o.li,{children:["Set ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"initialFocusRef"})})," or ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})}),` by default — state the default focus behavior
first and ask the developer before overriding (see `,e.jsx(o.strong,{children:"Focus management"}),` in Accessibility
Requirements)`]}),`
`,e.jsxs(o.li,{children:["Add ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," / ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-haspopup"})}),` on the default dialog-like Popup path, or bind
`,e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-expanded"})})," to a static value (see ",e.jsx(o.strong,{children:"Wiring aria-expanded"})," in Accessibility Requirements)"]}),`
`,e.jsxs(o.li,{children:["Use a custom ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Target"})})," ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"as"})})," component that does not forward ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"ref"})}),` to a focusable
element — use `,e.jsx(o.strong,{children:e.jsx(o.code,{children:"React.forwardRef"})})," or a Canvas Kit button component instead"]}),`
`,e.jsxs(o.li,{children:["Rely on ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"returnFocusRef"})})," alone when close ",e.jsx(o.strong,{children:"removes the trigger from the DOM"}),` (see
`,e.jsx(o.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal--docs#return-focus",rel:"nofollow",children:"Modal > Return Focus"}),")"]}),`
`,e.jsxs(o.li,{children:["Nest multiple ",e.jsx(o.strong,{children:"Popup"})," instances without deliberate initial focus and return-focus planning"]}),`
`,e.jsxs(o.li,{children:["Assume ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"useFocusRedirect"})})," fixes screen reader reading order, or that ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})}),` remapping
works in all browser and screen reader combinations — test your supported combinations`]}),`
`,e.jsxs(o.li,{children:["Expect ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"Popup.Popper"})})," to set ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"aria-owns"})})," like ",e.jsx(o.strong,{children:"Dialog.Popper"})," — it does not"]}),`
`]}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"Popper",fileName:"/react/"}),e.jsx(i,{name:"Popup",fileName:"/react/"})]}),`
`,e.jsx(o.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"usePopupStack",fileName:"/react/"})," ",e.jsx(i,{name:"useAssistiveHideSiblings",fileName:"/react/"})," ",e.jsx(i,{name:"useBringToTopOnClick",fileName:"/react/"})," ",e.jsx(i,{name:"useCloseOnEscape",fileName:"/react/"})," ",e.jsx(i,{name:"useCloseOnOutsideClick",fileName:"/react/"})," ",e.jsx(i,{name:"useAlwaysCloseOnOutsideClick",fileName:"/react/"})," ",e.jsx(i,{name:"useCloseOnTargetHidden",fileName:"/react/"})," ",e.jsx(i,{name:"useDisableBodyScroll",fileName:"/react/"})," ",e.jsx(i,{name:"useFocusRedirect",fileName:"/react/"})," ",e.jsx(i,{name:"useFocusTrap",fileName:"/react/"})," ",e.jsx(i,{name:"useInitialFocus",fileName:"/react/"})," ",e.jsx(i,{name:"useReturnFocus",fileName:"/react/"})," ",e.jsx(i,{name:"useTransferOnFullscreenEnter",fileName:"/react/"}),e.jsx(i,{name:"useTransferOnFullscreenExit",fileName:"/react/"})]}),`
`,e.jsx(o.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(xe,{file:"./cypress/component/Popup.spec.tsx",initialSpecs:{type:"file",name:"Popup",children:[{type:"describe",name:"Popup",children:[{type:"describe",name:"given the Basic example is rendered",children:[{type:"describe",name:'when the "Delete Item" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"it",name:"should not have any axe errors"},{type:"describe",name:"popup",children:[{type:"it",name:"should have a role of dialog"},{type:"it",name:"should have an aria-labelledby attribute when a heading is provided"},{type:"it",name:"should be labelled by the heading"}]},{type:"describe",name:"when the close button is clicked",children:[{type:"it",name:"should hide the popup"}]},{type:"describe",name:"when the escape key is pressed",children:[{type:"it",name:"should hide the popup"}]},{type:"describe",name:"when outside the popup is clicked",children:[{type:"it",name:"should close the popup"}]}]}]},{type:"describe",name:"given the MultiplePopups example is rendered",children:[{type:"it",name:"should open the Focus Redirect Popup dialog"},{type:"it",name:"should open the Focus Trap Popup dialog"}]},{type:"describe",name:"given the InitialFocus example is rendered",children:[{type:"describe",name:'when the "Initial focus: OK button" target is clicked',children:[{type:"it",name:"should show the Confirmation dialog"},{type:"it",name:"should move initial focus to the OK button"},{type:"it",name:"should set aria-describedby on the dialog for supplementary text"}]},{type:"describe",name:'when the "Initial focus: text input" target is clicked',children:[{type:"it",name:"should show the Quick reply dialog"},{type:"it",name:"should move initial focus to the Message field"},{type:"it",name:"should set aria-describedby on the dialog"}]},{type:"describe",name:'when the "Initial focus: heading" target is clicked',children:[{type:"it",name:"should show the Important notice dialog"},{type:"it",name:"should move initial focus to the heading"}]}]},{type:"describe",name:"given the CustomTarget example is rendered",children:[{type:"describe",name:'when the "Open" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Close" button is clicked',children:[{type:"it",name:"should hide the popup"},{type:"it",name:'should move focus back to the "Open" button'}]}]}]},{type:"describe",name:"given the FocusRedirect example is rendered",children:[{type:"describe",name:'when the "Delete Item" button is clicked',children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Cancel" button has focus and the tab key is pressed',children:[{type:"it",name:"should hide the popup"},{type:"it",name:'should redirect focus to the "Next Focusable Button" button'}]}]}]},{type:"describe",name:"given the PopupWithNonHidablePopup example is rendered",children:[{type:"describe",name:"when Open Popup 1 button is clicked",children:[{type:"it",name:"should open Popup 1"},{type:"describe",name:"then Open Popup 2 button is clicked",children:[{type:"it",name:"should open Popup 2 in front of Popup 1"},{type:"describe",name:"then the close button in Popup 2 is clicked",children:[{type:"it",name:"should close Popup 2"},{type:"it",name:"should not close Popup 1"}]}]}]}]},{type:"describe",name:"given the MixedPopupTypes story is rendered",children:[{type:"it",name:"should start with Window 3 stacked on top of 3 Windows"},{type:"describe",name:"when Window 2 is clicked",children:[{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:'when "Contents of Window 1" text is hovered',children:[{type:"it",name:"should place Window 1 Tooltip above all other stacked UI elements"}]},{type:"describe",name:'when "Delete Item" button is clicked',children:[{type:"it",name:'should open "Delete Item" popup'},{type:"describe",name:"when Window 2 is clicked",children:[{type:"it",name:'should close "Delete Item" popup'},{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:"when Window 2 Tooltip is hovered",children:[{type:"describe",name:'when "Contents of Window 2" text is clicked',children:[{type:"it",name:'should close "Delete Item" popup'},{type:"it",name:"should place Window 2 above others"}]},{type:"describe",name:"when the Escape key is pressed",children:[{type:"it",name:"should close the Tooltip"},{type:"it",name:'should not close the "Delete Item" popup'},{type:"describe",name:"when the Escape key is pressed again",children:[{type:"it",name:'should close the "Delete Item" popup'}]}]}]},{type:"describe",name:"when an area outside popups is clicked",children:[{type:"it",name:'should close "Delete Item" popup'}]},{type:"describe",name:"when the Escape key is pressed",children:[{type:"it",name:'should close "Delete Item" popup'}]},{type:"describe",name:'when the "Delete" button is clicked',children:[{type:"it",name:'should open the "Really Delete Item" popup'},{type:"describe",name:'when "Contents of Window 2" text is focused',children:[{type:"it",name:"should open the tooltip"},{type:"describe",name:"when an area outside popups is clicked",children:[{type:"it",name:"should close the tooltip"},{type:"it",name:'should close the "Really Delete Item" popup'},{type:"it",name:'should NOT close the "Delete Item" popup'}]}]}]}]}]},{type:"describe",name:"given the ReturnFocusTest story is rendered",children:[{type:"describe",name:'when the "Open Popup" is clicked',children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should focus the "Open Popup" button'}]},{type:"describe",name:"when the user clicks the input",children:[{type:"it",name:'should not focus the "Open Popup" button'}]},{type:"describe",name:"when the user clicks on the tabindex button",children:[{type:"it",name:'should not focus the "Open Popup" button'}]},{type:"describe",name:"when the user scrolls to the top",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the bottom",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the left",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user scrolls to the left",children:[{type:"describe",name:"when the user clicks outside",children:[{type:"it",name:'should not focus the "Open Popup" button'}]}]},{type:"describe",name:"when the user closes the popup using the link",children:[{type:"it",name:'should focus the "Name" input'}]}]}]},{type:"describe",name:"given the CloseOnTargetHiddenTest story is rendered",children:[{type:"describe",name:'when the "Open Popup" is clicked',children:[{type:"it",name:"should open the popup"},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 100",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 450",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 400",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 150",children:[{type:"it",name:"should not close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 65",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollTop: 480",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 65",children:[{type:"it",name:"should close the popup"}]},{type:"describe",name:"when the scrollable area is scrolled to scrollLeft: 480",children:[{type:"it",name:"should close the popup"}]}]}]},{type:"describe",name:"given the TooltipReturnFocus example is rendered",children:[{type:"describe",name:"when the icon button is clicked",children:[{type:"it",name:"should show the popup"},{type:"describe",name:'when the "Close" icon button is clicked',children:[{type:"it",name:"should focus on the icon button"},{type:"it",name:"should show the tooltip"}]}]}]},{type:"describe",name:"given the ComboboxWithinPopup example is rendered",children:[{type:"describe",name:"when the button is clicked",children:[{type:"it",name:"should show the popup"},{type:"describe",name:"when is open and the first item is clicked",children:[{type:"it",name:"should not close the popup on select"}]}]}]},{type:"describe",name:"given the [Testing/Popups/Popup, PopupWithFallbackPlacements] example is rendered",children:[{type:"describe",name:"check the fallback placements",children:[{type:"describe",name:"when the preferred placement is set to top",children:[{type:"it",name:"should show the fallback placement: bottom"}]},{type:"describe",name:"when the preferred placement is set to left",children:[{type:"it",name:"should show the fallback placement: right"}]},{type:"describe",name:"when the preferred placement is set to right",children:[{type:"it",name:"should show the fallback placement: left"}]},{type:"describe",name:"when the preferred placement is set to bottom",children:[{type:"it",name:"should show the fallback placement: top"}]}]}]}]}]},name:"Popup"})]})}function ze(s={}){const{wrapper:o}={...le(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(ie,{...s})}):ie(s)}const Ye={title:"Components/Popups/Popup",component:n,tags:["autodocs"],parameters:{docs:{page:ze}}},F={render:G},B={render:X},T={render:Q},R={render:J},I={render:K},O={render:$},S={render:V},E={render:U},D={render:z};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: InitialFocusExample
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: MultiplePopupsExample
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: NestedPopupsExample
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: FocusRedirectExample
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: FocusTrapExample
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: CustomTargetExample
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: FullScreenExample
}`,...D.parameters?.docs?.source}}};const Rn=["Basic","InitialFocus","MultiplePopups","NestedPopups","FocusRedirect","FocusTrap","RTL","CustomTarget","FullScreen"];export{F as Basic,E as CustomTarget,I as FocusRedirect,O as FocusTrap,D as FullScreen,B as InitialFocus,T as MultiplePopups,R as NestedPopups,S as RTL,Rn as __namedExportsOrder,Ye as default};
