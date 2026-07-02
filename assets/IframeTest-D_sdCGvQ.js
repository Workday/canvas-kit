import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{M as e}from"./Modal-BLVxFB5v.js";import{D as o}from"./DeleteButton-BczRWt7T.js";import{F as a}from"./Flex-C02s6o63.js";import{g as l}from"./index-5dfzm_kn.js";const r=()=>t.jsxs(e,{children:[t.jsx(e.Target,{as:o,children:"Delete Item"}),t.jsx(e.Overlay,{children:t.jsxs(e.Card,{children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{children:"Delete Item"}),t.jsxs(e.Body,{children:[t.jsx("p",{children:"Are you sure you want to delete the item?"}),t.jsxs(a,{cs:{gap:l.md},children:[t.jsx(e.CloseButton,{as:o,children:"Delete"}),t.jsx(e.CloseButton,{children:"Cancel"})]}),t.jsx("iframe",{role:"iframe",srcDoc:"<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button data-testid='button2'>iframe button 2</button></body></html>"})]})]})})]});r.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Modal} from '@workday/canvas-kit-react/modal';
import {system} from '@workday/canvas-tokens-web';

export const IframeTest = () => {
  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <Flex cs={{gap: system.gap.md}}>
              <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </Flex>
            <iframe
              role="iframe"
              srcDoc="<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button data-testid='button2'>iframe button 2</button></body></html>"
            />
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
`;export{r as I};
