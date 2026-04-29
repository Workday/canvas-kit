import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as x}from"./index-IfJi-UCQ.js";import{u as i}from"./getTransformFromPlacement-Dk4LTPXM.js";import{u as n}from"./useCloseOnEscape-CMK3mwZG.js";import{a as N}from"./useTooltip-p8F4NfJ4.js";import{P as o}from"./Popup-FGUZYXID.js";import{u,a as b}from"./useInitialFocus-CouubvfO.js";import{u as h}from"./useReturnFocus-BgzhEoBI.js";import{S as d}from"./SecondaryButton-oNuQLwcg.js";import{F as a}from"./FormField-U6jJIaHC.js";import{C as l}from"./Combobox-DEtPx4Qe.js";import{R as L}from"./index-BDZ5T_cP.js";import{P as A,u as Y}from"./Popper-BRmPGiuC.js";import{a as $}from"./components-XIe_upcR.js";import{T as m}from"./Tooltip-De1KsO5U.js";import{D as w}from"./DeleteButton-Dvh1y2IE.js";import{a as z}from"./useMount-CAK2BN3_.js";import{F as v}from"./Flex-BKzcw9XF.js";import{T as q}from"./TextInput-nG1V2_dd.js";import{T as M}from"./TertiaryButton-DaDaXMfE.js";import{s as V}from"./stack-BhgEyuPa.js";import{u as U}from"./useFocusTrap-BX9mV5eD.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./index-CYsyLHR7.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./index-DKOKnxgv.js";import"./px2rem-C0KbprIx.js";import"./x-BnLC6lG-.js";import"./types-wqmYQQWa.js";import"./usePopupTarget-B7GfDsu7.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./Button-Cp7fe3Zs.js";import"./Menu-Blawm5fT.js";import"./useListItemSelect-D10U8d3g.js";import"./OverflowTooltip-B7jd-TXK.js";import"./useFocusRedirect-ETf1Gakg.js";import"./check-small-CEmhQ7AS.js";import"./chevron-right-small-CQ6vqfU4.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-CbBD4ERB.js";import"./types-DXdjelYI.js";const G=$()(t=>{const r=x.useRef(-1),s=x.useCallback(B=>{r.current=requestAnimationFrame(()=>{t.state.stackRef.current?.contains(B.target)&&A.bringToTop(t.state.stackRef.current)})},[t.state.stackRef]),p=t.state.visibility!=="hidden";return x.useLayoutEffect(()=>{if(p)return document.addEventListener("click",s),()=>{cancelAnimationFrame(r.current),document.removeEventListener("click",s)}},[p,s]),{}}),I=[{name:"useBringToTopOnClick",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useBringToTopOnClick.ts",description:`This hook will bring an element to the top of the stack when any element inside the provided
{@link PopupModel}'s \`state.stackRef\` element is clicked. If {@link PopupPopper Popup.Popper} was
used or \`PopupStack.add\` provided an \`owner\`, all "child" popups will also be brought to the top.
A "child" popup is a Popup that was opened from another Popup. Usually this is a Tooltip or
Select component inside something like a Modal.

This should be used on popup elements that are meant to persist (i.e. Windows).`,declarations:[{name:"useBringToTopOnClick",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/popup/lib/hooks/useBringToTopOnClick.ts"}],tags:{},type:{kind:"function",name:{kind:"symbol",name:"createElemPropsHook"},parameters:[{kind:"parameter",name:"model",description:"",tags:{},declarations:[],type:{kind:"symbol",name:"PopupModel"},required:!0},{kind:"parameter",name:"elemProps",description:"",tags:{},declarations:[],type:{kind:"object",properties:[]},required:!1},{kind:"parameter",name:"ref",description:"",tags:{},declarations:[],type:{kind:"external",name:"React.Ref",url:"https://reactjs.org/docs/refs-and-the-dom.html"},required:!1}],returnType:{kind:"object",properties:[]}}}];window.__updateDocs?window.__updateDocs?.(I):window.__docs=(window.__docs||[]).concat(I);const W=()=>{const t=i();return n(t),N(t),e.jsx("div",{style:{width:400,height:400,overflow:"scroll",padding:4,position:"relative"},"data-testid":"scroll-area",children:e.jsxs("div",{style:{width:950,height:950},children:[e.jsx("p",{style:{marginBottom:400},children:"Scroll down"}),e.jsx("p",{children:"Scroll right and click on the button"}),e.jsxs(o,{model:t,children:[e.jsx("div",{style:{position:"absolute",width:950,height:950,display:"flex",top:0,left:0,justifyContent:"center"},children:e.jsx(o.Target,{"data-testid":"target",style:{alignSelf:"center"},children:"Open Popup"})}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Body,{children:e.jsx("p",{children:"Scroll in any direction. The popup should close when at least 50% of the target button is hidden from view"})})]})})]})]})})};W.__RAW__=`import {
  Popup,
  useCloseOnEscape,
  useCloseOnTargetHidden,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export const CloseOnTargetHiddenTest = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useCloseOnTargetHidden(model);

  return (
    <div
      style={{width: 400, height: 400, overflow: 'scroll', padding: 4, position: 'relative'}}
      data-testid="scroll-area"
    >
      <div style={{width: 950, height: 950}}>
        <p style={{marginBottom: 400}}>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <div
            style={{
              position: 'absolute',
              width: 950,
              height: 950,
              display: 'flex',
              top: 0,
              left: 0,
              justifyContent: 'center',
            }}
          >
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
`;const S=()=>{const t=i();return u(t),n(t),b(t),h(t),e.jsxs(o,{model:t,children:[e.jsx(o.Target,{as:d,children:"Open Popup"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Popup With Combobox"}),e.jsx(o.Body,{children:e.jsxs(a,{orientation:"vertical",children:[e.jsx(a.Label,{children:"Choose Your Food"}),e.jsxs(l,{items:["Pizza","Cheeseburger","Fries","Hot Dog"],children:[e.jsx(a.Input,{as:l.Input}),e.jsx(l.Menu.Popper,{children:e.jsx(l.Menu.Card,{children:e.jsx(l.Menu.List,{children:r=>e.jsx(l.Menu.Item,{children:r})})})})]})]})})]})})]})};S.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
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
`;const P=({children:t,heading:r,relativeNode:s,top:p,left:B})=>{const c=i({initialVisibility:"visible"});return Y(c.state.stackRef),G(c),z(()=>{const F=c.state.stackRef.current,R=s.current.getBoundingClientRect();F.style.position="absolute",F.style.top=`${p+R.top}px`,F.style.left=`${B+R.left}px`}),L.createPortal(e.jsx(o,{model:c,children:e.jsxs(o.Card,{width:500,children:[e.jsx(o.Heading,{children:r}),e.jsx(o.Body,{children:t})]})}),c.state.stackRef.current)},O=({heading:t,deleteText:r,children:s})=>{const p=i();return b(p),h(p),u(p),n(p),e.jsxs(o,{model:p,children:[e.jsx(o.Target,{as:w,style:{marginRight:"16px"},children:r}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{width:400,padding:"s",children:[e.jsx(o.Heading,{children:t}),e.jsx(o.Body,{children:s({onClose:p.events.hide})})]})})]})},H=()=>{const t=x.useRef(null);return e.jsxs("div",{ref:t,style:{height:420},children:[e.jsx(P,{heading:"Window 1",top:50,left:50,relativeNode:t,children:e.jsx(m,{title:"Really long tooltip showing how popup stacks overlap 1",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 1"})})}),e.jsx(P,{heading:"Window 2",top:100,left:250,relativeNode:t,children:e.jsx(m,{title:"Really long tooltip showing how popup stacks overlap 2",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 2"})})}),e.jsx(P,{heading:"Window 4",top:300,left:250,relativeNode:t,children:e.jsx("div",{children:e.jsx(m,{title:"Really long tooltip showing how popup stacks overlap 3",children:e.jsx("span",{tabIndex:0,children:"Contents of Window 4"})})})}),e.jsx(P,{heading:"Window 3",top:200,left:75,relativeNode:t,children:e.jsxs("div",{children:[e.jsx(m,{title:"Really long tooltip showing how popup stacks overlap 4",children:e.jsx("span",{tabIndex:0,onClick:()=>console.log("clicked"),children:"Contents of Window 3"})}),e.jsx("div",{children:e.jsx(O,{heading:"Delete Item",deleteText:"Delete Item",children:({onClose:r})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"24px"},children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsx(O,{heading:"Really Delete Item",deleteText:"Delete",children:({onClose:s})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"24px"},children:"Are you REALLY sure you'd like to delete the item titled 'My Item'?"}),e.jsx(w,{style:{marginRight:"16px"},onClick:s,children:"Really Delete"}),e.jsx(d,{onClick:s,children:"Cancel"})]})}),e.jsx(d,{onClick:r,children:"Cancel"})]})})})]})})]})};H.__RAW__=`import React from 'react';
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
      <Popup.Card width={500}>
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
      <Popup.Target as={DeleteButton} style={{marginRight: '16px'}}>
        {deleteText}
      </Popup.Target>
      <Popup.Popper>
        <Popup.Card width={400} padding="s">
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
                  <div style={{marginBottom: '24px'}}>
                    Are you sure you'd like to delete the item titled 'My Item'?
                  </div>
                  <TempPopup heading="Really Delete Item" deleteText="Delete">
                    {({onClose}) => (
                      <>
                        <div style={{marginBottom: '24px'}}>
                          Are you REALLY sure you'd like to delete the item titled 'My Item'?
                        </div>

                        <DeleteButton style={{marginRight: '16px'}} onClick={onClose}>
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
`;const _=()=>{const t=i(),r=i();return u(t),n(t),e.jsxs(v,{gap:"s",children:[e.jsxs(o,{model:t,children:[e.jsx(o.Target,{children:"Open Popup 1"}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{"aria-label":"Popup 1",children:[e.jsx(o.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Contents of Popup 1"}),e.jsx(o.Target,{model:r,children:"Open Popup 2"})]})]})})]}),e.jsx(o,{model:r,children:e.jsx(o.Popper,{children:e.jsxs(o.Card,{"aria-label":"Popup 1",children:[e.jsx(o.CloseIcon,{"aria-label":"Close",size:"small"}),e.jsx(o.Heading,{children:"Popup 2 (Not hidable on outside click)"}),e.jsx(o.Body,{children:"Contents of Popup 2"})]})})})]})};_.__RAW__=`import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export const PopupWithNonHidablePopup = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  return (
    <Flex gap="s">
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
`;const D=()=>{const t=i();return u(t),n(t),b(t),h(t),e.jsx("div",{style:{width:400,height:400,overflow:"scroll",padding:4},"data-testid":"scroll-area",children:e.jsxs("div",{style:{width:950},children:[e.jsx("p",{style:{marginBottom:400},children:"Scroll down"}),e.jsx("p",{children:"Scroll right and click on the button"}),e.jsxs(o,{model:t,children:[e.jsxs(a,{id:"return-focus-text-input",cs:{marginLeft:400},children:[e.jsx(a.Label,{children:"Name"}),e.jsx(a.Input,{as:q})]}),e.jsxs(v,{style:{marginBottom:400,marginLeft:410},children:[e.jsx(d,{id:"return-focus-button-tabindex",tabIndex:-1,children:"Button with TabIndex=-1"}),e.jsx(o.Target,{"data-testid":"target",children:"Open Popup"})]}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:'The "Open Popup" button should not receive focus if:'}),e.jsxs("ul",{children:[e.jsx("li",{children:"You click on the input"}),e.jsx("li",{children:'You scroll the container so that less than half of the "Open Popup" is showing'}),e.jsx("li",{children:e.jsx(M,{"data-testid":"focus-text-input-link",onClick:()=>{t.events.hide(),document.getElementById("input-return-focus-text-input").focus()},children:"You click this link"})})]})]})]})})]})]})})};D.__RAW__=`import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
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

export const ReturnFocusTest = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <div
      style={{width: 400, height: 400, overflow: 'scroll', padding: 4}}
      data-testid="scroll-area"
    >
      <div style={{width: 950}}>
        <p style={{marginBottom: 400}}>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <FormField id="return-focus-text-input" cs={{marginLeft: 400}}>
            <FormField.Label>Name</FormField.Label>
            <FormField.Input as={TextInput} />
          </FormField>
          <Flex style={{marginBottom: 400, marginLeft: 410}}>
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
`;const E=()=>{const t=i();return u(t),n(t),b(t),h(t),e.jsxs(o,{model:t,children:[e.jsx(m,{title:"Open Popup",children:e.jsx(o.Target,{as:M,icon:V})}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Popup"}),e.jsx(o.Body,{children:"Contents"})]})})]})};E.__RAW__=`import {TertiaryButton} from '@workday/canvas-kit-react/button';
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
`;const Xe={title:"Testing/Popups/Popup",component:o},j={render:H},C={render:_},g={render:()=>{const t=i();u(t),n(t),b(t),h(t),U(t);const r="popup-test-id",s=t.state.visibility!=="hidden";return x.useLayoutEffect(()=>{s&&t.state.stackRef.current&&t.state.stackRef.current.setAttribute("id",r)},[t.state.stackRef,s]),e.jsxs(o,{model:t,children:[e.jsxs("div",{children:[e.jsx("p",{children:'Scroll down and click on "Delete Item". The browser should not scroll.'}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsxs(v,{gap:"s",children:[e.jsx(o.Target,{as:w,children:"Delete Item"}),e.jsx("div",{"aria-owns":r,style:{position:"absolute"}}),e.jsx(o.Popper,{children:e.jsxs(o.Card,{width:400,padding:"s",children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsx(o.Body,{children:e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"})}),e.jsxs(v,{gap:"s",children:[e.jsx(o.CloseButton,{as:w,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})}),e.jsx(d,{children:"Next Focusable Button"}),e.jsx(d,{children:"Focusable Button After Popup"})]})]})}},y={render:E},f={render:S},k={render:D},T={render:W};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: MixedPopupTypesExample
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: PopupWithNonHidablePopupExample
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        <Flex gap="s">
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <div aria-owns={popupId} style={{
          position: 'absolute'
        }} />
          <Popup.Popper>
            <Popup.Card width={400} padding="s">
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading>Delete Item</Popup.Heading>
              <Popup.Body>
                <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
              </Popup.Body>
              <Flex gap="s">
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: TooltipReturnFocusExample
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ComboboxWithinPopupExample
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: ReturnFocusTestExample
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: CloseOnTargetHiddenTestExample
}`,...T.parameters?.docs?.source}}};const Ze=["MixedPopupTypes","PopupWithNonHidablePopup","PopupWithBodyScroll","TooltipReturnFocus","ComboboxWithinPopup","ReturnFocusTest","CloseOnTargetHiddenTest"];export{T as CloseOnTargetHiddenTest,f as ComboboxWithinPopup,j as MixedPopupTypes,g as PopupWithBodyScroll,C as PopupWithNonHidablePopup,k as ReturnFocusTest,y as TooltipReturnFocus,Ze as __namedExportsOrder,Xe as default};
