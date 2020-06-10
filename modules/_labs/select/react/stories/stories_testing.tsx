/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';

import {Button} from '@workday/canvas-kit-react-button';
import {colors} from '@workday/canvas-kit-react-core';
import FormField from '@workday/canvas-kit-react-form-field';
import Modal from '@workday/canvas-kit-react-modal';
import Select from '../lib/Select';

import {manyOptions, options} from './stories';
import {controlComponent} from '../../../../../utils/storybook';

export default {
  title: 'Testing|React/Labs/Select',
  component: Select,
};

const Container = ({children, style = {}, ...elemProps}) => {
  return (
    <div
      style={{
        border: `1px solid ${colors.soap600}`,
        marginTop: 50,
        overflow: 'hidden',
        padding: 20,
        ...style,
      }}
      {...elemProps}
    >
      {children}
    </div>
  );
};

const SelectModal = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>; // cast to keep buttonRef happy
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <div>
      <Button buttonRef={buttonRef} onClick={openModal} variant={Button.Variant.Primary}>
        Show Modal
      </Button>

      <Modal heading="Modal with Select" open={open} handleClose={closeModal}>
        <p>The menu for this Select should break out of the Modal.</p>
        <FormField label="Label" inputId="select-modal">
          {controlComponent(<Select name="city" options={manyOptions} />)}
        </FormField>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Primary}>
          Submit
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </div>
  );
};

export const PortalTest = () => (
  <div>
    <Container>
      <p>
        All gray-bordered containers on this page have their overflow set to hidden. Menus are
        rendered using portals and should break out of their containers.
      </p>
      <FormField label="Label" inputId="select-default-top-label">
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
      <p>
        Menus for Select with grow set to true should resize automatically as the Select grows.
        Activate this menu and resize the window to see the menu grow to match the width of the
        Select.
      </p>
      <FormField label="Label (Grow)" inputId="select-default-top-label-grow" grow={true}>
        {controlComponent(<Select name="city" options={manyOptions} grow={true} />)}
      </FormField>
    </Container>
    <Container>
      <p>
        Menus should flip upwards automatically if there isn't enough space in the viewport for them
        to extend downwards. As you scroll down and space becomes available, the Menu will flip back
        downwards.
      </p>
      <FormField label="Label" inputId="select-alert-top-label" error={FormField.ErrorType.Alert}>
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
      <FormField
        label="Label (Grow)"
        inputId="select-alert-top-label-grow"
        error={FormField.ErrorType.Alert}
        grow={true}
      >
        {controlComponent(<Select grow={true} name="city" options={manyOptions} />)}
      </FormField>
    </Container>
    <Container>
      <p>Menus should behave the same with left-labeled FormFields.</p>
      <FormField
        label="Label"
        labelPosition={FormField.LabelPosition.Left}
        inputId="select-default-left-label"
      >
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
      <FormField
        label="Label (Grow)"
        labelPosition={FormField.LabelPosition.Left}
        inputId="select-default-left-label-grow"
        grow={true}
      >
        {controlComponent(<Select name="city" options={manyOptions} grow={true} />)}
      </FormField>
    </Container>
    <Container>
      <p>Menus should break out of Modals.</p>
      <SelectModal />
    </Container>
    <Container>
      <p>This Select is forced to display its menu upwards since it's at the bottom the page.</p>
      <FormField label="Label" inputId="select-last" error={FormField.ErrorType.Error}>
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
    </Container>
  </div>
);
