/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {controlComponent} from '../../../../../utils/storybook';

import {colors} from '@workday/canvas-kit-react-core';
import {Button} from '../../../../button/react';
import FormField from '../../../../form-field/react';
import {Modal, useModal} from '../../../../modal/react';

import Select from '../lib/Select';

import {manyOptions, options} from './stories';

export default {
  title: 'Testing/React/Labs/Select/Cypress',
  component: Select,
};

const disabledOptions = [
  {label: 'Carrier Pigeon', value: 'pigeon', disabled: true},
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
  {label: 'Fax', value: 'fax', disabled: true},
  {label: 'Mail', value: 'mail'},
  {label: 'Mobile Phone', value: 'mobile_phone'},
  {label: 'Telegram', value: 'telegram', disabled: true},
];

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
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <div>
      <Button variant={Button.Variant.Primary} {...targetProps}>
        Show Modal
      </Button>
      <Modal heading="Modal with Select" {...modalProps}>
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

const BlurTest = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleButtonBlur = () => {
    // Setting clicked updates the state of BlurTest which in turn causes
    // the contained Select to re-render
    setClicked(false);
  };

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <>
      <div style={{height: '100vh'}}>Empty filler (scroll down)</div>
      <h2>Blur Test</h2>
      <p>
        The following test checks against a timing issue where focus could be applied to the Select
        Menu before it's been properly positioned, causing the browser to scroll to the top of the
        page when clicking the Select Button to activate its Menu.
      </p>
      <h3>Context</h3>
      <p>
        The Select component consists of a Button (the collapsed form of the Select) and a Menu (the
        dropdown menu displayed when you click on the Button or activate it using assistive
        technology). The Menu has two important characteristics:
      </p>
      <ol>
        <li>DOM focus is applied to the Menu when it's visible.</li>
        <li>
          The Menu is portalled to another location in the DOM outside the DOM hierarchy of the
          Select component (to enable it to break outside of Modals, for example). Because the Menu
          is located some distance (DOM-wise) away from it's corresponding Button, it needs to be
          positioned so that it's visually attached to its Button.
        </li>
      </ol>
      <p>
        Focusing the Menu before it's been properly positioned next to the Button will cause the
        browser to scroll to the wrong location (where the Menu was <strong>before</strong> it was
        positioned next to the button -- this is generally the top of the page).
      </p>
      <h3>Test</h3>
      <p>
        The following test creates a scenario where such a timing issue could potentially occur:
      </p>
      <ol>
        <li>The page is long (requires scrolling).</li>
        <li>
          There's a button and a Select near the bottom of the page. The button has a blur handler
          which triggers a re-render of the Select.
        </li>
        <li>You click on the button to give it focus.</li>
        <li>
          You then click on the Select. This activates the Menu and immediately triggers the blur
          handler for the button (which re-renders the Select).
        </li>
      </ol>
      <p>
        This creates a tricky situation where we could potentially assign focus to the Menu before
        it's been positioned since we're re-rendering the Menu immediately after it's been
        activated. If we assign focus too soon, the page will scroll to the top and you'll need to
        scroll back down to access the Menu you just activated.
      </p>
      <p>
        To run the test, click on the "Click me first!" button, and then click directly on the
        Select below it (directly on the Select itself, <strong>not</strong> the label).{' '}
        <strong>No scrolling should occur when the Select is clicked.</strong>
      </p>
      <button onBlur={handleButtonBlur} onClick={handleButtonClick} data-testid="blur-test-button">
        {clicked
          ? 'Clicked! Now click directly on the Select below (not the label)'
          : 'Click me first!'}
      </button>
      <FormField label="Label (Bottom)" inputId="select-bottom" style={{marginTop: '10px'}}>
        {controlComponent(<Select name="contact" options={options} />)}
      </FormField>
    </>
  );
};

export const AccessibilityTest = () => (
  <div>
    <Container>
      <p>
        This Select has its <strong>aria-required</strong> prop set to true. When its listbox menu
        is opened, we expect aria-required to be set to "true" for the listbox.
      </p>
      <FormField label="Label (aria-required)" inputId="select-aria-required" required={true}>
        {controlComponent(
          <Select name="select-aria-required" options={options} aria-required={true} />
        )}
      </FormField>
      <p>
        This Select has its <strong>required</strong> prop set to true. Again, when its listbox menu
        is opened, we expect aria-required to be set to "true" for the listbox.
      </p>
      <FormField label="Label (required)" inputId="select-required" required={true}>
        {controlComponent(<Select name="select-required" options={options} required={true} />)}
      </FormField>
    </Container>
  </div>
);

export const DisabledOptionsTest = () => (
  <div>
    <Container>
      <p>Disabled options may not be assistively focused using the keyboard.</p>
      <FormField label="Label (Disabled Options)" inputId="select-disabled-options">
        {controlComponent(<Select name="select-disabled-options" options={disabledOptions} />)}
      </FormField>
    </Container>
  </div>
);

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
      <BlurTest />
    </Container>
  </div>
);
