import {
  Popup,
  useCloseOnEscape,
  useCloseOnTargetHidden,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export const CloseOnTargetHiddenTest = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useCloseOnTargetHidden(model);

  return (
    <div
      style={{width: 400, height: 400, overflow: 'scroll', padding: 4, position: 'relative'}}
      data-testid="scroll-area"
    >
      <div style={{width: 950, height: 950}}>
        <p style={{marginBottom: 400}}>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <div
            style={{
              position: 'absolute',
              width: 950,
              height: 950,
              display: 'flex',
              top: 0,
              left: 0,
              justifyContent: 'center',
            }}
          >
            <Popup.Target data-testid="target" style={{alignSelf: 'center'}}>
              Open Popup
            </Popup.Target>
          </div>
          <Popup.Popper>
            <Popup.Card>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Body>
                <p>
                  Scroll in any direction. The popup should close when at least 50% of the target
                  button is hidden from view
                </p>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </div>
    </div>
  );
};
