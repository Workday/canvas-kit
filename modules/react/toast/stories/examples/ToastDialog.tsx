import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const ToastDialog = () => (
  <Toast mode="dialog" aria-label="notification">
    <Toast.Icon icon={checkIcon} color="greenApple400" />
    <Toast.Body>
      <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      <Toast.Link href="#hreflink">Custom Link</Toast.Link>
    </Toast.Body>
  </Toast>
);
