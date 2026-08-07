import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{M as o}from"./Modal-B2A4hE2x.js";import{D as e}from"./DeleteButton-C1OFefDC.js";const a=()=>t.jsxs(o,{children:[t.jsx(o.Target,{as:e,children:"Delete Item"}),t.jsx(o.Overlay,{children:t.jsxs(o.Card,{children:[t.jsx(o.CloseIcon,{"aria-label":"Close"}),t.jsx(o.Heading,{children:"Delete Item"}),t.jsxs(o.Body,{children:[t.jsx("p",{children:"Are you sure you want to delete the item?"}),t.jsxs(o.ButtonGroup,{position:"start",children:[t.jsx(o.CloseButton,{children:"Cancel"}),t.jsx(o.CloseButton,{as:e,children:"Delete"})]}),t.jsx("iframe",{role:"iframe",srcDoc:"<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button data-testid='button2'>iframe button 2</button></body></html>"})]})]})})]});a.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Modal} from '@workday/canvas-kit-react/modal';

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
            <Modal.ButtonGroup position="start">
              <Modal.CloseButton>Cancel</Modal.CloseButton>
              <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
            </Modal.ButtonGroup>
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
`;export{a as I};
