import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as h}from"./index-IfJi-UCQ.js";import{u as i}from"./getTransformFromPlacement-BtpPb64q.js";import{u as a}from"./useCloseOnEscape-Ci8oPZu-.js";import{a as z}from"./useTooltip-BHLrFCpr.js";import{c as S,b as W}from"./cs-rfTTo7Bg.js";import{P as o}from"./Popup-C7rWMGxh.js";import{p as r}from"./px2rem-C0KbprIx.js";import{p as F,g as l}from"./index-5dfzm_kn.js";import{u as m,a as P}from"./useInitialFocus-CxEazES6.js";import{u as j}from"./useReturnFocus-D1Qs81ZF.js";import{S as u}from"./SecondaryButton-CFAfozPp.js";import{F as c}from"./FormField-I1tQCnQg.js";import{C as d}from"./Combobox-B1ruOAZ6.js";import{R as V}from"./index-BDZ5T_cP.js";import{P as q,u as U}from"./Popper-BRNkOZhn.js";import{a as G}from"./components-Dyf4Q_nV.js";import{T as b}from"./Tooltip-Rs9DkMIQ.js";import{D as B}from"./DeleteButton-DCE8PhIQ.js";import{a as J}from"./useMount-CAK2BN3_.js";import{F as I}from"./Flex-3MZwcTIN.js";import{T as K}from"./TextInput-CGpXr3az.js";import{T as _}from"./TertiaryButton-BROdkGKz.js";import{s as Q}from"./stack-RthV30X2.js";import{u as X}from"./useFocusTrap-DPtB77AI.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./mergeStyles-DA3z7m0v.js";import"./Box-Dji2xsFp.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./Card-C0w1QPqP.js";import"./Text-CSA8kpWB.js";import"./index-B2vXpe_3.js";import"./x-D9WWWeCM.js";import"./types-wqmYQQWa.js";import"./usePopupTarget-Cgr2fBV0.js";import"./BaseButton-B0mfYlEf.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./Button-6WgYUb9O.js";import"./Menu-DSo02gQf.js";import"./useListItemSelect-DneYhCSJ.js";import"./OverflowTooltip-COhmJumV.js";import"./useFocusRedirect-CbmVYS2o.js";import"./check-small-C7Z-gSGs.js";import"./chevron-right-small-DxmMaev8.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-DKylCnBg.js";import"./types-DXdjelYI.js";const Z=G()(t=>{const s=h.useRef(-1),p=h.useCallback(R=>{s.current=requestAnimationFrame(()=>{t.state.stackRef.current?.contains(R.target)&&q.bringToTop(t.state.stackRef.current)})},[t.state.stackRef]),n=t.state.visibility!=="hidden";return h.useLayoutEffect(()=>{if(n)return document.addEventListener("click",p),()=>{cancelAnimationFrame(s.current),document.removeEventListener("click",p)}},[n,p]),{}}),E=[{name:"useBringToTopOnClick",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useBringToTopOnClick.ts",description:`This hook will bring an element to the top of the stack when any element inside the provided
{@link PopupModel}'s \`state.stackRef\` element is clicked. If {@link PopupPopper Popup.Popper} was
used or \`PopupStack.add\` provided an \`owner\`, all "child" popups will also be brought to the top.
A "child" popup is a Popup that was opened from another Popup. Usually this is a Tooltip or
Select component inside something like a Modal.

This should be used on popup elements that are meant to persist (i.e. Windows).`,declarations:[{name:"useBringToTopOnClick",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useBringToTopOnClick.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(E):window.__docs=(window.__docs||[]).concat(E);const ee=S({width:r(400),height:r(400),overflow:"scroll",padding:F.xxs,position:"relative","& > div":{width:r(950),height:r(950),"& > p:first-child":{marginBlockEnd:r(400)}}}),oe=S({position:"absolute",width:r(950),height:r(950),display:"flex",top:0,left:0,justifyContent:"center"}),D=()=>{const t=i();return a(t),z(t),e.jsx("div",{className:ee,"data-testid":"scroll-area",children:e.jsxs("div",{children:[e.jsx("p",{children:"Scroll down"}),e.jsx("p",{children:"Scroll right and click on the button"}),e.jsxs(o,{model:t,children:[e.jsx("div",{className:oe,children:e.jsx(o.Target,{"data-testid":"target",style:{alignSelf:"center"},children:"Open Popup"})}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Body,{children:e.jsx("p",{children:"Scroll in any direction. The popup should close when at least 50% of the target button is hidden from view"})})]})})]})]})})};D.__RAW__=`import {
  Popup,
  useCloseOnEscape,
  useCloseOnTargetHidden,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  width: px2rem(400),
  height: px2rem(400),
  overflow: 'scroll',
  padding: system.padding.xxs,
  position: 'relative',
  '& > div': {
    width: px2rem(950),
    height: px2rem(950),
    '& > p:first-child': {
      marginBlockEnd: px2rem(400),
    },
  },
});

const popupInnerStyles = createStyles({
  position: 'absolute',
  width: px2rem(950),
  height: px2rem(950),
  display: 'flex',
  top: 0,
  left: 0,
  justifyContent: 'center',
});

export const CloseOnTargetHiddenTest = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useCloseOnTargetHidden(model);

  return (
    <div className={containerStyles} data-testid="scroll-area">
      <div>
        <p>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <div className={popupInnerStyles}>
            <Popup.Target data-testid="target" style={{alignSelf: 'center'}}>
              Open Popup
            </Popup.Target>
          </div>
          <Popup.Popper>
            <Popup.Card>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Body>
                <p>
                  Scroll in any direction. The popup should close when at least 50% of the target
                  button is hidden from view
                </p>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </div>
    </div>
  );
};
`;const N=()=>{const t=i();return m(t),a(t),P(t),j(t),e.jsxs(o,{model:t,children:[e.jsx(o.Target,{as:u,children:"Open Popup"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Popup With Combobox"}),e.jsx(o.Body,{children:e.jsxs(c,{orientation:"vertical",children:[e.jsx(c.Label,{children:"Choose Your Food"}),e.jsxs(d,{items:["Pizza","Cheeseburger","Fries","Hot Dog"],children:[e.jsx(c.Input,{as:d.Input}),e.jsx(d.Menu.Popper,{children:e.jsx(d.Menu.Card,{children:e.jsx(d.Menu.List,{children:s=>e.jsx(d.Menu.Item,{children:s})})})})]})]})})]})})]})};N.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Combobox} from '@workday/canvas-kit-react/combobox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

export const ComboboxWithinPopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target as={SecondaryButton}>Open Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup With Combobox</Popup.Heading>
          <Popup.Body>
            <FormField orientation="vertical">
              <FormField.Label>Choose Your Food</FormField.Label>
              <Combobox items={['Pizza', 'Cheeseburger', 'Fries', 'Hot Dog']}>
                <FormField.Input as={Combobox.Input} />
                <Combobox.Menu.Popper>
                  <Combobox.Menu.Card>
                    <Combobox.Menu.List>
                      {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                    </Combobox.Menu.List>
                  </Combobox.Menu.Card>
                </Combobox.Menu.Popper>
              </Combobox>
            </FormField>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const g=({children:t,heading:s,relativeNode:p,top:n,left:R})=>{const x=i({initialVisibility:"visible"});return U(x.state.stackRef),Z(x),J(()=>{const O=x.state.stackRef.current,M=p.current.getBoundingClientRect();O.style.position="absolute",O.style.top=`${n+M.top}px`,O.style.left=`${R+M.left}px`}),V.createPortal(e.jsx(o,{model:x,children:e.jsxs(o.Card,{cs:{width:r(500)},children:[e.jsx(o.Heading,{children:s}),e.jsx(o.Body,{children:t})]})}),x.state.stackRef.current)},H=({heading:t,deleteText:s,children:p})=>{const n=i();return P(n),j(n),m(n),a(n),e.jsxs(o,{model:n,children:[e.jsx(o.Target,{as:B,cs:{marginInlineEnd:l.md},children:s}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{width:r(400),padding:F.md},children:[e.jsx(o.Heading,{children:t}),e.jsx(o.Body,{children:p({onClose:n.events.hide})})]})})]})},A=()=>{const t=h.useRef(null);return e.jsxs("div",{ref:t,style:{height:420},children:[e.jsx(g,{heading:"Window 1",top:50,left:50,relativeNode:t,children:e.jsx(b,{title:"Really long tooltip showing how popup stacks overlap 1",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 1"})})}),e.jsx(g,{heading:"Window 2",top:100,left:250,relativeNode:t,children:e.jsx(b,{title:"Really long tooltip showing how popup stacks overlap 2",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 2"})})}),e.jsx(g,{heading:"Window 4",top:300,left:250,relativeNode:t,children:e.jsx("div",{children:e.jsx(b,{title:"Really long tooltip showing how popup stacks overlap 3",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 4"})})})}),e.jsx(g,{heading:"Window 3",top:200,left:75,relativeNode:t,children:e.jsxs("div",{children:[e.jsx(b,{title:"Really long tooltip showing how popup stacks overlap 4",children:e.jsx("span",{tabIndex:0,onClick:()=>console.log("clicked"),children:"Contents of Window 3"})}),e.jsx("div",{children:e.jsx(H,{heading:"Delete Item",deleteText:"Delete Item",children:({onClose:s})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBlockEnd:W(l.xl)},children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsx(H,{heading:"Really Delete Item",deleteText:"Delete",children:({onClose:p})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBlockEnd:W(l.xl)},children:"Are you REALLY sure you'd like to delete the item titled 'My Item'?"}),e.jsx(B,{cs:{marginInlineEnd:l.md},onClick:p,children:"Really Delete"}),e.jsx(u,{onClick:p,children:"Cancel"})]})}),e.jsx(u,{onClick:s,children:"Cancel"})]})})})]})})]})};A.__RAW__=`import React from 'react';
import ReactDOM from 'react-dom';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {useMount} from '@workday/canvas-kit-react/common';
import {
  Popup,
  useBringToTopOnClick,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  usePopupStack,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

interface WindowProps {
  top: number;
  left: number;
  heading: string;
  children: React.ReactNode;
  relativeNode: React.RefObject<HTMLDivElement>;
}

const Window = ({children, heading, relativeNode, top, left}: WindowProps) => {
  const model = usePopupModel({
    initialVisibility: 'visible',
  });

  usePopupStack(model.state.stackRef);
  useBringToTopOnClick(model);

  // position Window relative to a container
  useMount(() => {
    const element = model.state.stackRef.current;
    const rect = relativeNode.current.getBoundingClientRect();
    element.style.position = 'absolute';
    element.style.top = \`\${top + rect.top}px\`;
    element.style.left = \`\${left + rect.left}px\`;
  });

  return ReactDOM.createPortal(
    <Popup model={model}>
      <Popup.Card cs={{width: px2rem(500)}}>
        <Popup.Heading>{heading}</Popup.Heading>
        <Popup.Body>{children}</Popup.Body>
      </Popup.Card>
    </Popup>,
    model.state.stackRef.current
  );
};

const TempPopup = ({
  heading,
  deleteText,
  children,
}: {
  heading: string;
  deleteText: string;
  children: ({onClose}: {onClose: () => void}) => React.ReactNode;
}) => {
  const model = usePopupModel();

  useInitialFocus(model);
  useReturnFocus(model);
  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton} cs={{marginInlineEnd: system.gap.md}}>
        {deleteText}
      </Popup.Target>
      <Popup.Popper>
        <Popup.Card cs={{width: px2rem(400), padding: system.padding.md}}>
          <Popup.Heading>{heading}</Popup.Heading>
          <Popup.Body>{children({onClose: model.events.hide})}</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

export const MixedPopupTypes = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{height: 420}}>
      <Window heading="Window 1" top={50} left={50} relativeNode={ref}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap 1">
          <span tabIndex={0}>Contents of Window 1</span>
        </Tooltip>
      </Window>
      <Window heading="Window 2" top={100} left={250} relativeNode={ref}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap 2">
          <span tabIndex={0}>Contents of Window 2</span>
        </Tooltip>
      </Window>
      <Window heading="Window 4" top={300} left={250} relativeNode={ref}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap 3">
            <span tabIndex={0}>Contents of Window 4</span>
          </Tooltip>
        </div>
      </Window>
      <Window heading="Window 3" top={200} left={75} relativeNode={ref}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap 4">
            <span tabIndex={0} onClick={() => console.log('clicked')}>
              Contents of Window 3
            </span>
          </Tooltip>
          <div>
            <TempPopup heading="Delete Item" deleteText="Delete Item">
              {({onClose}) => (
                <>
                  <div style={{marginBlockEnd: cssVar(system.gap.xl)}}>
                    Are you sure you'd like to delete the item titled 'My Item'?
                  </div>
                  <TempPopup heading="Really Delete Item" deleteText="Delete">
                    {({onClose}) => (
                      <>
                        <div style={{marginBlockEnd: cssVar(system.gap.xl)}}>
                          Are you REALLY sure you'd like to delete the item titled 'My Item'?
                        </div>

                        <DeleteButton cs={{marginInlineEnd: system.gap.md}} onClick={onClose}>
                          Really Delete
                        </DeleteButton>
                        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                      </>
                    )}
                  </TempPopup>
                  <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                </>
              )}
            </TempPopup>
          </div>
        </div>
      </Window>
    </div>
  );
};
`;const L=()=>{const t=i(),s=i();return m(t),a(t),e.jsxs(I,{cs:{gap:l.md},children:[e.jsxs(o,{model:t,children:[e.jsx(o.Target,{children:"Open Popup 1"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{"aria-label":"Popup 1",children:[e.jsx(o.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Contents of Popup 1"}),e.jsx(o.Target,{model:s,children:"Open Popup 2"})]})]})})]}),e.jsx(o,{model:s,children:e.jsx(o.Popper,{children:e.jsxs(o.Card,{"aria-label":"Popup 1",children:[e.jsx(o.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(o.Heading,{children:"Popup 2 (Not hidable on outside click)"}),e.jsx(o.Body,{children:"Contents of Popup 2"})]})})})]})};L.__RAW__=`import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

export const PopupWithNonHidablePopup = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  return (
    <Flex cs={{gap: system.gap.md}}>
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 1</p>
              <Popup.Target model={popup2}>Open Popup 2</Popup.Target>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Heading>Popup 2 (Not hidable on outside click)</Popup.Heading>
            <Popup.Body>Contents of Popup 2</Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Flex>
  );
};
`;const te=S({width:r(400),height:r(400),overflow:"scroll",padding:F.xxs,"& > div":{width:r(950),"& > p:first-child":{marginBlockEnd:r(400)}}}),$=()=>{const t=i();return m(t),a(t),P(t),j(t),e.jsx("div",{className:te,"data-testid":"scroll-area",children:e.jsxs("div",{children:[e.jsx("p",{children:"Scroll down"}),e.jsx("p",{children:"Scroll right and click on the button"}),e.jsxs(o,{model:t,children:[e.jsxs(c,{id:"return-focus-text-input",cs:{marginInlineStart:r(400)},children:[e.jsx(c.Label,{children:"Name"}),e.jsx(c.Input,{as:K})]}),e.jsxs(I,{cs:{marginBlockEnd:r(400),marginInlineStart:r(410)},children:[e.jsx(u,{id:"return-focus-button-tabindex",tabIndex:-1,children:"Button with TabIndex=-1"}),e.jsx(o.Target,{"data-testid":"target",children:"Open Popup"})]}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:'The "Open Popup" button should not receive focus if:'}),e.jsxs("ul",{children:[e.jsx("li",{children:"You click on the input"}),e.jsx("li",{children:'You scroll the container so that less than half of the "Open Popup" is showing'}),e.jsx("li",{children:e.jsx(_,{"data-testid":"focus-text-input-link",onClick:()=>{t.events.hide(),document.getElementById("input-return-focus-text-input").focus()},children:"You click this link"})})]})]})]})})]})]})})};$.__RAW__=`import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  width: px2rem(400),
  height: px2rem(400),
  overflow: 'scroll',
  padding: system.padding.xxs,
  '& > div': {
    width: px2rem(950),
    '& > p:first-child': {
      marginBlockEnd: px2rem(400),
    },
  },
});

export const ReturnFocusTest = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <div className={containerStyles} data-testid="scroll-area">
      <div>
        <p>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <FormField id="return-focus-text-input" cs={{marginInlineStart: px2rem(400)}}>
            <FormField.Label>Name</FormField.Label>
            <FormField.Input as={TextInput} />
          </FormField>
          <Flex cs={{marginBlockEnd: px2rem(400), marginInlineStart: px2rem(410)}}>
            <SecondaryButton id="return-focus-button-tabindex" tabIndex={-1}>
              Button with TabIndex=-1
            </SecondaryButton>
            <Popup.Target data-testid="target">Open Popup</Popup.Target>
          </Flex>
          <Popup.Popper>
            <Popup.Card>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Body>
                <p>The "Open Popup" button should not receive focus if:</p>
                <ul>
                  <li>You click on the input</li>
                  <li>
                    You scroll the container so that less than half of the "Open Popup" is showing
                  </li>
                  <li>
                    <TertiaryButton
                      data-testid="focus-text-input-link"
                      onClick={() => {
                        model.events.hide();
                        document.getElementById('input-return-focus-text-input').focus();
                      }}
                    >
                      You click this link
                    </TertiaryButton>
                  </li>
                </ul>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </div>
    </div>
  );
};
`;const Y=()=>{const t=i();return m(t),a(t),P(t),j(t),e.jsxs(o,{model:t,children:[e.jsx(b,{title:"Open Popup",children:e.jsx(o.Target,{as:_,icon:Q})}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Popup"}),e.jsx(o.Body,{children:"Contents"})]})})]})};Y.__RAW__=`import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {stackIcon} from '@workday/canvas-system-icons-web';

export const TooltipReturnFocus = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Tooltip title="Open Popup">
        <Popup.Target as={TertiaryButton} icon={stackIcon} />
      </Tooltip>
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup</Popup.Heading>
          <Popup.Body>Contents</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
`;const ro={title:"Testing/Popups/Popup",component:o},y={render:A},C={render:L},f={render:()=>{const t=i();m(t),a(t),P(t),j(t),X(t);const s="popup-test-id",p=t.state.visibility!=="hidden";return h.useLayoutEffect(()=>{p&&t.state.stackRef.current&&t.state.stackRef.current.setAttribute("id",s)},[t.state.stackRef,p]),e.jsxs(o,{model:t,children:[e.jsxs("div",{children:[e.jsx("p",{children:'Scroll down and click on "Delete Item". The browser should not scroll.'}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsxs(I,{cs:{gap:l.md},children:[e.jsx(o.Target,{as:B,children:"Delete Item"}),e.jsx("div",{"aria-owns":s,style:{position:"absolute"}}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{cs:{width:r(400),padding:F.md},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsx(o.Body,{children:e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(I,{cs:{gap:l.md},children:[e.jsx(o.CloseButton,{as:B,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})}),e.jsx(u,{children:"Next Focusable Button"}),e.jsx(u,{children:"Focusable Button After Popup"})]})]})}},k={render:Y},w={render:N},v={render:$},T={render:D};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: MixedPopupTypesExample
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: PopupWithNonHidablePopupExample
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const model = usePopupModel();
    useCloseOnOutsideClick(model);
    useCloseOnEscape(model);
    useInitialFocus(model);
    useReturnFocus(model);
    useFocusTrap(model);
    const popupId = 'popup-test-id';
    const visible = model.state.visibility !== 'hidden';
    React.useLayoutEffect(() => {
      if (visible && model.state.stackRef.current) {
        model.state.stackRef.current.setAttribute('id', popupId);
      }
    }, [model.state.stackRef, visible]);
    return <Popup model={model}>
        <div>
          <p>Scroll down and click on "Delete Item". The browser should not scroll.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <Flex cs={{
        gap: system.gap.md
      }}>
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <div aria-owns={popupId} style={{
          position: 'absolute'
        }} />
          <Popup.Popper>
            <Popup.Card cs={{
            width: px2rem(400),
            padding: system.padding.md
          }}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading>Delete Item</Popup.Heading>
              <Popup.Body>
                <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
              </Popup.Body>
              <Flex cs={{
              gap: system.gap.md
            }}>
                <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
            </Popup.Card>
          </Popup.Popper>
          <SecondaryButton>Next Focusable Button</SecondaryButton>
          <SecondaryButton>Focusable Button After Popup</SecondaryButton>
        </Flex>
      </Popup>;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: TooltipReturnFocusExample
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: ComboboxWithinPopupExample
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ReturnFocusTestExample
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: CloseOnTargetHiddenTestExample
}`,...T.parameters?.docs?.source}}};const so=["MixedPopupTypes","PopupWithNonHidablePopup","PopupWithBodyScroll","TooltipReturnFocus","ComboboxWithinPopup","ReturnFocusTest","CloseOnTargetHiddenTest"];export{T as CloseOnTargetHiddenTest,w as ComboboxWithinPopup,y as MixedPopupTypes,f as PopupWithBodyScroll,C as PopupWithNonHidablePopup,v as ReturnFocusTest,k as TooltipReturnFocus,so as __namedExportsOrder,ro as default};
