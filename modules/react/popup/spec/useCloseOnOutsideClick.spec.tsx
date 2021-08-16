import {renderHook} from '@testing-library/react-hooks';
import {useCloseOnOutsideClick, usePopupModel, PopupModel} from '@workday/canvas-kit-react/popup';

describe('useCloseOnOutsideClick', () => {
  it('should add "data-behavior-click-outside-close=topmost" attribute', () => {
    let model: PopupModel;
    renderHook(() => {
      model = usePopupModel({initialVisibility: 'visible'});
      (model.state.stackRef as React.MutableRefObject<
        HTMLDivElement
      >).current = document.createElement('div');
      useCloseOnOutsideClick(model);
    });

    expect(model.state.stackRef.current).toHaveAttribute(
      'data-behavior-click-outside-close',
      'topmost'
    );
  });
});
