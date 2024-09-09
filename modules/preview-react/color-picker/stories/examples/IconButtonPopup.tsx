import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {
  Popup,
  usePopupModel,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {bgColorIcon} from '@workday/canvas-system-icons-web';
import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {changeFocus} from '@workday/canvas-kit-react/common';

export const IconButtonPopup = () => {
  const model = usePopupModel();
  const [color, setColor] = React.useState('');

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const handleSubmit = React.useCallback(
    (submitColor: string) => {
      setColor(submitColor.toUpperCase());
      model.events.hide();
      changeFocus(model.state.targetRef.current);
    },
    [model.events, model.state.targetRef]
  );

  return (
    <Popup model={model}>
      <Popup.Target as={TertiaryButton} icon={bgColorIcon} aria-label="Select Background Color" />
      <Popup.Popper>
        <Popup.Card marginTop="xxs" padding="s" depth={3}>
          <Popup.Body>
            <ColorPicker
              resetColor={colors.blueberry400}
              resetLabel={'Reset'}
              showCustomHexInput={true}
              onColorChange={handleSubmit}
              onColorReset={() => handleSubmit(colors.blueberry400)}
              onSubmitClick={model.events.hide}
              value={color}
            />
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
