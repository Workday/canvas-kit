import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{R as F}from"./index-BDZ5T_cP.js";import{I as E}from"./IframeTest-CB7H05vI.js";import{u as n}from"./useModalModel-Boevl9hy.js";import{u as B}from"./getTransformFromPlacement-C8S8FYK9.js";import{u as k}from"./useInitialFocus-70_5kNba.js";import{u as w}from"./useCloseOnEscape-Dxv9jUxq.js";import{M as o}from"./Modal-VmV0vNtG.js";import{D as s}from"./DeleteButton-C4DcqQO8.js";import{P as l}from"./Popup-CdIMi-8Z.js";import{C as v,Q as N,R as Y,S as P,T as R}from"./CanvasProvider-CFtqHR-b.js";import{e as K}from"./external-link-ChL2h1Cn.js";import{P as g}from"./PrimaryButton-C5mhTCq5.js";import{B as T}from"./Box-5BC0dNqB.js";import{r as V}from"./index-IfJi-UCQ.js";import{R as $,a as D}from"./RadioGroup-BnYTweNG.js";import{T as b}from"./Tooltip-B8mUJnbM.js";import{F as f}from"./Flex-DOA8e2vA.js";import{g as I,p as O}from"./index-DE-upP0k.js";import{p as q}from"./px2rem-C0KbprIx.js";import{c as z}from"./cs-rfTTo7Bg.js";import"./index-CDT9hUPM.js";import"./Popper-DYfGvA07.js";import"./components-eQ_txa-f.js";import"./useModalityType-vKGNJOLb.js";import"./models-CHTjB2ql.js";import"./useReturnFocus-CNQf_iaV.js";import"./useFocusTrap-BURdHJQx.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./mergeStyles-C5CqGCLQ.js";import"./flex-By9DHSnU.js";import"./grid-DA69sSsK.js";import"./useMount-CAK2BN3_.js";import"./BaseButton-CivL5PJl.js";import"./SystemIcon-DcKI42bA.js";import"./Svg-CDKq73NP.js";import"./types-wqmYQQWa.js";import"./Button-wmECgaEK.js";import"./Card-BsFqe5CX.js";import"./Text-BLaZcOr9.js";import"./cornerShape-B7b4ymMc.js";import"./index-pMzza0x6.js";import"./SecondaryButton-CMbqORtK.js";import"./TertiaryButton-C_EvQ6Qu.js";import"./x-B1faap_l.js";import"./usePopupTarget-wbqfrIA1.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-Dusw0zrf.js";import"./LabelText-cS69payI.js";import"./types-DXdjelYI.js";import"./useTooltip-CS5bngwT.js";const H=()=>{const a=n(),t=B(),r=()=>{console.log("Delete Item")};return k(t),w(t),e.jsx(e.Fragment,{children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:s,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(l,{model:t,children:[e.jsxs(l.ButtonGroup,{children:[e.jsx(l.CloseButton,{children:"Cancel"}),e.jsx(l.Target,{as:s,children:"Yes, Delete"})]}),e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Really Delete Item"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(l.ButtonGroup,{children:[e.jsx(l.CloseButton,{children:"Cancel"}),e.jsx(l.CloseButton,{as:s,onClick:d=>{a.events.hide(d),r()},children:"Yes, Really Delete"})]})]})]})})]})]})]})})]})})};H.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export const ModalWithPopup = () => {
  const modal = useModalModel();
  const popup = usePopupModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  useCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <Popup model={popup}>
                <Popup.ButtonGroup>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                  <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                </Popup.ButtonGroup>
                <Popup.Popper>
                  <Popup.Card>
                    <Popup.CloseIcon aria-label="Close" />
                    <Popup.Heading>Really Delete Item</Popup.Heading>
                    <Popup.Body>
                      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                      <Popup.ButtonGroup>
                        <Popup.CloseButton>Cancel</Popup.CloseButton>
                        <Popup.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            modal.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Popup.CloseButton>
                      </Popup.ButtonGroup>
                    </Popup.Body>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};
`;const G=()=>{const a=n(),t=B(),r=()=>{console.log("Delete Item")};return k(t),w(t),e.jsx(v,{dir:"rtl",children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:s,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(l,{model:t,children:[e.jsxs(l.ButtonGroup,{children:[e.jsx(l.CloseButton,{children:"Cancel"}),e.jsx(l.Target,{as:s,children:"Yes, Delete"})]}),e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Really Delete Item"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(l.ButtonGroup,{children:[e.jsx(l.CloseButton,{children:"Cancel"}),e.jsx(l.CloseButton,{as:s,onClick:d=>{a.events.hide(d),r()},children:"Yes, Really Delete"})]})]})]})})]})]})]})})]})})};G.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

export const ModalWithPopupRTL = () => {
  const modal = useModalModel();
  const popup = usePopupModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  useCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  return (
    <CanvasProvider dir="rtl">
      <Modal model={modal}>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <Popup model={popup}>
                <Popup.ButtonGroup>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                  <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                </Popup.ButtonGroup>
                <Popup.Popper>
                  <Popup.Card>
                    <Popup.CloseIcon aria-label="Close" />
                    <Popup.Heading>Really Delete Item</Popup.Heading>
                    <Popup.Body>
                      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                      <Popup.ButtonGroup>
                        <Popup.CloseButton>Cancel</Popup.CloseButton>
                        <Popup.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            modal.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Popup.CloseButton>
                      </Popup.ButtonGroup>
                    </Popup.Body>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </CanvasProvider>
  );
};
`;const S=()=>{const a=n(),t=()=>{console.log("License Acknowledged")},r=()=>{console.log("Cancel clicked")};return e.jsxs(v,{dir:"rtl",children:[e.jsx(g,{onClick:()=>a.events.show(),children:"פתח רישיון"}),e.jsx(o,{model:a,children:e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"MIT License"}),e.jsx(o.Body,{children:e.jsx(T,{as:"p",cs:{marginBlock:"0"},children:'בזאת ניתנת רשות, ללא תשלום, לכל אדם לקבל עותק של תוכנה זו וקבצי התיעוד הנלווים ("התוכנה").'})}),e.jsxs(o.ButtonGroup,{children:[e.jsx(o.CloseButton,{onClick:r,children:"לְבַטֵל"}),e.jsx(o.CloseButton,{as:g,onClick:t,icon:K,iconPosition:"end",shouldMirrorIconInRTL:!0,children:"לְהוֹדוֹת"})]})]})})})]})};S.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {externalLinkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const NoTargetRTL = () => {
  const model = useModalModel();
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <CanvasProvider dir="rtl">
      <PrimaryButton onClick={() => model.events.show()}>פתח רישיון</PrimaryButton>
      <Modal model={model}>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>MIT License</Modal.Heading>
            <Modal.Body>
              <Box as="p" cs={{marginBlock: '0'}}>
                בזאת ניתנת רשות, ללא תשלום, לכל אדם לקבל עותק של תוכנה זו וקבצי התיעוד הנלווים
                ("התוכנה").
              </Box>
            </Modal.Body>
            <Modal.ButtonGroup>
              <Modal.CloseButton onClick={handleCancel}>לְבַטֵל</Modal.CloseButton>
              <Modal.CloseButton
                as={PrimaryButton}
                onClick={handleAcknowledge}
                icon={externalLinkIcon}
                iconPosition="end"
                shouldMirrorIconInRTL
              >
                לְהוֹדוֹת
              </Modal.CloseButton>
            </Modal.ButtonGroup>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </CanvasProvider>
  );
};
`;const W=()=>{const a=n(),t=()=>{console.log("Delete Item")};return e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:s,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(o.ButtonGroup,{children:[e.jsx(o.CloseButton,{children:"Cancel"}),e.jsxs(o,{children:[e.jsx(o.Target,{as:s,children:"Yes, Delete"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Really Delete Item"}),e.jsxs(o.Body,{children:[e.jsxs("p",{children:["Are you ",e.jsx("em",{children:"really"})," sure you want to delete the item?"]}),e.jsxs(o.ButtonGroup,{children:[e.jsx(o.CloseButton,{children:"Cancel"}),e.jsx(o.CloseButton,{as:s,onClick:r=>{a.events.hide(r),t()},children:"Yes, Really Delete"})]})]})]})})]})]})]})]})})]})};W.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';

export const StackedModals = () => {
  const model = useModalModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <Modal.ButtonGroup>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
              <Modal>
                <Modal.Target as={DeleteButton}>Yes, Delete</Modal.Target>
                <Modal.Overlay>
                  <Modal.Card>
                    <Modal.CloseIcon aria-label="Close" />
                    <Modal.Heading>Really Delete Item</Modal.Heading>
                    <Modal.Body>
                      <p>
                        Are you <em>really</em> sure you want to delete the item?
                      </p>
                      <Modal.ButtonGroup>
                        <Modal.CloseButton>Cancel</Modal.CloseButton>
                        <Modal.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            model.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Modal.CloseButton>
                      </Modal.ButtonGroup>
                    </Modal.Body>
                  </Modal.Card>
                </Modal.Overlay>
              </Modal>
            </Modal.ButtonGroup>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
`;const A=()=>{const[a,t]=V.useState("");return e.jsxs(o,{children:[e.jsx(o.Target,{children:"With Radio Buttons"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Select Item"}),e.jsx(o.Body,{children:e.jsxs($,{name:"contact","data-testid":"radiogroup",value:a,onChange:r=>t(String(r)),children:[e.jsx(D,{id:"1",value:"email",label:"E-mail"}),e.jsx(D,{id:"2",value:"phone",label:"Phone"})]})})]})})]})};A.__RAW__=`import * as React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

// TODO: Use a not deprecated radio button
export const WithRadioButtons = () => {
  const [value, setValue] = React.useState('');

  return (
    <Modal>
      <Modal.Target>With Radio Buttons</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Select Item</Modal.Heading>
          <Modal.Body>
            <RadioGroup
              name="contact"
              data-testid="radiogroup"
              value={value}
              onChange={value => setValue(String(value))}
            >
              <Radio id="1" value="email" label="E-mail" />
              <Radio id="2" value="phone" label="Phone" />
            </RadioGroup>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
`;const _=()=>{const a=n(),t=B(),r=B(),d=L=>a.events.hide(L);return k(t),e.jsxs(e.Fragment,{children:[e.jsxs(o,{model:a,children:[e.jsx(o.Target,{children:"Open Modal"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{cs:{width:"auto"},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Open Modal"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Open a hidable and non-hidable popups"}),e.jsxs(o.ButtonGroup,{children:[e.jsx(b,{title:"Not so sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:d,children:"Cancel"})}),e.jsx(l.Target,{model:t,children:"Hidable Popup"}),e.jsx(l.Target,{model:r,children:"Non-hidable Popup"})]})]})]})})]}),e.jsx(l,{model:t,children:e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Hidable Popup"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Pressing 'OK' will close the modal"}),e.jsx(o.ButtonGroup,{children:e.jsx(b,{placement:"left",title:"Really, Really, Really, Really, Really sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:d,children:"OK"})})})]})]})})}),e.jsx(l,{model:r,children:e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Non-hidable Popup"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Pressing 'OK' will close the modal"}),e.jsx(o.ButtonGroup,{children:e.jsx(b,{placement:"left",title:"Really, Really, Really, Really, Really sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:d,children:"OK"})})})]})]})})})]})};_.__RAW__=`import * as React from 'react';

import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const WithTooltips = () => {
  const modal = useModalModel();
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();
  const closeModal = (event: React.MouseEvent) => modal.events.hide(event);

  useCloseOnOutsideClick(popup1);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target>Open Modal</Modal.Target>
        <Modal.Overlay>
          <Modal.Card cs={{width: 'auto'}}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Open Modal</Modal.Heading>
            <Modal.Body>
              <p>Open a hidable and non-hidable popups</p>
              <Modal.ButtonGroup>
                <Tooltip title="Not so sure" type="muted">
                  <Popup.CloseButton onClick={closeModal}>Cancel</Popup.CloseButton>
                </Tooltip>
                <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
                <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
              </Modal.ButtonGroup>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
      <Popup model={popup1}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Modal.ButtonGroup>
                <Tooltip
                  placement="left"
                  title="Really, Really, Really, Really, Really sure"
                  type="muted"
                >
                  <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
                </Tooltip>
              </Modal.ButtonGroup>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Non-hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Modal.ButtonGroup>
                <Tooltip
                  placement="left"
                  title="Really, Really, Really, Really, Really sure"
                  type="muted"
                >
                  <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
                </Tooltip>
              </Modal.ButtonGroup>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
`;const Je={title:"Testing/Popups/Modal",component:o,parameters:{chromatic:{pauseAnimationAtEnd:!0}}},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o.Target,{as:s,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(f,{cs:{gap:I.md},children:[e.jsx(o.CloseButton,{as:s,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})]})})]}),e.jsx("p",{children:"The content below should be hidden from assistive technology while the modal is open."}),e.jsx("p",{children:e.jsx("a",{href:"#",children:"Link"})}),e.jsx("button",{type:"button",children:"Button"}),e.jsx("p",{tabIndex:0,children:"Focusable div"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"text",children:"Text input"}),e.jsx("input",{type:"text",id:"text"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"radio",children:"Radio"})," ",e.jsx("input",{type:"radio",id:"radio"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"check",children:"Checkbox"}),e.jsx("input",{type:"checkbox"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"textarea",children:"Text area"}),e.jsx("textarea",{id:"textarea"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pet-select",children:"Choose a pet:"}),e.jsxs("select",{name:"pets",id:"pet-select",children:[e.jsx("option",{value:"",children:"Please choose an option"}),e.jsx("option",{value:"dog",children:"Dog"}),e.jsx("option",{value:"cat",children:"Cat"}),e.jsx("option",{value:"hamster",children:"Hamster"}),e.jsx("option",{value:"parrot",children:"Parrot"}),e.jsx("option",{value:"spider",children:"Spider"}),e.jsx("option",{value:"goldfish",children:"Goldfish"})]})]}),e.jsx("div",{children:e.jsx("iframe",{title:"iframe test",src:"/",width:"300",height:"300"})})]})},p={render:A},c={render:W},u={render:H},m={render:G},h={render:S},x={render:_},M={render:E},Q=()=>{const a=e.jsx("div",{style:{color:"white",zIndex:1,position:"relative"},children:"This text should be invisible if the Modal is rendering correctly. It is white text on a white background. The Popup Stack should set up the zIndex of the Modal's overlay. If rendered incorrectly, the text will be visible on top of the overlay."});return F.createPortal(a,document.body)},U=()=>{const a=n({initialVisibility:"visible"});return e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx(o,{model:a,children:e.jsx(o.Overlay,{cs:{animation:"none"},children:e.jsxs(o.Card,{cs:{animation:"none"},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Small Width Modal"}),e.jsx(o.Body,{children:e.jsx(T,{as:"p",cs:{marginBlock:"0"},children:"This modal should appear on the bottom of the screen for mobile devices. Chromatic uses a version of Chrome that makes it appear on the top and is a known issue."})}),e.jsxs(f,{cs:{gap:I.md,padding:O.xs},children:[e.jsx(o.CloseButton,{as:g,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})})})]})},C={parameters:{chromatic:{disable:!1,viewports:[320,1200]}},render:()=>e.jsx(U,{})},y={parameters:{chromatic:{disable:!1}},render:()=>{const a=n({initialVisibility:"visible"});return e.jsx(v,{dir:"rtl",children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{cs:{display:"none"}}),e.jsx(o.Overlay,{cs:{animation:"none"},children:e.jsxs(o.Card,{cs:{animation:"none",width:q(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})]})})}},J=z({[R.base]:"purple",[R.accent]:"turquoise",[P.focusOutline]:"turquoise",[P.alertInner]:"coral",[P.errorInner]:"crimson",[Y.base]:"aquamarine",[N.base]:"gray"}),j={parameters:{chromatic:{disable:!1}},render:()=>{const a=n({initialVisibility:"visible"});return e.jsx(v,{children:e.jsx(o,{model:a,children:e.jsx(o.Overlay,{cs:{animation:"none"},className:J,children:e.jsxs(o.Card,{cs:{animation:"none"},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"MIT License"}),e.jsx(o.Body,{children:e.jsx(T,{as:"p",cs:{marginBlock:"0"},children:'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software").'})}),e.jsxs(f,{cs:{gap:I.md,padding:O.xs},children:[e.jsx(o.CloseButton,{as:g,children:"Acknowledge"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})})})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Modal>
          <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
          <Modal.Overlay>
            <Modal.Card>
              <Modal.CloseIcon aria-label="Close" />
              <Modal.Heading>Delete Item</Modal.Heading>
              <Modal.Body>
                <p>Are you sure you want to delete the item?</p>
                <Flex cs={{
                gap: system.gap.md
              }}>
                  <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
                  <Modal.CloseButton>Cancel</Modal.CloseButton>
                </Flex>
              </Modal.Body>
            </Modal.Card>
          </Modal.Overlay>
        </Modal>
        <p>The content below should be hidden from assistive technology while the modal is open.</p>
        <p>
          <a href="#">Link</a>
        </p>

        <button type="button">Button</button>
        <p tabIndex={0}>Focusable div</p>

        <div>
          <label htmlFor="text">Text input</label>
          <input type="text" id="text" />
        </div>

        <div>
          <label htmlFor="radio">Radio</label> <input type="radio" id="radio" />
        </div>

        <div>
          <label htmlFor="check">Checkbox</label>
          <input type="checkbox" />
        </div>

        <div>
          <label htmlFor="textarea">Text area</label>
          <textarea id="textarea"></textarea>
        </div>

        <div>
          <label htmlFor="pet-select">Choose a pet:</label>
          <select name="pets" id="pet-select">
            <option value="">Please choose an option</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>

        <div>
          <iframe title="iframe test" src="/" width="300" height="300"></iframe>
        </div>
      </>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: WithRadioButtonsExample
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: StackedModalsExample
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ModalWithPopupExample
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ModalWithPopupRTLExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: NoTargetRTLExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: WithTooltipsExample
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: IframeTestExample
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false,
      viewports: [320, 1200]
    }
  },
  render: () => <TestModal />
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  render: () => {
    const model = useModalModel({
      initialVisibility: 'visible'
    });
    return <CanvasProvider dir="rtl">
        <Modal model={model}>
          <Modal.Target cs={{
          display: 'none'
        }}></Modal.Target>
          <Modal.Overlay cs={{
          animation: 'none'
        }}>
            <Modal.Card cs={{
            animation: 'none',
            width: px2rem(300)
          }}>
              <Modal.CloseIcon aria-label="" />
              <Modal.Heading>למחוק פריט</Modal.Heading>
              <Modal.Body>האם ברצונך למחוק פריט זה</Modal.Body>
            </Modal.Card>
          </Modal.Overlay>
        </Modal>
      </CanvasProvider>;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  render: () => {
    const model = useModalModel({
      initialVisibility: 'visible'
    });
    return <CanvasProvider>
        <Modal model={model}>
          {/* We are only adding the custom theme via class name for testing purposes. Custom themes should be set on the :root element in CSS using CSS variables */}
          <Modal.Overlay cs={{
          animation: 'none'
        }} className={customTheme}>
            <Modal.Card cs={{
            animation: 'none'
          }}>
              <Modal.CloseIcon aria-label="Close" />
              <Modal.Heading>MIT License</Modal.Heading>
              <Modal.Body>
                <Box as="p" cs={{
                marginBlock: '0'
              }}>
                  Permission is hereby granted, free of charge, to any person obtaining a copy of
                  this software and associated documentation files (the "Software").
                </Box>
              </Modal.Body>
              <Flex cs={{
              gap: system.gap.md,
              padding: system.padding.xs
            }}>
                <Modal.CloseButton as={PrimaryButton}>Acknowledge</Modal.CloseButton>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </Flex>
            </Modal.Card>
          </Modal.Overlay>
        </Modal>
      </CanvasProvider>;
  }
}`,...j.parameters?.docs?.source}}};const Xe=["AccessibilityTest","WithRadioButtons","StackedModals","ModalWithPopup","ModalWithPopupRTL","NoTargetRTL","WithTooltips","IframeTest","ModalSmallWidth","ModalRTL","CustomThemeModal"];export{i as AccessibilityTest,j as CustomThemeModal,M as IframeTest,y as ModalRTL,C as ModalSmallWidth,u as ModalWithPopup,m as ModalWithPopupRTL,h as NoTargetRTL,c as StackedModals,p as WithRadioButtons,x as WithTooltips,Xe as __namedExportsOrder,Je as default};
