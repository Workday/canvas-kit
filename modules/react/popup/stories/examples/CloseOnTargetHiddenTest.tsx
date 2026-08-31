import {
  Popup,
  useCloseOnEscape,
  useCloseOnTargetHidden,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  width: px2rem(400),
  height: px2rem(400),
  overflow: 'scroll',
  padding: system.padding.xxs,
  position: 'relative',
  '& > div': {
    width: px2rem(950),
    height: px2rem(950),
    '& > p:first-child': {
      marginBlockEnd: px2rem(400),
    },
  },
});

const popupInnerStyles = createStyles({
  position: 'absolute',
  width: px2rem(950),
  height: px2rem(950),
  display: 'flex',
  top: 0,
  left: 0,
  justifyContent: 'center',
});

export const CloseOnTargetHiddenTest = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useCloseOnTargetHidden(model);

  return (
    <div className={containerStyles} data-testid="scroll-area">
      <div>
        <p>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <div className={popupInnerStyles}>
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
