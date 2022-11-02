import * as React from 'react';
import ReactDOM from 'react-dom';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {useMount} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  usePopupStack,
  useBringToTopOnClick,
  useInitialFocus,
  useReturnFocus,
  useFocusTrap,
} from '@workday/canvas-kit-react/popup';
import {menuGroupIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Testing/React/Popups/Popup',
  component: Popup,
};

export * from './stories_VisualTesting';

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
    element.style.top = `${top + rect.top}px`;
    element.style.left = `${left + rect.left}px`;
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

export const PopupWithNonHidablePopup = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  return (
    <HStack spacing="s">
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
    </HStack>
  );
};

export const PopupWithBodyScroll = () => {
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

  return (
    <Popup model={model}>
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
      <HStack spacing="s">
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card width={400} padding="s">
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
            </Popup.Body>
            <HStack spacing="s">
              <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </HStack>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </HStack>
    </Popup>
  );
};
export const TooltipReturnFocus = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Tooltip title="Open Popup">
        <Popup.Target as={TertiaryButton} icon={menuGroupIcon} />
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
          <FormField label="Name" style={{marginLeft: 400}}>
            <TextInput />
          </FormField>
          <Popup.Target style={{marginBottom: 400, marginLeft: 410}} data-testid="target">
            Open Popup
          </Popup.Target>
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
                </ul>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </div>
    </div>
  );
};
