import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{R as E}from"./index-BDZ5T_cP.js";import{I as N}from"./IframeTest-BIl3PrCi.js";import{u as d}from"./useModalModel-JcsqJ-ig.js";import{u as v}from"./getTransformFromPlacement-Dk4LTPXM.js";import{u as T}from"./useInitialFocus-DXIqVwzr.js";import{u as O}from"./useCloseOnEscape-BOBxCx8K.js";import{M as o}from"./Modal-CrAXwOll.js";import{D as r}from"./DeleteButton-Chd6XqBj.js";import{P as l}from"./Popup-CfPbpWF4.js";import{F as n}from"./Flex-BB_s4g0f.js";import{C as B,n as Y,s as K,c as k,p as D}from"./CanvasProvider-BJ-OMKNq.js";import{e as V}from"./external-link-Bfm4m86M.js";import{P}from"./PrimaryButton-Cnd4N9Ks.js";import{B as I}from"./Box-DFceh3YA.js";import{p as R,g as b}from"./index-CYsyLHR7.js";import{r as $}from"./index-IfJi-UCQ.js";import{R as G,a as w}from"./RadioGroup-7LE6-E-s.js";import{T as f}from"./Tooltip-Btv9iUgu.js";import{p as q}from"./px2rem-C0KbprIx.js";import{c as z}from"./cs-DvbI9OYs.js";import"./index-CDT9hUPM.js";import"./Popper-CvC-z2TH.js";import"./components-1G01j-He.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useModalityType-vKGNJOLb.js";import"./models-CHTjB2ql.js";import"./useReturnFocus-BsryDfnL.js";import"./useFocusTrap--wi-tGTx.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./useMount-CAK2BN3_.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./types-wqmYQQWa.js";import"./Button-BQ1TZXwZ.js";import"./Card-CEyROzcv.js";import"./Text-DRUbleCp.js";import"./SecondaryButton-CMLUii7y.js";import"./TertiaryButton-jo8ThkBe.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-C0UKjDnR.js";import"./index-C5MVqyzH.js";import"./LabelText-DbhLfruW.js";import"./types-DXdjelYI.js";import"./useTooltip-C6jxCkQj.js";const H=()=>{const a=d(),t=v(),s=()=>{console.log("Delete Item")};return T(t),O(t),e.jsx(e.Fragment,{children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:r,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(l,{model:t,children:[e.jsxs(n,{gap:"s",children:[e.jsx(l.Target,{as:r,children:"Yes, Delete"}),e.jsx(l.CloseButton,{children:"Cancel"})]}),e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Really Delete Item"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{gap:"s",children:[e.jsx(l.CloseButton,{as:r,onClick:i=>{a.events.hide(i),s()},children:"Yes, Really Delete"}),e.jsx(l.CloseButton,{children:"Cancel"})]})]})]})})]})]})]})})]})})};H.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
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
                <Flex gap="s">
                  <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                </Flex>
                <Popup.Popper>
                  <Popup.Card>
                    <Popup.CloseIcon aria-label="Close" />
                    <Popup.Heading>Really Delete Item</Popup.Heading>
                    <Popup.Body>
                      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                      <Flex gap="s">
                        <Popup.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            modal.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Popup.CloseButton>
                        <Popup.CloseButton>Cancel</Popup.CloseButton>
                      </Flex>
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
`;const F=()=>{const a=d(),t=v(),s=()=>{console.log("Delete Item")};return T(t),O(t),e.jsx(B,{dir:"rtl",children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:r,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(l,{model:t,children:[e.jsxs(n,{gap:"s",children:[e.jsx(l.Target,{as:r,children:"Yes, Delete"}),e.jsx(l.CloseButton,{children:"Cancel"})]}),e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Really Delete Item"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{gap:"s",children:[e.jsx(l.CloseButton,{as:r,onClick:i=>{a.events.hide(i),s()},children:"Yes, Really Delete"}),e.jsx(l.CloseButton,{children:"Cancel"})]})]})]})})]})]})]})})]})})};F.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

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
                <Flex gap="s">
                  <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                </Flex>
                <Popup.Popper>
                  <Popup.Card>
                    <Popup.CloseIcon aria-label="Close" />
                    <Popup.Heading>Really Delete Item</Popup.Heading>
                    <Popup.Body>
                      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                      <Flex gap="s">
                        <Popup.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            modal.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Popup.CloseButton>
                        <Popup.CloseButton>Cancel</Popup.CloseButton>
                      </Flex>
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
`;const S=()=>{const a=d(),t=()=>{console.log("License Acknowledged")},s=()=>{console.log("Cancel clicked")};return e.jsxs(B,{dir:"rtl",children:[e.jsx(P,{onClick:()=>a.events.show(),children:"פתח רישיון"}),e.jsx(o,{model:a,children:e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"MIT License"}),e.jsx(o.Body,{children:e.jsx(I,{as:"p",cs:{marginBlock:"0"},children:'בזאת ניתנת רשות, ללא תשלום, לכל אדם לקבל עותק של תוכנה זו וקבצי התיעוד הנלווים ("התוכנה").'})}),e.jsxs(n,{cs:{gap:b.sm,paddingBlock:R.xxs},children:[e.jsx(o.CloseButton,{as:P,onClick:t,icon:V,iconPosition:"end",shouldMirrorIconInRTL:!0,children:"לְהוֹדוֹת"}),e.jsx(o.CloseButton,{onClick:s,children:"לְבַטֵל"})]})]})})})]})};S.__RAW__=`import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
            <Flex cs={{gap: system.gap.sm, paddingBlock: system.padding.xxs}}>
              <Modal.CloseButton
                as={PrimaryButton}
                onClick={handleAcknowledge}
                icon={externalLinkIcon}
                iconPosition="end"
                shouldMirrorIconInRTL
              >
                לְהוֹדוֹת
              </Modal.CloseButton>
              <Modal.CloseButton onClick={handleCancel}>לְבַטֵל</Modal.CloseButton>
            </Flex>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </CanvasProvider>
  );
};
`;const W=()=>{const a=d(),t=()=>{console.log("Delete Item")};return e.jsxs(o,{model:a,children:[e.jsx(o.Target,{as:r,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(n,{gap:"s",children:[e.jsxs(o,{children:[e.jsx(o.Target,{as:r,children:"Yes, Delete"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Really Delete Item"}),e.jsxs(o.Body,{children:[e.jsxs("p",{children:["Are you ",e.jsx("em",{children:"really"})," sure you want to delete the item?"]}),e.jsxs(n,{gap:"s",children:[e.jsx(o.CloseButton,{as:r,onClick:s=>{a.events.hide(s),t()},children:"Yes, Really Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})]})})]}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})]})})]})};W.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
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
            <Flex gap="s">
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
                      <Flex gap="s">
                        <Modal.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            model.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Modal.CloseButton>
                        <Modal.CloseButton>Cancel</Modal.CloseButton>
                      </Flex>
                    </Modal.Body>
                  </Modal.Card>
                </Modal.Overlay>
              </Modal>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </Flex>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
`;const A=()=>{const[a,t]=$.useState("");return e.jsxs(o,{children:[e.jsx(o.Target,{children:"With Radio Buttons"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Select Item"}),e.jsx(o.Body,{children:e.jsxs(G,{name:"contact","data-testid":"radiogroup",value:a,onChange:s=>t(String(s)),children:[e.jsx(w,{id:"1",value:"email",label:"E-mail"}),e.jsx(w,{id:"2",value:"phone",label:"Phone"})]})})]})})]})};A.__RAW__=`import * as React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

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
`;const _=()=>{const a=d(),t=v(),s=v(),i=L=>a.events.hide(L);return T(t),e.jsxs(e.Fragment,{children:[e.jsxs(o,{model:a,children:[e.jsx(o.Target,{children:"Open Modal"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{width:"auto",children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Open Modal"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Open a hidable and non-hidable popups"}),e.jsxs(n,{gap:"s",children:[e.jsx(l.Target,{model:t,children:"Hidable Popup"}),e.jsx(l.Target,{model:s,children:"Non-hidable Popup"}),e.jsx(f,{title:"Not so sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:i,children:"Cancel"})})]})]})]})})]}),e.jsx(l,{model:t,children:e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Hidable Popup"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Pressing 'OK' will close the modal"}),e.jsx(f,{placement:"left",title:"Really, Really, Really, Really, Really sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:i,children:"OK"})})]})]})})}),e.jsx(l,{model:s,children:e.jsx(l.Popper,{children:e.jsxs(l.Card,{children:[e.jsx(l.CloseIcon,{"aria-label":"Close"}),e.jsx(l.Heading,{children:"Non-hidable Popup"}),e.jsxs(l.Body,{children:[e.jsx("p",{children:"Pressing 'OK' will close the modal"}),e.jsx(f,{placement:"left",title:"Really, Really, Really, Really, Really sure",type:"muted",children:e.jsx(l.CloseButton,{onClick:i,children:"OK"})})]})]})})})]})};_.__RAW__=`import * as React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
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
          <Modal.Card width={'auto'}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Open Modal</Modal.Heading>
            <Modal.Body>
              <p>Open a hidable and non-hidable popups</p>
              <Flex gap="s">
                <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
                <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
                <Tooltip title="Not so sure" type="muted">
                  <Popup.CloseButton onClick={closeModal}>Cancel</Popup.CloseButton>
                </Tooltip>
              </Flex>
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
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
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
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
`;const Ze={title:"Testing/Popups/Modal",component:o,parameters:{chromatic:{pauseAnimationAtEnd:!0}}},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(o.Target,{as:r,children:"Delete Item"}),e.jsx(o.Overlay,{children:e.jsxs(o.Card,{children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Delete Item"}),e.jsxs(o.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(n,{cs:{gap:b.sm},children:[e.jsx(o.CloseButton,{as:r,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})]})})]}),e.jsx("p",{children:"The content below should be hidden from assistive technology while the modal is open."}),e.jsx("p",{children:e.jsx("a",{href:"#",children:"Link"})}),e.jsx("button",{type:"button",children:"Button"}),e.jsx("p",{tabIndex:0,children:"Focusable div"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"text",children:"Text input"}),e.jsx("input",{type:"text",id:"text"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"radio",children:"Radio"})," ",e.jsx("input",{type:"radio",id:"radio"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"check",children:"Checkbox"}),e.jsx("input",{type:"checkbox"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"textarea",children:"Text area"}),e.jsx("textarea",{id:"textarea"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pet-select",children:"Choose a pet:"}),e.jsxs("select",{name:"pets",id:"pet-select",children:[e.jsx("option",{value:"",children:"Please choose an option"}),e.jsx("option",{value:"dog",children:"Dog"}),e.jsx("option",{value:"cat",children:"Cat"}),e.jsx("option",{value:"hamster",children:"Hamster"}),e.jsx("option",{value:"parrot",children:"Parrot"}),e.jsx("option",{value:"spider",children:"Spider"}),e.jsx("option",{value:"goldfish",children:"Goldfish"})]})]}),e.jsx("div",{children:e.jsx("iframe",{title:"iframe test",src:"/",width:"300",height:"300"})})]})},c={render:A},u={render:W},m={render:H},h={render:F},x={render:S},C={render:_},y={render:N},J=()=>{const a=e.jsx("div",{style:{color:"white",zIndex:1,position:"relative"},children:"This text should be invisible if the Modal is rendering correctly. It is white text on a white background. The Popup Stack should set up the zIndex of the Modal's overlay. If rendered incorrectly, the text will be visible on top of the overlay."});return E.createPortal(a,document.body)},Q=()=>{const a=d({initialVisibility:"visible"});return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(o,{model:a,children:e.jsx(o.Overlay,{style:{animation:"none"},children:e.jsxs(o.Card,{style:{animation:"none"},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"Small Width Modal"}),e.jsx(o.Body,{children:e.jsx(I,{as:"p",cs:{marginBlock:"0"},children:"This modal should appear on the bottom of the screen for mobile devices. Chromatic uses a version of Chrome that makes it appear on the top and is a known issue."})}),e.jsxs(n,{cs:{gap:b.sm,padding:R.xs},children:[e.jsx(o.CloseButton,{as:P,children:"Delete"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})})})]})},M={parameters:{chromatic:{disable:!1,viewports:[320,1200]}},render:()=>e.jsx(Q,{})},j={parameters:{chromatic:{disable:!1}},render:()=>{const a=d({initialVisibility:"visible"});return e.jsx(B,{dir:"rtl",children:e.jsxs(o,{model:a,children:[e.jsx(o.Target,{style:{display:"none"}}),e.jsx(o.Overlay,{style:{animation:"none"},children:e.jsxs(o.Card,{style:{animation:"none"},cs:{width:q(300)},children:[e.jsx(o.CloseIcon,{"aria-label":""}),e.jsx(o.Heading,{children:"למחוק פריט"}),e.jsx(o.Body,{children:"האם ברצונך למחוק פריט זה"})]})})]})})}},U=z({[D.base]:"purple",[D.accent]:"turquoise",[k.focusOutline]:"turquoise",[k.alertInner]:"coral",[k.errorInner]:"crimson",[K.base]:"aquamarine",[Y.base]:"gray"}),g={parameters:{chromatic:{disable:!1}},render:()=>{const a=d({initialVisibility:"visible"});return e.jsx(B,{children:e.jsx(o,{model:a,children:e.jsx(o.Overlay,{style:{animation:"none"},className:U,children:e.jsxs(o.Card,{style:{animation:"none"},children:[e.jsx(o.CloseIcon,{"aria-label":"Close"}),e.jsx(o.Heading,{children:"MIT License"}),e.jsx(o.Body,{children:e.jsx(I,{as:"p",cs:{marginBlock:"0"},children:'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software").'})}),e.jsxs(n,{cs:{gap:b.sm,padding:R.xs},children:[e.jsx(o.CloseButton,{as:P,children:"Acknowledge"}),e.jsx(o.CloseButton,{children:"Cancel"})]})]})})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
                gap: system.gap.sm
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: WithRadioButtonsExample
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: StackedModalsExample
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ModalWithPopupExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: ModalWithPopupRTLExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: NoTargetRTLExample
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: WithTooltipsExample
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: IframeTestExample
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false,
      viewports: [320, 1200]
    }
  },
  render: () => <TestModal />
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
          <Modal.Target style={{
          display: 'none'
        }}></Modal.Target>
          <Modal.Overlay style={{
          animation: 'none'
        }}>
            <Modal.Card style={{
            animation: 'none'
          }} cs={{
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
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          <Modal.Overlay style={{
          animation: 'none'
        }} className={customTheme}>
            <Modal.Card style={{
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
              gap: system.gap.sm,
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
}`,...g.parameters?.docs?.source}}};const eo=["AccessibilityTest","WithRadioButtons","StackedModals","ModalWithPopup","ModalWithPopupRTL","NoTargetRTL","WithTooltips","IframeTest","ModalSmallWidth","ModalRTL","CustomThemeModal"];export{p as AccessibilityTest,g as CustomThemeModal,y as IframeTest,j as ModalRTL,M as ModalSmallWidth,m as ModalWithPopup,h as ModalWithPopupRTL,x as NoTargetRTL,u as StackedModals,c as WithRadioButtons,C as WithTooltips,eo as __namedExportsOrder,Ze as default};
