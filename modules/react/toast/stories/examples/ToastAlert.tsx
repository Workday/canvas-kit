import {Toast} from '@workday/canvas-kit-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const ToastAlert = () => (
  <Toast mode="alert">
    <Toast.Icon icon={exclamationCircleIcon} cs={{color: system.color.fg.warning.default}} />
    <Toast.Body>
      <Toast.Message>There was an error with your workbook.</Toast.Message>
    </Toast.Body>
  </Toast>
);
