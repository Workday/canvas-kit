import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  width: px2rem(400),
  height: px2rem(400),
  overflow: 'scroll',
  padding: system.padding.xxs,
  '& > div': {
    width: px2rem(950),
    '& > p:first-child': {
      marginBlockEnd: px2rem(400),
    },
  },
});

export const ReturnFocusTest = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <div className={containerStyles} data-testid="scroll-area">
      <div>
        <p>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <FormField id="return-focus-text-input" cs={{marginInlineStart: px2rem(400)}}>
            <FormField.Label>Name</FormField.Label>
            <FormField.Input as={TextInput} />
          </FormField>
          <Flex cs={{marginBlockEnd: px2rem(400), marginInlineStart: px2rem(410)}}>
            <SecondaryButton id="return-focus-button-tabindex" tabIndex={-1}>
              Button with TabIndex=-1
            </SecondaryButton>
            <Popup.Target data-testid="target">Open Popup</Popup.Target>
          </Flex>
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
                  <li>
                    <TertiaryButton
                      data-testid="focus-text-input-link"
                      onClick={() => {
                        model.events.hide();
                        document.getElementById('input-return-focus-text-input').focus();
                      }}
                    >
                      You click this link
                    </TertiaryButton>
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
