import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const WithActionLinkAndCloseIcon = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <Toast mode="dialog" aria-label="notification">
      <Toast.Icon icon={checkIcon} cs={{color: system.color.fg.success.default}} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully</Toast.Message>
        <Toast.Link href="#hyperlink">Custom Link</Toast.Link>
      </Toast.Body>
      <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
    </Toast>
  );
};
