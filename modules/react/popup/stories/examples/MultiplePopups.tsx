import {Popup} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useDialogModel} from '@workday/canvas-kit-react/dialog';
import {useModalModel} from '@workday/canvas-kit-react/modal';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  gap: system.space.x4,
});

const popupStyles = createStyles({
  width: px2rem(400),
});

export const MultiplePopups = () => {
  const dialogModel = useDialogModel();
  const modalModel = useModalModel();

  return (
    <Flex cs={flexStyles}>
      <Popup model={dialogModel}>
        <Popup.Target>Focus Redirect Popup</Popup.Target>
        <Popup.Popper>
          <Popup.Card cs={popupStyles}>
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Heading>Focus Redirect Popup</Popup.Heading>
            <Popup.Body>
              <p>
                This popup uses the dialog model and will allow keyboard focus to escape when users
                press Tab or Shift + Tab.
              </p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={modalModel}>
        <Popup.Target>Focus Trap Popup</Popup.Target>
        <Popup.Popper>
          <Popup.Card cs={popupStyles}>
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Heading>Focus Trap Popup</Popup.Heading>
            <Popup.Body>
              <p>
                This popup uses the modal model and will trap keyboard focus when users press Tab or
                Shift + Tab.
              </p>
            </Popup.Body>
            <Flex>
              <Popup.CloseButton>OK</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Flex>
  );
};
