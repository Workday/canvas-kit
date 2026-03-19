import * as React from 'react';

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
