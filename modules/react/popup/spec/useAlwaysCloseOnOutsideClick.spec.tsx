import {renderHook} from '@testing-library/react-hooks';
import {
  useAlwaysCloseOnOutsideClick,
  usePopupModel,
  PopupModel,
} from '@workday/canvas-kit-react/popup';

describe('useAlwaysCloseOnOutsideClick', () => {
  it('should add "data-behavior-click-outside-close=topmost" attribute', () => {
    let model: PopupModel;
    renderHook(() => {
      model = usePopupModel({initialVisibility: 'visible'});
      (model.state.stackRef as React.MutableRefObject<
        HTMLDivElement
      >).current = document.createElement('div');
      useAlwaysCloseOnOutsideClick(model);
    });

    expect(model.state.stackRef.current).toHaveAttribute(
      'data-behavior-click-outside-close',
      'always'
    );
  });
});
