import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{M as t}from"./Modal-CWWShxpN.js";import{D as o}from"./DeleteButton-CrYKgSn7.js";import{F as a}from"./Flex-hE1PVdSE.js";const l=()=>e.jsxs(t,{children:[e.jsx(t.Target,{as:o,children:"Delete Item"}),e.jsx(t.Overlay,{children:e.jsxs(t.Card,{children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{children:"Delete Item"}),e.jsxs(t.Body,{children:[e.jsx("p",{children:"Are you sure you want to delete the item?"}),e.jsxs(a,{gap:"s",children:[e.jsx(t.CloseButton,{as:o,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]}),e.jsx("iframe",{role:"iframe",srcDoc:"<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button data-testid='button2'>iframe button 2</button></body></html>"})]})]})})]});l.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
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
            <Flex gap="s">
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
`;export{l as I};
