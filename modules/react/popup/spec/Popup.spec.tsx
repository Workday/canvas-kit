import {renderToString} from 'react-dom/server';

import {
  usePopupModel,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useInitialFocus,
  useReturnFocus,
  Popup,
} from '@workday/canvas-kit-react/popup';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

describe('Popup', () => {
  it('should render on a server without crashing', () => {
    const Simple = () => {
      const model = usePopupModel();

      useCloseOnOutsideClick(model);
      useCloseOnEscape(model);
      useInitialFocus(model);
      useReturnFocus(model);

      return (
        <Popup model={model}>
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <Popup.Popper placement={'bottom'}>
            <Popup.Card cs={{width: 400, padding: cssVar(system.space.x4)}}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading>Delete Item</Popup.Heading>
              <Popup.Body>
                <p>Are you sure you'd like to delete the item titled 'My Item'?</p>

                <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      );
    };

    const ssrRender = () => renderToString(<Simple />);

    expect(ssrRender).not.toThrow();
  });
});
