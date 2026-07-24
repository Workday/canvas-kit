import {cardStencil} from '@workday/canvas-kit-react/card';
import {Toast} from '@workday/canvas-kit-react/toast';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  return (
    <Toast>
      <Toast.Icon icon={checkIcon} color={system.color.brand.fg.positive.default} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
    </Toast>
  );
};
