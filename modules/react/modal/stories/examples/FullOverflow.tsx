import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';

export const FullOverflow = () => {
  const handlePrimaryClick = () => {
    console.log('Primary Action clicked');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary Action clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.OverflowOverlay>
        <Modal.Card maxHeight="inherit" height="inherit">
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </Modal.Body>
          <HStack spacing="s">
            <Modal.CloseButton as={PrimaryButton} onClick={handlePrimaryClick}>
              Primary Action
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleSecondaryClick}>Secondary Button</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.OverflowOverlay>
    </Modal>
  );
};
