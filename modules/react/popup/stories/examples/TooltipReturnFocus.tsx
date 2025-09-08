import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {menuGroupIcon} from '@workday/canvas-system-icons-web';

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
